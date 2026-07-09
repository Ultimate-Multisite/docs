---
title: Förmågereferens
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Referens för förmågor {#abilities-reference}

Förmågor är de atomära åtgärder som Gratis AI Agent kan anropa på din WordPress-installation. Varje förmåga är en registrerad PHP-klass som exponerar ett JSON-schema — agenten läser detta schema vid körning för att förstå vilka parametrar som krävs och vad förmågan returnerar.

Den här sidan dokumenterar alla förmågor som levereras med Gratis AI Agent v1.9.0.

---

## Anpassade inläggstyper {#custom-post-types}

Dessa förmågor hanterar anpassade inläggstyper (CPT:er) som registreras via agenten. Registreringar sparas i WordPress alternativtabell så att de överlever avaktivering och återaktivering av tillägget.

### `register_post_type` {#registerposttype}

Registrerar en ny anpassad inläggstyp.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Nyckeln för inläggstypen (max 20 tecken, inga versaler, inga mellanslag) |
| `singular_label` | string | Ja | Människoläsbart singularnamn, t.ex. `Portfolio Item` |
| `plural_label` | string | Ja | Människoläsbart pluralnamn, t.ex. `Portfolio Items` |
| `public` | boolean | Nej | Om inläggstypen är offentligt åtkomlig. Standard `true` |
| `supports` | array | Nej | Funktioner som ska stödjas: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Standard `["title","editor"]` |
| `has_archive` | boolean | Nej | Om en arkivsida för inläggstypen är aktiverad. Standard `false` |
| `menu_icon` | string | Nej | Dashicons-klass eller URL för administratörsmenyns ikon. Standard `"dashicons-admin-post"` |
| `rewrite_slug` | string | Nej | URL-slug för inläggstypen. Standard är `slug` |

**Exempel**

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

**Returnerar** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

Returnerar alla anpassade inläggstyper som registrerats av agenten.

**Parametrar** — inga

**Returnerar**

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

Avregistrerar en anpassad inläggstyp som tidigare registrerats av agenten. Befintliga inlägg av den typen finns kvar i databasen men är inte längre åtkomliga via inläggstypen.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Nyckeln för inläggstypen som ska tas bort |

**Returnerar** `{ "success": true, "slug": "portfolio" }`

---

## Anpassade taxonomier {#custom-taxonomies}

Dessa förmågor hanterar anpassade taxonomier. Precis som CPT:er sparas taxonomiregistreringar.

### `register_taxonomy` {#registertaxonomy}

Registrerar en ny anpassad taxonomi.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Taxonominyckeln (max 32 tecken) |
| `singular_label` | string | Ja | Människoläsbart singularnamn, t.ex. `Project Category` |
| `plural_label` | string | Ja | Människoläsbart pluralnamn, t.ex. `Project Categories` |
| `post_types` | array | Ja | Slugs för inläggstyper som denna taxonomi ska kopplas till |
| `hierarchical` | boolean | Nej | `true` för kategoriliknande, `false` för taggliknande. Standard `true` |
| `public` | boolean | Nej | Om termer är offentligt åtkomliga. Standard `true` |
| `rewrite_slug` | string | Nej | URL-slug för taxonomin. Standard är `slug` |

**Exempel**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returnerar** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

Returnerar alla anpassade taxonomier som registrerats av agenten.

**Parametrar** — inga

**Returnerar**

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

Avregistrerar en anpassad taxonomi som tidigare registrerats av agenten.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Taxonominyckeln som ska tas bort |

**Returnerar** `{ "success": true, "slug": "project-category" }`

---

## Designsystem {#design-system}

Designsystemets förmågor ändrar den visuella presentationen av WordPress-webbplatsen — från anpassad CSS till blockmönster och webbplatsens logotyp.

### `inject_custom_css` {#injectcustomcss}

Lägger till CSS i webbplatsens `<head>` via `wp_add_inline_style`. CSS lagras i alternativet `gratis_ai_agent_custom_css` och avköas rent när förmågan återställs.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `css` | string | Ja | Giltig CSS att injicera |
| `label` | string | Nej | Människoläsbar etikett för detta CSS-block, används i felsökningsloggar. Standard `"agent-injected"` |
| `replace` | boolean | Nej | Om `true`, ersätter all tidigare injicerad CSS. Standard `false` (lägger till) |

**Exempel**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returnerar** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

Registrerar ett återanvändbart blockmönster i WordPress mönsterbibliotek.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Mönsteridentifierare, t.ex. `gratis/hero-dark` |
| `title` | string | Ja | Människoläsbart mönsternamn som visas i redigeraren |
| `content` | string | Ja | Serialiserad blockmarkup (HTML) för mönstret |
| `categories` | array | Nej | Slugs för mönsterkategorier, t.ex. `["featured", "hero"]` |
| `description` | string | Nej | Kort beskrivning som visas i mönsterväljaren |
| `keywords` | array | Nej | Söknyckelord |

**Returnerar** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

Listar alla blockmönster som registrerats av agenten.

**Parametrar** — inga

**Returnerar**

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

Ställer in WordPress webbplatslogotyp till ett angivet bilage-ID eller en fjärrbilds-URL. När en URL anges laddas bilden ner och importeras till Media Library.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `attachment_id` | integer | Nej | ID för en befintlig Media Library-bilaga |
| `url` | string | Nej | Fjärrbilds-URL att importera och ställa in som logotyp |

En av `attachment_id` eller `url` måste anges.

**Returnerar** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

Tillämpar en namngiven färg-/typografiförinställning på det aktiva tematets `theme.json` (eller `global-styles`). Förinställningar är kurerade paket som underhålls av Gratis AI Agent-teamet.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `preset` | string | Ja | Förinställningens namn, t.ex. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Nej | Om `true`, slå samman med befintliga värden i stället för att ersätta. Standard `false` |

**Tillgängliga förinställningar**

| Förinställning | Beskrivning |
|---|---|
| `minimal-dark` | Nästan svart bakgrund, vit text, en enda accentfärg |
| `warm-editorial` | Varm benvit bakgrund, serif-rubriker, jordnära accentfärger |
| `corporate-blue` | Marinblå och vit palett med professionell typografi |
| `vibrant-startup` | Ljusa gradienter, rundade hörn, modern sans-serif-typ |
| `classic-blog` | Neutrala gråtoner, bekväm radhöjd, traditionellt layoutavstånd |

**Returnerar** `{ "success": true, "preset": "minimal-dark" }`

---

## Globala stilar {#global-styles}

Globala stilfunktioner läser och skriver theme.json-värden via WordPress Global Styles API, vilket påverkar alla block och mallar på hela webbplatsen.

### `get_global_styles` {#getglobalstyles}

Returnerar den aktuella konfigurationen för globala stilar.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `path` | string | Nej | JSON-pekare till ett specifikt värde, t.ex. `/color/palette` eller `/typography/fontSizes`. Returnerar hela objektet om den utelämnas. |

**Returnerar** hela objektet för globala stilar eller värdet vid `path`.

---

### `set_global_styles` {#setglobalstyles}

Uppdaterar ett eller flera värden i konfigurationen för globala stilar.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `path` | string | Ja | JSON-pekare till värdet som ska ställas in, t.ex. `/color/palette` |
| `value` | any | Ja | Det nya värdet |

**Exempel** — lägg till en färg i paletten

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Returnerar** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

Återställer alla agent-tillämpade ändringar av globala stilar och återställer temats standardvärden.

**Parametrar** — inga

**Returnerar** `{ "success": true }`

---

## Navigeringsmenyer {#navigation-menus}

Navigeringsmenyfunktioner skapar och hanterar WordPress navigeringsmenyer och deras objekt.

### `create_menu` {#createmenu}

Skapar en ny WordPress navigeringsmeny.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `name` | string | Ja | Menynamn, t.ex. `Primary Navigation` |
| `location` | string | Nej | Temaplats att tilldela denna meny till, t.ex. `primary` |

**Returnerar** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

Byter namn på en meny eller tilldelar den om till en temaplats.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `menu_id` | integer | Ja | ID för menyn som ska uppdateras |
| `name` | string | Nej | Nytt menynamn |
| `location` | string | Nej | Temaplats att tilldela eller tilldela om |

**Returnerar** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

Lägger till ett objekt i en befintlig navigeringsmeny.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `menu_id` | integer | Ja | ID för målmenyn |
| `type` | string | Ja | Objekttyp: `custom`, `post_type` eller `taxonomy` |
| `title` | string | Nej | Etikett för menyobjektet (krävs för typen `custom`) |
| `url` | string | Nej | URL för `custom`-objekt |
| `object_id` | integer | Nej | Inläggs-ID eller term-ID för `post_type`/`taxonomy`-objekt |
| `parent_id` | integer | Nej | Menyobjekts-ID att nästla detta objekt under |
| `position` | integer | Nej | Nollbaserad position i menyn |

**Returnerar** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

Tar bort ett objekt från en navigeringsmeny.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `item_id` | integer | Ja | Menyobjekts-ID att ta bort |

**Returnerar** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

Listar alla WordPress navigeringsmenyer, inklusive deras tilldelade temaplatser.

**Parametrar** — inga

**Returnerar**

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

## Alternativhantering {#options-management}

Alternativfunktioner läser och skriver WordPress-alternativ via `get_option` / `update_option`. En inbyggd säkerhetsblocklista förhindrar oavsiktlig ändring av kritiska inställningar.

### `get_option` {#getoption}

Läser ett WordPress-alternativ.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `option_name` | string | Ja | Alternativnyckeln, t.ex. `blogname` |

**Returnerar** `{ "option_name": "blogname", "value": "My Site" }`

Returnerar ett fel om `option_name` finns på säkerhetsblocklistan.

---

### `set_option` {#setoption}

Skriver ett WordPress-alternativ.

**Parametrar**

| Parameter | Typ | Krävs | Beskrivning |
|---|---|---|---|
| `option_name` | string | Ja | Alternativnyckeln |
| `value` | any | Ja | Det nya värdet (serialiseras automatiskt för arrayer/objekt) |
| `autoload` | string | Nej | `"yes"` eller `"no"`. Standard bevarar den befintliga autoload-inställningen |

Returnerar ett fel om `option_name` finns på säkerhetens blocklista.

**Returnerar** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

Tar bort ett WordPress-alternativ.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Alternativnyckeln som ska tas bort |

Returnerar ett fel om `option_name` finns på säkerhetens blocklista.

**Returnerar** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

Listar WordPress-alternativ som matchar ett mönster.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | SQL LIKE-mönster för att filtrera alternativnamn, t.ex. `gratis_%`. Returnerar alla alternativ om det utelämnas (använd med försiktighet på stora databaser). |
| `limit` | integer | No | Maximalt antal resultat. Standard `50`, max `500` |

**Returnerar**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Innehållshantering {#content-management}

Innehållshanteringsförmågor skapar och redigerar WordPress-inlägg och sidor. Inläggs-ID:n returneras så att efterföljande steg i planer med flera förmågor kan referera till det skapade innehållet.

### `create_post` {#createpost}

Skapar ett nytt WordPress-inlägg, en sida eller en post type-post.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Inläggsrubrik |
| `content` | string | No | Inläggsinnehåll — accepterar vanlig text, HTML eller serialiserad blockmarkup |
| `status` | string | No | `draft`, `publish`, `pending`, `private`. Standard `draft` |
| `post_type` | string | No | Post type-slug, t.ex. `post`, `page` eller valfri registrerad CPT. Standard `post` |
| `excerpt` | string | No | Kort sammanfattning som visas i arkiv och sökresultat |
| `categories` | array | No | Array med kategorinamn eller ID:n att tilldela |
| `tags` | array | No | Array med taggnamn eller ID:n att tilldela |
| `author` | integer | No | WordPress-användar-ID som ska anges som inläggets författare. Standard är den aktuella användaren |
| `date` | string | No | Publiceringsdatum i ISO 8601-format, t.ex. `2026-05-01T09:00:00` |
| `page_template` | string | No | Mallfil att tilldela detta inlägg eller denna sida, t.ex. `page-full-width.php`. Endast relevant när `post_type` är `page` eller en CPT som stöder sidmallar. |

**Exempel**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Returnerar** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

Uppdaterar ett befintligt WordPress-inlägg eller en sida.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID för inlägget som ska uppdateras |
| `title` | string | No | Ny inläggsrubrik |
| `content` | string | No | Nytt inläggsinnehåll |
| `status` | string | No | Ny status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | Nyt utdrag |
| `categories` | array | No | Ersätt hela kategorilistan med denna array av namn eller ID:n |
| `tags` | array | No | Ersätt hela tagglistan med denna array av namn eller ID:n |
| `page_template` | string | No | Ny mallfil att tilldela detta inlägg eller denna sida, t.ex. `page-full-width.php`. Skicka en tom sträng för att ta bort malltilldelningen och återgå till theme-standardinställningen. |

**Exempel** — ändra mall efter skapande

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returnerar** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

Skapar flera inlägg i ett enda förmågeanrop, vilket minskar tur-och-retur-anrop under webbplatsbyggen eller massimport av innehåll. Inlägg skapas i ordning; om ett misslyckas fortsätter de andra och felet rapporteras i resultat-arrayen.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | Array med inläggsobjekt, där varje objekt accepterar samma parametrar som `create_post` |
| `stop_on_error` | boolean | No | Om `true`, stoppa bearbetningen efter det första felet. Standard `false` |

**Exempel**

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

**Returnerar**

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

Tilldelar en utvald bild (inläggsminiatyr) till ett befintligt inlägg eller en sida. Accepterar ett befintligt bilage-ID från Media Library eller en fjärrbild-URL; när en URL anges laddas bilden ner och importeras automatiskt.

**Parametrar**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | ID för inlägget eller sidan som ska uppdateras |
| `attachment_id` | integer | No | ID för en befintlig bilaga i Media Library |
| `url` | string | No | Fjärrbild-URL att importera och ange som den utvalda bilden |
| `alt_text` | string | No | Alt-text att tillämpa på bilagan om den importeras från en URL |

En av `attachment_id` eller `url` måste anges.

**Returnerar** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

Skapar ett kontaktformulär med det aktiva formulär-pluginet (Contact Form 7, WPForms, Fluent Forms eller Gravity Forms, beroende på vilket som är installerat). Returnerar en shortcode som kan bäddas in i valfritt inlägg eller på valfri sida.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `title` | string | Ja | Formulärnamn som visas i formulärpluginets admin |
| `fields` | array | Ja | Ordnad lista över formulärfält (se fältobjekt nedan) |
| `recipient` | string | Nej | E-postadress som ska ta emot inskickningar. Standard är WordPress admin-e-post |
| `subject` | string | Nej | Ämnesrad för e-post. Stöder platshållarna `[your-name]` och `[your-subject]` när Contact Form 7 används |
| `confirmation_message` | string | Nej | Meddelande som visas efter en lyckad inskickning. Standard: `"Thank you for your message. We'll be in touch soon."` |

**Fältobjekt**

| Nyckel | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `name` | string | Ja | Internt fältnamn / maskinnyckel |
| `label` | string | Ja | Människoläsbar etikett som visas i formuläret |
| `type` | string | Ja | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Nej | Om fältet måste fyllas i före inskickning. Standard `false` |
| `options` | array | Nej | Alternativ för fälten `select`, `checkbox` och `radio` |
| `placeholder` | string | Nej | Platshållartext för inmatningar av texttyp |

**Exempel**

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

**Returnerar**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Visuell granskning {#visual-review}

Funktionerna för Visuell granskning låter agenten ta skärmbilder av live-sidor och analysera dem, vilket möjliggör autonom designgranskning, före/efter-jämförelser och visuella regressionstester utan att kräva något webbläsartillägg.

### `capture_screenshot` {#capturescreenshot}

Tar en skärmbild av en WordPress-sida på en given URL med en headless browser på serversidan. Bilden sparas i Media Library och en CDN-URL returneras.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `url` | string | Ja | Fullständig URL till sidan som ska skärmbildas, t.ex. `https://example.com/about/` |
| `width` | integer | Nej | Viewport-bredd i pixlar. Standard `1280` |
| `height` | integer | Nej | Viewport-höjd i pixlar. Standard `800` |
| `full_page` | boolean | Nej | Fånga hela den rullningsbara sidan i stället för bara viewporten. Standard `false` |
| `delay_ms` | integer | Nej | Millisekunder att vänta efter sidladdning före fångst, användbart för animerat innehåll. Standard `500` |
| `label` | string | Nej | Människoläsbar etikett som lagras med bilagan i Media Library |

**Returnerar**

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

Tar två skärmbilder och returnerar ett visuellt diff-värde samt en diff-bild som markerar ändrade områden. Användbart för att bekräfta att en designändring gav det förväntade resultatet eller för att upptäcka oavsiktliga regressioner.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `before_url` | string | Ja | URL till sidan som ska fångas som "före"-tillståndet |
| `after_url` | string | Ja | URL till sidan som ska fångas som "efter"-tillståndet. Kan vara samma URL vid jämförelse över tid |
| `width` | integer | Nej | Viewport-bredd för båda fångsterna. Standard `1280` |
| `threshold` | float | Nej | Tröskelvärde för pixelskillnad (0.0–1.0). Pixlar inom denna tolerans betraktas som oförändrade. Standard `0.1` |

**Returnerar**

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

Ett `diff_score` på `0.0` betyder ingen synlig förändring; `1.0` betyder att varje pixel har ändrats.

---

### `review_page_design` {#reviewpagedesign}

Tar en skärmbild av en sida och skickar den till språkmodellen för visuell analys. Returnerar en strukturerad bedömning som täcker layout, typografi, färganvändning och tillgänglighetsproblem.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `url` | string | Ja | Fullständig URL till sidan som ska granskas |
| `focus` | string | Nej | Kommaseparerad lista över granskningsområden att betona: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Standard: alla områden |
| `width` | integer | Nej | Viewport-bredd. Standard `1280` |

**Returnerar**

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

## Installerbara funktioner {#installable-abilities}

Installable Abilities Registry låter dig utöka agenten med ytterligare funktionspaket som distribueras som WordPress plugins. Varje paket registrerar en eller flera funktioner med standard-API:t för funktioner.

### `list_available_abilities` {#listavailableabilities}

Returnerar katalogen över funktionspaket som är tillgängliga för installation från registret.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `category` | string | Nej | Filtrera efter kategori: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Returnerar**

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

Laddar ner och aktiverar ett förmågspaket från registret.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `slug` | string | Ja | Slug för förmågspaketets tillägg |

**Returnerar** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

Frågar förmågeregistret för att hitta det bästa tillägget för ett beskrivet användningsfall och installerar det eventuellt.

**Parametrar**

| Parameter | Typ | Obligatorisk | Beskrivning |
|---|---|---|---|
| `description` | string | Ja | Beskrivning på naturligt språk av den önskade funktionaliteten |
| `install` | boolean | Nej | Om `true`, installeras det rekommenderade tillägget omedelbart. Standard `false` |

**Exempel**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Returnerar**

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
