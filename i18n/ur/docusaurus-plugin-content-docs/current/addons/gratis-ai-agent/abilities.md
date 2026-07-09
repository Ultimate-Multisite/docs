---
title: صلاحیتوں کا حوالہ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# صلاحیتوں کا حوالہ

صلاحیتیں وہ بنیادی اعمال ہیں جنہیں Gratis AI Agent آپ کی WordPress تنصیب پر چلا سکتا ہے۔ ہر صلاحیت ایک رجسٹرڈ PHP class ہے جو ایک JSON schema ظاہر کرتی ہے — agent رن ٹائم پر اس schema کو پڑھتا ہے تاکہ سمجھ سکے کہ کون سے parameters درکار ہیں اور صلاحیت کیا واپس کرتی ہے۔

یہ صفحہ Gratis AI Agent v1.9.0 کے ساتھ آنے والی تمام صلاحیتوں کی دستاویز فراہم کرتا ہے۔

---

## حسبِ ضرورت پوسٹ اقسام

یہ صلاحیتیں agent کے ذریعے رجسٹر کی گئی حسبِ ضرورت پوسٹ اقسام (CPTs) کو منظم کرتی ہیں۔ registrations کو WordPress options table میں محفوظ رکھا جاتا ہے تاکہ وہ plugin کے غیر فعال اور دوبارہ فعال ہونے کے بعد بھی برقرار رہیں۔

### `register_post_type`

