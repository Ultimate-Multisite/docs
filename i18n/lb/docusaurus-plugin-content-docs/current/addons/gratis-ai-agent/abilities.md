---
title: Fäegkeeten-Referenz
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referenz vun de Fäegkeeten {#abilities-reference}

Fäegkeete sinn déi atomar Aktiounen, déi Gratis AI Agent op denger WordPress-Installatioun opruffe kann. All Fäegkeet ass eng registréiert PHP-Klass, déi e JSON-Schema bereetstellt — den agent liest dëst Schema wärend der Lafzäit, fir ze verstoen, wéi eng Parameteren erfuerderlech sinn a wat d'Fäegkeet zeréckgëtt.

Dës Säit dokumentéiert all Fäegkeeten, déi mat Gratis AI Agent v1.9.0 geliwwert ginn.

---

## Benotzerdefinéiert Bäitragszorten {#custom-post-types}

Dës Fäegkeete verwalten benotzerdefinéiert Bäitragszorten (CPTs), déi iwwer den agent registréiert goufen. Registréierunge ginn an der WordPress-Optiounstabell gespäichert, sou datt se d'Deaktivéierung an d'Reaktivéierung vum plugin iwwerliewen.

### `register_post_type` {#registerposttype}

Registréiert eng nei benotzerdefinéiert Bäitragszort.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | De Schlëssel vun der Bäitragszort (maximal 20 Zeechen, keng Groussbuschtawen, keng Espacen) |
| `singular_label` | string | Jo | Mënschlech liesbaren Numm am Singular, z. B. `Portfolio Item` |
| `plural_label` | string | Jo | Mënschlech liesbaren Numm am Plural, z. B. `Portfolio Items` |
| `public` | boolean | Nee | Ob d'Bäitragszort ëffentlech zougänglech ass. Standard `true` |
| `supports` | array | Nee | Funktiounen, déi ënnerstëtzt solle ginn: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standard `["title","editor"]` |
| `has_archive` | boolean | Nee | Ob eng Archivsäit fir d'Bäitragszort aktivéiert ass. Standard `false` |
| `menu_icon` | string | Nee | Dashicons-Klass oder URL fir d'Ikon am Administratiounsmenü. Standard `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nee | URL-slug fir d'Bäitragszort. Standard ass `slug` |

**Beispill**

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

**Gëtt zeréck** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Gëtt all benotzerdefinéiert Bäitragszorten zeréck, déi vum agent registréiert goufen.

**Parameteren** — keng

**Gëtt zeréck**

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

Mellt eng benotzerdefinéiert Bäitragszort of, déi virdru vum agent registréiert gouf. Bestehend Bäiträg vun där Zort bleiwen an der Datebank, si sinn awer net méi iwwer d'Bäitragszort zougänglech.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | De Schlëssel vun der Bäitragszort, déi ewechgeholl soll ginn |

**Gëtt zeréck** `{ "success": true, "slug": "portfolio" }`

---

## Benotzerdefinéiert Taxonomien {#custom-taxonomies}

Dës Fäegkeete verwalten benotzerdefinéiert Taxonomien. Wéi CPTs ginn Taxonomie-Registréierunge gespäichert.

### `register_taxonomy` {#registertaxonomy}

Registréiert eng nei benotzerdefinéiert Taxonomie.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | Den Taxonomie-Schlëssel (maximal 32 Zeechen) |
| `singular_label` | string | Jo | Mënschlech liesbaren Numm am Singular, z. B. `Project Category` |
| `plural_label` | string | Jo | Mënschlech liesbaren Numm am Plural, z. B. `Project Categories` |
| `post_types` | array | Jo | Slugs vun de Bäitragszorten, un déi dës Taxonomie ugehaange soll ginn |
| `hierarchical` | boolean | Nee | `true` fir Kategorie-Stil, `false` fir Tag-Stil. Standard `true` |
| `public` | boolean | Nee | Ob Begrëffer ëffentlech zougänglech sinn. Standard `true` |
| `rewrite_slug` | string | Nee | URL-slug fir d'Taxonomie. Standard ass `slug` |

**Beispill**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Gëtt zeréck** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Gëtt all benotzerdefinéiert Taxonomien zeréck, déi vum agent registréiert goufen.

**Parameteren** — keng

**Gëtt zeréck**

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

Mellt eng benotzerdefinéiert Taxonomie of, déi virdru vum agent registréiert gouf.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | Den Taxonomie-Schlëssel, deen ewechgeholl soll ginn |

**Gëtt zeréck** `{ "success": true, "slug": "project-category" }`

---

## Design-System {#design-system}

Design-System-Fäegkeete änneren déi visuell Presentatioun vum WordPress site — vu benotzerdefinéiertem CSS bis zu Block-Musteren an dem site-Logo.

### `inject_custom_css` {#injectcustomcss}

Hänkt CSS iwwer `wp_add_inline_style` un den `<head>` vum site un. CSS gëtt an der Optioun `gratis_ai_agent_custom_css` gespäichert a propper aus der Schlaang geholl, wann d'Fäegkeet zeréckgesat gëtt.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `css` | string | Jo | Gültege CSS fir anzefügen |
| `label` | string | Nee | Mënschlech liesbare Label fir dëse CSS-Block, benotzt an Debug-Logbicher. Standard `"agent-injected"` |
| `replace` | boolean | Nee | Wann `true`, ersetzt et all virdru agefügte CSS. Standard `false` (hänkt un) |

**Beispill**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Gëtt zeréck** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registréiert e widderverwendbaart Block-Muster an der WordPress-Musterbibliothéik.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | Muster-Identifikateur, z. B. `gratis/hero-dark` |
| `title` | string | Jo | Mënschlech liesbare Musternumm, deen am editor gewise gëtt |
| `content` | string | Jo | Serialiséiert Block-Markup (HTML) fir d'Muster |
| `categories` | array | Nee | Slugs vu Musterkategorien, z. B. `["featured", "hero"]` |
| `description` | string | Nee | Kuerz Beschreiwung, déi am Muster-Auswieler gewise gëtt |
| `keywords` | array | Nee | Sichschlësselwierder |

**Gëtt zeréck** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Lëscht all Block-Musteren op, déi vum agent registréiert goufen.

**Parameteren** — keng

**Gëtt zréck**

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

Setzt de WordPress Site-Logo op eng uginn Attachment-ID oder eng Remote-Bild-URL. Wann eng URL uginn ass, gëtt d'Bild erofgelueden an an d'Media Library importéiert.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `attachment_id` | integer | Nee | ID vun engem existente Media Library-Attachment |
| `url` | string | Nee | Remote-Bild-URL fir z'importéieren an als Logo ze setzen |

Ee vun `attachment_id` oder `url` muss uginn ginn.

**Gëtt zréck** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Wendt en benannte Faarf-/Typografie-Preset op d'`theme.json` (oder `global-styles`) vum aktive Theme un. Presets si kuratéiert Paketer, déi vum Gratis AI Agent-Team ënnerhale ginn.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `preset` | string | Jo | Preset-Numm, z. B. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nee | Wann `true`, mat existente Wäerter zesummeféieren amplaz se z'ersetzen. Standard `false` |

**Verfügbar Presets**

| Preset | Beschreiwung |
|---|---|
| `minimal-dark` | Bal schwaarzen Hannergrond, wäissen Text, eng eenzeg Akzentfaarf |
| `warm-editorial` | Waarmen off-wäissen Hannergrond, Serif-Iwwerschrëften, ierdesch Akzentfaarwen |
| `corporate-blue` | Marineblo a wäiss Palette mat professioneller Typografie |
| `vibrant-startup` | Hell Gradienten, ofgerënnt Ecken, modern Sans-Serif-Schrëft |
| `classic-blog` | Neutral Grottéin, komfortabel Zeilenhéicht, traditionell Layout-Ofstänn |

**Gëtt zréck** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles-Fäegkeete liesen a schreiwen theme.json-Wäerter iwwer d'WordPress Global Styles API a beaflossen all Blocks an Templates sitewäit.

### `get_global_styles` {#getglobalstyles}

Gëtt déi aktuell Global Styles-Konfiguratioun zréck.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `path` | string | Nee | JSON-Pointer op e spezifesche Wäert, z. B. `/color/palette` oder `/typography/fontSizes`. Gëtt de ganzen Objet zréck, wann en ewechgelooss gëtt. |

**Gëtt zréck** de komplette Global Styles-Objet oder de Wäert bei `path`.

---

### `set_global_styles` {#setglobalstyles}

Aktualiséiert een oder méi Wäerter an der Global Styles-Konfiguratioun.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `path` | string | Jo | JSON-Pointer op de Wäert, dee gesat soll ginn, z. B. `/color/palette` |
| `value` | any | Jo | Den neie Wäert |

**Beispill** — eng Faarf an d'Palette derbäisetzen

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Gëtt zréck** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Setzt all vum Agent ugewannt Global Styles-Ännerungen zréck a restauréiert d'Theme-Standardwäerter.

**Parameteren** — keng

**Gëtt zréck** `{ "success": true }`

---

## Navigatiounsmenüen {#navigation-menus}

Navigatiounsmenü-Fäegkeete erstellen a verwalten WordPress Navigatiounsmenüen an hir Elementer.

### `create_menu` {#createmenu}

Erstellt en neie WordPress Navigatiounsmenü.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `name` | string | Jo | Menüsnumm, z. B. `Primary Navigation` |
| `location` | string | Nee | Theme-Positioun, un déi dëse Menü zougewisen gëtt, z. B. `primary` |

**Gëtt zréck** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Benennt e Menü ëm oder weist en enger Theme-Positioun nei zou.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `menu_id` | integer | Jo | ID vum Menü, deen aktualiséiert soll ginn |
| `name` | string | Nee | Neie Menüsnumm |
| `location` | string | Nee | Theme-Positioun fir zouzeweisen oder nei zouzeweisen |

**Gëtt zréck** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Setzt en Element an en existente Navigatiounsmenü derbäi.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `menu_id` | integer | Jo | ID vum Zilmenü |
| `type` | string | Jo | Elementtyp: `custom`, `post_type` oder `taxonomy` |
| `title` | string | Nee | Beschëftung fir d'Menüelement (néideg fir den Typ `custom`) |
| `url` | string | Nee | URL fir `custom`-Elementer |
| `object_id` | integer | Nee | Post-ID oder Term-ID fir `post_type`/`taxonomy`-Elementer |
| `parent_id` | integer | Nee | Menüelement-ID, ënner där dëst Element agebett gëtt |
| `position` | integer | Nee | Null-baséiert Positioun am Menü |

**Gëtt zréck** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Läscht en Element aus engem Navigatiounsmenü.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `item_id` | integer | Jo | Menüelement-ID fir ze läschen |

**Gëtt zréck** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Lëscht all WordPress Navigatiounsmenüen op, inklusiv hiren zougewisene Theme-Positiounen.

**Parameteren** — keng

**Gëtt zréck**

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

## Optiounsverwaltung {#options-management}

Optiouns-Fäegkeete liesen a schreiwen WordPress Optiounen iwwer `get_option` / `update_option`. Eng agebaut Sécherheets-Blocklëscht verhënnert zoufälleg Ännerunge vu kriteschen Astellungen.

### `get_option` {#getoption}

Liest eng WordPress Optioun.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `option_name` | string | Jo | Den Optiounsschlëssel, z. B. `blogname` |

**Gëtt zréck** `{ "option_name": "blogname", "value": "My Site" }`

Gëtt e Feeler zréck, wann `option_name` op der Sécherheets-Blocklëscht steet.

---

### `set_option` {#setoption}

Schreift eng WordPress Optioun.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `option_name` | string | Jo | Den Optiounsschlëssel |
| `value` | any | Jo | Den neie Wäert (automatesch fir Arrays/Objete serialiséiert) |
| `autoload` | string | Nee | `"yes"` oder `"no"`. Standard behält déi existent Autoload-Astellung bei |

Gëtt e Feeler zeréck, wann `option_name` op der Sécherheets-Blocklist ass.

**Gëtt zeréck** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Läscht eng WordPress-Optioun.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `option_name` | string | Jo | Den Optiounsschlëssel, dee geläscht soll ginn |

Gëtt e Feeler zeréck, wann `option_name` op der Sécherheets-Blocklist ass.

**Gëtt zeréck** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Lëscht WordPress-Optiounen op, déi engem Muster entspriechen.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `pattern` | string | Nee | SQL LIKE-Muster fir Optiounsnimm ze filteren, z. B. `gratis_%`. Gëtt all Optiounen zeréck, wann et ewechgelooss gëtt (mat Virsiicht bei grousse Datenbanken benotzen). |
| `limit` | integer | Nee | Maximal Unzuel u Resultater. Standard `50`, max. `500` |

**Gëtt zeréck**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Inhaltsverwaltung {#content-management}

Inhaltsverwaltungsfäegkeeten erstellen an änneren WordPress-Beiträg a Säiten. Beitrags-IDe ginn zeréckginn, esou datt uschléissend Schrëtt a Pläng mat méi Fäegkeeten op den erstallten Inhalt verweise kënnen.

### `create_post` {#createpost}

Erstellt en neie WordPress-Beitrag, eng Säit oder en Entrée vun engem personaliséierte Beitragstyp.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `title` | string | Jo | Beitragstitel |
| `content` | string | Nee | Beitragsinhalt — akzeptéiert Kloertext, HTML oder serialiséiert Block-Markup |
| `status` | string | Nee | `draft`, `publish`, `pending`, `private`. Standard `draft` |
| `post_type` | string | Nee | Slug vum Beitragstyp, z. B. `post`, `page` oder all registréierte CPT. Standard `post` |
| `excerpt` | string | Nee | Kuerz Zesummefaassung, déi an Archiver a Sichresultater gewise gëtt |
| `categories` | array | Nee | Array vu Kategorienimm oder IDen, déi zougewise solle ginn |
| `tags` | array | Nee | Array vun Tag-Nimm oder IDen, déi zougewise solle ginn |
| `author` | integer | Nee | WordPress-Benotzer-ID, déi als Auteur vum Beitrag gesat gëtt. Standardméisseg den aktuelle Benotzer |
| `date` | string | Nee | Verëffentlechungsdatum am ISO-8601-Format, z. B. `2026-05-01T09:00:00` |
| `page_template` | string | Nee | Template-Datei, déi dësem Beitrag oder dëser Säit zougewise gëtt, z. B. `page-full-width.php`. Nëmme sënnvoll, wann `post_type` `page` ass oder e CPT, dee Säitentemplates ënnerstëtzt. |

**Beispill**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Gëtt zeréck** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Aktualiséiert en existéierende WordPress-Beitrag oder eng Säit.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `post_id` | integer | Jo | ID vum Beitrag, deen aktualiséiert soll ginn |
| `title` | string | Nee | Neie Beitragstitel |
| `content` | string | Nee | Neie Beitragsinhalt |
| `status` | string | Nee | Neie Status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nee | Neien Excerpt |
| `categories` | array | Nee | Ersetzt déi komplett Kategorienlëscht duerch dësen Array vun Nimm oder IDen |
| `tags` | array | Nee | Ersetzt déi komplett Tag-Lëscht duerch dësen Array vun Nimm oder IDen |
| `page_template` | string | Nee | Nei Template-Datei, déi dësem Beitrag oder dëser Säit zougewise gëtt, z. B. `page-full-width.php`. Gitt en eidele String mat, fir d'Template-Zouweisung ze läschen an op de Standard vum Theme zeréckzegoen. |

**Beispill** — Template no der Erstellung änneren

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Gëtt zeréck** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Erstellt méi Beiträg an engem eenzege Fäegkeetsopruff a reduzéiert domat Round-trips beim Opbau vu Sitten oder beim Bulk-Import vun Inhalt. Beiträg ginn der Rei no erstallt; wann een ausfält, fueren déi aner weider an den Ausfall gëtt am Resultater-Array gemellt.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `posts` | array | Jo | Array vu Beitragsobjeten, woubäi all Objet déiselwecht Parameteren akzeptéiert wéi `create_post` |
| `stop_on_error` | boolean | Nee | Wann `true`, d'Veraarbechtung nom éischten Ausfall stoppen. Standard `false` |

**Beispill**

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

**Gëtt zeréck**

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

Weist engem existéierende Beitrag oder enger Säit e Featured Image (Beitragsminiatur) zou. Akzeptéiert eng existéierend Media Library-Attachment-ID oder eng Remote-Bild-URL; wann eng URL uginn ass, gëtt d'Bild automatesch erofgelueden an importéiert.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `post_id` | integer | Jo | ID vum Beitrag oder der Säit, déi aktualiséiert soll ginn |
| `attachment_id` | integer | Nee | ID vun engem existéierende Media Library-Attachment |
| `url` | string | Nee | Remote-Bild-URL, déi importéiert an als Featured Image gesat gëtt |
| `alt_text` | string | Nee | Alt-Text, deen op den Attachment ugewannt gëtt, wann en aus enger URL importéiert gëtt |

Ee vun `attachment_id` oder `url` muss uginn ginn.

**Gëtt zeréck** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Erstellt e Kontaktformular mat dem aktive Form-Plugin (Contact Form 7, WPForms, Fluent Forms oder Gravity Forms, jee nodeem wat installéiert ass). Gëtt e Shortcode zeréck, deen an all Beitrag oder Säit agebett ka ginn.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `title` | string | Jo | Formulairenumm, deen am Administratiounsberäich vum Formulaire-Plugin gewise gëtt |
| `fields` | array | Jo | Uerdentlech Lëscht vu Formulairefelder (kuckt Feld-Objet hei drënner) |
| `recipient` | string | Nee | E-Mail-Adress fir Soumissiounen ze kréien. Standardméisseg d'WordPress-Admin-E-Mail |
| `subject` | string | Nee | E-Mail-Betreffzeil. Ënnerstëtzt `[your-name]`- an `[your-subject]`-Plazhaler beim Gebrauch vu Contact Form 7 |
| `confirmation_message` | string | Nee | Noriicht, déi no enger erfollegräicher Soumissioun ugewise gëtt. Standard: `"Thank you for your message. We'll be in touch soon."` |

**Feld-Objet**

| Schlëssel | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `name` | string | Jo | Internen Feldnumm / Maschinneschlëssel |
| `label` | string | Jo | Mënschlech liesbaren Label, deen um Formulaire gewise gëtt |
| `type` | string | Jo | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nee | Ob d'Feld virun der Soumissioun muss ausgefëllt ginn. Standard `false` |
| `options` | array | Nee | Optioune fir `select`-, `checkbox`- a `radio`-Felder |
| `placeholder` | string | Nee | Plazhalertext fir Text-Typ-Inputen |

**Beispill**

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

**Gëtt zeréck**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuell Iwwerpréiwung {#visual-review}

D'Fäegkeete vun der visueller Iwwerpréiwung erlaben dem Agent, Screenshots vu Live-Säiten ze erfaassen an ze analyséieren, an erméiglechen autonom Design-Iwwerpréiwung, Virun/No-Vergläicher a visuell Regressiounskontrollen, ouni eng Browser-Erweiderung ze erfuerderen.

### `capture_screenshot` {#capturescreenshot}

Erfaasst e Screenshot vun enger WordPress-Säit op enger uginnener URL mat engem server-säitegen headless Browser. D'Bild gëtt an d'Mediebibliothéik gespäichert an eng CDN-URL gëtt zeréckginn.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `url` | string | Jo | Voll URL vun der Säit, fir e Screenshot ze maachen, z. B. `https://example.com/about/` |
| `width` | integer | Nee | Viewport-Breet a Pixel. Standard `1280` |
| `height` | integer | Nee | Viewport-Héicht a Pixel. Standard `800` |
| `full_page` | boolean | Nee | Erfaasst déi ganz scrollbar Säit amplaz just de Viewport. Standard `false` |
| `delay_ms` | integer | Nee | Millisekonnen, déi nom Luede vun der Säit gewaart ginn, ier erfaasst gëtt; nëtzlech fir animéiert Inhalter. Standard `500` |
| `label` | string | Nee | Mënschlech liesbaren Label, dee mam Unhang an der Mediebibliothéik gespäichert gëtt |

**Gëtt zeréck**

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

Hëlt zwee Screenshots a gëtt e visuellen Diff-Score plus en Diff-Bild zeréck, dat geännert Beräicher ervirhieft. Nëtzlech fir ze bestätegen, datt eng Designännerung dat erwaart Resultat produzéiert huet, oder fir onerwaart Regressiounen z'erkennen.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `before_url` | string | Jo | URL vun der Säit, déi als "virdrun"-Zoustand erfaasst gëtt |
| `after_url` | string | Jo | URL vun der Säit, déi als "duerno"-Zoustand erfaasst gëtt. Kann déiselwecht URL sinn, wann iwwer Zäit verglach gëtt |
| `width` | integer | Nee | Viewport-Breet fir béid Erfaassungen. Standard `1280` |
| `threshold` | float | Nee | Pixel-Ënnerscheeds-Schwellwäert (0.0–1.0). Pixel bannent dëser Toleranz ginn als onverännert ugesinn. Standard `0.1` |

**Gëtt zeréck**

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

E `diff_score` vun `0.0` bedeit keng siichtbar Ännerung; `1.0` bedeit, datt all Pixel geännert gouf.

---

### `review_page_design` {#reviewpagedesign}

Erfaasst e Screenshot vun enger Säit a schéckt en un de Sproochmodell fir visuell Analyse. Gëtt eng strukturéiert Bewäertung zeréck, déi Layout, Typografie, Faarfgebrauch an Accessibilitéitsbedenken ofdeckt.

**Parameteren**

| Parameter | Typ | Erfuerderlech | Beschreiwung |
|---|---|---|---|
| `url` | string | Jo | Voll URL vun der Säit fir z'iwwerpréiwen |
| `focus` | string | Nee | Komma-getrennte Lëscht vun Iwwerpréiwungsberäicher, déi betount solle ginn: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standard: all Beräicher |
| `width` | integer | Nee | Viewport-Breet. Standard `1280` |

**Gëtt zeréck**

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

## Installéierbar Fäegkeeten {#installable-abilities}

Den Installable Abilities Registry léisst dech den Agent mat zousätzleche Fäegkeetspäck erweideren, déi als WordPress-Plugins verdeelt ginn. All Pack registréiert eng oder méi Fäegkeeten iwwer déi standardméisseg Ability API.

### `list_available_abilities` {#listavailableabilities}

Gëtt de Katalog vun de Fäegkeetspäck zeréck, déi aus dem Registry fir d'Installatioun verfügbar sinn.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `category` | string | Nee | No Kategorie filteren: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Gëtt zeréck**

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

Luet en Ability-Pack aus dem Regëster erof an aktivéiert en.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `slug` | string | Jo | Slug vun der Ability-Pack-Erweiderung |

**Gëtt zeréck** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Freet den Ability-Regëster of, fir déi bescht Erweiderung fir e beschriwwenen Uwendungsfall ze fannen an se optional ze installéieren.

**Parameteren**

| Parameter | Typ | Néideg | Beschreiwung |
|---|---|---|---|
| `description` | string | Jo | Beschreiwung vun der gewënschter Funktionalitéit a natierlecher Sprooch |
| `install` | boolean | Nee | Wann `true`, gëtt déi recommandéiert Erweiderung direkt installéiert. Standard `false` |

**Beispill**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Gëtt zeréck**

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
