import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-booking-after',
  templateUrl: './booking-after.component.html',
  styleUrls: ['./booking-after.component.scss']
})
export class BookingAfterComponent implements OnInit {

  private bookingData = [];
  constructor(private ajaxService: AjaxService,
    private toastr: ToastrService,private router: Router) { }

  ngOnInit() {
    this.ajaxService.getMethod("allBooking").subscribe(
      data=>{
        console.log("data",data);
        this.bookingData = Object.values(data);
      },error =>{
        console.log("error",error); 
      }
    )
  }

}
