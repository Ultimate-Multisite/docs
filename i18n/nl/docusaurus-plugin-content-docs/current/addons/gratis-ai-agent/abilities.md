---
title: Referentie voor mogelijkheden
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Abilities-referentie

Abilities zijn de atomische acties die Gratis AI Agent kan aanroepen op je WordPress-installatie. Elke ability is een geregistreerde PHP-class die een JSON-schema beschikbaar stelt — de agent leest dit schema tijdens runtime om te begrijpen welke parameters vereist zijn en wat de ability retourneert.

Deze pagina documenteert alle abilities die worden meegeleverd met Gratis AI Agent v1.9.0.

---

## Aangepaste berichttypen {#custom-post-types}

Deze abilities beheren aangepaste berichttypen (CPT's) die via de agent zijn geregistreerd. Registraties worden opgeslagen in de WordPress-optietabel, zodat ze deactivering en heractivering van de plugin overleven.

### `register_post_type` {#registerposttype}

Registreert een nieuw aangepast berichttype.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | De sleutel van het berichttype (max. 20 tekens, geen hoofdletters, geen spaties) |
| `singular_label` | string | Ja | Menselijk leesbare enkelvoudige naam, bijv. `Portfolio Item` |
| `plural_label` | string | Ja | Menselijk leesbare meervoudige naam, bijv. `Portfolio Items` |
| `public` | boolean | Nee | Of het berichttype publiek toegankelijk is. Standaard `true` |
| `supports` | array | Nee | Te ondersteunen functies: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standaard `["title","editor"]` |
| `has_archive` | boolean | Nee | Of een archiefpagina voor het berichttype is ingeschakeld. Standaard `false` |
| `menu_icon` | string | Nee | Dashicons-class of URL voor het admin-menu-icoon. Standaard `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nee | URL-slug voor het berichttype. Standaard ingesteld op `slug` |

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

**Retourneert** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Retourneert alle aangepaste berichttypen die door de agent zijn geregistreerd.

**Parameters** — geen

**Retourneert**

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

Deregistreert een aangepast berichttype dat eerder door de agent is geregistreerd. Bestaande berichten van dat type blijven in de database, maar zijn niet langer toegankelijk via het berichttype.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | De sleutel van het berichttype om te verwijderen |

**Retourneert** `{ "success": true, "slug": "portfolio" }`

---

## Aangepaste taxonomieën {#custom-taxonomies}

Deze abilities beheren aangepaste taxonomieën. Net als CPT's worden taxonomieregistraties opgeslagen.

### `register_taxonomy` {#registertaxonomy}

Registreert een nieuwe aangepaste taxonomie.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | De taxonomiesleutel (max. 32 tekens) |
| `singular_label` | string | Ja | Menselijk leesbare enkelvoudige naam, bijv. `Project Category` |
| `plural_label` | string | Ja | Menselijk leesbare meervoudige naam, bijv. `Project Categories` |
| `post_types` | array | Ja | Berichttype-slugs waaraan deze taxonomie moet worden gekoppeld |
| `hierarchical` | boolean | Nee | `true` voor categorie-stijl, `false` voor tag-stijl. Standaard `true` |
| `public` | boolean | Nee | Of termen publiek toegankelijk zijn. Standaard `true` |
| `rewrite_slug` | string | Nee | URL-slug voor de taxonomie. Standaard ingesteld op `slug` |

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

**Retourneert** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Retourneert alle aangepaste taxonomieën die door de agent zijn geregistreerd.

**Parameters** — geen

**Retourneert**

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

Deregistreert een aangepaste taxonomie die eerder door de agent is geregistreerd.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | De taxonomiesleutel om te verwijderen |

**Retourneert** `{ "success": true, "slug": "project-category" }`

---

## Ontwerpsysteem {#design-system}

Ontwerpsysteem-abilities wijzigen de visuele presentatie van de WordPress-site — van aangepaste CSS tot blokpatronen en het sitelogo.

### `inject_custom_css` {#injectcustomcss}

Voegt CSS toe aan de `<head>` van de site via `wp_add_inline_style`. CSS wordt opgeslagen in de optie `gratis_ai_agent_custom_css` en netjes uit de wachtrij verwijderd wanneer de ability wordt gereset.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `css` | string | Ja | Geldige CSS om te injecteren |
| `label` | string | Nee | Menselijk leesbaar label voor dit CSS-blok, gebruikt in debuglogs. Standaard `"agent-injected"` |
| `replace` | boolean | Nee | Als `true`, vervangt dit alle eerder geïnjecteerde CSS. Standaard `false` (voegt toe) |

**Voorbeeld**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Retourneert** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registreert een herbruikbaar blokpatroon in de WordPress-patroonbibliotheek.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | Patroon-ID, bijv. `gratis/hero-dark` |
| `title` | string | Ja | Menselijk leesbare patroonnaam die in de editor wordt getoond |
| `content` | string | Ja | Geserialiseerde blokmark-up (HTML) voor het patroon |
| `categories` | array | Nee | Patrooncategorie-slugs, bijv. `["featured", "hero"]` |
| `description` | string | Nee | Korte beschrijving die in de patroonkiezer wordt getoond |
| `keywords` | array | Nee | Zoekwoorden |

**Retourneert** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Toont alle blokpatronen die door de agent zijn geregistreerd.

**Parameters** — geen

**Retourneert**

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

Stelt het WordPress-sitelogo in op een opgegeven bijlage-ID of een externe afbeeldings-URL. Wanneer een URL wordt opgegeven, wordt de afbeelding gedownload en geïmporteerd in de Mediabibliotheek.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `attachment_id` | integer | Nee | ID van een bestaande bijlage in de Mediabibliotheek |
| `url` | string | Nee | Externe afbeeldings-URL om te importeren en als logo in te stellen |

Een van `attachment_id` of `url` moet worden opgegeven.

**Retourneert** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Past een benoemde kleur-/typografie-preset toe op de `theme.json` (of `global-styles`) van het actieve thema. Presets zijn samengestelde bundels die worden onderhouden door het Gratis AI Agent-team.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `preset` | string | Ja | Presetnaam, bijv. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nee | Als `true`, samenvoegen met bestaande waarden in plaats van vervangen. Standaard `false` |

**Beschikbare presets**

| Preset | Beschrijving |
|---|---|
| `minimal-dark` | Bijna zwarte achtergrond, witte tekst, één accentkleur |
| `warm-editorial` | Warme gebroken witte achtergrond, serif-koppen, aardse accentkleuren |
| `corporate-blue` | Marineblauw en wit palet met professionele typografie |
| `vibrant-startup` | Heldere gradients, afgeronde hoeken, modern sans-serif-lettertype |
| `classic-blog` | Neutrale grijstinten, comfortabele regelhoogte, traditionele lay-outafstand |

**Retourneert** `{ "success": true, "preset": "minimal-dark" }`

---

## Globale stijlen {#global-styles}

Mogelijkheden voor Globale stijlen lezen en schrijven theme.json-waarden via de WordPress Global Styles API, met effect op alle blokken en templates voor de hele site.

### `get_global_styles` {#getglobalstyles}

Retourneert de huidige configuratie van globale stijlen.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `path` | string | Nee | JSON-pointer naar een specifieke waarde, bijv. `/color/palette` of `/typography/fontSizes`. Retourneert het volledige object als dit wordt weggelaten. |

**Retourneert** het volledige object met globale stijlen of de waarde op `path`.

---

### `set_global_styles` {#setglobalstyles}

Werkt een of meer waarden bij in de configuratie van globale stijlen.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `path` | string | Ja | JSON-pointer naar de in te stellen waarde, bijv. `/color/palette` |
| `value` | any | Ja | De nieuwe waarde |

**Voorbeeld** — voeg een kleur toe aan het palet

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Retourneert** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Reset alle door de agent toegepaste wijzigingen in globale stijlen en herstelt de standaardwaarden van het thema.

**Parameters** — geen

**Retourneert** `{ "success": true }`

---

## Navigatiemenu's {#navigation-menus}

Mogelijkheden voor navigatiemenu's maken en beheren WordPress-navigatiemenu's en hun items.

### `create_menu` {#createmenu}

Maakt een nieuw WordPress-navigatiemenu.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `name` | string | Ja | Menunaam, bijv. `Primary Navigation` |
| `location` | string | Nee | Themalocatie om dit menu aan toe te wijzen, bijv. `primary` |

**Retourneert** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Wijzigt de naam van een menu of wijst het opnieuw toe aan een themalocatie.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `menu_id` | integer | Ja | ID van het menu dat moet worden bijgewerkt |
| `name` | string | Nee | Nieuwe menunaam |
| `location` | string | Nee | Themalocatie om toe te wijzen of opnieuw toe te wijzen |

**Retourneert** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Voegt een item toe aan een bestaand navigatiemenu.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `menu_id` | integer | Ja | ID van het doelmenu |
| `type` | string | Ja | Itemtype: `custom`, `post_type` of `taxonomy` |
| `title` | string | Nee | Label voor het menu-item (vereist voor type `custom`) |
| `url` | string | Nee | URL voor `custom`-items |
| `object_id` | integer | Nee | Bericht-ID of term-ID voor `post_type`-/`taxonomy`-items |
| `parent_id` | integer | Nee | Menu-item-ID om dit item onder te nesten |
| `position` | integer | Nee | Nulgebaseerde positie in het menu |

**Retourneert** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Verwijdert een item uit een navigatiemenu.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `item_id` | integer | Ja | Menu-item-ID om te verwijderen |

**Retourneert** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Toont alle WordPress-navigatiemenu's, inclusief hun toegewezen themalocaties.

**Parameters** — geen

**Retourneert**

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

## Optiebeheer {#options-management}

Optiemogelijkheden lezen en schrijven WordPress-opties via `get_option` / `update_option`. Een ingebouwde veiligheidsblokkeerlijst voorkomt onbedoelde wijziging van kritieke instellingen.

### `get_option` {#getoption}

Leest een WordPress-optie.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `option_name` | string | Ja | De optiesleutel, bijv. `blogname` |

**Retourneert** `{ "option_name": "blogname", "value": "My Site" }`

Retourneert een fout als `option_name` op de veiligheidsblokkeerlijst staat.

---

### `set_option` {#setoption}

Schrijft een WordPress-optie.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `option_name` | string | Ja | De optiesleutel |
| `value` | any | Ja | De nieuwe waarde (automatisch geserialiseerd voor arrays/objecten) |
| `autoload` | string | Nee | `"yes"` of `"no"`. Standaard wordt de bestaande autoload-instelling behouden |

Retourneert een fout als `option_name` op de veiligheidsblokkeerlijst staat.

**Retourneert** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Verwijdert een WordPress-optie.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `option_name` | string | Ja | De optiesleutel om te verwijderen |

Retourneert een fout als `option_name` op de veiligheidsblokkeerlijst staat.

**Retourneert** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Geeft WordPress-opties weer die overeenkomen met een patroon.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `pattern` | string | Nee | SQL LIKE-patroon om optienamen te filteren, bijv. `gratis_%`. Retourneert alle opties als dit wordt weggelaten (gebruik met voorzichtigheid bij grote databases). |
| `limit` | integer | Nee | Maximumaantal resultaten. Standaard `50`, max `500` |

**Retourneert**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Contentbeheer {#content-management}

Contentbeheer-mogelijkheden maken en bewerken WordPress-berichten en pagina's. Bericht-ID's worden geretourneerd zodat vervolgstappen in plannen met meerdere mogelijkheden naar de aangemaakte content kunnen verwijzen.

### `create_post` {#createpost}

Maakt een nieuw WordPress-bericht, een nieuwe pagina of een item van een aangepast berichttype aan.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `title` | string | Ja | Berichttitel |
| `content` | string | Nee | Berichtinhoud — accepteert platte tekst, HTML of geserialiseerde blokmark-up |
| `status` | string | Nee | `draft`, `publish`, `pending`, `private`. Standaard `draft` |
| `post_type` | string | Nee | Berichttype-slug, bijv. `post`, `page` of een geregistreerde CPT. Standaard `post` |
| `excerpt` | string | Nee | Korte samenvatting die in archieven en zoekresultaten wordt getoond |
| `categories` | array | Nee | Array van categorienamen of ID's om toe te wijzen |
| `tags` | array | Nee | Array van tagnamen of ID's om toe te wijzen |
| `author` | integer | Nee | WordPress-gebruikers-ID om als auteur van het bericht in te stellen. Standaard de huidige gebruiker |
| `date` | string | Nee | Publicatiedatum in ISO 8601-formaat, bijv. `2026-05-01T09:00:00` |
| `page_template` | string | Nee | Templatebestand om aan dit bericht of deze pagina toe te wijzen, bijv. `page-full-width.php`. Alleen zinvol wanneer `post_type` `page` is of een CPT die paginatemplates ondersteunt. |

**Voorbeeld**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Retourneert** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Werkt een bestaand WordPress-bericht of bestaande pagina bij.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `post_id` | integer | Ja | ID van het bericht dat moet worden bijgewerkt |
| `title` | string | Nee | Nieuwe berichttitel |
| `content` | string | Nee | Nieuwe berichtinhoud |
| `status` | string | Nee | Nieuwe status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Nee | Nieuw uittreksel |
| `categories` | array | Nee | Vervang de volledige categorielijst door deze array met namen of ID's |
| `tags` | array | Nee | Vervang de volledige taglijst door deze array met namen of ID's |
| `page_template` | string | Nee | Nieuw templatebestand om aan dit bericht of deze pagina toe te wijzen, bijv. `page-full-width.php`. Geef een lege string door om de templatetoewijzing te verwijderen en terug te vallen op de standaardwaarde van de theme. |

**Voorbeeld** — template wijzigen na aanmaak

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Retourneert** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Maakt meerdere berichten aan in één enkele aanroep van een mogelijkheid, waardoor round-trips tijdens het bouwen van sites of bulkimport van content worden verminderd. Berichten worden op volgorde aangemaakt; als er één mislukt, gaan de andere door en wordt de fout gerapporteerd in de resultatenarray.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `posts` | array | Ja | Array van berichtobjecten, elk met dezelfde parameters als `create_post` |
| `stop_on_error` | boolean | Nee | Als `true`, stop de verwerking na de eerste fout. Standaard `false` |

**Voorbeeld**

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

**Retourneert**

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

Wijst een uitgelichte afbeelding (berichtthumbnail) toe aan een bestaand bericht of bestaande pagina. Accepteert een bestaande bijlage-ID uit de Media Library of een externe afbeeldings-URL; wanneer een URL wordt opgegeven, wordt de afbeelding automatisch gedownload en geïmporteerd.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `post_id` | integer | Ja | ID van het bericht of de pagina om bij te werken |
| `attachment_id` | integer | Nee | ID van een bestaande Media Library-bijlage |
| `url` | string | Nee | Externe afbeeldings-URL om te importeren en in te stellen als uitgelichte afbeelding |
| `alt_text` | string | Nee | Alt-tekst om op de bijlage toe te passen als deze vanaf een URL wordt geïmporteerd |

Een van `attachment_id` of `url` moet worden opgegeven.

**Retourneert** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Maakt een contactformulier aan met de actieve formulierplugin (Contact Form 7, WPForms, Fluent Forms of Gravity Forms, afhankelijk van wat is geïnstalleerd). Retourneert een shortcode die in elk bericht of elke pagina kan worden ingesloten.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `title` | string | Ja | Formuliernaam die wordt getoond in de beheeromgeving van de formulierplugin |
| `fields` | array | Ja | Geordende lijst met formuliervelden (zie Field-object hieronder) |
| `recipient` | string | Nee | E-mailadres om inzendingen te ontvangen. Standaard is dit het WordPress-beheerderse-mailadres |
| `subject` | string | Nee | Onderwerpregel van e-mail. Ondersteunt `[your-name]`- en `[your-subject]`-placeholders bij gebruik van Contact Form 7 |
| `confirmation_message` | string | Nee | Bericht dat wordt weergegeven na een succesvolle inzending. Standaard: `"Thank you for your message. We'll be in touch soon."` |

**Field-object**

| Sleutel | Type | Vereist | Beschrijving |
|---|---|---|---|
| `name` | string | Ja | Interne veldnaam / machinesleutel |
| `label` | string | Ja | Voor mensen leesbaar label dat op het formulier wordt getoond |
| `type` | string | Ja | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nee | Of het veld moet worden ingevuld vóór verzending. Standaard `false` |
| `options` | array | Nee | Opties voor `select`-, `checkbox`- en `radio`-velden |
| `placeholder` | string | Nee | Placeholdertekst voor invoervelden van het teksttype |

**Voorbeeld**

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

**Retourneert**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuele beoordeling {#visual-review}

Met Visual Review-mogelijkheden kan de agent screenshots van livepagina’s vastleggen en analyseren, waardoor autonome ontwerpbeoordeling, voor/na-vergelijkingen en visuele regressiecontroles mogelijk zijn zonder dat een browserextensie nodig is.

### `capture_screenshot` {#capturescreenshot}

Legt een screenshot vast van een WordPress-pagina op een opgegeven URL met behulp van een server-side headless browser. De afbeelding wordt opgeslagen in de Media Library en er wordt een CDN-URL geretourneerd.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `url` | string | Ja | Volledige URL van de pagina waarvan een screenshot moet worden gemaakt, bijv. `https://example.com/about/` |
| `width` | integer | Nee | Viewport-breedte in pixels. Standaard `1280` |
| `height` | integer | Nee | Viewport-hoogte in pixels. Standaard `800` |
| `full_page` | boolean | Nee | Leg de volledige scrollbare pagina vast in plaats van alleen de viewport. Standaard `false` |
| `delay_ms` | integer | Nee | Milliseconden om na het laden van de pagina te wachten vóór het vastleggen, handig voor geanimeerde content. Standaard `500` |
| `label` | string | Nee | Voor mensen leesbaar label dat met de bijlage in de Media Library wordt opgeslagen |

**Retourneert**

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

Neemt twee screenshots en retourneert een visuele diff-score plus een diff-afbeelding waarin gewijzigde gebieden worden gemarkeerd. Handig om te bevestigen dat een ontwerpwijziging het verwachte resultaat heeft opgeleverd of om onbedoelde regressies te detecteren.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `before_url` | string | Ja | URL van de pagina die als de "voor"-status moet worden vastgelegd |
| `after_url` | string | Ja | URL van de pagina die als de "na"-status moet worden vastgelegd. Kan dezelfde URL zijn bij vergelijking over tijd |
| `width` | integer | Nee | Viewport-breedte voor beide vastleggingen. Standaard `1280` |
| `threshold` | float | Nee | Drempel voor pixelverschil (0,0–1,0). Pixels binnen deze tolerantie worden als ongewijzigd beschouwd. Standaard `0.1` |

**Retourneert**

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

Een `diff_score` van `0.0` betekent geen zichtbare wijziging; `1.0` betekent dat elke pixel is gewijzigd.

---

### `review_page_design` {#reviewpagedesign}

Legt een screenshot van een pagina vast en stuurt deze naar het taalmodel voor visuele analyse. Retourneert een gestructureerde beoordeling die lay-out, typografie, kleurgebruik en toegankelijkheidsproblemen behandelt.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `url` | string | Ja | Volledige URL van de pagina die moet worden beoordeeld |
| `focus` | string | Nee | Door komma’s gescheiden lijst van beoordelingsgebieden om te benadrukken: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standaard: alle gebieden |
| `width` | integer | Nee | Viewport-breedte. Standaard `1280` |

**Retourneert**

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

## Installeerbare mogelijkheden {#installable-abilities}

Met het Installable Abilities Registry kun je de agent uitbreiden met extra mogelijkheidspakketten die als WordPress-plugins worden verspreid. Elk pakket registreert een of meer mogelijkheden met de standaard ability API.

### `list_available_abilities` {#listavailableabilities}

Retourneert de catalogus met mogelijkheidspakketten die beschikbaar zijn voor installatie vanuit het register.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `category` | string | Nee | Filter op categorie: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Retourneert**

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

Downloadt en activeert een vaardighedenpakket vanuit het register.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `slug` | string | Ja | Plug-in-slug van het vaardighedenpakket |

**Retourneert** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Bevraagt het vaardighedenregister om de beste plug-in voor een beschreven gebruiksscenario te vinden en installeert deze optioneel.

**Parameters**

| Parameter | Type | Vereist | Beschrijving |
|---|---|---|---|
| `description` | string | Ja | Beschrijving in natuurlijke taal van de gewenste functionaliteit |
| `install` | boolean | Nee | Als `true`, installeert de aanbevolen plug-in onmiddellijk. Standaard `false` |

**Voorbeeld**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Retourneert**

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
