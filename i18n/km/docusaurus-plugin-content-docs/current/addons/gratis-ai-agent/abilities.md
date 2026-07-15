---
title: ឯកសារយោងអំពីសមត្ថភាព
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# ឯកសារយោងសមត្ថភាព

សមត្ថភាពគឺជាសកម្មភាពមូលដ្ឋានដែល Gratis AI Agent អាចហៅប្រើលើការដំឡើង WordPress របស់អ្នក។ សមត្ថភាពនីមួយៗគឺជា PHP class ដែលបានចុះឈ្មោះ ហើយបង្ហាញ JSON schema — agent អាន schema នេះនៅពេលដំណើរការ ដើម្បីយល់ថាត្រូវការប៉ារ៉ាម៉ែត្រអ្វីខ្លះ និងសមត្ថភាពនោះត្រឡប់អ្វីមកវិញ។

ទំព័រនេះរៀបរាប់សមត្ថភាពទាំងអស់ដែលភ្ជាប់មកជាមួយ Gratis AI Agent v1.9.0។

---

## ប្រភេទប្រកាសផ្ទាល់ខ្លួន {#custom-post-types}

សមត្ថភាពទាំងនេះគ្រប់គ្រងប្រភេទប្រកាសផ្ទាល់ខ្លួន (CPTs) ដែលបានចុះឈ្មោះតាមរយៈ agent។ ការចុះឈ្មោះត្រូវបានរក្សាទុកក្នុងតារាងជម្រើសរបស់ WordPress ដូច្នេះវានៅតែមានបន្ទាប់ពីបិទ និងបើក plugin ឡើងវិញ។

### `register_post_type` {#registerposttype}

ចុះឈ្មោះប្រភេទប្រកាសផ្ទាល់ខ្លួនថ្មីមួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | គន្លឹះប្រភេទប្រកាស (អតិបរមា 20 តួអក្សរ គ្មានអក្សរធំ គ្មានដកឃ្លា) |
| `singular_label` | string | បាទ/ចាស | ឈ្មោះឯកវចនៈដែលមនុស្សអានបាន ឧ. `Portfolio Item` |
| `plural_label` | string | បាទ/ចាស | ឈ្មោះពហុវចនៈដែលមនុស្សអានបាន ឧ. `Portfolio Items` |
| `public` | boolean | ទេ | តើប្រភេទប្រកាសអាចចូលប្រើជាសាធារណៈបានឬអត់។ លំនាំដើម `true` |
| `supports` | array | ទេ | មុខងារដែលគាំទ្រ៖ `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`។ លំនាំដើម `["title","editor"]` |
| `has_archive` | boolean | ទេ | តើបានបើកទំព័របណ្ណសារសម្រាប់ប្រភេទប្រកាសឬអត់។ លំនាំដើម `false` |
| `menu_icon` | string | ទេ | Dashicons class ឬ URL សម្រាប់រូបតំណាងម៉ឺនុយគ្រប់គ្រង។ លំនាំដើម `"dashicons-admin-post"` |
| `rewrite_slug` | string | ទេ | URL slug សម្រាប់ប្រភេទប្រកាស។ លំនាំដើមជា `slug` |

**ឧទាហរណ៍**

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

**ត្រឡប់** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

ត្រឡប់ប្រភេទប្រកាសផ្ទាល់ខ្លួនទាំងអស់ដែលបានចុះឈ្មោះដោយ agent។

**ប៉ារ៉ាម៉ែត្រ** — គ្មាន

**ត្រឡប់**

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

លុបការចុះឈ្មោះប្រភេទប្រកាសផ្ទាល់ខ្លួនដែលបានចុះឈ្មោះពីមុនដោយ agent។ ប្រកាសដែលមានស្រាប់នៃប្រភេទនោះនៅតែមានក្នុងមូលដ្ឋានទិន្នន័យ ប៉ុន្តែមិនអាចចូលប្រើតាមរយៈប្រភេទប្រកាសនោះបានទៀតទេ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | គន្លឹះប្រភេទប្រកាសដែលត្រូវដកចេញ |

**ត្រឡប់** `{ "success": true, "slug": "portfolio" }`

---

## ចំណាត់ថ្នាក់ផ្ទាល់ខ្លួន {#custom-taxonomies}

សមត្ថភាពទាំងនេះគ្រប់គ្រងចំណាត់ថ្នាក់ផ្ទាល់ខ្លួន។ ដូច CPTs ដែរ ការចុះឈ្មោះចំណាត់ថ្នាក់ត្រូវបានរក្សាទុក។

