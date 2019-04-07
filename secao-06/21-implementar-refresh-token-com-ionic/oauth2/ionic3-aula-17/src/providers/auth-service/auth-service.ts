import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Usuario } from '../../entity/Usuario';
import { Utils } from '../../entity/Utils';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  private _oauthTokenUrl: string;
  private _userUrl: string;

  constructor(public http: HttpClient) {
    this._oauthTokenUrl = `${Utils.urlBackEnd}/oauth/token`;
    this._userUrl = `${Utils.urlBackEnd}/usuario/logado`;
  }

  public get options() {
    const headers = new HttpHeaders()
        .append('Content-Type', 'application/x-www-form-urlencoded')
        .append('Authorization', "Basic " + btoa("cliente" + ':' + "123"));

    return {
      headers
    };
  }

  public get optionsAuthorizationBearerToken() {
    if (this.accessToken === null || this.accessToken === undefined) return {};
    
    const headers = new HttpHeaders().set('Authorization', `Bearer ${this.accessToken}`);
    return {
      headers
    }
  }

  public login(usuario: Usuario): Observable<void> {

    const options = this.options;
    const body = `grant_type=password&username=${usuario.email}&password=${encodeURIComponent(usuario.senha)}`;

    return this.http.post(this._oauthTokenUrl, body, options).pipe(map(resp => {

     const { access_token, refresh_token } = Utils.json(resp);

     this.armazenarAccessToken(access_token);
     this.armazenarRefreshToken(refresh_token);

    }));
  }

  public get buscarUsuarioAtual(): Observable<Usuario> {
    return this.http.get<Usuario>(this._userUrl).pipe(map(usuario => {
      this.armazenarUsuarioAtual(usuario);
      return usuario;
    }));
  }

  public armazenarAccessToken(accessToken: string): void {
    localStorage.setItem('accessToken', accessToken);
  }

  public armazenarRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }

  public armazenarUsuarioAtual(usuario: any): void {
    localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
  }

  public get accessToken(): string {
    return localStorage.getItem('accessToken');
  }

  public get refreshToken(): string {
    return localStorage.getItem('refreshToken');
  }

  public get usuarioAtual(): Usuario {
    return JSON.parse(localStorage.getItem('usuarioAtual')) as Usuario;
  }

  public getAccessToken(refreshToken: string) {
    const options = this.options;
    const body = `grant_type=refresh_token&refresh_token=${refreshToken}`;

    return this.http.post(this._oauthTokenUrl, body, options).pipe(map(resp => resp));
  }

  public logout(): void {
    this.limparAccesToken();
    this.limparRefreshToken();
    this.limparUsuarioAtual();
  }

  private limparAccesToken = (): void  => localStorage.removeItem('accessToken');

  private limparRefreshToken = (): void  => localStorage.removeItem('refreshToken');
  
  private limparUsuarioAtual = (): void  => localStorage.removeItem('usuarioAtual');
  
}
