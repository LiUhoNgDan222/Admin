import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {PagesComponent} from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      {path: 'profile', loadChildren: './profile/profile.module#ProfileModule'},
      {path: 'mail', loadChildren: './mail/mail.module#MailModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {
}
