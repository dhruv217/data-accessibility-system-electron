import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-fuelflow-gauge',
  templateUrl: './fuelflow-gauge.component.html',
  styleUrls: ['./fuelflow-gauge.component.scss']
})
export class FuelflowGaugeComponent implements OnChanges{

  @Input() value: string;
  @Input() screenHeight: number;
  @Input() screenwidth: number;

  height= 300;
  width= 300;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes) {
    if(changes) {
      if (changes.screenHeight || changes.screenwidth) {
        console.log(changes.screenHeight);
        const deltaHeight = Math.floor(changes.screenHeight.currentValue / 1080 * 100);
        const deltaChange = 300 + Math.floor(300 * (deltaHeight - 100) / 100);
        this.height = deltaChange;
        this.width = deltaChange;
      }
      this.cdr.detectChanges();
    }
  }
}

