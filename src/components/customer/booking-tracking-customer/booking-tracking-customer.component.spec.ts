import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTrackingCustomerComponent } from './booking-tracking-customer.component';

describe('BookingTrackingCustomerComponent', () => {
  let component: BookingTrackingCustomerComponent;
  let fixture: ComponentFixture<BookingTrackingCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTrackingCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTrackingCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
