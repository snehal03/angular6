/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgrxStoreRoutingModule } from './ngrx-store-rounting.module';
import { GetUserService } from '../../services/getUser.service';

/** User Defined imports */

import {  UseStoreComponent } from './use-store/use-store.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgrxStoreRoutingModule
  ],
  declarations: [UseStoreComponent],
  providers: []
})

/***
 * @author - Reshma Ghatage
 * Forms Module
 */
export class NgrxStoreModule { }
