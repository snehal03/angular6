/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { FilterPipeComponent  } from './filter-pipe.component';
import {FilterPipeRoutingModule} from './filter-pipe-routing.module';
import { SearchText} from '../../shared/pipes/search.pipe';
import { ObjectSearchText } from '../../shared/pipes/object-search.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FilterPipeRoutingModule
  ],
  declarations: [FilterPipeComponent,SearchText,ObjectSearchText],

  providers: []
})

/**
 * @author - Snehal Dhane
 * FilterPipe Module
 */
export class FilterPipeModule { }
