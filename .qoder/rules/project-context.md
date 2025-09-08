---
trigger: manual
---

# ProfitableWeb Project Context

**Type:** Always Apply

## Project Overview

ProfitableWeb is a research blog platform focused on documenting insights and strategies for generating financial
capital from personal hobbies. This frontend serves as the presentation layer for sharing monetization research and
self-education content.

## Technology Stack

### Core Framework

- **Next.js 15+** with App Router
- **React 19** with TypeScript
- **SCSS** for styling with custom theme system
- **Static Export** for optimal performance and SEO

### Key Dependencies

- **Framer Motion**: Smooth animations and transitions
- **React Query (@tanstack/react-query)**: Server state management
- **Zustand**: Client-side state management
- **Vitest**: Testing framework with React Testing Library

### Development Tools

- **ESLint** with Next.js configuration
- **Prettier** for code formatting
- **Husky + lint-staged** for pre-commit hooks
- **TypeScript** with strict mode enabled

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable UI components
├── config/             # Configuration files
├── hooks/              # Custom React hooks
├── styles/             # SCSS files with theme system
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Coding Philosophy

### Quality Over Speed

- Prioritize maintainable, well-tested code
- Use TypeScript strictly to catch errors early
- Implement comprehensive testing for reliability
- Focus on performance and SEO optimization

### User-Centric Design

- Ensure accessibility compliance (WCAG standards)
- Support both light and dark themes
- Optimize for mobile-first responsive design
- Prioritize fast loading times and smooth interactions

### Research Focus

- Code should support the blog's educational mission
- Features should enhance content discoverability
- Performance metrics align with monetization research goals
- Architecture supports future scaling of content and features

## Development Workflow

1. **Feature Planning**: Align with research blog goals
2. **Implementation**: Follow established patterns and standards
3. **Testing**: Comprehensive unit and integration tests
4. **Review**: Use code review checklist (@code-review)
5. **Quality Gates**: All automated checks must pass
6. **Deployment**: Static export for optimal performance
