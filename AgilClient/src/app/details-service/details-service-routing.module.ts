import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsServicePage } from './details-service.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsServicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsServicePageRoutingModule {}
