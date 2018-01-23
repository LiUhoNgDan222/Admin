import { Newxing.ManagePage } from './app.po';

describe('newxing.manage App', () => {
  let page: Newxing.ManagePage;

  beforeEach(() => {
    page = new Newxing.ManagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
