import { StartPage } from '@/pages/StartPage';

describe('Page content.', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoaded();
  });

  it('Page has valid content', () => {
    cy.ttValidatePageContent();
  });
});
