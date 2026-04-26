describe('Meta description', () => {
  it('Meta description tag exists and is non-empty', () => {
    cy.visit('/');
    cy.ttValidateMetaDescription();
  });
});
