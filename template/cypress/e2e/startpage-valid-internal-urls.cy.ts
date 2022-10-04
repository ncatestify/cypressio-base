describe('Validate internal links', () => {
  let urls: Array<string>;

  beforeEach(() => {
    cy.visit('/');
    cy.get('a', { timeout: Cypress.env('waitForStartpage') }).should('be.visible');
  });

  it('Every page has status code 200 and no redirect <200>', () => {
    cy.getInternalUrls().then((urls: Array<string>) => {
      urls.forEach((url) => {
        cy.request({
          url: url,
          followRedirect: false
        }).then((resp) => {
          expect(resp.status).to.eq(200);
        });
      });
    });
  });

  it('Validate that imprint is visible <imprint>', () => {
    cy.get('a').contains('Impressum').should('be.visible');
  });
});
