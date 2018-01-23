import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account.routing.module';
import { AccountComponent } from './account.component';

import { SharedUiModule } from '../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedUiModule
  ],
  declarations: [
    AccountComponent
  ]
})
export class AccountModule { }
