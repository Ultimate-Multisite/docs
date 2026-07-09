---
title: Маълумотномаи қобилиятҳо
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Маълумотномаи қобилиятҳо

Қобилиятҳо амалҳои атомие мебошанд, ки Gratis AI Agent метавонад дар насби WordPress-и шумо фаро хонад. Ҳар қобилият як синфи сабтшудаи PHP мебошад, ки схемаи JSON-ро пешниҳод мекунад — агент ин схемаро ҳангоми иҷро мехонад, то фаҳмад кадом параметрҳо лозиманд ва қобилият чӣ бармегардонад.

Ин саҳифа ҳамаи қобилиятҳоеро ҳуҷҷатгузорӣ мекунад, ки бо Gratis AI Agent v1.9.0 меоянд.

---

## Навъҳои фармоишии навиштаҳо

Ин қобилиятҳо навъҳои фармоишии навиштаҳоро (CPTs), ки тавассути агент сабт шудаанд, идора мекунанд. Сабтҳо дар ҷадвали имконоти WordPress нигоҳ дошта мешаванд, то пас аз ғайрифаъол ва дубора фаъол кардани plugin боқӣ монанд.

### `register_post_type`

Навъи нави фармоишии навиштаро сабт мекунад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ҳа | Калиди навъи навишта (ҳадди аксар 20 аломат, бе ҳарфҳои калон, бе фосилаҳо) |
| `singular_label` | string | Ҳа | Номи ягонаи барои инсон хонданӣ, масалан `Portfolio Item` |
| `plural_label` | string | Ҳа | Номи ҷамъии барои инсон хонданӣ, масалан `Portfolio Items` |
| `public` | boolean | Не | Оё навъи навишта ба таври оммавӣ дастрас аст. Пешфарз `true` |
| `supports` | array | Не | Хусусиятҳо барои дастгирӣ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Пешфарз `["title","editor"]` |
| `has_archive` | boolean | Не | Оё саҳифаи бойгонии навъи навишта фаъол аст. Пешфарз `false` |
| `menu_icon` | string | Не | Синфи Dashicons ё URL барои нишонаи менюи маъмур. Пешфарз `"dashicons-admin-post"` |
| `rewrite_slug` | string | Не | URL slug барои навъи навишта. Пешфарзҳо ба `slug` |

**Мисол**

```json
{
  "slug": "portfolio",
  "singular_label": "Portfolio Item",
  "plural_label": "Portfolio Items",
  "public": true,
  "supports": ["title", "editor", "thumbnail"],
  "has_archive": true,
  "menu_icon": "dashicons-portfolio"
}
```

**Бармегардонад** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Ҳамаи навъҳои фармоишии навиштаҳоро, ки аз ҷониби агент сабт шудаанд, бармегардонад.

**Параметрҳо** — нест

**Бармегардонад**

```json
{
  "post_types": [
    {
      "slug": "portfolio",
      "singular_label": "Portfolio Item",
      "plural_label": "Portfolio Items",
      "public": true
    }
  ]
}
```

---

### `delete_post_type`

Навъи фармоишии навиштаро, ки қаблан аз ҷониби агент сабт шуда буд, аз сабт мебарорад. Навиштаҳои мавҷудаи он навъ дар пойгоҳи додаҳо боқӣ мемонанд, аммо дигар тавассути навъи навишта дастрас нестанд.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ҳа | Калиди навъи навишта барои хориҷ кардан |

**Бармегардонад** `{ "success": true, "slug": "portfolio" }`

---

## Таксономияҳои фармоишӣ

Ин қобилиятҳо таксономияҳои фармоиширо идора мекунанд. Мисли CPTs, сабтҳои таксономия нигоҳ дошта мешаванд.

### `register_taxonomy`

