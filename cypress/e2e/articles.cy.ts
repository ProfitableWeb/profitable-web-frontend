describe('Article Pages', () => {
  beforeEach(() => {
    // Mock article data
    cy.mockApiResponse('/api/articles/youtube-monetization', {
      id: 1,
      title: 'Монетизация YouTube канала: Полное руководство',
      slug: 'youtube-monetization',
      content: 'Подробный гайд по монетизации YouTube...',
      category: 'видео-контент',
      tags: ['YouTube', 'монетизация', 'контент'],
      publishedAt: '2025-09-01',
      readingTime: 15,
      author: {
        name: 'ProfitableWeb Team',
        avatar: '/images/team-avatar.jpg'
      }
    })
  })

  it('should display article with proper SEO', () => {
    cy.navigateToArticle('youtube-monetization')
    
    cy.checkSEO('Монетизация YouTube канала')
    cy.checkJSONLD('Article')
    cy.checkAccessibility()
  })

  it('should show article content and metadata', () => {
    cy.navigateToArticle('youtube-monetization')
    
    // Article header
    cy.get('[data-testid="article-header"]').within(() => {
      cy.get('h1').should('contain', 'Монетизация YouTube канала')
      cy.get('[data-testid="reading-time"]').should('contain', '15 мин')
      cy.get('[data-testid="publish-date"]').should('be.visible')
    })
    
    // Article content
    cy.get('[data-testid="article-content"]').should('be.visible')
    
    // Tags
    cy.get('[data-testid="article-tags"]').within(() => {
      cy.contains('YouTube').should('be.visible')
      cy.contains('монетизация').should('be.visible')
    })
  })

  it('should have social sharing buttons', () => {
    cy.navigateToArticle('youtube-monetization')
    
    cy.get('[data-testid="social-share"]').should('be.visible')
    cy.get('[data-testid="share-twitter"]').should('have.attr', 'href').and('include', 'twitter.com')
    cy.get('[data-testid="share-linkedin"]').should('have.attr', 'href').and('include', 'linkedin.com')
  })

  it('should show related articles', () => {
    cy.mockApiResponse('/api/articles/related/*', {
      articles: [
        {
          id: 2,
          title: 'Создание онлайн-курсов',
          slug: 'online-courses',
          excerpt: 'Монетизация знаний через обучение'
        }
      ]
    })
    
    cy.navigateToArticle('youtube-monetization')
    
    cy.get('[data-testid="related-articles"]').should('be.visible')
    cy.get('[data-testid="related-article"]').should('have.length.at.least', 1)
  })
})