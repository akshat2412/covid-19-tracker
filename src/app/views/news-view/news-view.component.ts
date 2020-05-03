import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/shared/services/news.service';
import { INews } from 'src/app/shared/models/news.interface';
import { forkJoin } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {
  public config: any = {};
  public newsItems: INews[];
  public selectedNewsItem: INews;
  public selectedId: number = 1;
  public isWaiting: boolean = false;
  constructor(
    public newsService: NewsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isWaiting = true;
    const newsItems = this.newsService.getNews();
    const selectedNewsItem = this.newsService.getNewsById(this.selectedId);

    forkJoin([newsItems, selectedNewsItem]).subscribe(res => {
      this.newsItems = res[0];
      this.selectedNewsItem = res[1];
      this.isWaiting = false;
    })
  }


  public onClickNewsItem(id: number) {
    if(id === this.selectedId) {
      return;
    }
    this.selectedId = id;
    this.selectedNewsItem = this.newsItems.find((newsItem: INews) => { return newsItem.id === id; });
  }

  public onClickAddNews() {
    this.router.navigate(['add'], {relativeTo: this.activatedRoute});
  }
}
