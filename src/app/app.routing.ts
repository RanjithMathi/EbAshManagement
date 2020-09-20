import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { PaidCustomerComponent } from './paid-customer/paid-customer.component';
import { FreeCustomerComponent } from './free-customer/free-customer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth-guard.service';
import { BookingAfterComponent } from './booking-after/booking-after.component';
import { InvoicePdfComponent } from './invoice-pdf/invoice-pdf.component';
import { ReportComponent } from './report/report.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'paid-customer', component: PaidCustomerComponent, canActivate: [AuthGuard] },
  { path: 'free-customer', component: FreeCustomerComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'booking-after', component: BookingAfterComponent, canActivate: [AuthGuard] },
  { path: 'invoice/:id/:isFree', component: InvoicePdfComponent, canActivate: [AuthGuard] },
  { path: 'report/:id/:url', component: ReportComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
