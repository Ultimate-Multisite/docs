---
title: திறன்கள் குறிப்பு
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# திறன்கள் குறிப்பு

திறன்கள் என்பது உங்கள் WordPress நிறுவலில் Gratis AI Agent அழைக்கக்கூடிய அடிப்படைச் செயல்கள். ஒவ்வொரு திறனும் பதிவுசெய்யப்பட்ட PHP class ஆகும். அது ஒரு JSON schema-வை வெளிப்படுத்துகிறது — தேவையான parameters என்ன, திறன் என்ன திருப்பித் தருகிறது என்பதைக் புரிந்துகொள்ள agent இந்த schema-வை இயக்க நேரத்தில் படிக்கிறது.

இந்தப் பக்கம் Gratis AI Agent v1.9.0 உடன் வரும் அனைத்து திறன்களையும் ஆவணப்படுத்துகிறது.

---

## தனிப்பயன் பதிவு வகைகள்

இந்தத் திறன்கள் agent மூலம் பதிவுசெய்யப்பட்ட தனிப்பயன் பதிவு வகைகளை (CPTs) நிர்வகிக்கின்றன. பதிவுகள் WordPress options table-இல் நிலையாகச் சேமிக்கப்படுகின்றன. எனவே plugin செயலிழக்கச் செய்யப்பட்டு மீண்டும் செயல்படுத்தப்பட்டாலும் அவை நீடிக்கும்.

### `register_post_type`

புதிய தனிப்பயன் பதிவு வகையைப் பதிவுசெய்கிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ஆம் | பதிவு வகை key (அதிகபட்சம் 20 எழுத்துகள், பெரிய எழுத்துகள் இல்லை, இடைவெளிகள் இல்லை) |
| `singular_label` | string | ஆம் | மனிதர்கள் படிக்கக்கூடிய ஒருமை பெயர், உதா. `Portfolio Item` |
| `plural_label` | string | ஆம் | மனிதர்கள் படிக்கக்கூடிய பன்மை பெயர், உதா. `Portfolio Items` |
| `public` | boolean | இல்லை | பதிவு வகை பொதுவாக அணுகக்கூடியதா. இயல்புநிலை `true` |
| `supports` | array | இல்லை | ஆதரிக்க வேண்டிய அம்சங்கள்: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. இயல்புநிலை `["title","editor"]` |
| `has_archive` | boolean | இல்லை | பதிவு வகை காப்பகப் பக்கம் இயக்கப்பட்டுள்ளதா. இயல்புநிலை `false` |
| `menu_icon` | string | இல்லை | நிர்வாக menu icon-க்கான Dashicons class அல்லது URL. இயல்புநிலை `"dashicons-admin-post"` |
| `rewrite_slug` | string | இல்லை | பதிவு வகைக்கான URL slug. இயல்பாக `slug` பயன்படுத்தப்படும் |

**எடுத்துக்காட்டு**

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

**திருப்பித் தருவது** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent பதிவுசெய்த அனைத்து தனிப்பயன் பதிவு வகைகளையும் திருப்பித் தருகிறது.

**Parameters** — எதுவும் இல்லை

**திருப்பித் தருவது**

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

agent முன்பு பதிவுசெய்த தனிப்பயன் பதிவு வகையின் பதிவை நீக்குகிறது. அந்த வகையைச் சேர்ந்த ஏற்கனவே உள்ள பதிவுகள் தரவுத்தளத்தில் நீடிக்கும். ஆனால் அந்த பதிவு வகை மூலம் இனி அணுக முடியாது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ஆம் | அகற்ற வேண்டிய பதிவு வகை key |

**திருப்பித் தருவது** `{ "success": true, "slug": "portfolio" }`

---

## தனிப்பயன் வகைப்பாடுகள்

இந்தத் திறன்கள் தனிப்பயன் வகைப்பாடுகளை நிர்வகிக்கின்றன. CPTs போலவே, வகைப்பாடு பதிவுகளும் நிலையாகச் சேமிக்கப்படுகின்றன.

### `register_taxonomy`

