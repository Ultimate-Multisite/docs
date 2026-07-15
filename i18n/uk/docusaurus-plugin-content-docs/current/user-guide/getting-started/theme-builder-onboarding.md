---
title: Потік онбордингу Конструктора тем
sidebar_position: 17
_i18n_hash: 67d84d7e08c2ccfaa459bba0c40cb1ea
---
# Процес онбордингу Theme Builder

Superdav AI Agent v1.12.0 запроваджує керований **процес онбордингу Theme Builder**, який допоможе вам створити кастомну блочну тему під час першого налаштування. Це замінює застарілий режим Site Builder на більш гнучкий підхід із допомогою agent.

## Що таке процес онбордингу Theme Builder? {#what-is-the-theme-builder-onboarding-flow}

Процес онбордингу Theme Builder — це інтерактивний майстер налаштування, який:

- Направляє вас у прийнятті дизайнерських рішень (кольори, типографіка, макет)
- Збирає ваші вподобання візуальної ідентичності сайту
- Генерує кастомну блочну тему, адаптовану до ваших потреб
- Автоматично активує тему після завершення

Цей процес працює за допомогою **Setup Assistant agent**, який ставить уточнюючі запитання та поступово будує вашу тему.

## Початок онбордингу Theme Builder {#starting-the-theme-builder-onboarding}

### Налаштування при першому запуску {#first-run-setup}

Коли ви вперше запускаєте Superdav AI Agent на новій установці WordPress, ви побачите:

```
Welcome to Superdav AI Agent!

What would you like to do?
1. Build a custom theme (Theme Builder)
2. Use an existing theme
3. Skip setup for now
```

Виберіть **"Build a custom theme"**, щоб розпочати процес онбордингу Theme Builder.

### Ручна активація {#manual-activation}

Ви також можете розпочати онбординг Theme Builder у будь-який час, запросивши:

```
"Start the Theme Builder onboarding"
```

або

```
"Help me create a custom theme"
```

## Етапи онбордингу {#the-onboarding-steps}

### Крок 1: Вибір режиму {#step-1-mode-selection}

Setup Assistant agent запитає про ваші вподобання:

```
How would you like to build your theme?
- Guided (I'll ask questions and build it for you)
- Hands-on (I'll show you options and you decide)
```

**Guided mode** рекомендується більшості користувачів; agent робить дизайнерські рекомендації на основі вашої галузі та цілей.

### Крок 2: Специфікація сайту {#step-2-site-specification}

Вам будуть задавати питання про ваш сайт:

- **Site purpose**: E-commerce, blog, portfolio, SaaS тощо.
- **Target audience**: Хто ваші відвідувачі?
- **Brand colors**: Основні та другорядні кольори (або "Я не впевнений")
- **Tone**: Професійний, креативний, грайливий, мінімалістичний тощо.

Ця інформація зберігається у вашій пам'яті **site_brief**, до якої agent звертається у майбутніх сесіях.

### Крок 3: Рішення щодо дизайн-системи {#step-3-design-system-decisions}

Agent проводить вас через вибір дизайнерських токенів:

- **Typography**: Сімейство шрифтів (serif, sans-serif, monospace) та масштаб розмірів
- **Color palette**: Основні, другорядні, акцентні та нейтральні кольори
- **Spacing**: Компактні, нормальні або просторі макети
- **Motion**: Анімації та переходи (за бажанням)

### Крок 4: Генерація теми {#step-4-theme-generation}

Setup Assistant agent створює каркас вашої кастомної блочної теми, включаючи:

- `theme.json`, що містить усі ваші дизайнерські токени
- Блочні шаблони для поширених макетів (головна сторінка, блог, контакти)
- Кастомні стилі блоків, що відповідають вашій дизайн-системі
- Метадані теми та декларації підтримки WordPress

### Крок 5: Активація та перевірка {#step-5-activation-and-verification}

Тема автоматично активується, і ви побачите:

