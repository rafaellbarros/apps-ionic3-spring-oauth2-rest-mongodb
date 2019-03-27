import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perfil } from '../../entity/Perfil';
import { Utils } from '../../entity/Utils';
import { AuthServiceProvider } from './../auth-service/auth-service';

/*
  Generated class for the PerfilServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilServiceProvider {

  private _perfilUrl: string;
  public handleError: any;

  constructor(private http: HttpClient, private _auth: AuthServiceProvider) {
    this._perfilUrl = `${Utils.urlBackEnd}/perfil`;
  }

  public get buscarPerfis(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this._perfilUrl, this._auth.optionsAuthorizationBearerToken)
      .pipe(map(perfis => perfis));
  }

}
