/** Built in imports */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/** Component Imports */
import { TabsComponent } from './tabs.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TabsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsRoutingModule { }
