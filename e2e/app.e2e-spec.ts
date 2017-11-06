import { PolioVaccinationSystemPage } from './app.po';

describe('polio-vaccination-system App', () => {
  let page: PolioVaccinationSystemPage;

  beforeEach(() => {
    page = new PolioVaccinationSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
