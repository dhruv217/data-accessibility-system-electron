import { Component } from '@angular/core';
import { timer } from 'rxjs';
import { skipWhile, switchMap, map, tap } from 'rxjs/operators';
import { SerialDeviceStates, SerialDevice, SerialDeviceService } from '../../../services/serial-device.service';
import { SensorsDataStoreService } from '../../../services/sensors-data-store.service';

@Component({
  selector: 'app-all-gauges',
  templateUrl: './all-gauges.component.html',
  styleUrls: ['./all-gauges.component.scss']
})
export class AllGaugesComponent {

  isConnectedToSerialDevice =
    this.serialDevicesService.state.pipe(
      map(x => x === SerialDeviceStates.Connected)
    )

  sensorsData$ = this.sensorsDataStore.currentData$.pipe(
    tap(x => console.log(x))
  )


  constructor(private serialDevicesService: SerialDeviceService, private sensorsDataStore: SensorsDataStoreService) {}


}
