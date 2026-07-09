---
title: හැකියාවන් යොමුව
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# හැකියා යොමුව {#abilities-reference}

හැකියා යනු Gratis AI Agent ඔබගේ WordPress ස්ථාපනය මත කැඳවිය හැකි මූලික ක්‍රියා වේ. සෑම හැකියාවක්ම JSON schema එකක් නිරාවරණය කරන ලියාපදිංචි PHP class එකකි — agent ධාවන වේලාවේදී මෙම schema එක කියවා අවශ්‍ය parameters මොනවාද සහ හැකියාව ලබාදෙන්නේ මොනවාද යන්න තේරුම් ගනී.

මෙම පිටුව Gratis AI Agent v1.9.0 සමඟ එන සියලු හැකියා ලේඛනගත කරයි.

---

## අභිරුචි පළ කිරීමේ වර්ග {#custom-post-types}

මෙම හැකියා agent හරහා ලියාපදිංචි කළ අභිරුචි පළ කිරීමේ වර්ග (CPTs) කළමනාකරණය කරයි. ලියාපදිංචි කිරීම් WordPress options වගුවේ ස්ථිරව සුරැකෙන නිසා plugin අක්‍රිය කිරීමෙන් සහ නැවත සක්‍රිය කිරීමෙන් පසුවත් ඒවා පවතී.

### `register_post_type` {#registerposttype}

නව අභිරුචි පළ කිරීමේ වර්ගයක් ලියාපදිංචි කරයි.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ඔව් | පළ කිරීමේ වර්ගයේ යතුර (උපරිම අක්ෂර 20, මහකුරු නැත, හිස්තැන් නැත) |
| `singular_label` | string | ඔව් | මිනිසුන්ට කියවිය හැකි ඒකවචන නම, උදා. `Portfolio Item` |
| `plural_label` | string | ඔව් | මිනිසුන්ට කියවිය හැකි බහුවචන නම, උදා. `Portfolio Items` |
| `public` | boolean | නැත | පළ කිරීමේ වර්ගය පොදුවේ ප්‍රවේශ විය හැකිද යන්න. පෙරනිමිය `true` |
| `supports` | array | නැත | සහාය දිය යුතු විශේෂාංග: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. පෙරනිමිය `["title","editor"]` |
| `has_archive` | boolean | නැත | පළ කිරීමේ වර්ග archive පිටුවක් සක්‍රියද යන්න. පෙරනිමිය `false` |
| `menu_icon` | string | නැත | admin menu icon සඳහා Dashicons class හෝ URL. පෙරනිමිය `"dashicons-admin-post"` |
| `rewrite_slug` | string | නැත | පළ කිරීමේ වර්ගය සඳහා URL slug. පෙරනිමිය `slug` |

**උදාහරණය**

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

**ලබාදෙයි** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent විසින් ලියාපදිංචි කළ සියලු අභිරුචි පළ කිරීමේ වර්ග ලබාදෙයි.

**Parameters** — කිසිවක් නැත

**ලබාදෙයි**

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

agent විසින් පෙර ලියාපදිංචි කළ අභිරුචි පළ කිරීමේ වර්ගයක් ලියාපදිංචියෙන් ඉවත් කරයි. එම වර්ගයේ පවතින පළ කිරීම් database තුළ පවතින නමුත්, එම පළ කිරීමේ වර්ගය හරහා තවදුරටත් ප්‍රවේශ විය නොහැක.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ඔව් | ඉවත් කළ යුතු පළ කිරීමේ වර්ගයේ යතුර |

**ලබාදෙයි** `{ "success": true, "slug": "portfolio" }`

---

## අභිරුචි වර්ගීකරණ {#custom-taxonomies}

මෙම හැකියා අභිරුචි වර්ගීකරණ කළමනාකරණය කරයි. CPTs මෙන්ම, වර්ගීකරණ ලියාපදිංචි කිරීම්ද ස්ථිරව සුරැකේ.

