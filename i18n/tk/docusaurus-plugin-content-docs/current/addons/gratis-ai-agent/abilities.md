---
title: Ukyplar boýunça maglumatnama
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Başarnyklar salgylanmasy {#abilities-reference}

Başarnyklar Gratis AI Agent-iň siziň WordPress gurnamaňyzda çagyryp bilýän atomik hereketleridir. Her başarnyk JSON shemasyny açýan hasaba alnan PHP klasydyr — agent ýerine ýetirilýän wagtynda haýsy parametrleriň gerekdigini we başarnygyň näme gaýtarýandygyny düşünmek üçin bu shemany okaýar.

Bu sahypa Gratis AI Agent v1.9.0 bilen gelýän ähli başarnyklary resminamalaşdyrýar.

---

## Custom Post Types {#custom-post-types}

Bu başarnyklar agent arkaly hasaba alnan ýörite ýazgy görnüşlerini (CPTs) dolandyrýar. Hasaba almalar WordPress sazlamalar jedwelinde saklanýar, şonuň üçin olar plugin öçürilenden we täzeden işjeňleşdirilenden soň hem saklanyp galýar.

### `register_post_type` {#registerposttype}

Täze ýörite ýazgy görnüşini hasaba alýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ýazgy görnüşiniň açary (iň köp 20 nyşan, baş harp ýok, boşluk ýok) |
| `singular_label` | string | Yes | Adam tarapyndan okalýan birlik ady, meselem `Portfolio Item` |
| `plural_label` | string | Yes | Adam tarapyndan okalýan köplük ady, meselem `Portfolio Items` |
| `public` | boolean | No | Ýazgy görnüşiniň köpçülige elýeterlidigini görkezýär. Bellenen baha `true` |
| `supports` | array | No | Goldanmaly aýratynlyklar: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Bellenen baha `["title","editor"]` |
| `has_archive` | boolean | No | Ýazgy görnüşiniň arhiw sahypasynyň işledilendigini görkezýär. Bellenen baha `false` |
| `menu_icon` | string | No | Admin menýu nyşany üçin Dashicons klasy ýa-da URL. Bellenen baha `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | Ýazgy görnüşi üçin URL slug. Bellenen ýagdaýda `slug` ulanylýar |

**Mysal**

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

**Gaýtarýar** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Agent tarapyndan hasaba alnan ähli ýörite ýazgy görnüşlerini gaýtarýar.

**Parametrler** — ýok

**Gaýtarýar**

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

Agent tarapyndan öň hasaba alnan ýörite ýazgy görnüşiniň hasaba alnyşyny aýyrýar. Şol görnüşdäki bar bolan ýazgylar maglumatlar bazasynda galýar, ýöne indi ýazgy görnüşi arkaly elýeterli bolmaýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Aýrylmaly ýazgy görnüşiniň açary |

**Gaýtarýar** `{ "success": true, "slug": "portfolio" }`

---

## Custom Taxonomies {#custom-taxonomies}

Bu başarnyklar ýörite taksonomiýalary dolandyrýar. CPTs ýaly, taksonomiýa hasaba almalary hem saklanyp galýar.

### `register_taxonomy` {#registertaxonomy}

Täze ýörite taksonomiýany hasaba alýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonomiýa açary (iň köp 32 nyşan) |
| `singular_label` | string | Yes | Adam tarapyndan okalýan birlik ady, meselem `Project Category` |
| `plural_label` | string | Yes | Adam tarapyndan okalýan köplük ady, meselem `Project Categories` |
| `post_types` | array | Yes | Bu taksonomiýanyň birikdirilmeli ýazgy görnüşleriniň slug-lary |
| `hierarchical` | boolean | No | Kategoriýa görnüşi üçin `true`, bellik görnüşi üçin `false`. Bellenen baha `true` |
| `public` | boolean | No | Terminleriň köpçülige elýeterlidigini görkezýär. Bellenen baha `true` |
| `rewrite_slug` | string | No | Taksonomiýa üçin URL slug. Bellenen ýagdaýda `slug` ulanylýar |

**Mysal**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Gaýtarýar** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Agent tarapyndan hasaba alnan ähli ýörite taksonomiýalary gaýtarýar.

**Parametrler** — ýok

**Gaýtarýar**

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

Agent tarapyndan öň hasaba alnan ýörite taksonomiýanyň hasaba alnyşyny aýyrýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Aýrylmaly taksonomiýa açary |

**Gaýtarýar** `{ "success": true, "slug": "project-category" }`

---

## Dizaýn ulgamy {#design-system}

Dizaýn ulgamynyň başarnyklary WordPress saýtynyň wizual görkezilişini üýtgedýär — ýörite CSS-den blok nusgalaryna we saýtyň logosyna çenli.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` arkaly saýtyň `<head>` bölegine CSS goşýar. CSS `gratis_ai_agent_custom_css` sazlamasynda saklanýar we başarnyk täzeden sazlananda arassa görnüşde nobatdan aýrylýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Goşmak üçin dogry CSS |
| `label` | string | No | Bu CSS blogy üçin adam tarapyndan okalýan bellik, debug gündeliklerinde ulanylýar. Bellenen baha `"agent-injected"` |
| `replace` | boolean | No | Eger `true` bolsa, öň goşulan ähli CSS-i çalyşýar. Bellenen baha `false` (goşýar) |

**Mysal**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Gaýtarýar** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress nusga kitaphanasynda gaýtadan ulanyp bolýan blok nusgasyny hasaba alýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Nusga identifikatory, meselem `gratis/hero-dark` |
| `title` | string | Yes | Redaktorda görkezilýän adam tarapyndan okalýan nusga ady |
| `content` | string | Yes | Nusga üçin serializlenen blok belliklemesi (HTML) |
| `categories` | array | No | Nusga kategoriýa slug-lary, meselem `["featured", "hero"]` |
| `description` | string | No | Nusga saýlaýjyda görkezilýän gysga düşündiriş |
| `keywords` | array | No | Gözleg açar sözleri |

**Gaýtarýar** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Agent tarapyndan hasaba alnan ähli blok nusgalaryny sanap görkezýär.

**Parametrler** — ýok

**Gaýtaryp berýär**

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

WordPress saýt logosyny berlen attachment ID-ä ýa-da uzakdaky surat URL-ine belleýär. URL berilende, surat göçürilip alynýar we Media Library içine import edilýär.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `attachment_id` | integer | Ýok | Bar bolan Media Library goşundysynyň ID-si |
| `url` | string | Ýok | Import etmek we logo hökmünde bellemek üçin uzakdaky surat URL-i |

`attachment_id` ýa-da `url` parametrleriniň biri berilmelidir.

**Gaýtaryp berýär** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Işjeň theme-niň `theme.json` (ýa-da `global-styles`) faýlyna atlandyrylan reňk/tipografiýa öňünden sazlamasyny ulanýar. Öňünden sazlamalar Gratis AI Agent topary tarapyndan taýýarlanan we saklanylýan toplumlar.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `preset` | string | Hawa | Öňünden sazlama ady, mysal üçin `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Ýok | `true` bolsa, çalyşmagyň ýerine bar bolan bahalar bilen birleşdirýär. Deslapky `false` |

**Elýeterli öňünden sazlamalar**

| Öňünden sazlama | Düşündiriş |
|---|---|
| `minimal-dark` | Gara diýen ýaly fon, ak tekst, ýeke aksent reňki |
| `warm-editorial` | Ýyly akymtyl fon, serif sözbaşylar, tebigy aksent reňkleri |
| `corporate-blue` | Professional tipografiýa bilen goýy gök we ak palitra |
| `vibrant-startup` | Ýagty gradientler, tegelek burçlar, häzirki zaman sans-serif şrift görnüşi |
| `classic-blog` | Bitarap çal reňkler, amatly setir beýikligi, däp bolan ýerleşiş aralyklary |

**Gaýtaryp berýär** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles mümkinçilikleri WordPress Global Styles API arkaly theme.json bahalaryny okaýar we ýazýar, saýt boýunça ähli bloklara we şablonlara täsir edýär.

### `get_global_styles` {#getglobalstyles}

Häzirki global stiller konfigurasiýasyny gaýtaryp berýär.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `path` | string | Ýok | Belli bir baha üçin JSON görkezijisi, mysal üçin `/color/palette` ýa-da `/typography/fontSizes`. Goýberilse, tutuş obýekti gaýtaryp berýär. |

**Gaýtaryp berýär** doly global stiller obýektini ýa-da `path` boýunça bahany.

---

### `set_global_styles` {#setglobalstyles}

Global stiller konfigurasiýasynda bir ýa-da birnäçe bahany täzeleýär.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `path` | string | Hawa | Bellenmeli baha üçin JSON görkezijisi, mysal üçin `/color/palette` |
| `value` | any | Hawa | Täze baha |

**Mysal** — palitra reňk goşmak

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Gaýtaryp berýär** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Agent tarapyndan ulanylan ähli global stil üýtgetmelerini täzeden sazlap, theme-niň deslapky bahalaryny dikeldýär.

**Parametrler** — ýok

**Gaýtaryp berýär** `{ "success": true }`

---

## Nawigasiýa menýulary {#navigation-menus}

Nawigasiýa menýusy mümkinçilikleri WordPress nav menýularyny we olaryň elementlerini döredýär hem-de dolandyrýar.

### `create_menu` {#createmenu}

Täze WordPress nawigasiýa menýusyny döredýär.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `name` | string | Hawa | Menýu ady, mysal üçin `Primary Navigation` |
| `location` | string | Ýok | Bu menýuny bellemek üçin theme ýerleşişi, mysal üçin `primary` |

**Gaýtaryp berýär** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Menýunyň adyny üýtgedýär ýa-da ony theme ýerleşişine gaýtadan belleýär.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `menu_id` | integer | Hawa | Täzelenmeli menýunyň ID-si |
| `name` | string | Ýok | Täze menýu ady |
| `location` | string | Ýok | Bellemek ýa-da gaýtadan bellemek üçin theme ýerleşişi |

**Gaýtaryp berýär** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Bar bolan nawigasiýa menýusyna element goşýar.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `menu_id` | integer | Hawa | Maksat menýunyň ID-si |
| `type` | string | Hawa | Element görnüşi: `custom`, `post_type` ýa-da `taxonomy` |
| `title` | string | Ýok | Menýu elementi üçin bellik (`custom` görnüşi üçin talap edilýär) |
| `url` | string | Ýok | `custom` elementleri üçin URL |
| `object_id` | integer | Ýok | `post_type`/`taxonomy` elementleri üçin ýazgy ID-si ýa-da termin ID-si |
| `parent_id` | integer | Ýok | Bu elementi içinde ýerleşdirmek üçin menýu elementiniň ID-si |
| `position` | integer | Ýok | Menýudaky noldan başlanýan orun |

**Gaýtaryp berýär** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Nawigasiýa menýusyndan elementi aýyrýar.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `item_id` | integer | Hawa | Aýrylmaly menýu elementiniň ID-si |

**Gaýtaryp berýär** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Bellenen theme ýerleşişleri bilen bilelikde ähli WordPress nawigasiýa menýularyny sanap berýär.

**Parametrler** — ýok

**Gaýtaryp berýär**

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

## Options dolandyryşy {#options-management}

Options mümkinçilikleri WordPress options-laryny `get_option` / `update_option` arkaly okaýar we ýazýar. Içinde gurlan howpsuzlyk blok sanawy möhüm sazlamalaryň tötänleýin üýtgedilmeginiň öňüni alýar.

### `get_option` {#getoption}

WordPress option-yny okaýar.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `option_name` | string | Hawa | Option açary, mysal üçin `blogname` |

**Gaýtaryp berýär** `{ "option_name": "blogname", "value": "My Site" }`

Eger `option_name` howpsuzlyk blok sanawynda bolsa, ýalňyşlyk gaýtaryp berýär.

---

### `set_option` {#setoption}

WordPress option-yny ýazýar.

**Parametrler**

| Parametr | Görnüşi | Talap edilýär | Düşündiriş |
|---|---|---|---|
| `option_name` | string | Hawa | Option açary |
| `value` | any | Hawa | Täze baha (massiwler/obýektler üçin awtomatiki serializasiýa edilýär) |
| `autoload` | string | Ýok | `"yes"` ýa-da `"no"`. Deslapky ýagdaý bar bolan autoload sazlamasyny saklaýar |

Eger `option_name` howpsuzlyk blok sanawynda bolsa, ýalňyşlyk gaýtarýar.

**Gaýtarýar** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress opsiýasyny pozýar.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `option_name` | string | Hawa | Pozulmaly opsiýa açary |

Eger `option_name` howpsuzlyk blok sanawynda bolsa, ýalňyşlyk gaýtarýar.

**Gaýtarýar** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Nusga gabat gelýän WordPress opsiýalaryny sanap görkezýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `pattern` | string | Ýok | Opsiýa atlaryny süzmek üçin SQL LIKE nusgasy, meselem `gratis_%`. Goýberilse, ähli opsiýalary gaýtarýar (uly maglumat bazalarynda seresap ulanyň). |
| `limit` | integer | Ýok | Netijeleriň iň ýokary sany. Deslapky `50`, iň köp `500` |

**Gaýtarýar**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Mazmun Dolandyryşy {#content-management}

Mazmun Dolandyryşy mümkinçilikleri WordPress ýazgylaryny we sahypalaryny döredýär hem-de redaktirleýär. Ýazgy ID-leri gaýtarylýar, şonuň üçin köp mümkinçilikli meýilnamalarda soňraky ädimler döredilen mazmuna salgylanyp biler.

### `create_post` {#createpost}

Täze WordPress ýazgysyny, sahypasyny ýa-da ýörite ýazgy görnüşiniň ýazgysyny döredýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `title` | string | Hawa | Ýazgy ady |
| `content` | string | Ýok | Ýazgy göwresi — ýönekeý tekst, HTML ýa-da seriallaşdyrylan blok belliklerini kabul edýär |
| `status` | string | Ýok | `draft`, `publish`, `pending`, `private`. Deslapky `draft` |
| `post_type` | string | Ýok | Ýazgy görnüşiniň slug-y, meselem `post`, `page` ýa-da islendik bellige alnan CPT. Deslapky `post` |
| `excerpt` | string | Ýok | Arhiwlerde we gözleg netijelerinde görkezilýän gysgaça mazmun |
| `categories` | array | Ýok | Bellenilmeli kategoriýa atlarynyň ýa-da ID-leriniň massiwi |
| `tags` | array | Ýok | Bellenilmeli bellik atlarynyň ýa-da ID-leriniň massiwi |
| `author` | integer | Ýok | Ýazgynyň awtory hökmünde bellenmeli WordPress ulanyjy ID-si. Deslapky häzirki ulanyjy |
| `date` | string | Ýok | ISO 8601 formatyndaky çap ediş senesi, meselem `2026-05-01T09:00:00` |
| `page_template` | string | Ýok | Bu ýazga ýa-da sahypa bellenilmeli şablon faýly, meselem `page-full-width.php`. Diňe `post_type` `page` bolanda ýa-da sahypa şablonlaryny goldaýan CPT bolanda manylydyr. |

**Mysal**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Gaýtarýar** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Bar bolan WordPress ýazgysyny ýa-da sahypasyny täzelýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `post_id` | integer | Hawa | Täzelenmeli ýazgynyň ID-si |
| `title` | string | Ýok | Täze ýazgy ady |
| `content` | string | Ýok | Täze ýazgy göwresi |
| `status` | string | Ýok | Täze ýagdaý: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Ýok | Täze gysgaça mazmun |
| `categories` | array | Ýok | Doly kategoriýa sanawyny şu atlar ýa-da ID-ler massiwi bilen çalşyň |
| `tags` | array | Ýok | Doly bellik sanawyny şu atlar ýa-da ID-ler massiwi bilen çalşyň |
| `page_template` | string | Ýok | Bu ýazga ýa-da sahypa bellenilmeli täze şablon faýly, meselem `page-full-width.php`. Şablon bellenmesini aýyrmak we theme deslapkysyna dolanmak üçin boş setir geçiriň. |

**Mysal** — döredilenden soň şablony üýtgetmek

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Gaýtarýar** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Bir mümkinçilik çagyryşynda birnäçe ýazgy döredýär, site gurulanda ýa-da köpçülikleýin mazmun import edilende gidip-gelme çagyryşlaryny azaldýar. Ýazgylar yzygiderli döredilýär; biri şowsuz bolsa, beýlekiler dowam edýär we şowsuzlyk netijeler massiwinde habar berilýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `posts` | array | Hawa | Ýazgy obýektleriniň massiwi, her biri `create_post` bilen birmeňzeş parametrleri kabul edýär |
| `stop_on_error` | boolean | Ýok | Eger `true` bolsa, ilkinji şowsuzlykdan soň işläp bejermegi duruz. Deslapky `false` |

**Mysal**

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

**Gaýtarýar**

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

Bar bolan ýazga ýa-da sahypa saýlanan şekili (ýazgy kiçi şekili) belleýär. Bar bolan Media Library attachment ID-sini ýa-da uzakdaky şekil URL-ni kabul edýär; URL berilende, şekil awtomatiki göçürilip alynýar we import edilýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `post_id` | integer | Hawa | Täzelenmeli ýazgynyň ýa-da sahypanyň ID-si |
| `attachment_id` | integer | Ýok | Bar bolan Media Library attachment ID-si |
| `url` | string | Ýok | Import edilip, saýlanan şekil hökmünde bellenilmeli uzakdaky şekil URL-si |
| `alt_text` | string | Ýok | Eger URL-den import edilse, attachment-e ulanylmaly alt teksti |

`attachment_id` ýa-da `url` birisi berilmelidir.

**Gaýtarýar** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Gurnalan görnüşine baglylykda işjeň forma plugin-i (Contact Form 7, WPForms, Fluent Forms ýa-da Gravity Forms) ulanyp, habarlaşma formasyny döredýär. Islendik ýazga ýa-da sahypa ýerleşdirilip bilinýän shortcode gaýtarýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Form plugin admin-da görkezilýän formanyň ady |
| `fields` | array | Yes | Forma meýdanlarynyň tertipli sanawy (aşakdaky meýdan obýektine serediň) |
| `recipient` | string | No | Iberilenleri kabul etmek üçin email salgy. Deslapky ýagdaýda WordPress admin email ulanylýar |
| `subject` | string | No | Email mowzuk setiri. Contact Form 7 ulanylanda `[your-name]` we `[your-subject]` ýer tutujylaryny goldaýar |
| `confirmation_message` | string | No | Üstünlikli iberilenden soň görkezilýän habar. Deslapky: `"Thank you for your message. We'll be in touch soon."` |

**Meýdan obýekti**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Içerki meýdan ady / maşyn açary |
| `label` | string | Yes | Formada görkezilýän adam okap bilýän bellik |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Ibermezden öň meýdanyň doldurylmalydygy. Deslapky `false` |
| `options` | array | No | `select`, `checkbox` we `radio` meýdanlary üçin opsiýalar |
| `placeholder` | string | No | Tekst görnüşli girişler üçin ýer tutujy tekst |

**Mysal**

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

**Gaýtarylýanlar**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Wizual gözden geçiriş {#visual-review}

Wizual gözden geçiriş mümkinçilikleri agent-e janly sahypalaryň ekran suratlaryny almaga we olary seljermäge mümkinçilik berýär, şeýlelikde brauzer giňeltmesini talap etmezden awtonom dizaýn gözden geçirişini, öň/soň deňeşdirmelerini we wizual regressiýa barlaglaryny üpjün edýär.

### `capture_screenshot` {#capturescreenshot}

Serwer tarapyndaky headless brauzer ulanyp, berlen URL-däki WordPress sahypasynyň ekran suratyny alýar. Surat Media Library-e saklanýar we CDN URL gaýtarylýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Ekran suraty alynjak sahypanyň doly URL-si, mysal üçin `https://example.com/about/` |
| `width` | integer | No | Görnüş penjiresiniň piksel boýunça giňligi. Deslapky `1280` |
| `height` | integer | No | Görnüş penjiresiniň piksel boýunça beýikligi. Deslapky `800` |
| `full_page` | boolean | No | Diňe görnüş penjiresiniň ýerine doly aýlanyp bolýan sahypany al. Deslapky `false` |
| `delay_ms` | integer | No | Sahypa ýüklenenden soň almazdan öň garaşylmaly millisekuntlar, animasiýaly mazmun üçin peýdaly. Deslapky `500` |
| `label` | string | No | Media Library-de goşundy bilen saklanýan adam okap bilýän bellik |

**Gaýtarylýanlar**

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

Iki ekran suratyny alýar we üýtgän sebitleri görkezýän diff suraty bilen birlikde wizual diff balyny gaýtarýar. Dizaýn üýtgeşmesiniň garaşylýan netijäni berendigini tassyklamak ýa-da göz öňünde tutulmadyk regressiýalary ýüze çykarmak üçin peýdaly.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | "Öňki" ýagdaý hökmünde almak üçin sahypanyň URL-si |
| `after_url` | string | Yes | "Soňky" ýagdaý hökmünde almak üçin sahypanyň URL-si. Wagt boýunça deňeşdirilýän bolsa şol bir URL bolup biler |
| `width` | integer | No | Iki alnyş üçin hem görnüş penjiresiniň giňligi. Deslapky `1280` |
| `threshold` | float | No | Piksel tapawudy çägi (0.0–1.0). Bu çydamlylygyň içindäki pikseller üýtgemedik hasaplanýar. Deslapky `0.1` |

**Gaýtarylýanlar**

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

`diff_score`-yň `0.0` bolmagy görünýän üýtgeşmäniň ýokdugyny aňladýar; `1.0` her pikseliň üýtgändigini aňladýar.

---

### `review_page_design` {#reviewpagedesign}

Sahypanyň ekran suratyny alýar we wizual seljeriş üçin ony dil modeline iberýär. Ýerleşim, tipografiýa, reňk ulanylyşy we elýeterlilik aladalaryny öz içine alýan gurluşly baha gaýtarýar.

**Parametrler**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Gözden geçiriljek sahypanyň doly URL-si |
| `focus` | string | No | Üns berilmeli gözden geçiriş ugurlarynyň otur bilen aýrylan sanawy: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Deslapky: ähli ugurlar |
| `width` | integer | No | Görnüş penjiresiniň giňligi. Deslapky `1280` |

**Gaýtarylýanlar**

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

## Gurnap bolýan mümkinçilikler {#installable-abilities}

Gurnap bolýan mümkinçilikler reýestri agent-i WordPress plugin-leri hökmünde paýlanylýan goşmaça mümkinçilik bukjalary bilen giňeltmäge mümkinçilik berýär. Her bukja standart mümkinçilik API-sini ulanyp bir ýa-da birnäçe mümkinçilik bellige alýar.

### `list_available_abilities` {#listavailableabilities}

Reýestrden gurnamak üçin elýeterli mümkinçilik bukjalarynyň katalogyny gaýtarýar.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `category` | string | Ýok | Kategoriýa boýunça süz: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Gaýtarýar**

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

Registrden ability paketini ýükläp alýar we işjeňleşdirýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `slug` | string | Hawa | Ability paketi plugin slugy |

**Gaýtarýar** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Beýan edilen ulanyş ýagdaýy üçin iň gowy plugini tapmak we, islege görä, ony gurmak üçin ability registrine ýüzlenýär.

**Parametrler**

| Parametr | Görnüş | Hökmany | Düşündiriş |
|---|---|---|---|
| `description` | string | Hawa | Islenýän funksionallygyň tebigy dilde beýan edilmesi |
| `install` | boolean | Ýok | Eger `true` bolsa, maslahat berlen plugini derrew gurýar. Deslapky `false` |

**Mysal**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Gaýtarýar**

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
