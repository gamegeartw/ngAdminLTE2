import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient, private toastr: ToastrService, private router: Router) {
  }

  async loginByAuth(email: string, password: string): Promise<void> {
    try {
      const token = await this.httpClient.post<string>('http://localhost:3000/login', {email, password});
      token.subscribe(m => {
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
