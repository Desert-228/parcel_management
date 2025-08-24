import { TestBed } from '@angular/core/testing';

import { RegistartionServiceService } from './registartion-service.service';

describe('RegistartionServiceService', () => {
  let service: RegistartionServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistartionServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
