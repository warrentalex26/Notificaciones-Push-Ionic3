import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal';
import { Platform } from 'ionic-angular';

@Injectable()
export class PushnotificationProvider {

  constructor(public oneSignal: OneSignal,
              public platform: Platform) {
    console.log('Hello PushnotificationProvider Provider');
  }

  initNotification(){

    if (this.platform.is('cordova')){
      this.oneSignal.startInit('99b12696-84f1-4d06-ab0d-a3373f17ffc8', '853789360223');

      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

      this.oneSignal.handleNotificationReceived().subscribe(() => {
        // do something when notification is received
      });

      this.oneSignal.handleNotificationOpened().subscribe(() => {
        // do something when a notification is opened
      });

      this.oneSignal.endInit();
    }else {
      console.log('Solo funiona en el dispositivo');
    }

  }

}
