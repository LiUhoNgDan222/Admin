import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { LogoutRoutingModule } from './logout.routing.module';
import { LogoutComponent } from './logout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LogoutRoutingModule
  ],
  declarations: [LogoutComponent]
})
export class LogoutModule { }
