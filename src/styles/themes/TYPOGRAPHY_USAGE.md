# Использование типографических переменных

## 📖 Краткий гайд

### Базовое использование

```scss
.my-text {
  font-weight: var(--font-weight-normal);
}

.my-heading {
  font-weight: var(--font-weight-bold);
}
```

### Семантические переменные (рекомендуется)

```scss
body {
  font-weight: var(--font-weight-body);
}

h1, h2, h3 {
  font-weight: var(--font-weight-heading);
}

h4, h5, h6 {
  font-weight: var(--font-weight-subheading);
}

button {
  font-weight: var(--font-weight-button);
}

.caption {
  font-weight: var(--font-weight-caption);
}
```

## 🎯 Автоматическая адаптация

Переменные **автоматически меняются** при переключении темы:

```scss
// Светлая тема
--font-weight-heading: 700;

// Тёмная тема (автоматически)
--font-weight-heading: 650;
```

Вам не нужно ничего делать дополнительно - просто используйте переменные!

## 🔬 Научное обоснование

### Эффект ореола (Halation)

Светлый текст на тёмном фоне создаёт **оптическую иллюзию увеличенной толщины** из-за:

1. **Рассеивания света** в глазу
2. **Иррадиации** - светлые объекты кажутся больше
3. **Контраста** с фоном

### Решение

Мы компенсируем это, используя **на ~50-70 единиц меньший font-weight** в тёмной теме:

| Переменная | Светлая | Тёмная | Разница |
|-----------|---------|--------|---------|
| normal    | 400     | 350    | -50     |
| medium    | 500     | 450    | -50     |
| semibold  | 600     | 550    | -50     |
| bold      | 700     | 650    | -50     |

Результат: **визуально одинаковая толщина** в обеих темах!

## ✅ Best Practices

### ✔️ Рекомендуется

```scss
// Используйте семантические переменные
.article-title {
  font-weight: var(--font-weight-heading);
}

.article-body {
  font-weight: var(--font-weight-body);
}
```

### ❌ Не рекомендуется

```scss
// Не используйте хардкод значения
.article-title {
  font-weight: 700; // ❌ Не адаптируется к теме
}

// Не используйте старые переменные напрямую
.article-title {
  font-weight: $font-weight-bold; // ❌ Статическое значение из _typography.scss
}
```

## 🎨 Примеры в проекте

### ArticleCard

```scss
.article-card {
  &__title {
    font-weight: var(--font-weight-heading);  // 700 / 650
  }

  &__subtitle {
    font-weight: var(--font-weight-medium);   // 500 / 450
  }

  &__date {
    font-weight: var(--font-weight-body);     // 400 / 350
  }
}
```

### Button

```scss
.button {
  font-weight: var(--font-weight-button);  // 500 / 450
  
  &--bold {
    font-weight: var(--font-weight-semibold);  // 600 / 550
  }
}
```

## 🔄 Миграция старого кода

Если у вас есть компоненты с хардкод font-weight:

```scss
// Было:
.my-component {
  font-weight: 700;
}

// Стало:
.my-component {
  font-weight: var(--font-weight-heading);
}
```

### Find & Replace шаблоны

- `font-weight: 700` → `font-weight: var(--font-weight-heading)`
- `font-weight: 600` → `font-weight: var(--font-weight-subheading)`
- `font-weight: 500` → `font-weight: var(--font-weight-button)`
- `font-weight: 400` → `font-weight: var(--font-weight-body)`

## 🧪 Тестирование

Проверьте визуальное восприятие толщины:

1. Откройте компонент в **светлой теме**
2. Переключитесь на **тёмную тему**
3. Толщина должна **выглядеть одинаково** (не на весах, а визуально!)

---

**Создано**: October 2025  
**Версия**: 1.0


