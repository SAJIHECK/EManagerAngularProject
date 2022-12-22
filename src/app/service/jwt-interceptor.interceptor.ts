import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor(private router:Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<any>> 
  {
  
    if (request.url.search('/authenticate') === -1 ) {
      var token = localStorage.getItem('sJwt');
      if(token){
      request = request.clone({
        setHeaders:{Authorization: `Bearer ${token}`}
      });
    }
  }
    return next.handle(request).pipe(tap(() => {},
    (err: any) => {
    if (err instanceof HttpErrorResponse) {
      if (err.status !== 401) {
       return;
      }
      localStorage.removeItem('sJwt');
      this.router.navigate(['']);
    }
  }));
  }
}
