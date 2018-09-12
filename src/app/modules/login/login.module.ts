/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {LoginRoutingModule} from './login-routing.module';

/** User Defined imports */
import { LoginComponent  } from './login.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule
  ],
  declarations: [LoginComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Login Module
 */
export class LoginModule { }
