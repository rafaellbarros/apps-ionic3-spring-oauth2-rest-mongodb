import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { LoginServiceProvider } from '../../providers/login-service/login-service';

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
    private loginService: LoginServiceProvider
  ) {

    this.loginForm = _fb.group({
        email: [''],
        senha: ['']
    });

  }

  loginUser(): void {
    if (this.loginForm.valid) {
        this.loginService.login(this.loginForm.value).subscribe(
            resp => console.log(resp)
        );
    } else {
        this.loading.present();
    }
  }
}
