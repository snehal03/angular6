import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './shared/commons/appHttpInterceptor';
import { ToastMessagesComponent } from './shared/modules/toaster/toast.component';
import { ToastService } from './shared/modules/toaster/toast.service';
import { NgxSpinnerModule } from 'ngx-spinner';

/**
 * @author - Snehal Dhane
 * App Module
 */
@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PartialLayoutComponent,
    ToastMessagesComponent

  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,

  ],
  providers: [
    ToastService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
