import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-large-temprature-gauge',
  templateUrl: './large-temprature-gauge.component.html',
  styleUrls: ['./large-temprature-gauge.component.scss']
})
export class LargeTempratureGaugeComponent implements OnChanges{

  @Input() value: string;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
