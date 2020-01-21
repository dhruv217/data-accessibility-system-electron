import { Component, HostListener } from "@angular/core";
import { map } from "rxjs/operators";
import {
  SerialDeviceStates,
  SerialDeviceService
} from "../../../services/serial-device.service";
import { SensorsDataStoreService } from "../../../services/sensors-data-store.service";

@Component({
  selector: "app-all-gauges",
  templateUrl: "./all-gauges.component.html",
  styleUrls: ["./all-gauges.component.scss"]
})
export class AllGaugesComponent {
  isConnectedToSerialDevice = this.serialDevicesService.state.pipe(
    map(x => x === SerialDeviceStates.Connected)
  );

  sensorsData$ = this.sensorsDataStore.currentData$;

  scrHeight: number;
  scrWidth: number;

  @HostListener("window:resize", ["$event"])
  getScreenSize() {
    this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  constructor(
    private serialDevicesService: SerialDeviceService,
    private sensorsDataStore: SensorsDataStoreService
  ) {
    this.getScreenSize();
  }
}
