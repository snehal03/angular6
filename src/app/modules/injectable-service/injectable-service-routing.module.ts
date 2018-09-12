/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { InjectableServiceComponent } from './injectable-service.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: InjectableServiceComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InjectableServiceRoutingModule { }
