/// <reference types="Cypress" />
describe('TESTIFY base tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Run all TESTIFY base tests', () => {
    cy.ttValidateAllImagesResponseStatusOk();
    cy.ttEveryInternalLinkStatusOk();
    cy.ttValidateNoGoogleServices();
    cy.ttValidateImprintClickable();
    cy.ttValidatePageContent();
    cy.ttInvalidPath404();
    cy.ttAccessibility();
    cy.ttValidateLanguageTag();
    cy.ttDetectHttp();
    cy.ttThreshold();
    cy.ttSetupConsoleErrorListener();
    cy.visit('/console-errors/');
  });
});
