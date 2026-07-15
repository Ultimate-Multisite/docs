---
title: Հնարավորությունների տեղեկատու
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Հնարավորությունների տեղեկագիր

Հնարավորությունները ատոմար գործողություններ են, որոնք Gratis AI Agent-ը կարող է կանչել ձեր WordPress տեղադրման վրա։ Յուրաքանչյուր հնարավորություն գրանցված PHP class է, որը տրամադրում է JSON schema — գործակալը runtime-ում կարդում է այս schema-ն՝ հասկանալու համար, թե ինչ պարամետրեր են պահանջվում և ինչ է վերադարձնում հնարավորությունը։

Այս էջը փաստաթղթավորում է Gratis AI Agent v1.9.0-ի հետ տրամադրվող բոլոր հնարավորությունները։

---

## Անհատական գրառման տեսակներ {#custom-post-types}

Այս հնարավորությունները կառավարում են գործակալի միջոցով գրանցված անհատական գրառման տեսակները (CPT-ներ)։ Գրանցումները պահպանվում են WordPress options աղյուսակում, որպեսզի պահպանվեն plugin-ի ապաակտիվացումից և կրկին ակտիվացումից հետո։

### `register_post_type` {#registerposttype}

Գրանցում է նոր անհատական գրառման տեսակ։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Գրառման տեսակի բանալին (առավելագույնը 20 նիշ, առանց մեծատառերի, առանց բացատների) |
| `singular_label` | string | Այո | Մարդու համար ընթեռնելի եզակի անուն, օրինակ՝ `Portfolio Item` |
| `plural_label` | string | Այո | Մարդու համար ընթեռնելի հոգնակի անուն, օրինակ՝ `Portfolio Items` |
| `public` | boolean | Ոչ | Արդյոք գրառման տեսակը հանրային հասանելի է։ Լռելյայն՝ `true` |
| `supports` | array | Ոչ | Աջակցվող գործառույթներ՝ `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`։ Լռելյայն՝ `["title","editor"]` |
| `has_archive` | boolean | Ոչ | Արդյոք գրառման տեսակի արխիվային էջը միացված է։ Լռելյայն՝ `false` |
| `menu_icon` | string | Ոչ | Dashicons class կամ URL՝ admin մենյուի պատկերակի համար։ Լռելյայն՝ `"dashicons-admin-post"` |
| `rewrite_slug` | string | Ոչ | URL slug գրառման տեսակի համար։ Լռելյայն՝ `slug` |

**Օրինակ**

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

**Վերադարձնում է** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Վերադարձնում է գործակալի կողմից գրանցված բոլոր անհատական գրառման տեսակները։

**Պարամետրեր** — չկան

**Վերադարձնում է**

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

Հանում է գործակալի կողմից նախկինում գրանցված անհատական գրառման տեսակի գրանցումը։ Այդ տեսակի գոյություն ունեցող գրառումները մնում են տվյալների բազայում, բայց այլևս հասանելի չեն գրառման տեսակի միջոցով։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Հեռացվող գրառման տեսակի բանալին |

**Վերադարձնում է** `{ "success": true, "slug": "portfolio" }`

---

## Անհատական դասակարգումներ {#custom-taxonomies}

Այս հնարավորությունները կառավարում են անհատական դասակարգումները։ CPT-ների նման, դասակարգումների գրանցումները պահպանվում են։

### `register_taxonomy` {#registertaxonomy}

Գրանցում է նոր անհատական դասակարգում։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Դասակարգման բանալին (առավելագույնը 32 նիշ) |
| `singular_label` | string | Այո | Մարդու համար ընթեռնելի եզակի անուն, օրինակ՝ `Project Category` |
| `plural_label` | string | Այո | Մարդու համար ընթեռնելի հոգնակի անուն, օրինակ՝ `Project Categories` |
| `post_types` | array | Այո | Գրառման տեսակների slug-ները, որոնց պետք է կցվի այս դասակարգումը |
| `hierarchical` | boolean | Ոչ | `true`՝ category ոճի համար, `false`՝ tag ոճի համար։ Լռելյայն՝ `true` |
| `public` | boolean | Ոչ | Արդյոք տերմինները հանրային հասանելի են։ Լռելյայն՝ `true` |
| `rewrite_slug` | string | Ոչ | URL slug դասակարգման համար։ Լռելյայն՝ `slug` |

