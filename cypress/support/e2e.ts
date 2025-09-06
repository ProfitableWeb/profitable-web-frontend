// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// ProfitableWeb specific global setup
beforeEach(() => {
  // Set up viewport for consistent testing
  cy.viewport(1280, 720)
  
  // Intercept API calls to backend
  cy.intercept('GET', '/api/**', { fixture: 'api-response.json' }).as('apiCall')
})

// Global error handling
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent the error from failing the test
  // Only for development/testing purposes
  if (err.message.includes('ResizeObserver loop limit exceeded')) {
    return false
  }
  return true
})