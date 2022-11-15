describe('Validate internal links', () => {
  let urls: Array<string>;

  beforeEach(() => {
    cy.visit('/');
    cy.get('a', { timeout: Cypress.env('waitForStartpage') }).should('be.visible');
  });

  it('Every page has status code 200 and no redirect <200>', () => {
    cy.getInternalUrls().then((urls: Array<string>) => {
      cy.wrap(urls).its('length').should('be.gt', 2);
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

  it('Every page is loading', () => {
    cy.getInternalUrls().then((urls: Array<string>) => {
      urls.forEach((url) => {
        cy.request({
          url: url,
          followRedirect: false
        }).then((resp) => {
          if (resp.headers['content-type'].includes('text/html')) {
            cy.visit(url);
            cy.get('a', { timeout: Cypress.env('waitForStartpage') }).should('be.visible');
          } else {
            cy.log('Skip content type');
            cy.log(url);
            cy.log(resp.headers['content-type'].toString());
          }
        });
      });
    });
  });

  it('Validate that imprint is clickable <imprint>', () => {
    cy.get('a').contains('Impressum').click();
  });
});
