---
title: Referenčná príručka schopností
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referencia schopností

Schopnosti sú atomické akcie, ktoré Gratis AI Agent môže vyvolať vo vašej inštalácii WordPress. Každá schopnosť je registrovaná PHP trieda, ktorá sprístupňuje JSON schému — agent túto schému číta za behu, aby pochopil, aké parametre sú povinné a čo schopnosť vracia.

Táto stránka dokumentuje všetky schopnosti dodávané s Gratis AI Agent v1.9.0.

---

## Vlastné typy príspevkov {#custom-post-types}

Tieto schopnosti spravujú vlastné typy príspevkov (CPT) registrované prostredníctvom agenta. Registrácie sa ukladajú do tabuľky možností WordPress, takže prežijú deaktiváciu a opätovnú aktiváciu pluginu.

### `register_post_type` {#registerposttype}

Registruje nový vlastný typ príspevku.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Áno | Kľúč typu príspevku (max. 20 znakov, bez veľkých písmen, bez medzier) |
| `singular_label` | string | Áno | Čitateľný názov v jednotnom čísle, napr. `Portfolio Item` |
| `plural_label` | string | Áno | Čitateľný názov v množnom čísle, napr. `Portfolio Items` |
| `public` | boolean | Nie | Či je typ príspevku verejne prístupný. Predvolené `true` |
| `supports` | array | Nie | Funkcie, ktoré sa majú podporovať: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Predvolené `["title","editor"]` |
| `has_archive` | boolean | Nie | Či je povolená archívna stránka typu príspevku. Predvolené `false` |
| `menu_icon` | string | Nie | Trieda Dashicons alebo URL pre ikonu v admin menu. Predvolené `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nie | URL slug pre typ príspevku. Predvolene `slug` |

**Príklad**

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

**Vráti** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Vráti všetky vlastné typy príspevkov registrované agentom.

**Parametre** — žiadne

**Vráti**

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

Zruší registráciu vlastného typu príspevku, ktorý bol predtým registrovaný agentom. Existujúce príspevky tohto typu zostanú v databáze, ale už nebudú prístupné cez daný typ príspevku.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Áno | Kľúč typu príspevku, ktorý sa má odstrániť |

**Vráti** `{ "success": true, "slug": "portfolio" }`

---

## Vlastné taxonómie {#custom-taxonomies}

Tieto schopnosti spravujú vlastné taxonómie. Rovnako ako CPT, registrácie taxonómií sa ukladajú natrvalo.

### `register_taxonomy` {#registertaxonomy}

Registruje novú vlastnú taxonómiu.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Áno | Kľúč taxonómie (max. 32 znakov) |
| `singular_label` | string | Áno | Čitateľný názov v jednotnom čísle, napr. `Project Category` |
| `plural_label` | string | Áno | Čitateľný názov v množnom čísle, napr. `Project Categories` |
| `post_types` | array | Áno | Slugy typov príspevkov, ku ktorým má byť táto taxonómia pripojená |
| `hierarchical` | boolean | Nie | `true` pre štýl kategórií, `false` pre štýl značiek. Predvolené `true` |
| `public` | boolean | Nie | Či sú termíny verejne prístupné. Predvolené `true` |
| `rewrite_slug` | string | Nie | URL slug pre taxonómiu. Predvolene `slug` |

**Príklad**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Vráti** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Vráti všetky vlastné taxonómie registrované agentom.

**Parametre** — žiadne

**Vráti**

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

Zruší registráciu vlastnej taxonómie, ktorá bola predtým registrovaná agentom.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Áno | Kľúč taxonómie, ktorý sa má odstrániť |

**Vráti** `{ "success": true, "slug": "project-category" }`

---

## Dizajnový systém {#design-system}

Schopnosti dizajnového systému upravujú vizuálnu prezentáciu WordPress site — od vlastného CSS po vzory blokov a logo site.

### `inject_custom_css` {#injectcustomcss}

Pripojí CSS do `<head>` site cez `wp_add_inline_style`. CSS je uložené v možnosti `gratis_ai_agent_custom_css` a po resetovaní schopnosti sa čisto vyradí z fronty.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Áno | Platné CSS na vloženie |
| `label` | string | Nie | Čitateľný štítok pre tento CSS blok, používaný v debug logoch. Predvolené `"agent-injected"` |
| `replace` | boolean | Nie | Ak je `true`, nahradí všetko predtým vložené CSS. Predvolené `false` (pripojí) |

**Príklad**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Vráti** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registruje opakovane použiteľný vzor bloku v knižnici vzorov WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Áno | Identifikátor vzoru, napr. `gratis/hero-dark` |
| `title` | string | Áno | Čitateľný názov vzoru zobrazený v editore |
| `content` | string | Áno | Serializovaný značkovací kód bloku (HTML) pre vzor |
| `categories` | array | Nie | Slugy kategórií vzorov, napr. `["featured", "hero"]` |
| `description` | string | Nie | Krátky opis zobrazený vo výbere vzorov |
| `keywords` | array | Nie | Kľúčové slová vyhľadávania |

**Vráti** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Vypíše všetky vzory blokov registrované agentom.

**Parametre** — žiadne

**Vracia**

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

Nastaví logo WordPress stránky na dané ID prílohy alebo vzdialenú URL obrázka. Keď je poskytnutá URL, obrázok sa stiahne a importuje do knižnice médií.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | Nie | ID existujúcej prílohy v knižnici médií |
| `url` | string | Nie | URL vzdialeného obrázka na importovanie a nastavenie ako logo |

Musí byť poskytnuté jedno z `attachment_id` alebo `url`.

**Vracia** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Použije pomenovanú predvoľbu farieb/typografie na `theme.json` (alebo `global-styles`) aktívnej témy. Predvoľby sú kurátorsky pripravené balíky udržiavané tímom Gratis AI Agent.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Áno | Názov predvoľby, napr. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nie | Ak je `true`, zlúči sa s existujúcimi hodnotami namiesto nahradenia. Predvolené je `false` |

**Dostupné predvoľby**

| Preset | Description |
|---|---|
| `minimal-dark` | Takmer čierne pozadie, biely text, jedna akcentová farba |
| `warm-editorial` | Teplé takmer biele pozadie, serifové nadpisy, zemité akcentové farby |
| `corporate-blue` | Tmavomodrá a biela paleta s profesionálnou typografiou |
| `vibrant-startup` | Jasné prechody, zaoblené rohy, moderný bezserifový typ písma |
| `classic-blog` | Neutrálne sivé odtiene, pohodlná výška riadku, tradičné rozstupy rozloženia |

**Vracia** `{ "success": true, "preset": "minimal-dark" }`

---

## Globálne štýly {#global-styles}

Schopnosti globálnych štýlov čítajú a zapisujú hodnoty theme.json prostredníctvom WordPress Global Styles API, čo ovplyvňuje všetky bloky a šablóny na celej stránke.

### `get_global_styles` {#getglobalstyles}

Vracia aktuálnu konfiguráciu globálnych štýlov.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Nie | JSON ukazovateľ na konkrétnu hodnotu, napr. `/color/palette` alebo `/typography/fontSizes`. Ak sa vynechá, vráti celý objekt. |

**Vracia** celý objekt globálnych štýlov alebo hodnotu na `path`.

---

### `set_global_styles` {#setglobalstyles}

Aktualizuje jednu alebo viac hodnôt v konfigurácii globálnych štýlov.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Áno | JSON ukazovateľ na hodnotu, ktorá sa má nastaviť, napr. `/color/palette` |
| `value` | any | Áno | Nová hodnota |

**Príklad** — pridanie farby do palety

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Vracia** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Resetuje všetky zmeny globálnych štýlov použité agentom a obnoví predvolené nastavenia témy.

**Parametre** — žiadne

**Vracia** `{ "success": true }`

---

## Navigačné menu {#navigation-menus}

Schopnosti navigačného menu vytvárajú a spravujú navigačné menu WordPress a ich položky.

### `create_menu` {#createmenu}

Vytvorí nové navigačné menu WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Áno | Názov menu, napr. `Primary Navigation` |
| `location` | string | Nie | Umiestnenie témy, ku ktorému sa má toto menu priradiť, napr. `primary` |

**Vracia** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Premenuje menu alebo ho znova priradí k umiestneniu témy.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Áno | ID menu, ktoré sa má aktualizovať |
| `name` | string | Nie | Nový názov menu |
| `location` | string | Nie | Umiestnenie témy, ku ktorému sa má priradiť alebo znova priradiť |

**Vracia** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Pridá položku do existujúceho navigačného menu.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Áno | ID cieľového menu |
| `type` | string | Áno | Typ položky: `custom`, `post_type` alebo `taxonomy` |
| `title` | string | Nie | Označenie položky menu (vyžadované pre typ `custom`) |
| `url` | string | Nie | URL pre položky `custom` |
| `object_id` | integer | Nie | ID príspevku alebo ID termínu pre položky `post_type`/`taxonomy` |
| `parent_id` | integer | Nie | ID položky menu, pod ktorú sa má táto položka vnoriť |
| `position` | integer | Nie | Pozícia v menu počítaná od nuly |

**Vracia** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Odstráni položku z navigačného menu.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Áno | ID položky menu, ktorá sa má odstrániť |

**Vracia** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Vypíše všetky navigačné menu WordPress vrátane ich priradených umiestnení témy.

**Parametre** — žiadne

**Vracia**

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

## Správa možností {#options-management}

Schopnosti možností čítajú a zapisujú možnosti WordPress prostredníctvom `get_option` / `update_option`. Vstavaný bezpečnostný blokovací zoznam zabraňuje náhodnej úprave kritických nastavení.

### `get_option` {#getoption}

Číta možnosť WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Áno | Kľúč možnosti, napr. `blogname` |

**Vracia** `{ "option_name": "blogname", "value": "My Site" }`

Vráti chybu, ak je `option_name` na bezpečnostnom blokovacom zozname.

---

### `set_option` {#setoption}

Zapíše možnosť WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Áno | Kľúč možnosti |
| `value` | any | Áno | Nová hodnota (automaticky serializovaná pre polia/objekty) |
| `autoload` | string | Nie | `"yes"` alebo `"no"`. Predvolene zachová existujúce nastavenie autoload |

Vráti chybu, ak je `option_name` na bezpečnostnom blockliste.

**Vráti** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Odstráni možnosť WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Kľúč možnosti, ktorý sa má odstrániť |

Vráti chybu, ak je `option_name` na bezpečnostnom blockliste.

**Vráti** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Vypíše možnosti WordPress zodpovedajúce vzoru.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | Vzor SQL LIKE na filtrovanie názvov možností, napr. `gratis_%`. Ak sa vynechá, vráti všetky možnosti (pri veľkých databázach používajte opatrne). |
| `limit` | integer | No | Maximálny počet výsledkov. Predvolené `50`, max. `500` |

**Vráti**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Správa obsahu {#content-management}

Schopnosti správy obsahu vytvárajú a upravujú príspevky a stránky WordPress. ID príspevkov sa vracajú, aby sa na vytvorený obsah mohli odkazovať následné kroky vo viacschopnostných plánoch.

### `create_post` {#createpost}

Vytvorí nový príspevok, stránku alebo položku vlastného typu príspevku vo WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Názov príspevku |
| `content` | string | No | Telo príspevku — prijíma obyčajný text, HTML alebo serializovaný zápis blokov |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Predvolené `draft` |
| `post_type` | string | No | Slug typu príspevku, napr. `post`, `page` alebo ľubovoľný registrovaný CPT. Predvolené `post` |
| `excerpt` | string | No | Krátke zhrnutie zobrazované v archívoch a výsledkoch vyhľadávania |
| `categories` | array | No | Pole názvov alebo ID kategórií na priradenie |
| `tags` | array | No | Pole názvov alebo ID značiek na priradenie |
| `author` | integer | No | ID používateľa WordPress, ktorý sa má nastaviť ako autor príspevku. Predvolene aktuálny používateľ |
| `date` | string | No | Dátum publikovania vo formáte ISO 8601, napr. `2026-05-01T09:00:00` |
| `page_template` | string | No | Súbor šablóny, ktorý sa má priradiť tomuto príspevku alebo stránke, napr. `page-full-width.php`. Má význam iba vtedy, keď je `post_type` `page` alebo CPT, ktorý podporuje šablóny stránok. |

**Príklad**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Vráti** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Aktualizuje existujúci príspevok alebo stránku WordPress.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID príspevku, ktorý sa má aktualizovať |
| `title` | string | No | Nový názov príspevku |
| `content` | string | No | Nové telo príspevku |
| `status` | string | No | Nový stav: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nový úryvok |
| `categories` | array | No | Nahradiť celý zoznam kategórií týmto poľom názvov alebo ID |
| `tags` | array | No | Nahradiť celý zoznam značiek týmto poľom názvov alebo ID |
| `page_template` | string | No | Nový súbor šablóny, ktorý sa má priradiť tomuto príspevku alebo stránke, napr. `page-full-width.php`. Odovzdajte prázdny reťazec na odstránenie priradenia šablóny a návrat k predvolenej hodnote theme. |

**Príklad** — zmena šablóny po vytvorení

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Vráti** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Vytvorí viacero príspevkov v jednom volaní schopnosti, čím znižuje počet ciest tam a späť počas zostavovania webu alebo hromadného importu obsahu. Príspevky sa vytvárajú postupne; ak jeden zlyhá, ostatné pokračujú a zlyhanie sa nahlási v poli výsledkov.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Pole objektov príspevkov, pričom každý prijíma rovnaké parametre ako `create_post` |
| `stop_on_error` | boolean | No | Ak je `true`, zastaví spracovanie po prvom zlyhaní. Predvolené `false` |

**Príklad**

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

**Vráti**

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

Priradí ilustračný obrázok (miniatúru príspevku) k existujúcemu príspevku alebo stránke. Prijíma ID existujúcej prílohy knižnice médií alebo URL vzdialeného obrázka; keď sa poskytne URL, obrázok sa automaticky stiahne a importuje.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID príspevku alebo stránky, ktorá sa má aktualizovať |
| `attachment_id` | integer | No | ID existujúcej prílohy knižnice médií |
| `url` | string | No | URL vzdialeného obrázka, ktorý sa má importovať a nastaviť ako ilustračný obrázok |
| `alt_text` | string | No | Alternatívny text, ktorý sa má použiť na prílohu, ak sa importuje z URL |

Musí byť poskytnuté jedno z `attachment_id` alebo `url`.

**Vráti** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Vytvorí kontaktný formulár pomocou aktívneho pluginu formulárov (Contact Form 7, WPForms, Fluent Forms alebo Gravity Forms, podľa toho, ktorý je nainštalovaný). Vráti shortcode, ktorý možno vložiť do ľubovoľného príspevku alebo stránky.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `title` | string | Áno | Názov formulára zobrazený v administrácii pluginu formulára |
| `fields` | array | Áno | Zoradený zoznam polí formulára (pozri objekt poľa nižšie) |
| `recipient` | string | Nie | E-mailová adresa na prijímanie odoslaní. Predvolene e-mail administrátora WordPress |
| `subject` | string | Nie | Riadok predmetu e-mailu. Podporuje zástupné symboly `[your-name]` a `[your-subject]` pri použití Contact Form 7 |
| `confirmation_message` | string | Nie | Správa zobrazená po úspešnom odoslaní. Predvolené: `"Thank you for your message. We'll be in touch soon."` |

**Objekt poľa**

| Kľúč | Typ | Povinné | Popis |
|---|---|---|---|
| `name` | string | Áno | Interný názov poľa / strojový kľúč |
| `label` | string | Áno | Ľudsky čitateľný štítok zobrazený vo formulári |
| `type` | string | Áno | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nie | Či musí byť pole vyplnené pred odoslaním. Predvolené `false` |
| `options` | array | Nie | Možnosti pre polia `select`, `checkbox` a `radio` |
| `placeholder` | string | Nie | Zástupný text pre vstupy textového typu |

**Príklad**

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

**Vracia**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Vizuálna kontrola {#visual-review}

Schopnosti vizuálnej kontroly umožňujú agentovi zachytávať snímky obrazovky živých stránok a analyzovať ich, čo umožňuje autonómnu kontrolu dizajnu, porovnania pred/po a kontroly vizuálnej regresie bez potreby akéhokoľvek rozšírenia prehliadača.

### `capture_screenshot` {#capturescreenshot}

Zachytí snímku obrazovky stránky WordPress na zadanej URL pomocou serverového headless prehliadača. Obrázok sa uloží do knižnice médií a vráti sa CDN URL.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `url` | string | Áno | Úplná URL stránky na zachytenie snímky obrazovky, napr. `https://example.com/about/` |
| `width` | integer | Nie | Šírka viewportu v pixeloch. Predvolené `1280` |
| `height` | integer | Nie | Výška viewportu v pixeloch. Predvolené `800` |
| `full_page` | boolean | Nie | Zachytiť celú posúvateľnú stránku namiesto iba viewportu. Predvolené `false` |
| `delay_ms` | integer | Nie | Milisekundy čakania po načítaní stránky pred zachytením, užitočné pre animovaný obsah. Predvolené `500` |
| `label` | string | Nie | Ľudsky čitateľný štítok uložený s prílohou v knižnici médií |

