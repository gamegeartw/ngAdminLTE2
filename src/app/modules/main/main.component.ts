import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../services/shared.service";
import {from, last} from "rxjs";
import {Sitemap} from "../../../assets/SiteMap";
import {MenuItem} from "../../../assets/menu-item";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = '';
  subTitle = '';
  path: string[] = [];
  sitemap = Sitemap;
  menuItem: MenuItem|undefined;
  constructor(private sharedService: SharedService) {
    console.log("Sitemap",this.sitemap);
    // 註冊導覽列
    this.sharedService.changeEmittedBreadcrumb$.subscribe(
      change => {
        console.log("change=", change);
        let mainItem={
          name: 'Home',
          subTitle: 'Home',
          iconClasses: 'fa fa-home',
        };
        let items = this.getItems(mainItem,this.sitemap);
        console.log("items=", items);

        let item = items.find(item => change.split("?")[0]=== item.path?.join('/'));
        console.log("item=", item);
        this.menuItem=item;
      }
    );
  }

  getItems(parentItem:MenuItem, items: MenuItem[]|undefined): MenuItem[] {
    let result: MenuItem[] = [];
    if (items===undefined) return result;
    items.forEach(item => {
      item.parent= parentItem;
      result.push(item);
      result.push(...this.getItems(item,item.children));
    });
    return result;
  }

  ngOnInit(): void {
    document.body.className = "hold-transition skin-blue sidebar-mini";
  }

}
