import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {distinctUntilChanged, filter, map} from "rxjs/operators";
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  breadcrumbs$: Observable<any>|null=null;
  title: string='';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    console.log(this.router);
    console.log(this.activatedRoute);
    this.breadcrumbs$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged(),
      map(_ => {
        let root: ActivatedRoute = this.activatedRoute.root;
        console.log("test"+root);
        return this.createBreadcrumbs(root);
      })
    );
  }

  createBreadcrumbs(route:any, url: string = '', breadcrumbs:any[] = []):any {
    const children = route.firstChild;

    if (!children) {
      return [...breadcrumbs];
    }

    const routeURL: string = children.snapshot.url
      .map((segment:any) => segment.path)
      .join('/');
    const label = children.snapshot.data['breadcrumb'];
    this.title = children.snapshot.data['title'];

    if(this.title===undefined){
      this.title = label;
    }
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }

    const breadcrumb = {
      label: label,
      params: children.snapshot.params,
      url: routeURL,
    };

    return this.createBreadcrumbs(children, url, [...breadcrumbs, breadcrumb]);
  }

}