**Օրինակ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Վերադարձնում է** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Վերադարձնում է գործակալի կողմից գրանցված բոլոր անհատական դասակարգումները։

**Պարամետրեր** — չկան

**Վերադարձնում է**

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

Հանում է գործակալի կողմից նախկինում գրանցված անհատական դասակարգման գրանցումը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Հեռացվող դասակարգման բանալին |

**Վերադարձնում է** `{ "success": true, "slug": "project-category" }`

---

## Դիզայն համակարգ {#design-system}

Դիզայն համակարգի հնարավորությունները փոփոխում են WordPress կայքի տեսողական ներկայացումը՝ անհատական CSS-ից մինչև block pattern-ներ և կայքի լոգո։

### `inject_custom_css` {#injectcustomcss}

Ավելացնում է CSS կայքի `<head>`-ին `wp_add_inline_style`-ի միջոցով։ CSS-ը պահվում է `gratis_ai_agent_custom_css` option-ում և մաքուր ձևով dequeued է արվում, երբ հնարավորությունը վերակայվում է։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `css` | string | Այո | Ներդրման համար վավեր CSS |
| `label` | string | Ոչ | Մարդու համար ընթեռնելի պիտակ այս CSS բլոկի համար, օգտագործվում է debug logs-ում։ Լռելյայն՝ `"agent-injected"` |
| `replace` | boolean | Ոչ | Եթե `true` է, փոխարինում է նախկինում ներդրված ամբողջ CSS-ը։ Լռելյայն՝ `false` (ավելացնում է) |

**Օրինակ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Վերադարձնում է** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Գրանցում է կրկնօգտագործելի block pattern WordPress pattern գրադարանում։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Pattern նույնացուցիչ, օրինակ՝ `gratis/hero-dark` |
| `title` | string | Այո | Մարդու համար ընթեռնելի pattern-ի անուն, որը ցուցադրվում է editor-ում |
| `content` | string | Այո | Serialised block markup (HTML) pattern-ի համար |
| `categories` | array | Ոչ | Pattern կատեգորիաների slug-ներ, օրինակ՝ `["featured", "hero"]` |
| `description` | string | Ոչ | Կարճ նկարագրություն, որը ցուցադրվում է pattern picker-ում |
| `keywords` | array | Ոչ | Որոնման բանալի բառեր |

**Վերադարձնում է** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Թվարկում է գործակալի կողմից գրանցված բոլոր block pattern-ները։

**Պարամետրեր** — չկան

**Վերադարձնում է**

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

Սահմանում է WordPress կայքի լոգոն՝ տվյալ կցորդի ID-ով կամ հեռակա պատկերի URL-ով։ Երբ տրամադրվում է URL, պատկերը ներբեռնվում և ներմուծվում է Media Library։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `attachment_id` | integer | Ոչ | Գոյություն ունեցող Media Library կցորդի ID |
| `url` | string | Ոչ | Հեռակա պատկերի URL՝ ներմուծելու և որպես լոգո սահմանելու համար |

Պետք է տրամադրվի `attachment_id` կամ `url`-ից մեկը։

