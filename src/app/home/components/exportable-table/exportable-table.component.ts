import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import * as XLSX from 'xlsx';
import { SensorsDataStoreService, SensorsData } from '../../services/sensors-data-store.service';
import { ElectronService } from '../../../core/services';

@Component({
  selector: 'app-exportable-table',
  templateUrl: './exportable-table.component.html',
  styleUrls: ['./exportable-table.component.scss']
})
export class ExportableTableComponent implements OnInit, OnDestroy {


  displayedColumns: string[] = [
    'Temprature1',
    'Temprature2',
    'Temprature3',
    'Temprature4',
    'RPM',
    'AirFlow',
    'FuelFlow'
  ];
  dataSource = new MatTableDataSource<SensorsData>();
  private dataSubscription: Subscription;
  sensorsData$ = this.sensorsDataStore.sensorsData$;

  constructor(private sensorsDataStore: SensorsDataStoreService, private electronService: ElectronService) { }

  ngOnInit() {
    this.dataSubscription = this.sensorsDataStore.sensorsData$
      .subscribe(arg => this.dataSource.data = arg);
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  export() {

    const sensors_data = this.dataSource.data.map(x => {
      return {
        Temprature1: x.Temprature1+ ' °C',
        Temprature2: x.Temprature2+ ' °C',
        Temprature3: x.Temprature3+ ' °C',
        Temprature4: x.Temprature4+ ' °C',
        RPM: x.RPM,
        AirFlow: x.AirFlow,
        FuelFlow: x.FuelFlow,
        CreatedAt: new Date(x.CreatedAt).toString()
      }
    });
    console.log('Exporting :', sensors_data);
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(sensors_data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const o = this.electronService.remote.dialog.showSaveDialog({
      title: 'Save file as',
      defaultPath: '~/sensorsdata.xlsx',
			filters: [{
				name: "Spreadsheets",
				extensions: ['xlsx']
			}]
    }).then(result => {
      XLSX.writeFile(wb, result.filePath);
      console.log('done');
    });
    // @ts-ignore:  Argument 'Promise<SaveDialogReturnValue>' is not assignable to 'string'

  }

}
