import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  username;
  email;
  address;
  dob;
  currentDate = moment().year() - 1;

  constructor(
    public alertController: AlertController,
    public actionSheetController: ActionSheetController,
    private routing: Router
  ) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: `Clear all?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'warning',
          handler: x => console.log('Cancelled clicked')
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Okay clicked');
            this.address = '';
            this.email = '';
            this.username = '';
            this.dob = '';
          }
        }
      ]
    });
    this.username = null;
    await alert.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.presentAlert();
            console.log('Delete clicked');
          }
        },
        {
          text: 'Cancel',
          icon: 'cancel',
          handler: () => {
            console.log('All clear');
          }
        }
      ]
    });
    await actionSheet.present();
  }

  nextPage() {
    // console.log(this.dob);

    const navigationExtras: NavigationExtras = {
      state: {
        name: this.username,
        address: this.address,
        email: this.email,
        dob: this.dob
      }
    };
    this.routing.navigate(['/about'], navigationExtras);
  }
}