### `register_taxonomy` {#registertaxonomy}

නව අභිරුචි වර්ගීකරණයක් ලියාපදිංචි කරයි.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ඔව් | වර්ගීකරණ යතුර (උපරිම අක්ෂර 32) |
| `singular_label` | string | ඔව් | මිනිසුන්ට කියවිය හැකි ඒකවචන නම, උදා. `Project Category` |
| `plural_label` | string | ඔව් | මිනිසුන්ට කියවිය හැකි බහුවචන නම, උදා. `Project Categories` |
| `post_types` | array | ඔව් | මෙම වර්ගීකරණය අමුණිය යුතු පළ කිරීමේ වර්ග slugs |
| `hierarchical` | boolean | නැත | category-style සඳහා `true`, tag-style සඳහා `false`. පෙරනිමිය `true` |
| `public` | boolean | නැත | terms පොදුවේ ප්‍රවේශ විය හැකිද යන්න. පෙරනිමිය `true` |
| `rewrite_slug` | string | නැත | වර්ගීකරණය සඳහා URL slug. පෙරනිමිය `slug` |

**උදාහරණය**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ලබාදෙයි** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent විසින් ලියාපදිංචි කළ සියලු අභිරුචි වර්ගීකරණ ලබාදෙයි.

**Parameters** — කිසිවක් නැත

**ලබාදෙයි**

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

agent විසින් පෙර ලියාපදිංචි කළ අභිරුචි වර්ගීකරණයක් ලියාපදිංචියෙන් ඉවත් කරයි.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ඔව් | ඉවත් කළ යුතු වර්ගීකරණ යතුර |

**ලබාදෙයි** `{ "success": true, "slug": "project-category" }`

---

## නිර්මාණ පද්ධතිය {#design-system}

