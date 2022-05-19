import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { IonicModule } from '@ionic/angular';

import { ServiicesPageRoutingModule } from './serviices-routing.module';

import { ServiicesPage } from './serviices.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    IonicModule,
    ServiicesPageRoutingModule
  ],
  declarations: [ServiicesPage]
})
export class ServiicesPageModule {}
