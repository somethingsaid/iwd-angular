import { createAction, props } from '@ngrx/store';

export const ToggleLoading = createAction('[News] ToggleLoading');
export const FetchNews = createAction('[News] FetchNews');
export const FetchNewsSuccess = createAction('[News] FetchNewsSuccess', props<{news: any}>());
export const FetchNewsFailure = createAction('[News] FetchNewsFailure', props<{error: any}>());