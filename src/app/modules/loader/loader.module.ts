/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { LoaderComponent  } from './loader.component';
import {LoaderRoutingModule} from './loader-routing.module';
import { LoaderDirective } from '../../shared/directives/loaderDirective';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderRoutingModule
  ],
  declarations: [LoaderComponent,LoaderDirective],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Loader Module
 */
export class LoaderModule { }
