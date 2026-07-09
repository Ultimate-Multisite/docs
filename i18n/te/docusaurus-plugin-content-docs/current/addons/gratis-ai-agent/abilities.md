---
title: సామర్థ్యాల సూచిక
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# సామర్థ్యాల సూచిక

సామర్థ్యాలు అనేవి Gratis AI Agent మీ WordPress ఇన్‌స్టాలేషన్‌లో అమలు చేయగల మూల చర్యలు. ప్రతి సామర్థ్యం JSON schemaను అందించే నమోదు చేసిన PHP class. runtimeలో agent ఈ schemaను చదివి ఏ parameters అవసరమో, సామర్థ్యం ఏమి తిరిగి ఇస్తుందో అర్థం చేసుకుంటుంది.

ఈ పేజీ Gratis AI Agent v1.9.0తో వచ్చే అన్ని సామర్థ్యాలను వివరిస్తుంది.

---

## అనుకూల పోస్ట్ రకాలు

ఈ సామర్థ్యాలు agent ద్వారా నమోదు చేసిన అనుకూల పోస్ట్ రకాలను (CPTలు) నిర్వహిస్తాయి. నమోదులు WordPress options tableలో నిల్వ ఉంటాయి. కాబట్టి pluginను deactivation చేసి మళ్లీ reactivation చేసినా అవి కొనసాగుతాయి.

### `register_post_type`

కొత్త అనుకూల పోస్ట్ రకాన్ని నమోదు చేస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | పోస్ట్ రకం key (గరిష్ఠం 20 అక్షరాలు, uppercase ఉండకూడదు, spaces ఉండకూడదు) |
| `singular_label` | string | Yes | మనుషులకు చదవగల ఏకవచన పేరు, ఉదా. `Portfolio Item` |
| `plural_label` | string | Yes | మనుషులకు చదవగల బహువచన పేరు, ఉదా. `Portfolio Items` |
| `public` | boolean | No | పోస్ట్ రకం పబ్లిక్‌గా అందుబాటులో ఉండాలా. Default `true` |
| `supports` | array | No | మద్దతు ఇవ్వాల్సిన లక్షణాలు: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | పోస్ట్ రకం archive page ప్రారంభించబడాలా. Default `false` |
| `menu_icon` | string | No | admin menu icon కోసం Dashicons class లేదా URL. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | పోస్ట్ రకానికి URL slug. Default‌గా `slug` వాడుతుంది |

**ఉదాహరణ**

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

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent నమోదు చేసిన అన్ని అనుకూల పోస్ట్ రకాలను తిరిగి ఇస్తుంది.

**Parameters** — ఏవీ లేవు

**తిరిగి ఇస్తుంది**

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

agent ముందు నమోదు చేసిన అనుకూల పోస్ట్ రకాన్ని నమోదు నుంచి తొలగిస్తుంది. ఆ రకానికి చెందిన ఇప్పటికే ఉన్న posts databaseలోనే ఉంటాయి, కానీ ఆ పోస్ట్ రకం ద్వారా ఇక అందుబాటులో ఉండవు.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | తొలగించాల్సిన పోస్ట్ రకం key |

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "portfolio" }`

---

## అనుకూల Taxonomies

ఈ సామర్థ్యాలు అనుకూల taxonomiesను నిర్వహిస్తాయి. CPTల మాదిరిగానే, taxonomy నమోదులు నిల్వ ఉంటాయి.

### `register_taxonomy`

కొత్త అనుకూల taxonomyను నమోదు చేస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy key (గరిష్ఠం 32 అక్షరాలు) |
| `singular_label` | string | Yes | మనుషులకు చదవగల ఏకవచన పేరు, ఉదా. `Project Category` |
| `plural_label` | string | Yes | మనుషులకు చదవగల బహువచన పేరు, ఉదా. `Project Categories` |
| `post_types` | array | Yes | ఈ taxonomy జోడించాల్సిన పోస్ట్ రకం slugs |
| `hierarchical` | boolean | No | category-శైలికి `true`, tag-శైలికి `false`. Default `true` |
| `public` | boolean | No | terms పబ్లిక్‌గా అందుబాటులో ఉండాలా. Default `true` |
| `rewrite_slug` | string | No | taxonomyకు URL slug. Default‌గా `slug` వాడుతుంది |

**ఉదాహరణ**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent నమోదు చేసిన అన్ని అనుకూల taxonomiesను తిరిగి ఇస్తుంది.

**Parameters** — ఏవీ లేవు

**తిరిగి ఇస్తుంది**

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

agent ముందు నమోదు చేసిన అనుకూల taxonomyను నమోదు నుంచి తొలగిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | తొలగించాల్సిన taxonomy key |

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "project-category" }`

