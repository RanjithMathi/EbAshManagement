import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap'; 


@Component({
  selector: 'app-free-customer',
  templateUrl: './free-customer.component.html',
  styleUrls: ['./free-customer.component.scss']
})
export class FreeCustomerComponent implements OnInit {
  monthReport = new Date();
  closeResult: string;
  mytime: Date = new Date();
  timepickerVisible = false;
  constructor(private modalService: NgbModal) { }
  onOpenCalendar(container) {
    container.monthSelectHandler = (event: any): void => {
      container._store.dispatch(container._actions.select(event.date));
    };     
    container.setViewMode('month');
   }
  ngOnInit() {
  }
  model = new Hero();

  submitted = false;

  onInvoicePrevMonth() { 
    alert(this.model)
    this.submitted = true; }

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