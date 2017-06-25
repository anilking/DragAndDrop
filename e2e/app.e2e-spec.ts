import { DraganddropPage } from './app.po';

describe('draganddrop App', () => {
  let page: DraganddropPage;

  beforeEach(() => {
    page = new DraganddropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
