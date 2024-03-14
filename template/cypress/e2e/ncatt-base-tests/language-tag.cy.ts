describe('Language tag', () => {
  it('should have a de language tag', () => {
    cy.visit('/');
    cy.ttValidateLanguageTag();
  });
});
