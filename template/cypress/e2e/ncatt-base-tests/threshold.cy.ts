import { StartPage } from "@/pages/StartPage"

describe('Threshold', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
    startPage.waitForPageLoaded();
  });

  it('Detects treshold', () => {
    cy.ttThreshold();
  });
});