නිර්මාණ පද්ධති හැකියා WordPress අඩවියේ දෘශ්‍ය ඉදිරිපත් කිරීම වෙනස් කරයි — අභිරුචි CSS සිට block patterns සහ අඩවි ලාංඡනය දක්වා.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` හරහා අඩවියේ `<head>` වෙත CSS එකතු කරයි. CSS `gratis_ai_agent_custom_css` option තුළ සුරැකෙන අතර හැකියාව reset කළ විට පිරිසිදුව dequeue වේ.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | ඔව් | ඇතුළත් කිරීමට වලංගු CSS |
| `label` | string | නැත | මෙම CSS block සඳහා මිනිසුන්ට කියවිය හැකි ලේබලය, debug logs තුළ භාවිත වේ. පෙරනිමිය `"agent-injected"` |
| `replace` | boolean | නැත | `true` නම්, පෙර ඇතුළත් කළ සියලු CSS ප්‍රතිස්ථාපනය කරයි. පෙරනිමිය `false` (එකතු කරයි) |

**උදාහරණය**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ලබාදෙයි** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library තුළ නැවත භාවිත කළ හැකි block pattern එකක් ලියාපදිංචි කරයි.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | ඔව් | Pattern හඳුනාගැනීම, උදා. `gratis/hero-dark` |
| `title` | string | ඔව් | editor තුළ පෙන්වන මිනිසුන්ට කියවිය හැකි pattern නම |
| `content` | string | ඔව් | pattern සඳහා serialised block markup (HTML) |
| `categories` | array | නැත | Pattern category slugs, උදා. `["featured", "hero"]` |
| `description` | string | නැත | pattern picker තුළ පෙන්වන කෙටි විස්තරය |
| `keywords` | array | නැත | සෙවුම් keywords |

**ලබාදෙයි** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent විසින් ලියාපදිංචි කළ සියලු block patterns ලැයිස්තුගත කරයි.

**Parameters** — කිසිවක් නැත

**ආපසු ලැබෙන්නේ**

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

දී ඇති attachment ID එකකට හෝ දුරස්ථ රූප URL එකකට WordPress අඩවි ලාංඡනය සකසයි. URL එකක් ලබා දුන් විට, රූපය බාගත කර Media Library වෙත ආයාත කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `attachment_id` | integer | නැත | පවතින Media Library ඇමුණුමක ID |
| `url` | string | නැත | ආයාත කර ලාංඡනය ලෙස සැකසීමට දුරස්ථ රූප URL |

`attachment_id` හෝ `url` අතරින් එකක් ලබා දිය යුතුය.

**ආපසු ලැබෙන්නේ** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

සක්‍රිය theme එකේ `theme.json` (හෝ `global-styles`) වෙත නම් කළ වර්ණ/අකුරු රටා පෙරසැකසුමක් යොදයි. පෙරසැකසුම් Gratis AI Agent කණ්ඩායම විසින් නඩත්තු කරන, තෝරා සකස් කළ එකතු වේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `preset` | string | ඔව් | පෙරසැකසුම් නාමය, උදා. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | නැත | `true` නම්, ප්‍රතිස්ථාපනය කරනවා වෙනුවට පවතින අගයන් සමඟ ඒකාබද්ධ කරයි. පෙරනිමිය `false` |

**ලබාගත හැකි පෙරසැකසුම්**

| පෙරසැකසුම | විස්තරය |
|---|---|
| `minimal-dark` | කළුට ආසන්න පසුබිම, සුදු පෙළ, එක් ප්‍රධාන උච්චාරණ වර්ණයක් |
| `warm-editorial` | උණුසුම් සුදුට ආසන්න පසුබිම, serif ශීර්ෂ, පෘථිවි ස්වභාවයේ උච්චාරණ වර්ණ |
| `corporate-blue` | වෘත්තීය අකුරු රටාවක් සහිත නේවි සහ සුදු වර්ණ පලට්ටුව |
| `vibrant-startup` | දීප්තිමත් ග්‍රේඩියන්ට්, වටකුරු කොන, නවීන sans-serif අකුරු රටාව |
| `classic-blog` | මධ්‍යස්ථ අළු වර්ණ, පහසු line-height, සාම්ප්‍රදායික layout පරතරය |

**ආපසු ලැබෙන්නේ** `{ "success": true, "preset": "minimal-dark" }`

---

## ගෝලීය ශෛලීන් {#global-styles}

ගෝලීය ශෛලී හැකියාවන් WordPress Global Styles API හරහා theme.json අගයන් කියවා ලියයි. එය අඩවිය පුරා සියලු blocks සහ templates වලට බලපායි.

### `get_global_styles` {#getglobalstyles}

වත්මන් ගෝලීය ශෛලී වින්‍යාසය ආපසු ලබා දෙයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `path` | string | නැත | නිශ්චිත අගයකට JSON pointer, උදා. `/color/palette` හෝ `/typography/fontSizes`. අත්හැරියහොත් සම්පූර්ණ object එක ආපසු ලැබේ. |

**ආපසු ලැබෙන්නේ** සම්පූර්ණ ගෝලීය ශෛලී object එක හෝ `path` හි ඇති අගය.

---

### `set_global_styles` {#setglobalstyles}

ගෝලීය ශෛලී වින්‍යාසයේ අගයන් එකක් හෝ කිහිපයක් යාවත්කාලීන කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `path` | string | ඔව් | සැකසිය යුතු අගයට JSON pointer, උදා. `/color/palette` |
| `value` | any | ඔව් | නව අගය |

**උදාහරණය** — පලට්ටුවට වර්ණයක් එක් කරන්න

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ආපසු ලැබෙන්නේ** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent විසින් යොදන ලද සියලු ගෝලීය ශෛලී වෙනස්කම් නැවත සකසා, theme පෙරනිමි අගයන් ප්‍රතිස්ථාපනය කරයි.

**පරාමිතීන්** — නැත

**ආපසු ලැබෙන්නේ** `{ "success": true }`

---

## සංචරණ මෙනු {#navigation-menus}

සංචරණ මෙනු හැකියාවන් WordPress nav menus සහ ඒවායේ අයිතම සෑදීමට හා කළමනාකරණය කිරීමට භාවිතා වේ.

### `create_menu` {#createmenu}

නව WordPress සංචරණ මෙනුවක් සාදයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `name` | string | ඔව් | මෙනු නාමය, උදා. `Primary Navigation` |
| `location` | string | නැත | මෙම මෙනුවට පවරන theme ස්ථානය, උදා. `primary` |

**ආපසු ලැබෙන්නේ** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

මෙනුවක නම වෙනස් කරයි හෝ එය theme ස්ථානයකට නැවත පවරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `menu_id` | integer | ඔව් | යාවත්කාලීන කළ යුතු මෙනුවේ ID |
| `name` | string | නැත | නව මෙනු නාමය |
| `location` | string | නැත | පැවරීමට හෝ නැවත පැවරීමට theme ස්ථානය |

**ආපසු ලැබෙන්නේ** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

පවතින සංචරණ මෙනුවකට අයිතමයක් එක් කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `menu_id` | integer | ඔව් | ඉලක්ක මෙනුවේ ID |
| `type` | string | ඔව් | අයිතම වර්ගය: `custom`, `post_type`, හෝ `taxonomy` |
| `title` | string | නැත | මෙනු අයිතමය සඳහා ලේබලය (`custom` වර්ගයට අවශ්‍යයි) |
| `url` | string | නැත | `custom` අයිතම සඳහා URL |
| `object_id` | integer | නැත | `post_type`/`taxonomy` අයිතම සඳහා Post ID හෝ term ID |
| `parent_id` | integer | නැත | මෙම අයිතමය යටතේ ඇතුළත් කළ යුතු මව් මෙනු අයිතමයේ ID |
| `position` | integer | නැත | මෙනුව තුළ ශුන්‍යයෙන් ආරම්භ වන ස්ථානය |

**ආපසු ලැබෙන්නේ** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

සංචරණ මෙනුවකින් අයිතමයක් ඉවත් කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `item_id` | integer | ඔව් | ඉවත් කළ යුතු මෙනු අයිතමයේ ID |

**ආපසු ලැබෙන්නේ** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

පවරා ඇති theme ස්ථාන ඇතුළුව සියලු WordPress සංචරණ මෙනු ලැයිස්තුගත කරයි.

**පරාමිතීන්** — නැත

**ආපසු ලැබෙන්නේ**

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

## විකල්ප කළමනාකරණය {#options-management}

විකල්ප හැකියාවන් `get_option` / `update_option` හරහා WordPress විකල්ප කියවා ලියයි. ඇතුළත් ආරක්ෂිත blocklist එකක් වැදගත් සැකසුම් අත්වැරදීමකින් වෙනස් වීම වළක්වයි.

### `get_option` {#getoption}

WordPress විකල්පයක් කියවයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `option_name` | string | ඔව් | විකල්ප යතුර, උදා. `blogname` |

**ආපසු ලැබෙන්නේ** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` ආරක්ෂිත blocklist එකේ තිබේ නම් දෝෂයක් ආපසු ලැබේ.

---

### `set_option` {#setoption}

WordPress විකල්පයක් ලියයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `option_name` | string | ඔව් | විකල්ප යතුර |
| `value` | any | ඔව් | නව අගය (arrays/objects සඳහා ස්වයංක්‍රීයව serialised කරයි) |
| `autoload` | string | නැත | `"yes"` හෝ `"no"`. පෙරනිමිය පවතින autoload සැකසුම රඳවා ගනී |

`option_name` ආරක්ෂක අවහිර ලැයිස්තුවේ තිබේ නම් දෝෂයක් ආපසු දෙයි.

**ආපසු ලැබෙන්නේ** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress විකල්පයක් මකයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `option_name` | string | ඔව් | මැකිය යුතු විකල්ප යතුර |

`option_name` ආරක්ෂක අවහිර ලැයිස්තුවේ තිබේ නම් දෝෂයක් ආපසු දෙයි.

**ආපසු ලැබෙන්නේ** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

රටාවකට ගැළපෙන WordPress විකල්ප ලැයිස්තුගත කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `pattern` | string | නැත | විකල්ප නම් පෙරීමට SQL LIKE රටාව, උදා. `gratis_%`. නොදක්වන්නේ නම් සියලු විකල්ප ආපසු දෙයි (විශාල දත්ත සමුදා මත පරිස්සමින් භාවිත කරන්න). |
| `limit` | integer | නැත | ප්‍රතිඵලවල උපරිම ගණන. පෙරනිමිය `50`, උපරිම `500` |

**ආපසු ලැබෙන්නේ**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## අන්තර්ගත කළමනාකරණය {#content-management}

අන්තර්ගත කළමනාකරණ හැකියාවන් WordPress ලිපි සහ පිටු සාදන අතර සංස්කරණය කරයි. ලිපි හැඳුනුම් ආපසු ලැබෙන බැවින් බහු-හැකියාව සැලසුම්වල පසු පියවරවලට සාදන ලද අන්තර්ගතය යොමු කළ හැක.

### `create_post` {#createpost}

නව WordPress ලිපියක්, පිටුවක්, හෝ අභිරුචි ලිපි වර්ග ඇතුළත් කිරීමක් සාදයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `title` | string | ඔව් | ලිපි මාතෘකාව |
| `content` | string | නැත | ලිපි අන්තර්ගතය — සරල පෙළ, HTML, හෝ ශ්‍රේණීගත කළ බ්ලොක් සලකුණු පිළිගනී |
| `status` | string | නැත | `draft`, `publish`, `pending`, `private`. පෙරනිමිය `draft` |
| `post_type` | string | නැත | ලිපි වර්ග slug, උදා. `post`, `page`, හෝ ලියාපදිංචි කළ ඕනෑම CPT. පෙරනිමිය `post` |
| `excerpt` | string | නැත | ගබඩා සහ සෙවුම් ප්‍රතිඵලවල පෙන්වන කෙටි සාරාංශය |
| `categories` | array | නැත | පැවරීමට ප්‍රවර්ග නම් හෝ හැඳුනුම්වල අරාව |
| `tags` | array | නැත | පැවරීමට ටැග් නම් හෝ හැඳුනුම්වල අරාව |
| `author` | integer | නැත | ලිපි කර්තෘ ලෙස සැකසිය යුතු WordPress පරිශීලක හැඳුනුම. පෙරනිමිය වත්මන් පරිශීලකයා වේ |
| `date` | string | නැත | ISO 8601 ආකෘතියේ පළ කිරීමේ දිනය, උදා. `2026-05-01T09:00:00` |
| `page_template` | string | නැත | මෙම ලිපියට හෝ පිටුවට පැවරිය යුතු ටෙම්ප්ලේට් ගොනුව, උදා. `page-full-width.php`. `post_type` `page` වන විට හෝ පිටු ටෙම්ප්ලේට් සඳහා සහය දක්වන CPT එකක් වන විට පමණක් අර්ථවත් වේ. |

**උදාහරණය**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ආපසු ලැබෙන්නේ** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

පවතින WordPress ලිපියක් හෝ පිටුවක් යාවත්කාලීන කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `post_id` | integer | ඔව් | යාවත්කාලීන කළ යුතු ලිපියේ හැඳුනුම |
| `title` | string | නැත | නව ලිපි මාතෘකාව |
| `content` | string | නැත | නව ලිපි අන්තර්ගතය |
| `status` | string | නැත | නව තත්ත්වය: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | නැත | නව උපුටාගැනීම |
| `categories` | array | නැත | සම්පූර්ණ ප්‍රවර්ග ලැයිස්තුව මෙම නම් හෝ හැඳුනුම් අරාවෙන් ප්‍රතිස්ථාපනය කරන්න |
| `tags` | array | නැත | සම්පූර්ණ ටැග් ලැයිස්තුව මෙම නම් හෝ හැඳුනුම් අරාවෙන් ප්‍රතිස්ථාපනය කරන්න |
| `page_template` | string | නැත | මෙම ලිපියට හෝ පිටුවට පැවරිය යුතු නව ටෙම්ප්ලේට් ගොනුව, උදා. `page-full-width.php`. ටෙම්ප්ලේට් පැවරීම ඉවත් කර theme පෙරනිමියට ආපසු යාමට හිස් string එකක් යවන්න. |

**උදාහරණය** — සාදීමෙන් පසු ටෙම්ප්ලේට් වෙනස් කිරීම

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ආපසු ලැබෙන්නේ** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

එකම හැකියාව කැඳවීමකදී ලිපි කිහිපයක් සාදයි. එමඟින් අඩවි ගොඩනැගීම් හෝ තොග අන්තර්ගත ආයාත කිරීමේදී නැවත-නැවත යාම් අඩු වේ. ලිපි අනුක්‍රමයෙන් සාදයි; එකක් අසාර්ථක වුවහොත් අනෙක්වා දිගටම කරගෙන යන අතර අසාර්ථකතාව ප්‍රතිඵල අරාවේ වාර්තා වේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `posts` | array | ඔව් | ලිපි වස්තු අරාවක්; සෑම එකක්ම `create_post` ලෙසම එම පරාමිතීන් පිළිගනී |
| `stop_on_error` | boolean | නැත | `true` නම්, පළමු අසාර්ථකතාවෙන් පසු සැකසීම නවත්වන්න. පෙරනිමිය `false` |

**උදාහරණය**

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

**ආපසු ලැබෙන්නේ**

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

පවතින ලිපියකට හෝ පිටුවකට විශේෂිත රූපයක් (ලිපි thumbnail) පවරයි. පවතින Media Library ඇමුණුම් හැඳුනුමක් හෝ දුරස්ථ රූප URL එකක් පිළිගනී; URL එකක් ලබා දුන් විට රූපය ස්වයංක්‍රීයව බාගත කර ආයාත කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `post_id` | integer | ඔව් | යාවත්කාලීන කළ යුතු ලිපියේ හෝ පිටුවේ හැඳුනුම |
| `attachment_id` | integer | නැත | පවතින Media Library ඇමුණුමක හැඳුනුම |
| `url` | string | නැත | ආයාත කර විශේෂිත රූපය ලෙස සැකසිය යුතු දුරස්ථ රූප URL එක |
| `alt_text` | string | නැත | URL එකකින් ආයාත කළහොත් ඇමුණුමට යෙදිය යුතු විකල්ප පෙළ |

`attachment_id` හෝ `url` අතරින් එකක් ලබා දිය යුතුය.

**ආපසු ලැබෙන්නේ** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

සක්‍රිය form plugin එක භාවිතයෙන් සම්බන්ධතා පෝරමයක් සාදයි (ස්ථාපනය කර ඇති දේ අනුව Contact Form 7, WPForms, Fluent Forms, හෝ Gravity Forms). ඕනෑම ලිපියක හෝ පිටුවක ඇතුළත් කළ හැකි shortcode එකක් ආපසු දෙයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `title` | string | ඔව් | form plugin පරිපාලනයේ පෙන්වන form නම |
| `fields` | array | ඔව් | form ක්ෂේත්‍රවල අනුපිළිවෙල ලැයිස්තුව (පහත Field object බලන්න) |
| `recipient` | string | නැත | ඉදිරිපත් කිරීම් ලැබීමට email ලිපිනය. පෙරනිමිය WordPress පරිපාලක email ලිපිනයයි |
| `subject` | string | නැත | email විෂය පේළිය. Contact Form 7 භාවිත කරන විට `[your-name]` සහ `[your-subject]` placeholder සඳහා සහාය දක්වයි |
| `confirmation_message` | string | නැත | සාර්ථක ඉදිරිපත් කිරීමකින් පසු පෙන්වන පණිවිඩය. පෙරනිමිය: `"Thank you for your message. We'll be in touch soon."` |

