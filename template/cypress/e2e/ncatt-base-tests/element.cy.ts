import { StartPage } from '@/pages/StartPage';

describe('Element selection.', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoaded();
  });

  it('Select element with ttEl', () => {
    cy.ttEl('body', 'Page Body').should('exist');
  });
});
