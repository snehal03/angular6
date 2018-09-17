/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { TablesComponent  } from './tables.component';
import {TablesRoutingModule} from './tables-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TablesRoutingModule
  ],
  declarations: [TablesComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Table Module
 */
export class TablesModule { }
