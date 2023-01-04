/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint link on starpage is clickable', () => {
    cy.ttValidateImprintClickable();
  });

  it('No external google fonts are loading', () => {
    cy.ttValidateNoGoogleFonts();
  });

  it('Every internal page on startpage has status code 200', () => {
    cy.ttEveryInternalLinkStatusOk();
  });

  it('Every internal page on startpage is loading', () => {
    cy.ttEveryInternalLinkIsLoading();
  });

  it('Validates no google fonts are being loaded', () => {
    cy.ttValidateNoGoogleFonts();
  });
});
