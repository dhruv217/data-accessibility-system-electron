import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllGaugesComponent } from './all-gauges.component';

describe('AllGaugesComponent', () => {
  let component: AllGaugesComponent;
  let fixture: ComponentFixture<AllGaugesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllGaugesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllGaugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
