import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsServicePageRoutingModule } from './details-service-routing.module';

import { DetailsServicePage } from './details-service.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsServicePageRoutingModule
  ],
  declarations: [DetailsServicePage]
})
export class DetailsServicePageModule {}
