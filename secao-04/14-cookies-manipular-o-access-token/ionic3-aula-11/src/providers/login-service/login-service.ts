import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../entity/Usuario';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../../entity/Utils';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private _loginUrl: string;
  private _userUrl: string;
  public handleError: any;

  constructor(public http: HttpClient) {
    this._loginUrl = `${Utils.urlBackEnd}/oauth/token?grant_type=password&username=`;
    this._userUrl = `${Utils.urlBackEnd}/usuario/logado`;
  }

  public login(usuario: Usuario): Observable<any> {

    const url = `${this._loginUrl}${usuario.email}&password=${encodeURIComponent(usuario.senha)}`;

    const headers = new HttpHeaders({"Authorization": "Basic " + btoa("cliente" + ':' + "123")});
    const options = {
      headers
    };
    
    return this.http.post(url, {}, options);

  }

  public getUsuarioAtual(token: any) {
    const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });
    const options = {
      headers
    };
    return this.http.get(this._userUrl, options);
  }
}
