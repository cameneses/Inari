import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VacunasPage } from '../vacunas/vacunas';
import { InformacionPage } from '../informacion/informacion';
import {FICHAS, MEDICAMENTOS, EXAMENES} from "../../data/data";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  vacunas:any = VacunasPage;
  informacion:any = InformacionPage;

  info:any[] = FICHAS;
  med:any[] = MEDICAMENTOS;
  ex:any[] = EXAMENES;

  constructor(public navCtrl: NavController) {

  }

  generatePage(data:any)
  {
    this.navCtrl.push(InformacionPage, {"data": data});
  }

}
