import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-ficha',
  templateUrl: 'ficha.html',
})
export class FichaPage {

  info:any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.info = this.navParams.get("info");
    console.log(navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FichaPage');
  }

}
