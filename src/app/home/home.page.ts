import { Component } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';
import { NavController } from '@ionic/angular';

interface Dish {
  id: string,
  imagePath: string,
  name: string
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Dishes: DocumentChangeAction<Dish>[] = [];

  constructor(private fireStore: AngularFirestore, private navController: NavController) {
    fireStore.collection<Dish>("dish").snapshotChanges().subscribe(dishes => {
      this.Dishes = dishes;
    })
  }

  navigate(id: string) {
    this.navController.navigateForward("/dish/"+id);
  }

}