**ක්ෂේත්‍ර object**

| යතුර | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `name` | string | ඔව් | අභ්‍යන්තර ක්ෂේත්‍ර නම / යන්ත්‍ර යතුර |
| `label` | string | ඔව් | form එකේ පෙන්වන මිනිසුන්ට කියවිය හැකි ලේබලය |
| `type` | string | ඔව් | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | නැත | ඉදිරිපත් කිරීමට පෙර ක්ෂේත්‍රය පිරවිය යුතුද. පෙරනිමිය `false` |
| `options` | array | නැත | `select`, `checkbox`, සහ `radio` ක්ෂේත්‍ර සඳහා විකල්ප |
| `placeholder` | string | නැත | පෙළ වර්ගයේ ආදාන සඳහා placeholder පෙළ |

**උදාහරණය**

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

**ආපසු ලබාදේ**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## දෘශ්‍ය සමාලෝචනය {#visual-review}

දෘශ්‍ය සමාලෝචන හැකියාවන් agent ට සජීවී පිටුවල තිරරූප ලබාගෙන ඒවා විශ්ලේෂණය කිරීමට ඉඩ දෙයි. එමඟින් කිසිදු browser extension එකක් අවශ්‍ය නොවී ස්වයංක්‍රීය සැලසුම් සමාලෝචනය, පෙර/පසු සැසඳීම්, සහ දෘශ්‍ය regression පරීක්ෂා සක්‍රීය වේ.

### `capture_screenshot` {#capturescreenshot}

ලබා දුන් URL එකක ඇති WordPress පිටුවක තිරරූපයක් server-side headless browser එකක් භාවිතයෙන් ලබාගනී. රූපය Media Library වෙත සුරකින අතර CDN URL එකක් ආපසු ලබාදේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `url` | string | ඔව් | තිරරූපයක් ලබාගත යුතු පිටුවේ සම්පූර්ණ URL, උදා. `https://example.com/about/` |
| `width` | integer | නැත | viewport පළල පික්සලවලින්. පෙරනිමිය `1280` |
| `height` | integer | නැත | viewport උස පික්සලවලින්. පෙරනිමිය `800` |
| `full_page` | boolean | නැත | viewport එක පමණක් වෙනුවට සම්පූර්ණ scroll කළ හැකි පිටුව ලබාගන්න. පෙරනිමිය `false` |
| `delay_ms` | integer | නැත | පිටුව පූරණය වූ පසු ලබාගැනීමට පෙර රැඳී සිටිය යුතු මිලිසেকන්ඩ් ගණන; animated අන්තර්ගතයට ප්‍රයෝජනවත්. පෙරනිමිය `500` |
| `label` | string | නැත | Media Library හි attachment සමඟ සුරකින මිනිසුන්ට කියවිය හැකි ලේබලය |

**ආපසු ලබාදේ**

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

