import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeTempratureGaugeComponent } from './large-temprature-gauge.component';

describe('LargeTempratureGaugeComponent', () => {
  let component: LargeTempratureGaugeComponent;
  let fixture: ComponentFixture<LargeTempratureGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeTempratureGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeTempratureGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
