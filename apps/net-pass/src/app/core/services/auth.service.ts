import { Injectable } from '@angular/core';
import { LoginInterface } from '../interfaces/login-interface';
import { UserApi } from '../api/user-api';

@Injectable()
export class AuthService {

  constructor(private userApi: UserApi) { }

  login(data: LoginInterface) {
      return this.userApi.createSession(data);
  }
}