import { Injectable } from '@angular/core';
import { LoginInterface } from '../models/login-interface';
import { UserApi } from '../api/user.api';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user-interface';
import { Router } from '@angular/router';
@Injectable()
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private userApi: UserApi, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(data: LoginInterface) {
    return this.userApi.login(data).pipe(
      map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigateByUrl('/login');
  }
}
