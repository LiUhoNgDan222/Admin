import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './home.component';

import { SharedUiModule } from '../shared/shared-ui.module';
import { SharedComponentsModule } from '../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    HomeComponent
  ]
})

export class HomeModule { }
