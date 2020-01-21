import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-large-temprature-gauge',
  templateUrl: './large-temprature-gauge.component.html',
  styleUrls: ['./large-temprature-gauge.component.scss']
})
export class LargeTempratureGaugeComponent implements OnChanges{

  @Input() value: string;
  @Input() screenHeight: number;
  @Input() screenwidth: number;

  height= 400;
  width= 150;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes) {
    if(changes) {
      if (changes.screenHeight || changes.screenwidth) {
        console.log(changes.screenHeight);
        const deltaHeight = Math.floor(changes.screenHeight.currentValue / 1080 * 100);
        this.height = 400 + Math.floor(400 * (deltaHeight - 100) / 100);
        this.width = 150 + Math.floor(150 * (deltaHeight - 100) / 100);
      }
      this.cdr.detectChanges();
    }
  }
}
