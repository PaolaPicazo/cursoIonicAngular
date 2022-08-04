import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaolaPageRoutingModule } from './paola-routing.module';
import { PaolaPage } from './paola.page';

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
export class PaolaPageModule {

}
