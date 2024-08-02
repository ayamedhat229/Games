import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../../services/home-service/home.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  currentId:number = 0;
  itemsDetails:any={}
  constructor(private _HomeService:HomeService,private _ActivatedRoute:ActivatedRoute){
   this.currentId=_ActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getGamesDetails()
  }
  getGamesDetails(){
     this._HomeService.getDetailsGamesById(this.currentId).subscribe({
      next:(res)=>{
        this.itemsDetails=res;
        console.log(this.itemsDetails)
      },
      error:(err)=>{
        console.log(err )
      }
     })
  }


}
