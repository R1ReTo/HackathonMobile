import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailatelierPageRoutingModule } from './detailatelier-routing.module';

import { DetailatelierPage } from './detailatelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailatelierPageRoutingModule
  ],
  declarations: [DetailatelierPage]
})
export class DetailatelierPageModule {}
