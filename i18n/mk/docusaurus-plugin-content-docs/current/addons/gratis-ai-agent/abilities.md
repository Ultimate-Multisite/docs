---
title: Референца за способности
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Референца за способности

Способностите се атомски дејства што Gratis AI Agent може да ги повика на вашата WordPress инсталација. Секоја способност е регистрирана PHP класа што изложува JSON шема — агентот ја чита оваа шема при извршување за да разбере кои параметри се потребни и што враќа способноста.

Оваа страница ги документира сите способности што се испорачуваат со Gratis AI Agent v1.9.0.

---

## Прилагодени типови објави

Овие способности управуваат со прилагодени типови објави (CPTs) регистрирани преку агентот. Регистрациите се зачувуваат во табелата со WordPress опции за да преживеат деактивирање и повторно активирање на plugin-от.

### `register_post_type`

Регистрира нов прилагоден тип објава.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Клучот на типот објава (најмногу 20 знаци, без големи букви, без празни места) |
| `singular_label` | string | Да | Читливо единечно име, на пр. `Portfolio Item` |
| `plural_label` | string | Да | Читливо множинско име, на пр. `Portfolio Items` |
| `public` | boolean | Не | Дали типот објава е јавно достапен. Стандардно `true` |
| `supports` | array | Не | Функции за поддршка: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Стандардно `["title","editor"]` |
| `has_archive` | boolean | Не | Дали е овозможена архивска страница за типот објава. Стандардно `false` |
| `menu_icon` | string | Не | Dashicons класа или URL за иконата на администраторското мени. Стандардно `"dashicons-admin-post"` |
| `rewrite_slug` | string | Не | URL slug за типот објава. Стандардно е `slug` |

**Пример**

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

**Враќа** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Ги враќа сите прилагодени типови објави регистрирани од агентот.

**Параметри** — нема

**Враќа**

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

Го одрегистрира прилагодениот тип објава претходно регистриран од агентот. Постоечките објави од тој тип остануваат во базата на податоци, но повеќе не се достапни преку типот објава.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Клучот на типот објава што треба да се отстрани |

**Враќа** `{ "success": true, "slug": "portfolio" }`

---

## Прилагодени таксономии

Овие способности управуваат со прилагодени таксономии. Како и CPTs, регистрациите на таксономии се зачувуваат.

### `register_taxonomy`

Регистрира нова прилагодена таксономија.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Клучот на таксономијата (најмногу 32 знаци) |
| `singular_label` | string | Да | Читливо единечно име, на пр. `Project Category` |
| `plural_label` | string | Да | Читливо множинско име, на пр. `Project Categories` |
| `post_types` | array | Да | Slug-ови на типови објави на кои треба да се прикачи оваа таксономија |
| `hierarchical` | boolean | Не | `true` за стил на категорија, `false` за стил на ознака. Стандардно `true` |
| `public` | boolean | Не | Дали термините се јавно достапни. Стандардно `true` |
| `rewrite_slug` | string | Не | URL slug за таксономијата. Стандардно е `slug` |

**Пример**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Враќа** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Ги враќа сите прилагодени таксономии регистрирани од агентот.

**Параметри** — нема

**Враќа**

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

Ја одрегистрира прилагодената таксономија претходно регистрирана од агентот.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Клучот на таксономијата што треба да се отстрани |

**Враќа** `{ "success": true, "slug": "project-category" }`

---

## Дизајн-систем

Способностите на дизајн-системот ја изменуваат визуелната презентација на WordPress страницата — од прилагоден CSS до блок-шаблони и логото на страницата.

### `inject_custom_css`

Додава CSS во `<head>` на страницата преку `wp_add_inline_style`. CSS се чува во опцијата `gratis_ai_agent_custom_css` и чисто се отстранува од редицата кога способноста се ресетира.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `css` | string | Да | Валиден CSS за вметнување |
| `label` | string | Не | Читлива ознака за овој CSS блок, што се користи во дневници за отстранување грешки. Стандардно `"agent-injected"` |
| `replace` | boolean | Не | Ако е `true`, го заменува целиот претходно вметнат CSS. Стандардно `false` (додава) |

**Пример**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Враќа** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Регистрира повеќекратно употреблив блок-шаблон во библиотеката со шаблони на WordPress.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Идентификатор на шаблон, на пр. `gratis/hero-dark` |
| `title` | string | Да | Читливо име на шаблон прикажано во уредувачот |
| `content` | string | Да | Серијализирана блок-ознака (HTML) за шаблонот |
| `categories` | array | Не | Slug-ови на категории на шаблони, на пр. `["featured", "hero"]` |
| `description` | string | Не | Краток опис прикажан во избирачот на шаблони |
| `keywords` | array | Не | Клучни зборови за пребарување |

