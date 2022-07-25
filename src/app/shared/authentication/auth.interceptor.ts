import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {AuthService} from './auth.service';
import {exhaustMap, take} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // this statement is made to exclude sign-in and sign-up requests from being modified
    if (request.url.includes('users') && !request.url.includes('logout') && !(request.method === 'PUT')) {
      return next.handle(request);
    }
    return this.authService.userSubject.pipe(take(1), exhaustMap((user: any) => {
      if (!user) {
        return next.handle(request);
      }
      const modifiedRequest = request.clone({headers: request.headers.append('Authorization', 'Bearer ' + user.token)});
      return next.handle(modifiedRequest);
    }));
  }
}

