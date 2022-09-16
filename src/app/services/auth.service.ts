import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,  private router: Router) { }

  Login(user:string,password:string):void{
    // TODO: Login by your self and get something
    localStorage.setItem('token','token');
  }
}
