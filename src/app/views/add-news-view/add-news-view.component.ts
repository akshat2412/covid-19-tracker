import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsService } from 'src/app/shared/services/news.service';

@Component({
  selector: 'app-add-news-view',
  templateUrl: './add-news-view.component.html',
  styleUrls: ['./add-news-view.component.scss']
})
export class AddNewsViewComponent implements OnInit {
  public newsForm: FormGroup
  constructor(
    private newsService: NewsService
  ) { }

  ngOnInit(): void {
    this.newsForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      fullNews: new FormControl('', [Validators.required]),
      summary: new FormControl('', [Validators.required])
    })
  }

  public addNews(news) {
    this.newsService.addNews(news);
    this.newsService.getNews();
  }

}
