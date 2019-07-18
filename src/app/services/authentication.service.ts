import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afa: AngularFireAuth, private afd: AngularFireDatabase) {
    this.afa.authState.subscribe(value => {
      console.log(value);
    });
  }

  signup(email: string, password: string, firstName: string, lastName: string) {
    const uid = '';
    this.afa.auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const { user } = userCredentials;
        return this.afd.list('users').set(user.uid, {
          email: user.email,
          firstName,
          lastName,
          role: 'member'
        });
      })
      .catch((err) => {
        console.log('err');
      });
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
