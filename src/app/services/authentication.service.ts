import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afa: AngularFireAuth) {
    this.afa.authState.subscribe(value => {
      console.log(value);
    });
  }

  signup(email: string, password: string) {
    this.afa.auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {})
      .catch(() => {});
  }

  login(email: string, password: string) {
    return this.afa.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.afa.auth
      .signOut()
      .then(() => {
        console.log('successfully logout');
      })
      .catch(err => {
        console.log(err);
      });
  }
}
