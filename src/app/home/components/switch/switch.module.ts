import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SwitchRoutingModule} from './switch.routing.module';
import {SwitchComponent} from './switch.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    SwitchRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    SwitchComponent
  ]
})
export class SwitchModule {
}

