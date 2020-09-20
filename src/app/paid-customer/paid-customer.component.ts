import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-paid-customer',
  templateUrl: './paid-customer.component.html',
  styleUrls: ['./paid-customer.component.scss']
})
export class PaidCustomerComponent implements OnInit {
  monthReport = new Date();
  companyDetails = new CompanyDetails();
  bookingModel = new  BookingModel();
  closeResult: string;
  mytime: Date = new Date();
  timepickerVisible = false;
  availQty:any="";
  constructor(private modalService: NgbModal,private ajaxService: AjaxService,
    private toastr: ToastrService,private router: Router) { }
  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
   }
  ngOnInit() {
    this.getCompanyDetails();
    console.log("this.ajaxService.availSerCount : ",this.ajaxService.availSerCount);
    this.availQty = this.ajaxService.availSerCount;
    
  }
  model = new Hero();

  submitted = false;

 
  onBooking(){
console.log("this.bookingModel : ",this.bookingModel);
this.bookingModel.updateMailAddress = this.ajaxService.updEmail;
this.bookingModel.isPaidUser = true;
this.ajaxService.postMethod("newBooking",this.bookingModel).subscribe(
  data =>{
console.log(data);
this.modalService.dismissAll();
this.toastr.success("New pickup booked","Success");
this.router.navigate(['/booking-after']);
  },error=>{
console.log(error);
this.toastr.error("SOmething went wrong","error");
  }
)
          
  }
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }

    CompanyUpdate(){
      this.companyDetails.updateUserEmailAddress = this.ajaxService.updEmail;
      this.ajaxService.postMethod("companyRegister",this.companyDetails).subscribe(
        data=>{

        },error =>{

        }
      )
    }

    bookingDetails(){
      this.router.navigate(['/booking-after']);
    }

    getCompanyDetails(){
      this.ajaxService.getMethod("getCompanybyUser/"+this.ajaxService.updEmail).subscribe(
        data=>{
          console.log("data : ",data);
          
          let arrData= Object.values(data);
          this.companyDetails.nameOfCompany = arrData[0].nameOfCompany
         
        },error=>{

        }
      )
    }



    getInvoice(id){
      this.submitted = true; 
       this.router.navigate(['/invoice', id,'paid']);
    }


    getReportPaid(monthReport){

      console.log("monthReport :"+monthReport);
      var date = new Date(monthReport);
console.log(date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate());
var month = date.getMonth();
var numberMonth = +month + 1;
this.router.navigate(['/report', numberMonth,"bookingByIdMonth"]);
      // this.ajaxService.getMethod("bookingByIdMonth/"+numberMonth).subscribe(
      //   data => {
      //     console.log("data : ",data);
          
      //   },error=>{
      //     console.log("data : ",error);

      //   }
      // )
    }

}

export class Hero {

  constructor(
   
  ) {  
    
  }

  public id: number;
  public name: string;
  public alterEgo?: string;

}

export interface IDatetimePopupButtonOptions {
  // should the button be shown
  show: boolean;

  // What text label should it be given
  label: string;

  // css classes to be used, default is 'btn btn-sm btn-secondary'
  cssClass: string;
}



export class CompanyDetails {
  public id: number;
  public nameOfCompany: String;
  public address: String;
  public gstNumber: String;
  public contactNumber: String;
  public emailAddress: String;
  public updateUserEmailAddress: String;
}

export class BookingModel {
  public id: number;
  public bookingDate: Date;
  public bookingTimeFrom: Date;
  public bookingTimeTo: Date;
  public qty: string;
  public updateMailAddress: string;
  public isPaidUser: Boolean;
}