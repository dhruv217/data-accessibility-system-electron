import { TestBed } from '@angular/core/testing';

import { SensorsDataStoreService } from './sensors-data-store.service';

describe('SensorsDataStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SensorsDataStoreService = TestBed.get(SensorsDataStoreService);
    expect(service).toBeTruthy();
  });
});
