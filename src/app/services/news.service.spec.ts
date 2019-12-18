import { Observable, Observer } from 'rxjs';
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { TopHeadLinesResponseModel } from '../models/top-head-lines-response-model';
import { NewsService } from './news.service';
import { asyncData, asyncError } from '../../assets/tests/mock-observable';

describe('NewsService', () => {

  let httpClientSpy: { get: jasmine.Spy };
  let newsService: NewsService;

  const mockResponse: any = require('../../assets/tests/MockTopHeadLinesResponse.json');
  const mockResponseModel: any = require('../../assets/tests/MockTopHeadLinesResponseModel.json');

  interface Data {
    name: string;
  }

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    newsService = new NewsService(httpClientSpy as any);
  });

  it('should being call with ok status returned', () => {
    const expectedData: TopHeadLinesResponseModel = {
      status: 'ok',
      totalResults: 2,
      articles: [
        {
          source: {
            id: null,
            name: "Etonline.com"
          },
          author: "Liz Calvario‍",
          title: "'The Voice' Crowns Season 17 Winner -- Find Out Who Won! - Entertainment Tonight",
          description: "Another season comes to an end and the winner is...",
          url: "https://www.etonline.com/the-voice-crowns-season-17-winner-find-out-who-won-138165",
          urlToImage: "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2019-12/gettyimages-1189046935.jpg?itok=XwF8daSw",
          publishedAt: "2019-12-18T03:59:35Z",
          content: "It all comes down to this!\r\nIt's been an incredible season 17 for The Voice, but only one could be crowned the winner. Wednesday's finale was a special one, as for the first time in the last seven seasons, all four coaches on the NBC singing competition show … [+1874 chars]"
        },
        {
          source: {
            id: "cnn",
            name: "CNN"
          },
          author: "Paul LeBlanc, CNN",
          title: "Democrat from swing district: I didn't want to impeach Trump for months 'and then the facts changed' - CNN",
          description: "A freshman Democratic congresswoman from a swing district says she resisted supporting the impeachment of President Donald Trump for months until \"the facts changed\" and she decided to vote yes on both articles of impeachment.",
          url: "https://www.cnn.com/2019/12/17/politics/swing-district-democrat-elissa-slotkin-trump-impeachment-cnntv/index.html",
          urlToImage: "https://cdn.cnn.com/cnnnext/dam/assets/191005145532-slotkin-super-tease.jpg",
          publishedAt: "2019-12-18T02:57:00Z",
          content: "Washington (CNN)A freshman Democratic congresswoman from a swing district says she resisted supporting the impeachment of President Donald Trump for months until \"the facts changed\" and she decided to vote yes on both articles of impeachment.\r\nBefore Monday, … [+2244 chars]"
        }]
    };

    httpClientSpy.get.and.returnValue(asyncData(mockResponse));

    newsService.getTopHeadlinesNews().subscribe(
      response => expect(response['status']).toEqual(expectedData.status, 'expected data'),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);

  });

  it('should contain TopHeadLinesRsponseModel', () => {

    const expectedModel: TopHeadLinesResponseModel = {
      status: "",
      totalResults: 0,
      articles: [
        {
          source: {
            id: null,
            name: ""
          },
          author: "",
          title: "",
          description: "",
          url: "",
          urlToImage: "",
          publishedAt: "",
          content: ""
        }
      ]
    };

    httpClientSpy.get.and.returnValue(asyncData(mockResponseModel));
    newsService.getTopHeadlinesNews().subscribe(
      response => expect(response).toEqual(expectedModel),
      fail
    );

    expect(httpClientSpy.get.calls.count()).toBe(1);
  });

});
