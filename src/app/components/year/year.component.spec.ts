import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearComponent } from './year.component';

describe('YearComponent', () => {
  let component: YearComponent;
  let fixture: ComponentFixture<YearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
