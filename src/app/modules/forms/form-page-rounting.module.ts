/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'templateDriven',
        component: TemplateDrivenComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormPageRoutingModule { }
