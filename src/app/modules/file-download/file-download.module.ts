/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

/** User Defined imports */
import { FileDownloadComponent  } from './file-download.component';
import {FileDownloadRoutingModule} from './file-download-routing.module';
import { FileDownloadDirective } from '../../shared/directives/fileDownloadDirective';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FileDownloadRoutingModule, ReactiveFormsModule
  ],
  declarations: [FileDownloadComponent, FileDownloadDirective],
  // providers: []
})

/***
 * @author - Snehal Dhane
 * File Download Module
 */
export class FileDownloadModule { }
