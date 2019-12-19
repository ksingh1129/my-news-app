import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Article, TopHeadLinesResponseModel } from 'src/app/models/top-head-lines-response-model';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  newsResponse: TopHeadLinesResponseModel;

  private key = new Subject<string>();

  readonly searchResults = this.key.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(key => this.newsService.getTopHeadlinesNews())
  );

  constructor(private newsService: NewsService) { 
    console.log("HeaderComponent");
  }

  ngOnInit() {
    this.getArticles();
  }

  getAllNews() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.newsResponse = res;
      console.log(this.newsResponse);
    });
  }

  searchNews(key: string) {
    console.log(key);
    this.key.next(key);
  }

  getArticles() {
    return this.newsService.getTopHeadlinesNews().subscribe((res: TopHeadLinesResponseModel) => {
      console.log("CustomResponse");
      console.log(res);
    });
  }

}
