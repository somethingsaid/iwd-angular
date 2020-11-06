import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { newsReducer, NewsState } from 'src/app/reducers/news.reducer';
import { environment } from '../../environments/environment';


export interface AppState {
  news: NewsState
}

export const reducers: ActionReducerMap<AppState> = {
  news: newsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
