---
title: Мүмкіндіктер анықтамалығы
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities анықтамалығы {#abilities-reference}

Abilities — Gratis AI Agent сіздің WordPress орнатылымыңызда шақыра алатын атомдық әрекеттер. Әрбір ability — JSON схемасын ұсынатын тіркелген PHP класы; агент бұл схеманы орындау уақытында оқып, қандай параметрлер қажет екенін және ability нені қайтаратынын түсінеді.

Бұл бетте Gratis AI Agent v1.9.0 құрамымен бірге жеткізілетін барлық abilities құжатталған.

---

## Пайдаланушылық жазба түрлері {#custom-post-types}

Бұл abilities агент арқылы тіркелген пайдаланушылық жазба түрлерін (CPTs) басқарады. Тіркеулер WordPress опциялар кестесінде сақталады, сондықтан олар plugin өшіріліп, қайта іске қосылғаннан кейін де сақталады.

### `register_post_type` {#registerposttype}

Жаңа пайдаланушылық жазба түрін тіркейді.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Жазба түрінің кілті (ең көбі 20 таңба, бас әріптер жоқ, бос орындар жоқ) |
| `singular_label` | string | Иә | Адамға түсінікті жекеше атау, мысалы `Portfolio Item` |
| `plural_label` | string | Иә | Адамға түсінікті көпше атау, мысалы `Portfolio Items` |
| `public` | boolean | Жоқ | Жазба түрі жалпыға қолжетімді ме. Әдепкі мәні `true` |
| `supports` | array | Жоқ | Қолдау көрсетілетін мүмкіндіктер: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Әдепкі мәні `["title","editor"]` |
| `has_archive` | boolean | Жоқ | Жазба түрінің архив беті қосылған ба. Әдепкі мәні `false` |
| `menu_icon` | string | Жоқ | Әкімші мәзірі белгішесіне арналған Dashicons класы немесе URL. Әдепкі мәні `"dashicons-admin-post"` |
| `rewrite_slug` | string | Жоқ | Жазба түріне арналған URL slug. Әдепкі бойынша `slug` мәніне тең |

**Мысал**

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

**Қайтарады** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Агент тіркеген барлық пайдаланушылық жазба түрлерін қайтарады.

**Параметрлер** — жоқ

**Қайтарады**

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

Агент бұрын тіркеген пайдаланушылық жазба түрін тіркеуден шығарады. Сол түрдегі бар жазбалар дерекқорда қалады, бірақ бұдан былай жазба түрі арқылы қолжетімді болмайды.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Жою қажет жазба түрінің кілті |

**Қайтарады** `{ "success": true, "slug": "portfolio" }`

---

## Пайдаланушылық таксономиялар {#custom-taxonomies}

Бұл abilities пайдаланушылық таксономияларды басқарады. CPTs сияқты, таксономия тіркеулері де сақталады.

### `register_taxonomy` {#registertaxonomy}

Жаңа пайдаланушылық таксономияны тіркейді.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Таксономия кілті (ең көбі 32 таңба) |
| `singular_label` | string | Иә | Адамға түсінікті жекеше атау, мысалы `Project Category` |
| `plural_label` | string | Иә | Адамға түсінікті көпше атау, мысалы `Project Categories` |
| `post_types` | array | Иә | Бұл таксономия тіркелуі тиіс жазба түрлерінің slugs мәндері |
| `hierarchical` | boolean | Жоқ | Санат стилі үшін `true`, тег стилі үшін `false`. Әдепкі мәні `true` |
| `public` | boolean | Жоқ | Терминдер жалпыға қолжетімді ме. Әдепкі мәні `true` |
| `rewrite_slug` | string | Жоқ | Таксономияға арналған URL slug. Әдепкі бойынша `slug` мәніне тең |

**Мысал**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Қайтарады** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Агент тіркеген барлық пайдаланушылық таксономияларды қайтарады.

**Параметрлер** — жоқ

**Қайтарады**

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

Агент бұрын тіркеген пайдаланушылық таксономияны тіркеуден шығарады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Жою қажет таксономия кілті |

**Қайтарады** `{ "success": true, "slug": "project-category" }`

---

## Дизайн жүйесі {#design-system}

Дизайн жүйесінің abilities WordPress сайтының көрнекі көрсетілімін өзгертеді — пайдаланушылық CSS-тен бастап блок үлгілеріне және сайт логотипіне дейін.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` арқылы сайттың `<head>` бөліміне CSS қосады. CSS `gratis_ai_agent_custom_css` опциясында сақталады және ability қалпына келтірілгенде таза түрде кезектен шығарылады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `css` | string | Иә | Енгізілетін жарамды CSS |
| `label` | string | Жоқ | Debug журналдарында қолданылатын осы CSS блогына арналған адамға түсінікті белгі. Әдепкі мәні `"agent-injected"` |
| `replace` | boolean | Жоқ | Егер `true` болса, бұрын енгізілген барлық CSS-ті ауыстырады. Әдепкі мәні `false` (соңына қосады) |

**Мысал**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Қайтарады** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress үлгі кітапханасында қайта пайдалануға болатын блок үлгісін тіркейді.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Үлгі идентификаторы, мысалы `gratis/hero-dark` |
| `title` | string | Иә | Редакторда көрсетілетін адамға түсінікті үлгі атауы |
| `content` | string | Иә | Үлгіге арналған серияланған блок белгілеуі (HTML) |
| `categories` | array | Жоқ | Үлгі санаттарының slugs мәндері, мысалы `["featured", "hero"]` |
| `description` | string | Жоқ | Үлгі таңдағышында көрсетілетін қысқаша сипаттама |
| `keywords` | array | Жоқ | Іздеу кілт сөздері |

**Қайтарады** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Агент тіркеген барлық блок үлгілерін тізімдейді.

**Параметрлер** — жоқ

**Қайтарады**

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

WordPress сайтының логотипін берілген тіркеме ID-іне немесе қашықтағы кескін URL-іне орнатады. URL берілген кезде, кескін жүктеліп, Media Library ішіне импортталады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | Қолданыстағы Media Library тіркемесінің ID-і |
| `url` | string | No | Импорттап, логотип ретінде орнатуға арналған қашықтағы кескін URL-і |

`attachment_id` немесе `url` мәндерінің бірі берілуі керек.

**Қайтарады** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Белсенді тақырыптың `theme.json` (немесе `global-styles`) файлына атауы бар түс/типография пресетін қолданады. Пресеттерді Gratis AI Agent тобы дайындап, қолдап отырады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Пресет атауы, мысалы `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Егер `true` болса, ауыстырудың орнына қолданыстағы мәндермен біріктіреді. Әдепкі мәні `false` |

**Қолжетімді пресеттер**

| Preset | Description |
|---|---|
| `minimal-dark` | Қараға жақын фон, ақ мәтін, бір акцент түс |
| `warm-editorial` | Жылы ақшыл фон, serif тақырыптар, табиғи реңкті акцент түстер |
| `corporate-blue` | Кәсіби типографиясы бар қою көк және ақ палитра |
| `vibrant-startup` | Ашық градиенттер, дөңгелектелген бұрыштар, заманауи sans-serif қаріп түрі |
| `classic-blog` | Бейтарап сұр түстер, ыңғайлы жол биіктігі, дәстүрлі орналасу аралықтары |

**Қайтарады** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles мүмкіндіктері WordPress Global Styles API арқылы theme.json мәндерін оқиды және жазады, сайт бойынша барлық блоктар мен үлгілерге әсер етеді.

### `get_global_styles` {#getglobalstyles}

Ағымдағы global styles конфигурациясын қайтарады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | Белгілі бір мәнге арналған JSON көрсеткіші, мысалы `/color/palette` немесе `/typography/fontSizes`. Көрсетілмесе, бүкіл нысанды қайтарады. |

**Қайтарады** толық global styles нысанын немесе `path` ішіндегі мәнді.

---

### `set_global_styles` {#setglobalstyles}

Global styles конфигурациясындағы бір немесе бірнеше мәнді жаңартады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | Орнатылатын мәнге арналған JSON көрсеткіші, мысалы `/color/palette` |
| `value` | any | Yes | Жаңа мән |

**Мысал** — палитраға түс қосу

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Қайтарады** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Агент қолданған барлық global styles өзгерістерін бастапқы күйіне келтіріп, тақырыптың әдепкі мәндерін қалпына келтіреді.

**Параметрлер** — жоқ

**Қайтарады** `{ "success": true }`

---

## Навигация мәзірлері {#navigation-menus}

Навигация мәзірі мүмкіндіктері WordPress навигация мәзірлерін және олардың элементтерін жасайды әрі басқарады.

### `create_menu` {#createmenu}

Жаңа WordPress навигация мәзірін жасайды.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Мәзір атауы, мысалы `Primary Navigation` |
| `location` | string | No | Осы мәзір тағайындалатын тақырып орны, мысалы `primary` |

**Қайтарады** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Мәзірдің атын өзгертеді немесе оны тақырып орнына қайта тағайындайды.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | Жаңартылатын мәзірдің ID-і |
| `name` | string | No | Жаңа мәзір атауы |
| `location` | string | No | Тағайындалатын немесе қайта тағайындалатын тақырып орны |

**Қайтарады** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Қолданыстағы навигация мәзіріне элемент қосады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | Мақсатты мәзірдің ID-і |
| `type` | string | Yes | Элемент түрі: `custom`, `post_type` немесе `taxonomy` |
| `title` | string | No | Мәзір элементінің белгісі (`custom` түрі үшін міндетті) |
| `url` | string | No | `custom` элементтеріне арналған URL |
| `object_id` | integer | No | `post_type`/`taxonomy` элементтеріне арналған жазба ID-і немесе термин ID-і |
| `parent_id` | integer | No | Бұл элементті ішіне орналастыруға арналған мәзір элементінің ID-і |
| `position` | integer | No | Мәзірдегі нөлден басталатын орын |

**Қайтарады** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Навигация мәзірінен элементті жояды.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Жойылатын мәзір элементінің ID-і |

**Қайтарады** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Барлық WordPress навигация мәзірлерін, соның ішінде тағайындалған тақырып орындарын тізімдейді.

**Параметрлер** — жоқ

**Қайтарады**

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

## Опцияларды басқару {#options-management}

Опциялар мүмкіндіктері WordPress опцияларын `get_option` / `update_option` арқылы оқиды және жазады. Кірістірілген қауіпсіздік бұғаттау тізімі маңызды баптаулардың байқаусыз өзгертілуіне жол бермейді.

### `get_option` {#getoption}

WordPress опциясын оқиды.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Опция кілті, мысалы `blogname` |

**Қайтарады** `{ "option_name": "blogname", "value": "My Site" }`

Егер `option_name` қауіпсіздік бұғаттау тізімінде болса, қате қайтарады.

---

### `set_option` {#setoption}

WordPress опциясын жазады.

**Параметрлер**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Опция кілті |
| `value` | any | Yes | Жаңа мән (массивтер/нысандар үшін автоматты түрде сериалданады) |
| `autoload` | string | No | `"yes"` немесе `"no"`. Әдепкі бойынша қолданыстағы autoload баптауын сақтайды |

`option_name` қауіпсіздік бұғаттау тізімінде болса, қате қайтарады.

**Қайтарады** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress опциясын жояды.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `option_name` | string | Иә | Жойылатын опция кілті |

`option_name` қауіпсіздік бұғаттау тізімінде болса, қате қайтарады.

**Қайтарады** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Үлгіге сәйкес келетін WordPress опцияларын тізімдейді.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `pattern` | string | Жоқ | Опция атауларын сүзуге арналған SQL LIKE үлгісі, мысалы `gratis_%`. Көрсетілмесе, барлық опцияларды қайтарады (үлкен дерекқорларда сақтықпен пайдаланыңыз). |
| `limit` | integer | Жоқ | Нәтижелердің ең көп саны. Әдепкі `50`, ең көбі `500` |

**Қайтарады**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Контентті басқару {#content-management}

Контентті басқару мүмкіндіктері WordPress жазбалары мен беттерін жасайды және өңдейді. Жазба ID-лері қайтарылады, сондықтан көп мүмкіндікті жоспарлардағы кейінгі қадамдар жасалған контентке сілтеме жасай алады.

### `create_post` {#createpost}

Жаңа WordPress жазбасын, бетін немесе реттелмелі жазба түрі жазбасын жасайды.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `title` | string | Иә | Жазба тақырыбы |
| `content` | string | Жоқ | Жазба мәтіні — қарапайым мәтінді, HTML-ды немесе серияланған блок белгілеуін қабылдайды |
| `status` | string | Жоқ | `draft`, `publish`, `pending`, `private`. Әдепкі `draft` |
| `post_type` | string | Жоқ | Жазба түрінің slug-ы, мысалы `post`, `page` немесе кез келген тіркелген CPT. Әдепкі `post` |
| `excerpt` | string | Жоқ | Архивтерде және іздеу нәтижелерінде көрсетілетін қысқа түйіндеме |
| `categories` | array | Жоқ | Тағайындалатын санат атауларының немесе ID-лерінің массиві |
| `tags` | array | Жоқ | Тағайындалатын тег атауларының немесе ID-лерінің массиві |
| `author` | integer | Жоқ | Жазба авторы ретінде орнатылатын WordPress пайдаланушы ID-і. Әдепкі бойынша ағымдағы пайдаланушы |
| `date` | string | Жоқ | ISO 8601 пішіміндегі жариялау күні, мысалы `2026-05-01T09:00:00` |
| `page_template` | string | Жоқ | Осы жазбаға немесе бетке тағайындалатын үлгі файлы, мысалы `page-full-width.php`. `post_type` мәні `page` болғанда немесе бет үлгілерін қолдайтын CPT болғанда ғана мәнді. |

**Мысал**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Қайтарады** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Бар WordPress жазбасын немесе бетін жаңартады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `post_id` | integer | Иә | Жаңартылатын жазбаның ID-і |
| `title` | string | Жоқ | Жаңа жазба тақырыбы |
| `content` | string | Жоқ | Жаңа жазба мәтіні |
| `status` | string | Жоқ | Жаңа күй: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Жоқ | Жаңа үзінді |
| `categories` | array | Жоқ | Толық санат тізімін осы атаулар немесе ID-лер массивімен ауыстыру |
| `tags` | array | Жоқ | Толық тег тізімін осы атаулар немесе ID-лер массивімен ауыстыру |
| `page_template` | string | Жоқ | Осы жазбаға немесе бетке тағайындалатын жаңа үлгі файлы, мысалы `page-full-width.php`. Үлгі тағайындауын алып тастап, тақырыптың әдепкі мәніне қайтару үшін бос жолды беріңіз. |

**Мысал** — жасалғаннан кейін үлгіні өзгерту

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Қайтарады** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Бір мүмкіндікті шақыруда бірнеше жазба жасайды, сайт құру немесе контентті жаппай импорттау кезінде айналымдарды азайтады. Жазбалар ретімен жасалады; біреуі сәтсіз болса, қалғандары жалғасады және сәтсіздік нәтижелер массивінде хабарланады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `posts` | array | Иә | Әрқайсысы `create_post` сияқты бірдей параметрлерді қабылдайтын жазба нысандарының массиві |
| `stop_on_error` | boolean | Жоқ | `true` болса, бірінші сәтсіздіктен кейін өңдеуді тоқтату. Әдепкі `false` |

**Мысал**

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

**Қайтарады**

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

Бар жазбаға немесе бетке ерекшеленген суретті (жазба нобайын) тағайындайды. Бар Media Library тіркеме ID-ін немесе қашықтағы сурет URL-ын қабылдайды; URL берілгенде, сурет автоматты түрде жүктеліп, импортталады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `post_id` | integer | Иә | Жаңартылатын жазбаның немесе беттің ID-і |
| `attachment_id` | integer | Жоқ | Бар Media Library тіркемесінің ID-і |
| `url` | string | Жоқ | Импортталып, ерекшеленген сурет ретінде орнатылатын қашықтағы сурет URL-ы |
| `alt_text` | string | Жоқ | Егер URL-дан импортталса, тіркемеге қолданылатын балама мәтін |

`attachment_id` немесе `url` екеуінің бірі берілуі керек.

**Қайтарады** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Белсенді форма plugin-ін (орнатылғанына қарай Contact Form 7, WPForms, Fluent Forms немесе Gravity Forms) пайдаланып байланыс формасын жасайды. Кез келген жазбаға немесе бетке енгізуге болатын shortcode қайтарады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `title` | string | Иә | Форма plugin әкімшілігінде көрсетілетін форма атауы |
| `fields` | array | Иә | Форма өрістерінің реттелген тізімі (төмендегі өріс объектісін қараңыз) |
| `recipient` | string | Жоқ | Жіберілімдерді қабылдайтын email мекенжайы. Әдепкі мәні — WordPress әкімшісінің email мекенжайы |
| `subject` | string | Жоқ | Email тақырып жолы. Contact Form 7 пайдаланғанда `[your-name]` және `[your-subject]` орынбасарларын қолдайды |
| `confirmation_message` | string | Жоқ | Сәтті жіберілгеннен кейін көрсетілетін хабарлама. Әдепкі мәні: `"Thank you for your message. We'll be in touch soon."` |

**Өріс объектісі**

| Кілт | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `name` | string | Иә | Ішкі өріс атауы / машиналық кілт |
| `label` | string | Иә | Формада көрсетілетін адамға түсінікті белгі |
| `type` | string | Иә | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Жоқ | Жіберер алдында өрісті толтыру міндетті ме. Әдепкі мәні `false` |
| `options` | array | Жоқ | `select`, `checkbox` және `radio` өрістеріне арналған опциялар |
| `placeholder` | string | Жоқ | Мәтін түріндегі енгізулерге арналған орынбасар мәтін |

**Мысал**

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

**Қайтарады**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Көрнекі шолу {#visual-review}

Көрнекі шолу мүмкіндіктері агентке тірі беттердің скриншоттарын түсіріп, оларды талдауға мүмкіндік береді; бұл браузер кеңейтімін қажет етпей, автономды дизайн шолуын, бұрын/кейін салыстыруларын және көрнекі регрессия тексерулерін іске қосады.

### `capture_screenshot` {#capturescreenshot}

Сервер жағындағы headless browser арқылы берілген URL мекенжайындағы WordPress бетінің скриншотын түсіреді. Сурет Media Library ішіне сақталады және CDN URL қайтарылады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `url` | string | Иә | Скриншот түсірілетін беттің толық URL мекенжайы, мысалы `https://example.com/about/` |
| `width` | integer | Жоқ | Viewport ені, пиксельмен. Әдепкі мәні `1280` |
| `height` | integer | Жоқ | Viewport биіктігі, пиксельмен. Әдепкі мәні `800` |
| `full_page` | boolean | Жоқ | Тек viewport орнына толық айналдырылатын бетті түсіру. Әдепкі мәні `false` |
| `delay_ms` | integer | Жоқ | Бет жүктелгеннен кейін түсіруге дейін күту уақыты, миллисекундпен; анимацияланған мазмұн үшін пайдалы. Әдепкі мәні `500` |
| `label` | string | Жоқ | Media Library ішіндегі тіркемемен бірге сақталатын адамға түсінікті белгі |

**Қайтарады**

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

Екі скриншотты алып, өзгерген аймақтарды ерекшелейтін diff суретімен бірге көрнекі diff ұпайын қайтарады. Дизайн өзгерісі күтілген нәтижені бергенін растау немесе байқаусыз регрессияларды анықтау үшін пайдалы.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `before_url` | string | Иә | "Бұрынғы" күй ретінде түсірілетін беттің URL мекенжайы |
| `after_url` | string | Иә | "Кейінгі" күй ретінде түсірілетін беттің URL мекенжайы. Уақыт бойынша салыстырса, сол бір URL болуы мүмкін |
| `width` | integer | Жоқ | Екі түсірілімге арналған viewport ені. Әдепкі мәні `1280` |
| `threshold` | float | Жоқ | Пиксель айырмашылығының шегі (0.0–1.0). Осы төзімділік шегіндегі пиксельдер өзгермеген деп есептеледі. Әдепкі мәні `0.1` |

**Қайтарады**

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

`diff_score` мәні `0.0` болса, көрінетін өзгеріс жоқ дегенді білдіреді; `1.0` болса, әрбір пиксель өзгергенін білдіреді.

---

### `review_page_design` {#reviewpagedesign}

Беттің скриншотын түсіріп, көрнекі талдау үшін оны тілдік модельге жібереді. Орналасу, типография, түс қолдану және қолжетімділік мәселелерін қамтитын құрылымдалған бағалауды қайтарады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `url` | string | Иә | Шолынатын беттің толық URL мекенжайы |
| `focus` | string | Жоқ | Ерекше назар аударылатын шолу салаларының үтірмен бөлінген тізімі: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Әдепкі мәні: барлық салалар |
| `width` | integer | Жоқ | Viewport ені. Әдепкі мәні `1280` |

**Қайтарады**

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

## Орнатылатын мүмкіндіктер {#installable-abilities}

Орнатылатын мүмкіндіктер тізілімі агентті WordPress plugin ретінде таратылатын қосымша мүмкіндік пакеттерімен кеңейтуге мүмкіндік береді. Әр пакет стандартты мүмкіндік API арқылы бір немесе бірнеше мүмкіндікті тіркейді.

### `list_available_abilities` {#listavailableabilities}

Тізілімнен орнатуға қолжетімді мүмкіндік пакеттерінің каталогын қайтарады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `category` | string | Жоқ | Санат бойынша сүзу: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Қайтарады**

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

Тізілімнен мүмкіндіктер бумасын жүктеп алып, белсендіреді.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `slug` | string | Иә | Мүмкіндіктер бумасы плагинінің slug-ы |

**Қайтарады** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Сипатталған пайдалану жағдайы үшін ең жақсы плагинді табу мақсатында мүмкіндіктер тізілімін сұрайды және, қажет болса, оны орнатады.

**Параметрлер**

| Параметр | Түрі | Міндетті | Сипаттама |
|---|---|---|---|
| `description` | string | Иә | Қажетті функционалдылықтың табиғи тілдегі сипаттамасы |
| `install` | boolean | Жоқ | Егер `true` болса, ұсынылған плагинді бірден орнатады. Әдепкі мәні `false` |

**Мысал**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Қайтарады**

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
