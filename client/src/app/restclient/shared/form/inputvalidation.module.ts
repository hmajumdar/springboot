import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormComponentRoutingModule} from './form.component-routing.module';
import {GrowlModule} from 'primeng/components/growl/growl';
import {PanelModule} from 'primeng/components/panel/panel';
import {DropdownModule} from 'primeng/components/dropdown/dropdown';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {InputTextareaModule} from 'primeng/components/inputtextarea/inputtextarea';
import {ButtonModule} from 'primeng/components/button/button';
import {TabViewModule} from 'primeng/components/tabview/tabview';
import {CodeHighlighterModule} from 'primeng/components/codehighlighter/codehighlighter';
import {InputValidationComponent} from './inputvalidation.component';
import {Routes, RouterModule} from '@angular/router';
// import {FirstViewComponent} from './first-view/first-view.component';
import {ModuleWithProviders} from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FormComponentRoutingModule,
    GrowlModule,
    PanelModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    TabViewModule,
    CodeHighlighterModule
  ],
  declarations: [
    InputValidationComponent
  ],
  exports: [InputValidationComponent]
})

export class InputValidationModule {}
