---
title: Verwysings van Vermogens
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Vermogensreferens

Vermogens is die atome aksies wat Gratis AI Agent op jou WordPress-installasie kan oproep. Elke vermoë is 'n geregistreerde PHP-klas wat 'n JSON skema blootstel — die agent lees hierdie skema tydens die uitvoering om te verstaan watter parameters nodig is en wat die vermoë teruggee.

Hierdie bladsy dokumenteer alle vermogens wat saam met Gratis AI Agent v1.9.0 verskaf word.

---

## Spesiale Posttipes (Custom Post Types)

Hierdie vermogens bestuur spesiale posttipes (CPTs) wat deur die agent geregistreer is. Registrasies word aan die WordPress opsie-tafel behou sodat hulle oor plugin-deaktivering en heraktivering bly.

### `register_post_type`

Registreer 'n nuwe spesiale posttipe.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Die posttipe sleutel (maks. 20 karakters, geen hoofletters nie, geen spasies nie) |
| `singular_label` | string | Ja | Mensleerbare enkelnaam, bv. `Portfolio Item` |
| `plural_label` | string | Ja | Mensleerbare meervoudnaam, bv. `Portfolio Items` |
| `public` | boolean | Nee | Of die posttipe publiek toeganklik is. Standaard `true` |
| `supports` | array | Nee | Funksies wat ondersteun word: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standaard `["title","editor"]` |
| `has_archive` | boolean | Nee | Of 'n posttipe arkiefbladsy ingesluit is. Standaard `false` |
| `menu_icon` | string | Nee | Dashicons klas of URL vir die admin-menu-ikoon. Standaard `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nee | Die URL-sleutel vir die posttipe. Standaard `slug` |

**Voorbeeld**

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

**Teruggee** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Gee alle spesiale posttipes terug wat deur die agent geregistreer is.

**Parameters** — geen

**Teruggee**

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

Onregistreer 'n spesiale posttipe wat voorheen deur die agent geregistreer is. Beste posts van daardie tipe bly in die database, maar is nie meer via die posttipe toeganklik nie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Die posttipe sleutel om te verwyder |

**Teruggee** `{ "success": true, "slug": "portfolio" }`

---

## Spesiale Taksonemies (Custom Taxonomies)

Hierdie vermogens bestuur spesiale taksonemies. Soos CPT's word taksonemiese registrasies behou.

### `register_taxonomy`

Registreer 'n nuwe spesiale taksonomie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Die taksonomiese sleutel (maks. 32 karakters) |
| `singular_label` | string | Ja | Mensleerbare enkelnaam, bv. `Project Category` |
| `plural_label` | string | Ja | Mensleerbare meervoudnaam, bv. `Project Categories` |
| `post_types` | array | Ja | Posttipe-sleutels waaraan hierdie taksonomie gekoppel moet word |
| `hierarchical` | boolean | Nee | `true` vir kategorie-styl, `false` vir tag-styl. Standaard `true` |
| `public` | boolean | Nee | Of terme publiek toeganklik is. Standaard `true` |
| `rewrite_slug` | string | Nee | Die URL-sleutel vir die taksonomie. Standaard `slug` |

**Voorbeeld**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Teruggee** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Gee alle spesiale taksonemies terug wat deur die agent geregistreer is.

**Parameters** — geen

**Teruggee**

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

Onregistreer 'n spesiale taksonomie wat voorheen deur die agent geregistreer is.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Die taksonomiese sleutel om te verwyder |

**Teruggee** `{ "success": true, "slug": "project-category" }`

---

## Ontwerpstelsel (Design System)

Ontwerpstelsel vermogens wys die visuele vertoning van die WordPress-werf — van spesifieke CSS tot blokpatrone en die webwerf se logo.

### `inject_custom_css`

Voeg CSS aan die `<head>` van die werf by via `wp_add_inline_style`. CSS word in die opsie `gratis_ai_agent_custom_css` gestoor en skoon verwyder wanneer die vermoë hergeset word.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `css` | string | Ja | Geldige CSS om in te voeg |
| `label` | string | Nee | Mensleerbare etikette vir hierdie CSS-blok, gebruik in debug-logs. Standaard `"agent-injected"` |
| `replace` | boolean | Nee | Indien `true`, vervang dit alle voorheen ingevoegde CSS. Standaard `false` (voeg by) |

**Voorbeeld**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Teruggee** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registreer 'n herbruikbare blokpatroon in die WordPress pattern biblioteki.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Patroon-identifikator, bv. `gratis/hero-dark` |
| `title` | string | Ja | Mensleerbare patroonnaam wat in die editor getoon word |
| `content` | string | Ja | Geserialiseerde blok-merker (HTML) vir die patroon |
| `categories` | array | Nee | Patroon kategorie-sleutels, bv. `["featured", "hero"]` |
| `description` | string | Nee | Kort beskrywing wat in die patroonkiegetoon word |
| `keywords` | array | Nee | Soekwoorde |

**Teruggee** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Gee alle blokpatrone terug wat deur die agent geregistreer is.

**Parameters** — geen

### `set_site_logo`

Stel die WordPress-situslogo na 'n gegee attachment ID of 'n verre remote beeld URL. Wanneer 'n URL verskaf word, word die beeld gedownload en ingevoeg in die Media Library.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `attachment_id` | integer | Nie | ID van 'n bestaande Media Library attachment |
| `url` | string | Nie | Remote beeld URL om te importeer en as logo te stel |

Een van `attachment_id` of `url` moet verskaf word.

**Teruggegee** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Pas 'n genaamde kleur-/tipografie-preset toe op die aktiewe tema se `theme.json` (of `global-styles`). Presets is gekurateerde pakkies wat deur die Gratis AI Agent span gehandhaaf word.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `preset` | string | Ja | Preset naam, bv. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nie | As `true`, voeg dit saam met bestaande waardes by eerder as om te vervang. Standaard `false` |

**Beschikbare presets**

| Preset | Beskrywing |
|---|---|
| `minimal-dark` | Na-swart agtergrond, wit teks, enkele aksentkleur |
| `warm-editorial` | Warm off-wit agtergrond, serif koppe, aardse aksentkleure |
| `corporate-blue` | Navy en wit palet met professionele tipografie |
| `vibrant-startup` | Helder gradiënte, afgeronde hoeke, moderne sans-serif tipe |
| `classic-blog` | Neutrale grys, gemaklike lynhoogte, tradisionele lay-out spasie |

**Teruggegee** `{ "success": true, "preset": "minimal-dark" }`

---

## Globale Stye

Globale Stye-vermoëns lees en skryf `theme.json` waardes deur die WordPress Global Styles API, wat alle blokke en temate se sitewys beïnvloed.

### `get_global_styles`

Gee die huidige globale stye-konfigurasie terug.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `path` | string | Nie | JSON-pointer na 'n spesifieke waarde, bv. `/color/palette` of `/typography/fontSizes`. Gee die hele objek terug as dit oorgelatem word. |

**Teruggegee** die volledige globale stye-objek of die waarde by `path`.

---

### `set_global_styles`

Maak een of meer waardes in die globale stye-konfigurasie op hoogte.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `path` | string | Ja | JSON-pointer na die waarde wat gestel moet word, bv. `/color/palette` |
| `value` | any | Ja | Die nuwe waarde |

**Voorbeeld** — voeg 'n kleur by die palet

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Teruggegee** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Herstel alle agent-toepaslike globale styeverandertjies en herstel die tema-standaarde.

**Parameters** — geen

**Teruggegee** `{ "success": true }`

---

## Navigasie Menus

Navigasie Menu-vermoëns skep en bestuur WordPress nav-menue en hul items.

### `create_menu`

Skep 'n nuwe WordPress navigasie menu.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `name` | string | Ja | Menu naam, bv. `Primary Navigation` |
| `location` | string | Nie | Tema-lokasie waarvoor jy hierdie menu toewys, bv. `primary` |

**Teruggegee** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Verander die naam van 'n menu of herwis dit na 'n tema-lokasie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `menu_id` | integer | Ja | ID van die menu wat gewys moet word |
| `name` | string | Nie | Nuwe menu naam |
| `location` | string | Nie | Tema-lokasie om aan te wys of te herwis |

**Teruggegee** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Voeg 'n item by 'n bestaande navigasie menu.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `menu_id` | integer | Ja | ID van die doel-menu |
| `type` | string | Ja | Item tipe: `custom`, `post_type`, of `taxonomy` |
| `title` | string | Nie | Etiket vir die menu-item (vereis vir `custom` tipe) |
| `url` | string | Nie | URL vir `custom` items |
| `object_id` | integer | Nie | Post ID of term ID vir `post_type`/`taxonomy` items |
| `parent_id` | integer | Nie | Menu-item ID om hierdie item onder te nestel |
| `position` | integer | Nie | Zero-gebaseerde posisie in die menu |

**Teruggegee** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Verwyder 'n item uit 'n navigasie menu.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `item_id` | integer | Ja | Menu-item ID om te verwyder |

**Teruggegee** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

List al die WordPress navigasie menus, insluitend hul toegewys tema-lokasies.

**Parameters** — geen

**Teruggegee**

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

## Opsies Bestuur

Opsies-vermoëns lees en skryf WordPress opsies via `get_option` / `update_option`. 'n Ingeboude veiligheidsbloklys voorkom aksidentele wysiging van kritieke instellings.

### `get_option`

Lees 'n WordPress opsie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `option_name` | string | Ja | Die opsie-sleutel, bv. `blogname` |

**Teruggegee** `{ "option_name": "blogname", "value": "My Site" }`

Gee 'n fout terug as `option_name` op die veiligheidsbloklys is.

---

### `set_option`

Skryf 'n WordPress opsie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `option_name` | string | Ja | Die opsie-sleutel |
| `value` | any | Ja | Die nuwe waarde (word outomaties vir arrays/objekte geserialiseer) |
| `autoload` | string | Nie | `"yes"` of `"no"`. Standaard behou die bestaande autoload-instellings |

Geeft 'n fout terug as `option_name` op die veiligheidsbloklys staan.

**Teruggee** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Verwyder 'n WordPress-opsie.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `option_name` | string | Ja | Die opsie-sleutel om te verwyder |

Geeft 'n fout terug as `option_name` op die veiligheidsbloklys staan.

**Teruggee** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

List WordPress-opsies wat ooreenstem met 'n patroon.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `pattern` | string | Nee | SQL LIKE-patroon om opsie-name te filter, bv. `gratis_%`. Gee alle opsies terug as dit oorgelatem (gebruik met versigt op groot databasetjies). |
| `limit` | integer | Nee | Maksimum aantal resultate. Standaard `50`, maks `500` |

**Teruggee**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Inhoudbestuur (Content Management)

Inhoudbestuur-vermoëns skep en wys WordPress-posts en -bladsy's. Post-ID's word teruggegee sodat die volgende stappe in meervormige vermoënsplanne verwys na die geskep inhoud kan doen.

### `create_post`

Skep 'n nuwe WordPress-post, bladsy of aangepaste post-tipe invoer.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `title` | string | Ja | Titel van die post |
| `content` | string | Nee | Post-liggaam — aanvaar eenvoudige teks, HTML of geserialiseerde blok-merker |
| `status` | string | Nee | `draft`, `publish`, `pending`, `private`. Standaard `draft` |
| `post_type` | string | Nee | Post-tipe slug, bv. `post`, `page`, of enige geregistreerde CPT. Standaard `post` |
| `excerpt` | string | Nee | Kort opsomming wat in arkiewe en soektogwelde getoon word |
| `categories` | array | Nee | Array van kategorie-name of -ID's om te koppel |
| `tags` | array | Nee | Array van tag-name of -ID's om te koppel |
| `author` | integer | Nee | WordPress gebruiker-ID wat as die post-auteur gestel word. Standaard die huidige gebruiker |
| `date` | string | Nee | Publikasiedatum in ISO 8601 formaat, bv. `2026-05-01T09:00:00` |
| `page_template` | string | Nee | Template- lêer wat aan hierdie post of bladsy toegewys word, bv. `page-full-width.php`. Alleen betekenisvol wanneer `post_type` `page` is of 'n CPT wat bladsy-templete ondersteun. |

**Voorbeeld**

```json
{
  "title": "Welkom op ons nuwe webwerf",
  "content": "<!-- wp:paragraph --><p>Hallo wêreld!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Teruggee** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Vervang 'n bestaande WordPress-post of bladsy.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `post_id` | integer | Ja | ID van die post wat opgedateer moet word |
| `title` | string | Nee | Nuwe post-titel |
| `content` | string | Nee | Nuwe post-liggaam |
| `status` | string | Nee | Nuwe status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nee | Nuwe opsomming |
| `categories` | array | Nee | Vervang die volledige kategorie-lys met hierdie array van name of -ID's |
| `tags` | array | Nee | Vervang die volledige tag-lys met hierdie array van name of -ID's |
| `page_template` | string | Nee | Nuwe template- lêer wat aan hierdie post of bladsy toegewys word, bv. `page-full-width.php`. Stuur 'n leë string om die template-toewysing te verwyder en terug te gaan na die tema-standaard. |

**Voorbeeld** — verander template ná skep

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Teruggee** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Skep verskeie posts in 'n enkele vermoënsaanroep, wat rond-trips tydens webwerfbou of grootskaalse inhoud-import verlaag. Posts word in volgorde geskep; as een misluk, gaan die ander voort en die mislukking word in die resultaat-array gerapporteer.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `posts` | array | Ja | Array van post-objekte, elk aanvaar dieselfde parameters as `create_post` |
| `stop_on_error` | boolean | Nee | As `true`, stop die verwerking na die eerste mislukking. Standaard `false` |

**Voorbeeld**

```json
{
  "posts": [
    {
      "title": "Oor ons",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "Dienste",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "Kontak",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**Teruggee**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "Oor ons" },
    { "success": true, "post_id": 43, "title": "Dienste" },
    { "success": true, "post_id": 44, "title": "Kontak" }
  ]
}
```

---

### `set_featured_image`

Koppel 'n hoofbeeld (post-thumbnail) aan 'n bestaande post of bladsy. Aanvaar 'n bestaande Media Library-aanheft-ID of 'n verre beeld-URL; wanneer 'n URL verskaf word, word die beeld outomaties gedownload en ingevoer.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `post_id` | integer | Ja | ID van die post of bladsy wat opgedateer moet word |
| `attachment_id` | integer | Nee | ID van 'n bestaande Media Library-aanheft |
| `url` | string | Nee | Verre beeld-URL om te importeer en as hoofbeeld te stel |
| `alt_text` | string | Nee | Alt-teks wat aan die aanheft toegepas word indien dit uit 'n URL geïmporteer is |

Een van `attachment_id` of `url` moet verskaf word.

**Teruggee** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Skep 'n kontak-vorm met die aktiewe vorm-plugin (Contact Form 7, WPForms, Fluent Forms of Gravity Forms, afhangende van watter een geïnstalleer is). Gee 'n kortkode terug wat in enige post of bladsy ingebed kan word.

**Parameters**

## Visuele Oorsiening

Visuele Oorsieningsvermoë laat die agent skermopnames van lewende bladsye maak en dit analiseer, wat selfstandige ontwerp-oorwegings, voor/na vergelykings en visuele regressiekontrole moontlikmaak sonder dat jy enige blaaier-uitbreiding nodig het.

### `capture_screenshot`

Maak 'n skermopname van 'n WordPress-bladsy op 'n spesifieke URL met behulp van 'n server-side headless browser. Die beeld word in die Media Library gestoor en 'n CDN-URL word teruggegee.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `url` | string | Ja | Volledige URL van die bladsy om op te neem, bv. `https://example.com/about/` |
| `width` | integer | Nee | Weerboordbreedte in piksels. Standaard `1280` |
| `height` | integer | Nee | Weerboordhoogte in piksels. Standaard `800` |
| `full_page` | boolean | Nee | Neem die volledige scrollbare bladsy in plaas net die weerboord. Standaard `false` |
| `delay_ms` | integer | Nee | Millisekonde om te wag na bladsy-laai voordat jy opneem, nuttig vir animasie-inhoud. Standaard `500` |
| `label` | string | Nee | Mensleesbare label wat met die aanhang in die Media Library gestoor word |

**Teruggegee**

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

Neem twee skermopnames en gee 'n visuele verskilpunt (diff score) terug asook 'n verskilbeeld wat die veranderde areas beklemtoon. Nuttig om te bevestig dat 'n ontwerpverandering die verwagte resultaat veroorsaak het of om onbedoelde regressies te ontdek.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `before_url` | string | Ja | URL van die bladsy wat as die "voor"-toestand opgeneem word |
| `after_url` | string | Ja | URL van die bladsy wat as die "na"-toestand opgeneem word. Dit kan dieselfde URL wees as wanneer jy oor tyd vergelyk |
| `width` | integer | Nee | Weerboordbreedte vir beide opnames. Standaard `1280` |
| `threshold` | float | Nee | Piksels-verskil drempel (0.0–1.0). Piksels binne hierdie toelating word as onveranderd beskou. Standaard `0.1` |

**Teruggegee**

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

'n `diff_score` van `0.0` beteken geen sigbare verandering nie; `1.0` beteken elke piksel het verander.

---

### `review_page_design`

Maak 'n skermopname van 'n bladsy en stuur dit na die taalmodel vir visuele analise. Gee 'n gestruktureerde beoordeling terug wat dekking, tipografie, kleurgebruik en toeganklikheidsbesoeke omskryf.

**Parameters**

| Parameter | Tipe | Vereis | Beskrywing |
|---|---|---|---|
| `url` | string | Ja | Volledige URL van die bladsy om te beoordeel |
| `focus` | string | Nee | Komma-geskei lys van beoordelingsareas om te beklemtoon: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standaard: alle areas |
| `width` | integer | Nee | Weerboordbreedte. Standaard `1280` |

**Teruggegee**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "Die bladsystruktuur is skoon en leesbaar. Twee toeganklikheidsbesoeke gedetekte.",
    "layout": "Goedge ontwerp hiërargie. Hero-afsnit is prominente.",
    "typography": "Lichaamteks is 15px — oorweeg om dit na 16px te verhoog vir leesbaarheid.",
    "colour": "Kontrasverhouding op die CTA-knoppie (#fff op #4a90e2) is 3.1:1 — onder die WCAG AA-vereiste van 4.5:1.",
    "accessibility": ["Lae kontras op CTA-knoppie", "Ontbrekende alt-teks op hero-beeld"],
    "suggestions": ["Verduidelik die CTA-knoppie na #1a5cb0 om WCAG AA te voldoen", "Voeg beskrywende alt-teks by die hero-beeld"]
  }
}
```

---

## Installeerbare Vermoëns

Die Installeerbare Vermoëns Register laat jou toe om die agent met bykomende vermoënpakke uit te brei wat as WordPress plugins versprei word. Elke pakket registreer een of meer vermoëns deur die standaard ability API.

### `list_available_abilities`

Gee die katalogus van vermoënpakke wat beskikbaar is vir installasie vanaf die register terug.

**Parameters**

| Parameter | Type | Required | Beskrywing |
|---|---|---|---|
| `category` | string | Nee | Filter volgens kategorie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Teruggegee**

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

Laai en aktiveer 'n ability pack van die registry af.

**Parameters**

| Parameter | Type | Required | Beskrywing |
|---|---|---|---|
| `slug` | string | Ja | Ability pack plugin slug |

**Teruggegee** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Vra die ability registry na om die beste plugin vir 'n beskryfde gebruikssgeval te vind en, opsioneel, dit te installeer.

**Parameters**

| Parameter | Type | Required | Beskrywing |
|---|---|---|---|
| `description` | string | Ja | Natuurlike taalbeskrywing van die gewenste funksionaliteit |
| `install` | boolean | Nee | As dit `true` is, installeer die aanbeveel plugin onmiddellik. Standaard `false` |

**Voorbeeld**

```json
{
  "description": "Ek het 'n kontakvorm nodig met lêeroplaai ondersteuning en spamproteksie",
  "install": false
}
```

**Teruggegee**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "Wysbred gebruik, ondersteun lêeroplaai en integreer met Akismet vir spamfilter.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
