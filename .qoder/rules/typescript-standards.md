---
trigger: manual
---

# TypeScript Coding Standards

**Type:** Always Apply

## Core Principles

- **Strict TypeScript**: Always use strict mode settings with no implicit any
- **Type-first development**: Define types before implementation
- **Path aliases**: Use configured path aliases (@/, @/components/, etc.)
- **Explicit return types**: Always specify return types for functions and methods

## Code Style Guidelines

### Import Organization

```typescript
// 1. External libraries
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

// 2. Internal imports with path aliases
import '@/styles/globals.scss';
import { metadata as siteMetadata } from '@/config/metadata';
import { HeadContent } from '@/components/HeadContent';
```

### Type Definitions

- Use `interface` for object shapes that can be extended
- Use `type` for unions, intersections, and computed types
- Always export types that are used across multiple files
- Prefer explicit types over `any` or implicit types

### Component Structure

```typescript
interface ComponentProps {
  // Define all props with proper types
  title: string;
  isVisible?: boolean;
}

export function ComponentName({ title, isVisible = false }: ComponentProps) {
  // Implementation
  return (
    // JSX
  );
}
```

### Error Handling

- Use proper error boundaries for React components
- Handle async operations with proper error handling
- Avoid silent failures
