---
trigger: manual
---

# SEO & Performance Optimization

**Type:** Always Apply

## SEO Best Practices

### Metadata Management

- Always use proper meta tags through the HeadContent component
- Implement structured data (JSON-LD) for better search visibility
- Use semantic HTML elements (header, main, aside, footer, section, article)
- Optimize page titles and descriptions for each route

### Performance Optimization

```typescript
// Optimize font loading
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Prevent invisible text during font load
});

// Optimize images
import Image from 'next/image';

<Image
  src="/hero-image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
/>
```

### Core Web Vitals

- **LCP (Largest Contentful Paint)**: Optimize images, fonts, and critical rendering path
- **FID (First Input Delay)**: Minimize JavaScript execution time
- **CLS (Cumulative Layout Shift)**: Use proper image dimensions and avoid layout shifts

### Static Export Optimization

- Leverage Next.js static export for better performance
- Optimize bundle size with tree shaking and code splitting
- Use appropriate caching strategies
- Minimize external dependencies

## Accessibility Standards

### WCAG Compliance

- Ensure proper heading hierarchy (h1 → h2 → h3)
- Provide alt text for all images
- Ensure sufficient color contrast (4.5:1 for normal text)
- Support keyboard navigation
- Use ARIA labels where necessary

### Semantic HTML

```typescript
// Good: Semantic structure
<article>
  <header>
    <h1>Article Title</h1>
    <time dateTime="2025-01-15">January 15, 2025</time>
  </header>
  <main>
    <p>Article content...</p>
  </main>
</article>

// Avoid: Non-semantic divs for everything
<div>
  <div>Article Title</div>
  <div>January 15, 2025</div>
  <div>Article content...</div>
</div>
```

### Theme and User Preferences

- Support system theme preference (prefers-color-scheme)
- Respect reduced motion preferences
- Provide theme toggle functionality
- Maintain theme persistence across sessions
