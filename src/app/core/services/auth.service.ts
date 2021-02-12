import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

import { TokenService } from './token.service';



import { tap } from 'rxjs/operators';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userState: any;
  obtenUser: any;

  constructor(private afAuth: AngularFireAuth,
    private http: HttpClient,
    private token: TokenService,
    public afs: AngularFirestore,
    ) { 
      // this.obtenerUsuario()
    }

    createUser(email: string, password: string){
      return this.afAuth.createUserWithEmailAndPassword( email, password );
    }
  
    login(email: string, password: string){
      return this.afAuth.signInWithEmailAndPassword(email, password);
    }
  
    logout(){
      return this.afAuth.signOut().then(() => {
        localStorage.removeItem('user');
      })
    }
  
    hasUser(){
        return this.afAuth.authState;
    }
  
  /*   get isLoggedIn(): boolean {
      const user = JSON.parse(localStorage.getItem('user'));
      return (user !== null && user.emailVerified !== false) ? true : false;
    } */

    SetUserData(user) {
      const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
      const userState: User = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        emailVerified: user.emailVerified
      }
      return userRef.set(userState, {
        merge: true
      })
    }

    obtenerUsuario() {
      this.afAuth.authState.subscribe(user => {
        console.log('user',user);
        if (user) {
          // this.obtenUser = user
          this.userState = user;
          localStorage.setItem('user', JSON.stringify(this.userState));
          JSON.parse(localStorage.getItem('user'));
        } else {
          // this.obtenUser = null
          localStorage.setItem('user', null);
          JSON.parse(localStorage.getItem('user'));
        }
        this.usuarioLocal(user)
      })
    }

    usuarioLocal(data) {
      console.log('this.obtenUser',this.obtenUser);
      return this.obtenUser = data
    }


}
