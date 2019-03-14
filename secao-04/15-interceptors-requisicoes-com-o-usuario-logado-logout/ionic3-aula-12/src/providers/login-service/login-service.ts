import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Usuario } from '../../entity/Usuario';
import { AuthServiceProvider } from './../auth-service/auth-service';

/*
  Generated class for the LoginServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoginServiceProvider {

  constructor(private _auth: AuthServiceProvider) { }

  public login(usuario: Usuario): Observable<void> {
    return this._auth.login(usuario);
  }

  public get buscarUsuarioAtual(): Observable<Usuario> {
    return this._auth.buscarUsuarioAtual;
  }

  public get usarioAtual(): Usuario {
    return this._auth.usuarioAtual;
  }

  public logout(): void {
    this._auth.logout();
  }

}