Таксономияи нави фармоиширо сабт мекунад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ҳа | Калиди таксономия (ҳадди аксар 32 аломат) |
| `singular_label` | string | Ҳа | Номи ягонаи барои инсон хонданӣ, масалан `Project Category` |
| `plural_label` | string | Ҳа | Номи ҷамъии барои инсон хонданӣ, масалан `Project Categories` |
| `post_types` | array | Ҳа | Post type slugs, ки ин таксономия бояд ба онҳо пайваст шавад |
| `hierarchical` | boolean | Не | `true` барои сабки категория, `false` барои сабки барчасп. Пешфарз `true` |
| `public` | boolean | Не | Оё истилоҳҳо ба таври оммавӣ дастрасанд. Пешфарз `true` |
| `rewrite_slug` | string | Не | URL slug барои таксономия. Пешфарзҳо ба `slug` |

**Мисол**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Бармегардонад** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Ҳамаи таксономияҳои фармоиширо, ки аз ҷониби агент сабт шудаанд, бармегардонад.

**Параметрҳо** — нест

**Бармегардонад**

```json
{
  "taxonomies": [
    {
      "slug": "project-category",
      "singular_label": "Project Category",
      "post_types": ["portfolio"],
      "hierarchical": true
    }
  ]
}
```

---

### `delete_taxonomy`

Таксономияи фармоиширо, ки қаблан аз ҷониби агент сабт шуда буд, аз сабт мебарорад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ҳа | Калиди таксономия барои хориҷ кардан |

**Бармегардонад** `{ "success": true, "slug": "project-category" }`

---

## Системаи тарроҳӣ

Қобилиятҳои системаи тарроҳӣ намоиши визуалии сайти WordPress-ро тағйир медиҳанд — аз CSS-и фармоишӣ то намунаҳои блокӣ ва логотипи сайт.

### `inject_custom_css`

CSS-ро ба `<head>`-и сайт тавассути `wp_add_inline_style` илова мекунад. CSS дар имконоти `gratis_ai_agent_custom_css` нигоҳ дошта мешавад ва ҳангоми барқарор кардани қобилият ба таври тоза аз навбат хориҷ мешавад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Ҳа | CSS-и дуруст барои ворид кардан |
| `label` | string | Не | Барчаспи барои инсон хонданӣ барои ин блоки CSS, ки дар гузоришҳои debug истифода мешавад. Пешфарз `"agent-injected"` |
| `replace` | boolean | Не | Агар `true` бошад, ҳамаи CSS-и қаблан воридшударо иваз мекунад. Пешфарз `false` (илова мекунад) |

**Мисол**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Бармегардонад** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Намунаи блокии дубора истифодашавандаро дар китобхонаи намунаҳои WordPress сабт мекунад.

**Параметрҳо**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ҳа | Шиносаи намуна, масалан `gratis/hero-dark` |
| `title` | string | Ҳа | Номи намунаи барои инсон хонданӣ, ки дар муҳаррир нишон дода мешавад |
| `content` | string | Ҳа | Нишонагузории сериализатсияшудаи блок (HTML) барои намуна |
| `categories` | array | Не | Pattern category slugs, масалан `["featured", "hero"]` |
| `description` | string | Не | Тавсифи кӯтоҳе, ки дар интихобгари намуна нишон дода мешавад |
| `keywords` | array | Не | Калидвожаҳои ҷустуҷӯ |

**Бармегардонад** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ҳамаи намунаҳои блокиро, ки аз ҷониби агент сабт шудаанд, номбар мекунад.

**Параметрҳо** — нест

**Бармегардонад**

```json
{
  "patterns": [
    {
      "slug": "gratis/hero-dark",
      "title": "Dark Hero",
      "categories": ["hero"]
    }
  ]
}
```

---

### `set_site_logo`

Логотипи сайти WordPress-ро ба ID-и замимаи додашуда ё URL-и тасвири дурдаст таъин мекунад. Вақте ки URL дода мешавад, тасвир боргирӣ шуда, ба Media Library ворид карда мешавад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `attachment_id` | integer | Не | ID-и замимаи мавҷудаи Media Library |
| `url` | string | Не | URL-и тасвири дурдаст барои ворид кардан ва ҳамчун логотип таъин намудан |

Яке аз `attachment_id` ё `url` бояд дода шавад.