புதிய தனிப்பயன் வகைப்பாட்டைப் பதிவுசெய்கிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ஆம் | வகைப்பாடு key (அதிகபட்சம் 32 எழுத்துகள்) |
| `singular_label` | string | ஆம் | மனிதர்கள் படிக்கக்கூடிய ஒருமை பெயர், உதா. `Project Category` |
| `plural_label` | string | ஆம் | மனிதர்கள் படிக்கக்கூடிய பன்மை பெயர், உதா. `Project Categories` |
| `post_types` | array | ஆம் | இந்த வகைப்பாடு இணைக்கப்பட வேண்டிய பதிவு வகை slugs |
| `hierarchical` | boolean | இல்லை | category பாணிக்கு `true`, tag பாணிக்கு `false`. இயல்புநிலை `true` |
| `public` | boolean | இல்லை | terms பொதுவாக அணுகக்கூடியதா. இயல்புநிலை `true` |
| `rewrite_slug` | string | இல்லை | வகைப்பாட்டுக்கான URL slug. இயல்பாக `slug` பயன்படுத்தப்படும் |

**எடுத்துக்காட்டு**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**திருப்பித் தருவது** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent பதிவுசெய்த அனைத்து தனிப்பயன் வகைப்பாடுகளையும் திருப்பித் தருகிறது.

**Parameters** — எதுவும் இல்லை

**திருப்பித் தருவது**

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

agent முன்பு பதிவுசெய்த தனிப்பயன் வகைப்பாட்டின் பதிவை நீக்குகிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ஆம் | அகற்ற வேண்டிய வகைப்பாடு key |

**திருப்பித் தருவது** `{ "success": true, "slug": "project-category" }`

---

## வடிவமைப்பு அமைப்பு

வடிவமைப்பு அமைப்பு திறன்கள் WordPress தளத்தின் காட்சி வழங்கலை மாற்றுகின்றன — தனிப்பயன் CSS முதல் block patterns மற்றும் தள logo வரை.

### `inject_custom_css`

`wp_add_inline_style` மூலம் தளத்தின் `<head>`-இல் CSS-ஐச் சேர்க்கிறது. CSS `gratis_ai_agent_custom_css` option-இல் சேமிக்கப்படுகிறது. திறன் reset செய்யப்படும்போது அது சுத்தமாக dequeue செய்யப்படும்.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | ஆம் | சேர்க்க வேண்டிய செல்லுபடியான CSS |
| `label` | string | இல்லை | debug logs-இல் பயன்படுத்தப்படும், இந்த CSS block-க்கான மனிதர்கள் படிக்கக்கூடிய label. இயல்புநிலை `"agent-injected"` |
| `replace` | boolean | இல்லை | `true` எனில், முன்பு சேர்க்கப்பட்ட அனைத்து CSS-ஐயும் மாற்றும். இயல்புநிலை `false` (சேர்த்துக்கொண்டே செல்லும்) |

**எடுத்துக்காட்டு**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**திருப்பித் தருவது** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern library-இல் மீண்டும் பயன்படுத்தக்கூடிய block pattern-ஐப் பதிவுசெய்கிறது.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ஆம் | Pattern identifier, உதா. `gratis/hero-dark` |
| `title` | string | ஆம் | editor-இல் காட்டப்படும் மனிதர்கள் படிக்கக்கூடிய pattern பெயர் |
| `content` | string | ஆம் | pattern-க்கான serialised block markup (HTML) |
| `categories` | array | இல்லை | Pattern category slugs, உதா. `["featured", "hero"]` |
| `description` | string | இல்லை | pattern picker-இல் காட்டப்படும் குறுகிய விளக்கம் |
| `keywords` | array | இல்லை | தேடல் முக்கியச் சொற்கள் |

**திருப்பித் தருவது** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent பதிவுசெய்த அனைத்து block patterns-ஐயும் பட்டியலிடுகிறது.

**Parameters** — எதுவும் இல்லை

**திருப்பி வழங்குவது**

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

