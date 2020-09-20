import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAfterComponent } from './booking-after.component';

describe('BookingAfterComponent', () => {
  let component: BookingAfterComponent;
  let fixture: ComponentFixture<BookingAfterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingAfterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
