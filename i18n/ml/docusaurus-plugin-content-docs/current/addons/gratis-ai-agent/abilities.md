---
title: കഴിവുകളുടെ റഫറൻസ്
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# കഴിവുകളുടെ റഫറൻസ് {#abilities-reference}

നിങ്ങളുടെ WordPress ഇൻസ്റ്റലേഷനിൽ Gratis AI Agent വിളിക്കാനാകുന്ന അടിസ്ഥാന പ്രവർത്തനങ്ങളാണ് കഴിവുകൾ. ഓരോ കഴിവും രജിസ്റ്റർ ചെയ്ത PHP class ആണ്. അത് ഒരു JSON schema നൽകുന്നു — ഏത് parameters ആവശ്യമാണ്, കഴിവ് എന്താണ് മടക്കിനൽകുന്നത് എന്നിവ മനസ്സിലാക്കാൻ agent പ്രവർത്തനസമയത്ത് ഈ schema വായിക്കുന്നു.

ഈ പേജ് Gratis AI Agent v1.9.0-നൊപ്പം ലഭിക്കുന്ന എല്ലാ കഴിവുകളും രേഖപ്പെടുത്തുന്നു.

---

## ഇഷ്ടാനുസൃത പോസ്റ്റ് തരങ്ങൾ {#custom-post-types}

ഈ കഴിവുകൾ agent വഴി രജിസ്റ്റർ ചെയ്ത ഇഷ്ടാനുസൃത പോസ്റ്റ് തരങ്ങൾ (CPTs) നിയന്ത്രിക്കുന്നു. രജിസ്ട്രേഷനുകൾ WordPress options table-ൽ സൂക്ഷിക്കുന്നു. അതിനാൽ plugin deactivation, reactivation എന്നിവയ്ക്കുശേഷവും അവ നിലനിൽക്കും.

### `register_post_type` {#registerposttype}

പുതിയ ഇഷ്ടാനുസൃത പോസ്റ്റ് തരം രജിസ്റ്റർ ചെയ്യുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | പോസ്റ്റ് തരം key (പരമാവധി 20 അക്ഷരങ്ങൾ, വലിയക്ഷരങ്ങളില്ല, സ്പേസുകളില്ല) |
| `singular_label` | string | Yes | മനുഷ്യർക്ക് വായിക്കാവുന്ന ഏകവചന പേര്, ഉദാ. `Portfolio Item` |
| `plural_label` | string | Yes | മനുഷ്യർക്ക് വായിക്കാവുന്ന ബഹുവചന പേര്, ഉദാ. `Portfolio Items` |
| `public` | boolean | No | പോസ്റ്റ് തരം പൊതുവായി ആക്സസ് ചെയ്യാനാകുമോ. Default `true` |
| `supports` | array | No | പിന്തുണയ്‌ക്കേണ്ട സവിശേഷതകൾ: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. Default `["title","editor"]` |
| `has_archive` | boolean | No | പോസ്റ്റ് തരം archive page പ്രവർത്തനക്ഷമമാക്കണോ. Default `false` |
| `menu_icon` | string | No | admin menu icon-നുള്ള Dashicons class അല്ലെങ്കിൽ URL. Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | പോസ്റ്റ് തരത്തിനുള്ള URL slug. `slug`-ലേക്ക് default ചെയ്യുന്നു |

**ഉദാഹരണം**

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

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

agent രജിസ്റ്റർ ചെയ്ത എല്ലാ ഇഷ്ടാനുസൃത പോസ്റ്റ് തരങ്ങളും മടക്കിനൽകുന്നു.

**Parameters** — ഒന്നുമില്ല

**മടക്കിനൽകുന്നത്**

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

agent മുമ്പ് രജിസ്റ്റർ ചെയ്ത ഇഷ്ടാനുസൃത പോസ്റ്റ് തരം അൺരജിസ്റ്റർ ചെയ്യുന്നു. ആ തരത്തിലുള്ള നിലവിലുള്ള പോസ്റ്റുകൾ database-ൽ തുടരും, പക്ഷേ ഇനി post type വഴി ആക്സസ് ചെയ്യാനാകില്ല.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | നീക്കം ചെയ്യേണ്ട പോസ്റ്റ് തരം key |

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "portfolio" }`

---

## ഇഷ്ടാനുസൃത ടാക്സോണമികൾ {#custom-taxonomies}

ഈ കഴിവുകൾ ഇഷ്ടാനുസൃത taxonomies നിയന്ത്രിക്കുന്നു. CPTs പോലെ, taxonomy രജിസ്ട്രേഷനുകളും നിലനിൽക്കുന്ന രീതിയിൽ സൂക്ഷിക്കുന്നു.

### `register_taxonomy` {#registertaxonomy}

പുതിയ ഇഷ്ടാനുസൃത taxonomy രജിസ്റ്റർ ചെയ്യുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy key (പരമാവധി 32 അക്ഷരങ്ങൾ) |
| `singular_label` | string | Yes | മനുഷ്യർക്ക് വായിക്കാവുന്ന ഏകവചന പേര്, ഉദാ. `Project Category` |
| `plural_label` | string | Yes | മനുഷ്യർക്ക് വായിക്കാവുന്ന ബഹുവചന പേര്, ഉദാ. `Project Categories` |
| `post_types` | array | Yes | ഈ taxonomy ചേർക്കേണ്ട post type slugs |
| `hierarchical` | boolean | No | category ശൈലിക്ക് `true`, tag ശൈലിക്ക് `false`. Default `true` |
| `public` | boolean | No | terms പൊതുവായി ആക്സസ് ചെയ്യാനാകുമോ. Default `true` |
| `rewrite_slug` | string | No | taxonomy-ക്കുള്ള URL slug. `slug`-ലേക്ക് default ചെയ്യുന്നു |

**ഉദാഹരണം**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

agent രജിസ്റ്റർ ചെയ്ത എല്ലാ ഇഷ്ടാനുസൃത taxonomies-ഉം മടക്കിനൽകുന്നു.

**Parameters** — ഒന്നുമില്ല

**മടക്കിനൽകുന്നത്**

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

agent മുമ്പ് രജിസ്റ്റർ ചെയ്ത ഇഷ്ടാനുസൃത taxonomy അൺരജിസ്റ്റർ ചെയ്യുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | നീക്കം ചെയ്യേണ്ട taxonomy key |

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "project-category" }`

---

## ഡിസൈൻ സിസ്റ്റം {#design-system}

ഡിസൈൻ സിസ്റ്റം കഴിവുകൾ WordPress site-ന്റെ ദൃശ്യ അവതരണം മാറ്റുന്നു — ഇഷ്ടാനുസൃത CSS മുതൽ block patterns, site logo വരെ.

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` വഴി site-ന്റെ `<head>`-ലേക്ക് CSS ചേർക്കുന്നു. CSS `gratis_ai_agent_custom_css` option-ൽ സൂക്ഷിക്കുന്നു. കഴിവ് reset ചെയ്യുമ്പോൾ അത് വൃത്തിയായി dequeue ചെയ്യും.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | inject ചെയ്യേണ്ട സാധുവായ CSS |
| `label` | string | No | ഈ CSS block-നുള്ള മനുഷ്യർക്ക് വായിക്കാവുന്ന label, debug logs-ൽ ഉപയോഗിക്കുന്നു. Default `"agent-injected"` |
| `replace` | boolean | No | `true` ആണെങ്കിൽ, മുമ്പ് inject ചെയ്ത എല്ലാ CSS-യും മാറ്റിസ്ഥാപിക്കുന്നു. Default `false` (ചേർക്കുന്നു) |

**ഉദാഹരണം**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**മടക്കിനൽകുന്നത്** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress pattern library-ൽ വീണ്ടും ഉപയോഗിക്കാവുന്ന block pattern രജിസ്റ്റർ ചെയ്യുന്നു.

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier, ഉദാ. `gratis/hero-dark` |
| `title` | string | Yes | editor-ൽ കാണിക്കുന്ന മനുഷ്യർക്ക് വായിക്കാവുന്ന pattern പേര് |
| `content` | string | Yes | pattern-നുള്ള serialised block markup (HTML) |
| `categories` | array | No | Pattern category slugs, ഉദാ. `["featured", "hero"]` |
| `description` | string | No | pattern picker-ൽ കാണിക്കുന്ന ചെറു വിവരണം |
| `keywords` | array | No | തിരയൽ keywords |

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

agent രജിസ്റ്റർ ചെയ്ത എല്ലാ block patterns-ഉം പട്ടികപ്പെടുത്തുന്നു.

**Parameters** — ഒന്നുമില്ല

**തിരികെ നൽകുന്നത്**

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

നൽകിയിരിക്കുന്ന attachment ID അല്ലെങ്കിൽ ദൂരസ്ഥ image URL ഉപയോഗിച്ച് WordPress സൈറ്റിന്റെ logo സജ്ജമാക്കുന്നു. URL നൽകിയാൽ, ചിത്രം ഡൗൺലോഡ് ചെയ്ത് Media Library-ലേക്ക് ഇറക്കുമതി ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `attachment_id` | integer | ഇല്ല | നിലവിലുള്ള Media Library attachment-ന്റെ ID |
| `url` | string | ഇല്ല | ഇറക്കുമതി ചെയ്ത് logo ആയി സജ്ജമാക്കാനുള്ള ദൂരസ്ഥ image URL |

`attachment_id` അല്ലെങ്കിൽ `url` ഇവയിൽ ഒന്നെങ്കിലും നൽകണം.

**തിരികെ നൽകുന്നത്** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

സജീവ theme-ന്റെ `theme.json`-ലേക്ക് (അല്ലെങ്കിൽ `global-styles`-ലേക്ക്) പേരുള്ള നിറം/ടൈപ്പോഗ്രഫി preset പ്രയോഗിക്കുന്നു. Gratis AI Agent ടീം പരിപാലിക്കുന്ന തിരഞ്ഞെടുത്ത ബണ്ടിലുകളാണ് presets.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `preset` | string | അതെ | Preset പേര്, ഉദാ. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ഇല്ല | `true` ആണെങ്കിൽ, മാറ്റിസ്ഥാപിക്കുന്നതിന് പകരം നിലവിലുള്ള മൂല്യങ്ങളുമായി ലയിപ്പിക്കുക. സ്ഥിരം `false` |

**ലഭ്യമായ presets**

| Preset | വിവരണം |
|---|---|
| `minimal-dark` | കറുപ്പിനോടടുത്ത പശ്ചാത്തലം, വെളുത്ത വാചകം, ഒറ്റ accent നിറം |
| `warm-editorial` | ഊഷ്മളമായ off-white പശ്ചാത്തലം, serif തലക്കെട്ടുകൾ, മണ്ണിന്റെ നിറങ്ങളിലുള്ള accent നിറങ്ങൾ |
| `corporate-blue` | പ്രൊഫഷണൽ ടൈപ്പോഗ്രഫിയുള്ള navy-വെളുപ്പ് പാലറ്റ് |
| `vibrant-startup` | തിളക്കമുള്ള gradients, വളഞ്ഞ കോണുകൾ, ആധുനിക sans-serif type |
| `classic-blog` | ന്യൂട്രൽ ചാരനിറങ്ങൾ, സൗകര്യപ്രദമായ line-height, പരമ്പരാഗത layout ഇടവേളകൾ |

**തിരികെ നൽകുന്നത്** `{ "success": true, "preset": "minimal-dark" }`

---

## ആഗോള ശൈലികൾ {#global-styles}

ആഗോള ശൈലി കഴിവുകൾ WordPress Global Styles API വഴി theme.json മൂല്യങ്ങൾ വായിക്കുകയും എഴുതുകയും ചെയ്യുന്നു. ഇത് സൈറ്റിലുടനീളമുള്ള എല്ലാ blocks-നെയും templates-നെയും ബാധിക്കും.

### `get_global_styles` {#getglobalstyles}

നിലവിലെ ആഗോള ശൈലി configuration തിരികെ നൽകുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `path` | string | ഇല്ല | നിർദ്ദിഷ്ട മൂല്യത്തിലേക്കുള്ള JSON pointer, ഉദാ. `/color/palette` അല്ലെങ്കിൽ `/typography/fontSizes`. ഒഴിവാക്കിയാൽ മുഴുവൻ object തിരികെ നൽകും. |

**തിരികെ നൽകുന്നത്** പൂർണ്ണ global styles object അല്ലെങ്കിൽ `path`-ലെ മൂല്യം.

---

### `set_global_styles` {#setglobalstyles}

ആഗോള ശൈലി configuration-ലെ ഒരു അല്ലെങ്കിൽ കൂടുതൽ മൂല്യങ്ങൾ അപ്ഡേറ്റ് ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `path` | string | അതെ | സജ്ജമാക്കേണ്ട മൂല്യത്തിലേക്കുള്ള JSON pointer, ഉദാ. `/color/palette` |
| `value` | any | അതെ | പുതിയ മൂല്യം |

**ഉദാഹരണം** — palette-ലേക്ക് ഒരു നിറം ചേർക്കുക

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**തിരികെ നൽകുന്നത്** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

agent പ്രയോഗിച്ച എല്ലാ ആഗോള ശൈലി മാറ്റങ്ങളും reset ചെയ്ത് theme സ്ഥിരമൂല്യങ്ങൾ പുനഃസ്ഥാപിക്കുന്നു.

**പാരാമീറ്ററുകൾ** — ഒന്നുമില്ല

**തിരികെ നൽകുന്നത്** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu കഴിവുകൾ WordPress nav menus-വും അവയിലെ items-വും സൃഷ്ടിക്കുകയും നിയന്ത്രിക്കുകയും ചെയ്യുന്നു.

### `create_menu` {#createmenu}

പുതിയ WordPress navigation menu സൃഷ്ടിക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `name` | string | അതെ | Menu പേര്, ഉദാ. `Primary Navigation` |
| `location` | string | ഇല്ല | ഈ menu-വിന് നിയോഗിക്കേണ്ട theme location, ഉദാ. `primary` |

**തിരികെ നൽകുന്നത്** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

ഒരു menu-വിന്റെ പേര് മാറ്റുകയോ അത് മറ്റൊരു theme location-ലേക്ക് വീണ്ടും നിയോഗിക്കുകയോ ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `menu_id` | integer | അതെ | അപ്ഡേറ്റ് ചെയ്യേണ്ട menu-വിന്റെ ID |
| `name` | string | ഇല്ല | പുതിയ menu പേര് |
| `location` | string | ഇല്ല | നിയോഗിക്കാനോ വീണ്ടും നിയോഗിക്കാനോ ഉള്ള theme location |

**തിരികെ നൽകുന്നത്** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

നിലവിലുള്ള navigation menu-വിലേക്ക് ഒരു item ചേർക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `menu_id` | integer | അതെ | ലക്ഷ്യ menu-വിന്റെ ID |
| `type` | string | അതെ | Item തരം: `custom`, `post_type`, അല്ലെങ്കിൽ `taxonomy` |
| `title` | string | ഇല്ല | menu item-ന്റെ label (`custom` തരത്തിന് ആവശ്യമാണ്) |
| `url` | string | ഇല്ല | `custom` items-നുള്ള URL |
| `object_id` | integer | ഇല്ല | `post_type`/`taxonomy` items-നുള്ള Post ID അല്ലെങ്കിൽ term ID |
| `parent_id` | integer | ഇല്ല | ഈ item-നെ അതിന് കീഴിൽ nest ചെയ്യേണ്ട menu item ID |
| `position` | integer | ഇല്ല | menu-യിലെ പൂജ്യത്തിൽ ആരംഭിക്കുന്ന സ്ഥാനം |

**തിരികെ നൽകുന്നത്** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

navigation menu-വിൽ നിന്ന് ഒരു item നീക്കം ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `item_id` | integer | അതെ | നീക്കം ചെയ്യേണ്ട menu item ID |

**തിരികെ നൽകുന്നത്** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

എല്ലാ WordPress navigation menus-ഉം അവയ്ക്ക് നിയോഗിച്ചിരിക്കുന്ന theme locations-ഉം പട്ടികപ്പെടുത്തുന്നു.

**പാരാമീറ്ററുകൾ** — ഒന്നുമില്ല

**തിരികെ നൽകുന്നത്**

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

## Options മാനേജ്മെന്റ് {#options-management}

Options കഴിവുകൾ `get_option` / `update_option` വഴി WordPress options വായിക്കുകയും എഴുതുകയും ചെയ്യുന്നു. ഉൾനിർമ്മിത safety blocklist പ്രധാന settings അബദ്ധത്തിൽ മാറ്റുന്നത് തടയുന്നു.

### `get_option` {#getoption}

ഒരു WordPress option വായിക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `option_name` | string | അതെ | option key, ഉദാ. `blogname` |

**തിരികെ നൽകുന്നത്** `{ "option_name": "blogname", "value": "My Site" }`

`option_name` safety blocklist-ൽ ഉണ്ടെങ്കിൽ error തിരികെ നൽകുന്നു.

---

### `set_option` {#setoption}

ഒരു WordPress option എഴുതുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `option_name` | string | അതെ | option key |
| `value` | any | അതെ | പുതിയ മൂല്യം (arrays/objects-ക്കായി സ്വയമേവ serialise ചെയ്യും) |
| `autoload` | string | ഇല്ല | `"yes"` അല്ലെങ്കിൽ `"no"`. സ്ഥിരമായി നിലവിലുള്ള autoload setting നിലനിർത്തുന്നു |

`option_name` സുരക്ഷാ ബ്ലോക്ക്ലിസ്റ്റിൽ ഉണ്ടെങ്കിൽ പിശക് നൽകുന്നു.

**നൽകുന്നത്** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

ഒരു WordPress ഓപ്ഷൻ ഇല്ലാതാക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `option_name` | string | അതെ | ഇല്ലാതാക്കേണ്ട ഓപ്ഷൻ കീ |

`option_name` സുരക്ഷാ ബ്ലോക്ക്ലിസ്റ്റിൽ ഉണ്ടെങ്കിൽ പിശക് നൽകുന്നു.

**നൽകുന്നത്** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

ഒരു പാറ്റേണുമായി പൊരുത്തപ്പെടുന്ന WordPress ഓപ്ഷനുകൾ ലിസ്റ്റ് ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `pattern` | string | ഇല്ല | ഓപ്ഷൻ പേരുകൾ ഫിൽട്ടർ ചെയ്യാനുള്ള SQL LIKE പാറ്റേൺ, ഉദാ. `gratis_%`. ഒഴിവാക്കിയാൽ എല്ലാ ഓപ്ഷനുകളും നൽകും (വലിയ ഡാറ്റാബേസുകളിൽ ശ്രദ്ധയോടെ ഉപയോഗിക്കുക). |
| `limit` | integer | ഇല്ല | ഫലങ്ങളുടെ പരമാവധി എണ്ണം. ഡിഫോൾട്ട് `50`, പരമാവധി `500` |

**നൽകുന്നത്**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ഉള്ളടക്ക മാനേജ്മെന്റ് {#content-management}

ഉള്ളടക്ക മാനേജ്മെന്റ് കഴിവുകൾ WordPress പോസ്റ്റുകളും പേജുകളും സൃഷ്ടിക്കുകയും തിരുത്തുകയും ചെയ്യുന്നു. Post ID-കൾ നൽകുന്നതിനാൽ മൾട്ടി-കഴിവ് പ്ലാനുകളിലെ തുടർന്നുള്ള ഘട്ടങ്ങൾക്ക് സൃഷ്ടിച്ച ഉള്ളടക്കം പരാമർശിക്കാനാകും.

### `create_post` {#createpost}

പുതിയ WordPress പോസ്റ്റ്, പേജ്, അല്ലെങ്കിൽ കസ്റ്റം പോസ്റ്റ് ടൈപ്പ് എൻട്രി സൃഷ്ടിക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `title` | string | അതെ | പോസ്റ്റ് ശീർഷകം |
| `content` | string | ഇല്ല | പോസ്റ്റ് ബോഡി — സാധാരണ ടെക്സ്റ്റ്, HTML, അല്ലെങ്കിൽ സീരിയലൈസ് ചെയ്ത ബ്ലോക്ക് മാർക്കപ്പ് സ്വീകരിക്കുന്നു |
| `status` | string | ഇല്ല | `draft`, `publish`, `pending`, `private`. ഡിഫോൾട്ട് `draft` |
| `post_type` | string | ഇല്ല | പോസ്റ്റ് ടൈപ്പ് സ്ലഗ്, ഉദാ. `post`, `page`, അല്ലെങ്കിൽ രജിസ്റ്റർ ചെയ്ത ഏതെങ്കിലും CPT. ഡിഫോൾട്ട് `post` |
| `excerpt` | string | ഇല്ല | ആർക്കൈവുകളിലും തിരയൽ ഫലങ്ങളിലും കാണിക്കുന്ന ചെറിയ സംഗ്രഹം |
| `categories` | array | ഇല്ല | അസൈൻ ചെയ്യാനുള്ള വിഭാഗ നാമങ്ങളുടെയോ ID-കളുടെയോ അറേ |
| `tags` | array | ഇല്ല | അസൈൻ ചെയ്യാനുള്ള ടാഗ് നാമങ്ങളുടെയോ ID-കളുടെയോ അറേ |
| `author` | integer | ഇല്ല | പോസ്റ്റ് രചയിതാവായി സജ്ജീകരിക്കാനുള്ള WordPress ഉപയോക്തൃ ID. ഡിഫോൾട്ട് നിലവിലെ ഉപയോക്താവാണ് |
| `date` | string | ഇല്ല | ISO 8601 ഫോർമാറ്റിലുള്ള പ്രസിദ്ധീകരണ തീയതി, ഉദാ. `2026-05-01T09:00:00` |
| `page_template` | string | ഇല്ല | ഈ പോസ്റ്റിനോ പേജിനോ അസൈൻ ചെയ്യാനുള്ള ടെംപ്ലേറ്റ് ഫയൽ, ഉദാ. `page-full-width.php`. `post_type` `page` ആയിരിക്കുമ്പോഴോ പേജ് ടെംപ്ലേറ്റുകൾ പിന്തുണയ്ക്കുന്ന CPT ആയിരിക്കുമ്പോഴോ മാത്രം അർത്ഥവത്താണ്. |

**ഉദാഹരണം**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**നൽകുന്നത്** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

നിലവിലുള്ള WordPress പോസ്റ്റോ പേജോ അപ്ഡേറ്റ് ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `post_id` | integer | അതെ | അപ്ഡേറ്റ് ചെയ്യേണ്ട പോസ്റ്റിന്റെ ID |
| `title` | string | ഇല്ല | പുതിയ പോസ്റ്റ് ശീർഷകം |
| `content` | string | ഇല്ല | പുതിയ പോസ്റ്റ് ബോഡി |
| `status` | string | ഇല്ല | പുതിയ സ്റ്റാറ്റസ്: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ഇല്ല | പുതിയ എക്സർപ്റ്റ് |
| `categories` | array | ഇല്ല | പൂർണ്ണ വിഭാഗ ലിസ്റ്റ് ഈ നാമങ്ങളുടെയോ ID-കളുടെയോ അറേ ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കുക |
| `tags` | array | ഇല്ല | പൂർണ്ണ ടാഗ് ലിസ്റ്റ് ഈ നാമങ്ങളുടെയോ ID-കളുടെയോ അറേ ഉപയോഗിച്ച് മാറ്റിസ്ഥാപിക്കുക |
| `page_template` | string | ഇല്ല | ഈ പോസ്റ്റിനോ പേജിനോ അസൈൻ ചെയ്യാനുള്ള പുതിയ ടെംപ്ലേറ്റ് ഫയൽ, ഉദാ. `page-full-width.php`. ടെംപ്ലേറ്റ് അസൈൻമെന്റ് നീക്കം ചെയ്ത് theme ഡിഫോൾട്ടിലേക്ക് മടങ്ങാൻ ശൂന്യമായ സ്ട്രിംഗ് നൽകുക. |

**ഉദാഹരണം** — സൃഷ്ടിച്ചതിന് ശേഷം ടെംപ്ലേറ്റ് മാറ്റുക

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**നൽകുന്നത്** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ഒറ്റ കഴിവ് കോളിൽ ഒന്നിലധികം പോസ്റ്റുകൾ സൃഷ്ടിക്കുന്നു. സൈറ്റ് ബിൽഡുകളിലോ ബൾക്ക് ഉള്ളടക്ക ഇറക്കുമതിയിലോ റൗണ്ട് ട്രിപ്പുകൾ കുറയ്ക്കുന്നു. പോസ്റ്റുകൾ ക്രമത്തിൽ സൃഷ്ടിക്കും; ഒന്നിൽ പരാജയപ്പെട്ടാലും മറ്റുള്ളവ തുടരും, പരാജയം ഫലങ്ങളുടെ അറേയിൽ റിപ്പോർട്ട് ചെയ്യും.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `posts` | array | അതെ | പോസ്റ്റ് ഒബ്ജക്റ്റുകളുടെ അറേ, ഓരോന്നും `create_post` പോലെയുള്ള അതേ പാരാമീറ്ററുകൾ സ്വീകരിക്കുന്നു |
| `stop_on_error` | boolean | ഇല്ല | `true` ആണെങ്കിൽ, ആദ്യ പരാജയത്തിന് ശേഷം പ്രോസസ്സിംഗ് നിർത്തുക. ഡിഫോൾട്ട് `false` |

**ഉദാഹരണം**

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

**നൽകുന്നത്**

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

നിലവിലുള്ള പോസ്റ്റിനോ പേജിനോ ഒരു ഫീച്ചർഡ് ഇമേജ് (പോസ്റ്റ് തംബ്‌നെയിൽ) അസൈൻ ചെയ്യുന്നു. നിലവിലുള്ള Media Library അറ്റാച്ച്മെന്റ് ID അല്ലെങ്കിൽ റിമോട്ട് ഇമേജ് URL സ്വീകരിക്കുന്നു; URL നൽകിയാൽ ഇമേജ് സ്വയമേവ ഡൗൺലോഡ് ചെയ്ത് ഇറക്കുമതി ചെയ്യും.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `post_id` | integer | അതെ | അപ്ഡേറ്റ് ചെയ്യേണ്ട പോസ്റ്റിന്റെയോ പേജിന്റെയോ ID |
| `attachment_id` | integer | ഇല്ല | നിലവിലുള്ള Media Library അറ്റാച്ച്മെന്റിന്റെ ID |
| `url` | string | ഇല്ല | ഇറക്കുമതി ചെയ്ത് ഫീച്ചർഡ് ഇമേജായി സജ്ജീകരിക്കാനുള്ള റിമോട്ട് ഇമേജ് URL |
| `alt_text` | string | ഇല്ല | URL-ൽ നിന്ന് ഇറക്കുമതി ചെയ്താൽ അറ്റാച്ച്മെന്റിന് പ്രയോഗിക്കേണ്ട ആൾട്ട് ടെക്സ്റ്റ് |

`attachment_id` അല്ലെങ്കിൽ `url` ഇതിലൊന്ന് നൽകണം.

**നൽകുന്നത്** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ഇൻസ്റ്റാൾ ചെയ്തതിനെ ആശ്രയിച്ച്, സജീവ ഫോം പ്ലഗിൻ (Contact Form 7, WPForms, Fluent Forms, അല്ലെങ്കിൽ Gravity Forms) ഉപയോഗിച്ച് ഒരു കോൺടാക്റ്റ് ഫോം സൃഷ്ടിക്കുന്നു. ഏതെങ്കിലും പോസ്റ്റിലോ പേജിലോ ഉൾച്ചേർക്കാവുന്ന ഒരു ഷോർട്ട്‌കോഡ് നൽകുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `title` | string | ഉണ്ട് | form plugin admin-ൽ കാണിക്കുന്ന ഫോം പേര് |
| `fields` | array | ഉണ്ട് | ഫോം ഫീൽഡുകളുടെ ക്രമപ്പെടുത്തിയ പട്ടിക (താഴെയുള്ള Field object കാണുക) |
| `recipient` | string | ഇല്ല | സമർപ്പണങ്ങൾ സ്വീകരിക്കാനുള്ള ഇമെയിൽ വിലാസം. സ്ഥിരസ്ഥിതി WordPress admin email ആണ് |
| `subject` | string | ഇല്ല | ഇമെയിൽ വിഷയ വരി. Contact Form 7 ഉപയോഗിക്കുമ്പോൾ `[your-name]`, `[your-subject]` placeholders പിന്തുണയ്ക്കുന്നു |
| `confirmation_message` | string | ഇല്ല | വിജയകരമായ സമർപ്പണത്തിന് ശേഷം കാണിക്കുന്ന സന്ദേശം. സ്ഥിരസ്ഥിതി: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| കീ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `name` | string | ഉണ്ട് | ആന്തരിക ഫീൽഡ് പേര് / machine key |
| `label` | string | ഉണ്ട് | ഫോമിൽ കാണിക്കുന്ന മനുഷ്യർക്ക് വായിക്കാവുന്ന label |
| `type` | string | ഉണ്ട് | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ഇല്ല | സമർപ്പണത്തിന് മുമ്പ് ഫീൽഡ് പൂരിപ്പിക്കേണ്ടതുണ്ടോ. സ്ഥിരസ്ഥിതി `false` |
| `options` | array | ഇല്ല | `select`, `checkbox`, `radio` ഫീൽഡുകൾക്കുള്ള ഓപ്ഷനുകൾ |
| `placeholder` | string | ഇല്ല | ടെക്സ്റ്റ്-തരം ഇൻപുട്ടുകൾക്കുള്ള placeholder ടെക്സ്റ്റ് |

**ഉദാഹരണം**

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

**മടക്കിനൽകുന്നത്**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ദൃശ്യ അവലോകനം {#visual-review}

ഒരു browser extension ആവശ്യമില്ലാതെ, ലൈവ് പേജുകളുടെ screenshots എടുക്കാനും അവ വിശകലനം ചെയ്യാനും Visual Review കഴിവുകൾ agent-നെ അനുവദിക്കുന്നു. ഇതിലൂടെ സ്വയമേവയുള്ള ഡിസൈൻ അവലോകനം, മുമ്പ്/ശേഷം താരതമ്യങ്ങൾ, visual regression പരിശോധനകൾ എന്നിവ സാധ്യമാകുന്നു.

### `capture_screenshot` {#capturescreenshot}

Server-side headless browser ഉപയോഗിച്ച് നൽകിയ URL-ൽ ഉള്ള WordPress പേജിന്റെ screenshot എടുക്കുന്നു. ചിത്രം Media Library-യിൽ സംരക്ഷിക്കുകയും ഒരു CDN URL മടക്കിനൽകുകയും ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `url` | string | ഉണ്ട് | screenshot എടുക്കേണ്ട പേജിന്റെ പൂർണ്ണ URL, ഉദാ. `https://example.com/about/` |
| `width` | integer | ഇല്ല | pixels-ലുള്ള viewport വീതി. സ്ഥിരസ്ഥിതി `1280` |
| `height` | integer | ഇല്ല | pixels-ലുള്ള viewport ഉയരം. സ്ഥിരസ്ഥിതി `800` |
| `full_page` | boolean | ഇല്ല | viewport മാത്രം അല്ലാതെ scroll ചെയ്യാവുന്ന മുഴുവൻ പേജും പകർത്തുക. സ്ഥിരസ്ഥിതി `false` |
| `delay_ms` | integer | ഇല്ല | പേജ് ലോഡായതിന് ശേഷം പകർത്തുന്നതിന് മുമ്പ് കാത്തിരിക്കേണ്ട milliseconds; animated content-ന് ഉപകാരപ്രദം. സ്ഥിരസ്ഥിതി `500` |
| `label` | string | ഇല്ല | Media Library-യിലെ attachment-നൊപ്പം സൂക്ഷിക്കുന്ന മനുഷ്യർക്ക് വായിക്കാവുന്ന label |

**മടക്കിനൽകുന്നത്**

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

രണ്ട് screenshots എടുത്ത്, മാറിയ ഭാഗങ്ങൾ അടയാളപ്പെടുത്തുന്ന diff image സഹിതം visual diff score മടക്കിനൽകുന്നു. ഒരു ഡിസൈൻ മാറ്റം പ്രതീക്ഷിച്ച ഫലം നൽകിയെന്ന് സ്ഥിരീകരിക്കാനോ അനുദ്ദേശിത regressions കണ്ടെത്താനോ ഉപകാരപ്രദം.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `before_url` | string | ഉണ്ട് | “മുമ്പുള്ള” നിലയായി പകർത്തേണ്ട പേജിന്റെ URL |
| `after_url` | string | ഉണ്ട് | “ശേഷമുള്ള” നിലയായി പകർത്തേണ്ട പേജിന്റെ URL. സമയാന്തരത്തിൽ താരതമ്യം ചെയ്യുകയാണെങ്കിൽ അതേ URL ആകാം |
| `width` | integer | ഇല്ല | രണ്ട് captures-നും വേണ്ട viewport വീതി. സ്ഥിരസ്ഥിതി `1280` |
| `threshold` | float | ഇല്ല | Pixel-difference threshold (0.0–1.0). ഈ tolerance-നുള്ളിലുള്ള pixels മാറാത്തതായി കണക്കാക്കും. സ്ഥിരസ്ഥിതി `0.1` |

