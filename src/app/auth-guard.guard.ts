import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  
   token = localStorage.getItem('sJwt');
  canActivate(){ 
    if(this.token){
      return true;
    }else{
    return false;
  }
  }
  
}
