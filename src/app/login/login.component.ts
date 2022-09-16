import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  lang:string='zh-tw';
  user:string='';
  password:string='';

  constructor(public langService:TranslateService,private route:ActivatedRoute,private router:Router,private authService:AuthService) {
    const browserLang = langService.getBrowserLang();
    langService.use(browserLang.match(/en|zh-cn|zh-tw/) ? browserLang : 'en');
  }

  ngOnInit(): void {
    document.body.className = 'hold-transition login-page';
    $(function () {
      $('input').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
      });
    });
  }


  doSubmit() {
    console.log(this.user);
    console.log(this.password);

    // TODO: Login Service
    this.authService.Login(this.user,this.password);
    this.router.navigate(["./Reload"]);
  }
}
