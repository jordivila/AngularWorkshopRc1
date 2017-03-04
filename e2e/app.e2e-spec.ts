import { AngularWorkshopRc1Page } from './app.po';

describe('angular-workshop-rc1 App', () => {
  let page: AngularWorkshopRc1Page;

  beforeEach(() => {
    page = new AngularWorkshopRc1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
