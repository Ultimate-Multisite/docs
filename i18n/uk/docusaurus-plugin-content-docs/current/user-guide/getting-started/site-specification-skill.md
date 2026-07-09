---
title: Навички специфікації сайтів
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Функція визначення специфікації сайту {#site-specification-skill}

**Функція визначення специфікації сайту** (Site Specification skill) — це структурований підхід до фіксації цілей вашого сайту, його аудиторії та брендової ідентичності. Ця інформація зберігається у вашій пам'яті **site_brief**, до якої агенти звертаються протягом сесій, щоб надавати послідовну та контекстно-залежну допомогу.

## Що таке визначення специфікації сайту? {#what-is-site-specification}

Визначення специфікації сайту — це процес документування:

- **Мета сайту**: Що робить ваш сайт і чому він існує
- **Цільова аудиторія**: Хто відвідує ваш сайт і що йому потрібно
- **Брендова ідентичність**: Ваші кольори, тон та візуальний стиль
- **Бізнес-цілі**: Як виглядає успіх для вашого сайту
- **Структура контенту**: Як організований ваш сайт

Ця специфікація стає вашим **site_brief** — постійною пам'яттю, яку агенти використовують для розуміння контексту вашого сайту.

## Навіщо використовувати визначення специфікації сайту? {#why-use-site-specification}

### Послідовність між сесіями {#consistency-across-sessions}

Без site_brief вам доведеться повторно пояснювати мету вашого сайту щоразу, коли ви починаєте нову сесію. Завдяки йому агенти одразу розуміють:

- Цілі та аудиторію вашого сайту
- Кольори та тон вашого бренду
- Структуру вашого контенту
- Бізнес-цілі

### Кращі рекомендації {#better-recommendations}

Агенти використовують ваш site_brief, щоб:

- Пропонувати функції, узгоджені з метою вашого сайту
- Рекомендувати структури контенту, що відповідають вашим цілям
- Пропонувати дизайни, узгоджені з вашим брендом
- Уникати пропонування несумісних функцій

### Швидше введення в курс справи {#faster-onboarding}

Нові агенти (або агенти в нових сесіях) можуть швидко ввійти в курс справи, прочитавши ваш site_brief, замість того, щоб ставити уточнюючі запитання.

## Ініціалізація визначення специфікації сайту {#initiating-site-specification}

### Під час онбордингу Theme Builder {#during-theme-builder-onboarding}

Функція визначення специфікації сайту автоматично ініціалізується під час **онбордингу Theme Builder**. Агент Setup Assistant ставить запитання та створює ваш site_brief.

### Ручна ініціалізація {#manual-initiation}

Ви можете розпочати визначення специфікації сайту в будь-який час:

```
"Let's define my site specification"
```

або

```
"Help me create a site brief"
```

## Процес визначення специфікації сайту {#the-site-specification-process}

### Крок 1: Мета сайту {#step-1-site-purpose}

Агент запитує:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Ви можете вибрати категорію або описати власну мету.

### Крок 2: Цільова аудиторія {#step-2-target-audience}

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Крок 3: Брендова ідентичність {#step-3-brand-identity}

```
What are your brand colors?
- Primary color: [color picker or hex code]
- Secondary color: [color picker or hex code]
- Accent color: [optional]

How would you describe your brand tone?
- Professional / corporate
- Creative / artistic
- Playful / casual
- Minimal / modern
- Warm / friendly
```

### Крок 4: Бізнес-цілі {#step-4-business-goals}

```
What does success look like for your site?
- Generate leads
- Sell products
- Build community
- Share knowledge
- Establish authority
- Other: [describe]

What's your primary metric?
- Revenue
- User engagement
- Content reach
- Conversions
- Other
```

### Крок 5: Структура контенту {#step-5-content-structure}

```
How is your content organized?
- Flat (all content at same level)
- Hierarchical (categories and subcategories)
- Chronological (blog-style)
- Product-based (catalog)
- Other: [describe]

What content types do you use?
- Blog posts
- Product pages
- Case studies
- Documentation
- Videos
- Other
```

## Ваша пам'ять site_brief {#your-sitebrief-memory}

Після завершення визначення специфікації сайту ваша інформація зберігається як **site_brief** у пам'яті вашого агента. Це структурований запис, що містить:

```json
{
  "site_purpose": "E-commerce store for handmade jewelry",
  "target_audience": "Women aged 25-45, interested in sustainable fashion",
  "brand_colors": {
    "primary": "#8B4513",
    "secondary": "#D2B48C",
    "accent": "#2F4F4F"
  },
  "brand_tone": "Warm, artisanal, sustainable",
  "business_goals": ["Generate sales", "Build brand loyalty"],
  "primary_metric": "Revenue",
  "content_structure": "Product catalog with blog",
  "content_types": ["Product pages", "Blog posts", "Customer stories"]
}
```

## Перегляд та оновлення site_brief {#viewing-and-updating-your-sitebrief}

### Перегляд site_brief {#view-your-sitebrief}

Запитайте агента:

```
"Show me my site brief"
```

або

```
"What do you know about my site?"
```

Агент відобразить вашу збережену специфікацію.

### Оновлення site_brief {#update-your-sitebrief}

Якщо ваш сайт розвивається, ви можете оновити його:

```
"Update my site brief: we're now targeting B2B customers"
```

або

```
"Refresh my site specification"
```

Це повторно виконає функцію визначення специфікації сайту, використовуючи вашу існуючу інформацію як відправну точку.

## Як агенти використовують site_brief {#how-agents-use-sitebrief}

### Дизайн-рекомендації {#design-recommendations}

Коли ви просите змінити дизайн, агенти звертаються до вашого site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Пропозиції функцій {#feature-suggestions}

Агенти пропонують функції, узгоджені з вашими цілями:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Структура контенту {#content-structure}

Агенти пропонують організацію контенту на основі вашої структури:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Найкращі практики {#best-practices}

### Будьте конкретними {#be-specific}

Замість "загальна аудиторія" опишіть вашу реальну аудиторію:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Оновлюйте регулярно {#update-regularly}

Оскільки ваш сайт розвивається, оновлюйте свій site_brief:

- Коли ви змінюєте цільову аудиторію
- Коли ви додаєте нові лінійки продуктів
- Коли змінюється ідентичність вашого бренду
- Коли зміщуються ваші бізнес-цілі

### Використовуйте послідовну термінологію {#use-consistent-terminology}

Використовуйте ті самі терміни протягом сесій:

- ✓ Завжди кажіть "sustainable jewelry" (а не "eco-friendly jewelry" та "green products")
- ✓ Послідовно звертайтеся до аудиторії однаково

### Включайте контекст {#include-context}

Надайте інформацію про контекст, яка допоможе агентам зрозуміти ваші рішення:

- "Ми націлені на професіоналів, які цінують якість, а не ціну"
- "Наша аудиторія технічно підкована і очікує сучасний дизайн"
- "Ми — стартап, що фінансується власними коштами, тому нам потрібні економічно ефективні рішення"

## Зв'язок з онбордингом Theme Builder {#relationship-to-theme-builder-onboarding}

Функція визначення специфікації сайту інтегрована в **онбординг Theme Builder**. Коли ви завершуєте онбординг, ваш site_brief автоматично створюється з наданою вами інформацією.

Ви також можете запустити визначення специфікації сайту незалежно, якщо бажаєте:

- Удосконалити свою специфікацію після початкового налаштування
- Оновити site_brief, оскільки ваш сайт розвивається
- Створити детальну специфікацію перед початком роботи з Theme Builder

## Вирішення проблем {#troubleshooting}

**Мій site_brief не використовується**
- Підтвердіть, що у агента є доступ до пам'яті
- Попросіть агента "recall my site brief"
- Перевірте, чи увімкнена пам'ять у ваших налаштуваннях

**Я хочу почати з нуля з новим site_brief**
- Запитайте агента: "Clear my site brief and start fresh"
- Потім знову запустіть визначення специфікації сайту

**Агент робить рекомендації, які не відповідають моєму site_brief**
- Попросіть агента "review my site brief"
- Оновіть свій site_brief, якщо він застарів
- Надайте додатковий контекст у своїх запитах

## Наступні кроки {#next-steps}

Після визначення специфікації сайту:

1. **Використовуйте Theme Builder**: Створіть кастомну тему на основі вашого site_brief
2. **Удосконалюйте дизайн**: Використовуйте функцію Design System Aesthetics для детальної роботи над дизайном
3. **Плануйте контент**: Просіть агентів рекомендацій щодо структури контенту
4. **Створюйте функції**: Запитуйте функції, узгоджені з вашими бізнес-цілями
