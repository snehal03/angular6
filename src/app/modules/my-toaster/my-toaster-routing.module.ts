/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { MyToasterComponent } from './my-toaster.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MyToasterComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyToasterRoutingModule { }
