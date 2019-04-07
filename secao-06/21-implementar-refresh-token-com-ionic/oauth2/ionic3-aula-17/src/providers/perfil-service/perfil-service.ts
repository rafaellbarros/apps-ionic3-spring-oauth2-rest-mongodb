import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../../entity/Perfil';
import { Utils } from '../../entity/Utils';

/*
  Generated class for the PerfilServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerfilServiceProvider {

  private _perfilUrl: string;
  public handleError: any;

  constructor(private http: HttpClient) {
    this._perfilUrl = `${Utils.urlBackEnd}/perfil`;
  }

  public get buscarPerfis(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this._perfilUrl);
  }

}
