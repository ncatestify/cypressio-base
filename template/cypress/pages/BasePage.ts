import { BasePage as PluginBasePage } from 'cypress-ncatestify-plugin'

export abstract class BasePage extends PluginBasePage {
  visit() {
    cy.visit('/');
  }

  waitForPageLoaded() {
    cy.ttPageLoaded();
  }
}
