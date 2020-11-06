import * as fromNews from './news.actions';

describe('fetchNews', () => {
  it('should return an action', () => {
    expect(fromNews.FetchNews().type).toBe('[News] fetchNews');
  });
});
