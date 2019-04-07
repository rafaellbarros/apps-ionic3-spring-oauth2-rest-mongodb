import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthServiceProvider } from './../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public _auth: AuthServiceProvider) {

  }

  public logout() {
    this._auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
