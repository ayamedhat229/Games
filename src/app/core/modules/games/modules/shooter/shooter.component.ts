import { Component, OnInit } from '@angular/core';
import { ShooterService } from '../../../services/shooter-service/shooter.service';
@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.scss']
})
export class ShooterComponent implements OnInit{
  constructor(private _ShooterService:ShooterService){}
  tableOfShooter:any;
  ngOnInit(): void {
    this.getAllShooterData()
  }

  getAllShooterData(){
    this._ShooterService.getGamesShoter().subscribe({
      next:(res)=>{
        this.tableOfShooter=res;
       console.log(this.tableOfShooter)
      },
      error:(err)=>{
        console.log(err)
      }

    })
  }

}