තිරරූප දෙකක් ගෙන, දෘශ්‍ය වෙනස්කම් ලකුණු අගයක් සහ වෙනස් වූ ප්‍රදේශ පෙන්වන වෙනස්කම් රූපයක් ආපසු ලබාදේ. සැලසුම් වෙනසක් බලාපොරොත්තු වූ ප්‍රතිඵලය ලබාදී ඇති බව තහවුරු කිරීමට හෝ අභිප්‍රේත නොවූ regressions හඳුනාගැනීමට ප්‍රයෝජනවත් වේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `before_url` | string | ඔව් | "before" තත්ත්වය ලෙස ලබාගත යුතු පිටුවේ URL |
| `after_url` | string | ඔව් | "after" තත්ත්වය ලෙස ලබාගත යුතු පිටුවේ URL. කාලය අනුව සැසඳීමේදී එකම URL විය හැක |
| `width` | integer | නැත | ලබාගැනීම් දෙකම සඳහා viewport පළල. පෙරනිමිය `1280` |
| `threshold` | float | නැත | පික්සල් වෙනස සීමාව (0.0–1.0). මෙම ඉවසීම තුළ ඇති පික්සල් වෙනස් නොවූ ලෙස සලකයි. පෙරනිමිය `0.1` |

**ආපසු ලබාදේ**

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

`diff_score` අගය `0.0` නම් පෙනෙන වෙනසක් නැත; `1.0` නම් සෑම පික්සලයක්ම වෙනස් වී ඇත.

---

### `review_page_design` {#reviewpagedesign}

පිටුවක තිරරූපයක් ලබාගෙන දෘශ්‍ය විශ්ලේෂණය සඳහා එය language model වෙත යවයි. layout, typography, වර්ණ භාවිතය, සහ ප්‍රවේශනීයතා කරුණු ආවරණය කරන ව්‍යුහගත තක්සේරුවක් ආපසු ලබාදේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යයි | විස්තරය |
|---|---|---|---|
| `url` | string | ඔව් | සමාලෝචනය කළ යුතු පිටුවේ සම්පූර්ණ URL |
| `focus` | string | නැත | අවධාරණය කළ යුතු සමාලෝචන ක්ෂේත්‍රවල කොමාවෙන් වෙන් කළ ලැයිස්තුව: `layout`, `typography`, `colour`, `accessibility`, `mobile`. පෙරනිමිය: සියලු ක්ෂේත්‍ර |
| `width` | integer | නැත | viewport පළල. පෙරනිමිය `1280` |

**ආපසු ලබාදේ**

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

## ස්ථාපනය කළ හැකි හැකියාවන් {#installable-abilities}

ස්ථාපනය කළ හැකි හැකියාවන් රෙජිස්ට්‍රිය, WordPress plugin ලෙස බෙදාහරින අතිරේක හැකියා කට්ටල මඟින් agent පුළුල් කිරීමට ඔබට ඉඩ දෙයි. සෑම කට්ටලයක්ම සම්මත හැකියා API භාවිතයෙන් හැකියාවක් හෝ වැඩි ගණනක් ලියාපදිංචි කරයි.

### `list_available_abilities` {#listavailableabilities}

රෙජිස්ට්‍රියෙන් ස්ථාපනය සඳහා ලබාගත හැකි හැකියා කට්ටල නාමාවලිය ආපසු ලබාදේ.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `category` | string | නැත | ප්‍රවර්ගය අනුව පෙරන්න: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ප්‍රතිදානය**

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

ලේඛනාගාරයෙන් හැකියා පැකේජයක් බාගත කර සක්‍රිය කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `slug` | string | ඔව් | හැකියා පැකේජ දිගුවේ slug |

**ප්‍රතිදානය** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

විස්තර කළ භාවිත අවස්ථාවකට හොඳම දිගුව සොයා ගැනීමට හැකියා ලේඛනාගාරයෙන් විමසයි. අවශ්‍ය නම් එය ස්ථාපනය කරයි.

**පරාමිතීන්**

| පරාමිතිය | වර්ගය | අවශ්‍යද | විස්තරය |
|---|---|---|---|
| `description` | string | ඔව් | අවශ්‍ය ක්‍රියාකාරීත්වය පිළිබඳ ස්වාභාවික භාෂා විස්තරය |
| `install` | boolean | නැත | `true` නම්, නිර්දේශිත දිගුව වහාම ස්ථාපනය කරයි. පෙරනිමිය `false` |

**උදාහරණය**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ප්‍රතිදානය**

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
