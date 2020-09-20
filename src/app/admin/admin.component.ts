import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 
import { ToastrService } from 'ngx-toastr';
import { AjaxService } from '../ajax.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  availdata = [];bookingData =[];
  avail = new Available();
  constructor(private ajaxService: AjaxService,
    private toastr: ToastrService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.ajaxService.getMethod("allAvailable").subscribe(
data=>{
  this.availdata = Object.values(data);

},error=>{

}
    )
    this.allBooking();
  }


addAvail(){
  this.ajaxService.postMethod("newPlantAvail",this.avail).subscribe(
    data=>{
    this.toastr.success("Plant added successfully","success");
    location.reload();

    },error=>{
      this.toastr.success("Something went wrong","error")
    }
        )
}

allBooking() {
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


export class Available{

  private  plant: string
  private qty: number;

}


// @PostMapping("/newPlantAvail")
// 	@GetMapping("/allAvailable")
  