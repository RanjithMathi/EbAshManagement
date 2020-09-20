import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { environment } from './../environments/environment';
import { User } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AjaxService {

  public updEmail = "";
  public availSerCount: any ="";

  authenticated:boolean= false;

  public baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }
  
  postMethod(url:string,data: Object){
    return this.http.post(this.baseUrl + url, data);
  }

  getMethod(url:string){
    return this.http.get(this.baseUrl + url);
  }


}
