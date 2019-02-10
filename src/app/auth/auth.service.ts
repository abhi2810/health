import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User;
  authChange = new Subject<boolean>();

  constructor(private router: Router) { }

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.authSuccesfully();
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 100000).toString()
    };
    this.authSuccesfully();
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
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
