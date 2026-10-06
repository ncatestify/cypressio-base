describe('Console Error', () => {
  it('should log error to console', () => {
    cy.visit('/');
    cy.ttSetupConsoleErrorListener();
  });
});
