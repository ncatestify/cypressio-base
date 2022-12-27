/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint link on starpage is clickable', () => {
    cy.ncaValidateImprintClickable();
  });

  it('Every internal page on startpage has status code 200', () => {
    cy.ncaEveryInternalLinkStatusOk();
  });

  it('Every internal page on startpage is loading', () => {
    cy.ncaEveryInternalLinkIsLoading();
  });

  it('Validates no google fonts are being loaded', () => {
    cy.ncaValidateNoGoogleFonts();
  });
});
