import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubMenuRoutingModule } from './sub-menu-routing.module';
import { SubMenuComponent } from './sub-menu.component';


@NgModule({
  declarations: [
    SubMenuComponent
  ],
  imports: [
    CommonModule,
    SubMenuRoutingModule
  ]
})
export class SubMenuModule { }