**Враќа** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Ги наведува сите блок-шаблони регистрирани од агентот.

**Параметри** — нема

**Враќа**

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

Го поставува логото на WordPress веб-локацијата на дадено ID на прилог или на далечински URL на слика. Кога е даден URL, сликата се презема и се увезува во медиумската библиотека.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `attachment_id` | integer | Не | ID на постоечки прилог во медиумската библиотека |
| `url` | string | Не | Далечински URL на слика за увоз и поставување како лого |

Мора да се обезбеди едно од `attachment_id` или `url`.

**Враќа** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Применува именувана предефинирана поставка за боја/типографија на `theme.json` (или `global-styles`) на активната тема. Предефинираните поставки се курирани пакети што ги одржува тимот на Gratis AI Agent.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `preset` | string | Да | Име на предефинирана поставка, на пр. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Не | Ако е `true`, спој со постоечките вредности наместо замена. Стандардно `false` |

**Достапни предефинирани поставки**

| Предефинирана поставка | Опис |
|---|---|
| `minimal-dark` | Речиси црна позадина, бел текст, една акцентна боја |
| `warm-editorial` | Топла крем-бела позадина, серифни наслови, земјени акцентни бои |
| `corporate-blue` | Темносина и бела палета со професионална типографија |
| `vibrant-startup` | Светли градиенти, заоблени агли, модерен sans-serif фонт |
| `classic-blog` | Неутрални сиви нијанси, удобна висина на ред, традиционално растојание во распоредот |

**Враќа** `{ "success": true, "preset": "minimal-dark" }`

---

## Глобални стилови

Способностите за глобални стилови читаат и запишуваат вредности од theme.json преку WordPress API за глобални стилови, влијаејќи на сите блокови и шаблони низ целата веб-локација.

### `get_global_styles`

Ја враќа тековната конфигурација на глобалните стилови.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `path` | string | Не | JSON pointer до конкретна вредност, на пр. `/color/palette` или `/typography/fontSizes`. Го враќа целиот објект ако е изоставено. |

**Враќа** го целосниот објект на глобалните стилови или вредноста на `path`.

---

### `set_global_styles`

Ажурира една или повеќе вредности во конфигурацијата на глобалните стилови.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `path` | string | Да | JSON pointer до вредноста што треба да се постави, на пр. `/color/palette` |
| `value` | any | Да | Новата вредност |

**Пример** — додајте боја во палетата

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Враќа** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Ги ресетира сите промени на глобалните стилови применети од агентот, враќајќи ги стандардните вредности на темата.

**Параметри** — нема

**Враќа** `{ "success": true }`

---

## Навигациски менија

Способностите за навигациско мени создаваат и управуваат со WordPress навигациски менија и нивните ставки.

### `create_menu`

Создава ново WordPress навигациско мени.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `name` | string | Да | Име на мени, на пр. `Primary Navigation` |
| `location` | string | Не | Локација во темата на која ќе се додели ова мени, на пр. `primary` |

**Враќа** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Преименува мени или повторно го доделува на локација во тема.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `menu_id` | integer | Да | ID на менито што треба да се ажурира |
| `name` | string | Не | Ново име на мени |
| `location` | string | Не | Локација во тема за доделување или повторно доделување |

**Враќа** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Додава ставка во постоечко навигациско мени.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `menu_id` | integer | Да | ID на целното мени |
| `type` | string | Да | Тип на ставка: `custom`, `post_type` или `taxonomy` |
| `title` | string | Не | Ознака за ставката од менито (задолжително за тип `custom`) |
| `url` | string | Не | URL за ставки `custom` |
| `object_id` | integer | Не | ID на објава или ID на термин за ставки `post_type`/`taxonomy` |
| `parent_id` | integer | Не | ID на ставка од мени под која ќе се вгнезди оваа ставка |
| `position` | integer | Не | Позиција во менито базирана на нула |

**Враќа** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Отстранува ставка од навигациско мени.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `item_id` | integer | Да | ID на ставка од мени што треба да се отстрани |

**Враќа** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Ги наведува сите WordPress навигациски менија, вклучувајќи ги нивните доделени локации во темата.

**Параметри** — нема

**Враќа**

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

## Управување со опции

Способностите за опции читаат и запишуваат WordPress опции преку `get_option` / `update_option`. Вградената безбедносна блок-листа спречува случајна измена на критични поставки.

### `get_option`

Чита WordPress опција.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `option_name` | string | Да | Клучот на опцијата, на пр. `blogname` |

**Враќа** `{ "option_name": "blogname", "value": "My Site" }`

Враќа грешка ако `option_name` е на безбедносната блок-листа.

---

### `set_option`