### `register_taxonomy` {#registertaxonomy}

ចុះឈ្មោះចំណាត់ថ្នាក់ផ្ទាល់ខ្លួនថ្មីមួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | គន្លឹះចំណាត់ថ្នាក់ (អតិបរមា 32 តួអក្សរ) |
| `singular_label` | string | បាទ/ចាស | ឈ្មោះឯកវចនៈដែលមនុស្សអានបាន ឧ. `Project Category` |
| `plural_label` | string | បាទ/ចាស | ឈ្មោះពហុវចនៈដែលមនុស្សអានបាន ឧ. `Project Categories` |
| `post_types` | array | បាទ/ចាស | slugs នៃប្រភេទប្រកាសដែលចំណាត់ថ្នាក់នេះគួរត្រូវភ្ជាប់ទៅ |
| `hierarchical` | boolean | ទេ | `true` សម្រាប់រចនាប័ទ្មប្រភេទ, `false` សម្រាប់រចនាប័ទ្មស្លាក។ លំនាំដើម `true` |
| `public` | boolean | ទេ | តើពាក្យអាចចូលប្រើជាសាធារណៈបានឬអត់។ លំនាំដើម `true` |
| `rewrite_slug` | string | ទេ | URL slug សម្រាប់ចំណាត់ថ្នាក់។ លំនាំដើមជា `slug` |

**ឧទាហរណ៍**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**ត្រឡប់** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

ត្រឡប់ចំណាត់ថ្នាក់ផ្ទាល់ខ្លួនទាំងអស់ដែលបានចុះឈ្មោះដោយ agent។

**ប៉ារ៉ាម៉ែត្រ** — គ្មាន

**ត្រឡប់**

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

លុបការចុះឈ្មោះចំណាត់ថ្នាក់ផ្ទាល់ខ្លួនដែលបានចុះឈ្មោះពីមុនដោយ agent។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | គន្លឹះចំណាត់ថ្នាក់ដែលត្រូវដកចេញ |

**ត្រឡប់** `{ "success": true, "slug": "project-category" }`

---

## ប្រព័ន្ធរចនា {#design-system}

សមត្ថភាពប្រព័ន្ធរចនាកែប្រែការបង្ហាញមើលឃើញរបស់គេហទំព័រ WordPress — ចាប់ពី CSS ផ្ទាល់ខ្លួន ដល់លំនាំប្លុក និងរូបសញ្ញាគេហទំព័រ។

### `inject_custom_css` {#injectcustomcss}

បន្ថែម CSS ទៅក្នុង `<head>` របស់គេហទំព័រតាមរយៈ `wp_add_inline_style`។ CSS ត្រូវបានរក្សាទុកក្នុងជម្រើស `gratis_ai_agent_custom_css` ហើយត្រូវបានដកចេញយ៉ាងស្អាតនៅពេលកំណត់សមត្ថភាពឡើងវិញ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `css` | string | បាទ/ចាស | CSS ត្រឹមត្រូវសម្រាប់បញ្ចូល |
| `label` | string | ទេ | ស្លាកដែលមនុស្សអានបានសម្រាប់ប្លុក CSS នេះ ប្រើក្នុងកំណត់ហេតុបំបាត់កំហុស។ លំនាំដើម `"agent-injected"` |
| `replace` | boolean | ទេ | ប្រសិនបើ `true` វានឹងជំនួស CSS ដែលបានបញ្ចូលពីមុនទាំងអស់។ លំនាំដើម `false` (បន្ថែមបន្ត) |

**ឧទាហរណ៍**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**ត្រឡប់** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

ចុះឈ្មោះលំនាំប្លុកដែលអាចប្រើឡើងវិញបានក្នុងបណ្ណាល័យលំនាំរបស់ WordPress។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | អត្តសញ្ញាណលំនាំ ឧ. `gratis/hero-dark` |
| `title` | string | បាទ/ចាស | ឈ្មោះលំនាំដែលមនុស្សអានបាន បង្ហាញក្នុងកម្មវិធីកែសម្រួល |
| `content` | string | បាទ/ចាស | markup ប្លុកដែលបានបំលែងជាស៊េរី (HTML) សម្រាប់លំនាំ |
| `categories` | array | ទេ | slugs ប្រភេទលំនាំ ឧ. `["featured", "hero"]` |
| `description` | string | ទេ | ការពិពណ៌នាខ្លីដែលបង្ហាញក្នុងឧបករណ៍ជ្រើសលំនាំ |
| `keywords` | array | ទេ | ពាក្យគន្លឹះស្វែងរក |

