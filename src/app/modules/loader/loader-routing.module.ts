/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { LoaderComponent } from './loader.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: LoaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoaderRoutingModule { }
