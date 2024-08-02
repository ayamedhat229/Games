import { Component, OnInit } from '@angular/core';
import { PixelService } from '../../../services/pixels-service/pixel.service';
@Component({
  selector: 'app-pixels',
  templateUrl: './pixels.component.html',
  styleUrls: ['./pixels.component.scss']
})
export class PixelsComponent implements OnInit{
  constructor(private _PixelService:PixelService){}
  tableOfPixelsData:any[]=[]
  ngOnInit(): void {
   this.getDataOfPixel() 
  }
getDataOfPixel(){
  this._PixelService.getPixelData().subscribe({
    next:(res)=>{
      this.tableOfPixelsData=res
      console.log(this.tableOfPixelsData)
    },
    error:(err)=>{
      console.log(err)
    }
  })
}
}
