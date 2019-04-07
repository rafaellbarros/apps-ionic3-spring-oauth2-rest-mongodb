import { LoginServiceProvider } from './login-service/login-service';
import { AuthServiceProvider } from './auth-service/auth-service';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Utils } from '../entity/Utils';

@Injectable()
export class InterceptorHttpService implements HttpInterceptor {

  constructor(private _authService: AuthServiceProvider, private _loginService: LoginServiceProvider) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {

      if (req.body) {
        return next.handle(req);
      }
    
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this._authService.accessToken}`
        }
      });

      return next.handle(req).catch(error => {
        if (error instanceof HttpErrorResponse) {
          switch ((<HttpErrorResponse>error).status) {
            case 401:
                return this.getAccessToken(req, next);
            case 0:
                return this.getAccessToken(req, next);    
          }
          Observable.throw(error);
        } else {
          Observable.throw(error);
        }
      });

  }

  private getAccessToken(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this._loginService.getAccessToken(this._authService.refreshToken).switchMap(
        resp => {

            const { access_token } = Utils.json(resp);

            this._authService.armazenarAccessToken(access_token);

            req = req.clone({
              setHeaders: {
                Authorization: `Bearer ${this._authService.accessToken}`
              }
            });

            return next.handle(req);
        }
    )
  }
}