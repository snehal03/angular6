/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */

import { UseStoreComponent } from './use-store/use-store.component';
import { GenerateStoreComponent } from './generate-store/generate-store.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'useStore',
        component: UseStoreComponent
      },
      {
        path: 'generateStore',
        component: GenerateStoreComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
/***
 * @author - Reshma Ghatage
 * Form Routing
 */
export class NgrxStoreRoutingModule { }
