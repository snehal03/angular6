/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { HomeComponent  } from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NgxSpinnerModule
  ],
  declarations: [HomeComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Home Module
 */
export class HomeModule { }
