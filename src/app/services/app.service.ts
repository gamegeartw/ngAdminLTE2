import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {AppConfig} from "../../assets/AppConfig";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  myConfig:AppConfig;
  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) {
  }

  async loginByAuth(email: string, password: string): Promise<void> {
    try {
      this.httpClient.post<string>(this.myConfig.url.apiUrl, {email, password})
        .subscribe(m => {
          localStorage.setItem('token', m);
          this.router.navigate(['/']);
        }
      );

      //await this.getProfile();

    } catch (e) {
      console.log(e);
    }
  }
}
