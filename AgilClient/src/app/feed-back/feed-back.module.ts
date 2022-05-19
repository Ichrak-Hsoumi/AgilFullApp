import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedBackPageRoutingModule } from './feed-back-routing.module';

import { FeedBackPage } from './feed-back.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    FeedBackPageRoutingModule
  ],
  declarations: [FeedBackPage]
})
export class FeedBackPageModule {}
