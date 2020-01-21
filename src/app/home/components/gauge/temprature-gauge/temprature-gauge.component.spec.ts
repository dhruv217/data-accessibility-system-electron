import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempratureGaugeComponent } from './temprature-gauge.component';

describe('TempratureGaugeComponent', () => {
  let component: TempratureGaugeComponent;
  let fixture: ComponentFixture<TempratureGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempratureGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempratureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
