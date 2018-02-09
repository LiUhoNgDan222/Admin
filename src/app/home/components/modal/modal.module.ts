import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModalRoutingModule} from './modal.routing.module';
import {ModalComponent} from './modal.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    ModalRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    ModalComponent
  ]
})
export class ModalModule {
}

