/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {AgmCoreModule} from '@agm/core';

/** User Defined imports */
import { GoogleMapComponent  } from './google-map.component';
import {GoogleMapRoutingModule} from './google-map-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GoogleMapRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDQ6oywiWZ1_5nltQtvgCoszPefhIuUDks',
      libraries: ['places']
    })
  ],
  declarations: [GoogleMapComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Login Module
 */
export class GoogleMapModule { }