**ត្រឡប់** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

រាយបញ្ជីលំនាំប្លុកទាំងអស់ដែលបានចុះឈ្មោះដោយ agent។

**ប៉ារ៉ាម៉ែត្រ** — គ្មាន

**ត្រឡប់**

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

កំណត់រូបសញ្ញាគេហទំព័រ WordPress ទៅជា ID ឯកសារភ្ជាប់ដែលបានផ្តល់ ឬ URL រូបភាពពីចម្ងាយ។ នៅពេលផ្តល់ URL រូបភាពនឹងត្រូវបានទាញយក និងនាំចូលទៅក្នុងបណ្ណាល័យមេឌៀ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `attachment_id` | integer | ទេ | ID នៃឯកសារភ្ជាប់បណ្ណាល័យមេឌៀដែលមានស្រាប់ |
| `url` | string | ទេ | URL រូបភាពពីចម្ងាយសម្រាប់នាំចូល និងកំណត់ជារូបសញ្ញា |

ត្រូវផ្តល់មួយក្នុងចំណោម `attachment_id` ឬ `url`។

**ត្រឡប់** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

អនុវត្ត preset ពណ៌/អក្សរដែលមានឈ្មោះ ទៅលើ `theme.json` (ឬ `global-styles`) របស់ theme កំពុងដំណើរការ។ Presets គឺជាកញ្ចប់ដែលបានជ្រើសរើស និងថែរក្សាដោយក្រុម Gratis AI Agent។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `preset` | string | បាទ/ចាស | ឈ្មោះ preset ឧ. `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | ទេ | ប្រសិនបើ `true` បញ្ចូលជាមួយតម្លៃដែលមានស្រាប់ ជំនួសឱ្យការជំនួសទាំងស្រុង។ លំនាំដើម `false` |

**Presets ដែលមាន**

| Preset | ការពិពណ៌នា |
|---|---|
| `minimal-dark` | ផ្ទៃខាងក្រោយជិតខ្មៅ អត្ថបទពណ៌ស ពណ៌បញ្ជាក់តែមួយ |
| `warm-editorial` | ផ្ទៃខាងក្រោយសស្រាលក្តៅ ក្បាលអត្ថបទប្រភេទ serif ពណ៌បញ្ជាក់បែបធម្មជាតិ |
| `corporate-blue` | ប៉ាឡែតពណ៌ខៀវចាស់ និងស ជាមួយអក្សរបែបវិជ្ជាជីវៈ |
| `vibrant-startup` | ការលាយពណ៌ភ្លឺ ជ្រុងមូល ប្រភេទអក្សរ sans-serif ទំនើប |
| `classic-blog` | ពណ៌ប្រផេះអព្យាក្រឹត កម្ពស់បន្ទាត់ងាយអាន ចន្លោះប្លង់បែបប្រពៃណី |

**ត្រឡប់** `{ "success": true, "preset": "minimal-dark" }`

---

## រចនាប័ទ្មសកល {#global-styles}

សមត្ថភាពរចនាប័ទ្មសកល អាន និងសរសេរតម្លៃ theme.json តាមរយៈ WordPress Global Styles API ដែលប៉ះពាល់ដល់ប្លុក និងគំរូទាំងអស់ទូទាំងគេហទំព័រ។

### `get_global_styles` {#getglobalstyles}

ត្រឡប់ការកំណត់រចនាសម្ព័ន្ធរចនាប័ទ្មសកលបច្ចុប្បន្ន។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `path` | string | ទេ | JSON pointer ទៅតម្លៃជាក់លាក់ ឧ. `/color/palette` ឬ `/typography/fontSizes`។ ត្រឡប់វត្ថុទាំងមូល ប្រសិនបើមិនបានបញ្ចូល។ |

**ត្រឡប់** វត្ថុរចនាប័ទ្មសកលពេញលេញ ឬតម្លៃនៅ `path`។

---

### `set_global_styles` {#setglobalstyles}

ធ្វើបច្ចុប្បន្នភាពតម្លៃមួយ ឬច្រើនក្នុងការកំណត់រចនាសម្ព័ន្ធរចនាប័ទ្មសកល។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `path` | string | បាទ/ចាស | JSON pointer ទៅតម្លៃដែលត្រូវកំណត់ ឧ. `/color/palette` |
| `value` | any | បាទ/ចាស | តម្លៃថ្មី |

**ឧទាហរណ៍** — បន្ថែមពណ៌ទៅក្នុងប៉ាឡែត

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**ត្រឡប់** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

កំណត់ការផ្លាស់ប្តូររចនាប័ទ្មសកលទាំងអស់ដែល agent បានអនុវត្តឡើងវិញ ដោយស្តារលំនាំដើមរបស់ theme។

**ប៉ារ៉ាម៉ែត្រ** — គ្មាន

**ត្រឡប់** `{ "success": true }`

---

## ម៉ឺនុយរុករក {#navigation-menus}

សមត្ថភាពម៉ឺនុយរុករក បង្កើត និងគ្រប់គ្រងម៉ឺនុយរុករក WordPress និងធាតុរបស់វា។

### `create_menu` {#createmenu}

បង្កើតម៉ឺនុយរុករក WordPress ថ្មី។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `name` | string | បាទ/ចាស | ឈ្មោះម៉ឺនុយ ឧ. `Primary Navigation` |
| `location` | string | ទេ | ទីតាំង theme ដើម្បីផ្តល់ម៉ឺនុយនេះទៅ ឧ. `primary` |

**ត្រឡប់** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

ប្តូរឈ្មោះម៉ឺនុយ ឬផ្តល់វាឡើងវិញទៅទីតាំង theme។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `menu_id` | integer | បាទ/ចាស | ID នៃម៉ឺនុយដែលត្រូវធ្វើបច្ចុប្បន្នភាព |
| `name` | string | ទេ | ឈ្មោះម៉ឺនុយថ្មី |
| `location` | string | ទេ | ទីតាំង theme ដើម្បីផ្តល់ ឬផ្តល់ឡើងវិញ |

**ត្រឡប់** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

បន្ថែមធាតុទៅម៉ឺនុយរុករកដែលមានស្រាប់។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `menu_id` | integer | បាទ/ចាស | ID នៃម៉ឺនុយគោលដៅ |
| `type` | string | បាទ/ចាស | ប្រភេទធាតុ៖ `custom`, `post_type`, ឬ `taxonomy` |
| `title` | string | ទេ | ស្លាកសម្រាប់ធាតុម៉ឺនុយ (ត្រូវការសម្រាប់ប្រភេទ `custom`) |
| `url` | string | ទេ | URL សម្រាប់ធាតុ `custom` |
| `object_id` | integer | ទេ | ID ប្រកាស ឬ ID ពាក្យ សម្រាប់ធាតុ `post_type`/`taxonomy` |
| `parent_id` | integer | ទេ | ID ធាតុម៉ឺនុយ ដើម្បីដាក់ធាតុនេះនៅក្រោម |
| `position` | integer | ទេ | ទីតាំងរាប់ពីសូន្យនៅក្នុងម៉ឺនុយ |

**ត្រឡប់** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

លុបធាតុមួយចេញពីម៉ឺនុយរុករក។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `item_id` | integer | បាទ/ចាស | ID ធាតុម៉ឺនុយដែលត្រូវលុប |

**ត្រឡប់** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

រាយបញ្ជីម៉ឺនុយរុករក WordPress ទាំងអស់ រួមទាំងទីតាំង theme ដែលបានផ្តល់ឱ្យ។

**ប៉ារ៉ាម៉ែត្រ** — គ្មាន

**ត្រឡប់**

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

## ការគ្រប់គ្រងជម្រើស {#options-management}

សមត្ថភាពជម្រើស អាន និងសរសេរជម្រើស WordPress តាមរយៈ `get_option` / `update_option`។ បញ្ជីទប់ស្កាត់សុវត្ថិភាពដែលមានស្រាប់ ការពារការកែប្រែការកំណត់សំខាន់ៗដោយចៃដន្យ។

### `get_option` {#getoption}

អានជម្រើស WordPress មួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `option_name` | string | បាទ/ចាស | គន្លឹះជម្រើស ឧ. `blogname` |

**ត្រឡប់** `{ "option_name": "blogname", "value": "My Site" }`

ត្រឡប់កំហុស ប្រសិនបើ `option_name` ស្ថិតនៅក្នុងបញ្ជីទប់ស្កាត់សុវត្ថិភាព។

---

### `set_option` {#setoption}

សរសេរជម្រើស WordPress មួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `option_name` | string | បាទ/ចាស | គន្លឹះជម្រើស |
| `value` | any | បាទ/ចាស | តម្លៃថ្មី (ធ្វើ serialise ដោយស្វ័យប្រវត្តិសម្រាប់ array/object) |
| `autoload` | string | ទេ | `"yes"` ឬ `"no"`។ លំនាំដើមរក្សាការកំណត់ autoload ដែលមានស្រាប់ |

ត្រឡប់កំហុស ប្រសិនបើ `option_name` ស្ថិតនៅក្នុងបញ្ជីទប់សុវត្ថិភាព។

**ត្រឡប់** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

លុបជម្រើស WordPress មួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `option_name` | string | បាទ/ចាស | គន្លឹះជម្រើសដែលត្រូវលុប |

ត្រឡប់កំហុស ប្រសិនបើ `option_name` ស្ថិតនៅក្នុងបញ្ជីទប់សុវត្ថិភាព។

**ត្រឡប់** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

រាយបញ្ជីជម្រើស WordPress ដែលផ្គូផ្គងនឹងលំនាំមួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `pattern` | string | ទេ | លំនាំ SQL LIKE សម្រាប់ត្រងឈ្មោះជម្រើស ឧ. `gratis_%`។ ត្រឡប់ជម្រើសទាំងអស់ ប្រសិនបើមិនបានផ្តល់ (ប្រើដោយប្រុងប្រយ័ត្នលើមូលដ្ឋានទិន្នន័យធំៗ)។ |
| `limit` | integer | ទេ | ចំនួនលទ្ធផលអតិបរមា។ លំនាំដើម `50`, អតិបរមា `500` |

**ត្រឡប់**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## ការគ្រប់គ្រងមាតិកា {#content-management}

សមត្ថភាពគ្រប់គ្រងមាតិកាបង្កើត និងកែសម្រួលប្រកាស និងទំព័រ WordPress។ ID ប្រកាសត្រូវបានត្រឡប់ ដូច្នេះជំហានបន្ទាប់ក្នុងផែនការមានសមត្ថភាពច្រើនអាចយោងទៅមាតិកាដែលបានបង្កើត។

### `create_post` {#createpost}

បង្កើតប្រកាស WordPress ថ្មី ទំព័រ ឬធាតុប្រភេទប្រកាសផ្ទាល់ខ្លួន។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `title` | string | បាទ/ចាស | ចំណងជើងប្រកាស |
| `content` | string | ទេ | តួប្រកាស — ទទួលយកអត្ថបទធម្មតា HTML ឬ markup block ដែលបាន serialise |
| `status` | string | ទេ | `draft`, `publish`, `pending`, `private`។ លំនាំដើម `draft` |
| `post_type` | string | ទេ | slug ប្រភេទប្រកាស ឧ. `post`, `page` ឬ CPT ដែលបានចុះបញ្ជីណាមួយ។ លំនាំដើម `post` |
| `excerpt` | string | ទេ | សេចក្តីសង្ខេបខ្លីដែលបង្ហាញក្នុងបណ្ណសារ និងលទ្ធផលស្វែងរក |
| `categories` | array | ទេ | array នៃឈ្មោះ ឬ ID ប្រភេទដើម្បីកំណត់ |
| `tags` | array | ទេ | array នៃឈ្មោះ ឬ ID ស្លាកដើម្បីកំណត់ |
| `author` | integer | ទេ | ID អ្នកប្រើ WordPress ដើម្បីកំណត់ជាអ្នកនិពន្ធប្រកាស។ លំនាំដើមគឺអ្នកប្រើបច្ចុប្បន្ន |
| `date` | string | ទេ | កាលបរិច្ឆេទផ្សព្វផ្សាយក្នុងទ្រង់ទ្រាយ ISO 8601 ឧ. `2026-05-01T09:00:00` |
| `page_template` | string | ទេ | ឯកសារ template ដើម្បីកំណត់ឱ្យប្រកាស ឬទំព័រនេះ ឧ. `page-full-width.php`។ មានន័យតែពេល `post_type` ជា `page` ឬ CPT ដែលគាំទ្រ page templates ប៉ុណ្ណោះ។ |

**ឧទាហរណ៍**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**ត្រឡប់** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

ធ្វើបច្ចុប្បន្នភាពប្រកាស ឬទំព័រ WordPress ដែលមានស្រាប់។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `post_id` | integer | បាទ/ចាស | ID របស់ប្រកាសដែលត្រូវធ្វើបច្ចុប្បន្នភាព |
| `title` | string | ទេ | ចំណងជើងប្រកាសថ្មី |
| `content` | string | ទេ | តួប្រកាសថ្មី |
| `status` | string | ទេ | ស្ថានភាពថ្មី៖ `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | ទេ | សេចក្តីដកស្រង់ថ្មី |
| `categories` | array | ទេ | ជំនួសបញ្ជីប្រភេទទាំងមូលដោយ array នៃឈ្មោះ ឬ ID នេះ |
| `tags` | array | ទេ | ជំនួសបញ្ជីស្លាកទាំងមូលដោយ array នៃឈ្មោះ ឬ ID នេះ |
| `page_template` | string | ទេ | ឯកសារ template ថ្មីដើម្បីកំណត់ឱ្យប្រកាស ឬទំព័រនេះ ឧ. `page-full-width.php`។ ផ្ញើខ្សែអក្សរទទេ ដើម្បីដកការកំណត់ template ហើយត្រឡប់ទៅលំនាំដើមរបស់ theme។ |

