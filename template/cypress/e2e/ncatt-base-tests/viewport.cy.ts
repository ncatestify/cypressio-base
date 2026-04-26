describe('Viewport meta tag', () => {
  it('Viewport meta tag exists with width=device-width', () => {
    cy.visit('/');
    cy.ttValidateViewportMeta();
  });
});
