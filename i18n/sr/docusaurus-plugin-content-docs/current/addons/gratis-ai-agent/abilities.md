---
title: Референца способности
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Референца способности

Способности су атомске радње које Gratis AI Agent може да позове у вашој WordPress инсталацији. Свака способност је регистрована PHP класа која излаже JSON шему — агент чита ову шему током извршавања да би разумео који су параметри потребни и шта способност враћа.

Ова страница документује све способности које се испоручују уз Gratis AI Agent v1.9.0.

---

## Прилагођени типови објава {#custom-post-types}

Ове способности управљају прилагођеним типовима објава (CPT) регистрованим преко агента. Регистрације се чувају у WordPress табели опција, тако да опстају након деактивације и поновне активације plugin-а.

### `register_post_type` {#registerposttype}

Региструје нови прилагођени тип објаве.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Кључ типа објаве (највише 20 знакова, без великих слова, без размака) |
| `singular_label` | string | Да | Једнински назив читљив људима, нпр. `Portfolio Item` |
| `plural_label` | string | Да | Множински назив читљив људима, нпр. `Portfolio Items` |
| `public` | boolean | Не | Да ли је тип објаве јавно доступан. Подразумевано `true` |
| `supports` | array | Не | Функционалности за подршку: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Подразумевано `["title","editor"]` |
| `has_archive` | boolean | Не | Да ли је омогућена архивска страница типа објаве. Подразумевано `false` |
| `menu_icon` | string | Не | Dashicons класа или URL за икону администраторског менија. Подразумевано `"dashicons-admin-post"` |
| `rewrite_slug` | string | Не | URL slug за тип објаве. Подразумева се `slug` |

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

**Враћа** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Враћа све прилагођене типове објава које је регистровао агент.

**Параметри** — нема

**Враћа**

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

### `delete_post_type` {#deleteposttype}

Одјављује прилагођени тип објаве који је агент претходно регистровао. Постојеће објаве тог типа остају у бази података, али више нису доступне преко типа објаве.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Кључ типа објаве који треба уклонити |

**Враћа** `{ "success": true, "slug": "portfolio" }`

---

## Прилагођене таксономије {#custom-taxonomies}

Ове способности управљају прилагођеним таксономијама. Као и CPT-ови, регистрације таксономија се чувају.

### `register_taxonomy` {#registertaxonomy}

Региструје нову прилагођену таксономију.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Кључ таксономије (највише 32 знака) |
| `singular_label` | string | Да | Једнински назив читљив људима, нпр. `Project Category` |
| `plural_label` | string | Да | Множински назив читљив људима, нпр. `Project Categories` |
| `post_types` | array | Да | Slug-ови типова објава за које ова таксономија треба да буде повезана |
| `hierarchical` | boolean | Не | `true` за стил категорија, `false` за стил ознака. Подразумевано `true` |
| `public` | boolean | Не | Да ли су термини јавно доступни. Подразумевано `true` |
| `rewrite_slug` | string | Не | URL slug за таксономију. Подразумева се `slug` |

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

**Враћа** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Враћа све прилагођене таксономије које је регистровао агент.

**Параметри** — нема

**Враћа**

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

### `delete_taxonomy` {#deletetaxonomy}

Одјављује прилагођену таксономију коју је агент претходно регистровао.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Кључ таксономије који треба уклонити |

**Враћа** `{ "success": true, "slug": "project-category" }`

---

## Систем дизајна {#design-system}

Способности система дизајна мењају визуелну презентацију WordPress сајта — од прилагођеног CSS-а до блок шаблона и логотипа сајта.

### `inject_custom_css` {#injectcustomcss}

Додаје CSS у `<head>` сајта преко `wp_add_inline_style`. CSS се чува у опцији `gratis_ai_agent_custom_css` и чисто уклања из реда учитавања када се способност ресетује.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `css` | string | Да | Важећи CSS за убацивање |
| `label` | string | Не | Ознака читљива људима за овај CSS блок, користи се у дневницима за отклањање грешака. Подразумевано `"agent-injected"` |
| `replace` | boolean | Не | Ако је `true`, замењује сав претходно убачени CSS. Подразумевано `false` (додаје) |

**Пример**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Враћа** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Региструје поновно употребљив блок шаблон у WordPress библиотеци шаблона.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Идентификатор шаблона, нпр. `gratis/hero-dark` |
| `title` | string | Да | Назив шаблона читљив људима, приказан у уређивачу |
| `content` | string | Да | Серијализована ознака блокова (HTML) за шаблон |
| `categories` | array | Не | Slug-ови категорија шаблона, нпр. `["featured", "hero"]` |
| `description` | string | Не | Кратак опис приказан у бирачу шаблона |
| `keywords` | array | Не | Кључне речи за претрагу |

