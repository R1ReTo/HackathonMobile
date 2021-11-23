import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListehackathonPageRoutingModule } from './listehackathon-routing.module';

import { ListehackathonPage } from './listehackathon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListehackathonPageRoutingModule
  ],
  declarations: [ListehackathonPage]
})
export class ListehackathonPageModule {}
