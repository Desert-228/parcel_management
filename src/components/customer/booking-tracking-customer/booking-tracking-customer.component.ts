import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-booking-tracking-customer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './booking-tracking-customer.component.html',
  styleUrl: './booking-tracking-customer.component.css'
})
export class BookingTrackingCustomerComponent {
  errorMessage:string = "Boooking Not found";
  customerId:number=123456;
}
