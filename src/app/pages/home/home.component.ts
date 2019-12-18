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

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.successResponseModel = res;
      this.news = this.successResponseModel.articles;

      this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`})); 

      this.page = 0;
      this.pageSize = 10;
      this.collectionSize = this.news.length;
    });
  }

  viewDetail(news: Article){
    let url = `${news.title}`;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        content: news.content
      }
    };
    console.log(navigationExtras);
    this.router.navigate([url], navigationExtras);
  }

}
