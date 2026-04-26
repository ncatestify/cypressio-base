describe('Form labels', () => {
  it('All form elements have proper labels', () => {
    cy.visit('/');
    cy.ttValidateFormLabels();
  });
});
