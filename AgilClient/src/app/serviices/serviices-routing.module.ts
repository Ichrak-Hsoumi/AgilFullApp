import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiicesPage } from './serviices.page';

const routes: Routes = [
  {
    path: '',
    component: ServiicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiicesPageRoutingModule {}