**Վերադարձնում է** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Կիրառում է անվանված գույնի/տպագրության նախակարգավորում ակտիվ թեմայի `theme.json`-ին (կամ `global-styles`-ին)։ Նախակարգավորումները ընտրված փաթեթներ են, որոնք սպասարկվում են Gratis AI Agent թիմի կողմից։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `preset` | string | Այո | Նախակարգավորման անուն, օրինակ՝ `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ոչ | Եթե `true` է, միավորում է գոյություն ունեցող արժեքների հետ՝ փոխարինելու փոխարեն։ Լռելյայն՝ `false` |

**Հասանելի նախակարգավորումներ**

| Նախակարգավորում | Նկարագրություն |
|---|---|
| `minimal-dark` | Գրեթե սև հետնապատկեր, սպիտակ տեքստ, մեկ շեշտադրման գույն |
| `warm-editorial` | Տաք կոտրված սպիտակ հետնապատկեր, սերիֆ վերնագրեր, հողեղեն շեշտադրման գույներ |
| `corporate-blue` | Մուգ կապույտ և սպիտակ ներկապնակ՝ մասնագիտական տպագրությամբ |
| `vibrant-startup` | Վառ գրադիենտներ, կլորացված անկյուններ, ժամանակակից սանս-սերիֆ տառատեսակ |
| `classic-blog` | Չեզոք մոխրագույններ, հարմարավետ տողի բարձրություն, ավանդական դասավորության տարածություններ |

**Վերադարձնում է** `{ "success": true, "preset": "minimal-dark" }`

---

## Համընդհանուր ոճեր {#global-styles}

Համընդհանուր ոճերի հնարավորությունները կարդում և գրում են theme.json արժեքները WordPress Global Styles API-ի միջոցով՝ ազդելով կայքի ամբողջ տարածքում բոլոր բլոկների և ձևանմուշների վրա։

### `get_global_styles` {#getglobalstyles}

Վերադարձնում է ընթացիկ համընդհանուր ոճերի կազմաձևումը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `path` | string | Ոչ | JSON ցուցիչ դեպի կոնկրետ արժեք, օրինակ՝ `/color/palette` կամ `/typography/fontSizes`։ Եթե բաց է թողնված, վերադարձնում է ամբողջ օբյեկտը։ |

**Վերադարձնում է** ամբողջական համընդհանուր ոճերի օբյեկտը կամ `path`-ում գտնվող արժեքը։

---

### `set_global_styles` {#setglobalstyles}

Թարմացնում է մեկ կամ մի քանի արժեք համընդհանուր ոճերի կազմաձևման մեջ։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `path` | string | Այո | JSON ցուցիչ դեպի սահմանվող արժեքը, օրինակ՝ `/color/palette` |
| `value` | any | Այո | Նոր արժեքը |

**Օրինակ** — ներկապնակին գույն ավելացնել

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Վերադարձնում է** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Վերակայում է գործակալի կողմից կիրառված համընդհանուր ոճերի բոլոր փոփոխությունները՝ վերականգնելով թեմայի լռելյայն կարգավորումները։

**Պարամետրեր** — չկան

**Վերադարձնում է** `{ "success": true }`

---

## Նավիգացիոն ընտրացանկեր {#navigation-menus}

Նավիգացիոն ընտրացանկերի հնարավորությունները ստեղծում և կառավարում են WordPress նավիգացիոն ընտրացանկերը և դրանց տարրերը։

### `create_menu` {#createmenu}

Ստեղծում է նոր WordPress նավիգացիոն ընտրացանկ։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `name` | string | Այո | Ընտրացանկի անուն, օրինակ՝ `Primary Navigation` |
| `location` | string | Ոչ | Թեմայի տեղադիրք, որին պետք է կցել այս ընտրացանկը, օրինակ՝ `primary` |

**Վերադարձնում է** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Վերանվանում է ընտրացանկը կամ վերակցում այն թեմայի տեղադիրքին։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `menu_id` | integer | Այո | Թարմացվող ընտրացանկի ID |
| `name` | string | Ոչ | Ընտրացանկի նոր անուն |
| `location` | string | Ոչ | Թեմայի տեղադիրք՝ կցելու կամ վերակցելու համար |

**Վերադարձնում է** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Ավելացնում է տարր գոյություն ունեցող նավիգացիոն ընտրացանկում։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `menu_id` | integer | Այո | Նպատակային ընտրացանկի ID |
| `type` | string | Այո | Տարրի տեսակ՝ `custom`, `post_type` կամ `taxonomy` |
| `title` | string | Ոչ | Ընտրացանկի տարրի պիտակ (`custom` տեսակի համար պարտադիր) |
| `url` | string | Ոչ | URL՝ `custom` տարրերի համար |
| `object_id` | integer | Ոչ | Գրառման ID կամ տերմինի ID՝ `post_type`/`taxonomy` տարրերի համար |
| `parent_id` | integer | Ոչ | Ընտրացանկի տարրի ID, որի տակ պետք է ներդնել այս տարրը |
| `position` | integer | Ոչ | Զրոյից սկսվող դիրքը ընտրացանկում |

**Վերադարձնում է** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Հեռացնում է տարրը նավիգացիոն ընտրացանկից։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `item_id` | integer | Այո | Հեռացվող ընտրացանկի տարրի ID |

**Վերադարձնում է** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Ցուցակում է բոլոր WordPress նավիգացիոն ընտրացանկերը՝ ներառյալ դրանց կցված թեմայի տեղադիրքերը։

**Պարամետրեր** — չկան

**Վերադարձնում է**

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

## Ընտրանքների կառավարում {#options-management}

Ընտրանքների հնարավորությունները կարդում և գրում են WordPress ընտրանքները `get_option` / `update_option`-ի միջոցով։ Ներկառուցված անվտանգության արգելացուցակը կանխում է կարևոր կարգավորումների պատահական փոփոխումը։

### `get_option` {#getoption}

Կարդում է WordPress ընտրանք։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `option_name` | string | Այո | Ընտրանքի բանալին, օրինակ՝ `blogname` |

**Վերադարձնում է** `{ "option_name": "blogname", "value": "My Site" }`

Վերադարձնում է սխալ, եթե `option_name`-ը անվտանգության արգելացուցակում է։

---

### `set_option` {#setoption}

Գրում է WordPress ընտրանք։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `option_name` | string | Այո | Ընտրանքի բանալին |
| `value` | any | Այո | Նոր արժեքը (զանգվածների/օբյեկտների համար ինքնաբերաբար սերիալիզացվում է) |
| `autoload` | string | Ոչ | `"yes"` կամ `"no"`։ Լռելյայն պահպանում է գոյություն ունեցող autoload կարգավորումը |

Սխալ է վերադարձնում, եթե `option_name`-ը անվտանգության արգելափակման ցանկում է։

**Վերադարձնում է** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Ջնջում է WordPress option։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `option_name` | string | Այո | Ջնջման ենթակա option բանալին |

Սխալ է վերադարձնում, եթե `option_name`-ը անվտանգության արգելափակման ցանկում է։

**Վերադարձնում է** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Ցուցադրում է WordPress options, որոնք համապատասխանում են օրինաչափությանը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `pattern` | string | Ոչ | SQL LIKE օրինաչափություն՝ option անունները զտելու համար, օրինակ՝ `gratis_%`։ Բաց թողնելու դեպքում վերադարձնում է բոլոր options-ը (մեծ տվյալների բազաներում օգտագործեք զգուշությամբ)։ |
| `limit` | integer | Ոչ | Արդյունքների առավելագույն քանակը։ Լռելյայն՝ `50`, առավելագույնը՝ `500` |

**Վերադարձնում է**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Բովանդակության կառավարում {#content-management}

Բովանդակության կառավարման հնարավորությունները ստեղծում և խմբագրում են WordPress գրառումներ ու էջեր։ Գրառման ID-ները վերադարձվում են, որպեսզի բազմահնարավորությամբ պլանների հաջորդ քայլերը կարողանան հղում անել ստեղծված բովանդակությանը։

### `create_post` {#createpost}

Ստեղծում է նոր WordPress գրառում, էջ կամ custom post type գրառում։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `title` | string | Այո | Գրառման վերնագիր |
| `content` | string | Ոչ | Գրառման մարմին — ընդունում է պարզ տեքստ, HTML կամ սերիալիզացված block markup |
| `status` | string | Ոչ | `draft`, `publish`, `pending`, `private`։ Լռելյայն՝ `draft` |
| `post_type` | string | Ոչ | Գրառման տեսակի slug, օրինակ՝ `post`, `page` կամ ցանկացած գրանցված CPT։ Լռելյայն՝ `post` |
| `excerpt` | string | Ոչ | Կարճ ամփոփում, որը ցուցադրվում է արխիվներում և որոնման արդյունքներում |
| `categories` | array | Ոչ | Վերագրման ենթակա կատեգորիաների անունների կամ ID-ների զանգված |
| `tags` | array | Ոչ | Վերագրման ենթակա պիտակների անունների կամ ID-ների զանգված |
| `author` | integer | Ոչ | WordPress օգտատիրոջ ID՝ որպես գրառման հեղինակ սահմանելու համար։ Լռելյայն՝ ընթացիկ օգտատերը |
| `date` | string | Ոչ | Հրապարակման ամսաթիվ ISO 8601 ձևաչափով, օրինակ՝ `2026-05-01T09:00:00` |
| `page_template` | string | Ոչ | Template ֆայլ՝ այս գրառմանը կամ էջին վերագրելու համար, օրինակ՝ `page-full-width.php`։ Իմաստ ունի միայն այն դեպքում, երբ `post_type`-ը `page` է կամ էջերի templates աջակցող CPT։ |

**Օրինակ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Վերադարձնում է** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Թարմացնում է գոյություն ունեցող WordPress գրառում կամ էջ։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `post_id` | integer | Այո | Թարմացման ենթակա գրառման ID |
| `title` | string | Ոչ | Նոր գրառման վերնագիր |
| `content` | string | Ոչ | Նոր գրառման մարմին |
| `status` | string | Ոչ | Նոր կարգավիճակ՝ `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ոչ | Նոր excerpt |
| `categories` | array | Ոչ | Փոխարինել կատեգորիաների ամբողջական ցանկը անունների կամ ID-ների այս զանգվածով |
| `tags` | array | Ոչ | Փոխարինել պիտակների ամբողջական ցանկը անունների կամ ID-ների այս զանգվածով |
| `page_template` | string | Ոչ | Նոր template ֆայլ՝ այս գրառմանը կամ էջին վերագրելու համար, օրինակ՝ `page-full-width.php`։ Փոխանցեք դատարկ տող՝ template-ի վերագրումը հեռացնելու և theme-ի լռելյայնին վերադառնալու համար։ |

