---
title: Reference for evner
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Reference for evner

Evner er de atomare handlinger, som Gratis AI Agent kan aktivere på din WordPress-installation. Hver evne er en registreret PHP-klasse, der eksponerer et JSON-skema — agenten læser dette skema ved kørselstid for at forstå, hvilke parametre der kræves, og hvad evnen returnerer.

Denne side dokumenterer alle evner, der leveres med Gratis AI Agent v1.9.0.

---

## Brugerdefinerede indlægstyper

Disse evner administrerer brugerdefinerede indlægstyper (CPT'er), der er registreret gennem agenten. Registreringer gemmes i WordPress-indstillingstabellen, så de overlever deaktivering og genaktivering af plugin.

### `register_post_type`

Registrerer en ny brugerdefineret indlægstype.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `slug` | string | Yes | Nøglen for indlægstypen (maks. 20 tegn, ingen store bogstaver, ingen mellemrum) |
| `singular_label` | string | Yes | Menneskeligt læsbart navn i ental, f.eks. `Portfolio Item` |
| `plural_label` | string | Yes | Menneskeligt læsbart navn i flertal, f.eks. `Portfolio Items` |
| `public` | boolean | No | Om indlægstypen er offentligt tilgængelig. Standard `true` |
| `supports` | array | No | Funktioner, der skal understøttes: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standard `["title","editor"]` |
| `has_archive` | boolean | No | Om en arkivside for indlægstypen er aktiveret. Standard `false` |
| `menu_icon` | string | No | Dashicons-klasse eller URL til admin-menuikonet. Standard `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL-slug for indlægstypen. Standard er `slug` |

**Eksempel**

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

**Returnerer** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Returnerer alle brugerdefinerede indlægstyper, der er registreret af agenten.

**Parametre** — ingen

**Returnerer**

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

Afregistrerer en brugerdefineret indlægstype, der tidligere er registreret af agenten. Eksisterende indlæg af den type forbliver i databasen, men er ikke længere tilgængelige via indlægstypen.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `slug` | string | Yes | Nøglen for indlægstypen, der skal fjernes |

**Returnerer** `{ "success": true, "slug": "portfolio" }`

---

## Brugerdefinerede taksonomier

Disse evner administrerer brugerdefinerede taksonomier. Ligesom CPT'er gemmes taksonomiregistreringer.

### `register_taxonomy`

Registrerer en ny brugerdefineret taksonomi.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `slug` | string | Yes | Taksonominøglen (maks. 32 tegn) |
| `singular_label` | string | Yes | Menneskeligt læsbart navn i ental, f.eks. `Project Category` |
| `plural_label` | string | Yes | Menneskeligt læsbart navn i flertal, f.eks. `Project Categories` |
| `post_types` | array | Yes | Slugs for indlægstyper, som denne taksonomi skal knyttes til |
| `hierarchical` | boolean | No | `true` for kategori-stil, `false` for tag-stil. Standard `true` |
| `public` | boolean | No | Om termer er offentligt tilgængelige. Standard `true` |
| `rewrite_slug` | string | No | URL-slug for taksonomien. Standard er `slug` |

**Eksempel**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returnerer** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Returnerer alle brugerdefinerede taksonomier, der er registreret af agenten.

**Parametre** — ingen

**Returnerer**

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

Afregistrerer en brugerdefineret taksonomi, der tidligere er registreret af agenten.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `slug` | string | Yes | Taksonominøglen, der skal fjernes |

**Returnerer** `{ "success": true, "slug": "project-category" }`

---

## Designsystem

Designsystem-evner ændrer den visuelle præsentation af WordPress-sitet — fra brugerdefineret CSS til blokmønstre og sitets logo.

### `inject_custom_css`

Tilføjer CSS til sitets `<head>` via `wp_add_inline_style`. CSS gemmes i indstillingen `gratis_ai_agent_custom_css` og fjernes rent fra køen, når evnen nulstilles.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `css` | string | Yes | Gyldig CSS, der skal injiceres |
| `label` | string | No | Menneskeligt læsbar etiket for denne CSS-blok, brugt i debug-logs. Standard `"agent-injected"` |
| `replace` | boolean | No | Hvis `true`, erstatter al tidligere injiceret CSS. Standard `false` (tilføjer) |

**Eksempel**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returnerer** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registrerer et genanvendeligt blokmønster i WordPress-mønsterbiblioteket.

**Parametre**

| Parameter | Type | Required | Beskrivelse |
|---|---|---|---|
| `slug` | string | Yes | Mønsteridentifikator, f.eks. `gratis/hero-dark` |
| `title` | string | Yes | Menneskeligt læsbart mønsternavn, der vises i editoren |
| `content` | string | Yes | Serialiseret blokmarkup (HTML) for mønsteret |
| `categories` | array | No | Slugs for mønsterkategorier, f.eks. `["featured", "hero"]` |
| `description` | string | No | Kort beskrivelse, der vises i mønstervælgeren |
| `keywords` | array | No | Søgenøgleord |

**Returnerer** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Lister alle blokmønstre, der er registreret af agenten.

**Parametre** — ingen

**Returnerer**

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

Indstiller WordPress site-logoet til et angivet vedhæftnings-ID eller en ekstern billed-URL. Når en URL angives, downloades billedet og importeres til mediebiblioteket.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `attachment_id` | integer | Nej | ID for en eksisterende vedhæftning i mediebiblioteket |
| `url` | string | Nej | Ekstern billed-URL, der skal importeres og indstilles som logo |

En af `attachment_id` eller `url` skal angives.

**Returnerer** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Anvender en navngivet farve-/typografi-forudindstilling på det aktive temas `theme.json` (eller `global-styles`). Forudindstillinger er kuraterede pakker, der vedligeholdes af Gratis AI Agent-teamet.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `preset` | string | Ja | Navn på forudindstilling, f.eks. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nej | Hvis `true`, flet med eksisterende værdier i stedet for at erstatte. Standard er `false` |

**Tilgængelige forudindstillinger**

| Forudindstilling | Beskrivelse |
|---|---|
| `minimal-dark` | Næsten sort baggrund, hvid tekst, enkelt accentfarve |
| `warm-editorial` | Varm offwhite baggrund, serif-overskrifter, jordfarvede accentfarver |
| `corporate-blue` | Marineblå og hvid palet med professionel typografi |
| `vibrant-startup` | Lyse gradienter, afrundede hjørner, moderne sans-serif-skrift |
| `classic-blog` | Neutrale gråtoner, behagelig linjehøjde, traditionel layoutafstand |

**Returnerer** `{ "success": true, "preset": "minimal-dark" }`

---

## Globale stilarter

Global Styles-funktioner læser og skriver theme.json-værdier via WordPress Global Styles API, hvilket påvirker alle blokke og skabeloner på hele sitet.

### `get_global_styles`

Returnerer den aktuelle konfiguration for globale stilarter.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `path` | string | Nej | JSON-pointer til en specifik værdi, f.eks. `/color/palette` eller `/typography/fontSizes`. Returnerer hele objektet, hvis den udelades. |

**Returnerer** det fulde objekt for globale stilarter eller værdien ved `path`.

---

### `set_global_styles`

Opdaterer en eller flere værdier i konfigurationen for globale stilarter.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `path` | string | Ja | JSON-pointer til den værdi, der skal indstilles, f.eks. `/color/palette` |
| `value` | any | Ja | Den nye værdi |

**Eksempel** — tilføj en farve til paletten

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Returnerer** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Nulstiller alle agent-anvendte ændringer af globale stilarter og gendanner temaets standardindstillinger.

**Parametre** — ingen

**Returnerer** `{ "success": true }`

---

## Navigationsmenuer

Navigationsmenu-funktioner opretter og administrerer WordPress navigationsmenuer og deres elementer.

### `create_menu`

Opretter en ny WordPress navigationsmenu.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `name` | string | Ja | Menunavn, f.eks. `Primary Navigation` |
| `location` | string | Nej | Temaplacering, som denne menu skal tildeles til, f.eks. `primary` |

**Returnerer** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Omdøber en menu eller tildeler den på ny til en temaplacering.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `menu_id` | integer | Ja | ID for menuen, der skal opdateres |
| `name` | string | Nej | Nyt menunavn |
| `location` | string | Nej | Temaplacering, der skal tildeles eller tildeles på ny |

**Returnerer** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Tilføjer et element til en eksisterende navigationsmenu.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `menu_id` | integer | Ja | ID for målmenuen |
| `type` | string | Ja | Elementtype: `custom`, `post_type` eller `taxonomy` |
| `title` | string | Nej | Etiket for menuelementet (påkrævet for typen `custom`) |
| `url` | string | Nej | URL for `custom`-elementer |
| `object_id` | integer | Nej | Indlægs-ID eller term-ID for `post_type`/`taxonomy`-elementer |
| `parent_id` | integer | Nej | Menuelement-ID, som dette element skal indlejres under |
| `position` | integer | Nej | Nulbaseret position i menuen |

**Returnerer** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Fjerner et element fra en navigationsmenu.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `item_id` | integer | Ja | Menuelement-ID, der skal fjernes |

**Returnerer** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Viser alle WordPress navigationsmenuer, inklusive deres tildelte temaplaceringer.

**Parametre** — ingen

**Returnerer**

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

## Administration af indstillinger

Indstillingsfunktioner læser og skriver WordPress indstillinger via `get_option` / `update_option`. En indbygget sikkerhedsblokeringsliste forhindrer utilsigtet ændring af kritiske indstillinger.

### `get_option`

Læser en WordPress indstilling.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `option_name` | string | Ja | Indstillingsnøglen, f.eks. `blogname` |

**Returnerer** `{ "option_name": "blogname", "value": "My Site" }`

Returnerer en fejl, hvis `option_name` er på sikkerhedsblokeringslisten.

---

### `set_option`

Skriver en WordPress indstilling.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `option_name` | string | Ja | Indstillingsnøglen |
| `value` | any | Ja | Den nye værdi (serialiseres automatisk for arrays/objekter) |
| `autoload` | string | Nej | `"yes"` eller `"no"`. Standard bevarer den eksisterende autoload-indstilling |

Returnerer en fejl, hvis `option_name` er på sikkerhedsbloklisten.

**Returnerer** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Sletter en WordPress-indstilling.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `option_name` | string | Ja | Den indstillingsnøgle, der skal slettes |

Returnerer en fejl, hvis `option_name` er på sikkerhedsbloklisten.

**Returnerer** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Lister WordPress-indstillinger, der matcher et mønster.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `pattern` | string | Nej | SQL LIKE-mønster til at filtrere indstillingsnavne, f.eks. `gratis_%`. Returnerer alle indstillinger, hvis det udelades (brug med forsigtighed på store databaser). |
| `limit` | integer | Nej | Maksimalt antal resultater. Standard `50`, maks. `500` |

**Returnerer**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Indholdsstyring

Indholdsstyringsfunktioner opretter og redigerer WordPress-indlæg og -sider. Indlægs-ID'er returneres, så efterfølgende trin i planer med flere funktioner kan henvise til det oprettede indhold.

### `create_post`

Opretter et nyt WordPress-indlæg, en side eller en posttypepost med brugerdefineret posttype.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `title` | string | Ja | Indlægstitel |
| `content` | string | Nej | Indlægstekst — accepterer almindelig tekst, HTML eller serialiseret blok-markup |
| `status` | string | Nej | `draft`, `publish`, `pending`, `private`. Standard `draft` |
| `post_type` | string | Nej | Posttype-slug, f.eks. `post`, `page` eller en hvilken som helst registreret CPT. Standard `post` |
| `excerpt` | string | Nej | Kort resumé vist i arkiver og søgeresultater |
| `categories` | array | Nej | Array af kategorinavne eller ID'er, der skal tildeles |
| `tags` | array | Nej | Array af tag-navne eller ID'er, der skal tildeles |
| `author` | integer | Nej | WordPress-bruger-ID, der skal angives som indlæggets forfatter. Standard er den aktuelle bruger |
| `date` | string | Nej | Udgivelsesdato i ISO 8601-format, f.eks. `2026-05-01T09:00:00` |
| `page_template` | string | Nej | Skabelonfil, der skal tildeles dette indlæg eller denne side, f.eks. `page-full-width.php`. Kun meningsfuldt, når `post_type` er `page` eller en CPT, der understøtter sideskabeloner. |

**Eksempel**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Returnerer** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Opdaterer et eksisterende WordPress-indlæg eller en side.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `post_id` | integer | Ja | ID for indlægget, der skal opdateres |
| `title` | string | Nej | Ny indlægstitel |
| `content` | string | Nej | Ny indlægstekst |
| `status` | string | Nej | Ny status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nej | Nyt uddrag |
| `categories` | array | Nej | Erstat den fulde kategoriliste med dette array af navne eller ID'er |
| `tags` | array | Nej | Erstat den fulde tag-liste med dette array af navne eller ID'er |
| `page_template` | string | Nej | Ny skabelonfil, der skal tildeles dette indlæg eller denne side, f.eks. `page-full-width.php`. Angiv en tom streng for at fjerne skabelontildelingen og vende tilbage til temaets standard. |

**Eksempel** — skift skabelon efter oprettelse

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returnerer** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Opretter flere indlæg i et enkelt funktionskald, hvilket reducerer rundrejser under opbygning af sites eller masseimport af indhold. Indlæg oprettes i rækkefølge; hvis ét fejler, fortsætter de andre, og fejlen rapporteres i resultat-arrayet.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `posts` | array | Ja | Array af indlægsobjekter, hvor hvert accepterer de samme parametre som `create_post` |
| `stop_on_error` | boolean | Nej | Hvis `true`, stop behandlingen efter den første fejl. Standard `false` |

**Eksempel**

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

**Returnerer**

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

Tildeler et fremhævet billede (indlægsminiature) til et eksisterende indlæg eller en side. Accepterer et eksisterende vedhæftnings-ID fra Media Library eller en ekstern billed-URL; når en URL angives, downloades og importeres billedet automatisk.

**Parametre**

| Parameter | Type | Påkrævet | Beskrivelse |
|---|---|---|---|
| `post_id` | integer | Ja | ID for indlægget eller siden, der skal opdateres |
| `attachment_id` | integer | Nej | ID for en eksisterende vedhæftning i Media Library |
| `url` | string | Nej | Ekstern billed-URL, der skal importeres og angives som det fremhævede billede |
| `alt_text` | string | Nej | Alt-tekst, der skal anvendes på vedhæftningen, hvis den importeres fra en URL |

En af `attachment_id` eller `url` skal angives.

**Returnerer** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Opretter en kontaktformular ved hjælp af det aktive formular-plugin (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms, afhængigt af hvilket der er installeret). Returnerer en shortcode, der kan indlejres i ethvert indlæg eller på enhver side.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Formularnavn vist i formular-pluginens admin |
| `fields` | array | Yes | Ordnet liste over formularfelter (se feltobjekt nedenfor) |
| `recipient` | string | No | Emailadresse til at modtage indsendelser. Standard er WordPress admin-email |
| `subject` | string | No | Email-emnelinje. Understøtter `[your-name]` og `[your-subject]` placeholders ved brug af Contact Form 7 |
| `confirmation_message` | string | No | Besked vist efter en vellykket indsendelse. Standard: `"Thank you for your message. We'll be in touch soon."` |

**Feltobjekt**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Internt feltnavn / maskinnøgle |
| `label` | string | Yes | Menneskelæsbart label vist på formularen |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Om feltet skal udfyldes før indsendelse. Standard `false` |
| `options` | array | No | Valgmuligheder for `select`, `checkbox` og `radio` felter |
| `placeholder` | string | No | Placeholder-tekst for teksttype-inputs |

**Eksempel**

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

**Returnerer**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuel gennemgang

Visual Review-funktioner lader agenten tage skærmbilleder af live-sider og analysere dem, hvilket muliggør autonom designgennemgang, før/efter-sammenligninger og visuelle regressionstjek uden at kræve nogen browserudvidelse.

### `capture_screenshot`

Tager et skærmbillede af en WordPress-side på en given URL ved hjælp af en server-side headless browser. Billedet gemmes i Media Library, og en CDN-URL returneres.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Fuld URL for siden, der skal tages skærmbillede af, f.eks. `https://example.com/about/` |
| `width` | integer | No | Viewport-bredde i pixels. Standard `1280` |
| `height` | integer | No | Viewport-højde i pixels. Standard `800` |
| `full_page` | boolean | No | Fang hele den scrollbare side i stedet for kun viewporten. Standard `false` |
| `delay_ms` | integer | No | Millisekunder at vente efter sideindlæsning før optagelse, nyttigt til animeret indhold. Standard `500` |
| `label` | string | No | Menneskelæsbart label gemt sammen med vedhæftningen i Media Library |

**Returnerer**

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

Tager to skærmbilleder og returnerer en visuel diff-score plus et diff-billede, der fremhæver ændrede områder. Nyttigt til at bekræfte, at en designændring gav det forventede resultat, eller til at opdage utilsigtede regressioner.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL for siden, der skal fanges som "før"-tilstanden |
| `after_url` | string | Yes | URL for siden, der skal fanges som "efter"-tilstanden. Kan være den samme URL, hvis der sammenlignes over tid |
| `width` | integer | No | Viewport-bredde for begge optagelser. Standard `1280` |
| `threshold` | float | No | Pixel-difference-tærskel (0.0–1.0). Pixels inden for denne tolerance betragtes som uændrede. Standard `0.1` |

**Returnerer**

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

En `diff_score` på `0.0` betyder ingen synlig ændring; `1.0` betyder, at hver pixel er ændret.

---

### `review_page_design`

Tager et skærmbillede af en side og sender det til sprogmodellen til visuel analyse. Returnerer en struktureret vurdering, der dækker layout, typografi, farvebrug og tilgængelighedsproblemer.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Fuld URL for siden, der skal gennemgås |
| `focus` | string | No | Kommasepareret liste over gennemgangsområder, der skal fremhæves: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standard: alle områder |
| `width` | integer | No | Viewport-bredde. Standard `1280` |

**Returnerer**

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

## Installerbare funktioner

Installable Abilities Registry lader dig udvide agenten med yderligere funktionspakker, der distribueres som WordPress plugins. Hver pakke registrerer en eller flere funktioner ved hjælp af standard-ability API'en.

### `list_available_abilities`

Returnerer kataloget over funktionspakker, der er tilgængelige for installation fra registreringsdatabasen.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | No | Filtrér efter kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Returnerer**

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

Downloader og aktiverer en ability pack fra registreringsdatabasen.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Ability pack plugin slug |

**Returnerer** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Forespørger ability-registreringsdatabasen for at finde det bedste plugin til en beskrevet use case og installerer det eventuelt.

**Parametre**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Yes | Naturlig sprog-beskrivelse af den ønskede funktionalitet |
| `install` | boolean | No | Hvis `true`, installerer det anbefalede plugin med det samme. Standard `false` |

**Eksempel**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Returnerer**

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
