import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { INews } from '../models/news.interface';


@Injectable({
  providedIn: 'root'
})
export class MemoryService implements InMemoryDbService{

  constructor() { }

  public createDb() {
    let newsItems: INews[] = [
      {
        id: 1,
        title: 'News item 1',
        description: 'Description of news item 1', 
        summary: 'Summary of news item 1',
        fullNews: 'Full news of news item 1'
      },
      {
        id: 2,
        title: 'News item 2',
        description: 'Description of news item 2', 
        summary: 'Summary of news item 2',
        fullNews: 'Full news of news item 2'
      },
      {
        id: 3,
        title: 'News item 3',
        description: 'Description of news item 3', 
        summary: 'Summary of news item 3',
        fullNews: 'Full news of news item 3'
      },
      {
        id: 4,
        title: 'News item 4',
        description: 'Description of news item 4', 
        summary: 'Summary of news item 4',
        fullNews: 'Full news of news item 4'
      },
    ];

    return { newsItems };
  }

  // public genId(newsItems: INews[]): number {
  //   return newsItems.length > 0 ? Math.max(...newsItems.map(news => news.id)) + 1 : 11;
  // }
}
