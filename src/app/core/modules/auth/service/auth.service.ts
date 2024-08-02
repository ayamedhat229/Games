import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
private baseUrl = "https://upskilling-egypt.com:3003/api/v1";
  role: string | any;

constructor(private _HttpClient: HttpClient, private _Router:Router) {
  if(localStorage.getItem('userToken')!==null){
    this.getProfile()
  }
}
// private accessTokenKey = 'accessToken';
// private refreshTokenKey = 'refreshToken';



// setTokens(accessToken: string, refreshToken: string): void {
//   localStorage.setItem(this.accessTokenKey, accessToken);
//   localStorage.setItem(this.refreshTokenKey, refreshToken); 
// }

// getAccessToken(): string | null {
//   return localStorage.getItem(this.accessTokenKey);
// }

// getRefreshToken(): string | null {
//   return localStorage.getItem(this.refreshTokenKey);
// }

// clearTokens(): void {
//   localStorage.removeItem(this.accessTokenKey);
//   localStorage.removeItem(this.refreshTokenKey);
// }

// isLoggedIn(): boolean {
//   return this.getAccessToken() !== null;
// }
getProfile(){
  let encoded : any = localStorage.getItem('userToken');
  let decoded : any = jwtDecode(encoded)
  localStorage.setItem('userRole',decoded.userGroup);
  localStorage.setItem('userName',decoded.userName);
  localStorage.setItem('userEmail',decoded.userEmail);
  this.getRole()
}
getRole(){
  if(localStorage.getItem('userToken')!==null&&localStorage.getItem('userRole')!==null){
    this.role=localStorage.getItem('userRole');
    console.log(this.role)
  }
}
  RegisterUser(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/Users/Register`,data)
  }
  LoginUser(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/Users/Login`,data)
  }
  forgetPassword(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/Users/Reset/Request`,data)
  }
  resetPassword(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/Users/Reset`,data)
  }
  verifyUser(data:any):Observable<any>{
    return this._HttpClient.put(`${this.baseUrl}/Users/verify`,data)
    
  }
  resendOTp(data:any):Observable<any>{
    return this._HttpClient.post(`${this.baseUrl}/auth/resend-otp`,data)
  }
  logOut(){
    localStorage.clear();
    this._Router.navigate(['/auth/login'])
  }
}


