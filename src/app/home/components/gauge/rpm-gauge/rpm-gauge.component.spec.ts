import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RpmGaugeComponent } from './rpm-gauge.component';

describe('RpmGaugeComponent', () => {
  let component: RpmGaugeComponent;
  let fixture: ComponentFixture<RpmGaugeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RpmGaugeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RpmGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
