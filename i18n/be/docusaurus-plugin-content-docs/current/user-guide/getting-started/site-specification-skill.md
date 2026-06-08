---
title: Навык спецыфікацыі сайта
sidebar_position: 18
_i18n_hash: 7470e8d04c1f380b3dca6ba5559b34f5
---
# Навык "Спецыфікацыя сайта"

**Навык "Спецыфікацыя сайта"** — гэта арганізаваны падыход да фіксацыі мэтаў вашага сайта, аўдыторыі і брэнда. Гэтыя дадзеныя захоўваюцца ў вашай памяці **site_brief**, якую агенты выкарыстоўваюць у розных сесіянах, каб прадастаўляць адповідальную і ў адпаведнасці з кантэкстам дапамога.

## Што такое Спецыфікацыя сайта?

Спецыфікацыя сайта — гэта працэс дакументавання:

- **Мэта сайта**: Што робіць ваш сайт і чаму ён існуе
- **Цэлевае аўдыторыя**: Хто набываецца на вашым сайце і што яму патрэбна
- **Ідэнтікет брэнда**: Вашы колеры, тональнасць і візуальны стыль
- **Бізнес-мэты**: Як выглядае поспех для вашага сайта
- **Структура кантэнту**: Як арганізаваны ваш сайт

Гэтая спецыфікацыя становіцца вашым **site_brief** — пастаяннай памяццю, якую агенты выкарыстоўваюць, каб разумець кантэкст вашага сайта.

## Чаму выкарыстоўваць Спецыфікацыю сайта?

### Пастаяннасць у розных сесіянах

Без site_brief вам трэба будзе павторальна паясняць мэту сайта ў кожны раз, калі вы пачынаеце новую сесію. З яго агенты адразу разумеюць:

- Мэты і аўдыторыю вашага сайта
- Колеры і тональнасць вашага брэнда
- Структуру вашага кантэнту
- Вашы бізнес-мэты

### Лучшыя рэкамендацыі

Агенты выкарыстоўваюць ваш site_brief, каб:

- Прапанаваць функцыі, адпаведныя мэце вашага сайта
- Рэкамендаваць структуры кантэнту, якія адпавядаюць вашым мэтам
- Прапанаваць дызайн, адпаведны вашым брэнду
- Пазбегнуць прапановы непазбежных функцый

### Шматштальніка ўваскулення

Новыя агенты (або агенты ў новых сесіянах) магуць хутка ўвайсці ў курс справы, чытуючы ваш site_brief, а не задавая ўдакладняльныя пытанні.

## Пачынне Спецыфікацыі сайта

### Падчас ўваскулення Theme Builder

Навык Спецыфікацыі сайта аўтаматычна пачынаецца падчас **Theme Builder onboarding flow**. Агент Setup Assistant задае пытанні і буе ваш site_brief.

### Ручнае пачынне

Вы можаце пачаць Спецыфікацыю сайта ў любы час:

```
"Let's define my site specification"
```

або

```
"Help me create a site brief"
```

## Процэс Спецыфікацыі сайта

### Крок 1: Мэта сайта

Агент запытвае:

```
What is your site's primary purpose?
- E-commerce store
- Blog or content site
- Portfolio or showcase
- SaaS application
- Community or forum
- Other: [describe]
```

Вы можаце выбраць катэгорыю або апісаць сваю ўласную мэту.

### Крок 2: Цэлевае аўдыторыя

```
Who is your primary audience?
- Consumers / general public
- Business professionals
- Developers / technical users
- Students / educators
- Other: [describe]

What are their main needs?
```

### Крок 3: Ідэнтікет брэнда

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

### Крок 4: Бізнес-мэты

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

### Крок 5: Структура кантэнту

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

## Ваша памяць site_brief

Пасля завяршэння Спецыфікацыі сайта ваша інфармацыя захоўваецца як **site_brief** у памяці вашага агента. Гэта структураваны записи, які ўтрымлівае:

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

## Пагляд і абнаўленне site_brief

### Пагляд site_brief

Запытайце ў агента:

```
"Show me my site brief"
```

або

```
"What do you know about my site?"
```

Агент адкажа, паказаўшы вашу захоўваную спецыфікацыю.

### Абнаўленне site_brief

Калі ваш сайт развіваецца, вы можаце абнавіць яго:

```
"Update my site brief: we're now targeting B2B customers"
```

або

```
"Refresh my site specification"
```