**Օրինակ** — փոխել template-ը ստեղծումից հետո

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Վերադարձնում է** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Ստեղծում է մի քանի գրառում մեկ հնարավորության կանչով՝ նվազեցնելով հետադարձ հարցումները site կառուցումների կամ բովանդակության զանգվածային ներմուծման ժամանակ։ Գրառումները ստեղծվում են հերթականությամբ․ եթե մեկը ձախողվում է, մյուսները շարունակվում են, իսկ ձախողումը հաղորդվում է արդյունքների զանգվածում։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `posts` | array | Այո | Գրառման օբյեկտների զանգված, որոնցից յուրաքանչյուրը ընդունում է նույն պարամետրերը, ինչ `create_post`-ը |
| `stop_on_error` | boolean | Ոչ | Եթե `true` է, դադարեցնել մշակումը առաջին ձախողումից հետո։ Լռելյայն՝ `false` |

**Օրինակ**

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

**Վերադարձնում է**

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

Վերագրում է գլխավոր պատկեր (գրառման մանրապատկեր) գոյություն ունեցող գրառմանը կամ էջին։ Ընդունում է գոյություն ունեցող Media Library կցորդի ID կամ հեռավար պատկերի URL․ երբ URL է տրամադրվում, պատկերը ներբեռնվում և ներմուծվում է ավտոմատ։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `post_id` | integer | Այո | Թարմացման ենթակա գրառման կամ էջի ID |
| `attachment_id` | integer | Ոչ | Գոյություն ունեցող Media Library կցորդի ID |
| `url` | string | Ոչ | Հեռավար պատկերի URL՝ ներմուծելու և որպես գլխավոր պատկեր սահմանելու համար |
| `alt_text` | string | Ոչ | Alt տեքստ, որը պետք է կիրառվի կցորդի վրա, եթե այն ներմուծվում է URL-ից |

