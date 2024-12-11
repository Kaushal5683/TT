import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableSlotsComponent } from './timetableslots.component';

describe('TimetableComponent', () => {
  let component: TimetableSlotsComponent;
  let fixture: ComponentFixture<TimetableSlotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimetableSlotsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimetableSlotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
