import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home-service/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private _HomeServices:HomeService){}
  tableOFgames:any[]=[]
  imagePath:string='https://www.freetogame.com/';
  ngOnInit(): void {
    this.getAllHomeData()
  }
getAllHomeData(){
  this._HomeServices.getHomeGames().subscribe({
    next:(res)=>{
      this.tableOFgames=res;
      console.log(this.tableOFgames)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
