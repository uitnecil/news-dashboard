import { GoogleNewsPage } from './app.po';

describe('google-news App', () => {
  let page: GoogleNewsPage;

  beforeEach(() => {
    page = new GoogleNewsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
