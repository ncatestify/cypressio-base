describe('Console warnings', () => {
  it('No console warnings on page load', () => {
    cy.visit('/');
    cy.ttCheckConsoleWarnings();
  });
});
