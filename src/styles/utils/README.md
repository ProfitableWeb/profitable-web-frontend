# Styles Utilities

Утилиты и вспомогательные файлы для стилей проекта.

## 📁 Структура

```
utils/
├── _animations.scss           # Система анимаций и transitions
├── _breakpoints.scss          # Медиа-запросы и responsive миксины
├── _mixins.scss               # Общие SCSS миксины
├── _text-decorations.scss     # Утилиты для текстовых decorations
├── _typography.scss           # Типографические константы (deprecated, см. themes/)
├── _variables.scss            # Глобальные переменные
├── ANIMATIONS_GUIDE.md        # Полное руководство по анимациям
└── README.md                  # Этот файл
```

## 🎯 Основные файлы

### `_animations.scss`

Централизованная система управления анимациями:
- Duration переменные (`--duration-fast`, `--duration-medium`, etc.)
- Easing функции (`--ease-smooth`, `--ease-bounce`, etc.)
- Готовые transitions (`--transition-background`, `--transition-color`, etc.)
- Автоматическая поддержка `prefers-reduced-motion`

**Когда использовать:** Для всех transitions и animations в проекте.

📖 [Полное руководство](./ANIMATIONS_GUIDE.md)

### `_breakpoints.scss`

Responsive design система:
- Миксины для медиа-запросов (`@include sm`, `@include md`, etc.)
- Breakpoint константы
- Утилиты для адаптивности

**Когда использовать:** Для адаптивных layout'ов.

### `_mixins.scss`

Переиспользуемые SCSS миксины:
- Flexbox утилиты
- Button resets
- Truncate text
- И многое другое

**Когда использовать:** Для общих паттернов стилизации.

### `_text-decorations.scss`

Специальные эффекты для текста:
- Gradient подчёркивания
- Hover эффекты
- Маркерные highlight'ы

**Когда использовать:** Для декоративных текстовых эффектов.

### `_variables.scss`

Глобальные константы и переменные:
- Z-index значения
- Размеры
- Legacy font-weights (deprecated, используйте theme variables)

**Когда использовать:** Редко, большинство переменных в themes/.

### `_typography.scss`

⚠️ **Deprecated** - Используйте переменные из `themes/light/_typography.scss` и `themes/dark/_typography.scss`

## 🔧 Использование

### Импорт в компоненты

```scss
// Импортируйте только нужные утилиты
@import '@/styles/utils/breakpoints';
@import '@/styles/utils/mixins';

.my-component {
  @include flex-center;
  
  @include md {
    flex-direction: column;
  }
}
```

### Использование переменных

```scss
.my-element {
  // Анимационные переменные доступны глобально
  transition: var(--transition-background);
  
  // Breakpoints через миксины
  @include lg {
    padding: var(--space-xl);
  }
}
```

## 📚 Дополнительные руководства

- [Animation System Guide](./ANIMATIONS_GUIDE.md) - Полное руководство по анимациям
- [Theme System](../themes/README.md) - Система тем (light/dark)
- [Typography Guide](../themes/TYPOGRAPHY_USAGE.md) - Типографика в темах

## 🚀 Best Practices

1. **Используйте переменные** вместо хардкод значений
2. **Импортируйте локально** только нужные файлы в компонентах
3. **Предпочитайте theme variables** для типографики и цветов
4. **Используйте миксины** для повторяющихся паттернов
5. **Следуйте animation guide** для consistency

## 📝 Порядок импорта

В `globals.scss`:
```scss
// 1. Темы (содержат переменные)
@import "./themes/light/index";
@import "./themes/dark/index";

// 2. Утилиты (используют переменные тем)
@import "./utils/animations";
@import "./utils/text-decorations";
```

В компонентах:
```scss
// 1. Утилиты
@import '@/styles/utils/variables';
@import '@/styles/utils/breakpoints';
@import '@/styles/utils/mixins';

// 2. Стили компонента
.component {
  // ...
}
```

---

**Обновлено**: October 2025


