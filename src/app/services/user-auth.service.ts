import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  userLoggedBehSubject: BehaviorSubject<boolean>;
  constructor() {
    this.userLoggedBehSubject = new BehaviorSubject<boolean>(this.isUserLogged);
  }
  userLogin(userEmail: string, password: string) {
    let userToken = '987654';
    localStorage.setItem('token', userToken);

    this.userLoggedBehSubject.next(true);
  }
  userLogout() {
    localStorage.removeItem('token');
    this.userLoggedBehSubject.next(false);
  }

  get isUserLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  getUserStatus(): Observable<boolean> {
    return this.userLoggedBehSubject.asObservable();
  }
}
