import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Http} from '@angular/http';

import {ToastrModule} from 'ngx-toastr';

import {AuthService} from './base_service/auth.service';
import {AuthGuardService} from './base_service/auth-guard.service';
import {AccountStorage} from './storage/account.storage';
import {OpenToastrService} from './service/open-toastr.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  declarations: [],
  exports: [
    CommonModule,
    RouterModule,
    // TranslateModule
  ]
})
export class SharedServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedServicesModule,
      providers: [
        AuthGuardService,
        AuthService,
        AccountStorage,
        OpenToastrService
      ]
    };
  }
}
