/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { FileUploadComponent } from './file-upload.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: FileUploadComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileUploadRoutingModule { }
