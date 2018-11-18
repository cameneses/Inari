import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {FichaPage} from "../index.paginas"

@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  ficha:any = FichaPage;
  informacion:any[] =
  [
    {
      date: "12 de noviembre de 2017",
      s_date: '12/11',
      doctor: "Juan Salas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus turpis, non lobortis eros. Sed nec vulputate quam. Curabitur blandit ullamcorper libero efficitur vestibulum. Donec vel porttitor justo. Ut aliquam euismod sapien ut euismod. Nunc sed arcu est. Donec et dui justo. In rhoncus sapien at imperdiet dignissim. Sed molestie, augue vitae venenatis sagittis, velit odio pulvinar mi, sed bibendum mi nisi nec felis.",
      reco: ["Beber agua 3 veces al día", "Medicamentos cada 8 horas"],
      med: ["Paracetamol 500mg"],
      ex: ["Ecotomografía abdominal", "Glucosa"]
      
    },
    {
      date: "12 de noviembre de 2017",
      s_date: '12/11',
      doctor: "Juan Salas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus turpis, non lobortis eros. Sed nec vulputate quam. Curabitur blandit ullamcorper libero efficitur vestibulum. Donec vel porttitor justo. Ut aliquam euismod sapien ut euismod. Nunc sed arcu est. Donec et dui justo. In rhoncus sapien at imperdiet dignissim. Sed molestie, augue vitae venenatis sagittis, velit odio pulvinar mi, sed bibendum mi nisi nec felis.",
      reco: ["Beber agua 3 veces al día", "Medicamentos cada 8 horas"],
      med: [],
      ex: []
      
    },
    {
      date: "12 de noviembre de 2017",
      s_date: '12/11',
      doctor: "Juan Salas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus turpis, non lobortis eros. Sed nec vulputate quam. Curabitur blandit ullamcorper libero efficitur vestibulum. Donec vel porttitor justo. Ut aliquam euismod sapien ut euismod. Nunc sed arcu est. Donec et dui justo. In rhoncus sapien at imperdiet dignissim. Sed molestie, augue vitae venenatis sagittis, velit odio pulvinar mi, sed bibendum mi nisi nec felis.",
      reco: ["Beber agua 3 veces al día", "Medicamentos cada 8 horas"],
      med: [],
      ex: []
      
    },{
      date: "12 de noviembre de 2017",
      s_date: '12/11',
      doctor: "Juan Salas",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis cursus turpis, non lobortis eros. Sed nec vulputate quam. Curabitur blandit ullamcorper libero efficitur vestibulum. Donec vel porttitor justo. Ut aliquam euismod sapien ut euismod. Nunc sed arcu est. Donec et dui justo. In rhoncus sapien at imperdiet dignissim. Sed molestie, augue vitae venenatis sagittis, velit odio pulvinar mi, sed bibendum mi nisi nec felis.",
      reco: ["Beber agua 3 veces al día", "Medicamentos cada 8 horas"],
      med: [],
      ex: []
      
    }
    
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams)
  {
    
  }

  revisarFicha(informacion:any)
  {
    this.navCtrl.push(FichaPage, {"info" : informacion});
  }

}
