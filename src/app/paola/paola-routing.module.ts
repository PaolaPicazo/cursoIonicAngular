import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaolaPage } from './paola.page';

const routes: Routes = [
  {
    path: '',
    component: PaolaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaolaPageRoutingModule {}
