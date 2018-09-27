/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { DateTimePickerComponent } from './date-time-picker.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DateTimePickerComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateTimePickerRoutingModule { }
