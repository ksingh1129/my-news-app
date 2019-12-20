import { Component, OnInit} from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { NewsService } from '../../services/news.service';
import { TopHeadLinesResponseModel } from './../../models/top-head-lines-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  successResponseModel: TopHeadLinesResponseModel;
  pageLoad: boolean = false;

  private keySearchSubject = new Subject<string>();
  responseAsync = this.keySearchSubject.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(keySearch => this.searchNewsInfo(keySearch))
  )

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.successResponseModel = res;
      this.successResponseModel;
      this.pageLoad = true;
    });
  }

  searchNews(key: string) {
    key = key.toLowerCase();
    this.keySearchSubject.next(key);
  }

  searchNewsInfo(key: string): Observable<any> {
    let responseResult: TopHeadLinesResponseModel
    const newsInfo = new Observable<any>((observer: any) => {
      this.newsService.getTopHeadlinesNews().subscribe((res: any)=> {
        responseResult = res;
        let searchResult = responseResult.articles.filter(x => x.title.toLowerCase().includes(key));
        
        responseResult.articles = searchResult;
        observer.next(responseResult);
      });
    });
    return newsInfo;
  }

}
