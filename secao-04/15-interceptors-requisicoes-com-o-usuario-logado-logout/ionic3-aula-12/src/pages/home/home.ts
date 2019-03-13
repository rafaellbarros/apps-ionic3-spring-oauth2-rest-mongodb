import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LoginServiceProvider } from './../../providers/login-service/login-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public loginService: LoginServiceProvider) {

  }

  public logout() {
    this.loginService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