```
✓ Your custom theme is now live!
  Theme name: [Your Site Name] Theme
  Colors: [Primary] / [Secondary]
  Typography: [Font Family]

  Visit your site to see the new design.
```

Після цього ви можете перейти на свій сайт, щоб перевірити, чи відображається тема правильно.

## Специфікація сайту та пам'ять site_brief {#site-specification-and-sitebrief-memory}

Під час онбордингу agent збирає специфікацію вашого сайту у категорії пам'яті **site_brief**. Вона включає:

- Мета та цілі сайту
- Цільову аудиторію
- Кольори та тон бренду
- Дизайнерські вподобання
- Структуру контенту

### Чому важливий site_brief {#why-sitebrief-matters}

У майбутніх сесіях agent звертається до вашого site_brief, щоб:

- Підтримувати дизайнерську узгодженість під час змін
- Пропонувати функції, узгоджені з метою вашого сайту
- Надавати контекстно-залежні рекомендації
- Уникнути повторення запитань про налаштування

### Перегляд site_brief {#viewing-your-sitebrief}

Ви можете запитати agent:

```
"Show me my site brief"
```

або

```
"What do you know about my site?"
```

Agent відобразить вашу збережену специфікацію сайту.

## Кастомізація після онбордингу {#customizing-after-onboarding}

Після завершення онбордингу Theme Builder ви можете:

### Використовувати навик Design System Aesthetics {#use-the-design-system-aesthetics-skill}

Запросити уточнення дизайну:

```
"Refine the typography to be more modern"
```

або

```
"Adjust the color palette to be warmer"
```

**Design System Aesthetics skill** направляє вас через цільові оновлення дизайну.

### Редагувати theme.json напряму {#edit-themejson-directly}

Для досвідчених користувачів редагуйте `/wp-content/themes/[theme-name]/theme.json`, щоб змінити:

- Дизайнерські токени кольорів
- Масштаби типографіки
- Значення простору
- Визначення меж та тіней

### Створювати кастомні блочні шаблони {#create-custom-block-templates}

Використовуйте блочний редактор WordPress для створення кастомних шаблонів для:

- Макетів головної сторінки
- Сторінок статей блогу
- Сторінок продуктів
- Форм контактів

## Порівняння: Старий vs. Новий онбординг {#comparison-old-vs-new-onboarding}

| Feature | Site Builder (Legacy) | Theme Builder (New) |
|---------|----------------------|-------------------|
| Setup method | Wizard-based form | Agent-guided conversation |
| Theme generation | Limited templates | Custom scaffolding |
| Design tokens | Manual entry | Guided decisions |
| Flexibility | Fixed options | Customizable |
| Future updates | Not referenced | Stored in site_brief |

## Усунення несправностей {#troubleshooting}

**Процес онбордингу не завершився**
- Перезапустіть процес: "Start the Theme Builder onboarding"
- Переконайтеся, що ваша установка WordPress оновлена
- Перевірте, чи активований Setup Assistant agent

**Мій site_brief не використовується**
- Підтвердіть, що agent має доступ до пам'яті
- Попросіть agent "recall my site brief"
- Перевірте, чи активована пам'ять у ваших налаштуваннях

**Згенерована тема не відповідає моїм вподобанням**
- Використовуйте Design System Aesthetics skill для уточнення
- Попросіть agent "regenerate the theme with [specific changes]"
- Редагуйте theme.json напряму для точного контролю

## Наступні кроки {#next-steps}

Після завершення онбордингу Theme Builder:

1. **Перевірте свій сайт**: Відвідайте свій сайт, щоб побачити нову тему
2. **Удоскональте дизайн**: Використовуйте Design System Aesthetics skill для коригувань
3. **Додайте контент**: Почніть створювати контент вашого сайту
4. **Вивчіть можливості**: Дізнайтеся про інші можливості agent, такі як scaffold-block-theme та activate-theme
