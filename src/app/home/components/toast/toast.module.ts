import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ToastRoutingModule} from './toast.routing.module';
import {ToastComponent} from './toast.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    ToastRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    ToastComponent
  ]
})
export class ToastModule {
}

