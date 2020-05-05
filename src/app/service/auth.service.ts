import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  register(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then(newuser => {
        console.log(newuser);
        localStorage.setItem('user', newuser.user.uid);
        this.router.navigateByUrl("/task");
      });
  }

  login(user) {
    this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password)
      .then(user => {
        console.log(user);
        localStorage.setItem('user', user.user.uid);
        this.router.navigateByUrl("/task");
      });
  }

  logout() {
    localStorage.removeItem('user');
    this.afAuth.auth.signOut().then(user => {
      console.log("Sign out successfull.");
    });
  }

  currentUser() {
    return this.afAuth.user;
  }
}
