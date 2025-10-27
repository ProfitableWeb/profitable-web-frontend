# Theme Toggle Component

Компонент переключения темы (светлая/тёмная) с анимированной SVG-иконкой солнышко/луна.

## Особенности

- 🌓 **Переключение тем**: Плавный переход между светлой и тёмной темой
- 💾 **Сохранение выбора**: Автоматическое сохранение предпочтений в localStorage
- ✨ **Продвинутая анимация**: Элегантная трансформация солнца в луну с elastic эффектами
- 🎯 **SVG морфинг**: Использование SVG mask для плавной трансформации
- ♿ **Accessibility**: ARIA-метки и поддержка `prefers-reduced-motion`
- 📱 **Адаптивный**: Корректно отображается на всех размерах экрана
- ⚡ **SSR-friendly**: Предотвращение hydration mismatch

## Использование

### Основной компонент

```tsx
import ThemeToggle from '@/components/common/theme-toggle';

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

## Интеграция с ThemeContext

Компонент работает в связке с `ThemeContext`:

```tsx
// В root layout
import { ThemeProvider } from '@/contexts/ThemeContext';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider defaultTheme='light'>{children}</ThemeProvider>
      </body>
    </html>
  );
}
```

## Использование хука useTheme

В любом компоненте можно получить доступ к теме:

```tsx
import { useTheme } from '@/contexts/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Текущая тема: {theme}</p>
      <button onClick={toggleTheme}>Переключить тему</button>
      <button onClick={() => setTheme('dark')}>Установить тёмную</button>
    </div>
  );
}
```

## Структура

```
theme-toggle/
├── ThemeToggle.tsx      # Компонент переключателя
├── ThemeToggle.scss     # Стили компонента
├── SunMoonIcon.tsx      # Анимированная SVG иконка
├── SunMoonIcon.scss     # Стили анимации иконки
├── index.ts             # Экспорт компонентов
└── README.md            # Документация
```

## Компоненты

### ThemeToggle

Основной компонент-кнопка для переключения темы.

### SunMoonIcon

Анимированная SVG иконка с морфингом между солнцем и луной. Основана на
[GUI Challenges от Adam Argyle](https://github.com/argyleink/gui-challenges/tree/main/theme-switch).

**Props:**

- `theme`: `'light' | 'dark'` - текущая тема
- `size`: `number` - размер иконки в пикселях (default: 20)
- `className`: `string` - дополнительный CSS класс
- `disableAnimations`: `boolean` - отключение анимаций

**Использование:**

```tsx
import { SunMoonIcon } from '@/components/common/theme-toggle';

<SunMoonIcon theme='dark' size={24} />;
```

## Стилизация

Компонент использует CSS переменные из глобальных тем:

- `--color-text` - цвет иконки
- `--color-primary` - цвет при наведении
- `--color-surface-hover` - фон кнопки при наведении
- `--color-focus` - цвет обводки фокуса

## Анимации

Иконка использует продвинутые cubic-bezier функции для плавных переходов:

### Светлая тема → Тёмная

- **Солнце → Луна**: Солнце увеличивается (scale 1.75), маска смещается создавая эффект лунного серпа
- **Лучи**: Исчезают с поворотом на -25° и fade out
- **Timing**: Elastic easing для солнца, ease-out для маски

### Тёмная тема → Светлая

- **Луна → Солнце**: Солнце возвращается к исходному размеру
- **Лучи**: Появляются с elastic эффектом
- **Timing**: Более быстрые переходы (0.25s вместо 0.5s)

### Дополнительные эффекты

- **Hover**: Легкое масштабирование (1.05) + смена цвета на primary
- **Active**: Нажатие (scale 0.95)
- **prefers-reduced-motion**: Автоматическое отключение анимаций для пользователей с соответствующим предпочтением

## Локальное хранилище

Выбор темы сохраняется в `localStorage` с ключом `'theme'`:

- Значение: `'light'` или `'dark'`
- Автоматически применяется при следующей загрузке страницы
- По умолчанию используется `'light'`

## Accessibility

- `aria-label`: Описание действия для screen readers
- `aria-pressed`: Состояние кнопки (true для тёмной темы)
- `aria-hidden`: Скрытие заглушки от screen readers
- `title`: Подсказка при наведении
- `focus-visible`: Видимая рамка фокуса для keyboard navigation
- `prefers-reduced-motion`: Автоматическое отключение анимаций
- `type="button"`: Явное указание типа кнопки

## SSR и гидрация

Компонент использует `useState` и `useEffect` для предотвращения hydration mismatch:

```tsx
const [isMounted, setIsMounted] = useState(false);

useEffect(() => {
  setIsMounted(true);
}, []);

// Заглушка во время SSR
if (!isMounted) {
  return <div className='theme-toggle theme-toggle--loading' aria-hidden='true' />;
}
```

Это обеспечивает корректную работу в Next.js с серверным рендерингом.

## Технические детали

### SVG mask technique

Иконка использует SVG `<mask>` для создания эффекта лунного серпа:

- В светлой теме маска находится за пределами круга → полное солнце
- В тёмной теме маска смещается на круг → лунный серп
- Плавное смещение маски создаёт морфинг-эффект

### Уникальные ID масок

Для предотвращения конфликтов при использовании нескольких иконок на странице:

```tsx
const maskId = React.useMemo(() => `moon-mask-${Math.random().toString(36).substr(2, 9)}`, []);
```
