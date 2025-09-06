describe('User Journey: From Hobby to Profit', () => {
  it('should guide user through monetization discovery', () => {
    // Start on homepage
    cy.visit('/')
    cy.checkSEO('ProfitableWeb')
    
    // Browse categories
    cy.get('nav').contains('Категории').click()
    cy.url().should('include', '/categories')
    
    // Select a category (e.g., creative hobbies)
    cy.get('[data-testid="category-card"]').contains('Творчество').click()
    cy.url().should('include', '/categories/creative')
    
    // Read an article about monetizing creative skills
    cy.get('[data-testid="article-card"]').first().click()
    cy.get('[data-testid="article-content"]').should('be.visible')
    
    // Check if article has actionable content
    cy.get('[data-testid="action-steps"]').should('exist')
    cy.get('[data-testid="resources-list"]').should('exist')
    
    // Navigate to related monetization strategies
    cy.get('[data-testid="related-articles"]').within(() => {
      cy.get('[data-testid="related-article"]').first().click()
    })
    
    // Verify we're on another relevant article
    cy.get('h1').should('be.visible')
    cy.checkAccessibility()
  })

  it('should provide clear monetization paths', () => {
    cy.visit('/monetization-guide')
    
    // Check for step-by-step guide
    cy.get('[data-testid="monetization-steps"]').should('exist')
    cy.get('[data-testid="step"]').should('have.length.at.least', 3)
    
    // Each step should have clear actions
    cy.get('[data-testid="step"]').each(($step) => {
      cy.wrap($step).within(() => {
        cy.get('h3').should('be.visible') // Step title
        cy.get('p').should('be.visible')  // Step description
        cy.get('[data-testid="step-action"]').should('be.visible') // Action button/link
      })
    })
  })

  it('should track user progress through monetization journey', () => {
    // Mock user progress data
    cy.mockApiResponse('/api/user/progress', {
      completedSteps: ['market-research', 'skill-assessment'],
      currentStep: 'monetization-strategy',
      progress: 40
    })
    
    cy.visit('/dashboard')
    
    // Check progress indicator
    cy.get('[data-testid="progress-bar"]').should('be.visible')
    cy.get('[data-testid="progress-percentage"]').should('contain', '40%')
    
    // Check completed steps
    cy.get('[data-testid="completed-steps"]').within(() => {
      cy.contains('Исследование рынка').should('have.class', 'completed')
      cy.contains('Оценка навыков').should('have.class', 'completed')
    })
    
    // Check current step
    cy.get('[data-testid="current-step"]').should('contain', 'Стратегия монетизации')
  })
})