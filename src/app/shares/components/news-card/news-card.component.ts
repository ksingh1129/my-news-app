import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Article, TopHeadLinesResponseModel } from 'src/app/models/top-head-lines-response-model';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() newsResponse: TopHeadLinesResponseModel;

  page: number;
  pageSize: number;
  collectionSize: number;
  newsList: Array<Article>;

  constructor(private router: Router) { 
    this.page = 0;
    this.pageSize = 10;
  }

  ngOnInit() {
    this.newsList = this.newsResponse.articles;
    this.collectionSize = this.newsList.length;
    console.log(this.newsResponse);
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
