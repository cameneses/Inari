import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the VacunasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vacunas',
  templateUrl: 'vacunas.html',
})
export class VacunasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VacunasPage');
  }

  showAlert1() {
    const alert = this.alertCtrl.create({
      title: 'Vacuna BGC',
      subTitle: 'Fue aplicada el 04/05/2018 en Cesfam Las Lilas',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert2() {
    const alert = this.alertCtrl.create({
      title: 'Vacuna Pentavalente',
      subTitle: 'Fue aplicada el 08/07/2018 en Cesfam Las Lilas',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert3() {
    const alert = this.alertCtrl.create({
      title: 'Vacuna Polio',
      subTitle: 'Fue aplicada el 12/07/2018 en Cesfam Las Lilas',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert4() {
    const alert = this.alertCtrl.create({
      title: 'Vacuna Tres Vírica',
      subTitle: 'Debe ser aplicada aproximadamente el 25/05/2019',
      buttons: ['OK']
    });
    alert.present();
  }

  showAlert5() {
    const alert = this.alertCtrl.create({
      title: 'Vacuna Neumocócica',
      subTitle: 'Debe ser aplicada aproximadamente el 25/05/2019',
      buttons: ['OK']
    });
    alert.present();
  }

}
