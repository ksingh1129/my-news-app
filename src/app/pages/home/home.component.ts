import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { NewsService } from '../../services/news.service';
import { TopHeadLinesResponseModel, Article } from 'src/app/models/top-head-lines-response-model';

import * as moment from 'moment';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  status: string = "";
  successResponseModel: TopHeadLinesResponseModel;
  news: Array<any>;

  items: Array<any> = [];
  pageOfItems: Array<any>;

  page: number;
  pageSize: number;
  collectionSize: number;

  pageLoad: boolean = false;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.successResponseModel = res;
      this.news = this.successResponseModel.articles;
      this.page = 0;
      this.pageSize = 10;
      this.collectionSize = this.news.length;
      this.pageLoad = true;
    });
  }

  viewDetail(news: Article){
    let url = `${news.title}`;

    let navigationExtras: NavigationExtras = {
      queryParams: {
        sourceName: news.source.name,
        author: news.author,
        title: news.title,
        content: news.content,
        description: news.description,
        url: news.url,
        urlToImage: news.urlToImage,
        publishedAt: news.publishedAt
      }
    };
    console.log(navigationExtras);
    this.router.navigate([url], navigationExtras);
  }

}
