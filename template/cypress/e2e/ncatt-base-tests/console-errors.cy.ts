import { StartPage } from "@/pages/StartPage"

describe('Console errors', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoaded();
  });

  it('Detects console errors', () => {
    cy.ttSetupConsoleErrorListener();
    cy.visit('/console-errors/');
  });
});
