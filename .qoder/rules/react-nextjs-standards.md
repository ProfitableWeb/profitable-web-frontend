---
trigger: manual
---

# React & Next.js Component Standards

**Type:** Specific Files (`*.tsx`, `*.jsx`)

## Component Architecture

### Functional Components Only

- Use functional components with hooks
- Prefer composition over inheritance
- Keep components small and focused on single responsibility

### Next.js 15+ App Router Patterns

```typescript
// Server Components (default)
export default function ServerComponent() {
  // No useState, useEffect, or browser APIs
  return <div>Server-rendered content</div>;
}

// Client Components (when needed)
'use client';

import { useState } from 'react';

export default function ClientComponent() {
  const [state, setState] = useState(false);
  return <div>Interactive content</div>;
}
```

### File Organization

- One main component per file
- Colocate related types in the same file
- Use index.ts files for clean exports
- Follow the established folder structure: src/components/, src/app/, etc.

### Component Documentation

```typescript
interface ButtonProps {
  /** Button text content */
  children: React.ReactNode;
  /** Click handler function */
  onClick?: () => void;
  /** Visual variant of the button */
  variant?: 'primary' | 'secondary' | 'danger';
}

/**
 * Reusable button component with multiple variants
 * Supports accessibility features and proper event handling
 */
export function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  // Implementation
}
```

### State Management

- Use React Query (@tanstack/react-query) for server state
- Use Zustand for complex client state
- Use useState for simple local state
- Avoid prop drilling - lift state up or use context when appropriate

### Performance Guidelines

- Use React.memo() for expensive components
- Implement proper key props for lists
- Lazy load components when appropriate
- Optimize bundle size with dynamic imports
