/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/** User Defined imports */
import { InjectableServiceComponent } from './injectable-service.component';
import {InjectableServiceRoutingModule} from './injectable-service-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InjectableServiceRoutingModule
  ],
  declarations: [InjectableServiceComponent],
  providers: []
})

/***
 * @author - Snehal Dhane
 * Injectable Service Module
 */
export class InjectableServiceModule { }
