---
trigger: manual
---

# SCSS & Styling Standards

**Type:** Specific Files (`*.scss`, `*.css`)

## Architecture Principles

### Clean SCSS Structure

- Follow the established utils system: variables, mixins, breakpoints, etc.
- Import global utilities automatically via Next.js sassOptions
- Use CSS custom properties (CSS variables) for theming
- Maintain separation between light and dark themes

### File Organization

```scss
// Component-specific styles
.component-name {
  // Use BEM methodology for class naming
  &__element {
    // Element styles
  }

  &--modifier {
    // Modifier styles
  }

  &:hover,
  &:focus {
    // Interactive states
  }
}
```

### Theme Integration

```scss
// Always use CSS custom properties for colors
.component {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}
```

### Responsive Design

```scss
// Use established breakpoint mixins
.component {
  display: flex;

  @media (max-width: 640px) {
    flex-direction: column;
  }
}
```

## Best Practices

### Performance

- Minimize nesting (max 3 levels)
- Use efficient selectors
- Avoid !important declarations
- Group related properties

### Accessibility

- Ensure sufficient color contrast
- Support reduced motion preferences
- Use semantic HTML with appropriate SCSS

### Naming Conventions

- Use lowercase with hyphens for class names
- Use descriptive, semantic names
- Avoid styling based on content ("red-button" vs "danger-button")

### Code Organization

- Group properties logically (positioning, box model, typography, visual)
- Use consistent spacing and indentation
- Comment complex calculations or non-obvious decisions