**ឧទាហរណ៍** — ប្តូរ template បន្ទាប់ពីបង្កើត

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**ត្រឡប់** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

បង្កើតប្រកាសច្រើនក្នុងការហៅសមត្ថភាពតែមួយ ដោយកាត់បន្ថយការទៅមកពេលសាងសង់ site ឬនាំចូលមាតិកាជាច្រើន។ ប្រកាសត្រូវបានបង្កើតតាមលំដាប់។ ប្រសិនបើមួយបរាជ័យ ប្រកាសផ្សេងទៀតបន្ត ហើយការបរាជ័យត្រូវបានរាយការណ៍ក្នុង array លទ្ធផល។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `posts` | array | បាទ/ចាស | array នៃវត្ថុប្រកាស ដែលនីមួយៗទទួលយកប៉ារ៉ាម៉ែត្រដូចគ្នានឹង `create_post` |
| `stop_on_error` | boolean | ទេ | ប្រសិនបើ `true` បញ្ឈប់ដំណើរការបន្ទាប់ពីការបរាជ័យដំបូង។ លំនាំដើម `false` |

**ឧទាហរណ៍**

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

**ត្រឡប់**

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

កំណត់រូបភាពលេចធ្លោ (រូបតូចប្រកាស) ទៅប្រកាស ឬទំព័រដែលមានស្រាប់។ ទទួលយក ID ឯកសារភ្ជាប់ Media Library ដែលមានស្រាប់ ឬ URL រូបភាពពីចម្ងាយ។ ពេលផ្តល់ URL រូបភាពនឹងត្រូវបានទាញយក និងនាំចូលដោយស្វ័យប្រវត្តិ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ចាំបាច់ | ការពិពណ៌នា |
|---|---|---|---|
| `post_id` | integer | បាទ/ចាស | ID របស់ប្រកាស ឬទំព័រដែលត្រូវធ្វើបច្ចុប្បន្នភាព |
| `attachment_id` | integer | ទេ | ID របស់ឯកសារភ្ជាប់ Media Library ដែលមានស្រាប់ |
| `url` | string | ទេ | URL រូបភាពពីចម្ងាយដើម្បីនាំចូល និងកំណត់ជារូបភាពលេចធ្លោ |
| `alt_text` | string | ទេ | អត្ថបទជំនួសដើម្បីអនុវត្តលើឯកសារភ្ជាប់ ប្រសិនបើវាត្រូវបាននាំចូលពី URL |

