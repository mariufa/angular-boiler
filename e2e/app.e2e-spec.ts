import { AngularBoilerPage } from './app.po';

describe('angular-boiler App', () => {
  let page: AngularBoilerPage;

  beforeEach(() => {
    page = new AngularBoilerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
