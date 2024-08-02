import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../modules/auth/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _Router: Router, private _AuthService:AuthService) {}

  canActivate(): boolean {
    if (localStorage.getItem('userToken') !== null) {
      return true;
    } else {
      this._Router.navigate(['/auth/login']);
      return false;
    }
  }
}
