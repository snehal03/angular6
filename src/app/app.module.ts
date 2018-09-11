import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';
import { AuthGuard } from './shared/auth/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent,
    PartialLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
