import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MenuItem} from "../../../menu-item";

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  @Input() menuItem:MenuItem|undefined;
  breadcrumbs:MenuItem[]=[];
  constructor(  ) {

  }

  ngOnInit(): void {
  }

  /**
   * 取得路徑
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges): void {
    this.breadcrumbs = [];

    this.breadcrumbs.push(...this.getBreadcrumbs(this.menuItem)) ;
    this.breadcrumbs.reverse();
    console.log(this.breadcrumbs);
  }

  getBreadcrumbs(item:MenuItem):MenuItem[] {
    let result:MenuItem[]=[];
    if (item==undefined) return result;
    result.push(item);

    if(item.parent===undefined) return result;
    result.push(...this.getBreadcrumbs(item.parent)) ;


    return result;
  }


}