**Враћа** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Наводи све блок шаблоне које је регистровао агент.

**Параметри** — нема

**Враћа**

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

### `set_site_logo` {#setsitelogo}

Поставља лого WordPress сајта на дати ID прилога или URL удаљене слике. Када је наведен URL, слика се преузима и увози у библиотеку медија.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `attachment_id` | integer | Не | ID постојећег прилога у библиотеци медија |
| `url` | string | Не | URL удаљене слике за увоз и постављање као лого |

Мора бити наведен један од `attachment_id` или `url`.

**Враћа** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Примењује именовану предефинисану поставку боја/типографије на `theme.json` активне теме (или `global-styles`). Предефинисане поставке су курирани пакети које одржава тим Gratis AI Agent.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `preset` | string | Да | Назив предефинисане поставке, нпр. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Не | Ако је `true`, споји са постојећим вредностима уместо замене. Подразумевано је `false` |

**Доступне предефинисане поставке**

| Предефинисана поставка | Опис |
|---|---|
| `minimal-dark` | Готово црна позадина, бели текст, једна акцентна боја |
| `warm-editorial` | Топла прљавобела позадина, серифни наслови, земљане акцентне боје |
| `corporate-blue` | Морнарскоплава и бела палета са професионалном типографијом |
| `vibrant-startup` | Светли градијенти, заобљени углови, модерно безсерифно писмо |
| `classic-blog` | Неутралне сиве, удобна висина реда, традиционални размак распореда |

**Враћа** `{ "success": true, "preset": "minimal-dark" }`

---

## Глобални стилови {#global-styles}

Могућности глобалних стилова читају и уписују вредности theme.json кроз WordPress Global Styles API, утичући на све блокове и шаблоне на целом сајту.

### `get_global_styles` {#getglobalstyles}

Враћа тренутну конфигурацију глобалних стилова.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `path` | string | Не | JSON показивач на одређену вредност, нпр. `/color/palette` или `/typography/fontSizes`. Враћа цео објекат ако је изостављено. |

**Враћа** цео објекат глобалних стилова или вредност на `path`.

---

### `set_global_styles` {#setglobalstyles}

Ажурира једну или више вредности у конфигурацији глобалних стилова.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `path` | string | Да | JSON показивач на вредност за постављање, нпр. `/color/palette` |
| `value` | any | Да | Нова вредност |

**Пример** — додајте боју у палету

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Враћа** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Ресетује све промене глобалних стилова које је применио агент, враћајући подразумеване вредности теме.

**Параметри** — нема

**Враћа** `{ "success": true }`

---

## Навигациони менији {#navigation-menus}

Могућности навигационих менија креирају и управљају WordPress навигационим менијима и њиховим ставкама.

### `create_menu` {#createmenu}

Креира нови WordPress навигациони мени.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `name` | string | Да | Назив менија, нпр. `Primary Navigation` |
| `location` | string | Не | Локација теме којој треба доделити овај мени, нпр. `primary` |

**Враћа** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Преименује мени или га поново додељује локацији теме.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `menu_id` | integer | Да | ID менија за ажурирање |
| `name` | string | Не | Нови назив менија |
| `location` | string | Не | Локација теме за доделу или поновну доделу |

**Враћа** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Додаје ставку у постојећи навигациони мени.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `menu_id` | integer | Да | ID циљног менија |
| `type` | string | Да | Тип ставке: `custom`, `post_type` или `taxonomy` |
| `title` | string | Не | Ознака за ставку менија (обавезно за тип `custom`) |
| `url` | string | Не | URL за `custom` ставке |
| `object_id` | integer | Не | ID објаве или ID термина за `post_type`/`taxonomy` ставке |
| `parent_id` | integer | Не | ID ставке менија под којом треба угнездити ову ставку |
| `position` | integer | Не | Позиција у менију заснована на нули |

**Враћа** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Уклања ставку из навигационог менија.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `item_id` | integer | Да | ID ставке менија за уклањање |

**Враћа** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Наводи све WordPress навигационе меније, укључујући њихове додељене локације теме.

**Параметри** — нема

**Враћа**

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

## Управљање опцијама {#options-management}

Могућности опција читају и уписују WordPress опције преко `get_option` / `update_option`. Уграђена безбедносна листа блокирања спречава случајну измену критичних подешавања.

### `get_option` {#getoption}

Чита WordPress опцију.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `option_name` | string | Да | Кључ опције, нпр. `blogname` |

**Враћа** `{ "option_name": "blogname", "value": "My Site" }`

