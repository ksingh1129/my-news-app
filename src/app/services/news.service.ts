import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { TopHeadLinesResponseModel } from '../models/top-head-lines-response-model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  res: any;

  constructor(private http: HttpClient) { }

  getTopHeadlinesNews(): Observable<any> {
    return this.http.get<any>("https://newsapi.org/v2/top-headlines?country=us&apiKey=8b83bf223a1c4609bc209b5d19c258b7")
              .pipe(
                tap(res => console.log("getTopHeadlinesNews log: ", res)),
                catchError(error => of(`Something happend: ${error}`))
              );
  }

}
