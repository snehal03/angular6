/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'templateDriven',
        component: TemplateDrivenComponent
      },
      {
        path: 'reactive',
        component: ReactiveComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
/***
 * @author - Snehal Dhane
 * Form Routing
 */
export class FormPageRoutingModule { }
