import { TestBed, inject } from '@angular/core/testing';

import { GeoIpService } from './geo-ip.service.spec.ts';

describe('GeoIpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoIpService]
    });
  });

  it('should be created', inject([GeoIpService], (service: GeoIpService) => {
    expect(service).toBeTruthy();
  }));
});
