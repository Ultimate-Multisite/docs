---
title: ক্ষমতাৰ উল্লেখ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# সক্ষমতাগুলির তালিকা

Abilities হলো সেই মূল কাজগুলো যা Gratis AI Agent আপনার WordPress ইনস্টলেশনে ব্যবহার করতে পারে। প্রতিটি ability একটি রেজিস্টার্ড PHP class, যা একটি JSON schema প্রকাশ করে—এজেন্ট রানটাইমে এই schema-টি পড়ে বুঝতে পারে কোন প্যারামিটারগুলো প্রয়োজন এবং ability টি কী রিটার্ন করবে।

এই পেজে Gratis AI Agent v1.9.0 এর সাথে আসা সমস্ত ability নথিভুক্ত করা হয়েছে।

---

## কাস্টম পোস্ট টাইপস (Custom Post Types) {#custom-post-types}

এই ability গুলো এজেন্টের মাধ্যমে রেজিস্টার করা কাস্টম পোস্ট টাইপগুলো পরিচালনা করে। রেজিস্ট্রেশনগুলো WordPress options table-এ সংরক্ষণ করা হয়, যাতে প্লাগইন নিষ্ক্রিয় বা সক্রিয় করার পরেও সেগুলো টিকে থাকে।

### `register_post_type` {#registerposttype}

একটি নতুন কাস্টম পোস্ট টাইপ রেজিস্টার করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | পোস্ট টাইপের কী (সর্বোচ্চ ২০ অক্ষর, বড় হাতের অক্ষর বা স্পেস নেই) |
| `singular_label` | string | Yes | মানুষের পড়ার উপযোগী একক নাম, যেমন: `Portfolio Item` |
| `plural_label` | string | Yes | মানুষের পড়ার উপযোগী বহুবচন নাম, যেমন: `Portfolio Items` |
| `public` | boolean | No | পোস্ট টাইপটি পাবলিক অ্যাক্সেসযোগ্য কিনা। ডিফল্ট `true` |
| `supports` | array | No | সমর্থিত ফিচারগুলো: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`। ডিফল্ট `["title","editor"]` |
| `has_archive` | boolean | No | পোস্ট টাইপের আর্কাইভ পেজ চালু আছে কিনা। ডিফল্ট `false` |
| `menu_icon` | string | No | অ্যাডমিন মেনুর আইকনের জন্য Dashicons ক্লাস বা URL। ডিফল্ট `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | পোস্ট টাইপের জন্য URL slug। ডিফল্ট হলো `slug` |

**Example**

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

**Returns** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

এজেন্ট দ্বারা রেজিস্টার করা সমস্ত কাস্টম পোস্ট টাইপ রিটার্ন করে।

**Parameters** — কোনো প্যারামিটার নেই

**Returns**

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

এজেন্ট দ্বারা পূর্বে রেজিস্টার করা একটি কাস্টম পোস্ট টাইপ আনরেজিস্টার করে। সেই ধরণের বিদ্যমান পোস্টগুলো ডেটাবেসে থাকবে কিন্তু আর পোস্ট টাইপের মাধ্যমে অ্যাক্সেস করা যাবে না।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | সরানোর জন্য পোস্ট টাইপের কী |

**Returns** `{ "success": true, "slug": "portfolio" }`

---

## কাস্টম ট্যাক্সোনমি (Custom Taxonomies) {#custom-taxonomies}

এই ability গুলো কাস্টম ট্যাক্সোনমি পরিচালনা করে। CPT-এর মতোই, ট্যাক্সোনমি রেজিস্ট্রেশনগুলো সংরক্ষণ করা হয়।

### `register_taxonomy` {#registertaxonomy}

একটি নতুন কাস্টম ট্যাক্সোনমি রেজিস্টার করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ট্যাক্সোনমির কী (সর্বোচ্চ ৩২ অক্ষর) |
| `singular_label` | string | Yes | মানুষের পড়ার উপযোগী একক নাম, যেমন: `Project Category` |
| `plural_label` | string | Yes | মানুষের পড়ার উপযোগী বহুবচন নাম, যেমন: `Project Categories` |
| `post_types` | array | Yes | এই ট্যাক্সোনমিটি কোন পোস্ট টাইপের সাথে যুক্ত হবে তার স্লগগুলো |
| `hierarchical` | boolean | No | ক্যাটাগরি-স্টাইলের জন্য `true`, ট্যাগ-স্টাইলের জন্য `false`। ডিফল্ট `true` |
| `public` | boolean | No | টার্মগুলো পাবলিক অ্যাক্সেসযোগ্য কিনা। ডিফল্ট `true` |
| `rewrite_slug` | string | No | ট্যাক্সোনমির জন্য URL slug। ডিফল্ট হলো `slug` |

