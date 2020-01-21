import { Component, OnChanges, ChangeDetectorRef, Input } from '@angular/core';

@Component({
  selector: 'app-rpm-gauge',
  templateUrl: './rpm-gauge.component.html',
  styleUrls: ['./rpm-gauge.component.scss']
})
export class RpmGaugeComponent implements OnChanges{

  @Input() value: string;

  majorTicks= [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges() {
    this.cdr.detectChanges();
  }
}

