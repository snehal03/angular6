/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { ButtonsComponent } from './buttons.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ButtonsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsRoutingModule { }
