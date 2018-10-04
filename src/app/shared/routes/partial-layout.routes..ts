import { Routes } from '@angular/router';

/**
 * @author - Snehal Dhane
 * Partial laayout routes
 */
export const PARTIAL_ROUTES: Routes = [

  {
    path: 'login',
    // loadChildren: '../../modules/login/login.module#LoginModule',
    loadChildren: 'src/app/modules/login/login.module#LoginModule',
  },
  {
    path: 'home',
    loadChildren: 'src/app/modules/home/home.module#HomeModule',
  },

];