Պետք է տրամադրվի `attachment_id` կամ `url`-ից մեկը։

**Վերադարձնում է** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Ստեղծում է կոնտակտային ձև՝ օգտագործելով ակտիվ ձևերի plugin-ը (Contact Form 7, WPForms, Fluent Forms կամ Gravity Forms՝ կախված տեղադրված լինելուց)։ Վերադարձնում է shortcode, որը կարող է ներդրվել ցանկացած գրառման կամ էջի մեջ։

**Պարամետրեր**

| Պարամետր | Տիպ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `title` | string | Այո | Ձևի անունը, որը ցուցադրվում է ձևի plugin-ի ադմինում |
| `fields` | array | Այո | Ձևի դաշտերի դասավորված ցանկ (տե՛ս Field օբյեկտը ստորև) |
| `recipient` | string | Ոչ | Ներկայացումները ստանալու էլ․ փոստի հասցե։ Լռելյայն՝ WordPress ադմինի էլ․ փոստը |
| `subject` | string | Ոչ | Էլ․ փոստի թեմայի տող։ Աջակցում է `[your-name]` և `[your-subject]` տեղապահներին Contact Form 7 օգտագործելիս |
| `confirmation_message` | string | Ոչ | Հաղորդագրություն, որը ցուցադրվում է հաջող ներկայացումից հետո։ Լռելյայն՝ `"Thank you for your message. We'll be in touch soon."` |