ត្រូវផ្តល់មួយក្នុងចំណោម `attachment_id` ឬ `url`។

**ត្រឡប់** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

បង្កើតទម្រង់ទំនាក់ទំនងដោយប្រើ plugin ទម្រង់សកម្ម (Contact Form 7, WPForms, Fluent Forms ឬ Gravity Forms អាស្រ័យលើអ្វីដែលបានដំឡើង)។ ត្រឡប់ shortcode ដែលអាចបង្កប់ក្នុងប្រកាស ឬទំព័រណាមួយ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `title` | string | បាទ/ចាស | ឈ្មោះទម្រង់ដែលបង្ហាញក្នុង admin របស់ plugin ទម្រង់ |
| `fields` | array | បាទ/ចាស | បញ្ជីតាមលំដាប់នៃវាលទម្រង់ (មើល Field object ខាងក្រោម) |
| `recipient` | string | ទេ | អាសយដ្ឋានអ៊ីមែលសម្រាប់ទទួលការដាក់ស្នើ។ លំនាំដើមជា​អ៊ីមែល admin របស់ WordPress |
| `subject` | string | ទេ | បន្ទាត់ប្រធានបទអ៊ីមែល។ គាំទ្រ placeholder `[your-name]` និង `[your-subject]` នៅពេលប្រើ Contact Form 7 |
| `confirmation_message` | string | ទេ | សារដែលបង្ហាញបន្ទាប់ពីការដាក់ស្នើជោគជ័យ។ លំនាំដើម៖ `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| សោ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `name` | string | បាទ/ចាស | ឈ្មោះវាលខាងក្នុង / សោម៉ាស៊ីន |
| `label` | string | បាទ/ចាស | ស្លាកដែលមនុស្សអានបាន ដែលបង្ហាញលើទម្រង់ |
| `type` | string | បាទ/ចាស | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | ទេ | ថាតើវាលត្រូវតែបំពេញមុនពេលដាក់ស្នើឬអត់។ លំនាំដើម `false` |
| `options` | array | ទេ | ជម្រើសសម្រាប់វាល `select`, `checkbox`, និង `radio` |
| `placeholder` | string | ទេ | អត្ថបទ placeholder សម្រាប់ធាតុបញ្ចូលប្រភេទអត្ថបទ |

**ឧទាហរណ៍**

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

**ត្រឡប់**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## ការពិនិត្យមើលដោយរូបភាព {#visual-review}

សមត្ថភាពការពិនិត្យមើលដោយរូបភាព អនុញ្ញាតឱ្យ agent ចាប់យករូបថតអេក្រង់នៃទំព័រផ្ទាល់ និងវិភាគវា ដើម្បីអាចពិនិត្យរចនាដោយស្វ័យប្រវត្តិ ប្រៀបធៀបមុន/ក្រោយ និងពិនិត្យការថយចុះគុណភាពផ្នែករូបភាព ដោយមិនត្រូវការផ្នែកបន្ថែម browser ណាមួយទេ។

### `capture_screenshot` {#capturescreenshot}

ចាប់យករូបថតអេក្រង់នៃទំព័រ WordPress នៅ URL ដែលបានផ្ដល់ ដោយប្រើ browser គ្មានផ្ទាំងខាងម៉ាស៊ីនមេ។ រូបភាពត្រូវបានរក្សាទុកទៅក្នុង Media Library ហើយ CDN URL ត្រូវបានត្រឡប់មកវិញ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `url` | string | បាទ/ចាស | URL ពេញលេញនៃទំព័រដែលត្រូវថតអេក្រង់ ឧ. `https://example.com/about/` |
| `width` | integer | ទេ | ទទឹង viewport ជា pixel។ លំនាំដើម `1280` |
| `height` | integer | ទេ | កម្ពស់ viewport ជា pixel។ លំនាំដើម `800` |
| `full_page` | boolean | ទេ | ចាប់យកទំព័រដែលអាចរំកិលបានទាំងមូល ជំនួសឱ្យតែ viewport។ លំនាំដើម `false` |
| `delay_ms` | integer | ទេ | ចំនួនមីលីវិនាទីដែលត្រូវរង់ចាំបន្ទាប់ពីទំព័រផ្ទុករួច មុនពេលចាប់យក មានប្រយោជន៍សម្រាប់មាតិកាមានចលនា។ លំនាំដើម `500` |
| `label` | string | ទេ | ស្លាកដែលមនុស្សអានបាន ដែលរក្សាទុកជាមួយឯកសារភ្ជាប់ក្នុង Media Library |

