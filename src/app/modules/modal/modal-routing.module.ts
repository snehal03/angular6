/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { ModalComponent } from './modal.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ModalComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalRoutingModule { }
