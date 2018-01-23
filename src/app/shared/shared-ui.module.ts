import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
// import { ToastrModule } from 'ngx-toastr';
import { Daterangepicker } from 'ng2-daterangepicker';
// modal
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    // ToastrModule.forRoot(),
    Daterangepicker,
    NgbModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgxDatatableModule,
    // ToastrModule,
    Daterangepicker
  ]
})
export class SharedUiModule { }