**മടക്കിനൽകുന്നത്**

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

`0.0` എന്ന `diff_score` ദൃശ്യമായ മാറ്റമില്ലെന്ന് അർത്ഥമാക്കുന്നു; `1.0` എല്ലാ pixel-കളും മാറിയെന്ന് അർത്ഥമാക്കുന്നു.

---

### `review_page_design` {#reviewpagedesign}

ഒരു പേജിന്റെ screenshot എടുത്ത് ദൃശ്യ വിശകലനത്തിനായി language model-ലേക്ക് അയയ്ക്കുന്നു. layout, typography, colour ഉപയോഗം, accessibility ആശങ്കകൾ എന്നിവ ഉൾക്കൊള്ളുന്ന ഘടനാപരമായ വിലയിരുത്തൽ മടക്കിനൽകുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണ് | വിവരണം |
|---|---|---|---|
| `url` | string | ഉണ്ട് | അവലോകനം ചെയ്യേണ്ട പേജിന്റെ പൂർണ്ണ URL |
| `focus` | string | ഇല്ല | പ്രത്യേകമായി ഊന്നിപ്പറയേണ്ട അവലോകന മേഖലകളുടെ comma-separated പട്ടിക: `layout`, `typography`, `colour`, `accessibility`, `mobile`. സ്ഥിരസ്ഥിതി: എല്ലാ മേഖലകളും |
| `width` | integer | ഇല്ല | viewport വീതി. സ്ഥിരസ്ഥിതി `1280` |

