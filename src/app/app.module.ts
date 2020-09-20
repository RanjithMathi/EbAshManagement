import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app.routing';
import { AjaxService } from './ajax.service';
import { PaidCustomerComponent } from './paid-customer/paid-customer.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { TimepickerModule } from 'ngx-bootstrap';
import { FreeCustomerComponent } from './free-customer/free-customer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AuthGuard } from './guards/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';
import { BookingAfterComponent } from './booking-after/booking-after.component';
import { InvoicePdfComponent } from './invoice-pdf/invoice-pdf.component';
import { ReportComponent } from './report/report.component';
 
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
  RouterModule,
    AppRoutingModule,
    NgbModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    NgxCaptchaModule,
    ToastrModule.forRoot()
   
 

  ],
  declarations: [
    AppComponent,
    PaidCustomerComponent,
    FreeCustomerComponent,
    AdminComponent,
    LoginComponent,
    BookingAfterComponent,
    InvoicePdfComponent,
    ReportComponent
  ],
  providers: [AjaxService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