**ត្រឡប់**

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

យករូបថតអេក្រង់ពីរ ហើយត្រឡប់ពិន្ទុភាពខុសគ្នាផ្នែករូបភាព រួមជាមួយរូបភាពបង្ហាញភាពខុសគ្នាដែលគូសបញ្ជាក់តំបន់ដែលបានផ្លាស់ប្ដូរ។ មានប្រយោជន៍សម្រាប់បញ្ជាក់ថាការផ្លាស់ប្ដូររចនាបានបង្កើតលទ្ធផលដែលរំពឹងទុក ឬសម្រាប់រកឃើញការថយចុះគុណភាពដែលមិនបានចង់បាន។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `before_url` | string | បាទ/ចាស | URL នៃទំព័រដែលត្រូវចាប់យកជា ស្ថានភាព "មុន" |
| `after_url` | string | បាទ/ចាស | URL នៃទំព័រដែលត្រូវចាប់យកជា ស្ថានភាព "ក្រោយ"។ អាចជា URL ដូចគ្នា ប្រសិនបើប្រៀបធៀបតាមពេលវេលា |
| `width` | integer | ទេ | ទទឹង viewport សម្រាប់ការចាប់យកទាំងពីរ។ លំនាំដើម `1280` |
| `threshold` | float | ទេ | កម្រិតភាពខុសគ្នារបស់ pixel (0.0–1.0)។ Pixel នៅក្នុងកម្រិតអនុគ្រោះនេះ ត្រូវបានចាត់ទុកថាមិនផ្លាស់ប្ដូរ។ លំនាំដើម `0.1` |

