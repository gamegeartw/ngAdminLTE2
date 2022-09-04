import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {BlockUI, BlockUIService, NgBlockUI} from "ng-block-ui";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI | undefined;
  constructor(
    private route:Router,

    private activeRouter:ActivatedRoute) {
    console.log(this.route);
    console.log(this.activeRouter);
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
