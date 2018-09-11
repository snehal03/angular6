import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Full_ROUTES } from './shared/routes/full-layout.routes';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AppComponent } from './app.component';

// import { ErrorComponent } from './error/error.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }, {
    path: 'home',
    component: AppComponent
  },
 {
      path: '',
    component: FullLayoutComponent,
    data: {
      title: 'full Views'
    },
    children: Full_ROUTES,
    // canActivate: [AuthGuard]
  },
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

export class AppRoutingModule { }
