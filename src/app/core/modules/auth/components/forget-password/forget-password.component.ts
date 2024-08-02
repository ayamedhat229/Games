import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit{
  ngOnInit(): void {
    
  }
  constructor(private _AuthService:AuthService, private _Toastr:ToastrService, private _Router:Router){}
  forgetPasswordForm = new FormGroup({
    email :  new FormControl('',[Validators.required,Validators.email])
  })
  onSubmit(data:FormGroup){
    this._AuthService.forgetPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
        this._Toastr.error('Email not Valid')
      },
      complete:()=>{
        this._Toastr.success('Send OTP','Please Check Your Mail');
        this._Router.navigate(['auth/reset-password'])
      }
    })
  }
}
