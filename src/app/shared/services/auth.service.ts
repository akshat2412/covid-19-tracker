import { Injectable } from '@angular/core';
import { IUser } from '../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ADMIN_EMAIL: string = 'admin@admin.com';
  constructor() { }

  public isAuthenticated(): boolean {
    const loginToken = localStorage.getItem('loginToken');
    if (loginToken && loginToken === this.ADMIN_EMAIL) {
      return true;
    }
    return false;
  }

  public login(user: IUser): void {
    localStorage.setItem('loginToken', user.email);
  }

  public logOut() {
    localStorage.removeItem('loginToken');
  }

  public isLoggedIn(): boolean {
    const loginToken = localStorage.getItem('loginToken');
    if (loginToken && loginToken.length > 0) {
      return true;
    }
    return false;
  }
}