WordPress தள லோகோவை கொடுக்கப்பட்ட இணைப்பு ID அல்லது தொலைநிலை பட URL ஆக அமைக்கிறது. URL வழங்கப்பட்டால், படம் பதிவிறக்கம் செய்யப்பட்டு Media Library-க்கு இறக்குமதி செய்யப்படும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `attachment_id` | integer | இல்லை | ஏற்கனவே உள்ள Media Library இணைப்பின் ID |
| `url` | string | இல்லை | இறக்குமதி செய்து லோகோவாக அமைக்க வேண்டிய தொலைநிலை பட URL |

`attachment_id` அல்லது `url` இவற்றில் ஒன்று வழங்கப்பட வேண்டும்.

**திருப்பி வழங்குவது** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

செயலில் உள்ள theme-இன் `theme.json` (அல்லது `global-styles`) மீது பெயரிடப்பட்ட நிறம்/எழுத்துரு preset-ஐப் பயன்படுத்துகிறது. Preset-கள் Gratis AI Agent குழுவால் பராமரிக்கப்படும் தேர்ந்தெடுக்கப்பட்ட தொகுப்புகள்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `preset` | string | ஆம் | Preset பெயர், எ.கா. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | இல்லை | `true` எனில், மாற்றுவதற்குப் பதிலாக ஏற்கனவே உள்ள மதிப்புகளுடன் இணைக்கும். இயல்புநிலை `false` |

**கிடைக்கும் preset-கள்**

| Preset | விளக்கம் |
|---|---|
| `minimal-dark` | கிட்டத்தட்ட கருப்பு பின்னணி, வெள்ளை உரை, ஒரே வலியுறுத்தல் நிறம் |
| `warm-editorial` | வெப்பமான மங்கல் வெள்ளை பின்னணி, serif தலைப்புகள், மண் சார்ந்த வலியுறுத்தல் நிறங்கள் |
| `corporate-blue` | தொழில்முறை எழுத்துருவியலுடன் navy மற்றும் வெள்ளை நிறத் தொகுப்பு |
| `vibrant-startup` | பிரகாசமான gradient-கள், வட்டமான மூலைகள், நவீன sans-serif எழுத்துரு வகை |
| `classic-blog` | நடுநிலை சாம்பல் நிறங்கள், வசதியான வரி உயரம், பாரம்பரிய அமைப்பு இடைவெளி |

**திருப்பி வழங்குவது** `{ "success": true, "preset": "minimal-dark" }`

---

## உலகளாவிய பாணிகள்

உலகளாவிய பாணி திறன்கள் WordPress Global Styles API மூலம் theme.json மதிப்புகளைப் படித்து எழுதுகின்றன. இது தளம் முழுவதும் உள்ள அனைத்து block-களையும் template-களையும் பாதிக்கும்.

### `get_global_styles`

தற்போதைய உலகளாவிய பாணி கட்டமைப்பைத் திருப்பி வழங்குகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `path` | string | இல்லை | குறிப்பிட்ட மதிப்பிற்கான JSON pointer, எ.கா. `/color/palette` அல்லது `/typography/fontSizes`. விடப்பட்டால் முழு object-ஐத் திருப்பி வழங்கும். |

**திருப்பி வழங்குவது** முழு உலகளாவிய பாணி object அல்லது `path`-இல் உள்ள மதிப்பு.

---

### `set_global_styles`

உலகளாவிய பாணி கட்டமைப்பில் ஒன்று அல்லது அதற்கு மேற்பட்ட மதிப்புகளைப் புதுப்பிக்கிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `path` | string | ஆம் | அமைக்க வேண்டிய மதிப்பிற்கான JSON pointer, எ.கா. `/color/palette` |
| `value` | any | ஆம் | புதிய மதிப்பு |

**எடுத்துக்காட்டு** — நிறத் தொகுப்பில் ஒரு நிறத்தைச் சேர்க்கவும்

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**திருப்பி வழங்குவது** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

முகவர் பயன்படுத்திய அனைத்து உலகளாவிய பாணி மாற்றங்களையும் மீட்டமைத்து, theme இயல்புநிலைகளை மீண்டும் கொண்டுவருகிறது.

**அளவுருக்கள்** — எதுவுமில்லை

**திருப்பி வழங்குவது** `{ "success": true }`

---

## வழிசெலுத்தல் மெனுக்கள்

