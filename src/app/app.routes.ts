import { Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { RegistartionComponent } from '../components/registartion/registartion.component';

import { AdminHomepageComponent } from '../components/admin/admin-homepage/admin-homepage.component';
import { BookingComponent } from '../components/customer/booking/booking.component';
import { BookingTrackingCustomerComponent } from '../components/customer/booking-tracking-customer/booking-tracking-customer.component';
import { StatusUpdateComponent } from '../components/admin/status-update/status-update.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'register',
        component:RegistartionComponent,
    },
    {
        path:'admin-home',
        component:AdminHomepageComponent
    },
     {
        path:'customer-booking',
        component:BookingComponent
    },
    {
        path:'tracking-customer',
        component:BookingTrackingCustomerComponent
    },
    {
        path:'status-update',
        component:StatusUpdateComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent
    }
];
