# Theme System Documentation

Модульная система тем для ProfitableWeb Frontend.

## 📁 Структура

```
themes/
├── light/                    # Светлая тема
│   ├── _index.scss          # Главный файл (импортирует все частичные файлы)
│   ├── _brand.scss          # Бренд-цвета (primary, secondary, accent)
│   ├── _surfaces.scss       # Поверхности (backgrounds, borders)
│   ├── _text.scss           # Текстовые цвета
│   ├── _typography.scss     # Типографика (font-weights, text rendering)
│   ├── _status.scss         # Статусные цвета (success, warning, error, info)
│   ├── _interactive.scss    # Интерактивные элементы (links, focus)
│   ├── _semantic.scss       # Семантические цвета (highlight, selection, code)
│   ├── _shadows.scss        # Определения теней
│   ├── components/
│   │   ├── _nav.scss       # App bar / header
│   │   ├── _sidebar.scss   # Sidebar
│   │   ├── _cards.scss     # Cards
│   │   ├── _forms.scss     # Forms
│   │   ├── _buttons.scss   # Buttons
│   │   ├── _code.scss      # Code blocks
│   │   ├── _hero.scss      # Hero header цвета
│   │   └── _masonry.scss   # Masonry сетка и карточки статей
│   ├── _overrides.scss     # Специфичные стили темы (scrollbar, selection)
│   └── _media.scss         # Media queries для system preference
│
├── dark/                    # Тёмная тема
│   ├── _index.scss          # Главный файл (импортирует все частичные файлы)
│   ├── _brand.scss          # Бренд-цвета (adjusted for dark backgrounds)
│   ├── _surfaces.scss       # Поверхности
│   ├── _text.scss           # Текстовые цвета
│   ├── _typography.scss     # Типографика (adjusted for halation effect)
│   ├── _status.scss         # Статусные цвета (brighter for visibility)
│   ├── _interactive.scss    # Интерактивные элементы
│   ├── _semantic.scss       # Семантические цвета
│   ├── _shadows.scss        # Определения теней (darker for depth)
│   ├── components/
│   │   ├── _nav.scss       # App bar / header
│   │   ├── _sidebar.scss   # Sidebar
│   │   ├── _cards.scss     # Cards
│   │   ├── _forms.scss     # Forms
│   │   ├── _buttons.scss   # Buttons
│   │   ├── _code.scss      # Code blocks
│   │   ├── _hero.scss      # Hero header цвета
│   │   └── _masonry.scss   # Masonry сетка и карточки статей
│   ├── _overrides.scss     # Специфичные стили темы
│   └── _media.scss         # Media queries для system preference
│
└── README.md               # Эта документация
```

## 🎨 Категории цветов

### Brand Colors (`_brand.scss`)

Основные цвета бренда:

