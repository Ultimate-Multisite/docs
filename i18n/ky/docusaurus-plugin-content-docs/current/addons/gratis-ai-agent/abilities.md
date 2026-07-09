---
title: Жөндөмдөр маалымдамасы
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Мүмкүнчүлүктөр маалымдамасы {#abilities-reference}

Мүмкүнчүлүктөр — бул Gratis AI Agent сиздин WordPress орнотууңузда чакыра ала турган атомдук аракеттер. Ар бир мүмкүнчүлүк JSON схемасын ачып берген катталган PHP классы болуп саналат — агент бул схеманы иштөө учурунда окуп, кандай параметрлер талап кылынарын жана мүмкүнчүлүк эмнени кайтарарын түшүнөт.

Бул барак Gratis AI Agent v1.9.0 менен кошо жеткирилген бардык мүмкүнчүлүктөрдү документтештирет.

---

## Ыңгайлаштырылган жазма түрлөрү {#custom-post-types}

Бул мүмкүнчүлүктөр агент аркылуу катталган ыңгайлаштырылган жазма түрлөрүн (CPTs) башкарат. Каттоолор WordPress параметрлер жадыбалына сакталат, ошондуктан алар plugin өчүрүлүп кайра иштетилгенден кийин да сакталып калат.

### `register_post_type` {#registerposttype}

Жаңы ыңгайлаштырылган жазма түрүн каттайт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Жазма түрүнүн ачкычы (эң көп 20 белги, баш тамга жок, боштук жок) |
| `singular_label` | string | Yes | Адам окуй ала турган жекелик аталыш, мисалы `Portfolio Item` |
| `plural_label` | string | Yes | Адам окуй ала турган көптүк аталыш, мисалы `Portfolio Items` |
| `public` | boolean | No | Жазма түрү жалпыга жеткиликтүүбү. Демейкиси `true` |
| `supports` | array | No | Колдоого алынуучу функциялар: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Демейкиси `["title","editor"]` |
| `has_archive` | boolean | No | Жазма түрүнүн архив барагы иштетилгенби. Демейкиси `false` |
| `menu_icon` | string | No | Админ меню сүрөтчөсү үчүн Dashicons классы же URL. Демейкиси `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Жазма түрү үчүн URL slug. Демейкиси `slug` |

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

**Кайтарат** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Агент тарабынан катталган бардык ыңгайлаштырылган жазма түрлөрүн кайтарат.

**Параметрлер** — жок

**Кайтарат**

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

Агент тарабынан мурда катталган ыңгайлаштырылган жазма түрүн каттоодон чыгарат. Ошол түрдөгү бар жазмалар маалымат базасында калат, бирок жазма түрү аркылуу мындан ары жеткиликтүү болбойт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Өчүрүлө турган жазма түрүнүн ачкычы |

**Кайтарат** `{ "success": true, "slug": "portfolio" }`

---

## Ыңгайлаштырылган таксономиялар {#custom-taxonomies}

Бул мүмкүнчүлүктөр ыңгайлаштырылган таксономияларды башкарат. CPTs сыяктуу эле, таксономия каттоолору да сакталат.

### `register_taxonomy` {#registertaxonomy}

Жаңы ыңгайлаштырылган таксономияны каттайт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Таксономия ачкычы (эң көп 32 белги) |
| `singular_label` | string | Yes | Адам окуй ала турган жекелик аталыш, мисалы `Project Category` |
| `plural_label` | string | Yes | Адам окуй ала турган көптүк аталыш, мисалы `Project Categories` |
| `post_types` | array | Yes | Бул таксономия тиркелиши керек болгон жазма түрлөрүнүн slugs маанилери |
| `hierarchical` | boolean | No | Категория стили үчүн `true`, тег стили үчүн `false`. Демейкиси `true` |
| `public` | boolean | No | Терминдер жалпыга жеткиликтүүбү. Демейкиси `true` |
| `rewrite_slug` | string | No | Таксономия үчүн URL slug. Демейкиси `slug` |

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

**Кайтарат** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Агент тарабынан катталган бардык ыңгайлаштырылган таксономияларды кайтарат.

**Параметрлер** — жок

**Кайтарат**

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

Агент тарабынан мурда катталган ыңгайлаштырылган таксономияны каттоодон чыгарат.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Өчүрүлө турган таксономия ачкычы |

**Кайтарат** `{ "success": true, "slug": "project-category" }`

---

## Дизайн системасы {#design-system}

Дизайн системасынын мүмкүнчүлүктөрү WordPress сайттын визуалдык көрсөтүлүшүн өзгөртөт — ыңгайлаштырылган CSSтен тартып блок үлгүлөрүнө жана сайт логотибине чейин.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` аркылуу сайттын `<head>` бөлүгүнө CSS кошот. CSS `gratis_ai_agent_custom_css` параметринде сакталат жана мүмкүнчүлүк баштапкы абалга келтирилгенде таза түрдө кезектен чыгарылат.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Киргизиле турган жарактуу CSS |
| `label` | string | No | Бул CSS блогу үчүн адам окуй ала турган энбелги, оңдоо журналдарында колдонулат. Демейкиси `"agent-injected"` |
| `replace` | boolean | No | Эгер `true` болсо, мурда киргизилген бардык CSSти алмаштырат. Демейкиси `false` (кошуп улайт) |

**Мисал**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Кайтарат** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress үлгүлөр китепканасына кайра колдонулуучу блок үлгүсүн каттайт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Үлгү идентификатору, мисалы `gratis/hero-dark` |
| `title` | string | Yes | Редактордо көрсөтүлгөн адам окуй ала турган үлгү аталышы |
| `content` | string | Yes | Үлгү үчүн сериялаштырылган блок белгилөөсү (HTML) |
| `categories` | array | No | Үлгү категорияларынын slugs маанилери, мисалы `["featured", "hero"]` |
| `description` | string | No | Үлгү тандоочуда көрсөтүлгөн кыска сүрөттөмө |
| `keywords` | array | No | Издөө ачкыч сөздөрү |

**Кайтарат** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Агент тарабынан катталган бардык блок үлгүлөрүн тизмелейт.

**Параметрлер** — жок

**Кайтарат**

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

WordPress сайт логотибин берилген тиркеме ID'сине же алыстагы сүрөт URL'ине коёт. URL берилсе, сүрөт жүктөлүп алынып, Media Library'ге импорттолот.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `attachment_id` | integer | Жок | Учурдагы Media Library тиркемесинин ID'си |
| `url` | string | Жок | Импорттоп, логотип катары коюла турган алыстагы сүрөт URL'и |

`attachment_id` же `url` параметрлеринин бири берилүүгө тийиш.

**Кайтарат** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Аталган түс/типография алдын ала жөндөөсүн активдүү теманын `theme.json` (же `global-styles`) файлына колдонот. Алдын ала жөндөөлөр Gratis AI Agent командасы тарабынан колдоого алынган тандалма топтомдор.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `preset` | string | Ооба | Алдын ала жөндөөнүн аты, мисалы `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Жок | Эгер `true` болсо, алмаштыруунун ордуна учурдагы маанилер менен бириктирет. Демейки `false` |

**Жеткиликтүү алдын ала жөндөөлөр**

| Алдын ала жөндөө | Сүрөттөмө |
|---|---|
| `minimal-dark` | Дээрлик кара фон, ак текст, бир акцент түс |
| `warm-editorial` | Жылуу акка жакын фон, serif баш аталыштар, жер түстүү акценттер |
| `corporate-blue` | Кесипкөй типографиясы бар кочкул көк жана ак палитра |
| `vibrant-startup` | Ачык градиенттер, тегеректелген бурчтар, заманбап sans-serif шрифт |
| `classic-blog` | Нейтралдуу боз түстөр, ыңгайлуу сап бийиктиги, салттуу жайгашуу аралыгы |

**Кайтарат** `{ "success": true, "preset": "minimal-dark" }`

---

## Глобалдык стилдер {#global-styles}

Глобалдык стилдер мүмкүнчүлүктөрү WordPress Global Styles API аркылуу theme.json маанилерин окуп жана жазып, сайт боюнча бардык блокторго жана шаблондорго таасир этет.

### `get_global_styles` {#getglobalstyles}

Учурдагы глобалдык стилдер конфигурациясын кайтарат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `path` | string | Жок | Белгилүү бир мааниге JSON көрсөткүчү, мисалы `/color/palette` же `/typography/fontSizes`. Калтырылса, бүтүндөй объектти кайтарат. |

**Кайтарат** толук глобалдык стилдер объектисин же `path` дарегиндеги маанини.

---

### `set_global_styles` {#setglobalstyles}

Глобалдык стилдер конфигурациясында бир же бир нече маанини жаңыртат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `path` | string | Ооба | Коюла турган мааниге JSON көрсөткүчү, мисалы `/color/palette` |
| `value` | any | Ооба | Жаңы маани |

**Мисал** — палитрага түс кошуу

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Кайтарат** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Агент колдонгон бардык глобалдык стилдер өзгөртүүлөрүн баштапкы абалга келтирип, теманын демейки маанилерин калыбына келтирет.

**Параметрлер** — жок

**Кайтарат** `{ "success": true }`

---

## Навигация менюлары {#navigation-menus}

Навигация менюсу мүмкүнчүлүктөрү WordPress навигация менюларын жана алардын элементтерин түзүп, башкарат.

### `create_menu` {#createmenu}

Жаңы WordPress навигация менюсун түзөт.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `name` | string | Ооба | Меню аты, мисалы `Primary Navigation` |
| `location` | string | Жок | Бул меню дайындала турган тема жайгашуусу, мисалы `primary` |

**Кайтарат** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Менюну кайра атайт же аны тема жайгашуусуна кайра дайындайт.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `menu_id` | integer | Ооба | Жаңыртыла турган менюнун ID'си |
| `name` | string | Жок | Жаңы меню аты |
| `location` | string | Жок | Дайындала же кайра дайындала турган тема жайгашуусу |

**Кайтарат** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Учурдагы навигация менюсуна элемент кошот.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `menu_id` | integer | Ооба | Максаттуу менюнун ID'си |
| `type` | string | Ооба | Элемент түрү: `custom`, `post_type` же `taxonomy` |
| `title` | string | Жок | Меню элементи үчүн энбелги (`custom` түрү үчүн милдеттүү) |
| `url` | string | Жок | `custom` элементтери үчүн URL |
| `object_id` | integer | Жок | `post_type`/`taxonomy` элементтери үчүн пост ID'си же термин ID'си |
| `parent_id` | integer | Жок | Бул элементти ичине жайгаштыра турган меню элементинин ID'си |
| `position` | integer | Жок | Менюдагы нөлдөн башталган орун |

**Кайтарат** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Навигация менюсунан элементти алып салат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `item_id` | integer | Ооба | Алып салына турган меню элементинин ID'си |

**Кайтарат** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Бардык WordPress навигация менюларын, анын ичинде алардын дайындалган тема жайгашууларын тизмектейт.

**Параметрлер** — жок

**Кайтарат**

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

## Параметрлерди башкаруу {#options-management}

Параметрлер мүмкүнчүлүктөрү WordPress параметрлерин `get_option` / `update_option` аркылуу окуп жана жазат. Камтылган коопсуздук бөгөт тизмеси маанилүү жөндөөлөрдүн кокус өзгөртүлүшүнө жол бербейт.

### `get_option` {#getoption}

WordPress параметрин окуйт.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `option_name` | string | Ооба | Параметр ачкычы, мисалы `blogname` |

**Кайтарат** `{ "option_name": "blogname", "value": "My Site" }`

Эгер `option_name` коопсуздук бөгөт тизмесинде болсо, ката кайтарат.

---

### `set_option` {#setoption}

WordPress параметрин жазат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `option_name` | string | Ооба | Параметр ачкычы |
| `value` | any | Ооба | Жаңы маани (массивдер/объекттер үчүн автоматтык түрдө сериялаштырылат) |
| `autoload` | string | Жок | `"yes"` же `"no"`. Демейки учурдагы autoload жөндөөсүн сактайт |

Эгер `option_name` коопсуздук blocklist тизмесинде болсо, ката кайтарат.

**Кайтарат** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress параметрин өчүрөт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Өчүрүлө турган параметр ачкычы |

Эгер `option_name` коопсуздук blocklist тизмесинде болсо, ката кайтарат.

**Кайтарат** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Үлгүгө дал келген WordPress параметрлерин тизмелейт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Параметр аттарын чыпкалоо үчүн SQL LIKE үлгүсү, мисалы `gratis_%`. Эгер көрсөтүлбөсө, бардык параметрлерди кайтарат (чоң маалымат базаларында этияттык менен колдонуңуз). |
| `limit` | integer | No | Натыйжалардын эң көп саны. Демейки `50`, эң көп `500` |

**Кайтарат**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Мазмунду башкаруу {#content-management}

Мазмунду башкаруу мүмкүнчүлүктөрү WordPress жазмаларын жана барактарын түзөт жана түзөтөт. Кийинки көп мүмкүнчүлүктүү пландардагы кадамдар түзүлгөн мазмунга шилтеме кыла алышы үчүн жазма IDлери кайтарылат.

### `create_post` {#createpost}

Жаңы WordPress жазмасын, барагын же ыңгайлаштырылган жазма түрүнүн жазуусун түзөт.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Жазманын аталышы |
| `content` | string | No | Жазманын негизги мазмуну — жөнөкөй текстти, HTMLди же сериялаштырылган блок белгилөөсүн кабыл алат |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Демейки `draft` |
| `post_type` | string | No | Жазма түрүнүн slug мааниси, мисалы `post`, `page` же катталган каалаган CPT. Демейки `post` |
| `excerpt` | string | No | Архивдерде жана издөө натыйжаларында көрсөтүлүүчү кыскача мазмун |
| `categories` | array | No | Дайындоо үчүн категория аттарынын же IDлеринин массиви |
| `tags` | array | No | Дайындоо үчүн тег аттарынын же IDлеринин массиви |
| `author` | integer | No | Жазманын автору катары коюла турган WordPress колдонуучу IDси. Демейки учурдагы колдонуучу |
| `date` | string | No | ISO 8601 форматындагы жарыялоо күнү, мисалы `2026-05-01T09:00:00` |
| `page_template` | string | No | Бул жазмага же баракка дайындала турган шаблон файлы, мисалы `page-full-width.php`. `post_type` `page` болгондо же барак шаблондорун колдогон CPT болгондо гана маанилүү. |

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

**Кайтарат** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Учурдагы WordPress жазмасын же барагын жаңыртат.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Жаңыртыла турган жазманын IDси |
| `title` | string | No | Жазманын жаңы аталышы |
| `content` | string | No | Жазманын жаңы негизги мазмуну |
| `status` | string | No | Жаңы абал: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Жаңы үзүндү |
| `categories` | array | No | Толук категория тизмесин ушул аттардын же IDлердин массиви менен алмаштыруу |
| `tags` | array | No | Толук тег тизмесин ушул аттардын же IDлердин массиви менен алмаштыруу |
| `page_template` | string | No | Бул жазмага же баракка дайындала турган жаңы шаблон файлы, мисалы `page-full-width.php`. Шаблон дайындоосун алып салуу жана теманын демейкисине кайтуу үчүн бош сапты өткөрүңүз. |

**Мисал** — түзүлгөндөн кийин шаблонду өзгөртүү

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Кайтарат** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Бир мүмкүнчүлүк чакыруусунда бир нече жазма түзөт, сайттарды куруу же мазмунду жапырт импорттоо учурунда кайрылып-келүүлөрдү азайтат. Жазмалар кезеги менен түзүлөт; эгер бирөө ишке ашпай калса, башкалары уланат жана мүчүлүштүк натыйжалар массивинде билдирилет.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Жазма объекттеринин массиви, ар бири `create_post` сыяктуу эле параметрлерди кабыл алат |
| `stop_on_error` | boolean | No | Эгер `true` болсо, биринчи мүчүлүштүктөн кийин иштетүүнү токтотуу. Демейки `false` |

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

**Кайтарат**

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

Учурдагы жазмага же баракка өзгөчөлөнгөн сүрөттү (жазма миниатюрасын) дайындайт. Учурдагы Media Library тиркеме IDсин же алыстагы сүрөт URLин кабыл алат; URL берилгенде, сүрөт автоматтык түрдө жүктөлүп алынып импорттолот.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | Жаңыртыла турган жазманын же барактын IDси |
| `attachment_id` | integer | No | Учурдагы Media Library тиркемесинин IDси |
| `url` | string | No | Импорттоп, өзгөчөлөнгөн сүрөт катары коюу үчүн алыстагы сүрөт URLи |
| `alt_text` | string | No | Эгер тиркеме URLден импорттолсо, ага колдонулуучу alt текст |

`attachment_id` же `url` параметрлеринин бири берилиши керек.

**Кайтарат** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Активдүү форма pluginин колдонуп байланыш формасын түзөт (кайсынысы орнотулганына жараша Contact Form 7, WPForms, Fluent Forms же Gravity Forms). Каалаган жазмага же баракка кыстарууга боло турган shortcode кайтарат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `title` | string | Ооба | форманын plugin админ бөлүгүндө көрсөтүлгөн форма аталышы |
| `fields` | array | Ооба | Форма талааларынын иреттелген тизмеси (төмөндөгү Талаа объектин караңыз) |
| `recipient` | string | Жок | Жөнөтмөлөрдү алуу үчүн email дареги. Демейки боюнча WordPress админ email дарегине коюлат |
| `subject` | string | Жок | Email темасынын сабы. Contact Form 7 колдонулганда `[your-name]` жана `[your-subject]` placeholders колдойт |
| `confirmation_message` | string | Жок | Ийгиликтүү жөнөтүүдөн кийин көрсөтүлүүчү билдирүү. Демейки: `"Thank you for your message. We'll be in touch soon."` |

**Талаа объекти**

| Ачкыч | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `name` | string | Ооба | Ички талаа аталышы / машина ачкычы |
| `label` | string | Ооба | Формада көрсөтүлүүчү адам окуй турган энбелги |
| `type` | string | Ооба | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Жок | Жөнөтүүдөн мурун талаа толтурулушу керекпи. Демейки `false` |
| `options` | array | Жок | `select`, `checkbox` жана `radio` талаалары үчүн параметрлер |
| `placeholder` | string | Жок | Текст түрүндөгү киргизүүлөр үчүн placeholder тексти |

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

**Кайтарат**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Визуалдык кароо {#visual-review}

Визуалдык кароо мүмкүнчүлүктөрү агентке жандуу барактардын скриншотторун тартып, аларды талдоого мүмкүндүк берет; бул эч кандай браузер кеңейтмесин талап кылбастан автономдуу дизайн кароосун, мурда/кийин салыштырууларды жана визуалдык регрессия текшерүүлөрүн иштетет.

### `capture_screenshot` {#capturescreenshot}

Берилген URL боюнча WordPress барагынын скриншотун сервер тараптагы headless браузер аркылуу тартат. Сүрөт Media Library'ге сакталат жана CDN URL кайтарылат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `url` | string | Ооба | Скриншот тартылуучу барактын толук URL дареги, мисалы `https://example.com/about/` |
| `width` | integer | Жок | Viewport кеңдиги пиксел менен. Демейки `1280` |
| `height` | integer | Жок | Viewport бийиктиги пиксел менен. Демейки `800` |
| `full_page` | boolean | Жок | Viewport гана эмес, толук жылдырылуучу баракты тартуу. Демейки `false` |
| `delay_ms` | integer | Жок | Барак жүктөлгөндөн кийин тартуудан мурда күтө турган миллисекунддар, анимацияланган мазмун үчүн пайдалуу. Демейки `500` |
| `label` | string | Жок | Media Library ичиндеги тиркемеге сакталган адам окуй турган энбелги |

**Кайтарат**

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

Эки скриншотту алып, визуалдык айырма баасын жана өзгөргөн аймактарды белгилеген айырма сүрөтүн кайтарат. Дизайн өзгөрүүсү күтүлгөн натыйжаны бергенин ырастоо же күтүлбөгөн регрессияларды аныктоо үчүн пайдалуу.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `before_url` | string | Ооба | "мурда" абалы катары тартылуучу барактын URL дареги |
| `after_url` | string | Ооба | "кийин" абалы катары тартылуучу барактын URL дареги. Убакыт боюнча салыштырганда ошол эле URL болушу мүмкүн |
| `width` | integer | Жок | Эки тартуу үчүн тең Viewport кеңдиги. Демейки `1280` |
| `threshold` | float | Жок | Пиксел айырмасынын чеги (0.0–1.0). Бул толеранттуулук ичиндеги пикселдер өзгөрүүсүз деп эсептелет. Демейки `0.1` |

**Кайтарат**

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

`diff_score` мааниси `0.0` болсо көрүнгөн өзгөрүү жок дегенди билдирет; `1.0` болсо ар бир пиксел өзгөргөнүн билдирет.

---

### `review_page_design` {#reviewpagedesign}

Барактын скриншотун тартып, визуалдык талдоо үчүн тил моделине жөнөтөт. Макет, типография, түстү колдонуу жана жеткиликтүүлүк маселелерин камтыган түзүмдөлгөн баалоону кайтарат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `url` | string | Ооба | Кароого алынуучу барактын толук URL дареги |
| `focus` | string | Жок | Өзгөчө басым жасалуучу кароо аймактарынын үтүр менен бөлүнгөн тизмеси: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Демейки: бардык аймактар |
| `width` | integer | Жок | Viewport кеңдиги. Демейки `1280` |

**Кайтарат**

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

## Орнотулуучу мүмкүнчүлүктөр {#installable-abilities}

Орнотулуучу мүмкүнчүлүктөр реестри агентти WordPress plugin'дери катары таратылган кошумча мүмкүнчүлүк топтомдору менен кеңейтүүгө мүмкүндүк берет. Ар бир топтом стандарттуу мүмкүнчүлүк API'ни колдонуп бир же бир нече мүмкүнчүлүктү каттайт.

### `list_available_abilities` {#listavailableabilities}

Реестрден орнотууга жеткиликтүү мүмкүнчүлүк топтомдорунун каталогун кайтарат.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `category` | string | Жок | Категория боюнча чыпкалоо: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Кайтарат**

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

Реестрден жөндөм топтомун жүктөп алып, активдештирет.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `slug` | string | Ооба | Жөндөм топтому плагининин slug мааниси |

**Кайтарат** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Сүрөттөлгөн колдонуу учуру үчүн эң ылайыктуу плагинди табуу максатында жөндөм реестрине сурам жөнөтөт жана, кааласаңыз, аны орнотот.

**Параметрлер**

| Параметр | Түрү | Милдеттүү | Сүрөттөмө |
|---|---|---|---|
| `description` | string | Ооба | Керектүү функционалдуулуктун табигый тилдеги сүрөттөмөсү |
| `install` | boolean | Жок | Эгер `true` болсо, сунушталган плагин дароо орнотулат. Баштапкы мааниси `false` |

**Мисал**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Кайтарат**

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
