import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AjaxService } from '../ajax.service';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _router: Router, private ajaxService: AjaxService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log("this.ajaxService.isAuthenticated() : ", this.ajaxService.authenticated);

    if (this.ajaxService.authenticated == true) {
      return true;
    }

    // navigate to login page
    this._router.navigate(['/login']);
    // you can save redirect url so after authing we can move them back to the page they requested
    return false;
  }


}