---

## డిజైన్ వ్యవస్థ

డిజైన్ వ్యవస్థ సామర్థ్యాలు WordPress site యొక్క దృశ్య ప్రదర్శనను మార్చుతాయి — అనుకూల CSS నుంచి block patterns మరియు site logo వరకు.

### `inject_custom_css`

`wp_add_inline_style` ద్వారా site యొక్క `<head>`కు CSSను జోడిస్తుంది. CSS `gratis_ai_agent_custom_css` optionలో నిల్వ అవుతుంది. సామర్థ్యాన్ని reset చేసినప్పుడు అది శుభ్రంగా dequeue అవుతుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | inject చేయాల్సిన valid CSS |
| `label` | string | No | ఈ CSS block కోసం మనుషులకు చదవగల label, debug logsలో ఉపయోగిస్తారు. Default `"agent-injected"` |
| `replace` | boolean | No | `true` అయితే, ముందు inject చేసిన అన్ని CSSను భర్తీ చేస్తుంది. Default `false` (జోడిస్తుంది) |

**ఉదాహరణ**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**తిరిగి ఇస్తుంది** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern libraryలో మళ్లీ వాడగల block patternను నమోదు చేస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, ఉదా. `gratis/hero-dark` |
| `title` | string | Yes | editorలో చూపే మనుషులకు చదవగల pattern పేరు |
| `content` | string | Yes | pattern కోసం serialised block markup (HTML) |
| `categories` | array | No | Pattern category slugs, ఉదా. `["featured", "hero"]` |
| `description` | string | No | pattern pickerలో చూపే చిన్న వివరణ |
| `keywords` | array | No | శోధన keywords |

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent నమోదు చేసిన అన్ని block patternsను జాబితా చేస్తుంది.

**Parameters** — ఏవీ లేవు

**ఇస్తుంది**

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

WordPress site logoను ఇచ్చిన attachment ID లేదా remote image URLకు సెట్ చేస్తుంది. URL ఇచ్చినప్పుడు, చిత్రం download చేసి Media Libraryలోకి import చేస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | ఉన్న Media Library attachment యొక్క ID |
| `url` | string | No | import చేసి logoగా సెట్ చేయాల్సిన remote image URL |

`attachment_id` లేదా `url` లో ఒకటి ఇవ్వాలి.

**ఇస్తుంది** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

సక్రియ theme యొక్క `theme.json` (లేదా `global-styles`) కు పేరుగల colour/typography presetను వర్తింపజేస్తుంది. Presets అనేవి Gratis AI Agent బృందం నిర్వహించే ఎంపిక చేసిన bundles.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Preset పేరు, ఉదా. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | `true` అయితే, భర్తీ చేయకుండా ఇప్పటికే ఉన్న valuesతో merge చేస్తుంది. Default `false` |

**లభ్యమైన presets**

| Preset | Description |
|---|---|
| `minimal-dark` | దాదాపు నలుపు background, తెలుపు text, ఒకే accent colour |
| `warm-editorial` | వెచ్చని off-white background, serif headings, సహజ accent colours |
| `corporate-blue` | వృత్తిపరమైన typographyతో navy మరియు white palette |
| `vibrant-startup` | ప్రకాశవంతమైన gradients, గుండ్రని corners, ఆధునిక sans-serif type |
| `classic-blog` | Neutral greys, సౌకర్యవంతమైన line-height, సంప్రదాయ layout spacing |

**ఇస్తుంది** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

Global Styles సామర్థ్యాలు WordPress Global Styles API ద్వారా theme.json valuesను చదవడం, వ్రాయడం చేస్తాయి. ఇవి site అంతటా అన్ని blocks మరియు templatesపై ప్రభావం చూపుతాయి.

### `get_global_styles`

ప్రస్తుత global styles configurationను ఇస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | నిర్దిష్ట valueకు JSON pointer, ఉదా. `/color/palette` లేదా `/typography/fontSizes`. వదిలేస్తే మొత్తం objectను ఇస్తుంది. |

**ఇస్తుంది** పూర్తి global styles object లేదా `path` వద్ద ఉన్న value.

---

### `set_global_styles`

global styles configurationలో ఒకటి లేదా మరిన్ని valuesను update చేస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | సెట్ చేయాల్సిన valueకు JSON pointer, ఉదా. `/color/palette` |
| `value` | any | Yes | కొత్త value |

**ఉదాహరణ** — paletteకు colour జోడించండి

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ఇస్తుంది** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

agent వర్తింపజేసిన అన్ని global styles మార్పులను reset చేసి, theme defaultsను తిరిగి స్థాపిస్తుంది.

**Parameters** — లేవు

**ఇస్తుంది** `{ "success": true }`

---

## Navigation Menus

Navigation Menu సామర్థ్యాలు WordPress nav menus మరియు వాటి itemsను సృష్టించి నిర్వహిస్తాయి.

### `create_menu`

కొత్త WordPress navigation menuను సృష్టిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Menu పేరు, ఉదా. `Primary Navigation` |
| `location` | string | No | ఈ menuకు కేటాయించాల్సిన theme location, ఉదా. `primary` |

**ఇస్తుంది** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

menu పేరు మార్చుతుంది లేదా theme locationకు మళ్లీ కేటాయిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | update చేయాల్సిన menu యొక్క ID |
| `name` | string | No | కొత్త menu పేరు |
| `location` | string | No | కేటాయించాల్సిన లేదా మళ్లీ కేటాయించాల్సిన theme location |

**ఇస్తుంది** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

ఉన్న navigation menuకు itemను జోడిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | లక్ష్య menu యొక్క ID |
| `type` | string | Yes | Item type: `custom`, `post_type`, లేదా `taxonomy` |
| `title` | string | No | menu item కోసం label (`custom` typeకు అవసరం) |
| `url` | string | No | `custom` items కోసం URL |
| `object_id` | integer | No | `post_type`/`taxonomy` items కోసం Post ID లేదా term ID |
| `parent_id` | integer | No | ఈ itemను క్రింద ఉంచాల్సిన menu item ID |
| `position` | integer | No | menuలో zero-based position |

**ఇస్తుంది** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

navigation menu నుంచి itemను తొలగిస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | తొలగించాల్సిన menu item ID |

**ఇస్తుంది** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

అన్ని WordPress navigation menusను, వాటికి కేటాయించిన theme locationsతో కలిసి జాబితా చేస్తుంది.

**Parameters** — లేవు

**ఇస్తుంది**

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

## Options Management

Options సామర్థ్యాలు `get_option` / `update_option` ద్వారా WordPress optionsను చదవడం, వ్రాయడం చేస్తాయి. అంతర్నిర్మిత safety blocklist కీలక settingsను పొరపాటున మార్చకుండా నిరోధిస్తుంది.

### `get_option`

WordPress optionను చదువుతుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key, ఉదా. `blogname` |

**ఇస్తుంది** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` safety blocklistలో ఉంటే error ఇస్తుంది.

---

### `set_option`

WordPress optionను వ్రాస్తుంది.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key |
| `value` | any | Yes | కొత్త value (arrays/objects కోసం స్వయంచాలకంగా serialise అవుతుంది) |
| `autoload` | string | No | `"yes"` లేదా `"no"`. Default ఇప్పటికే ఉన్న autoload settingను అలాగే ఉంచుతుంది |

`option_name` భద్రతా blocklistలో ఉంటే లోపాన్ని తిరిగి ఇస్తుంది.

**తిరిగి ఇస్తుంది** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress optionని తొలగిస్తుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `option_name` | string | అవును | తొలగించాల్సిన option key |

`option_name` భద్రతా blocklistలో ఉంటే లోపాన్ని తిరిగి ఇస్తుంది.

**తిరిగి ఇస్తుంది** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

ఒక నమూనాకు సరిపోలే WordPress optionsను జాబితా చేస్తుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `pattern` | string | కాదు | option పేర్లను వడపోసేందుకు SQL LIKE నమూనా, ఉదా. `gratis_%`. వదిలేస్తే అన్ని optionsను తిరిగి ఇస్తుంది (పెద్ద డేటాబేస్‌లపై జాగ్రత్తగా వాడండి). |
| `limit` | integer | కాదు | ఫలితాల గరిష్ఠ సంఖ్య. డిఫాల్ట్ `50`, గరిష్ఠం `500` |

**తిరిగి ఇస్తుంది**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## కంటెంట్ నిర్వహణ

కంటెంట్ నిర్వహణ సామర్థ్యాలు WordPress posts మరియు pagesను సృష్టించి సవరించగలవు. Post IDs తిరిగి ఇవ్వబడతాయి, కాబట్టి బహుళ సామర్థ్య ప్రణాళికల్లో తరువాతి దశలు సృష్టించిన కంటెంట్‌ను సూచించగలవు.

### `create_post`

కొత్త WordPress post, page, లేదా custom post type ఎంట్రీని సృష్టిస్తుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `title` | string | అవును | Post శీర్షిక |
| `content` | string | కాదు | Post విషయం — plain text, HTML, లేదా serialised block markupను స్వీకరిస్తుంది |
| `status` | string | కాదు | `draft`, `publish`, `pending`, `private`. డిఫాల్ట్ `draft` |
| `post_type` | string | కాదు | Post type slug, ఉదా. `post`, `page`, లేదా నమోదు చేసిన ఏదైనా CPT. డిఫాల్ట్ `post` |
| `excerpt` | string | కాదు | archives మరియు శోధన ఫలితాల్లో చూపే చిన్న సారాంశం |
| `categories` | array | కాదు | కేటాయించాల్సిన category పేర్లు లేదా IDs యొక్క array |
| `tags` | array | కాదు | కేటాయించాల్సిన tag పేర్లు లేదా IDs యొక్క array |
| `author` | integer | కాదు | post authorగా సెట్ చేయాల్సిన WordPress user ID. ప్రస్తుత userకి డిఫాల్ట్ అవుతుంది |
| `date` | string | కాదు | ISO 8601 ఫార్మాట్‌లో ప్రచురణ తేదీ, ఉదా. `2026-05-01T09:00:00` |
| `page_template` | string | కాదు | ఈ post లేదా pageకి కేటాయించాల్సిన template file, ఉదా. `page-full-width.php`. `post_type` `page`గా ఉన్నప్పుడు లేదా page templatesకు మద్దతు ఇచ్చే CPT అయినప్పుడు మాత్రమే అర్థవంతం. |

**ఉదాహరణ**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**తిరిగి ఇస్తుంది** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

ఇప్పటికే ఉన్న WordPress post లేదా pageను నవీకరిస్తుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `post_id` | integer | అవును | నవీకరించాల్సిన post యొక్క ID |
| `title` | string | కాదు | కొత్త post శీర్షిక |
| `content` | string | కాదు | కొత్త post విషయం |
| `status` | string | కాదు | కొత్త స్థితి: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | కాదు | కొత్త excerpt |
| `categories` | array | కాదు | పూర్తి category జాబితాను ఈ పేర్లు లేదా IDs arrayతో భర్తీ చేయండి |
| `tags` | array | కాదు | పూర్తి tag జాబితాను ఈ పేర్లు లేదా IDs arrayతో భర్తీ చేయండి |
| `page_template` | string | కాదు | ఈ post లేదా pageకి కేటాయించాల్సిన కొత్త template file, ఉదా. `page-full-width.php`. template కేటాయింపును తీసివేసి theme డిఫాల్ట్‌కు తిరిగి వెళ్లడానికి ఖాళీ stringను పంపండి. |

**ఉదాహరణ** — సృష్టించిన తర్వాత templateను మార్చండి

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**తిరిగి ఇస్తుంది** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

ఒకే సామర్థ్య కాల్‌లో అనేక postsను సృష్టిస్తుంది. దీంతో site నిర్మాణాలు లేదా bulk content import సమయంలో రౌండ్-ట్రిప్‌లు తగ్గుతాయి. Posts వరుసగా సృష్టించబడతాయి; ఒకటి విఫలమైనా మిగతావి కొనసాగుతాయి, వైఫల్యం results arrayలో నివేదించబడుతుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `posts` | array | అవును | post objects యొక్క array, ప్రతి ఒక్కటి `create_post`తో సమానమైన పారామీటర్లను స్వీకరిస్తుంది |
| `stop_on_error` | boolean | కాదు | `true` అయితే, మొదటి వైఫల్యం తర్వాత ప్రాసెసింగ్ ఆపండి. డిఫాల్ట్ `false` |

**ఉదాహరణ**

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

**తిరిగి ఇస్తుంది**

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

ఇప్పటికే ఉన్న post లేదా pageకి featured image (post thumbnail)ను కేటాయిస్తుంది. ఇప్పటికే ఉన్న Media Library attachment ID లేదా దూరస్థ image URLను స్వీకరిస్తుంది; URL ఇస్తే, image స్వయంచాలకంగా డౌన్‌లోడ్ చేసి import చేయబడుతుంది.

**పారామీటర్లు**

| పారామీటర్ | రకం | అవసరం | వివరణ |
|---|---|---|---|
| `post_id` | integer | అవును | నవీకరించాల్సిన post లేదా page యొక్క ID |
| `attachment_id` | integer | కాదు | ఇప్పటికే ఉన్న Media Library attachment యొక్క ID |
| `url` | string | కాదు | import చేసి featured imageగా సెట్ చేయాల్సిన దూరస్థ image URL |
| `alt_text` | string | కాదు | URL నుండి import చేస్తే attachmentకి వర్తింపజేయాల్సిన Alt text |

`attachment_id` లేదా `url`లో ఒకటి తప్పనిసరిగా ఇవ్వాలి.

**తిరిగి ఇస్తుంది** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

సక్రియ form pluginను ఉపయోగించి contact formను సృష్టిస్తుంది (ఇన్‌స్టాల్ చేసినదాన్ని బట్టి Contact Form 7, WPForms, Fluent Forms, లేదా Gravity Forms). ఏ post లేదా pageలోనైనా చేర్చగల shortcodeను తిరిగి ఇస్తుంది.

**పారామీటర్లు**

| పరామీటర్ | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `title` | string | Yes | ఫారమ్ plugin అడ్మిన్‌లో చూపించే ఫారమ్ పేరు |
| `fields` | array | Yes | ఫారమ్ ఫీల్డ్‌ల క్రమబద్ధమైన జాబితా (కింద ఉన్న ఫీల్డ్ ఆబ్జెక్ట్ చూడండి) |
| `recipient` | string | No | సమర్పణలను స్వీకరించే Email చిరునామా. డిఫాల్ట్‌గా WordPress అడ్మిన్ Email ఉపయోగిస్తుంది |
| `subject` | string | No | Email విషయ పంక్తి. Contact Form 7 ఉపయోగించినప్పుడు `[your-name]` మరియు `[your-subject]` ప్లేస్‌హోల్డర్‌లకు మద్దతు ఇస్తుంది |
| `confirmation_message` | string | No | విజయవంతమైన సమర్పణ తర్వాత చూపించే సందేశం. డిఫాల్ట్: `"Thank you for your message. We'll be in touch soon."` |

**ఫీల్డ్ ఆబ్జెక్ట్**

| కీ | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `name` | string | Yes | అంతర్గత ఫీల్డ్ పేరు / యంత్ర కీ |
| `label` | string | Yes | ఫారమ్‌పై చూపించే మనుషులకు అర్థమయ్యే లేబుల్ |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | సమర్పణకు ముందు ఫీల్డ్ తప్పనిసరిగా నింపాలా. డిఫాల్ట్ `false` |
| `options` | array | No | `select`, `checkbox`, మరియు `radio` ఫీల్డ్‌ల కోసం ఎంపికలు |
| `placeholder` | string | No | టెక్స్ట్-రకం ఇన్‌పుట్‌ల కోసం ప్లేస్‌హోల్డర్ టెక్స్ట్ |

**ఉదాహరణ**

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

**తిరిగి ఇస్తుంది**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## దృశ్య సమీక్ష

దృశ్య సమీక్ష సామర్థ్యాలు agent‌కు ప్రత్యక్ష పేజీల స్క్రీన్‌షాట్‌లను తీసుకుని వాటిని విశ్లేషించే వీలు ఇస్తాయి. దీని వల్ల ఏ browser extension అవసరం లేకుండా స్వయంచాలక డిజైన్ సమీక్ష, ముందు/తర్వాత పోలికలు, దృశ్య రిగ్రెషన్ తనిఖీలు చేయవచ్చు.

### `capture_screenshot`

సర్వర్-వైపు headless browser ఉపయోగించి, ఇచ్చిన URL వద్ద ఉన్న WordPress పేజీ స్క్రీన్‌షాట్‌ను తీస్తుంది. చిత్రం Media Libraryలో సేవ్ చేయబడుతుంది మరియు CDN URL తిరిగి ఇవ్వబడుతుంది.

**పరామీటర్‌లు**

| పరామీటర్ | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `url` | string | Yes | స్క్రీన్‌షాట్ తీసుకోవాల్సిన పేజీ యొక్క పూర్తి URL, ఉదా. `https://example.com/about/` |
| `width` | integer | No | పిక్సెల్‌లలో Viewport వెడల్పు. డిఫాల్ట్ `1280` |
| `height` | integer | No | పిక్సెల్‌లలో Viewport ఎత్తు. డిఫాల్ట్ `800` |
| `full_page` | boolean | No | కేవలం viewport బదులుగా, స్క్రోల్ చేయగల మొత్తం పేజీని క్యాప్చర్ చేయండి. డిఫాల్ట్ `false` |
| `delay_ms` | integer | No | పేజీ లోడ్ అయిన తర్వాత క్యాప్చర్ చేయడానికి ముందు వేచి ఉండాల్సిన మిల్లీసెకన్లు; అనిమేటెడ్ కంటెంట్‌కు ఉపయోగకరం. డిఫాల్ట్ `500` |
| `label` | string | No | Media Libraryలో attachmentతో నిల్వ చేసే మనుషులకు అర్థమయ్యే లేబుల్ |

**తిరిగి ఇస్తుంది**

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

రెండు స్క్రీన్‌షాట్‌లను తీసుకుని, దృశ్య తేడా స్కోర్‌తో పాటు మారిన ప్రాంతాలను హైలైట్ చేసే తేడా చిత్రాన్ని తిరిగి ఇస్తుంది. డిజైన్ మార్పు ఆశించిన ఫలితాన్ని ఇచ్చిందని నిర్ధారించడానికి లేదా అనుకోని రిగ్రెషన్‌లను గుర్తించడానికి ఉపయోగకరం.

**పరామీటర్‌లు**

| పరామీటర్ | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `before_url` | string | Yes | "ముందు" స్థితిగా క్యాప్చర్ చేయాల్సిన పేజీ URL |
| `after_url` | string | Yes | "తర్వాత" స్థితిగా క్యాప్చర్ చేయాల్సిన పేజీ URL. కాలాంతర పోలిక అయితే అదే URL కావచ్చు |
| `width` | integer | No | రెండు క్యాప్చర్‌ల కోసం Viewport వెడల్పు. డిఫాల్ట్ `1280` |
| `threshold` | float | No | పిక్సెల్-తేడా థ్రెషోల్డ్ (0.0–1.0). ఈ సహన పరిమితిలో ఉన్న పిక్సెల్‌లు మారలేదని పరిగణిస్తారు. డిఫాల్ట్ `0.1` |

**తిరిగి ఇస్తుంది**

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

`diff_score` విలువ `0.0` అయితే కనిపించే మార్పు లేదని అర్థం; `1.0` అయితే ప్రతి పిక్సెల్ మారిందని అర్థం.

---

### `review_page_design`

ఒక పేజీ స్క్రీన్‌షాట్‌ను తీసుకుని దృశ్య విశ్లేషణ కోసం భాషా నమూనాకు పంపుతుంది. లేఅవుట్, టైపోగ్రఫీ, రంగుల వినియోగం, యాక్సెసిబిలిటీ సమస్యలను కవర్ చేసే నిర్మిత అంచనాను తిరిగి ఇస్తుంది.

**పరామీటర్‌లు**

| పరామీటర్ | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `url` | string | Yes | సమీక్షించాల్సిన పేజీ యొక్క పూర్తి URL |
| `focus` | string | No | ప్రత్యేకంగా దృష్టి పెట్టాల్సిన సమీక్ష ప్రాంతాల కామాతో వేరు చేసిన జాబితా: `layout`, `typography`, `colour`, `accessibility`, `mobile`. డిఫాల్ట్: అన్ని ప్రాంతాలు |
| `width` | integer | No | Viewport వెడల్పు. డిఫాల్ట్ `1280` |

**తిరిగి ఇస్తుంది**

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

## ఇన్‌స్టాల్ చేయగల సామర్థ్యాలు

ఇన్‌స్టాల్ చేయగల సామర్థ్యాల Registry, WordPress plugins‌గా పంపిణీ చేసే అదనపు సామర్థ్య ప్యాక్‌లతో agent‌ను విస్తరించడానికి మిమ్మల్ని అనుమతిస్తుంది. ప్రతి ప్యాక్ ప్రామాణిక సామర్థ్య APIను ఉపయోగించి ఒకటి లేదా అంతకంటే ఎక్కువ సామర్థ్యాలను నమోదు చేస్తుంది.

### `list_available_abilities`

Registry నుండి ఇన్‌స్టాలేషన్‌కు అందుబాటులో ఉన్న సామర్థ్య ప్యాక్‌ల కేటలాగ్‌ను తిరిగి ఇస్తుంది.

**పరామీటర్‌లు**

| పరామితి | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `category` | string | లేదు | వర్గం ఆధారంగా ఫిల్టర్ చేయండి: `ecommerce`, `seo`, `media`, `social`, `developer` |

**తిరిగి ఇస్తుంది**

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

రిజిస్ట్రీ నుండి ability pack‌ను డౌన్‌లోడ్ చేసి సక్రియం చేస్తుంది.

**పరామితులు**

| పరామితి | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `slug` | string | అవును | Ability pack plugin slug |

**తిరిగి ఇస్తుంది** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

వివరించిన వినియోగ సందర్భానికి ఉత్తమ plugin‌ను కనుగొనడానికి ability registryని ప్రశ్నిస్తుంది మరియు ఐచ్ఛికంగా దాన్ని ఇన్‌స్టాల్ చేస్తుంది.

**పరామితులు**

| పరామితి | రకం | అవసరమా | వివరణ |
|---|---|---|---|
| `description` | string | అవును | కావలసిన కార్యాచరణ యొక్క సహజ భాషా వివరణ |
| `install` | boolean | లేదు | `true` అయితే, సిఫార్సు చేసిన plugin‌ను వెంటనే ఇన్‌స్టాల్ చేస్తుంది. డిఫాల్ట్ `false` |

**ఉదాహరణ**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**తిరిగి ఇస్తుంది**

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
