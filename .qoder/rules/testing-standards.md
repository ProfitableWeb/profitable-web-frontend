---
trigger: manual
---

# Test Creation and Quality Standards

**Type:** Model Decision **Description:** Generate unit tests for components and utilities

## Testing Philosophy

### Testing Strategy

- Write tests for all public APIs and components
- Focus on behavior, not implementation details
- Test user interactions and edge cases
- Maintain high test coverage for critical paths

### Testing Tools

- **Vitest**: Primary testing framework
- **Testing Library**: Component testing utilities
- **Jest DOM**: Additional matchers for DOM testing
- **User Event**: Simulate user interactions

### Component Testing Patterns

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { Button } from './Button';

test('renders button with correct text', () => {
  render(<Button>Click me</Button>);
  expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
});

test('calls onClick handler when clicked', async () => {
  const handleClick = vi.fn();
  const user = userEvent.setup();

  render(<Button onClick={handleClick}>Click me</Button>);
  await user.click(screen.getByRole('button'));

  expect(handleClick).toHaveBeenCalledOnce();
});
```

### Utility Testing Patterns

```typescript
import { expect, test, describe } from 'vitest';
import { formatCurrency } from './currency';

describe('formatCurrency', () => {
  test('formats positive numbers correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });

  test('handles zero values', () => {
    expect(formatCurrency(0)).toBe('$0.00');
  });
});
```

## Test Quality Guidelines

### What to Test

- Component rendering with different props
- User interactions (clicks, form inputs, keyboard navigation)
- Conditional rendering logic
- Error states and edge cases
- Accessibility features

### What NOT to Test

- Implementation details (state variable names, internal methods)
- Third-party library functionality
- Styling details (unless critical to functionality)

### Test Organization

- Group related tests with `describe` blocks
- Use descriptive test names that explain the expected behavior
- Arrange-Act-Assert pattern for test structure
- One assertion per test when possible
