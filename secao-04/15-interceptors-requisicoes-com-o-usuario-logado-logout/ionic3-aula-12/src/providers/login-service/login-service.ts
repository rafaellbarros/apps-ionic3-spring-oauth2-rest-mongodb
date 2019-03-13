import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../entity/Usuario';
import { Observable } from 'rxjs/Observable';
import { Utils } from '../../entity/Utils';
import { map } from 'rxjs/operators';
import { _ParseAST } from '@angular/compiler';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  private _loginUrl: string;
  private _refreshUrl: string;
  private _userUrl: string;
  public handleError: any;

  constructor(public http: HttpClient) {
    this._loginUrl = `${Utils.urlBackEnd}/oauth/token?grant_type=password&username=`;
    this._userUrl = `${Utils.urlBackEnd}/usuario/logado`;
  }

  public getToken(): string {
    return localStorage.getItem('accessToken');
  }

  public getUsuarioAutualObj(): string {
    return localStorage.getItem('usuarioAtual');
  }

  public login(usuario: Usuario): Observable<any> {

    const loginUrl = `${this._loginUrl}${usuario.email}&password=${encodeURIComponent(usuario.senha)}`;
    const headers = new HttpHeaders({"Authorization": "Basic " + btoa("cliente" + ':' + "123")});
    const options = {
      headers
    };
    
    return this.http.post(loginUrl, {}, options).pipe(map(resp => {
      this.armazenarToken(resp['access_token']);
      return resp;
    }))

  }

  public armazenarToken(token: string): void {
    localStorage.setItem('accessToken', token);
  }

  public getUsuarioAtual(token: any) {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this.http.get(this._userUrl, { headers });
  }

  public getAccessToken(refreshToken) {
    let url = this._refreshUrl + refreshToken;
    let headers = new HttpHeaders().set("Authorization", "Basic " + btoa("cliente" + ':' + "123"));
    return this.http.post(url, {}, { headers });
  }

  public logout() {
    this.limparAccesToken();
  }

  private limparAccesToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('usuarioAtual');
  }
}