Гэта паўторна запусціць навык Спецыфікацыі сайта, выкарыстоўваючы вашу існуючу інфармацыю ў карысных пунктах.

## Як агенты выкарыстоўваюць site_brief

### Рэкамендацыі па дызайне

Калі вы запрашаеце змены ў дызайне, агенты спасылаюцца на ваш site_brief:

```
You: "Redesign my homepage"
Agent: "Based on your site brief, you're targeting women aged 25-45
with a warm, artisanal tone. I'll create a design that emphasizes
your handmade jewelry and sustainable values."
```

### Падказкі па функцыях

Агенты прапаноўваюць функцыі, адпаведныя вашым мэтам:

```
You: "What features should I add?"
Agent: "For an e-commerce store focused on customer loyalty,
I'd recommend: loyalty program, customer reviews, email newsletter,
and product recommendations."
```

### Структура кантэнту

Агенты прапаноўваюць арганізацыю кантэнту на аснове вашай структуры:

```
You: "How should I organize my blog?"
Agent: "Since you use a product catalog with blog, I'd suggest
organizing posts by product category and creating 'styling guides'
that showcase multiple products together."
```

## Найлепшыя практыкі

### Будзьце канкрэтнымі

Замест "агульнай аўдыторыі" апішыце вашу сапраўдную аўдыторыю:

- ✓ "Women aged 25-45, interested in sustainable fashion"
- ✗ "Everyone"

### Абнаўляйце рэгулярычна

Па меры развіцця вашага сайта, абнаўляйце свой site_brief:

- Калі вы змяняеце мэту на новую аўдыторыю
- Калі вы дадаеце новыя лінейкі прадукцыі
- Калі змяняецца ідэнтікет вашага брэнда
- Калі змяшчаюцца вашы бізнес-мэты

### Выкарыстоўвайце адрозненную тэматыку

Выкарыстоўвайце адноўныя тэрміны ў розных сесіянах:

- ✓ Заўсёды кажучы "sustainable jewelry" (а не "eco-friendly jewelry" і "green products")
- ✓ Пастаянна адносяцца да вашай аўдыторыі адным і тым чынам

### Уключайце кантэкст

Падавайце фонавую інфармацыю, якая дапамагае агентам разумець вашыя рашэнні:

- "Мы нацэлены на прафесіоналаў, якія цэняць якасць, а не цану"
- "Наша аўдыторыя мае высокі ўзровень тэхналагічнай граматоўнасці і чакае сучаснага дызайну"
- "Мы — стартап, які фінансуецца ўласнымі сродакамі, таму нам патрэбныя эканамічныя рашэнні"

## Сувязь з Theme Builder Onboarding

Навык Спецыфікацыі сайта інтэграваны ў **Theme Builder onboarding flow**. Калі вы завяршаеце ўваскуленне, ваш site_brief аўтаматычна ствараецца з інфармацыі, якую вы прадастаўлялі.

Вы таксама можаце правесці Спецыфікацыю сайта незалежна, калі захоцелі:

- Удосканаліць вашу спецыфікацыю пасля пачатковага наладжання
- Абнавіць ваш site_brief, калі ваш сайт развіваецца
- Стварыць дэталёвую спецыфікацыю перад пачаткам Theme Builder

## Выяўленне праблем

**Мій site_brief не выкарыстоўваецца**
- Патвердзіце, што агент мае доступ да памяці
- Папросіце агента "recall my site brief"
- Праверце, што памяць актыўირвана ў наступных настройках

**Я хочу пачаць з нуля з новым site_brief**
- Папросіце агента: "Clear my site brief and start fresh"
- Пасля гэтага зноў правесці Спецыфікацыю сайта

**Агент робіць рэкамендацыі, якія не адпавядаюць маёму site_brief**
- Папросіце агента "review my site brief"
- Абнавіць свой site_brief, калі ён застарэлы
- Падаць дадатковы кантэкст у свае запыты

## Наступныя крокі

Пасля вызначэння спецыфікацыі сайта:

1. **Выкарыстоўвайце Theme Builder**: Стварыце кастомны тэма на аснове вашага site_brief
2. **Удосканальвайце дызайн**: Выкарыстоўвайце навык Design System Aesthetics для дэталёвай працы над дызайном
3. **Плануйце кантэнт**: Папросіце агентаў рэкамендацыі па структурах кантэнту
4. **Будуйце функцыі**: Папросіце функцыі, адпаведныя вашым бізнес-мэтам