**Դաշտի օբյեկտ**

| Բանալի | Տիպ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `name` | string | Այո | Ներքին դաշտի անուն / մեքենայական բանալի |
| `label` | string | Այո | Մարդու համար ընթեռնելի պիտակ, որը ցուցադրվում է ձևում |
| `type` | string | Այո | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Ոչ | Արդյոք դաշտը պետք է լրացվի նախքան ներկայացումը։ Լռելյայն՝ `false` |
| `options` | array | Ոչ | Ընտրանքներ `select`, `checkbox` և `radio` դաշտերի համար |
| `placeholder` | string | Ոչ | Տեղապահ տեքստ տեքստային տիպի մուտքագրման դաշտերի համար |

**Օրինակ**

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

**Վերադարձնում է**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Տեսողական դիտարկում {#visual-review}

Տեսողական դիտարկման հնարավորությունները թույլ են տալիս agent-ին նկարահանել կենդանի էջերի սքրինշոթներ և վերլուծել դրանք՝ հնարավորություն տալով ինքնավար դիզայնի դիտարկում, նախքան/հետո համեմատություններ և տեսողական ռեգրեսիայի ստուգումներ՝ առանց որևէ զննարկչի ընդլայնում պահանջելու։

### `capture_screenshot` {#capturescreenshot}

Նկարահանում է WordPress էջի սքրինշոթը տրված URL-ում՝ օգտագործելով սերվերային կողմի headless զննարկիչ։ Պատկերը պահվում է Media Library-ում, և վերադարձվում է CDN URL։

**Պարամետրեր**

| Պարամետր | Տիպ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `url` | string | Այո | Էջի ամբողջական URL-ը սքրինշոթ անելու համար, օրինակ՝ `https://example.com/about/` |
| `width` | integer | Ոչ | Viewport-ի լայնությունը պիքսելներով։ Լռելյայն՝ `1280` |
| `height` | integer | Ոչ | Viewport-ի բարձրությունը պիքսելներով։ Լռելյայն՝ `800` |
| `full_page` | boolean | Ոչ | Նկարահանել ամբողջ ոլորվող էջը՝ միայն viewport-ի փոխարեն։ Լռելյայն՝ `false` |
| `delay_ms` | integer | Ոչ | Էջի բեռնումից հետո սպասելու միլիվայրկյանները նախքան նկարահանումը, օգտակար է անիմացված բովանդակության համար։ Լռելյայն՝ `500` |
| `label` | string | Ոչ | Մարդու համար ընթեռնելի պիտակ, որը պահվում է Media Library-ի կցորդի հետ |

**Վերադարձնում է**

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

Վերցնում է երկու սքրինշոթ և վերադարձնում տեսողական տարբերության միավոր՝ գումարած տարբերության պատկեր, որը ընդգծում է փոփոխված հատվածները։ Օգտակար է հաստատելու համար, որ դիզայնի փոփոխությունը տվել է սպասվող արդյունքը, կամ չնախատեսված ռեգրեսիաներ հայտնաբերելու համար։

**Պարամետրեր**

| Պարամետր | Տիպ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `before_url` | string | Այո | Էջի URL-ը՝ որպես «նախքան» վիճակ նկարահանելու համար |
| `after_url` | string | Այո | Էջի URL-ը՝ որպես «հետո» վիճակ նկարահանելու համար։ Կարող է լինել նույն URL-ը, եթե համեմատվում է ժամանակի ընթացքում |
| `width` | integer | Ոչ | Viewport-ի լայնությունը երկու նկարահանումների համար։ Լռելյայն՝ `1280` |
| `threshold` | float | Ոչ | Պիքսելային տարբերության շեմ (0.0–1.0)։ Այս հանդուրժողականության սահմաններում գտնվող պիքսելները համարվում են անփոփոխ։ Լռելյայն՝ `0.1` |

**Վերադարձնում է**

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

`diff_score` արժեքը `0.0` նշանակում է՝ տեսանելի փոփոխություն չկա, իսկ `1.0` նշանակում է՝ յուրաքանչյուր պիքսել փոխվել է։

---

### `review_page_design` {#reviewpagedesign}

Նկարահանում է էջի սքրինշոթը և ուղարկում այն լեզվական մոդելին տեսողական վերլուծության համար։ Վերադարձնում է կառուցվածքային գնահատում, որը ներառում է դասավորությունը, տառատեսակագրությունը, գույնի օգտագործումը և հասանելիության հետ կապված մտահոգությունները։

**Պարամետրեր**

| Պարամետր | Տիպ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `url` | string | Այո | Վերանայման ենթակա էջի ամբողջական URL-ը |
| `focus` | string | Ոչ | Ստուգման ոլորտների ստորակետերով բաժանված ցանկ, որոնք պետք է շեշտադրվեն՝ `layout`, `typography`, `colour`, `accessibility`, `mobile`։ Լռելյայն՝ բոլոր ոլորտները |
| `width` | integer | Ոչ | Viewport-ի լայնությունը։ Լռելյայն՝ `1280` |

**Վերադարձնում է**

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

## Տեղադրվող հնարավորություններ {#installable-abilities}

Տեղադրվող հնարավորությունների ռեեստրը թույլ է տալիս ընդլայնել agent-ը լրացուցիչ հնարավորությունների փաթեթներով, որոնք տարածվում են որպես WordPress plugins։ Յուրաքանչյուր փաթեթ գրանցում է մեկ կամ մի քանի հնարավորություն՝ օգտագործելով ստանդարտ հնարավորության API-ն։

### `list_available_abilities` {#listavailableabilities}

Վերադարձնում է ռեեստրից տեղադրման համար հասանելի հնարավորությունների փաթեթների կատալոգը։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `category` | string | Ոչ | Զտել ըստ կատեգորիայի՝ `ecommerce`, `seo`, `media`, `social`, `developer` |

**Վերադարձնում է**

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

Ներբեռնում և ակտիվացնում է կարողությունների փաթեթը ռեգիստրից։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `slug` | string | Այո | Կարողությունների փաթեթի փլագինի slug |

**Վերադարձնում է** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Հարցում է կարողությունների ռեգիստրին՝ նկարագրված կիրառման դեպքի համար լավագույն փլագինը գտնելու և, ըստ ցանկության, այն տեղադրելու համար։

**Պարամետրեր**

| Պարամետր | Տեսակ | Պարտադիր | Նկարագրություն |
|---|---|---|---|
| `description` | string | Այո | Ցանկալի ֆունկցիոնալության բնական լեզվով նկարագրություն |
| `install` | boolean | Ոչ | Եթե `true` է, անմիջապես տեղադրում է առաջարկվող փլագինը։ Լռելյայն՝ `false` |

**Օրինակ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Վերադարձնում է**

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
