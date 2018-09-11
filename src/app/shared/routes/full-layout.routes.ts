import { Routes } from '@angular/router';

export const Full_ROUTES: Routes = [

  {
    path: 'form',

    loadChildren: '../../modules/forms/form-page.module#FormPageModule',
    // canActivate: [AuthGuard]
  },

];
