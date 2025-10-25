# Frontend Development Plan

> 📚 **Центральная документация**: [profitable-web-docs](../profitable-web-docs/) 📋 **Общий roadmap**:
> [DEVELOPMENT_ROADMAP.md](../profitable-web-docs/DEVELOPMENT_ROADMAP.md) 🏗️ **Архитектура**:
> [SYSTEM_OVERVIEW.md](../profitable-web-docs/architecture/SYSTEM_OVERVIEW.md)

## 🎨 Архитектура Frontend

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: SCSS (гибридная методология: компонентный + семантический подход)
- **Animations**: Framer Motion (минимально, SEO-friendly)
- **State**: React Query + Zustand
- **Deployment**: Vercel/Static hosting

## 📋 Задачи

### 1. Инициализация проекта

- [x] Next.js 15+ setup с TypeScript
- [x] SCSS конфигурация
- [x] Framer Motion setup (оптимизированно)
- [x] ESLint + Prettier
- [x] Pre-commit hooks (lint, format, type-check)
- [x] Folder structure
- [x] react-icons

### 2. Главная страница (Home Page)

- [ ] Разработка макета главной страницы
- [ ] Создание компонентов для главной страницы
- [ ] Интеграция с моковыми данными
- [ ] Адаптивная верстка
- [ ] SEO оптимизация для главной страницы

### 3. Страница статьи (Article Page)

- [ ] Разработка макета страницы статьи
- [ ] Создание компонентов для страницы статьи
- [ ] Интеграция с моковыми данными
- [ ] Адаптивная верстка
- [ ] SEO оптимизация для страницы статьи

### 4. Страница категории (Category Page)

- [ ] Разработка макета страницы категории
- [ ] Создание компонентов для страницы категории
- [ ] Интеграция с моковыми данными
- [ ] Адаптивная верстка
- [ ] SEO оптимизация для страницы категории

### 5. Страница "О проекте" (About Page)

- [ ] Разработка макета страницы "О проекте"
- [ ] Создание компонентов для страницы "О проекте"
- [ ] Интеграция с моковыми данными
- [ ] Адаптивная верстка
- [ ] SEO оптимизация для страницы "О проекте"

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

_Обновляется по мере разработки_