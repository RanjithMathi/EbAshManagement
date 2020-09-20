import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-invoice-pdf',
  templateUrl: './invoice-pdf.component.html',
  styleUrls: ['./invoice-pdf.component.scss']
})
export class InvoicePdfComponent implements OnInit {

  invoiceData = [];
  constructor(private ajaxService: AjaxService,
    private toastr: ToastrService,private router: Router,private route: ActivatedRoute) { }

    id: number;
    isFree: string ='';
  private sub: any;


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; 
      this.isFree = params['isFree']; 

   });
   this.getInvoicePdf(this.id);

  }


  getInvoicePdf(bookingId){
    this.ajaxService.getMethod("bookingById/"+bookingId).subscribe(
      data=>{
console.log("bookingId : ",bookingId);
this.invoiceData = Object.values(data);
      },error=>{

      }
    )
  }

}
