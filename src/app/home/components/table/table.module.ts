import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TableRoutingModule} from './table.routing.module';
import {TableComponent} from './table.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    TableRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    TableComponent
  ]
})
export class TableModule {
}

