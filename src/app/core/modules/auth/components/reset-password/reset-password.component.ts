import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit{
  hide : boolean = true;
  hidden : boolean = true;
  ngOnInit(): void {
    
  }
  constructor(private _AuthService:AuthService, private _Toastr:ToastrService, private _Router:Router){}
  resetPAsswordForm = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    seed : new FormControl('',[Validators.required]),
    password :  new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
    confirmPassword :  new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
  })
  onSubmit(data:FormGroup){
    this._AuthService.resetPassword(data.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
        this._Toastr.error('Error')
      },
      complete:()=>{
        this._Toastr.success('Success')
        this._Router.navigate(['/auth/login'])
      }
    })
  }
}
