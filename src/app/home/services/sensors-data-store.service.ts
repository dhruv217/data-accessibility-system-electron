import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SensorsDataStoreService {

  private currentData: SensorsData;
  currentData$ = new ReplaySubject<SensorsData>();

  sensorsData$ = new BehaviorSubject<SensorsData[]>([]);

  constructor() { }

  insertData(dataString: string) {

    const dataAr = dataString.trim().split(',');
    this.currentData = {
      Temprature1: this.parseSensorValue('T1', dataAr),
      Temprature2: this.parseSensorValue('T2', dataAr),
      Temprature3: this.parseSensorValue('T3', dataAr),
      Temprature4: this.parseSensorValue('T4', dataAr),
      AirFlow: this.parseSensorValue('AF', dataAr),
      RPM: this.parseSensorValue('RPM', dataAr),
      FuelFlow: this.parseSensorValue('FF', dataAr),
      CreatedAt: Date.now()
    } as SensorsData;
    this.currentData$.next(this.currentData);
    const vals = this.sensorsData$.value;
    if (vals.length > 4999) vals.shift();
    vals.push(this.currentData);
    this.sensorsData$.next(vals);
  }

  parseSensorValue(nameMatch: string, dataAr: string[]) {
    return dataAr.reduce((selectedString, currentString) => {
      if(currentString.indexOf(nameMatch) > -1) {
        return currentString.split('-')[1];
      }
      return selectedString;
    }, '')
  }
}

export interface SensorsData {
  Temprature1: string;
  Temprature2: string;
  Temprature3: string;
  Temprature4: string;
  AirFlow: string;
  RPM: string;
  FuelFlow: string;
  CreatedAt: number;
}
