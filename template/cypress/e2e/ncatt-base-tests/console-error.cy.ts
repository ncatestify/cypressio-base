describe('Console Error', () => {
  it('should log error to console', () => {
    cy.ttSetupConsoleErrorListener();
  });
});
