import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  createNewUser(email : string , password : string) {
    return new Promise (
      (resolve, reject) => {
        auth.createUserWithEmailAndPassword(auth.getAuth(),email , password).then(
          (value) => { resolve(value); },
          (err) => { reject(err); }
        );
      }
    );
  }

  signInUser(email : string , password : string) {
    return new Promise(
      (resolve , reject) => {
        auth.signInWithEmailAndPassword(auth.getAuth(),email , password).then(
          (value) => { resolve(value); },
          (err) => { reject(err); }
        );
      }
    );
  }

  signOutUser() {
    auth.signOut(auth.getAuth());
  }

}
