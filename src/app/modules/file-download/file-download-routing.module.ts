/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { FileDownloadComponent } from './file-download.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FileDownloadComponent
      }
    ]
  }
];

/***
 * @author - Snehal Dhane
 * File Donwload Routing Component
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileDownloadRoutingModule { }
