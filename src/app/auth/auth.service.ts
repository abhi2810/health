import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private router: Router, private fAuth: AngularFireAuth, private fdb: AngularFirestore) { }

  registerUser(authData: AuthData, user: User) {
    this.fAuth.auth
    .createUserWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
      user.userId = result.user.uid;
      this.user = user;
      this.fdb.collection('user').doc(user.userId).collection('userdata').doc('data').set(user)
      .then(res => {
        this.authSuccesfully();
      }).catch(error => {
        console.log(error);
      });
    }).catch(error => {
      console.log(error);
    });
  }

  login(authData: AuthData) {
    this.fAuth.auth
    .signInWithEmailAndPassword(authData.email, authData.password)
    .then(result => {
      console.log(result);
      this.fdb.collection('user').doc(result.user.uid).collection('userdata').doc('data').valueChanges().subscribe(res => {
        this.user.userId = res[0].userId;
        this.user.gender = res[0].gender;
        this.user.email = res[0].email;
        this.user.name = res[0].name;
        this.user.height = res[0].height;
        this.user.weight = res[0].weight;
        this.user.age = res[0].age;
        this.user.isAuthority = res[0].isAuthority;
      });
      this.authSuccesfully();
    }).catch( error => {
      console.log(error);
    });
  }

  updateUser(user: User) {
    this.fdb.collection('user').doc(user.userId).collection('userdata').doc('data').update(user)
    .then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
  }

  logout() {
    this.fAuth.auth.signOut();
    this.user = null;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return ({...this.user});
  }

  isAuth() {
    return this.user != null;
  }

  private authSuccesfully() {
    this.authChange.next(true);
    this.router.navigate(['/home']);
  }
}
