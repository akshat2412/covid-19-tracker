import { Injectable } from '@angular/core';
import { HttpService } from './httpservice.service';
import { INews } from '../models/news.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getNews() {
    this.httpService.get('/api/newsItems').subscribe((newsItems: any) => {
      console.log(newsItems);
    });
  }

  public addNews(news: INews) {
    this.httpService.post('/api/newsItems', news).subscribe((res) => {
      console.log(res);
    })
  }
}
