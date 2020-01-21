import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirflowGaugeComponent } from './airflow-gauge.component';

describe('AirflowGaugeComponent', () => {
  let component: AirflowGaugeComponent;
  let fixture: ComponentFixture<AirflowGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirflowGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirflowGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