ایک نئی حسبِ ضرورت پوسٹ قسم رجسٹر کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | پوسٹ قسم کی کلید (زیادہ سے زیادہ 20 حروف، بڑے حروف نہیں، خالی جگہیں نہیں) |
| `singular_label` | string | Yes | انسان کے لیے قابلِ فہم واحد نام، مثلاً `Portfolio Item` |
| `plural_label` | string | Yes | انسان کے لیے قابلِ فہم جمع نام، مثلاً `Portfolio Items` |
| `public` | boolean | No | آیا پوسٹ قسم عوامی طور پر قابلِ رسائی ہے۔ Default `true` |
| `supports` | array | No | معاونت کے لیے خصوصیات: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`۔ Default `["title","editor"]` |
| `has_archive` | boolean | No | آیا پوسٹ قسم کا archive صفحہ فعال ہے۔ Default `false` |
| `menu_icon` | string | No | admin menu icon کے لیے Dashicons class یا URL۔ Default `"dashicons-admin-post"` |
| `rewrite_slug` | string | No | پوسٹ قسم کے لیے URL slug۔ Defaults to `slug` |

**مثال**

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

**واپسی** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

agent کے ذریعے رجسٹر کی گئی تمام حسبِ ضرورت پوسٹ اقسام واپس کرتا ہے۔

**Parameters** — کوئی نہیں

**واپسی**

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

agent کے ذریعے پہلے رجسٹر کی گئی حسبِ ضرورت پوسٹ قسم کو unregister کرتا ہے۔ اس قسم کی موجودہ پوسٹس database میں رہتی ہیں لیکن اب پوسٹ قسم کے ذریعے قابلِ رسائی نہیں رہتیں۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ہٹانے کے لیے پوسٹ قسم کی کلید |

**واپسی** `{ "success": true, "slug": "portfolio" }`

---

## حسبِ ضرورت Taxonomies

یہ صلاحیتیں حسبِ ضرورت taxonomies کو منظم کرتی ہیں۔ CPTs کی طرح، taxonomy registrations بھی محفوظ رکھی جاتی ہیں۔

### `register_taxonomy`

ایک نئی حسبِ ضرورت taxonomy رجسٹر کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | taxonomy کی کلید (زیادہ سے زیادہ 32 حروف) |
| `singular_label` | string | Yes | انسان کے لیے قابلِ فہم واحد نام، مثلاً `Project Category` |
| `plural_label` | string | Yes | انسان کے لیے قابلِ فہم جمع نام، مثلاً `Project Categories` |
| `post_types` | array | Yes | پوسٹ قسم slugs جن کے ساتھ یہ taxonomy منسلک ہونی چاہیے |
| `hierarchical` | boolean | No | category-style کے لیے `true`، tag-style کے لیے `false`۔ Default `true` |
| `public` | boolean | No | آیا terms عوامی طور پر قابلِ رسائی ہیں۔ Default `true` |
| `rewrite_slug` | string | No | taxonomy کے لیے URL slug۔ Defaults to `slug` |

**مثال**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**واپسی** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

agent کے ذریعے رجسٹر کی گئی تمام حسبِ ضرورت taxonomies واپس کرتا ہے۔

**Parameters** — کوئی نہیں

**واپسی**

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

agent کے ذریعے پہلے رجسٹر کی گئی حسبِ ضرورت taxonomy کو unregister کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | ہٹانے کے لیے taxonomy کی کلید |

**واپسی** `{ "success": true, "slug": "project-category" }`

---

## ڈیزائن نظام

ڈیزائن نظام کی صلاحیتیں WordPress site کی بصری پیشکش میں تبدیلی کرتی ہیں — حسبِ ضرورت CSS سے لے کر block patterns اور site logo تک۔

### `inject_custom_css`

`wp_add_inline_style` کے ذریعے site کے `<head>` میں CSS شامل کرتا ہے۔ CSS کو `gratis_ai_agent_custom_css` option میں محفوظ کیا جاتا ہے اور صلاحیت reset ہونے پر صاف طور پر dequeued ہو جاتی ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `css` | string | Yes | inject کرنے کے لیے درست CSS |
| `label` | string | No | اس CSS block کے لیے انسان کے لیے قابلِ فہم label، debug logs میں استعمال ہوتا ہے۔ Default `"agent-injected"` |
| `replace` | boolean | No | اگر `true` ہو تو پہلے سے injected تمام CSS کو بدل دیتا ہے۔ Default `false` (شامل کرتا ہے) |

**مثال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**واپسی** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

WordPress pattern library میں دوبارہ قابلِ استعمال block pattern رجسٹر کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `slug` | string | Yes | Pattern identifier، مثلاً `gratis/hero-dark` |
| `title` | string | Yes | editor میں دکھایا جانے والا انسان کے لیے قابلِ فہم pattern نام |
| `content` | string | Yes | pattern کے لیے serialised block markup (HTML) |
| `categories` | array | No | Pattern category slugs، مثلاً `["featured", "hero"]` |
| `description` | string | No | pattern picker میں دکھائی جانے والی مختصر وضاحت |
| `keywords` | array | No | تلاش کے keywords |

**واپسی** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

agent کے ذریعے رجسٹر کیے گئے تمام block patterns کی فہرست دیتا ہے۔

**Parameters** — کوئی نہیں

**واپس کرتا ہے**

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

WordPress سائٹ کے لوگو کو دی گئی اٹیچمنٹ ID یا ریموٹ تصویر URL پر سیٹ کرتا ہے۔ جب URL فراہم کیا جائے، تو تصویر ڈاؤن لوڈ کر کے Media Library میں امپورٹ کی جاتی ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `attachment_id` | integer | No | موجودہ Media Library اٹیچمنٹ کی ID |
| `url` | string | No | امپورٹ کرنے اور لوگو کے طور پر سیٹ کرنے کے لیے ریموٹ تصویر URL |

`attachment_id` یا `url` میں سے ایک فراہم کرنا ضروری ہے۔

**واپس کرتا ہے** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

فعال تھیم کے `theme.json` (یا `global-styles`) پر نامزد رنگ/ٹائپوگرافی preset لاگو کرتا ہے۔ Presets منتخب شدہ بنڈلز ہیں جنہیں Gratis AI Agent ٹیم برقرار رکھتی ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `preset` | string | Yes | Preset کا نام، مثلاً `minimal-dark`، `warm-editorial`، `corporate-blue` |
| `merge` | boolean | No | اگر `true` ہو، تو بدلنے کے بجائے موجودہ اقدار کے ساتھ ضم کریں۔ ڈیفالٹ `false` |

**دستیاب presets**

| Preset | Description |
|---|---|
| `minimal-dark` | تقریباً سیاہ پس منظر، سفید متن، ایک accent رنگ |
| `warm-editorial` | گرم آف وائٹ پس منظر، serif سرخیاں، زمینی accent رنگ |
| `corporate-blue` | پیشہ ورانہ ٹائپوگرافی کے ساتھ نیوی اور سفید پیلیٹ |
| `vibrant-startup` | روشن gradients، گول کونے، جدید sans-serif ٹائپ |
| `classic-blog` | غیر جانبدار سرمئی رنگ، آرام دہ line-height، روایتی layout spacing |

**واپس کرتا ہے** `{ "success": true, "preset": "minimal-dark" }`

---

## عالمی اسٹائلز

Global Styles صلاحیتیں WordPress Global Styles API کے ذریعے theme.json اقدار پڑھتی اور لکھتی ہیں، جس سے سائٹ بھر کے تمام بلاکس اور templates متاثر ہوتے ہیں۔

### `get_global_styles`

موجودہ global styles configuration واپس کرتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | No | کسی مخصوص قدر کے لیے JSON pointer، مثلاً `/color/palette` یا `/typography/fontSizes`۔ اگر چھوڑ دیا جائے تو پورا object واپس کرتا ہے۔ |

**واپس کرتا ہے** مکمل global styles object یا `path` پر موجود قدر۔

---

### `set_global_styles`

global styles configuration میں ایک یا زیادہ اقدار اپ ڈیٹ کرتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `path` | string | Yes | سیٹ کی جانے والی قدر کے لیے JSON pointer، مثلاً `/color/palette` |
| `value` | any | Yes | نئی قدر |

**مثال** — پیلیٹ میں ایک رنگ شامل کریں

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**واپس کرتا ہے** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

agent کی طرف سے لاگو کی گئی تمام global styles تبدیلیاں ری سیٹ کرتا ہے، theme defaults بحال کرتے ہوئے۔

**پیرامیٹرز** — کوئی نہیں

**واپس کرتا ہے** `{ "success": true }`

---

## نیویگیشن مینو

Navigation Menu صلاحیتیں WordPress nav menus اور ان کے آئٹمز بناتی اور منظم کرتی ہیں۔

### `create_menu`

نیا WordPress نیویگیشن مینو بناتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | مینو کا نام، مثلاً `Primary Navigation` |
| `location` | string | No | اس مینو کو تفویض کرنے کے لیے theme location، مثلاً `primary` |

**واپس کرتا ہے** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

مینو کا نام بدلتا ہے یا اسے theme location پر دوبارہ تفویض کرتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | اپ ڈیٹ کیے جانے والے مینو کی ID |
| `name` | string | No | نیا مینو نام |
| `location` | string | No | تفویض یا دوبارہ تفویض کرنے کے لیے theme location |

**واپس کرتا ہے** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

موجودہ نیویگیشن مینو میں ایک آئٹم شامل کرتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `menu_id` | integer | Yes | ہدف مینو کی ID |
| `type` | string | Yes | آئٹم کی قسم: `custom`، `post_type`، یا `taxonomy` |
| `title` | string | No | مینو آئٹم کے لیے لیبل (`custom` قسم کے لیے ضروری) |
| `url` | string | No | `custom` آئٹمز کے لیے URL |
| `object_id` | integer | No | `post_type`/`taxonomy` آئٹمز کے لیے پوسٹ ID یا term ID |
| `parent_id` | integer | No | وہ مینو آئٹم ID جس کے تحت یہ آئٹم nested ہو |
| `position` | integer | No | مینو میں صفر سے شروع ہونے والی پوزیشن |

**واپس کرتا ہے** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

نیویگیشن مینو سے ایک آئٹم ہٹاتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `item_id` | integer | Yes | ہٹانے کے لیے مینو آئٹم ID |

**واپس کرتا ہے** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

تمام WordPress نیویگیشن مینو کی فہرست دیتا ہے، بشمول ان کی تفویض شدہ theme locations۔

**پیرامیٹرز** — کوئی نہیں

**واپس کرتا ہے**

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

Options صلاحیتیں WordPress options کو `get_option` / `update_option` کے ذریعے پڑھتی اور لکھتی ہیں۔ ایک built-in safety blocklist اہم settings کی حادثاتی ترمیم کو روکتی ہے۔

### `get_option`

ایک WordPress option پڑھتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key، مثلاً `blogname` |

**واپس کرتا ہے** `{ "option_name": "blogname", "value": "My Site" }`

اگر `option_name` safety blocklist پر ہو تو ایک خرابی واپس کرتا ہے۔

---

### `set_option`

ایک WordPress option لکھتا ہے۔

**پیرامیٹرز**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | Yes | option key |
| `value` | any | Yes | نئی قدر (arrays/objects کے لیے خودکار طور پر serialised) |
| `autoload` | string | No | `"yes"` یا `"no"`۔ ڈیفالٹ موجودہ autoload setting برقرار رکھتا ہے |

اگر `option_name` حفاظتی blocklist میں ہو تو خرابی واپس کرتا ہے۔

**واپسی** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

WordPress کا ایک option حذف کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `option_name` | string | ہاں | حذف کرنے کے لیے option key |

اگر `option_name` حفاظتی blocklist میں ہو تو خرابی واپس کرتا ہے۔

**واپسی** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

ایک pattern سے مطابقت رکھنے والے WordPress options کی فہرست بناتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `pattern` | string | نہیں | option ناموں کو فلٹر کرنے کے لیے SQL LIKE pattern، مثلاً `gratis_%`۔ اگر چھوڑ دیا جائے تو تمام options واپس کرتا ہے (بڑی databases پر احتیاط سے استعمال کریں)۔ |
| `limit` | integer | نہیں | نتائج کی زیادہ سے زیادہ تعداد۔ Default `50`، زیادہ سے زیادہ `500` |

**واپسی**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## Content Management

Content Management صلاحیتیں WordPress posts اور pages بناتی اور ترمیم کرتی ہیں۔ Post IDs واپس کیے جاتے ہیں تاکہ multi-ability plans میں بعد کے مراحل بنائے گئے content کا حوالہ دے سکیں۔

### `create_post`

ایک نیا WordPress post، page، یا custom post type entry بناتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | ہاں | Post title |
| `content` | string | نہیں | Post body — plain text، HTML، یا serialised block markup قبول کرتا ہے |
| `status` | string | نہیں | `draft`، `publish`، `pending`، `private`۔ Default `draft` |
| `post_type` | string | نہیں | Post type slug، مثلاً `post`، `page`، یا کوئی بھی registered CPT۔ Default `post` |
| `excerpt` | string | نہیں | archives اور search results میں دکھائی جانے والی مختصر summary |
| `categories` | array | نہیں | تفویض کرنے کے لیے category ناموں یا IDs کی array |
| `tags` | array | نہیں | تفویض کرنے کے لیے tag ناموں یا IDs کی array |
| `author` | integer | نہیں | post author کے طور پر set کرنے کے لیے WordPress user ID۔ Defaults to the current user |
| `date` | string | نہیں | ISO 8601 format میں publish date، مثلاً `2026-05-01T09:00:00` |
| `page_template` | string | نہیں | اس post یا page کو تفویض کرنے کے لیے template file، مثلاً `page-full-width.php`۔ صرف اس وقت معنی خیز ہے جب `post_type`، `page` ہو یا ایسا CPT ہو جو page templates کو support کرتا ہو۔ |

**مثال**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**واپسی** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

موجودہ WordPress post یا page کو update کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | ہاں | update کرنے کے لیے post کی ID |
| `title` | string | نہیں | نیا post title |
| `content` | string | نہیں | نیا post body |
| `status` | string | نہیں | نیا status: `draft`، `publish`، `pending`، `private` |
| `excerpt` | string | نہیں | نیا excerpt |
| `categories` | array | نہیں | مکمل category list کو ناموں یا IDs کی اس array سے بدلیں |
| `tags` | array | نہیں | مکمل tag list کو ناموں یا IDs کی اس array سے بدلیں |
| `page_template` | string | نہیں | اس post یا page کو تفویض کرنے کے لیے نئی template file، مثلاً `page-full-width.php`۔ template assignment کو ہٹانے اور theme default پر واپس جانے کے لیے خالی string پاس کریں۔ |

**مثال** — تخلیق کے بعد template تبدیل کریں

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**واپسی** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

ایک ہی ability call میں متعدد posts بناتا ہے، site builds یا bulk content import کے دوران round-trips کم کرتا ہے۔ Posts ترتیب سے بنائے جاتے ہیں؛ اگر ایک ناکام ہو جائے تو باقی جاری رہتے ہیں اور ناکامی results array میں رپورٹ کی جاتی ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `posts` | array | ہاں | post objects کی array، ہر ایک `create_post` جیسے ہی parameters قبول کرتا ہے |
| `stop_on_error` | boolean | نہیں | اگر `true` ہو، تو پہلی ناکامی کے بعد processing روک دیں۔ Default `false` |

**مثال**

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

**واپسی**

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

موجودہ post یا page کو featured image (post thumbnail) تفویض کرتا ہے۔ موجودہ Media Library attachment ID یا remote image URL قبول کرتا ہے؛ جب URL فراہم کیا جائے، تو image خودکار طور پر download اور import کی جاتی ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `post_id` | integer | ہاں | update کرنے کے لیے post یا page کی ID |
| `attachment_id` | integer | نہیں | موجودہ Media Library attachment کی ID |
| `url` | string | نہیں | import کرنے اور featured image کے طور پر set کرنے کے لیے remote image URL |
| `alt_text` | string | نہیں | اگر attachment کو URL سے import کیا جائے تو اس پر لاگو کرنے کے لیے Alt text |

`attachment_id` یا `url` میں سے ایک فراہم کرنا ضروری ہے۔

**واپسی** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

active form plugin (Contact Form 7، WPForms، Fluent Forms، یا Gravity Forms، اس پر منحصر کہ کون سا installed ہے) استعمال کرتے ہوئے contact form بناتا ہے۔ ایک shortcode واپس کرتا ہے جسے کسی بھی post یا page میں embed کیا جا سکتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | فارم کا نام جو فارم plugin admin میں دکھایا جاتا ہے |
| `fields` | array | Yes | فارم fields کی ترتیب وار فہرست (نیچے Field object دیکھیں) |
| `recipient` | string | No | submissions وصول کرنے کے لیے Email address۔ default WordPress admin email ہے |
| `subject` | string | No | Email subject line۔ Contact Form 7 استعمال کرتے وقت `[your-name]` اور `[your-subject]` placeholders کی حمایت کرتا ہے |
| `confirmation_message` | string | No | کامیاب submission کے بعد دکھایا جانے والا پیغام۔ Default: `"Thank you for your message. We'll be in touch soon."` |

**Field object**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | داخلی field نام / machine key |
| `label` | string | Yes | فارم پر دکھایا جانے والا انسانی طور پر قابلِ فہم label |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | آیا field کو submission سے پہلے بھرنا ضروری ہے۔ Default `false` |
| `options` | array | No | `select`, `checkbox`، اور `radio` fields کے لیے options |
| `placeholder` | string | No | text-type inputs کے لیے placeholder text |

**مثال**

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

**واپس آتا ہے**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## بصری جائزہ

بصری جائزہ کی صلاحیتیں agent کو live pages کے screenshots لینے اور ان کا تجزیہ کرنے دیتی ہیں، جس سے کسی browser extension کی ضرورت کے بغیر خودکار design review، before/after comparisons، اور visual regression checks ممکن ہوتے ہیں۔

### `capture_screenshot`

server-side headless browser استعمال کرتے ہوئے دیے گئے URL پر WordPress page کا screenshot لیتا ہے۔ تصویر Media Library میں محفوظ کی جاتی ہے اور CDN URL واپس کیا جاتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | screenshot کے لیے page کا مکمل URL، مثلاً `https://example.com/about/` |
| `width` | integer | No | pixels میں viewport width۔ Default `1280` |
| `height` | integer | No | pixels میں viewport height۔ Default `800` |
| `full_page` | boolean | No | صرف viewport کے بجائے مکمل scrollable page capture کریں۔ Default `false` |
| `delay_ms` | integer | No | capture کرنے سے پہلے page load کے بعد انتظار کرنے کے milliseconds، animated content کے لیے مفید۔ Default `500` |
| `label` | string | No | Media Library میں attachment کے ساتھ محفوظ انسانی طور پر قابلِ فہم label |

