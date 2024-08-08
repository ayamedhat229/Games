import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(games:any[],term:string):any[]{
    return games.filter((games)=>games.title.includes(term))
  }

}
