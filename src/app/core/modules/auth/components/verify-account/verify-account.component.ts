import { Component, Inject } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-verify-account',
  templateUrl: './verify-account.component.html',
  styleUrls: ['./verify-account.component.scss']
})
export class VerifyAccountComponent {
  constructor(private _AuthService:AuthService,private _Toastr:ToastrService,
   
  ) {}
  verifyAccountForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    code : new FormControl('',[Validators.required])
  })
  onSubmit(data:FormGroup){
    this._AuthService.verifyUser(data.value).subscribe({
      next:(res)=>{
        console.log(res)
      },
      error:(err)=>{
        console.log(err)
        this._Toastr.error('OTP is not valid','Verify account is falied')
      },
      complete:()=>{
        this._Toastr.success('OTP is right','Verify account is success')
      }
    })
  }

 
}
