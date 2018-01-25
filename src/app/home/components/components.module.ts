import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components.routing.module';
import { ComponentsComponent } from './components.component';

import { SharedUiModule } from '../../shared/shared-ui.module';
import { SharedComponentsModule } from '../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    ComponentsComponent
  ]
})

export class ComponentsModule { }
