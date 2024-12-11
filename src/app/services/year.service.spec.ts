import { TestBed } from '@angular/core/testing';

import { YearService } from './year.service';

describe('YearService', () => {
  let service: YearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
