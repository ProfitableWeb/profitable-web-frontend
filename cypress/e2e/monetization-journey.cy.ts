describe('ProfitableWeb - Monetization Journey E2E', () => {
  it('should complete full hobby monetization journey', () => {
    // Start the monetization discovery journey
    cy.monetizationJourney()
  })

  it('should provide clear value proposition on homepage', () => {
    cy.visitAndWait('/')
    
    // Check for research blog messaging
    cy.get('body').should('contain.text', 'research')
    cy.get('body').should('contain.text', 'hobby')
    cy.get('body').should('contain.text', 'monetiz')
    
    // Check for clear call-to-action
    cy.get('[data-testid="cta"]').should('be.visible')
  })

  it('should showcase different hobby categories', () => {
    cy.visitAndWait('/categories')
    
    // Should show various hobby categories
    cy.get('.category-card').should('have.length.greaterThan', 2)
    
    // Each category should have clear monetization focus
    cy.get('.category-card').each(($card) => {
      cy.wrap($card).within(() => {
        cy.get('.category-title').should('be.visible')
        cy.get('.category-description').should('contain.text', 'monetiz')
      })
    })
  })

  it('should provide actionable insights in articles', () => {
    cy.visitAndWait('/')
    
    // Navigate to an article
    cy.get('.article-card').first().click()
    
    // Check for actionable content
    cy.get('.article-content').should('contain.text', 'strategy')
    cy.get('.article-content').should('contain.text', 'step')
    
    // Look for practical advice indicators
    cy.get('.article-content').then(($content) => {
      const text = $content.text().toLowerCase()
      const actionableWords = ['how to', 'strategy', 'method', 'approach', 'technique']
      const hasActionableContent = actionableWords.some(word => text.includes(word))
      expect(hasActionableContent).to.be.true
    })
  })

  it('should encourage reader engagement', () => {
    cy.visitAndWait('/')
    cy.get('.article-card').first().click()
    
    // Check for engagement elements
    cy.get('.article-content').should('be.visible')
    
    // Should have clear next steps or related content
    cy.get('body').should('contain.text', 'related')
      .or('contain.text', 'next')
      .or('contain.text', 'more')
  })
})