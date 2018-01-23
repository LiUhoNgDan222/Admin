import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login.routing.module';
import { LoginComponent } from './login.component';

import { SharedUiModule } from '../../shared/shared-ui.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    SharedUiModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
