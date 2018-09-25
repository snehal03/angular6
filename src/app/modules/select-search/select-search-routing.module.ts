/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { SelectSearchComponent } from './select-search.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SelectSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectSearchRoutingModule { }
