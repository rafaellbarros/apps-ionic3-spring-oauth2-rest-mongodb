
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { CookieService } from 'ngx-cookie-service';
import { Utils } from '../entity/Utils';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { TabsPage } from '../pages/tabs/tabs';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpServiceInterceptor } from '../providers/http.service.interceptor';
import { LoginServiceProvider } from '../providers/login-service/login-service';
import { PerfilServiceProvider } from '../providers/perfil-service/perfil-service';
import { ComponentInicial } from './app.component';



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
    },
    AuthServiceProvider
  ]
})
export class AppModule {}
