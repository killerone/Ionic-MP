import { ToastController, AlertController } from '@ionic/angular';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {
  link = 'https://reqres.in/api/users?page=0&per_page=12';
  users: User[] = [];
  defaultImage = "../../assets/person.png"

  constructor(private http: HttpClient, private toastController: ToastController, private alertController: AlertController) {
    http.get(this.link).subscribe(data => {
      this.users = data['data'];
    });
  }

  deleteUser(id) {
    const name = this.users[id].first_name + " " + this.users[id].last_name + " is deleted.";
    this.users.splice(id, 1);
    this.presentToast(name);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      color: "danger",
      message: message,
      duration: 700
    });
    toast.present();
  }


  async addUser() {
    const alert = await this.alertController.create({
      header: 'Add User',
      inputs: [
        {
          name: 'first_name',
          type: 'text',
          placeholder: 'First Name'
        },
        {
          name: 'last_name',
          type: 'text',
          placeholder: 'Last Name'
        }, {
          name: 'email',
          type: 'email',
          placeholder: 'Email'
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Add',
          handler: (data) => {
            this.http.post(this.link, data).subscribe(res =>{
              console.log(res);
              this.users.unshift(data);
            })
            
          }
        }
      ]
    });

    await alert.present();
  }
}
