import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpCLient:HttpClient) { }
  private apiUrl = 'https://free-to-play-games-database.p.rapidapi.com/api/';

  getHomeGames(): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '6d1e8dd5a2msh4833a001de48cd1p1870eejsnf035bd77d8c3',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    });
    return this._HttpCLient.get(`${this.apiUrl}games?platform=browser&category=mmorpg&sort-by=release-date`, { headers });
  }
  getDetailsGamesById(id:number): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-key': '6d1e8dd5a2msh4833a001de48cd1p1870eejsnf035bd77d8c3',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    });
    return this._HttpCLient.get(`${this.apiUrl}game?id=${id}`, { headers });
  }
}
