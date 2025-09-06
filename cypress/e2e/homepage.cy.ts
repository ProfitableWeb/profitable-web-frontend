describe('ProfitableWeb Homepage', () => {
  beforeEach(() => {
    // Mock API responses for consistent testing
    cy.mockApiResponse('/api/articles/featured', {
      articles: [
        {
          id: 1,
          title: 'Монетизация YouTube канала',
          slug: 'youtube-monetization',
          excerpt: 'Как заработать на своем контенте',
          category: 'видео-контент'
        }
      ]
    })
    
    cy.visit('/')
  })

  it('should load homepage with proper SEO', () => {
    cy.checkSEO('ProfitableWeb', 'Исследовательский блог по монетизации хобби')
    cy.checkJSONLD('WebSite')
    cy.checkAccessibility()
  })

  it('should display navigation menu', () => {
    cy.get('nav').should('be.visible')
    cy.get('nav').within(() => {
      cy.contains('Статьи').should('be.visible')
      cy.contains('Категории').should('be.visible')
      cy.contains('О проекте').should('be.visible')
    })
  })

  it('should show featured articles', () => {
    cy.get('[data-testid="featured-articles"]').should('exist')
    cy.get('[data-testid="article-card"]').should('have.length.at.least', 1)
    
    cy.get('[data-testid="article-card"]').first().within(() => {
      cy.get('h3').should('contain', 'Монетизация YouTube канала')
      cy.get('p').should('contain', 'Как заработать на своем контенте')
    })
  })

  it('should have proper performance', () => {
    cy.checkPerformance()
  })

  it('should be responsive', () => {
    // Test mobile view
    cy.viewport(375, 667)
    cy.get('nav').should('be.visible')
    cy.get('[data-testid="featured-articles"]').should('be.visible')
    
    // Test tablet view
    cy.viewport(768, 1024)
    cy.get('[data-testid="featured-articles"]').should('be.visible')
    
    // Test desktop view
    cy.viewport(1280, 720)
    cy.get('[data-testid="featured-articles"]').should('be.visible')
  })
})