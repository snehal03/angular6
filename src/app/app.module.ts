import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerComponent } from './modules/color-picker/color-picker.component';

/**
 * @author - Snehal Dhane
 * App Module
 */
@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PartialLayoutComponent,
    ColorPickerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
