/** Bult in imports */
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
/** User Defined imports */
import { DateTimePickerComponent } from "./date-time-picker.component";
import { DateTimePickerRoutingModule } from "./date-time-picker-routing.module";

@NgModule({
  imports: [
    CommonModule,
     FormsModule,
     DateTimePickerRoutingModule,
     NgbModule
    ],
  declarations: [DateTimePickerComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Date Time Picker Module
 */
export class DateTimePickerModule {}