வழிசெலுத்தல் menu திறன்கள் WordPress nav menu-களையும் அவற்றின் உருப்படிகளையும் உருவாக்கி நிர்வகிக்கின்றன.

### `create_menu`

புதிய WordPress வழிசெலுத்தல் menu-வை உருவாக்குகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `name` | string | ஆம் | Menu பெயர், எ.கா. `Primary Navigation` |
| `location` | string | இல்லை | இந்த menu-க்கு ஒதுக்க வேண்டிய theme இடம், எ.கா. `primary` |

**திருப்பி வழங்குவது** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

ஒரு menu-வின் பெயரை மாற்றுகிறது அல்லது அதை theme இடத்துக்கு மீண்டும் ஒதுக்குகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `menu_id` | integer | ஆம் | புதுப்பிக்க வேண்டிய menu-வின் ID |
| `name` | string | இல்லை | புதிய menu பெயர் |
| `location` | string | இல்லை | ஒதுக்க வேண்டிய அல்லது மீண்டும் ஒதுக்க வேண்டிய theme இடம் |

**திருப்பி வழங்குவது** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

ஏற்கனவே உள்ள வழிசெலுத்தல் menu-வில் ஒரு உருப்படியைச் சேர்க்கிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `menu_id` | integer | ஆம் | இலக்கு menu-வின் ID |
| `type` | string | ஆம் | உருப்படி வகை: `custom`, `post_type`, அல்லது `taxonomy` |
| `title` | string | இல்லை | menu உருப்படிக்கான லேபிள் (`custom` வகைக்கு தேவை) |
| `url` | string | இல்லை | `custom` உருப்படிகளுக்கான URL |
| `object_id` | integer | இல்லை | `post_type`/`taxonomy` உருப்படிகளுக்கான Post ID அல்லது term ID |
| `parent_id` | integer | இல்லை | இந்த உருப்படியை உட்பொதிக்க வேண்டிய menu உருப்படி ID |
| `position` | integer | இல்லை | menu-வில் பூஜ்ஜிய அடிப்படையிலான நிலை |

**திருப்பி வழங்குவது** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

வழிசெலுத்தல் menu-விலிருந்து ஒரு உருப்படியை நீக்குகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `item_id` | integer | ஆம் | நீக்க வேண்டிய menu உருப்படி ID |

**திருப்பி வழங்குவது** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

அனைத்து WordPress வழிசெலுத்தல் menu-களையும், அவற்றுக்கு ஒதுக்கப்பட்ட theme இடங்களுடன் பட்டியலிடுகிறது.

**அளவுருக்கள்** — எதுவுமில்லை

**திருப்பி வழங்குவது**

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

## விருப்பங்கள் மேலாண்மை

விருப்ப திறன்கள் `get_option` / `update_option` மூலம் WordPress விருப்பங்களைப் படித்து எழுதுகின்றன. உள்ளமைந்த பாதுகாப்பு blocklist முக்கிய அமைப்புகள் தவறுதலாக மாற்றப்படுவதைக் காக்கிறது.

### `get_option`

ஒரு WordPress விருப்பத்தைப் படிக்கிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `option_name` | string | ஆம் | விருப்ப key, எ.கா. `blogname` |

