describe('Page loaded.', () => {
  it('Page is fully loaded', () => {
    cy.visit('/');
    cy.ttPageLoaded();
  });
});
