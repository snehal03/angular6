/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { LoaderComponent  } from './loader.component';
import {LoaderRoutingModule} from './loader-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [LoaderComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Loader Module
 */
export class LoaderModule { }
