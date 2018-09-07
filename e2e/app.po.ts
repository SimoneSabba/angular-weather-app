import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getInput() {
    return element(by.id('city'));
  }

  getSearchButton() {
    return element(by.tagName('button'));
  }
}
