import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private db: AngularFirestore,
    private afAuth: AngularFireAuth) { }

  register(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(newuser => {
        console.log(newuser);
      });
  }

  login(user) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        console.log(user);
      });
  }

  logout() {
    this.afAuth.auth.signOut().then(user => {
      console.log("Sign out successfull.");
    });
  }
}
