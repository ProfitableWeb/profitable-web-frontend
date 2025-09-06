# Frontend Development Plan

> 📚 **Центральная документация**: [profitable-web-docs](../profitable-web-docs/)
> 📋 **Общий roadmap**: [DEVELOPMENT_ROADMAP.md](../profitable-web-docs/DEVELOPMENT_ROADMAP.md)
> 🏗️ **Архитектура**: [SYSTEM_OVERVIEW.md](../profitable-web-docs/architecture/SYSTEM_OVERVIEW.md)

## 🎨 Архитектура Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: SCSS (гибридная методология: компонентный + семантический подход)
- **Animations**: Framer Motion (минимально, SEO-friendly)
- **State**: React Query + Zustand
- **Deployment**: Vercel/Static hosting

## 📋 Задачи

### 1. Инициализация проекта
- [ ] Next.js 15+ setup с TypeScript
- [ ] SCSS конфигурация
- [ ] Framer Motion setup (оптимизированно)
- [ ] ESLint + Prettier
- [ ] Pre-commit hooks (lint, format, type-check)
- [ ] Folder structure

### 2. Компоненты и страницы
- [ ] Layout компоненты (Header, Footer, Navigation)
- [ ] Blog components (ArticleCard, ArticleList)
- [ ] Home page (главная)
- [ ] Article page (детальная статья)
- [ ] Category pages
- [ ] About page

### 3. Интеграция с Backend
- [ ] API client setup
- [ ] React Query конфигурация
- [ ] Error handling
- [ ] Loading states

### 4. SEO и производительность
- [ ] Meta tags управление
- [ ] sitemap.xml генерация
- [ ] Image optimization
- [ ] Static generation для статей
- [ ] Framer Motion lazy loading
- [ ] Core Web Vitals оптимизация

## 🔧 Технические детали

### Структура страниц
```
app/
├── page.tsx                 # Главная
├── [slug]/page.tsx          # Статьи (прямо из корня)
├── categories/
│   └── [category]/page.tsx  # Статьи категории
└── about/page.tsx           # О проекте
```

### Environment Variables
```env
NEXT_PUBLIC_API_URL=...
NEXT_PUBLIC_ANALYTICS_ID=...
```

## 🔗 Полезные ссылки

- [Setup Guide](../profitable-web-docs/development/SETUP_GUIDE.md) - Инструкции по настройке
- [System Overview](../profitable-web-docs/architecture/SYSTEM_OVERVIEW.md) - Обзор архитектуры
- [Metrics](../profitable-web-docs/analytics/METRICS.md) - Ключевые метрики

---
*Обновляется по мере разработки*