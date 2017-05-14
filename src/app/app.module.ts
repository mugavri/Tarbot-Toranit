import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Main } from '../pages/main/main';
import { Setting } from '../pages/setting/setting';
import { MessagesPage } from '../pages/messages-page/messages-page';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http'; 

import { Messages } from '../providers/messages';
import { DateTime } from '../pipes/date-time';
import { AddMessage } from '../pages/add-message/add-message';
import { StratPage } from '../pages/strat-page/strat-page';

import { SMS } from '@ionic-native/sms';
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Main,
    Setting,
    MessagesPage,
    DateTime,
    AddMessage,
    StratPage
    ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
      tabsPlacement: 'bottom',
        }
      },
      backButtonText : 'חזור',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'top',
      tabsHideOnSubPages: true,
      // pageTransition: 'ios-transition',
      // activator : 'highlight'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Main,
    Setting,
    MessagesPage,
    AddMessage,
    StratPage
  ],
  providers: [
    SMS,
    Messages,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
