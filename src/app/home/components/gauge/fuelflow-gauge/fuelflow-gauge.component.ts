import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-fuelflow-gauge',
  templateUrl: './fuelflow-gauge.component.html',
  styleUrls: ['./fuelflow-gauge.component.scss']
})
export class FuelflowGaugeComponent implements OnChanges{

  @Input() value: string;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}

