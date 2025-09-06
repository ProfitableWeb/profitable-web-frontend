/// <reference types="cypress" />

// ***********************************************
// ProfitableWeb Custom Commands
// ***********************************************

// SEO and Meta checking commands
Cypress.Commands.add('checkSEO', (title: string, description?: string) => {
  cy.title().should('contain', title)
  if (description) {
    cy.get('meta[name="description"]').should('have.attr', 'content', description)
  }
})

// JSON-LD structured data validation
Cypress.Commands.add('checkJSONLD', (type: string) => {
  cy.get('script[type="application/ld+json"]')
    .should('exist')
    .then(($script) => {
      const jsonLD = JSON.parse($script.text())
      expect(jsonLD['@type']).to.equal(type)
    })
})

// Performance and Core Web Vitals
Cypress.Commands.add('checkPerformance', () => {
  cy.window().then((win) => {
    const observer = new win.PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          expect(entry.loadEventEnd - entry.loadEventStart).to.be.below(3000) // Load time < 3s
        }
      }
    })
    observer.observe({ entryTypes: ['navigation'] })
  })
})

// Wait for page to be fully loaded (including images)
Cypress.Commands.add('waitForPageLoad', () => {
  cy.window().should('have.property', 'document')
  cy.document().should('have.property', 'readyState', 'complete')
})

// Check for accessibility violations
Cypress.Commands.add('checkAccessibility', () => {
  cy.get('main').should('exist')
  cy.get('h1').should('exist')
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt')
  })
})

// Navigation helpers for ProfitableWeb
Cypress.Commands.add('navigateToArticle', (slug: string) => {
  cy.visit(`/articles/${slug}`)
  cy.waitForPageLoad()
})

Cypress.Commands.add('navigateToCategory', (category: string) => {
  cy.visit(`/categories/${category}`)
  cy.waitForPageLoad()
})

// Mock API responses for testing
Cypress.Commands.add('mockApiResponse', (endpoint: string, response: any) => {
  cy.intercept('GET', endpoint, response).as('mockApi')
})

// Enhanced visit with loading wait
Cypress.Commands.add('visitAndWait', (url: string) => {
  cy.visit(url)
  cy.waitForPageLoad()
})

// Check article structure and content
Cypress.Commands.add('checkArticle', (title: string) => {
  // Check article structure
  cy.get('h1').should('contain', title)
  cy.get('.article-content').should('be.visible')
  cy.get('.article-meta').should('be.visible')
  
  // Check for monetization context
  cy.get('body').then(($body) => {
    const content = $body.text().toLowerCase()
    const monetizationKeywords = ['monetiz', 'profit', 'income', 'revenue', 'business', 'financial']
    const hasMonetizationContent = monetizationKeywords.some(keyword => content.includes(keyword))
    expect(hasMonetizationContent, 'Article should contain monetization-related content').to.be.true
  })
})

// Complete monetization discovery journey
Cypress.Commands.add('monetizationJourney', () => {
  // Step 1: Discover ProfitableWeb's purpose
  cy.visitAndWait('/')
  cy.get('body').should('contain.text', 'monetiz')
  cy.get('body').should('contain.text', 'hobby')
  
  // Step 2: Explore categories to find relevant hobby
  cy.get('nav').contains('Категории').click()
  cy.get('.category-card').should('have.length.greaterThan', 0)
  cy.get('.category-card').first().click()
  
  // Step 3: Read monetization strategies
  cy.get('.article-card').should('have.length.greaterThan', 0)
  cy.get('.article-card').first().click()
  
  // Step 4: Validate actionable content
  cy.checkArticle('') // Title will be dynamic
  cy.get('.article-content').should('contain.text', 'strategy')
  
  // Step 5: Check for next steps or related content
  cy.get('body').should('satisfy', ($body) => {
    const text = $body.text().toLowerCase()
    return text.includes('related') || text.includes('next') || text.includes('more')
  })
})

// Custom type definitions
declare global {
  namespace Cypress {
    interface Chainable {
      checkSEO(title: string, description?: string): Chainable<Element>
      checkJSONLD(type: string): Chainable<Element>
      checkPerformance(): Chainable<Element>
      waitForPageLoad(): Chainable<Element>
      checkAccessibility(): Chainable<Element>
      navigateToArticle(slug: string): Chainable<Element>
      navigateToCategory(category: string): Chainable<Element>
      mockApiResponse(endpoint: string, response: any): Chainable<Element>
      visitAndWait(url: string): Chainable<Element>
      checkArticle(title: string): Chainable<Element>
      monetizationJourney(): Chainable<Element>
    }
  }
}