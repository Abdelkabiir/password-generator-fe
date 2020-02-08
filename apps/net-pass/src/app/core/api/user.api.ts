import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInterface } from '../models/login-interface';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserApi {
private apiUrl: string = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  login(credentials) {
    const body = {
      session: credentials
    }
    return this.http.post<any>(this.apiUrl + 'session', body);
  }
}