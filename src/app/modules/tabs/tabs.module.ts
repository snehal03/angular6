/** Bult in imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

/** User Defined imports */
import { TabsComponent  } from './tabs.component';
import {TabsRoutingModule} from './tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TabsRoutingModule,
    NgbModule
  ],
  declarations: [TabsComponent],
  providers: []
})

/**
 * @author - Snehal Dhane
 * Tabs Module
 */
export class TabsModule { }