**Бармегардонад** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Пештанзими номдори ранг/типографияро ба `theme.json` (ё `global-styles`)-и мавзӯи фаъол татбиқ мекунад. Пештанзимҳо бастаҳои интихобшуда мебошанд, ки аз ҷониби дастаи Gratis AI Agent нигоҳдорӣ мешаванд.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `preset` | string | Ҳа | Номи пештанзим, масалан `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Не | Агар `true` бошад, ба ҷойи иваз кардан бо қиматҳои мавҷуда якҷо мекунад. Пешфарз `false` |

**Пештанзимҳои дастрас**

| Пештанзим | Тавсиф |
|---|---|
| `minimal-dark` | Заминаи қариб сиёҳ, матни сафед, як ранги таъкидӣ |
| `warm-editorial` | Заминаи гарми наздик ба сафед, сарлавҳаҳои серифдор, рангҳои таъкидии заминӣ |
| `corporate-blue` | Палитраи кабуди баҳрӣ ва сафед бо типографияи касбӣ |
| `vibrant-startup` | Градиентҳои равшан, кунҷҳои мудаввар, навъи муосири sans-serif |
| `classic-blog` | Хокистариҳои бетараф, баландии сатри бароҳат, фосилагузории тарҳи анъанавӣ |

**Бармегардонад** `{ "success": true, "preset": "minimal-dark" }`

---

## Сабкҳои умумӣ

Қобилиятҳои Сабкҳои умумӣ қиматҳои theme.json-ро тавассути WordPress Global Styles API мехонанд ва менависанд, ки ба ҳамаи блокҳо ва қолабҳо дар саросари сайт таъсир мерасонад.

### `get_global_styles`

Танзимоти ҷории сабкҳои умумиро бармегардонад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `path` | string | Не | Нишондиҳандаи JSON ба қимати мушаххас, масалан `/color/palette` ё `/typography/fontSizes`. Агар партофта шавад, тамоми объектро бармегардонад. |

**Бармегардонад** объекти пурраи сабкҳои умумӣ ё қиматро дар `path`.

---

### `set_global_styles`

Як ё якчанд қиматро дар танзимоти сабкҳои умумӣ навсозӣ мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `path` | string | Ҳа | Нишондиҳандаи JSON ба қимате, ки бояд таъин шавад, масалан `/color/palette` |
| `value` | any | Ҳа | Қимати нав |

**Мисол** — ба палитра ранг илова кунед

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Бармегардонад** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ҳамаи тағйироти сабкҳои умумии татбиқшуда аз ҷониби агентро аз нав танзим мекунад ва пешфарзҳои мавзӯъро барқарор менамояд.

**Параметрҳо** — ҳеҷ

**Бармегардонад** `{ "success": true }`

---

## Менюҳои паймоиш

Қобилиятҳои Менюи паймоиш менюҳои паймоиши WordPress ва ҷузъҳои онҳоро эҷод ва идора мекунанд.

### `create_menu`

Менюи нави паймоиши WordPress эҷод мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `name` | string | Ҳа | Номи меню, масалан `Primary Navigation` |
| `location` | string | Не | Ҷойгиршавии мавзӯъ барои таъин кардани ин меню, масалан `primary` |

**Бармегардонад** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Менюро аз нав номгузорӣ мекунад ё онро ба ҷойгиршавии мавзӯъ дубора таъин мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `menu_id` | integer | Ҳа | ID-и менюе, ки бояд навсозӣ шавад |
| `name` | string | Не | Номи нави меню |
| `location` | string | Не | Ҷойгиршавии мавзӯъ барои таъин кардан ё дубора таъин кардан |

**Бармегардонад** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Ба менюи мавҷудаи паймоиш ҷузъ илова мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `menu_id` | integer | Ҳа | ID-и менюи ҳадаф |
| `type` | string | Ҳа | Навъи ҷузъ: `custom`, `post_type`, ё `taxonomy` |
| `title` | string | Не | Барчасп барои ҷузъи меню (барои навъи `custom` ҳатмӣ аст) |
| `url` | string | Не | URL барои ҷузъҳои `custom` |
| `object_id` | integer | Не | ID-и навишта ё ID-и истилоҳ барои ҷузъҳои `post_type`/`taxonomy` |
| `parent_id` | integer | Не | ID-и ҷузъи меню барои ҷойгир кардани ин ҷузъ дар зери он |
| `position` | integer | Не | Мавқеъ дар меню, бо ҳисоб аз сифр |

**Бармегардонад** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Ҷузъро аз менюи паймоиш хориҷ мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `item_id` | integer | Ҳа | ID-и ҷузъи меню барои хориҷ кардан |

**Бармегардонад** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Ҳамаи менюҳои паймоиши WordPress, аз ҷумла ҷойгиршавиҳои мавзӯи таъиншудаи онҳоро, рӯйхат мекунад.

**Параметрҳо** — ҳеҷ

**Бармегардонад**

```json
{
  "menus": [
    {
      "menu_id": 7,
      "name": "Primary Navigation",
      "location": "primary",
      "item_count": 5
    }
  ]
}
```

---

## Идоракунии имконот

Қобилиятҳои имконот имконоти WordPress-ро тавассути `get_option` / `update_option` мехонанд ва менависанд. Рӯйхати манъи дарунсохти бехатарӣ аз тағйири тасодуфии танзимоти муҳим пешгирӣ мекунад.

### `get_option`

Имконоти WordPress-ро мехонад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `option_name` | string | Ҳа | Калиди имконот, масалан `blogname` |

**Бармегардонад** `{ "option_name": "blogname", "value": "My Site" }`

Агар `option_name` дар рӯйхати манъи бехатарӣ бошад, хато бармегардонад.

---

### `set_option`

Имконоти WordPress-ро менависад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `option_name` | string | Ҳа | Калиди имконот |
| `value` | any | Ҳа | Қимати нав (барои массивҳо/объектҳо ба таври худкор сериализатсия мешавад) |
| `autoload` | string | Не | `"yes"` ё `"no"`. Пешфарз танзими мавҷудаи autoload-ро нигоҳ медорад |

Агар `option_name` дар рӯйхати басташудаи амниятӣ бошад, хато бармегардонад.

**Бармегардонад** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Як option-и WordPress-ро нест мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `option_name` | string | Ҳа | Калиди option барои нест кардан |

Агар `option_name` дар рӯйхати басташудаи амниятӣ бошад, хато бармегардонад.

**Бармегардонад** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Option-ҳои WordPress-ро, ки ба намуна мувофиқат мекунанд, рӯйхат мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `pattern` | string | Не | Намунаи SQL LIKE барои филтр кардани номҳои option, масалан `gratis_%`. Агар гузошта нашавад, ҳамаи option-ҳоро бармегардонад (дар пойгоҳҳои додаҳои калон бо эҳтиёт истифода баред). |
| `limit` | integer | Не | Шумораи ҳадди аксари натиҷаҳо. Пешфарз `50`, ҳадди аксар `500` |

**Бармегардонад**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Идоракунии муҳтаво

Қобилиятҳои Идоракунии муҳтаво навиштаҳо ва саҳифаҳои WordPress-ро эҷод ва таҳрир мекунанд. ID-ҳои навишта баргардонида мешаванд, то қадамҳои минбаъда дар нақшаҳои чандқобилиятӣ тавонанд ба муҳтавои эҷодшуда истинод кунанд.

### `create_post`

Як навишта, саҳифа ё вуруди навъи фармоишии навиштаи WordPress-и нав эҷод мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `title` | string | Ҳа | Унвони навишта |
| `content` | string | Не | Матни асосии навишта — матни одӣ, HTML ё нишонагузории блоки сериализатсияшударо қабул мекунад |
| `status` | string | Не | `draft`, `publish`, `pending`, `private`. Пешфарз `draft` |
| `post_type` | string | Не | Слаги навъи навишта, масалан `post`, `page`, ё ҳар CPT-и сабтшуда. Пешфарз `post` |
| `excerpt` | string | Не | Хулосаи кӯтоҳе, ки дар бойгониҳо ва натиҷаҳои ҷустуҷӯ нишон дода мешавад |
| `categories` | array | Не | Массиви номҳо ё ID-ҳои категорияҳо барои таъин кардан |
| `tags` | array | Не | Массиви номҳо ё ID-ҳои тегҳо барои таъин кардан |
| `author` | integer | Не | ID-и корбари WordPress барои муқаррар кардан ҳамчун муаллифи навишта. Ба таври пешфарз корбари ҷорӣ истифода мешавад |
| `date` | string | Не | Санаи нашр дар формати ISO 8601, масалан `2026-05-01T09:00:00` |
| `page_template` | string | Не | Файли қолаб барои таъин кардан ба ин навишта ё саҳифа, масалан `page-full-width.php`. Танҳо вақте маъно дорад, ки `post_type` `page` ё CPT-е бошад, ки қолабҳои саҳифаро дастгирӣ мекунад. |

**Мисол**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Бармегардонад** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Як навишта ё саҳифаи мавҷудаи WordPress-ро навсозӣ мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `post_id` | integer | Ҳа | ID-и навиштае, ки бояд навсозӣ шавад |
| `title` | string | Не | Унвони нави навишта |
| `content` | string | Не | Матни асосии нави навишта |
| `status` | string | Не | Вазъияти нав: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Не | Иқтибоси нав |
| `categories` | array | Не | Рӯйхати пурраи категорияҳоро бо ин массиви номҳо ё ID-ҳо иваз кунед |
| `tags` | array | Не | Рӯйхати пурраи тегҳоро бо ин массиви номҳо ё ID-ҳо иваз кунед |
| `page_template` | string | Не | Файли қолаби нав барои таъин кардан ба ин навишта ё саҳифа, масалан `page-full-width.php`. Барои хориҷ кардани таъини қолаб ва баргаштан ба пешфарзи theme сатри холӣ фиристед. |

**Мисол** — тағйир додани қолаб пас аз эҷод

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Бармегардонад** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Дар як фарохонии қобилият якчанд навишта эҷод мекунад ва рафтуомадҳоро ҳангоми сохтани сайт ё воридоти оммавии муҳтаво кам мекунад. Навиштаҳо пайдарпай эҷод мешаванд; агар яке ноком шавад, дигарон идома медиҳанд ва нокомӣ дар массиви натиҷаҳо гузориш дода мешавад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `posts` | array | Ҳа | Массиви объектҳои навишта, ки ҳар кадом ҳамон параметрҳоро мисли `create_post` қабул мекунад |
| `stop_on_error` | boolean | Не | Агар `true` бошад, пас аз нокомии аввал коркардро боздоред. Пешфарз `false` |

**Мисол**

```json
{
  "posts": [
    {
      "title": "About Us",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Services",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Contact",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Бармегардонад**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "About Us" },
    { "success": true, "post_id": 43, "title": "Services" },
    { "success": true, "post_id": 44, "title": "Contact" }
  ]
}
```

---

### `set_featured_image`

Тасвири барҷаста (тасвири хурди навишта)-ро ба навишта ё саҳифаи мавҷуда таъин мекунад. ID-и замимаи мавҷудаи Media Library ё URL-и тасвири дурдастро қабул мекунад; вақте URL дода мешавад, тасвир ба таври худкор боргирӣ ва ворид карда мешавад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `post_id` | integer | Ҳа | ID-и навишта ё саҳифае, ки бояд навсозӣ шавад |
| `attachment_id` | integer | Не | ID-и замимаи мавҷудаи Media Library |
| `url` | string | Не | URL-и тасвири дурдаст барои ворид кардан ва муқаррар кардан ҳамчун тасвири барҷаста |
| `alt_text` | string | Не | Матни alt барои татбиқ ба замима, агар он аз URL ворид карда шавад |

Яке аз `attachment_id` ё `url` бояд пешниҳод карда шавад.

**Бармегардонад** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Бо истифода аз plugin-и фаъоли форма (Contact Form 7, WPForms, Fluent Forms ё Gravity Forms, вобаста ба он ки кадомаш насб шудааст) формаи тамос эҷод мекунад. Shortcode бармегардонад, ки метавонад дар ҳар навишта ё саҳифа ҷойгир карда шавад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `title` | string | Ҳа | Номи форма, ки дар идоракунии plugin-и форма нишон дода мешавад |
| `fields` | array | Ҳа | Рӯйхати мураттаби майдонҳои форма (объекти Майдонро дар поён бинед) |
| `recipient` | string | Не | Суроғаи email барои гирифтани ирсолҳо. Бо пешфарз ба email-и администратори WordPress фиристода мешавад |
| `subject` | string | Не | Сатри мавзӯи email. Ҳангоми истифодаи Contact Form 7 placeholder-ҳои `[your-name]` ва `[your-subject]`-ро дастгирӣ мекунад |
| `confirmation_message` | string | Не | Паёме, ки пас аз ирсоли муваффақ нишон дода мешавад. Пешфарз: `"Thank you for your message. We'll be in touch soon."` |

**Объекти майдон**

| Калид | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `name` | string | Ҳа | Номи дохилии майдон / калиди мошинӣ |
| `label` | string | Ҳа | Нишонаи барои инсон хондашаванда, ки дар форма нишон дода мешавад |
| `type` | string | Ҳа | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Не | Оё майдон бояд пеш аз ирсол пур карда шавад. Пешфарз `false` |
| `options` | array | Не | Имконот барои майдонҳои `select`, `checkbox` ва `radio` |
| `placeholder` | string | Не | Матни placeholder барои вурудҳои навъи матн |

**Мисол**

```json
{
  "title": "Restaurant Booking Enquiry",
  "fields": [
    { "name": "your-name",    "label": "Name",             "type": "text",     "required": true },
    { "name": "your-email",   "label": "Email",            "type": "email",    "required": true },
    { "name": "party-size",   "label": "Party size",       "type": "select",   "options": ["1–2", "3–5", "6–10", "10+"] },
    { "name": "your-message", "label": "Special requests", "type": "textarea", "required": false }
  ],
  "recipient": "bookings@example.com",
  "subject": "New booking enquiry from [your-name]"
}
```

**Бармегардонад**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Баррасии визуалӣ

Қобилиятҳои Баррасии визуалӣ ба agent имкон медиҳанд, ки screenshot-ҳои саҳифаҳои зиндаро гирад ва онҳоро таҳлил кунад; ин баррасии мустақили тарроҳӣ, муқоисаҳои пеш/пас ва санҷишҳои регрессияи визуалиро бе зарурати ягон browser extension имконпазир месозад.

### `capture_screenshot`

Screenshot-и як саҳифаи WordPress-ро дар URL-и додашуда бо истифода аз browser-и беинтерфейси тарафи server мегирад. Тасвир ба Media Library захира мешавад ва URL-и CDN баргардонда мешавад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `url` | string | Ҳа | URL-и пурраи саҳифа барои screenshot, масалан `https://example.com/about/` |
| `width` | integer | Не | Паҳнои viewport бо пиксел. Пешфарз `1280` |
| `height` | integer | Не | Баландии viewport бо пиксел. Пешфарз `800` |
| `full_page` | boolean | Не | Ба ҷойи танҳо viewport, тамоми саҳифаи ҳаракатшавандаро сабт кунед. Пешфарз `false` |
| `delay_ms` | integer | Не | Миллисонияҳо барои интизор шудан пас аз боршавии саҳифа пеш аз сабт, барои муҳтавои аниматсионӣ муфид аст. Пешфарз `500` |
| `label` | string | Не | Нишонаи барои инсон хондашаванда, ки бо attachment дар Media Library нигоҳ дошта мешавад |

**Бармегардонад**

```json
{
  "success": true,
  "attachment_id": 88,
  "url": "https://example.com/wp-content/uploads/2026/04/screenshot-about.png",
  "width": 1280,
  "height": 800
}
```

---

### `compare_screenshots`

Ду screenshot-ро мегирад ва холҳои фарқи визуалӣ ҳамроҳ бо тасвири фарқ, ки минтақаҳои тағйирёфтаро нишон медиҳад, бармегардонад. Барои тасдиқ кардани он ки тағйири тарроҳӣ натиҷаи интизоршударо додааст ё барои ошкор кардани регрессияҳои нохоста муфид аст.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `before_url` | string | Ҳа | URL-и саҳифа барои сабт ҳамчун ҳолати "пеш" |
| `after_url` | string | Ҳа | URL-и саҳифа барои сабт ҳамчун ҳолати "пас". Агар муқоиса дар тӯли вақт бошад, метавонад ҳамон URL бошад |
| `width` | integer | Не | Паҳнои viewport барои ҳар ду сабт. Пешфарз `1280` |
| `threshold` | float | Не | Ҳадди фарқи пиксел (0.0–1.0). Пикселҳо дар доираи ин таҳаммул бетағйир ҳисобида мешаванд. Пешфарз `0.1` |

