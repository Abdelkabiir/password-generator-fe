import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Options } from '../models/options';

@Injectable({
  providedIn: 'root'
})
export class PasswordApi {
  private apiUrl: string = environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  generatePassword(options: Options): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Accept', 'application/json');
    const body = {
      options
    }
    return this.http.post(this.apiUrl + 'password',body, {headers})
      .pipe(
        map((data) => {
          return data;
        }), catchError( error => {
          return throwError( "Couldn't create passwors" + error);
        })
      );
    }

}

