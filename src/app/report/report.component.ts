import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  invoiceData = [];
  constructor(private ajaxService: AjaxService,
    private toastr: ToastrService,private router: Router,private route: ActivatedRoute) { }

    id: number;
    url: string;
  private sub: any;


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.url = params['url'];

   });
   this.getInvoicePdf(this.url+"/",this.id);

  }


  getInvoicePdf(url,bookingId){
    var numbookingId = +bookingId; 
    this.ajaxService.getMethod(url+numbookingId).subscribe(
      data=>{
console.log("bookingId : ",bookingId);
this.invoiceData = Object.values(data);
      },error=>{

      }
    )
  }

}