**Бармегардонад**

```json
{
  "success": true,
  "diff_score": 0.04,
  "changed_pixels": 2340,
  "total_pixels": 1024000,
  "diff_attachment_id": 91,
  "diff_url": "https://example.com/wp-content/uploads/2026/04/diff-about.png"
}
```

`diff_score`-и `0.0` маънои набудани тағйири намоёнро дорад; `1.0` маънои онро дорад, ки ҳар пиксел тағйир ёфтааст.

---

### `review_page_design`

Screenshot-и як саҳифаро мегирад ва онро барои таҳлили визуалӣ ба модели забонӣ мефиристад. Арзёбии сохторёфтаро бармегардонад, ки тарҳбандӣ, типография, истифодаи ранг ва масъалаҳои дастрасиро дар бар мегирад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `url` | string | Ҳа | URL-и пурраи саҳифа барои баррасӣ |
| `focus` | string | Не | Рӯйхати бо вергул ҷудошудаи соҳаҳои баррасӣ барои таъкид: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Пешфарз: ҳамаи соҳаҳо |
| `width` | integer | Не | Паҳнои viewport. Пешфарз `1280` |

**Бармегардонад**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "The page structure is clean and readable. Two accessibility issues detected.",
    "layout": "Good visual hierarchy. Hero section is prominent.",
    "typography": "Body text is 15px — consider increasing to 16px for readability.",
    "colour": "Contrast ratio on the CTA button (#fff on #4a90e2) is 3.1:1 — below the WCAG AA threshold of 4.5:1.",
    "accessibility": ["Low contrast on CTA button", "Missing alt text on hero image"],
    "suggestions": ["Darken the CTA button to #1a5cb0 to pass WCAG AA", "Add descriptive alt text to the hero image"]
  }
}
```

---

## Қобилиятҳои насбшаванда

Registry-и Қобилиятҳои насбшаванда ба шумо имкон медиҳад, ки agent-ро бо бастаҳои иловагии қобилият, ки ҳамчун plugin-ҳои WordPress паҳн мешаванд, васеъ кунед. Ҳар баста бо истифода аз API-и стандартии қобилият як ё якчанд қобилиятро ба қайд мегирад.

### `list_available_abilities`

Феҳристи бастаҳои қобилиятро, ки аз registry барои насб дастрасанд, бармегардонад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `category` | string | Не | Аз рӯи категория филтр мекунад: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Бармегардонад**

```json
{
  "packs": [
    {
      "slug": "gratis-ai-agent-woocommerce",
      "name": "WooCommerce Abilities",
      "category": "ecommerce",
      "version": "1.0.0",
      "abilities": ["create_product", "update_pricing", "manage_inventory"],
      "installed": false
    }
  ]
}
```

---

### `install_ability`

Бастаи қобилиятҳоро аз феҳрист боргирӣ ва фаъол мекунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `slug` | string | Ҳа | slug-и плагини бастаи қобилиятҳо |

**Бармегардонад** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Ба феҳристи қобилиятҳо дархост мефиристад, то беҳтарин плагинро барои мавриди истифодабарии тавсифшуда пайдо кунад ва, ба таври ихтиёрӣ, онро насб кунад.

**Параметрҳо**

| Параметр | Навъ | Ҳатмӣ | Тавсиф |
|---|---|---|---|
| `description` | string | Ҳа | Тавсифи функсионалии дилхоҳ бо забони табиӣ |
| `install` | boolean | Не | Агар `true` бошад, плагини тавсияшударо фавран насб мекунад. Пешфарз `false` |

**Мисол**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Бармегардонад**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Widely adopted, supports file uploads, and integrates with Akismet for spam filtering.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
