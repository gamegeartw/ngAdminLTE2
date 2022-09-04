import { Component, OnInit } from '@angular/core';
import {Sitemap} from "../../../assets/SiteMap";
import {MenuItem} from "../../../menu-item";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  public menuItems:MenuItem[] = Sitemap;
  constructor() { }

  ngOnInit(): void {
  }

}
