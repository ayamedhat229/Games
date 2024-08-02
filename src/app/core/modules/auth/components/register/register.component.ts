import { VerifyAccountComponent } from './../verify-account/verify-account.component';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  ngOnInit(): void {
    
  }
 constructor(private _AuthService:AuthService, private _Router:Router, private _Toastr:ToastrService,public dialog: MatDialog){}
 registerForm = new FormGroup ({
  email :  new FormControl('',[Validators.required,Validators.email]),
  userName   :  new FormControl('',Validators.required),
  country : new FormControl('',Validators.required),
  phoneNumber : new FormControl('',Validators.required),
  password  : new FormControl('',[Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')]),
  confirmPassword  :  new FormControl('', [Validators.required,Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)[A-Za-z\\d!$%@#£€*?&]{5,12}$')])
 })
onSubmit(data:FormGroup){
  this._AuthService.RegisterUser(data.value).subscribe({
    next:(res)=>{
      console.log(res)
    },
    error:(err)=>{
      console.log(err)
      this._Toastr.error('Register Failed')
    },
    complete:()=>{
   
    this._Toastr.success('Register Successfully','Please check your Email and check your OTP')
    }
  })
}
// openDialog(): void {
//   const dialogRef = this.dialog.open(VerifyAccountComponent, {
//     data:{},
//   });

//   dialogRef.afterClosed().subscribe(result => {
//     console.log('The dialog was closed',result);
//     if(result){
//       this.onVerifyAccount(result)
//     }
//   });
// }
// onVerifyAccount(data:any){
//   this._AuthService.verifyUser(data.value).subscribe({
//     next:(res)=>{
//       console.log(res)
//     },
//     error:(err)=>{
//       console.log(err)
//       this._Toastr.error('Send OTP is Falied')
//     },
//     complete:()=>{
//       this._Toastr.success('Send OTP')
//     }
//   })
// }
}
