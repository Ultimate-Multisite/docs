---
title: Сәләтләр белешмәсе
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Мөмкинлекләр белешмәсе {#abilities-reference}

Мөмкинлекләр — Gratis AI Agent сезнең WordPress урнаштыруыгызда чакыра алган атомар гамәлләр. Һәр мөмкинлек — JSON схемасын ачучы теркәлгән PHP классы; агент эш вакытында бу схеманы укып, нинди параметрлар кирәклеген һәм мөмкинлекнең нәрсә кайтаруын аңлый.

Бу бит Gratis AI Agent v1.9.0 белән җибәрелә торган барлык мөмкинлекләрне документлаштыра.

---

## Махсус язма төрләре {#custom-post-types}

Бу мөмкинлекләр агент аша теркәлгән махсус язма төрләрен (CPT) идарә итә. Теркәлүләр WordPress options таблицасында саклана, шуңа күрә алар plugin сүндерелеп яңадан кабызылганнан соң да сакланып кала.

### `register_post_type` {#registerposttype}

Яңа махсус язма төрен терки.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Язма төре ачкычы (иң күбе 20 билге, зур хәрефләр юк, бушлыклар юк) |
| `singular_label` | string | Әйе | Кеше укый алырлык берлек исеме, мәс. `Portfolio Item` |
| `plural_label` | string | Әйе | Кеше укый алырлык күплек исеме, мәс. `Portfolio Items` |
| `public` | boolean | Юк | Язма төре җәмәгать өчен кереп буламы. Килешенгән `true` |
| `supports` | array | Юк | Якланасы мөмкинлекләр: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Килешенгән `["title","editor"]` |
| `has_archive` | boolean | Юк | Язма төре архив бите кабызылганмы. Килешенгән `false` |
| `menu_icon` | string | Юк | admin меню иконкасы өчен Dashicons классы яки URL. Килешенгән `"dashicons-admin-post"` |
| `rewrite_slug` | string | Юк | Язма төре өчен URL slug. Килешенгәндә `slug` кулланыла |

**Мисал**

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

**Кайтара** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Агент тарафыннан теркәлгән барлык махсус язма төрләрен кайтара.

**Параметрлар** — юк

**Кайтара**

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

Агент тарафыннан элек теркәлгән махсус язма төрен теркәүдән төшерә. Бу төрдәге булган язмалар мәгълүмат базасында кала, әмма язма төре аша инде кереп булмый.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Бетереләсе язма төре ачкычы |

**Кайтара** `{ "success": true, "slug": "portfolio" }`

---

## Махсус таксономияләр {#custom-taxonomies}

Бу мөмкинлекләр махсус таксономияләрне идарә итә. CPTлар кебек, таксономия теркәлүләре дә сакланып кала.

### `register_taxonomy` {#registertaxonomy}

Яңа махсус таксономия терки.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Таксономия ачкычы (иң күбе 32 билге) |
| `singular_label` | string | Әйе | Кеше укый алырлык берлек исеме, мәс. `Project Category` |
| `plural_label` | string | Әйе | Кеше укый алырлык күплек исеме, мәс. `Project Categories` |
| `post_types` | array | Әйе | Бу таксономия беркетелергә тиешле язма төрләре slugлары |
| `hierarchical` | boolean | Юк | Категория стилендә булса `true`, тег стилендә булса `false`. Килешенгән `true` |
| `public` | boolean | Юк | Терминнар җәмәгать өчен кереп буламы. Килешенгән `true` |
| `rewrite_slug` | string | Юк | Таксономия өчен URL slug. Килешенгәндә `slug` кулланыла |

**Мисал**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Кайтара** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Агент тарафыннан теркәлгән барлык махсус таксономияләрне кайтара.

**Параметрлар** — юк

**Кайтара**

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

Агент тарафыннан элек теркәлгән махсус таксономияне теркәүдән төшерә.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Бетереләсе таксономия ачкычы |

**Кайтара** `{ "success": true, "slug": "project-category" }`

---

## Дизайн системасы {#design-system}

Дизайн системасы мөмкинлекләре WordPress siteның визуаль күренешен үзгәртә — махсус CSSтан алып блок үрнәкләренә һәм site логотибына кадәр.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` аша siteның `<head>` өлешенә CSS өсти. CSS `gratis_ai_agent_custom_css` optionында саклана һәм мөмкинлек яңадан көйләнгәндә чиста итеп чираттан алына.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `css` | string | Әйе | Кертү өчен дөрес CSS |
| `label` | string | Юк | Бу CSS блогы өчен кеше укый алырлык тамга, төзәтү журналларында кулланыла. Килешенгән `"agent-injected"` |
| `replace` | boolean | Юк | Әгәр `true` булса, элек кертелгән бөтен CSSны алыштыра. Килешенгән `false` (өсти) |

**Мисал**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Кайтара** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress үрнәкләр китапханәсендә кабат кулланыла торган блок үрнәген терки.

**Параметрлар**

| Параметр | Төр | Кирәк | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Үрнәк идентификаторы, мәс. `gratis/hero-dark` |
| `title` | string | Әйе | Мөхәррирдә күрсәтелә торган кеше укый алырлык үрнәк исеме |
| `content` | string | Әйе | Үрнәк өчен сериаллаштырылган блок тамгаламасы (HTML) |
| `categories` | array | Юк | Үрнәк категорияләре slugлары, мәс. `["featured", "hero"]` |
| `description` | string | Юк | Үрнәк сайлагычта күрсәтелә торган кыска тасвирлама |
| `keywords` | array | Юк | Эзләү ачкыч сүзләре |

**Кайтара** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Агент тарафыннан теркәлгән барлык блок үрнәкләрен исемлекли.

**Параметрлар** — юк

**Кайтара**

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

WordPress сайт логотибын бирелгән attachment ID-га яки ерактагы рәсем URL-ына куя. URL бирелсә, рәсем йөкләп алына һәм Media Library-га импортлана.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `attachment_id` | integer | Юк | Гамәлдәге Media Library беркетмәсенең ID-сы |
| `url` | string | Юк | Импортлау һәм логотип итеп кую өчен ерактагы рәсем URL-ы |

`attachment_id` яки `url`-ның берсе бирелергә тиеш.

**Кайтара** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Актив теманың `theme.json` (яки `global-styles`) файлына исемләнгән төс/типография preset-ын куллана. Preset-лар Gratis AI Agent командасы тарафыннан әзерләп алып барыла торган җыелмалар.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `preset` | string | Әйе | Preset исеме, мәсәлән `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Юк | `true` булса, алыштыру урынына гамәлдәге кыйммәтләр белән берләштерә. Килешү буенча `false` |

**Мөмкин preset-лар**

| Preset | Тасвирлама |
|---|---|
| `minimal-dark` | Карага якын фон, ак текст, бер акцент төсе |
| `warm-editorial` | Җылы аксыл фон, serif башисемнәр, җирсыман акцент төсләре |
| `corporate-blue` | Һөнәри типография белән куе зәңгәр һәм ак палитра |
| `vibrant-startup` | Якты градиентлар, түгәрәкләнгән почмаклар, заманча sans-serif шрифт |
| `classic-blog` | Нейтраль соры төсләр, уңайлы юл биеклеге, традицион макет аралары |

**Кайтара** `{ "success": true, "preset": "minimal-dark" }`

---

## Глобаль стильләр {#global-styles}

Глобаль стильләр мөмкинлекләре WordPress Global Styles API аша theme.json кыйммәтләрен укый һәм яза, сайт күләмендә барлык блокларга һәм шаблоннарга тәэсир итә.

### `get_global_styles` {#getglobalstyles}

Хәзерге глобаль стильләр конфигурациясен кайтара.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `path` | string | Юк | Конкрет кыйммәткә JSON күрсәткече, мәсәлән `/color/palette` яки `/typography/fontSizes`. Төшереп калдырылса, бөтен объектны кайтара. |

**Кайтара** тулы глобаль стильләр объектын яки `path` буенча кыйммәтне.

---

### `set_global_styles` {#setglobalstyles}

Глобаль стильләр конфигурациясендә бер яки берничә кыйммәтне яңарта.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `path` | string | Әйе | Куела торган кыйммәткә JSON күрсәткече, мәсәлән `/color/palette` |
| `value` | any | Әйе | Яңа кыйммәт |

**Мисал** — палитрага төс өстәү

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Кайтара** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Агент кулланган барлык глобаль стильләр үзгәрешләрен кире кайтара, теманың килешү буенча көйләүләрен торгыза.

**Параметрлар** — юк

**Кайтара** `{ "success": true }`

---

## Навигация менюлары {#navigation-menus}

Навигация менюсы мөмкинлекләре WordPress навигация менюларын һәм аларның элементларын төзи һәм идарә итә.

### `create_menu` {#createmenu}

Яңа WordPress навигация менюсы төзи.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `name` | string | Әйе | Меню исеме, мәсәлән `Primary Navigation` |
| `location` | string | Юк | Бу менюны билгеләү өчен тема урыны, мәсәлән `primary` |

**Кайтара** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Менюның исемен үзгәртә яки аны тема урынына яңадан билгели.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `menu_id` | integer | Әйе | Яңартыласы менюның ID-сы |
| `name` | string | Юк | Яңа меню исеме |
| `location` | string | Юк | Билгеләү яки яңадан билгеләү өчен тема урыны |

**Кайтара** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Гамәлдәге навигация менюсына элемент өсти.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `menu_id` | integer | Әйе | Максат менюның ID-сы |
| `type` | string | Әйе | Элемент төре: `custom`, `post_type` яки `taxonomy` |
| `title` | string | Юк | Меню элементы өчен тамга (`custom` төре өчен мәҗбүри) |
| `url` | string | Юк | `custom` элементлары өчен URL |
| `object_id` | integer | Юк | `post_type`/`taxonomy` элементлары өчен язма ID-сы яки термин ID-сы |
| `parent_id` | integer | Юк | Бу элементны астына урнаштыру өчен меню элементы ID-сы |
| `position` | integer | Юк | Менюдагы нульдән башланган позиция |

**Кайтара** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Навигация менюсыннан элементны бетерә.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `item_id` | integer | Әйе | Бетереләсе меню элементы ID-сы |

**Кайтара** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Барлык WordPress навигация менюларын, шул исәптән аларга билгеләнгән тема урыннарын, исемлек итеп чыгара.

**Параметрлар** — юк

**Кайтара**

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

## Көйләүләр белән идарә итү {#options-management}

Көйләүләр мөмкинлекләре `get_option` / `update_option` аша WordPress көйләүләрен укый һәм яза. Эчке иминлек блок-исемлеге мөһим көйләүләрне очраклы үзгәртүдән саклый.

### `get_option` {#getoption}

WordPress көйләвен укый.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `option_name` | string | Әйе | Көйләү ачкычы, мәсәлән `blogname` |

**Кайтара** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` иминлек блок-исемлегендә булса, хата кайтара.

---

### `set_option` {#setoption}

WordPress көйләвен яза.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `option_name` | string | Әйе | Көйләү ачкычы |
| `value` | any | Әйе | Яңа кыйммәт (массивлар/объектлар өчен автомат рәвештә сериализацияләнә) |
| `autoload` | string | Юк | `"yes"` яки `"no"`. Килешү буенча гамәлдәге autoload көйләвен саклый |

Әгәр `option_name` иминлек blocklist-ында булса, хата кайтара.

**Кайтара** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress көйләнешен бетерә.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Бетереләчәк көйләнеш ачкычы |

Әгәр `option_name` иминлек blocklist-ында булса, хата кайтара.

**Кайтара** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Үрнәккә туры килгән WordPress көйләнешләрен исемлек итеп чыгара.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Көйләнеш исемнәрен фильтрлау өчен SQL LIKE үрнәге, мәсәлән `gratis_%`. Төшереп калдырылса, барлык көйләнешләрне кайтара (зур мәгълүмат базаларында саклык белән кулланыгыз). |
| `limit` | integer | No | Нәтиҗәләрнең максималь саны. Килешү буенча `50`, максимум `500` |

**Кайтара**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Контент белән идарә итү {#content-management}

Контент белән идарә итү мөмкинлекләре WordPress язмаларын һәм битләрен булдыра һәм үзгәртә. Язма ID-лары кайтарыла, шуңа күрә күп мөмкинлекле планнардагы алдагы адымнар булдырылган контентка сылтама ясый ала.

### `create_post` {#createpost}

Яңа WordPress язмасы, бите яки custom post type язмасы булдыра.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Язма исеме |
| `content` | string | No | Язма эчтәлеге — гади текст, HTML яки серияләштерелгән блок билгеләмәсен кабул итә |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Килешү буенча `draft` |
| `post_type` | string | No | Язма төре slug-ы, мәсәлән `post`, `page` яки теләсә кайсы теркәлгән CPT. Килешү буенча `post` |
| `excerpt` | string | No | Архивларда һәм эзләү нәтиҗәләрендә күрсәтелә торган кыскача тасвирлама |
| `categories` | array | No | Билгеләү өчен категория исемнәре яки ID-лары массивы |
| `tags` | array | No | Билгеләү өчен тег исемнәре яки ID-лары массивы |
| `author` | integer | No | Язма авторы итеп билгеләнәчәк WordPress кулланучы ID-сы. Килешү буенча хәзерге кулланучы |
| `date` | string | No | ISO 8601 форматында бастыру датасы, мәсәлән `2026-05-01T09:00:00` |
| `page_template` | string | No | Бу язмага яки биткә билгеләнәчәк шаблон файлы, мәсәлән `page-full-width.php`. `post_type` `page` булганда яки бит шаблоннарын хуплый торган CPT булганда гына мәгънәле. |

**Мисал**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Кайтара** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Булган WordPress язмасын яки битен яңарта.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Яңартылачак язманың ID-сы |
| `title` | string | No | Яңа язма исеме |
| `content` | string | No | Яңа язма эчтәлеге |
| `status` | string | No | Яңа статус: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Яңа өзек |
| `categories` | array | No | Тулы категорияләр исемлеген бу исемнәр яки ID-лар массивы белән алыштырырга |
| `tags` | array | No | Тулы теглар исемлеген бу исемнәр яки ID-лар массивы белән алыштырырга |
| `page_template` | string | No | Бу язмага яки биткә билгеләнәчәк яңа шаблон файлы, мәсәлән `page-full-width.php`. Шаблон билгеләвен бетерү һәм theme-ның килешү көйләнешенә кайту өчен буш юл тапшырыгыз. |

**Мисал** — булдырганнан соң шаблонны үзгәртү

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Кайтара** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Бер мөмкинлек чакыруында берничә язма булдыра, сайтлар төзегәндә яки контентны күпләп импортлаганда әйләнеп кайту чакыруларын киметә. Язмалар эзлекле рәвештә булдырыла; берсе уңышсыз булса, башкалары дәвам итә, һәм уңышсызлык нәтиҗәләр массивында хәбәр ителә.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Язма объектлары массивы, һәрберсе `create_post` белән бер үк параметрларны кабул итә |
| `stop_on_error` | boolean | No | Әгәр `true` булса, беренче уңышсызлыктан соң эшкәртүне туктатырга. Килешү буенча `false` |

**Мисал**

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

**Кайтара**

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

Булган язмага яки биткә аерып күрсәтелгән рәсем (язма миниатюрасы) билгели. Булган Media Library беркетмә ID-сын яки ерактагы рәсем URL-ын кабул итә; URL бирелсә, рәсем автоматик рәвештә йөкләп алына һәм импортлана.

**Параметрлар**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Яңартылачак язма яки бит ID-сы |
| `attachment_id` | integer | No | Булган Media Library беркетмәсенең ID-сы |
| `url` | string | No | Импортлау һәм аерып күрсәтелгән рәсем итеп билгеләү өчен ерактагы рәсем URL-ы |
| `alt_text` | string | No | Әгәр ул URL-дан импортланса, беркетмәгә кулланылачак alt текст |

`attachment_id` яки `url` берсе бирелергә тиеш.

**Кайтара** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Актив форма plugin-ы ярдәмендә контакт формасы булдыра (кайсысы урнаштырылган булуга карап, Contact Form 7, WPForms, Fluent Forms яки Gravity Forms). Теләсә кайсы язмага яки биткә урнаштырып була торган shortcode кайтара.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `title` | string | Әйе | Форма plugin идарә панелендә күрсәтелә торган форма исеме |
| `fields` | array | Әйе | Форма кырларының тәртипләнгән исемлеге (аста Field объектына карагыз) |
| `recipient` | string | Юк | Җибәрелгән мәгълүматларны кабул итү өчен email адрес. WordPress администраторы email адресына көйләнеп куелган |
| `subject` | string | Юк | Email тема юлы. Contact Form 7 кулланганда `[your-name]` һәм `[your-subject]` урынбасарларын хуплый |
| `confirmation_message` | string | Юк | Уңышлы җибәрүдән соң күрсәтелә торган хәбәр. Килешенгән: `"Thank you for your message. We'll be in touch soon."` |

**Кыр объекты**

| Ачкыч | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `name` | string | Әйе | Эчке кыр исеме / машина ачкычы |
| `label` | string | Әйе | Формада күрсәтелә торган кеше укый алырлык тамга |
| `type` | string | Әйе | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Юк | Җибәрү алдыннан кырның тутырылырга тиешме-юкмы. Килешенгән `false` |
| `options` | array | Юк | `select`, `checkbox` һәм `radio` кырлары өчен вариантлар |
| `placeholder` | string | Юк | Текст тибындагы кертүләр өчен урынбасар текст |

**Мисал**

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

**Кайтара**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуаль тикшерү {#visual-review}

Visual Review мөмкинлекләре agentка тере битләрнең скриншотларын төшерергә һәм аларны анализларга мөмкинлек бирә, браузер киңәйтүе таләп итмичә автоном дизайн тикшерүен, элек/соң чагыштыруларын һәм визуаль regression тикшерүләрен эшли ала.

### `capture_screenshot` {#capturescreenshot}

Сервер ягындагы headless браузер ярдәмендә бирелгән URL буенча WordPress битенең скриншотын төшерә. Рәсем Media Libraryга саклана һәм CDN URL кайтарыла.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `url` | string | Әйе | Скриншот төшерү өчен битнең тулы URL, мәсәлән `https://example.com/about/` |
| `width` | integer | Юк | Күренеш өлкәсе киңлеге пиксельләрдә. Килешенгән `1280` |
| `height` | integer | Юк | Күренеш өлкәсе биеклеге пиксельләрдә. Килешенгән `800` |
| `full_page` | boolean | Юк | Күренеш өлкәсе генә түгел, ә бөтен әйләндерелә торган битне төшерү. Килешенгән `false` |
| `delay_ms` | integer | Юк | Бит йөкләнгәннән соң төшерү алдыннан көтү миллисекундлары, анимацияле эчтәлек өчен файдалы. Килешенгән `500` |
| `label` | string | Юк | Media Libraryдагы беркетмә белән саклана торган кеше укый алырлык тамга |

**Кайтара**

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

Ике скриншот ала һәм визуаль аерма бәясен, шулай ук үзгәргән өлкәләрне күрсәтә торган аерма рәсемен кайтара. Дизайн үзгәреше көтелгән нәтиҗәне биргәнен раслау яки көтелмәгән regressionнарны ачыклау өчен файдалы.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `before_url` | string | Әйе | "before" халәте итеп төшерү өчен бит URL |
| `after_url` | string | Әйе | "after" халәте итеп төшерү өчен бит URL. Вакыт буенча чагыштырганда шул ук URL булырга мөмкин |
| `width` | integer | Юк | Ике төшерү өчен дә күренеш өлкәсе киңлеге. Килешенгән `1280` |
| `threshold` | float | Юк | Пиксель-аерма чиге (0.0–1.0). Бу толерантлык эчендәге пиксельләр үзгәрмәгән дип санала. Килешенгән `0.1` |

**Кайтара**

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

`diff_score` ның `0.0` булуы күренеп торган үзгәреш юк дигәнне аңлата; `1.0` һәр пиксель үзгәргән дигәнне аңлата.

---

### `review_page_design` {#reviewpagedesign}

Битнең скриншотын төшерә һәм аны визуаль анализ өчен тел моделенә җибәрә. Макет, типография, төсләр куллану һәм accessibility мәсьәләләрен колачлаган структуралаштырылган бәяләмә кайтара.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `url` | string | Әйе | Тикшерү өчен битнең тулы URL |
| `focus` | string | Юк | Басым ясалачак тикшерү өлкәләренең өтер белән аерылган исемлеге: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Килешенгән: барлык өлкәләр |
| `width` | integer | Юк | Күренеш өлкәсе киңлеге. Килешенгән `1280` |

**Кайтара**

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

## Урнаштырыла торган мөмкинлекләр {#installable-abilities}

Installable Abilities Registry agentны WordPress pluginнары буларак таратыла торган өстәмә мөмкинлек җыелмалары белән киңәйтергә мөмкинлек бирә. Һәр җыелма стандарт мөмкинлек API ярдәмендә бер яки берничә мөмкинлекне терки.

### `list_available_abilities` {#listavailableabilities}

Registryдан урнаштыру өчен мөмкин булган мөмкинлек җыелмалары каталогын кайтара.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `category` | string | Юк | Категория буенча фильтрлау: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Кайтара**

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

Реестрдан мөмкинлекләр пакетын йөкләп ала һәм активлаштыра.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `slug` | string | Әйе | Мөмкинлекләр пакеты плагинының slug-ы |

**Кайтара** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Тасвирланган куллану очрагы өчен иң яхшы плагинны табу максатыннан мөмкинлекләр реестрына сорау җибәрә һәм, теләк буенча, аны урнаштыра.

**Параметрлар**

| Параметр | Төр | Мәҗбүри | Тасвирлама |
|---|---|---|---|
| `description` | string | Әйе | Кирәкле функциональлекнең табигый телдәге тасвирламасы |
| `install` | boolean | Юк | Әгәр `true` булса, тәкъдим ителгән плагинны шунда ук урнаштыра. Килешенгәнчә `false` |

**Мисал**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Кайтара**

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