**واپس آتا ہے**

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

دو screenshots لیتا ہے اور ایک بصری diff score کے ساتھ ایک diff image واپس کرتا ہے جو تبدیل شدہ regions کو نمایاں کرتی ہے۔ یہ تصدیق کرنے کے لیے مفید ہے کہ design change نے متوقع نتیجہ پیدا کیا یا غیر ارادی regressions کا پتا لگانے کے لیے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | "before" state کے طور پر capture کرنے کے لیے page کا URL |
| `after_url` | string | Yes | "after" state کے طور پر capture کرنے کے لیے page کا URL۔ وقت کے ساتھ موازنہ کرتے وقت یہی URL بھی ہو سکتا ہے |
| `width` | integer | No | دونوں captures کے لیے viewport width۔ Default `1280` |
| `threshold` | float | No | pixel-difference threshold (0.0–1.0)۔ اس tolerance کے اندر pixels کو غیر تبدیل شدہ سمجھا جاتا ہے۔ Default `0.1` |

**واپس آتا ہے**

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

`0.0` کا `diff_score` کا مطلب ہے کوئی قابلِ دید تبدیلی نہیں؛ `1.0` کا مطلب ہے ہر pixel تبدیل ہوا۔

---

### `review_page_design`

page کا screenshot لیتا ہے اور بصری تجزیے کے لیے language model کو بھیجتا ہے۔ layout، typography، colour usage، اور accessibility concerns کا احاطہ کرنے والا structured assessment واپس کرتا ہے۔

