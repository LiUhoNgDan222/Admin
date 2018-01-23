import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {Http} from '@angular/http';

import {ToastrModule} from 'ngx-toastr';

import {AuthService} from './base_service/auth.service';
import {AuthGuardService} from './base_service/auth-guard.service';
import {AccountStorage} from './storage/account.storage';
import {OpenToastrService} from './xincai_service/open-toastr.service';
import {AppApiService} from './base_service/app-api.service';
import {AppConfigService} from './base_service/app-config.service';


// export function createTranslateLoader(http: Http) {
//   return new TranslateHttpLoader(http, './assets/i18n/', '.json');
// }

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    // TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: (createTranslateLoader),
    //     deps: [Http]
    //   }
    // })
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
        OpenToastrService,
        AppApiService,
        AppConfigService
      ]
    };
  }
}
