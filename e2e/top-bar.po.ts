import { browser, element, by } from 'protractor';

export class TopBar {
    start() {
        return browser.get('/');
    }

    navigateTo(page: string) {
        const el = element(by.linkText(page));
        el.getAttribute('href').then((href: string) => {
            return browser.get(href);
        });
    }

    getHeader() {
        return element(by.css('h1')).getText();
    }

    getTitle() {
        return browser.getTitle();
    }

    getURL() {
        return browser.getCurrentUrl();
    }
}
