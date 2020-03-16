import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

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

  Dishes: Dish[] = [];

  constructor(private fireStore: AngularFirestore) {
    fireStore.collection<Dish>("dish").valueChanges().subscribe(dishes => {
      this.Dishes = dishes;
    })
  }

}
