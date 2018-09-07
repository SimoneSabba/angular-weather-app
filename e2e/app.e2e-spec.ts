import { AppPage } from './app.po';

describe('angular-weather App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('e2e are running empty, please implement', () => {
    expect(page);
  });

  describe('search component', function() {
    it('should contain an input text', function() {
      expect(page.getInput().isPresent()).toBe(true);
    });

    it('should contain a button disabled as default', function() {
      const button = page.getSearchButton();
      expect(button.isPresent()).toBe(true);
      expect(button.getAttribute('disabled')).toBeDefined();
      expect(button.getText()).toEqual('Search');
    });

    it('should get button enable when input is not empty', function() {
      const input = page.getInput();
      const button = page.getSearchButton();
      input.sendKeys('Rome');
      expect(button.getAttribute('disabled')).toBeNull();
    });
  });

});
