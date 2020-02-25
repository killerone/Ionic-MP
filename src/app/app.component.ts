import { Component } from '@angular/core';

import { Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }
  navigate;

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async login() {
    const toast = await this.toastController.create({
      color: "warning",
      message: `Login will be implemented soon.`,
      duration: 2000
    });
    toast.present();
  }

  async exit() {
    const toast = await this.toastController.create({
      color: "success",
      message: `Thank you.`,
      duration: 2000
    });
    toast.present();
    this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
  }

  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/home",
          icon: "home"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatboxes"
        },
        {
          title: "Contacts",
          url: "/contacts",
          icon: "contacts"
        },
      ]
  }
}