**മടക്കിനൽകുന്നത്**

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

## ഇൻസ്റ്റാൾ ചെയ്യാവുന്ന കഴിവുകൾ {#installable-abilities}

Installable Abilities Registry, WordPress plugins ആയി വിതരണം ചെയ്യുന്ന അധിക ability packs ഉപയോഗിച്ച് agent-നെ വിപുലീകരിക്കാൻ അനുവദിക്കുന്നു. ഓരോ pack-ഉം standard ability API ഉപയോഗിച്ച് ഒന്നോ അതിലധികമോ കഴിവുകൾ രജിസ്റ്റർ ചെയ്യുന്നു.

### `list_available_abilities` {#listavailableabilities}

registry-യിൽ നിന്ന് ഇൻസ്റ്റാൾ ചെയ്യാൻ ലഭ്യമായ ability packs-ന്റെ catalogue മടക്കിനൽകുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `category` | string | ഇല്ല | വിഭാഗം പ്രകാരം ഫിൽട്ടർ ചെയ്യുക: `ecommerce`, `seo`, `media`, `social`, `developer` |

**മടക്കിനൽകുന്നത്**

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

രജിസ്ട്രിയിൽ നിന്ന് ഒരു ശേഷി പാക്ക് ഡൗൺലോഡ് ചെയ്ത് സജീവമാക്കുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `slug` | string | ഉണ്ട് | ശേഷി പാക്ക് പ്ലഗിൻ slug |

**മടക്കിനൽകുന്നത്** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

വിവരിച്ചിരിക്കുന്ന ഉപയോഗാവശ്യത്തിന് ഏറ്റവും അനുയോജ്യമായ പ്ലഗിൻ കണ്ടെത്താൻ ശേഷി രജിസ്ട്രിയോട് ക്വറി ചെയ്യുകയും, വേണമെങ്കിൽ അത് ഇൻസ്റ്റാൾ ചെയ്യുകയും ചെയ്യുന്നു.

**പാരാമീറ്ററുകൾ**

| പാരാമീറ്റർ | തരം | ആവശ്യമാണോ | വിവരണം |
|---|---|---|---|
| `description` | string | ഉണ്ട് | ആവശ്യമായ പ്രവർത്തനക്ഷമതയുടെ സ്വാഭാവിക ഭാഷയിലെ വിവരണം |
| `install` | boolean | ഇല്ല | `true` ആണെങ്കിൽ, ശുപാർശ ചെയ്ത പ്ലഗിൻ ഉടൻ ഇൻസ്റ്റാൾ ചെയ്യും. ഡിഫോൾട്ട് `false` |

**ഉദാഹരണം**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**മടക്കിനൽകുന്നത്**

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
