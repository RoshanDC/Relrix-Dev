import { Routes, RouterModule }  from '@angular/router';

import { Vendor } from './vendor.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Vendor
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
