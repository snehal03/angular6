import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppComponent } from './app.component';
import { PartialLayoutComponent } from './layout/partial-layout/partial-layout.component';
import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { PARTIAL_ROUTES } from './shared/routes/partial-layout.routes.';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { HomeComponent } from './modules/home/home.component';

/**
 * @author - Snehal Dhane
 * Define routes ,
 * Full Layout contains inside pages after login pages
 * Partial Layout contains Outside pages before login
 */
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'full Views'
    },
    children: Full_ROUTES,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: PartialLayoutComponent,
    data: {
      title: 'partial Views'
    },
    children: PARTIAL_ROUTES,
  }
  //  {
  //   // path: '**',
  //   // component: ErrorComponent,
  //   // data: {
  //   //   title: 'Error'
  //   // }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
