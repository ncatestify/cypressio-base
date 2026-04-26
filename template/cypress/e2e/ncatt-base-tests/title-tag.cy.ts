describe('Title tag', () => {
  it('Title tag exists and is non-empty', () => {
    cy.visit('/');
    cy.ttValidateTitleTag();
  });
});
