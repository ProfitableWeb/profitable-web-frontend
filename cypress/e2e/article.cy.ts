describe('ProfitableWeb - Article Pages E2E', () => {
  // Test data for hobby monetization articles
  const testArticle = {
    slug: 'how-to-monetize-photography-hobby',
    title: 'How to Monetize Your Photography Hobby',
    description: 'Learn proven strategies to turn your photography passion into financial capital'
  }

  it('should navigate to article from homepage', () => {
    cy.visitAndWait('/')
    
    // Click on first article
    cy.get('.article-card').first().click()
    
    // Should be on article page
    cy.url().should('match', /\/[a-z0-9-]+$/)
    cy.get('.article-content').should('be.visible')
  })

  it('should display article with proper SEO metadata', () => {
    // Visit specific article (will be replaced with real data)
    cy.visitAndWait(`/${testArticle.slug}`)
    
    // Check SEO
    cy.checkSEO(testArticle.title, testArticle.description)
    
    // Check JSON-LD for Article
    cy.checkJSONLD('Article')
    
    // Check article structure
    cy.checkArticle(testArticle.title)
  })

  it('should have monetization-focused content', () => {
    cy.visitAndWait(`/${testArticle.slug}`)
    
    // Check for monetization keywords
    cy.get('.article-content').should('contain.text', 'monetiz')
    cy.get('.article-content').should('contain.text', 'hobby')
    
    // Check for actionable insights
    cy.get('.article-content').should('contain.text', 'strategy')
  })

  it('should have proper navigation', () => {
    cy.visitAndWait(`/${testArticle.slug}`)
    
    // Should have back to home navigation
    cy.get('.nav-primary').should('be.visible')
    cy.get('.nav-link[href="/"]').should('exist')
    
    // Should have category navigation
    cy.get('.article-meta .category').should('exist')
  })

  it('should have social sharing capabilities', () => {
    cy.visitAndWait(`/${testArticle.slug}`)
    
    // Check for social sharing meta tags
    cy.get('meta[property="og:title"]').should('exist')
    cy.get('meta[property="og:description"]').should('exist')
    cy.get('meta[property="og:type"]').should('have.attr', 'content', 'article')
    
    // Check for Twitter Card
    cy.get('meta[name="twitter:card"]').should('exist')
  })

  it('should load quickly and be SEO-optimized', () => {
    cy.visitAndWait(`/${testArticle.slug}`)
    
    // Performance check
    cy.checkPerformance()
    
    // Check that images are optimized (if any)
    cy.get('img').each(($img) => {
      cy.wrap($img).should('have.attr', 'alt')
    })
    
    // Check heading structure
    cy.get('h1').should('have.length', 1)
    cy.get('h2, h3, h4').should('have.length.greaterThan', 0)
  })
})