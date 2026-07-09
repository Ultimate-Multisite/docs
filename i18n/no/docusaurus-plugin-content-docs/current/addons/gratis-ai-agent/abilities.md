---
title: Referanse for ferdigheter
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referanse for evner

Evner er de atomiske handlingene som Gratis AI Agent kan påkalle i WordPress-installasjonen din. Hver evne er en registrert PHP-klasse som eksponerer et JSON-skjema — agenten leser dette skjemaet ved kjøring for å forstå hvilke parametere som kreves og hva evnen returnerer.

Denne siden dokumenterer alle evner som leveres med Gratis AI Agent v1.9.0.

---

## Egendefinerte innleggstyper

Disse evnene administrerer egendefinerte innleggstyper (CPT-er) registrert gjennom agenten. Registreringer lagres i WordPress-alternativtabellen slik at de overlever deaktivering og reaktivering av pluginen.

### `register_post_type`

Registrerer en ny egendefinert innleggstype.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Nøkkelen for innleggstypen (maks 20 tegn, ingen store bokstaver, ingen mellomrom) |
| `singular_label` | string | Yes | Lesbart entallsnavn, f.eks. `Portfolio Item` |
| `plural_label` | string | Yes | Lesbart flertallsnavn, f.eks. `Portfolio Items` |
| `public` | boolean | No | Om innleggstypen er offentlig tilgjengelig. Standard `true` |
| `supports` | array | No | Funksjoner som skal støttes: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standard `["title","editor"]` |
| `has_archive` | boolean | No | Om en arkivside for innleggstypen er aktivert. Standard `false` |
| `menu_icon` | string | No | Dashicons-klasse eller URL for admin-menyikonet. Standard `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | URL-slug for innleggstypen. Bruker som standard `slug` |

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

Returnerer alle egendefinerte innleggstyper registrert av agenten.

**Parametere** — ingen

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

Avregistrerer en egendefinert innleggstype som tidligere er registrert av agenten. Eksisterende innlegg av den typen blir liggende i databasen, men er ikke lenger tilgjengelige via innleggstypen.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Nøkkelen for innleggstypen som skal fjernes |

**Returnerer** `{ "success": true, "slug": "portfolio" }`

---

## Egendefinerte taksonomier

Disse evnene administrerer egendefinerte taksonomier. I likhet med CPT-er lagres taksonomiregistreringer.

### `register_taxonomy`

Registrerer en ny egendefinert taksonomi.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonominøkkelen (maks 32 tegn) |
| `singular_label` | string | Yes | Lesbart entallsnavn, f.eks. `Project Category` |
| `plural_label` | string | Yes | Lesbart flertallsnavn, f.eks. `Project Categories` |
| `post_types` | array | Yes | Slugs for innleggstyper denne taksonomien skal knyttes til |
| `hierarchical` | boolean | No | `true` for kategoristil, `false` for taggstil. Standard `true` |
| `public` | boolean | No | Om termer er offentlig tilgjengelige. Standard `true` |
| `rewrite_slug` | string | No | URL-slug for taksonomien. Bruker som standard `slug` |

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

Returnerer alle egendefinerte taksonomier registrert av agenten.

**Parametere** — ingen

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

Avregistrerer en egendefinert taksonomi som tidligere er registrert av agenten.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Taksonominøkkelen som skal fjernes |

**Returnerer** `{ "success": true, "slug": "project-category" }`

---

## Designsystem

Designsystem-evner endrer den visuelle presentasjonen av WordPress-nettstedet — fra egendefinert CSS til blokkmønstre og nettstedets logo.

### `inject_custom_css`

Legger til CSS i nettstedets `<head>` via `wp_add_inline_style`. CSS lagres i alternativet `gratis_ai_agent_custom_css` og fjernes fra køen på en ryddig måte når evnen tilbakestilles.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | Gyldig CSS som skal injiseres |
| `label` | string | No | Lesbar etikett for denne CSS-blokken, brukt i feilsøkingslogger. Standard `"agent-injected"` |
| `replace` | boolean | No | Hvis `true`, erstatter all tidligere injisert CSS. Standard `false` (legger til) |

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

Registrerer et gjenbrukbart blokkmønster i WordPress-mønsterbiblioteket.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Mønsteridentifikator, f.eks. `gratis/hero-dark` |
| `title` | string | Yes | Lesbart mønsternavn vist i redigeringsprogrammet |
| `content` | string | Yes | Serialisert blokkmarkering (HTML) for mønsteret |
| `categories` | array | No | Slugs for mønsterkategorier, f.eks. `["featured", "hero"]` |
| `description` | string | No | Kort beskrivelse vist i mønstervelgeren |
| `keywords` | array | No | Søkenøkkelord |

**Returnerer** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Lister alle blokkmønstre registrert av agenten.

**Parametere** — ingen

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

Setter WordPress nettstedlogo til en gitt vedleggs-ID eller en ekstern bilde-URL. Når en URL oppgis, lastes bildet ned og importeres til mediebiblioteket.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ID for et eksisterende vedlegg i mediebiblioteket |
| `url` | string | No | Ekstern bilde-URL som skal importeres og settes som logo |

Én av `attachment_id` eller `url` må oppgis.

**Returnerer** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Bruker en navngitt farge-/typografiforhåndsinnstilling på det aktive temaets `theme.json` (eller `global-styles`). Forhåndsinnstillinger er kuraterte pakker vedlikeholdt av Gratis AI Agent-teamet.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Navn på forhåndsinnstilling, f.eks. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | Hvis `true`, slå sammen med eksisterende verdier i stedet for å erstatte. Standard `false` |

**Tilgjengelige forhåndsinnstillinger**

| Preset | Description |
|---|---|
| `minimal-dark` | Nesten svart bakgrunn, hvit tekst, én enkelt aksentfarge |
| `warm-editorial` | Varm offwhite bakgrunn, seriffoverskrifter, jordnære aksentfarger |
| `corporate-blue` | Marineblå og hvit palett med profesjonell typografi |
| `vibrant-startup` | Lyse gradienter, avrundede hjørner, moderne sans-serif-skrift |
| `classic-blog` | Nøytrale gråtoner, behagelig linjehøyde, tradisjonell layoutavstand |

**Returnerer** `{ "success": true, "preset": "minimal-dark" }`

---

## Globale stiler

Global Styles-funksjoner leser og skriver theme.json-verdier gjennom WordPress Global Styles API, og påvirker alle blokker og maler på hele nettstedet.

### `get_global_styles`

Returnerer den gjeldende konfigurasjonen for globale stiler.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | JSON-peker til en bestemt verdi, f.eks. `/color/palette` eller `/typography/fontSizes`. Returnerer hele objektet hvis utelatt. |

**Returnerer** hele objektet for globale stiler eller verdien ved `path`.

---

### `set_global_styles`

Oppdaterer én eller flere verdier i konfigurasjonen for globale stiler.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | JSON-peker til verdien som skal settes, f.eks. `/color/palette` |
| `value` | any | Yes | Den nye verdien |

**Eksempel** — legg til en farge i paletten

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

Tilbakestiller alle agentanvendte endringer i globale stiler og gjenoppretter temaets standardverdier.

**Parametere** — ingen

**Returnerer** `{ "success": true }`

---

## Navigasjonsmenyer

Navigasjonsmeny-funksjoner oppretter og administrerer WordPress navigasjonsmenyer og elementene deres.

### `create_menu`

Oppretter en ny WordPress navigasjonsmeny.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Menynavn, f.eks. `Primary Navigation` |
| `location` | string | No | Temaplassering som denne menyen skal tilordnes til, f.eks. `primary` |

**Returnerer** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Endrer navn på en meny eller tilordner den på nytt til en temaplassering.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID for menyen som skal oppdateres |
| `name` | string | No | Nytt menynavn |
| `location` | string | No | Temaplassering som skal tilordnes eller tilordnes på nytt |

**Returnerer** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Legger til et element i en eksisterende navigasjonsmeny.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ID for målmenyen |
| `type` | string | Yes | Elementtype: `custom`, `post_type` eller `taxonomy` |
| `title` | string | No | Etikett for menyelementet (påkrevd for typen `custom`) |
| `url` | string | No | URL for `custom`-elementer |
| `object_id` | integer | No | Innleggs-ID eller term-ID for `post_type`-/`taxonomy`-elementer |
| `parent_id` | integer | No | Menyelement-ID som dette elementet skal nestes under |
| `position` | integer | No | Nullbasert posisjon i menyen |

**Returnerer** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Fjerner et element fra en navigasjonsmeny.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | Menyelement-ID som skal fjernes |

**Returnerer** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Lister opp alle WordPress navigasjonsmenyer, inkludert deres tilordnede temaplasseringer.

**Parametere** — ingen

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

## Alternativadministrasjon

Alternativ-funksjoner leser og skriver WordPress alternativer via `get_option` / `update_option`. En innebygd sikkerhetssperreliste forhindrer utilsiktet endring av kritiske innstillinger.

### `get_option`

Leser et WordPress alternativ.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Alternativnøkkelen, f.eks. `blogname` |

**Returnerer** `{ "option_name": "blogname", "value": "My Site" }`

Returnerer en feil hvis `option_name` er på sikkerhetssperrelisten.

---

### `set_option`

Skriver et WordPress alternativ.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Alternativnøkkelen |
| `value` | any | Yes | Den nye verdien (serialiseres automatisk for matriser/objekter) |
| `autoload` | string | No | `"yes"` eller `"no"`. Standard bevarer den eksisterende autoload-innstillingen |

Returnerer en feil hvis `option_name` er på sikkerhetsblokkeringslisten.

**Returnerer** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Sletter et WordPress-valg.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `option_name` | string | Ja | Valgnøkkelen som skal slettes |

Returnerer en feil hvis `option_name` er på sikkerhetsblokkeringslisten.

**Returnerer** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Lister WordPress-valg som samsvarer med et mønster.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `pattern` | string | Nei | SQL LIKE-mønster for å filtrere valgnavn, f.eks. `gratis_%`. Returnerer alle valg hvis utelatt (bruk med forsiktighet på store databaser). |
| `limit` | integer | Nei | Maksimalt antall resultater. Standard `50`, maks `500` |

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

## Innholdsadministrasjon

Innholdsadministrasjonsfunksjoner oppretter og redigerer WordPress-innlegg og -sider. Innleggs-ID-er returneres slik at påfølgende steg i planer med flere funksjoner kan referere til det opprettede innholdet.

### `create_post`

Oppretter et nytt WordPress-innlegg, en side eller en oppføring for egendefinert innleggstype.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `title` | string | Ja | Innleggstittel |
| `content` | string | Nei | Innleggsinnhold — godtar ren tekst, HTML eller serialisert blokkmarkering |
| `status` | string | Nei | `draft`, `publish`, `pending`, `private`. Standard `draft` |
| `post_type` | string | Nei | Slug for innleggstype, f.eks. `post`, `page` eller en registrert CPT. Standard `post` |
| `excerpt` | string | Nei | Kort sammendrag som vises i arkiver og søkeresultater |
| `categories` | array | Nei | Matrise med kategorinavn eller ID-er som skal tilordnes |
| `tags` | array | Nei | Matrise med taggnavn eller ID-er som skal tilordnes |
| `author` | integer | Nei | WordPress-bruker-ID som skal settes som innleggets forfatter. Standard er gjeldende bruker |
| `date` | string | Nei | Publiseringsdato i ISO 8601-format, f.eks. `2026-05-01T09:00:00` |
| `page_template` | string | Nei | Malfil som skal tilordnes dette innlegget eller denne siden, f.eks. `page-full-width.php`. Bare relevant når `post_type` er `page` eller en CPT som støtter sidemaler. |

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

Oppdaterer et eksisterende WordPress-innlegg eller en side.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `post_id` | integer | Ja | ID-en til innlegget som skal oppdateres |
| `title` | string | Nei | Ny innleggstittel |
| `content` | string | Nei | Nytt innleggsinnhold |
| `status` | string | Nei | Ny status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nei | Nytt utdrag |
| `categories` | array | Nei | Erstatt hele kategorilisten med denne matrisen med navn eller ID-er |
| `tags` | array | Nei | Erstatt hele tagglisten med denne matrisen med navn eller ID-er |
| `page_template` | string | Nei | Ny malfil som skal tilordnes dette innlegget eller denne siden, f.eks. `page-full-width.php`. Send en tom streng for å fjerne maltilordningen og gå tilbake til theme-standard. |

**Eksempel** — endre mal etter opprettelse

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returnerer** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Oppretter flere innlegg i ett enkelt funksjonskall, noe som reduserer rundreiser under bygging av nettsteder eller import av innhold i bulk. Innlegg opprettes i rekkefølge; hvis ett mislykkes, fortsetter de andre, og feilen rapporteres i resultatmatrisen.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `posts` | array | Ja | Matrise med innleggsobjekter, der hvert godtar de samme parameterne som `create_post` |
| `stop_on_error` | boolean | Nei | Hvis `true`, stopp behandlingen etter den første feilen. Standard `false` |

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

Tilordner et fremhevet bilde (innleggsminiatyrbilde) til et eksisterende innlegg eller en side. Godtar en eksisterende vedleggs-ID fra mediebiblioteket eller en ekstern bilde-URL; når en URL oppgis, lastes bildet ned og importeres automatisk.

**Parametere**

| Parameter | Type | Påkrevd | Beskrivelse |
|---|---|---|---|
| `post_id` | integer | Ja | ID-en til innlegget eller siden som skal oppdateres |
| `attachment_id` | integer | Nei | ID-en til et eksisterende vedlegg i mediebiblioteket |
| `url` | string | Nei | Ekstern bilde-URL som skal importeres og settes som det fremhevede bildet |
| `alt_text` | string | Nei | Alt-tekst som skal brukes på vedlegget hvis det importeres fra en URL |

Én av `attachment_id` eller `url` må oppgis.

**Returnerer** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Oppretter et kontaktskjema ved hjelp av den aktive skjemapluginen (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms, avhengig av hva som er installert). Returnerer en shortcode som kan bygges inn i ethvert innlegg eller på enhver side.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Skjemanavn som vises i skjema-plugin-admin |
| `fields` | array | Yes | Ordnet liste over skjemafelt (se feltobjekt nedenfor) |
| `recipient` | string | No | E-postadresse som skal motta innsendinger. Standard er WordPress-adminens e-postadresse |
| `subject` | string | No | Emnelinje for e-post. Støtter plassholderne `[your-name]` og `[your-subject]` ved bruk av Contact Form 7 |
| `confirmation_message` | string | No | Melding som vises etter en vellykket innsending. Standard: `"Thank you for your message. We'll be in touch soon."` |

**Feltobjekt**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Internt feltnavn / maskinnøkkel |
| `label` | string | Yes | Menneskelig lesbar etikett som vises på skjemaet |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | Om feltet må fylles ut før innsending. Standard `false` |
| `options` | array | No | Alternativer for feltene `select`, `checkbox` og `radio` |
| `placeholder` | string | No | Plassholdertekst for inndata av teksttype |

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

## Visuell gjennomgang

Visuell gjennomgang-funksjoner lar agenten ta skjermbilder av live-sider og analysere dem, noe som muliggjør autonom designgjennomgang, før/etter-sammenligninger og visuelle regresjonskontroller uten å kreve noen nettleserutvidelse.

### `capture_screenshot`

Tar et skjermbilde av en WordPress-side på en angitt URL ved hjelp av en serverbasert headless-nettleser. Bildet lagres i mediebiblioteket, og en CDN-URL returneres.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Full URL til siden det skal tas skjermbilde av, f.eks. `https://example.com/about/` |
| `width` | integer | No | Viewport-bredde i piksler. Standard `1280` |
| `height` | integer | No | Viewport-høyde i piksler. Standard `800` |
| `full_page` | boolean | No | Ta bilde av hele den rullbare siden i stedet for bare viewporten. Standard `false` |
| `delay_ms` | integer | No | Millisekunder å vente etter sideinnlasting før bildet tas, nyttig for animert innhold. Standard `500` |
| `label` | string | No | Menneskelig lesbar etikett lagret med vedlegget i mediebiblioteket |

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

