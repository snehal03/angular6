import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {Ng2SmartTableModule} from 'ng2-smart-table';
// import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SearchRoutingModule} from './search-routing.module';

import {SearchComponent} from './search.component'

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    // Ng2SmartTableModule,
    // NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [SearchComponent],
  providers: [],
  exports: [SearchComponent]

})

export class SearchModule {}
