import {Routes, RouterModule} from '@angular/router';
// import {FirstViewComponent} from './first-view/first-view.component';
// import {SecondViewComponent} from './second-view/second-view.component';
// import {UnsavedChangesGuard} from './shared/unsaved-changes.guard';
import {ModuleWithProviders} from '@angular/core';

const router: Routes = [
  {path: '', redirectTo: 'http://www.google.com', pathMatch: 'full'},
  {path: '**', redirectTo: 'http://www.google.com'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
