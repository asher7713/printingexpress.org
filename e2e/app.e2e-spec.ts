import { PrintingexpressPage } from './app.po';
import {} from 'jasmine';

describe('printingexpress App', function() {
  let page: PrintingexpressPage;

  beforeEach(() => {
    page = new PrintingexpressPage();
  });

  it('should have a title of Full-Service Printing', () => {
    page.navigateTo();
    expect(page.getHeader()).toEqual('Full-Service Printing');
  });
});