**Example**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**Returns** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

এজেন্ট দ্বারা রেজিস্টার করা সমস্ত কাস্টম ট্যাক্সোনমি রিটার্ন করে।

**Parameters** — কোনো প্যারামিটার নেই

**Returns**

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

এজেন্ট দ্বারা পূর্বে রেজিস্টার করা একটি কাস্টম ট্যাক্সোনমি আনরেজিস্টার করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | সরানোর জন্য ট্যাক্সোনমির কী |

**Returns** `{ "success": true, "slug": "project-category" }`

---

## ডিজাইন সিস্টেম (Design System) {#design-system}

ডিজাইন সিস্টেম ability গুলো WordPress সাইটের ভিজ্যুয়াল উপস্থাপনা পরিবর্তন করে—কাস্টম CSS থেকে ব্লক প্যাটার্ন এবং সাইট লোগো পর্যন্ত।

### `inject_custom_css` {#injectcustomcss}

`wp_add_inline_style` এর মাধ্যমে সাইটের `<head>`-এ CSS যোগ করে। CSS টি `gratis_ai_agent_custom_css` অপশনে সংরক্ষণ করা হয় এবং ability রিসেট করার সময় এটি পরিষ্কারভাবে মুছে ফেলা হয়।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | ইনজেক্ট করার জন্য বৈধ CSS |
| `label` | string | No | এই CSS ব্লকের মানুষের পড়ার উপযোগী লেবেল, ডিবাগ লগে ব্যবহৃত হয়। ডিফল্ট `"agent-injected"` |
| `replace` | boolean | No | যদি এটি `true` হয়, তবে এটি পূর্বে ইনজেক্ট করা সমস্ত CSS প্রতিস্থাপন করে। ডিফল্ট `false` (যোগ করে) |

**Example**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**Returns** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

WordPress প্যাটার্ন লাইব্রেরিতে একটি পুনঃব্যবহারযোগ্য ব্লক প্যাটার্ন রেজিস্টার করে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | প্যাটার্নের শনাক্তকারী, যেমন: `gratis/hero-dark` |
| `title` | string | Yes | এডিটরে দেখানো মানুষের পড়ার উপযোগী প্যাটার্ন নাম |
| `content` | string | Yes | প্যাটার্নের জন্য সিরিয়ালাইজ করা ব্লক মার্কআপ (HTML) |
| `categories` | array | No | প্যাটার্নের ক্যাটাগরি স্লগ, যেমন: `["featured", "hero"]` |
| `description` | string | No | প্যাটার্ন পিকারে দেখানো সংক্ষিপ্ত বিবরণ |
| `keywords` | array | No | সার্চ কীওয়ার্ড |

**Returns** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

এজেন্ট দ্বারা রেজিস্টার করা সমস্ত ব্লক প্যাটার্ন তালিকাভুক্ত করে।

**Parameters** — কোনো প্যারামিটার নেই

### `set_site_logo` {#setsitelogo}

WordPress-ৰ সাইট লোগো এটা নিৰ্দিষ্ট attachment ID বা ৰিমোট ইমেজ URL-লৈ সলনি কৰে। যদি কোনো URL দিয়া হয়, তেন্তে সেই ছবিখন ডাউনলোড কৰি Media Library-ত আমদানি কৰা হয়।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | এতিয়া থকা Media Library attachment-ৰ ID |
| `url` | string | No | লোগো হিচাপে আমদানি কৰিবলৈ আৰু সেট কৰিবলৈ ৰিমোট ইমেজ URL |

`attachment_id` বা `url`-ৰ ভিতৰত এটা দিয়া থাকিব লাগিব।

**Returns** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

فعালুক থকা theme-ৰ `theme.json` (বা `global-styles`-এ) এটা নাম দিয়া ৰঙ/টাইপोग्राफी প্ৰেসেটত সলনি কৰে। এই preset-বোৰ Gratis AI Agent দলৰ দ্বাৰা সংকলিত আৰু মেইনটেইন কৰা বান্ডিল।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Preset নাম, যেনে: `minimal-dark`, `warm-editorial`, `corporate-blue` |
| `merge` | boolean | No | যদি `true` হয়, তেন্তে নতুন ভ্যালু দিয়াৰ পৰিৱৰ্তে موجوده ভ্যালুৰ সৈতে মিশ্ৰণ কৰা হ'ব। ডিফল্ট `false` |

