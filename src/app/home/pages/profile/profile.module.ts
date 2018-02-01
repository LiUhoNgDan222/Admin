import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProfileRoutingModule} from './profile.routing.module';
import {ProfileComponent} from './profile.component';

import {SharedUiModule} from '../../../shared/shared-ui.module';
import {SharedComponentsModule} from '../../../shared/shared-compoents.module';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedUiModule,
    SharedComponentsModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule {
}

