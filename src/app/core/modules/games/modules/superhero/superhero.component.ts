import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../../../services/superhero-service/superhero.service';
@Component({
  selector: 'app-superhero',
  templateUrl: './superhero.component.html',
  styleUrls: ['./superhero.component.scss']
})
export class SuperheroComponent implements OnInit {
  constructor(private _SuperheroService:SuperheroService){}
  tableOfSuperheroData : any[]=[]
  ngOnInit(): void {
    this.getSuperheroData()
  }
  getSuperheroData(){
    this._SuperheroService.getSuperheroGames().subscribe({
      next:(res)=>{
        this.tableOfSuperheroData=res;
        console.log(this.tableOfSuperheroData)
      },
      error:(err)=>{
        console.log(err)
      }
    })
  }

}
