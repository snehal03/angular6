/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import {LoginRoutingModule} from './login-routing.module';

// /** User Defined imports */
import { SpinnerComponent  } from './spinner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // LoginRoutingModule
  ],
  declarations: [SpinnerComponent],
  providers: [],
  exports:[SpinnerComponent]
})

/**
 * @author - Snehal Dhane
 * Login Module
 */
export class SpinnerModule { }
