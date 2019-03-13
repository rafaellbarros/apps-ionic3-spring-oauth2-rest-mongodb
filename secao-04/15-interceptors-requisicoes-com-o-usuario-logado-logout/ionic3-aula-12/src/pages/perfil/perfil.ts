import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
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
})
export class PerfilPage {
  public perfis: any;
  constructor(public navCtrl: NavController, public perfilService:PerfilServiceProvider, private loginService: LoginServiceProvider) {
    
    const token = this.loginService.getToken();
    this.perfilService.getPerfis(token).subscribe(resp =>  this.perfis = resp);
      
  }

}