**Vracia**

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

Vezme dve snímky obrazovky a vráti skóre vizuálneho rozdielu plus obrázok rozdielov zvýrazňujúci zmenené oblasti. Užitočné na potvrdenie, že zmena dizajnu priniesla očakávaný výsledok, alebo na zistenie nechcených regresií.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `before_url` | string | Áno | URL stránky, ktorá sa má zachytiť ako stav „pred“ |
| `after_url` | string | Áno | URL stránky, ktorá sa má zachytiť ako stav „po“. Môže to byť rovnaká URL, ak sa porovnáva v čase |
| `width` | integer | Nie | Šírka viewportu pre obe zachytenia. Predvolené `1280` |
| `threshold` | float | Nie | Prah rozdielu pixelov (0.0–1.0). Pixely v rámci tejto tolerancie sa považujú za nezmenené. Predvolené `0.1` |

**Vracia**

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

Hodnota `diff_score` `0.0` znamená žiadnu viditeľnú zmenu; `1.0` znamená, že sa zmenil každý pixel.

---

### `review_page_design` {#reviewpagedesign}

Zachytí snímku obrazovky stránky a odošle ju jazykovému modelu na vizuálnu analýzu. Vráti štruktúrované hodnotenie pokrývajúce rozloženie, typografiu, použitie farieb a obavy týkajúce sa prístupnosti.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `url` | string | Áno | Úplná URL stránky na kontrolu |
| `focus` | string | Nie | Čiarkami oddelený zoznam oblastí kontroly, ktoré sa majú zdôrazniť: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Predvolené: všetky oblasti |
| `width` | integer | Nie | Šírka viewportu. Predvolené `1280` |

**Vracia**

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

## Inštalovateľné schopnosti {#installable-abilities}

Register inštalovateľných schopností vám umožňuje rozšíriť agenta o ďalšie balíky schopností distribuované ako WordPress pluginy. Každý balík registruje jednu alebo viac schopností pomocou štandardného API schopností.

### `list_available_abilities` {#listavailableabilities}

Vráti katalóg balíkov schopností dostupných na inštaláciu z registra.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `category` | string | Nie | Filtrovať podľa kategórie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Vracia**

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

Stiahne a aktivuje ability pack z registra.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `slug` | string | Áno | Plugin slug ability packu |

**Vracia** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Dopytuje sa registra ability, aby našiel najlepší plugin pre opísaný prípad použitia a voliteľne ho nainštaluje.

**Parametre**

| Parameter | Typ | Povinné | Popis |
|---|---|---|---|
| `description` | string | Áno | Opis požadovanej funkcionality v prirodzenom jazyku |
| `install` | boolean | Nie | Ak je `true`, okamžite nainštaluje odporúčaný plugin. Predvolené `false` |

**Príklad**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Vracia**

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
