import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-airflow-gauge',
  templateUrl: './airflow-gauge.component.html',
  styleUrls: ['./airflow-gauge.component.scss']
})
export class AirflowGaugeComponent implements OnChanges{

  @Input() value: string;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}
