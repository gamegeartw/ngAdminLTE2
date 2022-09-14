import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlockUI, BlockUIService, NgBlockUI} from "ng-block-ui";
import {ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI | undefined;
  constructor(
    private translate:TranslateService,
    private route:Router,
    private toastr: ToastrService,
    private activeRouter:ActivatedRoute) {
    console.log("Current Lang=",this.translate.getDefaultLang());
  }

  ngOnInit(): void {
  }

  block() {

    this.blockUI?.start('Loading...'); // Start blocking

    setTimeout(() => {
      this.blockUI?.stop() // Stop blocking
    }, 2000);
  }
}
