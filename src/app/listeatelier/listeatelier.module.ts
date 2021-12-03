import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeatelierPageRoutingModule } from './listeatelier-routing.module';

import { ListeatelierPage } from './listeatelier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeatelierPageRoutingModule
  ],
  declarations: [ListeatelierPage]
})
export class ListeatelierPageModule {}
