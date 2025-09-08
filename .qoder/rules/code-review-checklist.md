---
trigger: manual
---

# Code Review and Quality Checklist

**Type:** Apply Manually (`@code-review`)

## Pre-Commit Quality Gates

### Automated Checks

Before any code submission, ensure all automated checks pass:

- `bun run lint:fix` - ESLint with auto-fix
- `bun run format` - Prettier formatting
- `bun run type-check` - TypeScript compilation
- `bun run test` - Vitest test suite

### Manual Review Checklist

#### Code Quality

- [ ] Functions and components have single responsibility
- [ ] No code duplication or copy-paste programming
- [ ] Proper error handling implemented
- [ ] No console.log or debug statements in production code
- [ ] All TypeScript errors resolved

#### Performance

- [ ] No unnecessary re-renders or infinite loops
- [ ] Proper use of React.memo, useMemo, useCallback when needed
- [ ] Images optimized and properly sized
- [ ] Bundle size impact considered for new dependencies

#### Security

- [ ] No hardcoded secrets or API keys
- [ ] User input properly validated and sanitized
- [ ] XSS prevention measures in place
- [ ] Proper authentication and authorization checks

#### Accessibility

- [ ] Keyboard navigation works properly
- [ ] Screen reader compatibility verified
- [ ] Color contrast meets WCAG standards
- [ ] Focus management implemented correctly

#### Testing

- [ ] New functionality has corresponding tests
- [ ] Edge cases and error scenarios covered
- [ ] Tests are meaningful and test behavior, not implementation
- [ ] Test coverage maintained or improved

#### Documentation

- [ ] Complex logic has explanatory comments
- [ ] Public APIs documented with JSDoc
- [ ] README updated if necessary
- [ ] Breaking changes documented

## Review Questions

### Architecture

- Does this change fit with the overall system design?
- Is the abstraction level appropriate?
- Are there any potential side effects?

### Maintainability

- Will this code be easy to understand in 6 months?
- Is the naming clear and descriptive?
- Is the code DRY but not overly abstract?

### Business Logic

- Does the implementation match the requirements?
- Are all edge cases handled?
- Is the user experience optimal?
