import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { AjaxService } from '../ajax.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  @ViewChild('loginModal')
  private loginModalOpen: TemplateRef<any>;

  closeResult: string;
  currentDate: Date;
  plants = [];
  flyAshAvailabilityQty = [];
  isOTPGenerated: boolean;
  public userType: string;
  userModel = new User();
  availableCount:any;

  constructor(private modalService: NgbModal, private router: Router, private ajaxService: AjaxService,
    private toastr: ToastrService) { }

  ngOnInit() {

    // this.plants = [{ name: "NCTPS Stage I", qty: "10000 MT" }, { name: "NCTPS Stage II", qty: "*000 MT" }, { name: "NCTPS I", qty: "60000 MT" }];
    this.currentDate = new Date();

    this.ajaxService.getMethod("allAvailable").subscribe(
      data=>{
        this.plants = Object.values(data);
      
      },error=>{
      
      }
          )

          this.ajaxService.getMethod("getVailableCount").subscribe(
            data=>{
            this.ajaxService.availSerCount = data;
            },error=>{
            
            }
                )

          
  }

  registerPaidUser() {
    if (this.userType === "paid") {
      this.userModel.role = 'paid-customer';
    } else if (this.userType === "free") {
      this.userModel.role = 'free-customer';
    } else if (this.userType === "admin") {
      this.userModel.role = 'admin';
    }
    console.log("usermodel : ", this.userModel);
    this.ajaxService.postMethod("userRegister", this.userModel).subscribe(
      data => {
        if(data[0].toString() === 'user registered successfully'){
          this.toastr.success(data[0].toString(),"success");
          this.isOTPGenerated = false;
          this.modalService.open(this.loginModalOpen);
        }else if(data[0].toString() === 'Please provide unique email'){
          this.toastr.error(data[0].toString(),"error");
        }else{
          this.toastr.error(data[0].toString(),"error")
        }
        
      }, error => {
        console.log("error : ", error);

      }
    )
  }

  loginUser() {
    if (this.userType === "paid") {
      this.userModel.role = 'paid-customer';
    } else if (this.userType === "free") {
      this.userModel.role = 'free-customer';
    } else if (this.userType === "admin") {
      this.userModel.role = 'admin';
    }
    console.log("login usermodel : ", this.userModel);
    this.ajaxService.postMethod("loginUser", this.userModel).subscribe(
      data => {
        this.ajaxService.authenticated = data.toString() ? true : false;
        if (data) {
          this.ajaxService.updEmail = this.userModel.email;
          this.modalService.dismissAll();
          if (this.userType === "paid") {
            this.router.navigate(['/paid-customer']);
          } else if (this.userType === "free") {
            this.router.navigate(['/free-customer']);
          } else if (this.userType === "admin") {
            this.router.navigate(['/admin']);
          }
        }
        else{
          this.toastr.error("Email and password incorrect","error");
        }

      }, error => {
        console.log("error : ", error);
      }
    )

  }

  isRegister() {
    console.log("is reg");
    this.isOTPGenerated = true;
  }
  generateOTP() {
    // this.isOTPGenerated = true;
  }
  isLogin() {
    this.isOTPGenerated = false;
  }

  login() {
    this.isOTPGenerated = false;
    if (this.userType === "paid") {
      this.router.navigate(['/paid-customer']);
    } else if (this.userType === "free") {
      this.router.navigate(['/free-customer']);
    } else if (this.userType === "admin") {
      this.router.navigate(['/admin']);
    }
  }

  register() {
    this.isOTPGenerated = false;
    console.log("lkfnrugntr");
    if (this.userType === "paid") {
      this.router.navigate(['/paid-customer']);
    } else if (this.userType === "free") {
      this.router.navigate(['/free-customer']);
    } else if (this.userType === "admin") {
      this.router.navigate(['/admin']);
    }
  }

  open(content, loginUserType) {
    this.userType = loginUserType;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.isOTPGenerated = false;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}


export class User {
  public id: number;
  public userName: String;
  public password: String;
  public email: string;
  public phone: String;
  public role: String;
}