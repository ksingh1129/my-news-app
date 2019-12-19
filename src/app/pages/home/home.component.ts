import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { NewsService } from '../../services/news.service';
import { TopHeadLinesResponseModel, Article } from 'src/app/models/top-head-lines-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  successResponseModel: TopHeadLinesResponseModel;
  pageLoad: boolean = false;

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.successResponseModel = res;
      this.pageLoad = true;
    });
  }

}