**திருப்பி வழங்குவது** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` பாதுகாப்பு blocklist-இல் இருந்தால் பிழையைத் திருப்பி வழங்கும்.

---

### `set_option`

ஒரு WordPress விருப்பத்தை எழுதுகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவை | விளக்கம் |
|---|---|---|---|
| `option_name` | string | ஆம் | விருப்ப key |
| `value` | any | ஆம் | புதிய மதிப்பு (array/object-களுக்கு தானாக serialise செய்யப்படும்) |
| `autoload` | string | இல்லை | `"yes"` அல்லது `"no"`. இயல்புநிலை ஏற்கனவே உள்ள autoload அமைப்பைப் பாதுகாக்கும் |

`option_name` பாதுகாப்பு blocklist-இல் இருந்தால் பிழையைத் திருப்பும்.

**திருப்புவது** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

ஒரு WordPress விருப்பத்தை நீக்கும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `option_name` | string | ஆம் | நீக்க வேண்டிய விருப்பச் சாவி |

`option_name` பாதுகாப்பு blocklist-இல் இருந்தால் பிழையைத் திருப்பும்.

**திருப்புவது** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

ஒரு pattern-க்கு பொருந்தும் WordPress விருப்பங்களைப் பட்டியலிடும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `pattern` | string | இல்லை | விருப்பப் பெயர்களை வடிகட்ட SQL LIKE pattern, எ.கா. `gratis_%`. விடப்பட்டால் எல்லா விருப்பங்களையும் திருப்பும் (பெரிய தரவுத்தளங்களில் எச்சரிக்கையுடன் பயன்படுத்தவும்). |
| `limit` | integer | இல்லை | முடிவுகளின் அதிகபட்ச எண்ணிக்கை. இயல்புநிலை `50`, அதிகபட்சம் `500` |

**திருப்புவது**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## உள்ளடக்க மேலாண்மை

உள்ளடக்க மேலாண்மை திறன்கள் WordPress பதிவுகள் மற்றும் பக்கங்களை உருவாக்கவும் திருத்தவும் செய்கின்றன. Post ID-கள் திருப்பப்படுவதால், பல திறன் திட்டங்களில் அடுத்த படிகள் உருவாக்கப்பட்ட உள்ளடக்கத்தைக் குறிப்பிட முடியும்.

### `create_post`

புதிய WordPress பதிவு, பக்கம் அல்லது தனிப்பயன் post type உள்ளீட்டை உருவாக்கும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `title` | string | ஆம் | பதிவின் தலைப்பு |
| `content` | string | இல்லை | பதிவின் உடல் — எளிய உரை, HTML, அல்லது serialised block markup ஏற்கும் |
| `status` | string | இல்லை | `draft`, `publish`, `pending`, `private`. இயல்புநிலை `draft` |
| `post_type` | string | இல்லை | Post type slug, எ.கா. `post`, `page`, அல்லது பதிவு செய்யப்பட்ட ஏதேனும் CPT. இயல்புநிலை `post` |
| `excerpt` | string | இல்லை | காப்பகங்கள் மற்றும் தேடல் முடிவுகளில் காட்டப்படும் குறும் சுருக்கம் |
| `categories` | array | இல்லை | ஒதுக்க வேண்டிய வகைப் பெயர்கள் அல்லது ID-களின் array |
| `tags` | array | இல்லை | ஒதுக்க வேண்டிய tag பெயர்கள் அல்லது ID-களின் array |
| `author` | integer | இல்லை | பதிவின் ஆசிரியராக அமைக்க வேண்டிய WordPress பயனர் ID. இயல்பாக தற்போதைய பயனர் |
| `date` | string | இல்லை | ISO 8601 வடிவில் வெளியீட்டு தேதி, எ.கா. `2026-05-01T09:00:00` |
| `page_template` | string | இல்லை | இந்த பதிவு அல்லது பக்கத்துக்கு ஒதுக்க வேண்டிய template கோப்பு, எ.கா. `page-full-width.php`. `post_type` `page` ஆகவோ அல்லது page template-களை ஆதரிக்கும் CPT ஆகவோ இருந்தால் மட்டுமே பொருள் கொண்டது. |

**எடுத்துக்காட்டு**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**திருப்புவது** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

ஏற்கனவே உள்ள WordPress பதிவு அல்லது பக்கத்தை புதுப்பிக்கும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `post_id` | integer | ஆம் | புதுப்பிக்க வேண்டிய பதிவின் ID |
| `title` | string | இல்லை | புதிய பதிவுத் தலைப்பு |
| `content` | string | இல்லை | புதிய பதிவு உடல் |
| `status` | string | இல்லை | புதிய நிலை: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | இல்லை | புதிய சுருக்கம் |
| `categories` | array | இல்லை | முழு வகைப் பட்டியலை இந்த பெயர்கள் அல்லது ID-களின் array-ஆல் மாற்றவும் |
| `tags` | array | இல்லை | முழு tag பட்டியலை இந்த பெயர்கள் அல்லது ID-களின் array-ஆல் மாற்றவும் |
| `page_template` | string | இல்லை | இந்த பதிவு அல்லது பக்கத்துக்கு ஒதுக்க வேண்டிய புதிய template கோப்பு, எ.கா. `page-full-width.php`. template ஒதுக்கீட்டை நீக்கி theme இயல்புநிலைக்கு திரும்ப, காலியான string அனுப்பவும். |

**எடுத்துக்காட்டு** — உருவாக்கிய பிறகு template-ஐ மாற்றவும்

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**திருப்புவது** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

ஒரே திறன் அழைப்பில் பல பதிவுகளை உருவாக்கும். இதனால் தள உருவாக்கங்கள் அல்லது பெருமளவு உள்ளடக்க இறக்குமதியின் போது சுற்றுப்பயணங்கள் குறையும். பதிவுகள் வரிசையாக உருவாக்கப்படும்; ஒன்று தோல்வியுற்றாலும் மற்றவை தொடரும், தோல்வி முடிவுகள் array-இல் தெரிவிக்கப்படும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `posts` | array | ஆம் | பதிவு object-களின் array; ஒவ்வொன்றும் `create_post` போலவே அதே அளவுருக்களை ஏற்கும் |
| `stop_on_error` | boolean | இல்லை | `true` என்றால், முதல் தோல்விக்குப் பிறகு செயலாக்கத்தை நிறுத்தும். இயல்புநிலை `false` |

**எடுத்துக்காட்டு**

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

**திருப்புவது**

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

ஏற்கனவே உள்ள பதிவு அல்லது பக்கத்துக்கு featured image (post thumbnail) ஒதுக்கும். ஏற்கனவே உள்ள Media Library attachment ID அல்லது தொலைநிலை பட URL-ஐ ஏற்கும்; URL வழங்கப்பட்டால், படம் தானாகப் பதிவிறக்கப்பட்டு இறக்குமதி செய்யப்படும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `post_id` | integer | ஆம் | புதுப்பிக்க வேண்டிய பதிவு அல்லது பக்கத்தின் ID |
| `attachment_id` | integer | இல்லை | ஏற்கனவே உள்ள Media Library attachment-இன் ID |
| `url` | string | இல்லை | இறக்குமதி செய்து featured image ஆக அமைக்க வேண்டிய தொலைநிலை பட URL |
| `alt_text` | string | இல்லை | URL-இலிருந்து இறக்குமதி செய்யப்பட்டால் attachment-க்கு பயன்படுத்த வேண்டிய Alt text |

`attachment_id` அல்லது `url` இவற்றில் ஒன்று வழங்கப்பட வேண்டும்.

**திருப்புவது** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

செயலில் உள்ள form plugin-ஐப் பயன்படுத்தி contact form உருவாக்கும் (நிறுவப்பட்டுள்ளதைப் பொறுத்து Contact Form 7, WPForms, Fluent Forms, அல்லது Gravity Forms). எந்த பதிவு அல்லது பக்கத்திலும் embed செய்யக்கூடிய shortcode-ஐ திருப்பும்.

**அளவுருக்கள்**

| அளவுரு | Type | தேவை | விளக்கம் |
|---|---|---|---|
| `title` | string | ஆம் | படிவ நீட்சி நிர்வாகத்தில் காட்டப்படும் படிவப் பெயர் |
| `fields` | array | ஆம் | படிவப் புலங்களின் வரிசைப்படுத்தப்பட்ட பட்டியல் (கீழே உள்ள புலப் பொருளைப் பார்க்கவும்) |
| `recipient` | string | இல்லை | சமர்ப்பிப்புகளைப் பெற வேண்டிய மின்னஞ்சல் முகவரி. இயல்புநிலை WordPress நிர்வாக மின்னஞ்சல் |
| `subject` | string | இல்லை | மின்னஞ்சல் பொருள் வரி. Contact Form 7 பயன்படுத்தும் போது `[your-name]` மற்றும் `[your-subject]` இடஒதுக்கிகளை ஆதரிக்கிறது |
| `confirmation_message` | string | இல்லை | வெற்றிகரமான சமர்ப்பிப்புக்குப் பிறகு காட்டப்படும் செய்தி. இயல்புநிலை: `"Thank you for your message. We'll be in touch soon."` |

**புலப் பொருள்**

| விசை | Type | தேவை | விளக்கம் |
|---|---|---|---|
| `name` | string | ஆம் | உள் புலப் பெயர் / இயந்திர விசை |
| `label` | string | ஆம் | படிவத்தில் காட்டப்படும் மனிதர் வாசிக்கக்கூடிய லேபிள் |
| `type` | string | ஆம் | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | இல்லை | சமர்ப்பிப்புக்கு முன் புலம் நிரப்பப்பட வேண்டுமா. இயல்புநிலை `false` |
| `options` | array | இல்லை | `select`, `checkbox`, மற்றும் `radio` புலங்களுக்கான விருப்பங்கள் |
| `placeholder` | string | இல்லை | உரை வகை உள்ளீடுகளுக்கான இடஒதுக்கி உரை |

**எடுத்துக்காட்டு**

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

**திரும்ப வழங்குவது**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## காட்சி மதிப்பாய்வு

காட்சி மதிப்பாய்வு திறன்கள் agent நேரடி பக்கங்களின் திரைப்பிடிப்புகளை எடுத்து அவற்றைப் பகுப்பாய்வு செய்ய உதவுகின்றன. இதனால் எந்த browser extension-உம் தேவையில்லாமல் தன்னாட்சி வடிவமைப்பு மதிப்பாய்வு, முன்/பின் ஒப்பீடுகள், மற்றும் காட்சி பின்னடைவு சோதனைகள் சாத்தியமாகின்றன.

### `capture_screenshot`

சேவையகப் பக்க headless browser-ஐப் பயன்படுத்தி, கொடுக்கப்பட்ட URL-இல் உள்ள WordPress பக்கத்தின் திரைப்பிடிப்பை எடுக்கிறது. படம் மீடியா நூலகத்தில் சேமிக்கப்படும், மேலும் CDN URL திரும்ப வழங்கப்படும்.

**அளவுருக்கள்**

| அளவுரு | Type | தேவை | விளக்கம் |
|---|---|---|---|
| `url` | string | ஆம் | திரைப்பிடிப்பு எடுக்க வேண்டிய பக்கத்தின் முழு URL, எ.கா. `https://example.com/about/` |
| `width` | integer | இல்லை | Viewport அகலம், பிக்சல்களில். இயல்புநிலை `1280` |
| `height` | integer | இல்லை | Viewport உயரம், பிக்சல்களில். இயல்புநிலை `800` |
| `full_page` | boolean | இல்லை | Viewport மட்டும் அல்லாமல் முழு உருட்டக்கூடிய பக்கத்தையும் பிடிக்கவும். இயல்புநிலை `false` |
| `delay_ms` | integer | இல்லை | பக்கம் ஏற்றப்பட்ட பிறகு பிடிப்பதற்கு முன் காத்திருக்க வேண்டிய மில்லிவிநாடிகள்; அசைவூட்டப்பட்ட உள்ளடக்கத்திற்கு பயனுள்ளது. இயல்புநிலை `500` |
| `label` | string | இல்லை | மீடியா நூலகத்தில் இணைப்புடன் சேமிக்கப்படும் மனிதர் வாசிக்கக்கூடிய லேபிள் |

