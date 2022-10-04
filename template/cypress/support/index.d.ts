declare namespace Cypress {
  interface Chainable<Subject = any> {
    getInternalUrls<Subject>(): Chainable<Subject>;
  }
}
