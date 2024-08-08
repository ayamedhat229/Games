import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  hide:boolean = true;
  ngOnInit(): void {
    
  }
constructor(private _AuthService:AuthService, private _Toastr:ToastrService, private _Router:Router){}
loginForm = new FormGroup({
  email : new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required ,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
})
onSubmit(data:FormGroup){
  this._AuthService.LoginUser(data.value).subscribe({
    next:(res)=>{
      // const tokens = this.getTokensFromServer();
    localStorage.setItem('userToken',res.token);
    this._AuthService.getProfile()
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Login Failed')
      this._Router.navigate(['/auth/login'])
    },
    complete:()=>{
      this._Toastr.success('Login Successfully')
      this._Router.navigate(['/games/home'])
    }
  })

}
getTokensFromServer() {
  // Simulate a call to the server to get tokens
  return {
    accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxNjU2ODQ4LCJleHAiOjE3MjE2NjA0NDh9.woYEcP_m4SdnACB3WB0YmGZlzqh-sV6Mpjy70fD-LAg",
    refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzIxNjU2ODQ4LCJleHAiOjE3MjI5NTI4NDh9.wFzjsgY-R_V1goN9hztfI0rXbWcDBxUzs0aECL5kuDA"
  };
}
}
