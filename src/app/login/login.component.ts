import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {ActivatedRoute, Router} from "@angular/router";
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

  constructor(public langService:TranslateService,private route:ActivatedRoute,private router:Router) {

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

  doLang($event: Event) {
    console.log($event.target);
    console.log(this.lang);
    this.langService.setDefaultLang(this.lang);
  }

  doSubmit() {
    console.log(this.user);
    console.log(this.password);
    // TODO: Login Service
    this.router.navigate(["/"]);
  }
}
