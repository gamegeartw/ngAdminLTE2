import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlinkDirective } from './alink.directive';
import { BlockUIModule } from 'ng-block-ui';
import { LoginComponent } from './login/login.component';

import { AppheaderComponent } from './components/appheader/appheader.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './modules/main/main.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import {ToastrModule} from "ngx-toastr";
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {HttpClient} from "@angular/common/http";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    AlinkDirective,
    LoginComponent,
    AppheaderComponent,
    SideBarComponent,
    FooterComponent,
    MainComponent,
    BreadCrumbComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BlockUIModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  exports: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
