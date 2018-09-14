/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/** User Defined imports */
import { ModalComponent  } from './modal.component';
import {ModalRoutingModule} from './modal-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalRoutingModule
  ],
  declarations: [ModalComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Login Module
 */
export class ModalModule { }
