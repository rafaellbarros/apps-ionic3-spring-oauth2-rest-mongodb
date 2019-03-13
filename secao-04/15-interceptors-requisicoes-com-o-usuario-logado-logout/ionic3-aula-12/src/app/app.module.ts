
import { PerfilPage } from './../pages/perfil/perfil';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentInicial } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CookieService } from 'ngx-cookie-service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Utils } from '../entity/Utils';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilServiceProvider } from '../providers/perfil-service/perfil-service';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { HttpServiceInterceptor } from '../providers/http.service.interceptor';

@NgModule({
  declarations: [
    ComponentInicial,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    PerfilPageModule,
    IonicModule.forRoot(ComponentInicial)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ComponentInicial,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Utils,
    CookieService,
    LoginServiceProvider,
    PerfilServiceProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpServiceInterceptor,
      multi: true
    }
  ]
})
export class AppModule {}