**উপলব্ধ preset-বোৰ**

| Preset | Description |
|---|---|
| `minimal-dark` | প্ৰায় কালচে পটভূমি, ধুনীয়া টেক্সট, এটাAccent ৰঙ |
| `warm-editorial` | উষ্ণ অফ-ৱাইথ পটভূমি, serif হেডিং, মাটিৰ ৰঙৰ accent ৰঙ |
| `corporate-blue` | নেভি আৰু বগা ৰঙৰ পঞ্জী, পেশাদাৰ টাইপोग्राफी |
| `vibrant-startup` | উজ্জ্বল gradient, গোল কোণ, আধুনিক sans-serif টাইপ |
| `classic-blog` | নিউট্রাল ধূসৰ ৰঙ, আৰামদায়ক line-height, পৰম্পৰাগত layout spacing |

**Returns** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles {#global-styles}

Global Styles-ৰ ক্ষমতা থিমৰ `theme.json` ভ্যালু পঢ়ি আৰু লিখিব পাৰে WordPress Global Styles API-ৰ জৰিয়তে, যিয়ে সকলো block আৰু template-ত প্ৰভাৱ পেলায়।

### `get_global_styles` {#getglobalstyles}

فعালুক থকা global styles কনফিগুৰেশ্যনটো পুনৰুদ্ধাৰ কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | এটা নিৰ্দিষ্ট ভ্যালুৰ বাবে JSON pointer, যেনে: `/color/palette` বা `/typography/fontSizes`। যদি এটি বাদ দিয়া হয়, তেন্তে সম্পূৰ্ণ objectটো পুনৰুদ্ধাৰ কৰা হয়। |

**Returns** সম্পূৰ্ণ global styles object বা `path`-ত থকা ভ্যালুটি।

---

### `set_global_styles` {#setglobalstyles}

global styles কনফিগুৰেশ্যনৰ এটা বা তাতকৈ বেছি ভ্যালু আপডেট কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | সেট কৰিবলগীয়া ভ্যালুৰ বাবে JSON pointer, যেনে: `/color/palette` |
| `value` | any | Yes | নতুন ভ্যালুটি |

**Example** — palette-ত এটা ৰঙ যোগ কৰা

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**Returns** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

এতিয়া agent-ৰ দ্বাৰা কৰা সকলো global styles সলনি বাতিল কৰি থিমৰ ডিফল্ট ৰূপত পুনৰুদ্ধাৰ কৰে।

**Parameters** — নাই

**Returns** `{ "success": true }`

---

## Navigation Menus {#navigation-menus}

Navigation Menu ক্ষমতা WordPress-ৰ nav মেনু আৰু তাৰ আইটাৰবোৰ সৃষ্টি কৰিবলৈ আৰু পৰিচালনা কৰিবলৈ সহায় কৰে।

### `create_menu` {#createmenu}

এটা নতুন WordPress navigation menu সৃষ্টি কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | মেনুৰ নাম, যেনে: `Primary Navigation` |
| `location` | string | No | এই মেনুটো কোন থিম লোকেচনত যোগ কৰিব লাগে, যেনে: `primary` |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

এটা মেনুৰ নাম সলনি কৰে বা ইয়াক এটা theme location-ত পুনৰ নিৰ্বাচন কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | আপডেট কৰিবলগীয়া মেনুটোৰ ID |
| `name` | string | No | নতুন মেনুৰ নাম |
| `location` | string | No | যোগ কৰিব বা পুনৰ নিৰ্বাচন কৰিবলগীয়া থিম লোকেচন |

**Returns** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

এটা موجوده navigation menu-ত এটা আইটা যোগ কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | লক্ষ্য মেনুটোৰ ID |
| `type` | string | Yes | আইটাৰ ধৰণ: `custom`, `post_type`, বা `taxonomy` |
| `title` | string | No | মেনু আইটাৰ লেবেল (custom type-ৰ বাবে প্ৰয়োজনীয়) |
| `url` | string | No | custom আইটাৰ বাবে URL |
| `object_id` | integer | No | post\_type/taxonomy আইটাৰ বাবে Post ID বা term ID |
| `parent_id` | integer | No | এই আইটাটো কোন আইটাৰ তলত ৰাখিব লাগে |
| `position` | integer | No | মেনুৰ ভিতৰত শূন্য-ভিত্তিক স্থান (Zero-based position) |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

এটা navigation menu-ৰ পৰা এটা আইটা আঁতৰ কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | আঁতৰ কৰিবলগীয়া মেনু আইটাৰ ID |

**Returns** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

সকলো WordPress navigation menu-বোৰ তালিকাভুক্ত কৰে, তেওঁলোকৰ নিৰ্বাচিত theme location সহ।

**Parameters** — নাই

**Returns**

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

## Options Management {#options-management}

Options ক্ষমতা `get_option` / `update_option`-ৰ জৰিয়তে WordPress option পঢ়ি আৰু লিখিব পাৰে। এটা built-in safety blocklist আছে যিয়ে গুৰুত্বপূৰ্ণ সেটিংবোৰ ভুলভাৱে সলনি কৰা এৰা থাকে।

### `get_option` {#getoption}

এটা WordPress option পঢ়ে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key, যেনে: `blogname` |

**Returns** `{ "option_name": "blogname", "value": "My Site" }`

যদি `option_name`-টো safety blocklist-ত থাকে তেন্তে এটা error return কৰা হয়।

---

### `set_option` {#setoption}

এটা WordPress option লিখি ৰাখে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key |
| `value` | any | Yes | নতুন ভ্যালুটি (array/object-ৰ বাবে স্বয়ংক্রিয়ভাবে serialise হয়) |
| `autoload` | string | No | `"yes"` বা `"no"`. ডিফল্টটো موجوده autoload setting ৰক্ষা কৰে |

Returns an error if `option_name` is on the safety blocklist.

**Returns** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

WordPress option delete কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | Delete কৰিবলগীয়া option key |

যদি `option_name` সেফটি ব্লকৰ তালিকাৰ ভিতৰত থাকে, তেন্তে এটা ভুল (error) ঘটি।

**Returns** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

এটা pattern-ৰ সৈতে মিল থকা WordPress option-সমূহ তালিকাভুক্ত কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | No | option নাম ফিল্টাৰ কৰিবলৈ SQL LIKE pattern, যেনে: `gratis_%`। যদি এটি বাদ দিয়া হয়, তেন্তে সকলো option দেখুৱাব (বৰ ডাঙৰ database-ৰ ক্ষেত্ৰত সাবধানে ব্যৱহাৰ কৰক)। |
| `limit` | integer | No | ফলাফলৰ পৰা সর্বাধিক সংখ্যা। ডিফল্ট `50`, maximum `500` |

**Returns**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management {#content-management}

Content Management ক্ষমতাৰ দ্বাৰা WordPress post আৰু page সৃষ্টি কৰিব পাৰি আৰু সম্পাদনা কৰিব পাৰি। Post ID return কৰা হয় যাতে multi-ability plan-ৰ পিছৰ পদক্ষেপবোৰে সৃষ্টি কৰা content-ক উল্লেখ गर्न পাৰে।

### `create_post` {#createpost}

এটা নতুন WordPress post, page বা custom post type entry সৃষ্টি কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | Post ৰ টাইটেল |
| `content` | string | No | Post বডি — plain text, HTML, বা serialised block markup গ্ৰহণ কৰে |
| `status` | string | No | `draft`, `publish`, `pending`, `private`। ডিফল্ট `draft` |
| `post_type` | string | No | Post type slug, যেনে: `post`, `page`, বা যিকোনো register কৰা CPT। ডিফল্ট `post` |
| `excerpt` | string | No | archives আৰু search result-ত দেখুওৱা চুটি সাৰাংশ (summary) |
| `categories` | array | No | নিৰ্বাচন কৰিবলগীয়া category নাম বা ID ৰ তালিকা |
| `tags` | array | No | নিৰ্বাচন কৰিবলগীয়া tag নাম বা ID ৰ তালিকা |
| `author` | integer | No | post author হিচাপে set কৰিবলগীয়া WordPress user ID। ডিফল্ট বৰ্তমানৰ user |
| `date` | string | No | ISO 8601 format-ত publish date, যেনে: `2026-05-01T09:00:00` |
| `page_template` | string | No | এই post বা page-লৈ নিৰ্বাচন কৰিবলগীয়া template file, যেনে: `page-full-width.php`। যদি `post_type` `page` বা এটা CPT হয় যিয়ে page templates সমৰ্থন কৰে, তেন্তে ইয়াৰহে অৰ্থপূৰ্ণ। |

**Example**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**Returns** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

এটা বিদ্যমান WordPress post বা page আপডেট কৰে।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | আপডেট কৰিবলগীয়া post-ৰ ID |
| `title` | string | No | নতুন post টাইটেল |
| `content` | string | No | নতুন post বডি |
| `status` | string | No | নতুন status: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | No | নতুন excerpt |
| `categories` | array | No | সম্পূৰ্ণ category তালিকা এই নাম বা ID ৰ তালিকাৰে প্রতিস্থাপন কৰক |
| `tags` | array | No | সম্পূৰ্ণ tag তালিকা এই নাম বা ID ৰ তালিকাৰে প্রতিস্থাপন কৰক |
| `page_template` | string | No | এই post বা page-লৈ নিৰ্বাচন কৰিবলগীয়া নতুন template file, যেনে: `page-full-width.php`। template assignment আঁতৰোৱাৰ বাবে এটা খালি string প্ৰেছ কৰক আৰু theme default-লৈ উভতি যাওক। |

**Example** — সৃষ্টিৰ পিছত template সলনি কৰা

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**Returns** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

একোটা ability call-ত বহুতো post সৃষ্টি কৰে, যি site build বা bulk content import সময়ত round-trips কমায়। Post-সমূহ একেৰাহে সৃষ্টি কৰা হয়; যদি এটা ব্যর্থ হয়, তেতিয়া আনবোৰ চলি থাকে আৰু সেই বিফলতা ফলাফলৰ array-ত জনোৱা হয়।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | Yes | post objects ৰ তালিকা, য'ত প্ৰতিটো object `create_post`-ৰ দৰে একেই parameters গ্ৰহণ কৰে |
| `stop_on_error` | boolean | No | যদি `true` হয়, প্ৰথম বিফলতাৰ পিছত প্ৰক্ৰিয়াক বন্ধ কৰি দিয়া হয়। ডিফল্ট `false` |

**Example**

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

**Returns**

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

এটা বিদ্যমান post বা page-লৈ এটা featured image (post thumbnail) নিৰ্বাচন কৰে। ই এটা existing Media Library attachment ID বা remote image URL গ্ৰহণ কৰে; যদি URL দিয়া হয়, তেন্তে ছবিখন ডাউনলোড কৰি স্বয়ংক্রিয়ভাৱে import হৈ যায়।

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | Yes | আপডেট কৰিবলগীয়া post বা page-ৰ ID |
| `attachment_id` | integer | No | এটা existing Media Library attachment-ৰ ID |
| `url` | string | No | featured image হিচাপে import আৰু set কৰিবলৈ remote image URL |
| `alt_text` | string | No | যদি URL ৰ পৰা import কৰা হয়, তেন্তে attachment-ত প্ৰয়োগ কৰিবলগীয়া alt text |

`attachment_id` বা `url`-ৰ ভিতৰত এটা দিয়া থাকিব লাগিব।

**Returns** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

active form plugin (Contact Form 7, WPForms, Fluent Forms, বা Gravity Forms যিটো install কৰা আছে) ব্যৱহাৰ কৰি এটা contact form সৃষ্টি কৰে। ই এটা shortcode return কৰে যি যেকোনো post বা page-ত embed কৰিব পাৰি।

**Parameters**

ভিজ্যুয়াল রিভিউ

ভিজ্যুয়াল রিভিউ ক্ষমতাগুলি এজেন্টকে লাইভ পেজগুলির স্ক্রিনশট নিতে এবং সেগুলিকে বিশ্লেষণ করতে সাহায্য করে। এর ফলে কোনো ব্রাউজার এক্সটেনশন ছাড়াই স্বয়ংক্রিয় ডিজাইন পর্যালোচনা, আগে/পরে তুলনা এবং ভিজ্যুয়াল রেগ্রেশন চেক করা সম্ভব হয়।

### `capture_screenshot` {#visual-review}

এটি একটি সার্ভার-সাইড হেডলেস ব্রাউজার ব্যবহার করে নির্দিষ্ট URL থেকে ওয়ার্ডপ্রেস পেজের স্ক্রিনশট নেয়। ছবিটি মিডিয়া লাইব্রেরিতে সেভ করা হয় এবং একটি CDN URL ফেরত দেওয়া হয়।

**প্যারামিটারসমূহ**

| প্যারামিটার | টাইপ | প্রয়োজনীয় | বর্ণনা |
|---|---|---|---|
| `url` | string | হ্যাঁ | স্ক্রিনশট নিতে হবে পেজের সম্পূর্ণ URL, যেমন: `https://example.com/about/` |
| `width` | integer | না | পিক্সেল আকারে ভিউপোর্ট প্রস্থ। ডিফল্ট `1280` |
| `height` | integer | না | পিক্সেল আকারে ভিউপোর্ট উচ্চতা। ডিফল্ট `800` |
| `full_page` | boolean | না | শুধুমাত্র ভিউপোর্ট নয়, পুরো স্ক্রলযোগ্য পেজটি ক্যাপচার করবে। ডিফল্ট `false` |
| `delay_ms` | integer | না | পেজ লোড হওয়ার পর কত মিলিসেকেন্ড অপেক্ষা করতে হবে ক্যাপচারের জন্য, অ্যানিমেটেড কন্টেন্টের জন্য উপযোগী। ডিফল্ট `500` |
| `label` | string | না | মিডিয়া লাইব্রেরিতে অ্যাটাচমেন্টের সাথে সংরক্ষিত মানুষের পড়ার উপযোগী লেবেল। |

**ফেরত মান (Returns)**

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

### `compare_screenshots` {#capturescreenshot}

এটি দুটি স্ক্রিনশট নেয় এবং একটি ভিজ্যুয়াল ডিফারেন্স স্কোর এবং পরিবর্তিত অঞ্চল হাইলাইট করে একটি ডিফারেন্স ইমেজ ফেরত দেয়। ডিজাইনের পরিবর্তন প্রত্যাশিত ফলাফল তৈরি করেছে কিনা তা নিশ্চিত করতে বা অনিচ্ছাকৃত রেগ্রেশন সনাক্ত করার জন্য এটি খুব দরকারী।

**প্যারামিটারসমূহ**

| প্যারামিটার | টাইপ | প্রয়োজনীয় | বর্ণনা |
|---|---|---|---|
| `before_url` | string | হ্যাঁ | "আগে" অবস্থা হিসাবে ক্যাপচার করার পেজের URL। |
| `after_url` | string | হ্যাঁ | "পরে" অবস্থা হিসাবে ক্যাপচার করার পেজের URL। যদি সময়ের সাথে তুলনা করা হয় তবে এটি একই URL হতে পারে। |
| `width` | integer | না | দুটি ক্যাপচারের জন্য ভিউপোর্ট প্রস্থ। ডিফল্ট `1280` |
| `threshold` | float | না | পিক্সেল-ভিত্তিক পার্থক্য সীমা (০.০–১.০)। এই সহনশীলতার মধ্যে থাকা পিক্সেলগুলিকে অপরিবর্তিত হিসাবে বিবেচনা করা হয়। ডিফল্ট `0.1` |

**ফেরত মান (Returns)**

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

`diff_score` যদি `0.0` হয় তার মানে কোনো দৃশ্যমান পরিবর্তন নেই; `1.0` মানে প্রতিটি পিক্সেল পরিবর্তিত হয়েছে।

---

### `review_page_design` {#comparescreenshots}

এটি একটি পেজের স্ক্রিনশট নেয় এবং ভিজ্যুয়াল বিশ্লেষণের জন্য ভাষা মডেলের কাছে পাঠায়। এটি লেআউট, টাইপোগ্রাফি, রঙের ব্যবহার এবং অ্যাক্সেসিবিলিটির উদ্বেগের উপর কভার করে একটি কাঠামোগত মূল্যায়ন প্রদান করে।

**প্যারামিটারসমূহ**

| প্যারামিটার | টাইপ | প্রয়োজনীয় | বর্ণনা |
|---|---|---|---|
| `url` | string | হ্যাঁ | পর্যালোচনা করার জন্য পেজের সম্পূর্ণ URL। |
| `focus` | string | না | পর্যালোচনার জন্য জোর দেওয়ার ক্ষেত্রে কমা দ্বারা আলাদা করা তালিকা: `layout`, `typography`, `colour`, `accessibility`, `mobile`। ডিফল্ট: সমস্ত ক্ষেত্র। |
| `width` | integer | না | ভিউপোর্ট প্রস্থ। ডিফল্ট `1280` |

**ফেরত মান (Returns)**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "পেজের কাঠামো পরিষ্কার এবং পাঠযোগ্য। দুটি অ্যাক্সেসিবিলিটি সমস্যা সনাক্ত করা হয়েছে।",
    "layout": "ভালো ভিজ্যুয়াল হায়ারার্কি। হিরো সেকশনটি বিশিষ্ট।",
    "typography": "বডি টেক্সট ১৫ পিক্সেল — পাঠযোগ্যতার জন্য ১৬ পিক্সেল পর্যন্ত বাড়ানোর কথা বিবেচনা করুন।",
    "colour": "CTA বাটনের কনট্রাস্ট অনুপাত (#4a90e2 এর উপর #fff) হলো ৩.১:১ — যা WCAG AA মান ৪.৫:১ এর নিচে।",
    "accessibility": ["CTA বাটনে কম কনট্রাস্ট", "হিরো ইমেজে অনুপস্থিত Alt টেক্সট"],
    "suggestions": ["WCAG AA পাস করার জন্য CTA বাটনটিকে #1a5cb0 এ গাঢ় করুন", "হিরো ইমেজের জন্য বর্ণনামূলক Alt টেক্সট যোগ করুন"]
  }
}
```

---

## ইনস্টলযোগ্য ক্ষমতা (Installable Abilities) {#reviewpagedesign}

ইনস্টলেবল অ্যাবিলিটিজ রেজিস্ট্রি আপনাকে ওয়ার্ডপ্রেস প্লাগইন হিসাবে বিতরণ করা অতিরিক্ত অ্যাবিলিটি প্যাক দিয়ে এজেন্টকে প্রসারিত করতে দেয়। প্রতিটি প্যাক স্ট্যান্ডার্ড অ্যাবিলিটি API ব্যবহার করে একটি বা তার বেশি ক্ষমতা নিবন্ধন করে।

### `list_available_abilities` {#installable-abilities}

রেজিস্ট্রির থেকে ইনস্টল করার জন্য উপলব্ধ অ্যাবিলিটি প্যাকগুলির তালিকা ফেরত দেয়।

**প্যারামিটারসমূহ**

| প্যারামিটার | টাইপ | আবশ্যক | বর্ণনা |
|---|---|---|---|
| `category` | string | না | ক্যাটাগরি অনুযায়ী ফিল্টার করুন: `ecommerce`, `seo`, `media`, `social`, `developer` |

**ফেরত (Returns)**

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

### `install_ability` {#listavailableabilities}

রেজিস্ট্রি থেকে একটি অ্যাবিলিটি প্যাক ডাউনলোড এবং সক্রিয় করে।

**প্যারামিটারসমূহ (Parameters)**

| প্যারামিটার | টাইপ | আবশ্যক | বর্ণনা |
|---|---|---|---|
| `slug` | string | হ্যাঁ | অ্যাবিলিটি প্যাক প্লাগইন স্লগ |

**ফেরত:** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#installability}

একটি নির্দিষ্ট ব্যবহারের ক্ষেত্র এবং ঐচ্ছিকভাবে সেটি ইনস্টল করার জন্য সেরা প্লাগইনটি খুঁজে বের করতে অ্যাবিলিটি রেজিস্ট্রি অনুসন্ধান করে।

**প্যারামিটারসমূহ (Parameters)**

| প্যারামিটার | টাইপ | আবশ্যক | বর্ণনা |
|---|---|---|---|
| `description` | string | হ্যাঁ | কাঙ্ক্ষিত কার্যকারিতার স্বাভাবিক ভাষার বর্ণনা |
| `install` | boolean | না | যদি এটি `true` হয়, তবে প্রস্তাবিত প্লাগইনটি অবিলম্বে ইনস্টল করা হবে। ডিফল্ট মান `false` |

**উদাহরণ (Example)**

```json
{
  "description": "আমার একটি ফাইল আপলোড সমর্থন সহ কন্টাক্ট ফর্ম এবং স্প্যাম সুরক্ষা প্রয়োজন",
  "install": false
}
```

**ফেরত:**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "ব্যাপকভাবে গৃহীত, ফাইল আপলোড সমর্থন করে এবং স্প্যাম ফিল্টারিংয়ের জন্য Akismet এর সাথে ইন্টিগ্রেট করে।",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
