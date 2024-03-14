describe('HTTP', () => {
  it('There are no a href tags with http on the page', () => {
    cy.visit('/');
    cy.ttDetectHttp();
  });
});
