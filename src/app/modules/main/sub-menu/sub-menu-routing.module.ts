import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubMenuComponent } from './sub-menu.component';

const routes: Routes = [
  { path: '', component: SubMenuComponent },
  { path: 'Blank', loadChildren: () => import('./blank/blank.module').then(m => m.BlankModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubMenuRoutingModule { }
