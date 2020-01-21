import { Injectable, OnInit, OnDestroy } from "@angular/core";
import SerialPort from "serialport";
import Readline from "@serialport/parser-readline";

import { BehaviorSubject, Observable, from, timer, Subscription } from "rxjs";
import { SensorsDataStoreService } from "./sensors-data-store.service";
import { Router } from "@angular/router";
import { skipWhile, switchMap, map, tap, filter } from "rxjs/operators";
import { ElectronService } from "../../core/services";

@Injectable({
  providedIn: "root"
})
export class SerialDeviceService implements OnInit, OnDestroy {
  state = new BehaviorSubject<SerialDeviceStates>(SerialDeviceStates.Initial);
  serialport: typeof SerialPort;
  private connection: typeof SerialPort;
  private AvaliablePortsSubscription: Subscription;
  private connectionDevice: SerialDevice;

  avaliableSerialPorts$ = timer(0, 1500).pipe(
    filter(x => this.state.value === SerialDeviceStates.Disconnected),
    switchMap(x => this.getSerialPorts$),
    map((x: SerialDevice[]) =>
      x.filter(c =>
        c.manufacturer ? c.manufacturer.indexOf("Arduino") > -1 : false
      )
    )
  );

  get isElectron(): boolean {
    return window && window.process && window.process.type;
  }

  private get getSerialPorts$(): Observable<{}> {
    return from(this.serialport.list());
  }

  constructor(
    private sensorsDataStore: SensorsDataStoreService,
    private electron: ElectronService,
    private router: Router
  ) {
    if (this.isElectron) {
      this.serialport = window.require("serialport");
      if (this.state.value === SerialDeviceStates.Initial) {
        this.router.navigateByUrl("/home");
        this.state.next(SerialDeviceStates.Disconnected);
      }
    }
  }

  ngOnInit() {
    this.AvaliablePortsSubscription = this.avaliableSerialPorts$.subscribe();
  }
  ngOnDestroy() {
    this.AvaliablePortsSubscription.unsubscribe();
  }

  startConnection(device: SerialDevice) {
    if (this.isElectron) {
      let data_index = 0;
      this.connectionDevice = device;
      this.connection = new this.serialport(device.path, { baudRate: 9600 });
      this.connection.on("open", event => {
        console.log("Connected !!", event);
        this.state.next(SerialDeviceStates.Connected);
        this.router.navigateByUrl("/home/gauges");
      });
      this.connection.on("error", e =>
        console.log("Error with connection :", e)
      );
      this.connection.on("close", c => {
        console.log("Connection closed !!", c);
        this.state.next(SerialDeviceStates.Disconnected);
        this.electron.remote.dialog.showErrorBox(
          "Device Disconnected.",
          `The Device Connected on port ${device.path}, was disconnected unexpectedly!`
        );
        this.router.navigateByUrl("/home");
      });
      const parser = this.connection.pipe(new Readline());
      parser.on("data", x => {
        if (data_index > 2) {
          this.sensorsDataStore.insertData(x);
        } else {
          data_index++;
        }
      });
    } else console.log("Not on electron.");
  }
}

export enum SerialDeviceStates {
  Initial,
  Disconnected,
  Connected
}

export interface SerialDevice {
  locationId: string;
  manufacturer: string;
  path: string;
  pnpId: string;
  productId: string;
  serialNumber: string;
  vendorId: string;
  comName: string;
}
