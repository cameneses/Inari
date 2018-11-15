import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VacunasPage } from './vacunas';

@NgModule({
  declarations: [
    VacunasPage,
  ],
  imports: [
    IonicPageModule.forChild(VacunasPage),
  ],
})
export class VacunasPageModule {}
