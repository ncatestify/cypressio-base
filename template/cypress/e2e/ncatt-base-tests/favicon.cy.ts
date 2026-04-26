describe('Favicon', () => {
  it('Favicon exists and returns HTTP 200', () => {
    cy.visit('/');
    cy.ttValidateFavicon();
  });
});
