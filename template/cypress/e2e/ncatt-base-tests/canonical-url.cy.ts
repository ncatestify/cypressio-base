describe('Canonical URL', () => {
  it('Canonical URL exists and uses HTTPS', () => {
    cy.visit('/');
    cy.ttValidateCanonicalUrl();
  });
});
