/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { SelectSearchComponent  } from './select-search.component';
import {SelectSearchRoutingModule} from './select-search-routing.module';
import { SearchModule } from '../../shared/modules/search/search.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SelectSearchRoutingModule,
    SearchModule
  ],
  declarations: [SelectSearchComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Select Search Module
 */
export class SelectSearchModule { }
