import { Component, ChangeDetectionStrategy, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-temprature-gauge',
  templateUrl: './temprature-gauge.component.html',
  styleUrls: ['./temprature-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TempratureGaugeComponent implements OnChanges {

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
