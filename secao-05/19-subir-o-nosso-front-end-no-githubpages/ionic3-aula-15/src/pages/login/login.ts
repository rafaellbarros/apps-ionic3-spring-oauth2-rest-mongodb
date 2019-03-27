import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginForm;
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public _fb: FormBuilder,
    public nav: NavController,
    private _loginService: LoginServiceProvider
  ) {

    this.loginForm = _fb.group({
        email: [''],
        senha: ['']
    });

  }

  loginUser(): void {
    if (this.loginForm.valid) {
        this._loginService.login(this.loginForm.value).subscribe(
          () => this.loginSuccess()
        );
    } else {
        this.loading.present();
    }
  }

  public loginSuccess() {
    this._loginService.buscarUsuarioAtual.subscribe(() => this.redirectPage());
  }

  public redirectPage() {
    this.navCtrl.setRoot(TabsPage);
  }
}
