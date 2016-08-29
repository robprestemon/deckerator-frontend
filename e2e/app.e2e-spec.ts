import { DeckeratorFrontendPage } from './app.po';

describe('deckerator-frontend App', function() {
  let page: DeckeratorFrontendPage;

  beforeEach(() => {
    page = new DeckeratorFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
