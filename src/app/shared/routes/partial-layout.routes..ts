import { Routes } from '@angular/router';

export const PARTIAL_ROUTES: Routes = [

  {
    path: 'login',
    loadChildren: '../../modules/login/login.module#LoginModule',
    // canActivate: [AuthGuard]
  },

];
