import { TestBed } from '@angular/core/testing';

import { SharedproductService } from './sharedproduct.service';

describe('SharedproductService', () => {
  let service: SharedproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
