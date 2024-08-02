import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private _AuthService:AuthService){}
ngOnInit(): void {
  
}
onLogout(){
  this._AuthService.logOut()
}
}
