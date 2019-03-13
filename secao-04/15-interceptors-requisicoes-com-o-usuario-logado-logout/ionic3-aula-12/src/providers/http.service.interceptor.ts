import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { LoginServiceProvider } from "./login-service/login-service";


@Injectable()
export class HttpServiceInterceptor implements HttpInterceptor {
  private _token: string;
  constructor(
    private loginService: LoginServiceProvider
  ) { 
    this._token = this.loginService.getToken();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req);
  /*
    return next.handle(req).pipe(map(resp => {
        if (resp instanceof HttpResponse) {
          console.log('access_token_ ', resp.body['access_token'])
          const other = resp.clone({ headers: resp.headers.set('Authorization', 'Bearer ' + resp.body['access_token']) });
          console.log('xpto_ >>', other)
        return other;
        }
    }, erro => {
      console.log('error ', erro);
    }));
  }*/
  }
}