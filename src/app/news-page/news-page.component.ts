import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FetchNews } from '../actions/news.actions';
import { NewsData } from '../models/news.data';
import { AppState } from '../reducers';
import { selectNewsItems } from '../reducers/news.reducer';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {

  newsItems$: Observable<NewsData[]>;
  constructor(private store: Store<AppState>) { 
    this.newsItems$ = this.store.pipe(select(selectNewsItems))
  }

  ngOnInit(): void {
    this.store.dispatch(FetchNews());
  }

}
