import { Component, OnInit } from '@angular/core';

import { NewsService } from '../../services/news.service';
import { TopHeadLinesResponseModel } from 'src/app/models/top-head-lines-response-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  successResponseModel: TopHeadLinesResponseModel;
  pageLoad: boolean = false;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.newsService.getTopHeadlinesNews().subscribe((res: any) => {
      this.successResponseModel = res;
      this.pageLoad = true;
    });
  }

}
