import { Injectable, Input } from '@angular/core';
import { HttpService } from './httpservice.service';
import { INews } from '../models/news.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(
    private httpService: HttpService
  ) { }

  public getNews(): Observable<INews[]> {
    return this.httpService.get('/api/newsItems').pipe(
      map((res) => res as INews[])
    );
  }

  public getNewsById(id: number): Observable<INews> {
    return this.httpService.get(`/api/newsItems/${id}`).pipe(
      map((res) => res as INews)
    );
  }

  public addNews(news: INews) {
    this.httpService.post('/api/newsItems', news).subscribe((res) => {
      return;
    })
  }
}
