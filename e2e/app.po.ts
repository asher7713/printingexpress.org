import { browser, element, by } from 'protractor';

export class PrintingexpressPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeader() {
    return element(by.css('app-root h1')).getText();
  }
}