- `--color-primary` - Основной цвет (#5ADC5A green)
- `--color-secondary` - Вторичный цвет (teal)
- `--color-accent` - Акцентный цвет (orange)

### Surface Colors (`_surfaces.scss`)

Цвета поверхностей и границ:

- `--color-background` - Основной фон
- `--color-surface` - Цвет поверхностей
- `--color-border` - Цвет границ

### Text Colors (`_text.scss`)

Все текстовые цвета:

- `--color-text-primary` - Основной текст
- `--color-text-secondary` - Вторичный текст
- `--color-text-muted` - Приглушённый текст
- `--text-accent-color` - Акцентный текст

### Typography (`_typography.scss`)

Толщина шрифтов и рендеринг текста, оптимизированные для каждой темы:

**Font Weights** - Базовые значения:

- `--font-weight-light` - Light (светлая: 300, тёмная: 250)
- `--font-weight-normal` - Normal (светлая: 400, тёмная: 350)
- `--font-weight-medium` - Medium (светлая: 500, тёмная: 450)
- `--font-weight-semibold` - Semibold (светлая: 600, тёмная: 550)
- `--font-weight-bold` - Bold (светлая: 700, тёмная: 650)
- `--font-weight-extrabold` - Extrabold (светлая: 800, тёмная: 750)

**Semantic Weights** - Для конкретных целей:

- `--font-weight-body` - Основной текст (светлая: 400, тёмная: 350)
- `--font-weight-heading` - Заголовки (светлая: 700, тёмная: 650)
- `--font-weight-subheading` - Подзаголовки (светлая: 600, тёмная: 550)
- `--font-weight-caption` - Подписи (светлая: 400, тёмная: 350)
- `--font-weight-button` - Кнопки (светлая: 500, тёмная: 450)

> **Почему разные значения?**  
> В тёмной теме используются меньшие значения для компенсации эффекта ореола (halation) - светлый текст на тёмном фоне
> визуально выглядит толще, чем тёмный на светлом при той же font-weight.

### Status Colors (`_status.scss`)

Статусные индикаторы:

- `--color-success` - Успех
- `--color-warning` - Предупреждение
- `--color-error` - Ошибка
- `--color-info` - Информация

### Interactive Colors (`_interactive.scss`)

Интерактивные элементы:

- `--color-link` - Ссылки
- `--color-focus` - Фокус элементов

### Semantic Colors (`_semantic.scss`)

Семантические назначения:

- `--color-highlight` - Подсветка
- `--color-selection` - Выделение текста
- `--color-code-bg` - Фон кода

### Shadows (`_shadows.scss`)

Определения теней для depth:

- `--shadow-sm` - Маленькая тень
- `--shadow-md` - Средняя тень
- `--shadow-lg` - Большая тень
- `--shadow-xl` - Очень большая тень

### Components (`_components.scss`)

Цвета для конкретных компонентов:

- Navigation (nav)
- Sidebar
- Cards
- Forms
- Buttons
- Code blocks

### Hero (`_hero.scss`)

Специальные цвета для hero sections:

- Hero title/text colors
- Category badges
- Link underlines

### Masonry (`components/_masonry.scss`)

Цвета для masonry-сетки и карточек статей:

- Title & Subtitle colors
- Marker highlight effect (подчёркивание маркером)
- Paragraph text color
- Link colors (in summary)
- Image placeholder background
- Blockquote border

### Overrides (`_overrides.scss`)

Специфичные для темы стили:

- Scrollbar styling
- Selection styling
- Image opacity adjustments (dark theme)
- Form element contrast adjustments

## 🔧 Использование

### Импорт в проекте

В главном файле `globals.scss`:

```scss
@import './themes/light/index';
@import './themes/dark/index';
```

### Добавление новых цветов

1. **Определите категорию** - куда логически относится новый цвет
2. **Добавьте в оба файла** - light и dark версии
3. **Используйте CSS переменные** - всегда через `var(--your-color)`

### Пример добавления нового цвета

В `light/_brand.scss`:

```scss
[data-theme='light'],
:root {
  --color-new-brand: #ff5733;
}
```

В `dark/_brand.scss`:

```scss
[data-theme='dark'] {
  --color-new-brand: #ff8a65; // Brighter for dark mode
}
```

## 🌓 Переключение тем

Темы переключаются через атрибут `data-theme` на `<html>` или `<body>`:

```javascript
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.setAttribute('data-theme', 'light');
```

## 📝 Правила именования

1. **Используйте префиксы**:
   - `color-` для общих цветов
   - `text-` для текстовых цветов
   - `shadow-` для теней
   - Имя компонента для специфичных цветов (например, `nav-`, `card-`)

2. **Состояния через суффиксы**:
   - `-hover` для hover состояний
   - `-active` для активных состояний
   - `-focus` для фокуса
   - `-disabled` для disabled состояний

3. **Варианты через суффиксы**:
   - `-light` для светлых вариантов
   - `-dark` для тёмных вариантов

## 🎯 Преимущества модульной структуры

✅ **Легко найти** - каждая категория в своём файле  
✅ **Легко редактировать** - не нужно скроллить простыню  
✅ **Легко расширять** - добавляйте новые файлы при необходимости  
✅ **Понятная структура** - логическое разделение по назначению  
✅ **Лучшая поддержка** - изменения изолированы по категориям

## 🚀 Рекомендации

- Всегда проверяйте оба файла (light/dark) при изменениях
- Убедитесь, что цвета имеют достаточный контраст
- Используйте семантические имена вместо цветовых (`primary` вместо `green`)
- Документируйте сложные цветовые решения комментариями
- Тестируйте переключение тем в реальном времени

## 🔗 Связанные системы

### Анимации и Transitions

Для плавных переходов между темами используйте систему анимаций:

```scss
.my-component {
  // Автоматические переходы для темы
  transition: var(--transition-theme-all);

  // Или отдельные свойства
  transition: var(--transition-background), var(--transition-color);
}
```

📖 [Animation System Guide](../utils/ANIMATIONS_GUIDE.md)

### Типографика

Font-weights оптимизированы для каждой темы (компенсация halation эффекта):

```scss
.my-heading {
  font-weight: var(--font-weight-heading); // 700/650
}
```

📖 [Typography Usage Guide](./TYPOGRAPHY_USAGE.md)

---

**Создано**: October 2025  
**Версия**: 2.0 (Модульная архитектура)
