import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelflowGaugeComponent } from './fuelflow-gauge.component';

describe('FuelflowGaugeComponent', () => {
  let component: FuelflowGaugeComponent;
  let fixture: ComponentFixture<FuelflowGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelflowGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelflowGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
