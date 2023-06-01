import { TestBed } from '@angular/core/testing';

import { IdValueService } from './id-value.service';

describe('IdValueService', () => {
  let service: IdValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
