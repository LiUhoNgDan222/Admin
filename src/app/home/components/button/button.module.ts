import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ButtonRoutingModule} from './button.routing.module';
import {ButtonComponent} from './button.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    ButtonRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    ButtonComponent
  ]
})
export class ButtonModule {
}

