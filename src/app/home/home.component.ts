import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { switchMap, map, takeWhile, skipWhile, tap, skip } from 'rxjs/operators';
import { SerialDeviceService, SerialDevice, SerialDeviceStates } from './services/serial-device.service';
import { SensorsDataStoreService } from './services/sensors-data-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  avaliableSerialPorts = this.serialDevicesService.avaliableSerialPorts$;

  isConnectedToSerialDevice =
    this.serialDevicesService.state.pipe(
      map(x => x === SerialDeviceStates.Connected)
    )

  sensorsData$ = this.sensorsDataStore.currentData$.pipe(
    tap(x => console.log(x))
  )


  constructor(private serialDevicesService: SerialDeviceService, private sensorsDataStore: SensorsDataStoreService) {}



  portSelectorValueChange(path){
    this.serialDevicesService.startConnection(path.value);
  }
}
