import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-reload',
  templateUrl: './reload.component.html',
  styleUrls: ['./reload.component.scss']
})
export class ReloadComponent implements OnInit {

  constructor(private router:Router) {
    this.router.navigate(["./"]);
  }

  ngOnInit(): void {
  }

}
