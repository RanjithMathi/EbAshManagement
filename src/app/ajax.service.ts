import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  authenticated:boolean= false;

  public baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  
  postMethod(url:string,data: User){
    return this.http.post(this.baseUrl + url, data);
  }

}
