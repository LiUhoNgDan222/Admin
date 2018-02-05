import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DatepickerRoutingModule} from './datepicker.routing.module';
import {DatepickerComponent} from './datepicker.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    DatepickerRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    DatepickerComponent
  ]
})
export class DatepickerModule {
}

