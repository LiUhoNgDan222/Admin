import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { AuthGuardService } from '../shared/base_service/auth-guard.service';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuardService],
    children: [{
      path: '',
      children: [
        { path: '', loadChildren: './index/index.module#IndexModule' }
      ]
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