**திரும்ப வழங்குவது**

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

இரண்டு திரைப்பிடிப்புகளை எடுத்து, மாற்றப்பட்ட பகுதிகளைச் சுட்டிக்காட்டும் வேறுபாட்டு படத்துடன் காட்சி வேறுபாட்டு மதிப்பெண்ணைத் திரும்ப வழங்குகிறது. வடிவமைப்பு மாற்றம் எதிர்பார்த்த முடிவைத் தந்ததா என்பதை உறுதிப்படுத்த அல்லது எதிர்பாராத பின்னடைவுகளை கண்டறிய பயனுள்ளது.

**அளவுருக்கள்**

| அளவுரு | Type | தேவை | விளக்கம் |
|---|---|---|---|
| `before_url` | string | ஆம் | "முன்" நிலையாகப் பிடிக்க வேண்டிய பக்கத்தின் URL |
| `after_url` | string | ஆம் | "பின்" நிலையாகப் பிடிக்க வேண்டிய பக்கத்தின் URL. கால வேறுபாட்டில் ஒப்பிடும்போது அதே URL ஆக இருக்கலாம் |
| `width` | integer | இல்லை | இரண்டு பிடிப்புகளுக்கும் Viewport அகலம். இயல்புநிலை `1280` |
| `threshold` | float | இல்லை | பிக்சல் வேறுபாட்டு வரம்பு (0.0–1.0). இந்த சகிப்புத்தன்மைக்குள் உள்ள பிக்சல்கள் மாறாதவையாகக் கருதப்படும். இயல்புநிலை `0.1` |

**திரும்ப வழங்குவது**

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

`diff_score` `0.0` என்றால் காணக்கூடிய மாற்றம் இல்லை; `1.0` என்றால் ஒவ்வொரு பிக்சலும் மாறியுள்ளது.

---

### `review_page_design`

ஒரு பக்கத்தின் திரைப்பிடிப்பை எடுத்து, காட்சி பகுப்பாய்வுக்காக அதை மொழி மாதிரிக்கு அனுப்புகிறது. அமைப்பு, எழுத்துருவியல், நிறப் பயன்பாடு, மற்றும் அணுகல்தன்மை கவலைகளை உள்ளடக்கிய கட்டமைக்கப்பட்ட மதிப்பீட்டைத் திரும்ப வழங்குகிறது.

**அளவுருக்கள்**

| அளவுரு | Type | தேவை | விளக்கம் |
|---|---|---|---|
| `url` | string | ஆம் | மதிப்பாய்வு செய்ய வேண்டிய பக்கத்தின் முழு URL |
| `focus` | string | இல்லை | வலியுறுத்த வேண்டிய மதிப்பாய்வு பகுதிகளின் காற்புள்ளி பிரிக்கப்பட்ட பட்டியல்: `layout`, `typography`, `colour`, `accessibility`, `mobile`. இயல்புநிலை: அனைத்து பகுதிகளும் |
| `width` | integer | இல்லை | Viewport அகலம். இயல்புநிலை `1280` |

**திரும்ப வழங்குவது**

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

## நிறுவக்கூடிய திறன்கள்

நிறுவக்கூடிய திறன்கள் பதிவகம், WordPress நீட்சிகளாக விநியோகிக்கப்படும் கூடுதல் திறன் தொகுப்புகள் மூலம் agent-ஐ விரிவாக்க அனுமதிக்கிறது. ஒவ்வொரு தொகுப்பும் நிலையான திறன் API-ஐப் பயன்படுத்தி ஒன்று அல்லது அதற்கு மேற்பட்ட திறன்களைப் பதிவு செய்கிறது.

### `list_available_abilities`

பதிவகத்திலிருந்து நிறுவலுக்குக் கிடைக்கும் திறன் தொகுப்புகளின் பட்டியலைத் திரும்ப வழங்குகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `category` | string | இல்லை | வகையின்படி வடிகட்டவும்: `ecommerce`, `seo`, `media`, `social`, `developer` |

**திருப்பி வழங்குவது**

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

பதிவகத்திலிருந்து திறன் தொகுப்பைப் பதிவிறக்கி செயல்படுத்துகிறது.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `slug` | string | ஆம் | திறன் தொகுப்பு செருகுநிரல் slug |

**திருப்பி வழங்குவது** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

விவரிக்கப்பட்ட பயன்பாட்டு நிலைக்கு சிறந்த செருகுநிரலைக் கண்டறிய திறன் பதிவகத்தை வினவுகிறது; விருப்பமாக அதை நிறுவும்.

**அளவுருக்கள்**

| அளவுரு | வகை | தேவையா | விளக்கம் |
|---|---|---|---|
| `description` | string | ஆம் | விரும்பிய செயல்பாட்டின் இயல்பான மொழி விளக்கம் |
| `install` | boolean | இல்லை | `true` எனில், பரிந்துரைக்கப்பட்ட செருகுநிரலை உடனே நிறுவும். இயல்புநிலை `false` |

**எடுத்துக்காட்டு**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**திருப்பி வழங்குவது**

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
