import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { firestore } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private fireStore: AngularFirestore) {
    fireStore.collection("dish").valueChanges().subscribe(data => {
      console.log(data);
    })
  }

}