**ត្រឡប់**

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

`diff_score` ចំនួន `0.0` មានន័យថាគ្មានការផ្លាស់ប្ដូរដែលមើលឃើញ; `1.0` មានន័យថា pixel ទាំងអស់បានផ្លាស់ប្ដូរ។

---

### `review_page_design` {#reviewpagedesign}

ចាប់យករូបថតអេក្រង់នៃទំព័រមួយ ហើយផ្ញើវាទៅកាន់ម៉ូដែលភាសាសម្រាប់ការវិភាគរូបភាព។ ត្រឡប់ការវាយតម្លៃមានរចនាសម្ព័ន្ធ ដែលគ្របដណ្ដប់លើប្លង់ អក្សរសាស្ត្រ ការប្រើប្រាស់ពណ៌ និងកង្វល់អំពីភាពងាយស្រួលប្រើប្រាស់។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | ការពិពណ៌នា |
|---|---|---|---|
| `url` | string | បាទ/ចាស | URL ពេញលេញនៃទំព័រដែលត្រូវពិនិត្យមើល |
| `focus` | string | ទេ | បញ្ជីផ្នែកពិនិត្យមើលដែលបំបែកដោយក្បៀស ដើម្បីផ្ដោតលើ៖ `layout`, `typography`, `colour`, `accessibility`, `mobile`។ លំនាំដើម៖ គ្រប់ផ្នែកទាំងអស់ |
| `width` | integer | ទេ | ទទឹង viewport។ លំនាំដើម `1280` |

