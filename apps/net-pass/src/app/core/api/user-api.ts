import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from '../interfaces/login-interface';

@Injectable()
export class UserApi {

  constructor(private http: HttpClient) { }

  createSession(credentials: LoginInterface) {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Authorization', `Basic ${btoa(`${credentials.username}:${credentials.password}`)}`);
    const body = null;
    
    return this.http.post('api/login', body, {headers})
  }
}