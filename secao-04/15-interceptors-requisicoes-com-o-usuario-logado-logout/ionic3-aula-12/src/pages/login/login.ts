import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { CookieService } from 'ngx-cookie-service';
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
    private loginService: LoginServiceProvider,
    private cookieService: CookieService,
  ) {

    this.loginForm = _fb.group({
        email: [''],
        senha: ['']
    });

  }

  loginUser(): void {
    if (this.loginForm.valid) {
        this.loginService.login(this.loginForm.value).subscribe(
          res => this.loginSuccess(res)
        );
    } else {
        this.loading.present();
    }
  }

  public loginSuccess(resp: any) {
    /*
    this.cookieService.deleteAll();
    this.cookieService.set("accessToken", resp.access_token);
    ;*/
    this.loginService.getUsuarioAtual(resp.access_token).subscribe(
      resp => this.redirectPage(resp)
    )
  }

  public redirectPage(resp: any) {
    localStorage.setItem('usuarioAtual', JSON.stringify(resp));
    // this.cookieService.set("usuarioAtual", resp);
    this.navCtrl.setRoot(TabsPage);
  }

  redirectUser(resp: any) {
    this.loginService.logout();
    localStorage.setItem('accessToken', resp.access_token);
  }
}
