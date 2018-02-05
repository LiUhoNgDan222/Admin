import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeaderComponent} from './components/header/header.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DateRangePickerComponent} from './components/date-range-picker/date-range-picker.component';
import {DatePickerComponent} from './components/date-picker/date-picker.component';
import {DateTimePickerComponent} from './components/date-time-picker/date-time-picker.component';
import {DateAndTimePickerComponent} from './components/date-and-time-picker/date-and-time-picker.component';

import {SharedUiModule} from './shared-ui.module';

// modal
import { ConfirmComponent } from './components/modal/confirm.component';
import { AlertComponent} from './components/modal/alert.component';


@NgModule({
  imports: [
    CommonModule,
    SharedUiModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    DateRangePickerComponent,
    ConfirmComponent,
    AlertComponent,
    DatePickerComponent,
    DateTimePickerComponent,
    DateAndTimePickerComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    DateRangePickerComponent,
    DatePickerComponent,
    DateTimePickerComponent,
    DateAndTimePickerComponent
  ],
  entryComponents: [ConfirmComponent, AlertComponent]
})
export class SharedComponentsModule {
}
