/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { ButtonsComponent  } from './buttons.component';
import {ButtonsRoutingModule} from './buttons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsRoutingModule
  ],
  declarations: [ButtonsComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Buttons Module
 */
export class ButtonsModule { }