Запишува WordPress опција.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `option_name` | string | Да | Клучот на опцијата |
| `value` | any | Да | Новата вредност (автоматски се серијализира за низи/објекти) |
| `autoload` | string | Не | `"yes"` или `"no"`. Стандардно ја зачувува постоечката поставка за autoload |

Враќа грешка ако `option_name` е на безбедносната блок-листа.

**Враќа** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Брише WordPress опција.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `option_name` | string | Да | Клучот на опцијата што треба да се избрише |

Враќа грешка ако `option_name` е на безбедносната блок-листа.

**Враќа** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Ги наведува WordPress опциите што одговараат на шема.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `pattern` | string | Не | SQL LIKE шема за филтрирање имиња на опции, на пр. `gratis_%`. Ги враќа сите опции ако е изоставено (користете внимателно на големи бази на податоци). |
| `limit` | integer | Не | Максимален број резултати. Стандардно `50`, максимум `500` |

**Враќа**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Управување со содржина

Можностите за управување со содржина создаваат и уредуваат WordPress објави и страници. ID-јата на објавите се враќаат за да можат следните чекори во планови со повеќе можности да се повикаат на создадената содржина.

### `create_post`

Создава нова WordPress објава, страница или запис од сопствен тип на објава.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `title` | string | Да | Наслов на објавата |
| `content` | string | Не | Тело на објавата — прифаќа обичен текст, HTML или серијализирано означување на блокови |
| `status` | string | Не | `draft`, `publish`, `pending`, `private`. Стандардно `draft` |
| `post_type` | string | Не | Slug на типот објава, на пр. `post`, `page` или кој било регистриран CPT. Стандардно `post` |
| `excerpt` | string | Не | Кратко резиме прикажано во архиви и резултати од пребарување |
| `categories` | array | Не | Низа од имиња или ID-ја на категории за доделување |
| `tags` | array | Не | Низа од имиња или ID-ја на ознаки за доделување |
| `author` | integer | Не | WordPress корисничко ID што треба да се постави како автор на објавата. Стандардно е тековниот корисник |
| `date` | string | Не | Датум на објавување во ISO 8601 формат, на пр. `2026-05-01T09:00:00` |
| `page_template` | string | Не | Датотека на шаблон што треба да се додели на оваа објава или страница, на пр. `page-full-width.php`. Има значење само кога `post_type` е `page` или CPT што поддржува шаблони за страници. |

**Пример**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Враќа** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Ажурира постоечка WordPress објава или страница.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `post_id` | integer | Да | ID на објавата што треба да се ажурира |
| `title` | string | Не | Нов наслов на објавата |
| `content` | string | Не | Ново тело на објавата |
| `status` | string | Не | Нов статус: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Не | Нов извадок |
| `categories` | array | Не | Заменете ја целосната листа на категории со оваа низа од имиња или ID-ја |
| `tags` | array | Не | Заменете ја целосната листа на ознаки со оваа низа од имиња или ID-ја |
| `page_template` | string | Не | Нова датотека на шаблон што треба да се додели на оваа објава или страница, на пр. `page-full-width.php`. Проследете празен стринг за да го отстраните доделувањето на шаблонот и да се вратите на стандардното од темата. |

**Пример** — променете шаблон по создавањето

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Враќа** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Создава повеќе објави во еден повик на можност, намалувајќи ги повратните барања при изработка на сајт или масовен увоз на содржина. Објавите се создаваат по редослед; ако една не успее, другите продолжуваат, а неуспехот се пријавува во низата со резултати.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `posts` | array | Да | Низа од објекти на објави, од кои секој ги прифаќа истите параметри како `create_post` |
| `stop_on_error` | boolean | Не | Ако е `true`, запрете ја обработката по првиот неуспех. Стандардно `false` |

**Пример**

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

**Враќа**

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

Доделува истакната слика (минијатура на објава) на постоечка објава или страница. Прифаќа ID на постоечки прилог од Media Library или URL на оддалечена слика; кога е даден URL, сликата автоматски се презема и увезува.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `post_id` | integer | Да | ID на објавата или страницата што треба да се ажурира |
| `attachment_id` | integer | Не | ID на постоечки прилог од Media Library |
| `url` | string | Не | URL на оддалечена слика за увоз и поставување како истакната слика |
| `alt_text` | string | Не | Алтернативен текст што треба да се примени на прилогот ако е увезен од URL |

Мора да се обезбеди едно од `attachment_id` или `url`.

