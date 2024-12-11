import { TestBed } from '@angular/core/testing';

import { TimetableSlotsService } from './timetableslots.service';

describe('TimetableService', () => {
  let service: TimetableSlotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetableSlotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
