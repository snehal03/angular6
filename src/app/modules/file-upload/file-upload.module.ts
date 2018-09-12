/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** User Defined imports */
import { FileUploadComponent  } from './file-upload.component';
import {FileUploadRoutingModule} from './file-upload-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileUploadRoutingModule
  ],
  declarations: [FileUploadComponent],
  providers: []
})

/***
 * @author - Snehal Dhane
 *File Upload Module
 */
export class FileUploadModule { }