Враћа грешку ако је `option_name` на безбедносној листи блокирања.

---

### `set_option` {#setoption}

Уписује WordPress опцију.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `option_name` | string | Да | Кључ опције |
| `value` | any | Да | Нова вредност (аутоматски се серијализује за низове/објекте) |
| `autoload` | string | Не | `"yes"` или `"no"`. Подразумевано чува постојеће подешавање autoload |

Враћа грешку ако је `option_name` на безбедносној листи блокираних.

**Враћа** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Брише WordPress опцију.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `option_name` | string | Да | Кључ опције за брисање |

Враћа грешку ако је `option_name` на безбедносној листи блокираних.

**Враћа** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Наводи WordPress опције које одговарају обрасцу.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `pattern` | string | Не | SQL LIKE образац за филтрирање назива опција, нпр. `gratis_%`. Враћа све опције ако је изостављено (користите опрезно на великим базама података). |
| `limit` | integer | Не | Максималан број резултата. Подразумевано `50`, максимум `500` |

**Враћа**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Управљање садржајем {#content-management}

Могућности управљања садржајем креирају и уређују WordPress објаве и странице. ID-еви објава се враћају како би наредни кораци у плановима са више могућности могли да референцирају креирани садржај.

### `create_post` {#createpost}

Креира нову WordPress објаву, страницу или унос прилагођеног типа објаве.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `title` | string | Да | Наслов објаве |
| `content` | string | Не | Тело објаве — прихвата обичан текст, HTML или серијализовану ознаку блокова |
| `status` | string | Не | `draft`, `publish`, `pending`, `private`. Подразумевано `draft` |
| `post_type` | string | Не | Слаг типа објаве, нпр. `post`, `page` или било који регистровани CPT. Подразумевано `post` |
| `excerpt` | string | Не | Кратак сажетак приказан у архивама и резултатима претраге |
| `categories` | array | Не | Низ назива категорија или ID-ева за доделу |
| `tags` | array | Не | Низ назива ознака или ID-ева за доделу |
| `author` | integer | Не | WordPress ID корисника који се поставља као аутор објаве. Подразумевано је тренутни корисник |
| `date` | string | Не | Датум објављивања у ISO 8601 формату, нпр. `2026-05-01T09:00:00` |
| `page_template` | string | Не | Датотека шаблона која се додељује овој објави или страници, нпр. `page-full-width.php`. Има смисла само када је `post_type` `page` или CPT који подржава шаблоне страница. |

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

**Враћа** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Ажурира постојећу WordPress објаву или страницу.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `post_id` | integer | Да | ID објаве за ажурирање |
| `title` | string | Не | Нови наслов објаве |
| `content` | string | Не | Ново тело објаве |
| `status` | string | Не | Нови статус: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Не | Нови извод |
| `categories` | array | Не | Замените пуну листу категорија овим низом назива или ID-ева |
| `tags` | array | Не | Замените пуну листу ознака овим низом назива или ID-ева |
| `page_template` | string | Не | Нова датотека шаблона која се додељује овој објави или страници, нпр. `page-full-width.php`. Проследите празан стринг да уклоните доделу шаблона и вратите се на подразумевано из теме. |

**Пример** — промените шаблон након креирања

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Враћа** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Креира више објава у једном позиву могућности, смањујући број повратних захтева током израде сајта или масовног увоза садржаја. Објаве се креирају редом; ако једна не успе, остале се настављају, а неуспех се пријављује у низу резултата.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `posts` | array | Да | Низ објеката објава, од којих сваки прихвата исте параметре као `create_post` |
| `stop_on_error` | boolean | Не | Ако је `true`, заустави обраду након првог неуспеха. Подразумевано `false` |

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

**Враћа**

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

### `set_featured_image` {#setfeaturedimage}

Додељује истакнуту слику (сличицу објаве) постојећој објави или страници. Прихвата ID постојећег прилога из Media Library или URL удаљене слике; када је URL наведен, слика се аутоматски преузима и увози.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `post_id` | integer | Да | ID објаве или странице за ажурирање |
| `attachment_id` | integer | Не | ID постојећег прилога из Media Library |
| `url` | string | Не | URL удаљене слике за увоз и постављање као истакнуте слике |
| `alt_text` | string | Не | Алтернативни текст који се примењује на прилог ако је увезен са URL-а |

Мора бити наведен један од `attachment_id` или `url`.

**Враћа** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Креира контакт форму користећи активни plugin за форме (Contact Form 7, WPForms, Fluent Forms или Gravity Forms, у зависности од тога који је инсталиран). Враћа shortcode који се може уградити у било коју објаву или страницу.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `title` | string | Да | Назив обрасца приказан у администрацији plugin-а за обрасце |
| `fields` | array | Да | Уређена листа поља обрасца (погледајте објекат поља испод) |
| `recipient` | string | Не | Email адреса за пријем слања. Подразумевано је WordPress администраторски email |
| `subject` | string | Не | Наслов email поруке. Подржава чуваре места `[your-name]` и `[your-subject]` када се користи Contact Form 7 |
| `confirmation_message` | string | Не | Порука приказана после успешног слања. Подразумевано: `"Thank you for your message. We'll be in touch soon."` |

**Објекат поља**

| Кључ | Тип | Обавезно | Опис |
|---|---|---|---|
| `name` | string | Да | Интерни назив поља / машински кључ |
| `label` | string | Да | Читљива ознака приказана на обрасцу |
| `type` | string | Да | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Не | Да ли поље мора бити попуњено пре слања. Подразумевано `false` |
| `options` | array | Не | Опције за поља `select`, `checkbox` и `radio` |
| `placeholder` | string | Не | Текст чувара места за уносе текстуалног типа |

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

**Враћа**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуелни преглед {#visual-review}

Могућности визуелног прегледа омогућавају агенту да сними снимке екрана живих страница и анализира их, омогућавајући аутономни преглед дизајна, поређења пре/после и провере визуелних регресија без потребе за било којим проширењем прегледача.

### `capture_screenshot` {#capturescreenshot}

Снима снимак екрана WordPress странице на датој URL адреси користећи серверски headless прегледач. Слика се чува у Media Library и враћа се CDN URL.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `url` | string | Да | Пуна URL адреса странице за снимак екрана, нпр. `https://example.com/about/` |
| `width` | integer | Не | Ширина viewport-а у пикселима. Подразумевано `1280` |
| `height` | integer | Не | Висина viewport-а у пикселима. Подразумевано `800` |
| `full_page` | boolean | Не | Сними целу страницу која се може скроловати уместо само viewport-а. Подразумевано `false` |
| `delay_ms` | integer | Не | Милисекунде чекања после учитавања странице пре снимања, корисно за анимирани садржај. Подразумевано `500` |
| `label` | string | Не | Читљива ознака сачувана са прилогом у Media Library |

**Враћа**

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

### `compare_screenshots` {#comparescreenshots}

Узима два снимка екрана и враћа резултат визуелне разлике, као и слику разлике која истиче измењене области. Корисно за потврду да је промена дизајна дала очекивани резултат или за откривање нежељених регресија.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `before_url` | string | Да | URL странице за снимање као стања „пре” |
| `after_url` | string | Да | URL странице за снимање као стања „после”. Може бити исти URL ако се пореди кроз време |
| `width` | integer | Не | Ширина viewport-а за оба снимања. Подразумевано `1280` |
| `threshold` | float | Не | Праг разлике пиксела (0.0–1.0). Пиксели у оквиру ове толеранције сматрају се непромењеним. Подразумевано `0.1` |

**Враћа**

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

`diff_score` од `0.0` значи да нема видљиве промене; `1.0` значи да је сваки пиксел промењен.

---

### `review_page_design` {#reviewpagedesign}

Снима снимак екрана странице и шаље га језичком моделу на визуелну анализу. Враћа структурисану процену која обухвата распоред, типографију, употребу боја и питања приступачности.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `url` | string | Да | Пуна URL адреса странице за преглед |
| `focus` | string | Не | Листа области прегледа раздвојена зарезима које треба нагласити: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Подразумевано: све области |
| `width` | integer | Не | Ширина viewport-а. Подразумевано `1280` |

**Враћа**

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

## Инсталибилне могућности {#installable-abilities}

Регистар инсталибилних могућности омогућава вам да проширите агента додатним пакетима могућности који се дистрибуирају као WordPress plugin-и. Сваки пакет региструје једну или више могућности користећи стандардни API за могућности.

### `list_available_abilities` {#listavailableabilities}

Враћа каталог пакета могућности доступних за инсталацију из регистра.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `category` | string | Не | Филтрирај по категорији: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Враћа**

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

### `install_ability` {#installability}

Преузима и активира пакет способности из регистра.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `slug` | string | Да | Slug плагина пакета способности |

**Враћа** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Упитује регистар способности да пронађе најбољи плагин за описани случај употребе и, опционо, инсталира га.

**Параметри**

| Параметар | Тип | Обавезно | Опис |
|---|---|---|---|
| `description` | string | Да | Опис жељене функционалности природним језиком |
| `install` | boolean | Не | Ако је `true`, одмах инсталира препоручени плагин. Подразумевано је `false` |

**Пример**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Враћа**

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
