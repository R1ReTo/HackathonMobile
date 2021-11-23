import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListehackathonPage } from './listehackathon.page';

const routes: Routes = [
  {
    path: '',
    component: ListehackathonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListehackathonPageRoutingModule {}
