import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingTrackingAdminComponent } from './booking-tracking-admin.component';

describe('BookingTrackingAdminComponent', () => {
  let component: BookingTrackingAdminComponent;
  let fixture: ComponentFixture<BookingTrackingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingTrackingAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingTrackingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
