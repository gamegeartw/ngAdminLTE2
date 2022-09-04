import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./modules/main/main.component";

const routes: Routes = [
  {path: '', component:MainComponent,  children:[
      { path: '',data:{breadcrumb:'DashBoard',title:'DashBoard'}, loadChildren: () => import('./modules/main/dash-board/dash-board.module').then(m => m.DashBoardModule) },
      { path: 'SubMenu', loadChildren: () => import('./modules/main/sub-menu/sub-menu.module').then(m => m.SubMenuModule) },
      { path: 'Page1', loadChildren: () => import('./modules/main/page1/page1.module').then(m => m.Page1Module) },
    ]},
  {path: 'login', component:LoginComponent,  pathMatch: 'full'},


  {path: '**', redirectTo: '/'},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
