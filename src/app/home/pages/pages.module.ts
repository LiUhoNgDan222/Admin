import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages.routing.module';
import { PagesComponent } from './pages.component';

import { SharedUiModule } from '../../shared/shared-ui.module';
import { SharedComponentsModule } from '../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    PagesComponent
  ]
})

export class PagesModule { }
