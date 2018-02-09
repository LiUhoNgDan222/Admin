import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      {path: 'table', loadChildren: './table/table.module#TableModule'},
      {path: 'button', loadChildren: './button/button.module#ButtonModule'},
      {path: 'datepicker', loadChildren: './datepicker/datepicker.module#DatepickerModule'},
      {path: 'switch', loadChildren: './switch/switch.module#SwitchModule'},
      {path: 'toast', loadChildren: './toast/toast.module#ToastModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
