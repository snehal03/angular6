/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule} from 'ngx-color-picker';

/** User Defined imports */
import { ColorPickerComponent  } from './color-picker.component';
import {ColorPickerRoutingModule} from './color-picker-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ColorPickerRoutingModule,
    ColorPickerModule
  ],
  declarations: [ColorPickerComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Login Module
 */
export class ColorPickerComModule { }
