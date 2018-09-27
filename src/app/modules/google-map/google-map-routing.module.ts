/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { GoogleMapComponent } from './google-map.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: GoogleMapComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMapRoutingModule { }
