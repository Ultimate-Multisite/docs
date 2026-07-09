---
title: Index Facultatum
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# Index Facultatum

Facultates sunt actiones atomicae quas Gratis AI Agent in tua institutione WordPress invocare potest. Quaeque facultas est classis PHP registrata quae schema JSON exponit — agens hoc schema tempore exsecutionis legit ut intellegat quae parametra requirantur et quid facultas reddat.

Haec pagina omnes facultates documentatur quae cum Gratis AI Agent v1.9.0 distribuuntur.

---

## Genera Commentariorum Consuetudinaria

Hae facultates genera commentariorum consuetudinaria (CPTs) per agentem registrata administrant. Registrationes in tabula optionum WordPress servantur, ut post deactivationem et reactivationem plugin permaneant.

### `register_post_type`

Novum genus commentarii consuetudinarium registrat.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Clavis generis commentarii (maxime 20 characteres, nullae maiusculae, nulla spatia) |
| `singular_label` | string | Ita | Nomen singulare humanis lectu facile, e.g. `Portfolio Item` |
| `plural_label` | string | Ita | Nomen plurale humanis lectu facile, e.g. `Portfolio Items` |
| `public` | boolean | Non | Utrum genus commentarii publice accessibile sit. Praedefinitum `true` |
| `supports` | array | Non | Proprietates sustinendae: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Praedefinitum `["title","editor"]` |
| `has_archive` | boolean | Non | Utrum pagina archivi generis commentarii habilitata sit. Praedefinitum `false` |
| `menu_icon` | string | Non | Classis Dashicons aut URL pro icone menu administratoris. Praedefinitum `"dashicons-admin-post"` |
| `rewrite_slug` | string | Non | URL slug pro genere commentarii. Praedefinitur ad `slug` |

**Exemplum**

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

**Reddit** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

Redit omnia genera commentariorum consuetudinaria ab agente registrata.

**Parametra** — nulla

**Reddit**

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

Deregistrat genus commentarii consuetudinarium antea ab agente registratum. Commentarii existentes illius generis in database manent sed per genus commentarii iam non sunt accessibiles.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Clavis generis commentarii removenda |

**Reddit** `{ "success": true, "slug": "portfolio" }`

---

## Taxonomiae Consuetudinariae

Hae facultates taxonomias consuetudinarias administrant. Sicut CPTs, registrationes taxonomiarum servantur.

### `register_taxonomy`

Novam taxonomiam consuetudinariam registrat.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Clavis taxonomiae (maxime 32 characteres) |
| `singular_label` | string | Ita | Nomen singulare humanis lectu facile, e.g. `Project Category` |
| `plural_label` | string | Ita | Nomen plurale humanis lectu facile, e.g. `Project Categories` |
| `post_types` | array | Ita | Slugs generum commentariorum quibus haec taxonomia adiungi debet |
| `hierarchical` | boolean | Non | `true` pro stilo categoriae, `false` pro stilo tag. Praedefinitum `true` |
| `public` | boolean | Non | Utrum termini publice accessibiles sint. Praedefinitum `true` |
| `rewrite_slug` | string | Non | URL slug pro taxonomia. Praedefinitur ad `slug` |

**Exemplum**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Reddit** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

Redit omnes taxonomias consuetudinarias ab agente registratas.

**Parametra** — nulla

**Reddit**

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

Deregistrat taxonomiam consuetudinariam antea ab agente registratam.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Clavis taxonomiae removenda |

**Reddit** `{ "success": true, "slug": "project-category" }`

---

## Systema Designii

Facultates systematis designii presentationem visualem situs WordPress mutant — a CSS consuetudinario ad exemplaria clausorum et logotypum situs.

### `inject_custom_css`

Adiungit CSS ad `<head>` situs per `wp_add_inline_style`. CSS in optione `gratis_ai_agent_custom_css` servatur et ordinate ex ordine removetur cum facultas resetatur.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `css` | string | Ita | CSS validum inserendum |
| `label` | string | Non | Titulus humanis lectu facilis pro hoc clauso CSS, in actis debug adhibitus. Praedefinitum `"agent-injected"` |
| `replace` | boolean | Non | Si `true`, omne CSS antea insertum substituit. Praedefinitum `false` (adiungit) |

**Exemplum**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Reddit** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

Registrat exemplar clausorum iterum adhibendum in bibliotheca exemplarium WordPress.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Identifier exemplaris, e.g. `gratis/hero-dark` |
| `title` | string | Ita | Nomen exemplaris humanis lectu facile in editore ostensum |
| `content` | string | Ita | Notatio clausorum serializata (HTML) pro exemplari |
| `categories` | array | Non | Slugs categoriarum exemplaris, e.g. `["featured", "hero"]` |
| `description` | string | Non | Brevis descriptio in electore exemplarium ostensa |
| `keywords` | array | Non | Verba clavium quaerendi |

**Reddit** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

Enumerat omnia exemplaria clausorum ab agente registrata.

**Parametra** — nulla

**Reddit**

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

Constituit logo situs WordPress ad datum ID attachamenti aut ad URL imaginis remotae. Cum URL praebetur, imago deponitur et in Media Library importatur.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `attachment_id` | integer | Non | ID attachamenti Media Library iam exsistentis |
| `url` | string | Non | URL imaginis remotae importandae et ut logo constituendae |

Unum ex `attachment_id` aut `url` praebendum est.

**Reddit** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

Applicat praedefinitionem nominatam coloris/typographiae ad `theme.json` thematis activi (aut `global-styles`). Praedefinitiones sunt fasciculi selecti a grege Gratis AI Agent curati.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `preset` | string | Ita | Nomen praedefinitionis, e.g. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | Non | Si `true`, misce cum valoribus exsistentibus potius quam substituere. Praedefinitum `false` |

**Praedefinitiones praesto**

| Praedefinitio | Descriptio |
|---|---|
| `minimal-dark` | Fundus paene niger, textus albus, unus color accentus |
| `warm-editorial` | Fundus calide subalbus, tituli litteris serif, colores accentus terreni |
| `corporate-blue` | Tabula colorum caerulei navalis et albi cum typographia professionali |
| `vibrant-startup` | Gradationes clarae, anguli rotundati, typus modernus sans-serif |
| `classic-blog` | Cinerei neutrales, altitudo linearum commoda, spatia dispositionis traditionalis |

**Reddit** `{ "success": true, "preset": "minimal-dark" }`

---

## Styli Globales

Facultates Stylorum Globalium valores theme.json legunt et scribunt per WordPress Global Styles API, omnes caudices et exemplaria per totum situm afficientes.

### `get_global_styles`

Reddit configurationem praesentem stylorum globalium.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `path` | string | Non | Index JSON ad valorem specificum, e.g. `/color/palette` aut `/typography/fontSizes`. Reddit obiectum integrum si omittitur. |

**Reddit** obiectum plenum stylorum globalium aut valorem apud `path`.

---

### `set_global_styles`

Renovat unum vel plures valores in configuratione stylorum globalium.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `path` | string | Ita | Index JSON ad valorem constituendum, e.g. `/color/palette` |
| `value` | any | Ita | Novus valor |

**Exemplum** — adde colorem ad tabulam colorum

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Reddit** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

Reponit omnes mutationes stylorum globalium ab agente applicatas, praedefinita thematis restituens.

**Parametra** — nulla

**Reddit** `{ "success": true }`

---

## Menus Navigationis

Facultates Menuum Navigationis creant et administrant menus navigationis WordPress atque eorum elementa.

### `create_menu`

Creat novum menu navigationis WordPress.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `name` | string | Ita | Nomen menu, e.g. `Primary Navigation` |
| `location` | string | Non | Locus thematis cui hoc menu attribuendum est, e.g. `primary` |

**Reddit** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

Menu renominat aut illud loco thematis iterum attribuit.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `menu_id` | integer | Ita | ID menu renovandi |
| `name` | string | Non | Novum nomen menu |
| `location` | string | Non | Locus thematis cui attribuendum aut iterum attribuendum est |

**Reddit** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

Addit elementum ad menu navigationis iam exsistens.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `menu_id` | integer | Ita | ID menu destinati |
| `type` | string | Ita | Typus elementi: `custom`, `post_type`, aut `taxonomy` |
| `title` | string | Non | Titulus elementi menu (necessarius pro typo `custom`) |
| `url` | string | Non | URL pro elementis `custom` |
| `object_id` | integer | Non | ID postis aut ID termini pro elementis `post_type`/`taxonomy` |
| `parent_id` | integer | Non | ID elementi menu sub quo hoc elementum nidificandum est |
| `position` | integer | Non | Positio a zero numerata in menu |

**Reddit** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

Removet elementum e menu navigationis.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `item_id` | integer | Ita | ID elementi menu removendi |

**Reddit** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

Enumerat omnia menus navigationis WordPress, una cum locis thematis eis attributis.

**Parametra** — nulla

**Reddit**

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

## Administratio Optionum

Facultates optionum legunt et scribunt optiones WordPress per `get_option` / `update_option`. Index clausus securitatis inclusus impedit ne configurationes criticae casu mutentur.

### `get_option`

Legit optionem WordPress.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `option_name` | string | Ita | Clavis optionis, e.g. `blogname` |

**Reddit** `{ "option_name": "blogname", "value": "My Site" }`

Reddit errorem si `option_name` in indice clauso securitatis est.

---

### `set_option`

Scribit optionem WordPress.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `option_name` | string | Ita | Clavis optionis |
| `value` | any | Ita | Novus valor (pro ordinibus/obiectis automatice serializatus) |
| `autoload` | string | Non | `"yes"` aut `"no"`. Praedefinitum configurationem autoload exsistentem servat |

Errorem reddit si `option_name` in indice exclusionis securitatis est.

**Redit** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

Optionem WordPress delet.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `option_name` | string | Ita | Clavis optionis delendae |

Errorem reddit si `option_name` in indice exclusionis securitatis est.

**Redit** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

Optiones WordPress secundum exemplar congruentes enumerat.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `pattern` | string | Non | Exemplar SQL LIKE ad nomina optionum filtranda, e.g. `gratis_%`. Omnes optiones reddit si omittitur (cum cautione in magnis basibus datorum utere). |
| `limit` | integer | Non | Numerus maximus eventuum. Praedefinitum `50`, maximum `500` |

**Redit**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Administratio Contenti

Facultates Administrationis Contenti commentationes et paginas WordPress creant atque edunt. ID commentationum redduntur, ut gradus subsequentes in consiliis multiplicium facultatum contentum creatum referre possint.

### `create_post`

Novam commentationem WordPress, paginam, aut ingressum generis commentationis proprii creat.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `title` | string | Ita | Titulus commentationis |
| `content` | string | Non | Corpus commentationis — textum planum, HTML, aut notationem obstructorum serializatam accipit |
| `status` | string | Non | `draft`, `publish`, `pending`, `private`. Praedefinitum `draft` |
| `post_type` | string | Non | Slug generis commentationis, e.g. `post`, `page`, aut quodlibet CPT registratum. Praedefinitum `post` |
| `excerpt` | string | Non | Breve compendium in archivis et eventibus quaestionis ostensum |
| `categories` | array | Non | Series nominum categoriarum aut ID assignandorum |
| `tags` | array | Non | Series nominum titulorum aut ID assignandorum |
| `author` | integer | Non | ID usoris WordPress qui auctor commentationis statuatur. Praedefinitur ad usorem praesentem |
| `date` | string | Non | Dies publicationis forma ISO 8601, e.g. `2026-05-01T09:00:00` |
| `page_template` | string | Non | Fasciculus exemplaris huic commentationi aut paginae assignandus, e.g. `page-full-width.php`. Tantum valet cum `post_type` est `page` aut CPT quod exemplaria paginarum sustinet. |

**Exemplum**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Redit** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

Commentationem aut paginam WordPress iam exstantem renovat.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `post_id` | integer | Ita | ID commentationis renovandae |
| `title` | string | Non | Novus titulus commentationis |
| `content` | string | Non | Novum corpus commentationis |
| `status` | string | Non | Novus status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | Non | Novum excerptum |
| `categories` | array | Non | Totum indicem categoriarum hac serie nominum aut ID substitue |
| `tags` | array | Non | Totum indicem titulorum hac serie nominum aut ID substitue |
| `page_template` | string | Non | Novus fasciculus exemplaris huic commentationi aut paginae assignandus, e.g. `page-full-width.php`. Transmitte catenam vacuam ut assignationem exemplaris removeas et ad praedefinitum thematis redeas. |

**Exemplum** — exemplum post creationem muta

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Redit** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

Plures commentationes uno facultatis accersitu creat, itinera ultro citroque facta minuens dum situs construuntur aut contentum mole importatur. Commentationes ordine creantur; si una deficit, ceterae pergunt et defectus in serie eventuum nuntiatur.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `posts` | array | Ita | Series obiectorum commentationum, quorum quodque eadem parametra ac `create_post` accipit |
| `stop_on_error` | boolean | Non | Si `true`, processum post primum defectum siste. Praedefinitum `false` |

**Exemplum**

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

**Redit**

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

Imaginem praecipuam (miniaturam commentationis) commentationi aut paginae iam exstanti assignat. ID adiuncti iam exstantis in Media Library aut URL imaginis remotam accipit; cum URL praebetur, imago automatice deponitur et importatur.

**Parametra**

| Parametrum | Typus | Requisitum | Descriptio |
|---|---|---|---|
| `post_id` | integer | Ita | ID commentationis aut paginae renovandae |
| `attachment_id` | integer | Non | ID adiuncti iam exstantis in Media Library |
| `url` | string | Non | URL imaginis remotae importandae et tamquam imago praecipua statuendae |
| `alt_text` | string | Non | Textus alternus adiuncto applicandus, si ex URL importatur |

Unum ex `attachment_id` aut `url` praebendum est.

**Redit** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

Formam contactus creat utens plugin formarum activo (Contact Form 7, WPForms, Fluent Forms, aut Gravity Forms, prout quod institutum est). Shortcode reddit quod in quamlibet commentationem aut paginam inseri potest.

**Parametra**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Ita | Nomen formae in administratione plugin formae monstratum |
| `fields` | array | Ita | Index ordinatus agrorum formae (vide obiectum agri infra) |
| `recipient` | string | Non | Inscriptio electronica ad submissiones accipiendas. Praedefinite ad electronicam administratoris WordPress |
| `subject` | string | Non | Linea subiecti electronici. Sustinet substituta `[your-name]` et `[your-subject]` cum Contact Form 7 adhibetur |
| `confirmation_message` | string | Non | Nuntius post felicem submissionem ostensus. Praedefinitum: `"Thank you for your message. We'll be in touch soon."` |

**Obiectum agri**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Ita | Nomen internum agri / clavis machinalis |
| `label` | string | Ita | Titulus homini lectu facilis in forma ostensus |
| `type` | string | Ita | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | Non | Utrum ager ante submissionem implendus sit. Praedefinitum `false` |
| `options` | array | Non | Optiones pro agris `select`, `checkbox`, et `radio` |
| `placeholder` | string | Non | Textus substitutorius pro inputibus generis textus |

**Exemplum**

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

**Reddit**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## Recognitio Visiva

Facultates Recognitionis Visivae agenti permittunt imagines paginarum vivarum capere easque analysi subicere, ita recognitionem designationis autonomam, comparationes ante/post, et probationes regressionis visivae sine ulla extensione navigatoris requirenda efficientes.

### `capture_screenshot`

Capit imaginem paginae WordPress ad datum URL utens navigatro sine capite in parte ministri. Imago in Bibliotheca Mediorum servatur et URL CDN redditur.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Ita | URL plenum paginae cuius imago capienda est, e.g. `https://example.com/about/` |
| `width` | integer | Non | Latitudo viewport in pixelis. Praedefinitum `1280` |
| `height` | integer | Non | Altitudo viewport in pixelis. Praedefinitum `800` |
| `full_page` | boolean | Non | Cape totam paginam pervolutabilem loco solius viewport. Praedefinitum `false` |
| `delay_ms` | integer | Non | Millisecunda exspectanda post onerationem paginae ante captionem, utilia pro contento animato. Praedefinitum `500` |
| `label` | string | Non | Titulus homini lectu facilis cum adiuncto in Bibliotheca Mediorum servatus |

**Reddit**

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

Accipit duas imagines et reddit notam differentiae visivae una cum imagine differentiae quae regiones mutatas illustrat. Utile est ad confirmandum mutationem designationis eventum exspectatum produxisse aut ad regressiones imprudentes detegendas.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Ita | URL paginae capiendae ut status "ante" |
| `after_url` | string | Ita | URL paginae capiendae ut status "post". Idem URL esse potest si per tempus comparatur |
| `width` | integer | Non | Latitudo viewport utriusque captionis. Praedefinitum `1280` |
| `threshold` | float | Non | Limen differentiae pixelorum (0.0–1.0). Pixela intra hanc tolerantiam immutata habentur. Praedefinitum `0.1` |

**Reddit**

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

`diff_score` valoris `0.0` significat nullam mutationem visibilem; `1.0` significat omne pixel mutatum esse.

---

### `review_page_design`

Capit imaginem paginae eamque ad exemplar linguae pro analysi visiva mittit. Reddit aestimationem structam quae dispositionem, typographiam, usum colorum, et curas accessibilitatis comprehendit.

**Parametri**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Ita | URL plenum paginae recognoscendae |
| `focus` | string | Non | Index arearum recognitionis commatibus separatus quae emphasi danda sunt: `layout`, `typography`, `colour`, `accessibility`, `mobile`. Praedefinitum: omnes areae |
| `width` | integer | Non | Latitudo viewport. Praedefinitum `1280` |

**Reddit**

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

## Facultates Installabiles

Registrum Facultatum Installabilium sinit te agentem extendere fasciculis facultatum additis qui ut WordPress plugins distribuuntur. Quisque fasciculus unam aut plures facultates utens API facultatum ordinaria registrat.

### `list_available_abilities`

Reddit catalogum fasciculorum facultatum ex registro ad institutionem promptorum.

**Parametri**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `category` | string | Non | Filtra per categoriam: `ecommerce`, `seo`, `media`, `social`, `developer` |

**Reddit**

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

Ex registro fasciculum facultatum exonerat et activat.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `slug` | string | Ita | Plugin slug fasciculi facultatum |

**Reddit** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

Registrum facultatum interrogat ut optimum plugin ad usum descriptum inveniat et, optative, id instituat.

**Parametra**

| Parametrum | Typus | Necessarium | Descriptio |
|---|---|---|---|
| `description` | string | Ita | Descriptio lingua naturali functionis desideratae |
| `install` | boolean | Non | Si `true`, plugin commendatum statim instituit. Praedefinitum `false` |

**Exemplum**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**Reddit**

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
