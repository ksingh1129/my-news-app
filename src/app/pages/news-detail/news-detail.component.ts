import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NewsDetailModel } from 'src/app/models/news-detail-model';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.scss']
})
export class NewsDetailComponent implements OnInit {

  newsDetail: NewsDetailModel;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: NewsDetailModel) => {
      this.newsDetail = params;
      console.log(params);
      console.log(this.newsDetail.title);
    });
  }

  goBack() {
    this.router.navigateByUrl('');
  }

}
