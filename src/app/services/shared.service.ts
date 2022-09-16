import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {NavigationEnd, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  /**
   * 訂閱導覽列
   */
  emitChangeTitle = new Subject<string>();

  /**
   * 導覽列Observable
   */
  changeEmittedBreadcrumb$ = this.emitChangeTitle.asObservable();
  constructor(private router: Router) {
    //監聽路由變化,並更新導覽列標題
    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        this.emitChangeBreadcrumb(e.url);
      }
    });
  }

  /**
   * 變更導覽列標題
   * @param change
   */
  emitChangeBreadcrumb(change: string) {
    this.emitChangeTitle.next(change);
  }
}
