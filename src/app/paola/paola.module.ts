import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaolaPageRoutingModule } from './paola-routing.module';

import { PaolaPage } from './paola.page';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaolaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PaolaPage]
})
export class PaolaPageModule {}
