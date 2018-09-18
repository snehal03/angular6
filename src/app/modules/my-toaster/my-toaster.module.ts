/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { MyToasterComponent  } from './my-toaster.component';
import {MyToasterRoutingModule} from './my-toaster-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyToasterRoutingModule
  ],
  declarations: [MyToasterComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Modal Module
 */
export class MyToasterModule { }