**Враќа** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Создава контакт-форма користејќи го активниот plugin за форми (Contact Form 7, WPForms, Fluent Forms или Gravity Forms, во зависност од тоа кој е инсталиран). Враќа shortcode што може да се вгради во која било објава или страница.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `title` | string | Да | Име на формуларот прикажано во администраторскиот дел на plugin-от за формулари |
| `fields` | array | Да | Подредена листа на полиња на формуларот (видете го објектот Field подолу) |
| `recipient` | string | Не | Е-адреса за примање поднесоци. Стандардно е администраторската е-адреса на WordPress |
| `subject` | string | Не | Наслов на е-пораката. Поддржува placeholders `[your-name]` и `[your-subject]` кога се користи Contact Form 7 |
| `confirmation_message` | string | Не | Порака прикажана по успешно поднесување. Стандардно: `"Thank you for your message. We'll be in touch soon."` |

**Објект Field**

| Клуч | Тип | Задолжително | Опис |
|---|---|---|---|
| `name` | string | Да | Внатрешно име на поле / машински клуч |
| `label` | string | Да | Читлива ознака прикажана на формуларот |
| `type` | string | Да | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Не | Дали полето мора да биде пополнето пред поднесување. Стандардно `false` |
| `options` | array | Не | Опции за полиња `select`, `checkbox` и `radio` |
| `placeholder` | string | Не | Placeholder текст за внесови од текстуален тип |

**Пример**

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

**Враќа**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуелен преглед

Можностите за визуелен преглед му дозволуваат на агентот да снима слики од екранот на активни страници и да ги анализира, овозможувајќи автономен преглед на дизајнот, споредби пред/потоа и проверки за визуелна регресија без потреба од каква било екстензија за прелистувач.

### `capture_screenshot`

Снима слика од екранот на WordPress страница на дадена URL-адреса со користење серверски headless прелистувач. Сликата се зачувува во Media Library и се враќа CDN URL.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `url` | string | Да | Целосна URL-адреса на страницата за снимање слика од екранот, на пр. `https://example.com/about/` |
| `width` | integer | Не | Ширина на viewport во пиксели. Стандардно `1280` |
| `height` | integer | Не | Висина на viewport во пиксели. Стандардно `800` |
| `full_page` | boolean | Не | Сними ја целата страница што може да се скрола наместо само viewport. Стандардно `false` |
| `delay_ms` | integer | Не | Милисекунди за чекање по вчитување на страницата пред снимање, корисно за анимирана содржина. Стандардно `500` |
| `label` | string | Не | Читлива ознака зачувана со прилогот во Media Library |

**Враќа**

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

Зема две слики од екранот и враќа резултат за визуелна разлика плус слика со разлики што ги истакнува изменетите региони. Корисно за потврдување дека промена во дизајнот го дала очекуваниот резултат или за откривање ненамерни регресии.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `before_url` | string | Да | URL на страницата што треба да се сними како состојба „пред“ |
| `after_url` | string | Да | URL на страницата што треба да се сними како состојба „потоа“. Може да биде истата URL-адреса ако се споредува низ време |
| `width` | integer | Не | Ширина на viewport за двете снимања. Стандардно `1280` |
| `threshold` | float | Не | Праг на разлика меѓу пиксели (0.0–1.0). Пикселите во рамките на оваа толеранција се сметаат за непроменети. Стандардно `0.1` |

**Враќа**

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

`diff_score` од `0.0` значи дека нема видлива промена; `1.0` значи дека секој пиксел е променет.

---

### `review_page_design`

Снима слика од екранот на страница и ја испраќа до јазичниот модел за визуелна анализа. Враќа структуирана проценка што опфаќа распоред, типографија, употреба на бои и грижи за пристапност.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `url` | string | Да | Целосна URL-адреса на страницата за преглед |
| `focus` | string | Не | Листа од области за преглед одделени со запирки на кои треба да се стави акцент: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Стандардно: сите области |
| `width` | integer | Не | Ширина на viewport. Стандардно `1280` |

**Враќа**

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

## Инсталирачки можности

Регистарот на инсталирачки можности ви овозможува да го проширите агентот со дополнителни пакети со можности дистрибуирани како WordPress plugins. Секој пакет регистрира една или повеќе можности користејќи го стандардниот API за можности.

### `list_available_abilities`

Го враќа каталогот на пакети со можности достапни за инсталација од регистарот.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `category` | string | Не | Филтрирај по категорија: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Враќа**

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

Презема и активира пакет со способности од регистарот.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `slug` | string | Да | Slug на plugin-от за пакетот со способности |

**Враќа** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Го пребарува регистарот на способности за да го најде најдобриот plugin за опишан случај на употреба и, по избор, го инсталира.

**Параметри**

| Параметар | Тип | Задолжително | Опис |
|---|---|---|---|
| `description` | string | Да | Опис на саканата функционалност на природен јазик |
| `install` | boolean | Не | Ако е `true`, веднаш го инсталира препорачаниот plugin. Стандардно `false` |

**Пример**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Враќа**

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
