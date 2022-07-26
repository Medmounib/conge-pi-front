import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {User} from './user.model';
import {AuthResponse} from './auth-response';
import {Router} from '@angular/router';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  // @ts-ignore
  userSubject = new BehaviorSubject<User>(null);

  url = environment.api;

  constructor(
    private http: HttpClient,
    private router: Router) {
  }

  signIn(credentials: any) {
    return this.http.post<AuthResponse>(this.url + '/users/login', credentials);
  }

  signUp(userData: any) {
    return this.http.post<AuthResponse>(this.url + '/users', userData);
  }

  logOut() {
    // @ts-ignore
    this.userSubject.next(null);
    localStorage.removeItem('userData');
    this.redirectToSignIn();
  }

  createUser(response: AuthResponse) {
    const user: User = {
      _id: response.user._id,
      firstName: response.user.firstName,
      lastName: response.user.lastName,
      address: response.user.address,
      email: response.user.email,
      token: response.token,
      createdAt: new Date(response.user.createdAt),
      updatedAt: new Date(response.user.updatedAt)
    };
    this.userSubject.next(user);
    this.storeUser(user);
  }

  autoLogin() {
    // @ts-ignore
    const user: User = JSON.parse(localStorage.getItem('userData'));
    if (!user) {
      return;
    }
    this.userSubject.next(user);
  }

  // stores user in jSON format to local storage
  storeUser(user: User): void {
    localStorage.setItem('userData', JSON.stringify(user));
  }

  redirectToHome() {
    this.router.navigate(['/']).then();
  }

  redirectToSignIn() {
    this.router.navigate(['/auth/login']).then();
  }

  getConnectedUserSubject(): BehaviorSubject<User> {
    return this.userSubject;
}
}
