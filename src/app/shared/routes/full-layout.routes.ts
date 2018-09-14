import { Routes } from '@angular/router';


/**
 *  @author - Snehal Dhane
 * Full laayout routes
 */
export const Full_ROUTES: Routes = [

  {
    path: 'form',
    loadChildren: 'src/app/modules/file-upload/file-upload.module#FileUploadModule'
    // loadChildren: '../../modules/forms/form-page.module#FormPageModule',
  },
  {
    path: 'fileUpload',
    // loadChildren: '../../modules/file-upload/file-upload.module#FileUploadModule',
    loadChildren: 'src/app/modules/file-upload/file-upload.module#FileUploadModule'
  },
  {
    path: 'fileDownload',
    // loadChildren: '../../modules/file-download/file-download.module#FileDownloadModule',
    loadChildren: 'src/app/modules/file-download/file-download.module#FileDownloadModule'
  },
  {
    path: 'injectableService',
    // loadChildren: '../../modules/injectable-service/injectable-service.module#InjectableServiceModule',
    loadChildren: 'src/app/modules/injectable-service/injectable-service.module#InjectableServiceModule',
  },
  {
    path: 'colorPicker',
    // loadChildren: '../../modules/color-picker/color-picker.module#ColorPickerComModule',
    loadChildren: 'src/app/modules/color-picker/color-picker.module#ColorPickerComModule',
  },
  {
    path: 'modal',
    loadChildren: 'src/app/modules/modal/modal.module#ModalModule',
  },
];
