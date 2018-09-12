import { Routes } from '@angular/router';

/**
 * Partial laayout routes
 */
export const PARTIAL_ROUTES: Routes = [

  {
    path: 'login',
    loadChildren: '../../modules/login/login.module#LoginModule',
  },

];
