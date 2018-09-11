/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormPageRoutingModule } from './form-page-rounting.module';

/** User Defined imports */
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveComponent } from './reactive/reactive.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormPageRoutingModule
  ],
  declarations: [TemplateDrivenComponent, ReactiveComponent],
  providers: []
})

export class FormPageModule { }
