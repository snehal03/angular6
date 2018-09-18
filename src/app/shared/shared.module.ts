import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SpinnerComponent } from './modules/spinner/spinner.component';

/**
 *  @author - Snehal Dhane
 * Shared module
 */
@NgModule({
  exports: [
      CommonModule,
      NgbModule
  ],
  imports: [
      RouterModule,
      CommonModule,
      NgbModule

  ],
  declarations: [
  SpinnerComponent]
})
export class SharedModule { }


