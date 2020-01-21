import { Component, ChangeDetectionStrategy, Input, OnChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-temprature-gauge',
  templateUrl: './temprature-gauge.component.html',
  styleUrls: ['./temprature-gauge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TempratureGaugeComponent implements OnChanges {

  @Input() value: string;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }

}
