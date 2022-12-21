import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

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
    return next.handle(request);
  }
}
