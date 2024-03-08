import { StartPage } from '@/pages/StartPage';

describe('SEO validation for the startpage', () => {
  const startPage: StartPage = new StartPage();

  beforeEach(() => {
    startPage.visit();
  });

  it('Only one h1', () => {
    cy.ttOnlyOneH1();
  });

  it('Validates language tag', () => {
    cy.ttValidateLanguageTag();
  });

  it('Detects http', () => {
    cy.ttDetectHttp();
  });
});
