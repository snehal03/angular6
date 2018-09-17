/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { FilterPipeComponent } from './filter-pipe.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FilterPipeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPipeRoutingModule { }
