import { Component, OnInit } from '@angular/core';
import {Sitemap} from "../../../assets/SiteMap";
import {MenuItem} from "../../../assets/menu-item";
import {FormsModule, NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public menuItems:MenuItem[] = Sitemap;
  constructor(
    private route:Router,
    private translate:TranslateService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onSearch(f: NgForm) {
    console.log(f);
    console.log(f.value.q);

    if(f.valid){
      this.route.navigate(['./Search'], { queryParams: { q: f.value.q } });

    }else{
      this.translate.get(['error','searchError']).subscribe((res)=>{
        this.toastr.error(res["searchError"],res["error"]);
      });


    }

  }
}
