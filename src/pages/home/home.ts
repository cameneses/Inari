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

  info:any[] = [{title:"lmao", body: "hola", date: "10/11", info: {hola: "uwu"}}];
  vac:any[] = [{title:"lmae", body: "holaiiiiiiii", date: "01/01"}];
  med:any[] = [{title:"lmau", body: "holaeeeeee", date: "02/02"}];
  ex:any[] = [{title:"lmaoy", body: "holaaa", date: "02/03"}];

  constructor(public navCtrl: NavController) {

  }

  generatePage(data:any)
  {
    this.navCtrl.push(InformacionPage, {"data": data});
  }

}
