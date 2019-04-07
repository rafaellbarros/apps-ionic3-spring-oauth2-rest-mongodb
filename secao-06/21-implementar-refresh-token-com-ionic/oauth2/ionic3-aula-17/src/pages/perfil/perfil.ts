import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Perfil } from '../../entity/Perfil';
import { PerfilServiceProvider } from './../../providers/perfil-service/perfil-service';

/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
  providers: [PerfilServiceProvider]
})
export class PerfilPage {

  public perfis: Perfil[];
  
  constructor(
    public navCtrl: NavController, 
    private _perfilService:PerfilServiceProvider) {
  
  }

  ionViewWillEnter() {
    this.perfis = [];
    this.buscarPefis();
  }

  private buscarPefis() {
    this._perfilService.buscarPerfis.subscribe(perfis => this.perfis = perfis);
  }

}