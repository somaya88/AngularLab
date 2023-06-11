import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  http = {};
  constructor(private httpclient: HttpClient) {
    this.http = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  }

  signUpUser(user: Iuser) {
    return this.httpclient.post<Iuser>(
      `${environment.baseAPIURL}/users`,
      JSON.stringify(user),
      {
        headers: {
          'Content-Type': 'Application/json',
        },
      }
    );
  }

}

