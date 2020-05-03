import { TestBed } from '@angular/core/testing';

import { CanActivateRouteGaurdService } from './can-activate-route-gaurd.service';

describe('CanActivateRouteGaurdService', () => {
  let service: CanActivateRouteGaurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanActivateRouteGaurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