**ត្រឡប់**

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

## សមត្ថភាពដែលអាចដំឡើងបាន {#installable-abilities}

បញ្ជីចុះឈ្មោះសមត្ថភាពដែលអាចដំឡើងបាន អនុញ្ញាតឱ្យអ្នកពង្រីក agent ជាមួយកញ្ចប់សមត្ថភាពបន្ថែម ដែលចែកចាយជា WordPress plugins។ កញ្ចប់នីមួយៗចុះឈ្មោះសមត្ថភាពមួយ ឬច្រើនដោយប្រើ API សមត្ថភាពស្តង់ដារ។

### `list_available_abilities` {#listavailableabilities}

ត្រឡប់កាតាឡុកនៃកញ្ចប់សមត្ថភាពដែលមានសម្រាប់ដំឡើងពីបញ្ជីចុះឈ្មោះ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | សេចក្ដីពិពណ៌នា |
|---|---|---|---|
| `category` | string | ទេ | ត្រងតាមប្រភេទ៖ `ecommerce`, `seo`, `media`, `social`, `developer` |

**ត្រឡប់**

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

ទាញយក និងបើកដំណើរការកញ្ចប់សមត្ថភាពពីបញ្ជីចុះឈ្មោះ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | សេចក្ដីពិពណ៌នា |
|---|---|---|---|
| `slug` | string | បាទ/ចាស | slug របស់ plugin កញ្ចប់សមត្ថភាព |

**ត្រឡប់** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

សួរបញ្ជីចុះឈ្មោះសមត្ថភាព ដើម្បីរក plugin ល្អបំផុតសម្រាប់ករណីប្រើប្រាស់ដែលបានពិពណ៌នា ហើយអាចដំឡើងវាបានផងដែរ។

**ប៉ារ៉ាម៉ែត្រ**

| ប៉ារ៉ាម៉ែត្រ | ប្រភេទ | ត្រូវការ | សេចក្ដីពិពណ៌នា |
|---|---|---|---|
| `description` | string | បាទ/ចាស | ការពិពណ៌នាជាភាសាធម្មជាតិនៃមុខងារដែលចង់បាន |
| `install` | boolean | ទេ | ប្រសិនបើ `true` នឹងដំឡើង plugin ដែលបានណែនាំភ្លាមៗ។ លំនាំដើម `false` |

**ឧទាហរណ៍**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**ត្រឡប់**

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
