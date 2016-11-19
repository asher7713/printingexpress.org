import { PrintingexpressPage } from './app.po';

describe('printingexpress App', function() {
  let page: PrintingexpressPage;

  beforeEach(() => {
    page = new PrintingexpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