Tar to skjermbilder og returnerer en visuell diff-score pluss et diff-bilde som fremhever endrede områder. Nyttig for å bekrefte at en designendring ga det forventede resultatet, eller for å oppdage utilsiktede regresjoner.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | URL til siden som skal tas opp som "før"-tilstanden |
| `after_url` | string | Yes | URL til siden som skal tas opp som "etter"-tilstanden. Kan være samme URL hvis det sammenlignes over tid |
| `width` | integer | No | Viewport-bredde for begge opptak. Standard `1280` |
| `threshold` | float | No | Terskel for pikselforskjell (0.0–1.0). Piksler innenfor denne toleransen anses som uendret. Standard `0.1` |

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

En `diff_score` på `0.0` betyr ingen synlig endring; `1.0` betyr at hver piksel er endret.

---

### `review_page_design`

Tar et skjermbilde av en side og sender det til språkmodellen for visuell analyse. Returnerer en strukturert vurdering som dekker layout, typografi, fargebruk og tilgjengelighetshensyn.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | Full URL til siden som skal gjennomgås |
| `focus` | string | No | Kommaseparert liste over gjennomgangsområder som skal vektlegges: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standard: alle områder |
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

## Installerbare funksjoner

Registeret for installerbare funksjoner lar deg utvide agenten med flere funksjonspakker distribuert som WordPress-plugins. Hver pakke registrerer én eller flere funksjoner ved hjelp av standard funksjons-API.

### `list_available_abilities`

Returnerer katalogen over funksjonspakker som er tilgjengelige for installasjon fra registeret.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `category` | string | Nei | Filtrer etter kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

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

Laster ned og aktiverer en ability-pakke fra registeret.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Ja | Ability-pakke plugin-slug |

**Returnerer** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Spør ability-registeret for å finne den beste pluginen for et beskrevet bruksområde og installerer den eventuelt.

**Parametere**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `description` | string | Ja | Naturlig språk-beskrivelse av ønsket funksjonalitet |
| `install` | boolean | Nei | Hvis `true`, installerer den anbefalte pluginen umiddelbart. Standard `false` |

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
