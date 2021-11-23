import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnexionPageRoutingModule } from './connexion-routing.module';
import { ConnexionPage } from './connexion.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ConnexionPageRoutingModule,
    RouterModule.forChild([
      {
        path: '',
        component: ConnexionPage
      }
    ])
  ],
  declarations: [ConnexionPage]
})
export class ConnexionPageModule {}
