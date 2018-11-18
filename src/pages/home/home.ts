import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VacunasPage } from '../vacunas/vacunas';
import { InformacionPage } from '../informacion/informacion';
import {FICHAS, MEDICAMENTOS} from "../../data/data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vacunas:any = VacunasPage;
  informacion:any = InformacionPage;

  info:any[] = FICHAS;
  med:any[] = MEDICAMENTOS;

  constructor(public navCtrl: NavController) {

  }

  generatePage(data:any)
  {
    this.navCtrl.push(InformacionPage, {"data": data});
  }

}
