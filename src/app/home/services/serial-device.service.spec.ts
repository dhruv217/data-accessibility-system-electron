import { TestBed } from '@angular/core/testing';

import { SerialDeviceService } from './serial-device.service';

describe('SerialDeviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SerialDeviceService = TestBed.get(SerialDeviceService);
    expect(service).toBeTruthy();
  });
});
