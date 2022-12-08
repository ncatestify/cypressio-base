/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Imprint link on starpage is clickable', () => {
    cy.validateImprintClickable();
  });

  it('Every internal page on startpage has status code 200', () => {
    cy.everyInternalLinkStatusOk();
  });

  it('Every internal page on startpage is loading', () => {
    cy.everyInternalLinkIsLoading();
  });
});
