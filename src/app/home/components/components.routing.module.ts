import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ComponentsComponent} from './components.component';

const routes: Routes = [
  {
    path: '', component: ComponentsComponent,
    children: [
      {path: 'table', loadChildren: './table/table.module#TableModule'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {
}
