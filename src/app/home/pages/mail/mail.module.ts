import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MailRoutingModule} from './mail.routing.module';
import {MailComponent} from './mail.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    MailRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    MailComponent
  ]
})
export class MailModule {
}

