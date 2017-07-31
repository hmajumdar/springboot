import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {InputValidationComponent} from './inputvalidation.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: InputValidationComponent}
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class FormComponentRoutingModule {}
