import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VacunasPage } from '../vacunas/vacunas';
import { InformacionPage } from '../informacion/informacion';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vacunas:any = VacunasPage;
  informacion:any = InformacionPage;
  constructor(public navCtrl: NavController) {

  }

}