**Parameters**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | review کے لیے page کا مکمل URL |
| `focus` | string | No | زور دینے کے لیے review areas کی comma-separated list: `layout`, `typography`, `colour`, `accessibility`, `mobile`۔ Default: تمام areas |
| `width` | integer | No | viewport width۔ Default `1280` |

**واپس آتا ہے**

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

## قابلِ نصب صلاحیتیں

Installable Abilities Registry آپ کو WordPress plugins کے طور پر تقسیم کیے گئے اضافی ability packs کے ذریعے agent کو وسعت دینے دیتی ہے۔ ہر pack معیاری ability API استعمال کرتے ہوئے ایک یا زیادہ abilities register کرتا ہے۔

### `list_available_abilities`

registry سے installation کے لیے دستیاب ability packs کا catalogue واپس کرتا ہے۔

**Parameters**

| پیرامیٹر | قسم | درکار | وضاحت |
|---|---|---|---|
| `category` | string | نہیں | زمرے کے لحاظ سے فلٹر کریں: `ecommerce`, `seo`, `media`, `social`, `developer` |

**واپس کرتا ہے**

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

رجسٹری سے ایک ability pack ڈاؤن لوڈ اور فعال کرتا ہے۔

**پیرامیٹرز**

| پیرامیٹر | قسم | درکار | وضاحت |
|---|---|---|---|
| `slug` | string | ہاں | Ability pack plugin slug |

**واپس کرتا ہے** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

بیان کردہ استعمال کے معاملے کے لیے بہترین plugin تلاش کرنے کے لیے ability registry سے استفسار کرتا ہے اور، اختیاری طور پر، اسے نصب کرتا ہے۔

**پیرامیٹرز**

| پیرامیٹر | قسم | درکار | وضاحت |
|---|---|---|---|
| `description` | string | ہاں | مطلوبہ فعالیت کی فطری زبان میں وضاحت |
| `install` | boolean | نہیں | اگر `true` ہو تو تجویز کردہ plugin فوراً نصب کرتا ہے۔ ڈیفالٹ `false` |

**مثال**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**واپس کرتا ہے**

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
