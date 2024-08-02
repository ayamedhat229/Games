import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiUrl: string = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    // Create headers
    const headers = new HttpHeaders({
      'x-rapidapi-key': '6d1e8dd5a2msh4833a001de48cd1p1870eejsnf035bd77d8c3',
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
    });

    // Create a new request with the modified URL and headers
    const apiRequest = request.clone({
      url: `${apiUrl}${request.url.startsWith('?') ? '' : '/'}${request.url}`,
      headers: headers
    });

    // Pass the modified request to the next handler
    return next.handle(apiRequest);
  }
}
