---
title: د وړتیاوو ماخذ
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# د وړتیاوو مرجع

وړتیاوې هغه اټومي کړنې دي چې Gratis AI Agent یې ستاسو په WordPress نصب کې رابللی شي. هره وړتیا یوه ثبت شوې PHP کلاس ده چې د JSON سکیما څرګندوي — agent دا سکیما د اجرا پر مهال لولي څو پوه شي چې کوم پارامترونه اړین دي او وړتیا څه بېرته ورکوي.

دا پاڼه ټولې هغه وړتیاوې مستندوي چې له Gratis AI Agent v1.9.0 سره راځي.

---

## دودیز پوسټ ډولونه

دا وړتیاوې هغه دودیز پوسټ ډولونه (CPTs) اداره کوي چې د agent له لارې ثبت شوي وي. ثبتونې د WordPress د options جدول کې ساتل کېږي، نو د plugin د غیرفعالېدو او بېرته فعالېدو وروسته هم پاتې کېږي.

### `register_post_type`

یو نوی دودیز پوسټ ډول ثبتوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د پوسټ ډول کیلي (تر ټولو ډېر ۲۰ توري، لوی توري نه، تشې نه) |
| `singular_label` | string | هو | د انسان لپاره د لوستلو وړ مفرد نوم، لکه `Portfolio Item` |
| `plural_label` | string | هو | د انسان لپاره د لوستلو وړ جمع نوم، لکه `Portfolio Items` |
| `public` | boolean | نه | ایا د پوسټ ډول په عامه توګه د لاسرسي وړ دی. اصلي ارزښت `true` |
| `supports` | array | نه | د ملاتړ ځانګړنې: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. اصلي ارزښت `["title","editor"]` |
| `has_archive` | boolean | نه | ایا د پوسټ ډول ارشیف پاڼه فعاله ده. اصلي ارزښت `false` |
| `menu_icon` | string | نه | د admin مېنو نښې لپاره Dashicons کلاس یا URL. اصلي ارزښت `"dashicons-admin-post"` |
| `rewrite_slug` | string | نه | د پوسټ ډول لپاره URL slug. په اصلي ډول `slug` ته ټاکل کېږي |

**بېلګه**

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

**بېرته ورکوي** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types`

ټول هغه دودیز پوسټ ډولونه بېرته ورکوي چې د agent له خوا ثبت شوي وي.

**پارامترونه** — نشته

**بېرته ورکوي**

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

هغه دودیز پوسټ ډول له ثبت څخه وباسي چې مخکې د agent له خوا ثبت شوی وي. د هماغه ډول موجود پوسټونه په ډیټابېس کې پاتې کېږي، خو نور د پوسټ ډول له لارې د لاسرسي وړ نه وي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د لرې کولو لپاره د پوسټ ډول کیلي |

**بېرته ورکوي** `{ "success": true, "slug": "portfolio" }`

---

## دودیزې ټکسونومۍ

دا وړتیاوې دودیزې ټکسونومۍ اداره کوي. د CPTs په څېر، د ټکسونومي ثبتونې هم ساتل کېږي.

### `register_taxonomy`

یوه نوې دودیزه ټکسونومي ثبتوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د ټکسونومي کیلي (تر ټولو ډېر ۳۲ توري) |
| `singular_label` | string | هو | د انسان لپاره د لوستلو وړ مفرد نوم، لکه `Project Category` |
| `plural_label` | string | هو | د انسان لپاره د لوستلو وړ جمع نوم، لکه `Project Categories` |
| `post_types` | array | هو | د هغو پوسټ ډولونو slugs چې دا ټکسونومي باید ورسره ونښلول شي |
| `hierarchical` | boolean | نه | د کټګورۍ-ډول لپاره `true`، د ټګ-ډول لپاره `false`. اصلي ارزښت `true` |
| `public` | boolean | نه | ایا terms په عامه توګه د لاسرسي وړ دي. اصلي ارزښت `true` |
| `rewrite_slug` | string | نه | د ټکسونومي لپاره URL slug. په اصلي ډول `slug` ته ټاکل کېږي |

**بېلګه**

```json
{
  "slug": "project-category",
  "singular_label": "Project Category",
  "plural_label": "Project Categories",
  "post_types": ["portfolio"],
  "hierarchical": true
}
```

**بېرته ورکوي** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies`

ټولې هغه دودیزې ټکسونومۍ بېرته ورکوي چې د agent له خوا ثبت شوې وي.

**پارامترونه** — نشته

**بېرته ورکوي**

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

هغه دودیزه ټکسونومي له ثبت څخه وباسي چې مخکې د agent له خوا ثبت شوې وي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د لرې کولو لپاره د ټکسونومي کیلي |

**بېرته ورکوي** `{ "success": true, "slug": "project-category" }`

---

## د ډیزاین سیستم

د ډیزاین سیستم وړتیاوې د WordPress site لیدیز وړاندې کول بدلوي — له دودیز CSS څخه تر block patterns او د site لوګو پورې.

### `inject_custom_css`

CSS د `wp_add_inline_style` له لارې د site په `<head>` کې ورزیاتوي. CSS په `gratis_ai_agent_custom_css` option کې زېرمه کېږي او کله چې وړتیا reset شي، په پاک ډول له کتار څخه ایستل کېږي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `css` | string | هو | د داخلولو لپاره معتبر CSS |
| `label` | string | نه | د دې CSS بلاک لپاره د انسان لپاره د لوستلو وړ نښه، چې په debug logs کې کارېږي. اصلي ارزښت `"agent-injected"` |
| `replace` | boolean | نه | که `true` وي، ټول مخکې داخل شوي CSS بدلوي. اصلي ارزښت `false` (ورزیاتوي) |

**بېلګه**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**بېرته ورکوي** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern`

د WordPress pattern library کې یو بیاکارېدونکی block pattern ثبتوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د pattern پېژندونکی، لکه `gratis/hero-dark` |
| `title` | string | هو | د انسان لپاره د لوستلو وړ pattern نوم چې په editor کې ښودل کېږي |
| `content` | string | هو | د pattern لپاره serialized block markup (HTML) |
| `categories` | array | نه | د pattern کټګورۍ slugs، لکه `["featured", "hero"]` |
| `description` | string | نه | لنډه تشریح چې په pattern picker کې ښودل کېږي |
| `keywords` | array | نه | د لټون کلیدي ټکي |

**بېرته ورکوي** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns`

ټول هغه block patterns لېست کوي چې د agent له خوا ثبت شوي وي.

**پارامترونه** — نشته

**راګرځوي**

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

د WordPress سایټ لوګو ورکړل شوي ضمیمې ID یا لرې انځور URL ته ټاکي. کله چې URL ورکړل شي، انځور ډاونلوډېږي او Media Library ته واردېږي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `attachment_id` | integer | نه | د موجودې Media Library ضمیمې ID |
| `url` | string | نه | د واردولو او د لوګو په توګه ټاکلو لپاره لرې انځور URL |

له `attachment_id` یا `url` څخه یو باید ورکړل شي.

**راګرځوي** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset`

فعالې theme د `theme.json` (یا `global-styles`) ته نومول شوی رنګ/ټایپوګرافي preset پلي کوي. Presets هغه تنظیم شوي بنډلونه دي چې د Gratis AI Agent ډلې له خوا ساتل کېږي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `preset` | string | هو | د preset نوم، لکه `minimal-dark`، `warm-editorial`، `corporate-blue` |
| `merge` | boolean | نه | که `true` وي، د بدلولو پر ځای یې له موجودو ارزښتونو سره یوځای کړئ. تلواله `false` |

**شته presets**

| Preset | تشریح |
|---|---|
| `minimal-dark` | نږدې تور شالید، سپین متن، یو accent رنګ |
| `warm-editorial` | تود off-white شالید، serif سرلیکونه، خاورو ته ورته accent رنګونه |
| `corporate-blue` | Navy او سپین رنګ‌لړ له مسلکي ټایپوګرافي سره |
| `vibrant-startup` | روښانه gradients، ګرد کونجونه، عصري sans-serif ډول |
| `classic-blog` | بې‌طرفه خړ رنګونه، ارامه line-height، دودیز layout واټنونه |

**راګرځوي** `{ "success": true, "preset": "minimal-dark" }`

---

## Global Styles

د Global Styles وړتیاوې د WordPress Global Styles API له لارې theme.json ارزښتونه لولي او لیکي، چې په ټول سایټ کې ټول بلاکونه او templates اغېزمنوي.

### `get_global_styles`

اوسنی global styles تنظیمات راګرځوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `path` | string | نه | ځانګړي ارزښت ته JSON pointer، لکه `/color/palette` یا `/typography/fontSizes`. که پرېښودل شي، ټول object راګرځوي. |

**راګرځوي** بشپړ global styles object یا په `path` کې ارزښت.

---

### `set_global_styles`

په global styles تنظیماتو کې یو یا څو ارزښتونه تازه کوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `path` | string | هو | هغه ارزښت ته JSON pointer چې ټاکل کېږي، لکه `/color/palette` |
| `value` | any | هو | نوی ارزښت |

**بېلګه** — رنګ palette ته ورزیات کړئ

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**راګرځوي** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles`

ټول agent-پلي شوي global styles بدلونونه بیا تنظیموي، د theme تلوالې بېرته راولي.

**پارامترونه** — هېڅ نشته

**راګرځوي** `{ "success": true }`

---

## د Navigation Menuګانې

د Navigation Menu وړتیاوې د WordPress د تګ‌راتګ menuګانې او د هغوی توکي جوړوي او اداره کوي.

### `create_menu`

نوې WordPress navigation menu جوړوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `name` | string | هو | د menu نوم، لکه `Primary Navigation` |
| `location` | string | نه | د theme ځای چې دا menu ورته وټاکل شي، لکه `primary` |

**راګرځوي** `{ "success": true, "menu_id": 7 }`

---

### `update_menu`

menu بیا نوموي یا یې د theme ځای ته بیا ټاکي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `menu_id` | integer | هو | د تازه کېدونکي menu ID |
| `name` | string | نه | نوی menu نوم |
| `location` | string | نه | د ټاکلو یا بیا ټاکلو لپاره د theme ځای |

**راګرځوي** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item`

موجودې navigation menu ته یو توکی ورزیاتوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `menu_id` | integer | هو | د هدف menu ID |
| `type` | string | هو | د توکي ډول: `custom`، `post_type`، یا `taxonomy` |
| `title` | string | نه | د menu توکي لپاره نښه‌لیک (د `custom` ډول لپاره اړین) |
| `url` | string | نه | د `custom` توکو لپاره URL |
| `object_id` | integer | نه | د `post_type`/`taxonomy` توکو لپاره Post ID یا term ID |
| `parent_id` | integer | نه | د menu توکي ID چې دا توکی ترې لاندې ځال شي |
| `position` | integer | نه | په menu کې له صفره پیل کېدونکی موقعیت |

**راګرځوي** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item`

له navigation menu څخه یو توکی لرې کوي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `item_id` | integer | هو | د لرې کولو لپاره د menu توکي ID |

**راګرځوي** `{ "success": true, "item_id": 12 }`

---

### `list_menus`

ټولې WordPress navigation menuګانې لېست کوي، د هغوی ټاکل شوي theme ځایونه پکې شامل دي.

**پارامترونه** — هېڅ نشته

**راګرځوي**

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

## د Options مدیریت

د Options وړتیاوې د `get_option` / `update_option` له لارې WordPress options لولي او لیکي. جوړ-دننه خوندیتوب blocklist د مهمو تنظیماتو ناڅاپي بدلون مخنیوی کوي.

### `get_option`

یو WordPress option لولي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `option_name` | string | هو | د option کیلي، لکه `blogname` |

**راګرځوي** `{ "option_name": "blogname", "value": "My Site" }`

که `option_name` په خوندیتوب blocklist کې وي، تېروتنه راګرځوي.

---

### `set_option`

یو WordPress option لیکي.

**پارامترونه**

| پارامتر | ډول | اړین | تشریح |
|---|---|---|---|
| `option_name` | string | هو | د option کیلي |
| `value` | any | هو | نوی ارزښت (د arrays/objects لپاره په اوتومات ډول serialised کېږي) |
| `autoload` | string | نه | `"yes"` یا `"no"`. تلواله موجود autoload تنظیم ساتي |

که `option_name` د خوندیتوب blocklist کې وي، تېروتنه راګرځوي.

**راګرځوي** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option`

د WordPress یو option ړنګوي.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `option_name` | string | هو | د ړنګولو لپاره د option کلۍ |

که `option_name` د خوندیتوب blocklist کې وي، تېروتنه راګرځوي.

**راګرځوي** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options`

هغه WordPress options لېست کوي چې له یوې بڼې سره سمون خوري.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `pattern` | string | نه | د option نومونو د فلټر کولو لپاره SQL LIKE بڼه، لکه `gratis_%`. که پرېښودل شي ټول options راګرځوي (په لویو ډیټابېسونو کې په احتیاط وکاروئ). |
| `limit` | integer | نه | د پایلو اعظمي شمېر. تلواله `50`، اعظمي `500` |

**راګرځوي**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## د منځپانګې مدیریت

د منځپانګې مدیریت وړتیاوې د WordPress پوسټونه او پاڼې جوړوي او سموي. د پوسټ پېژندپاڼې بېرته راګرځول کېږي څو په څو-وړتیايي پلانونو کې راتلونکي ګامونه جوړې شوې منځپانګې ته اشاره وکړای شي.

### `create_post`

یو نوی WordPress پوسټ، پاڼه، یا د دودیز پوسټ ډول ننوتنه جوړوي.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `title` | string | هو | د پوسټ سرلیک |
| `content` | string | نه | د پوسټ متن — ساده متن، HTML، یا serialised block markup مني |
| `status` | string | نه | `draft`, `publish`, `pending`, `private`. تلواله `draft` |
| `post_type` | string | نه | د پوسټ ډول slug، لکه `post`، `page`، یا هر ثبت شوی CPT. تلواله `post` |
| `excerpt` | string | نه | لنډیز چې په ارشیفونو او د لټون پایلو کې ښودل کېږي |
| `categories` | array | نه | د ټاکلو لپاره د کټګورۍ نومونو یا پېژندپاڼو array |
| `tags` | array | نه | د ټاکلو لپاره د ټګ نومونو یا پېژندپاڼو array |
| `author` | integer | نه | د پوسټ لیکوال په توګه د ټاکلو لپاره د WordPress کاروونکي پېژندپاڼه. تلواله اوسنی کاروونکی دی |
| `date` | string | نه | د خپرېدو نېټه په ISO 8601 بڼه، لکه `2026-05-01T09:00:00` |
| `page_template` | string | نه | دې پوسټ یا پاڼې ته د ټاکلو لپاره د کېنډۍ فایل، لکه `page-full-width.php`. یوازې هغه وخت مانا لري چې `post_type` `page` وي یا داسې CPT وي چې د پاڼې کېنډۍ ملاتړ کوي. |

**بېلګه**

```json
{
  "title": "Welcome to Our New Site",
  "content": "<!-- wp:paragraph --><p>Hello world!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**راګرځوي** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post`

یو موجود WordPress پوسټ یا پاڼه تازه کوي.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `post_id` | integer | هو | د تازه کولو لپاره د پوسټ پېژندپاڼه |
| `title` | string | نه | نوی پوسټ سرلیک |
| `content` | string | نه | نوی پوسټ متن |
| `status` | string | نه | نوی حالت: `draft`, `publish`, `pending`, `private` |
| `excerpt` | string | نه | نوی excerpt |
| `categories` | array | نه | د کټګوریو بشپړ لېست د نومونو یا پېژندپاڼو له دې array سره بدل کړئ |
| `tags` | array | نه | د ټګونو بشپړ لېست د نومونو یا پېژندپاڼو له دې array سره بدل کړئ |
| `page_template` | string | نه | دې پوسټ یا پاڼې ته د ټاکلو لپاره نوی کېنډۍ فایل، لکه `page-full-width.php`. د کېنډۍ ټاکنه لرې کولو او د theme تلوالې ته د بېرته ګرځېدو لپاره تش string ورکړئ. |

**بېلګه** — له جوړېدو وروسته کېنډۍ بدلول

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**راګرځوي** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts`

په یوه وړتیايي غوښتنه کې څو پوسټونه جوړوي، د site جوړولو یا د منځپانګې ډله‌ییز واردولو پر مهال تګ-راتګ کموي. پوسټونه په ترتیب جوړېږي؛ که یو ناکام شي نور دوام کوي او ناکامي د پایلو په array کې راپور کېږي.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `posts` | array | هو | د پوسټ شیانو array، چې هر یو د `create_post` په څېر هماغه پارامیټرونه مني |
| `stop_on_error` | boolean | نه | که `true` وي، له لومړۍ ناکامۍ وروسته پروسس بند کړئ. تلواله `false` |

**بېلګه**

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

**راګرځوي**

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

یوه موجود پوسټ یا پاڼې ته ځانګړی انځور (د پوسټ thumbnail) ټاکي. د موجود رسنۍ کتابتون attachment پېژندپاڼه یا د لرې انځور URL مني؛ کله چې URL ورکړل شي، انځور په اتومات ډول ښکته کېږي او واردېږي.

**پارامیټرونه**

| پارامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `post_id` | integer | هو | د تازه کولو لپاره د پوسټ یا پاڼې پېژندپاڼه |
| `attachment_id` | integer | نه | د موجود رسنۍ کتابتون attachment پېژندپاڼه |
| `url` | string | نه | د واردولو او د ځانګړي انځور په توګه د ټاکلو لپاره د لرې انځور URL |
| `alt_text` | string | نه | که attachment له URL څخه وارد شي، پرې پلي کېدونکی بدیل متن |

له `attachment_id` یا `url` څخه یو باید ورکړل شي.

**راګرځوي** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form`

د فعال فورم plugin په کارولو سره د اړیکې فورم جوړوي (Contact Form 7، WPForms، Fluent Forms، یا Gravity Forms، د نصب شوي پر بنسټ). یو shortcode راګرځوي چې په هر پوسټ یا پاڼه کې ځای پر ځای کېدای شي.

**پارامیټرونه**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `title` | string | Yes | د فورم نوم چې د فورم plugin په admin کې ښودل کېږي |
| `fields` | array | Yes | د فورم ساحو منظم لېست (لاندې د ساحې څيز وګورئ) |
| `recipient` | string | No | د سپارنو د ترلاسه کولو لپاره برېښنالیک پته. په تلواله توګه د WordPress admin برېښنالیک کاروي |
| `subject` | string | No | د برېښنالیک د موضوع کرښه. کله چې Contact Form 7 کاروئ، د `[your-name]` او `[your-subject]` ځایناستي ملاتړ کوي |
| `confirmation_message` | string | No | هغه پیغام چې له بریالۍ سپارنې وروسته ښودل کېږي. تلواله: `"Thank you for your message. We'll be in touch soon."` |

**د ساحې څيز**

| Key | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | د ساحې داخلي نوم / ماشيني کیلي |
| `label` | string | Yes | د انسان لپاره د لوستلو وړ نښکه چې په فورم کې ښودل کېږي |
| `type` | string | Yes | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | No | ایا ساحه باید له سپارنې مخکې ډکه شي. تلواله `false` |
| `options` | array | No | د `select`، `checkbox`، او `radio` ساحو لپاره غوراوي |
| `placeholder` | string | No | د متن-ډوله دننوتنو لپاره ځایناستی متن |

**بېلګه**

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

**راګرځوي**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## لیدیزه بیاکتنه

د لیدیزې بیاکتنې وړتیاوې agent ته اجازه ورکوي چې د ژوندیو پاڼو سکرین‌شاټونه واخلي او شننه یې وکړي، چې د ډیزاین خپلواکه بیاکتنه، مخکې/وروسته پرتله کول، او د لیدیزې شاتګ ازموینې بې له دې چې د براوزر کوم extension ته اړتیا وي ممکنوي.

### `capture_screenshot`

د server-side headless browser په کارولو سره په ورکړل شوي URL کې د WordPress پاڼې سکرین‌شاټ اخلي. انځور Media Library ته خوندي کېږي او یو CDN URL بېرته ورکول کېږي.

**پارامترونه**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | د هغې پاڼې بشپړ URL چې سکرین‌شاټ یې اخیستل کېږي، لکه `https://example.com/about/` |
| `width` | integer | No | د viewport پلنوالی په pixels کې. تلواله `1280` |
| `height` | integer | No | د viewport لوړوالی په pixels کې. تلواله `800` |
| `full_page` | boolean | No | یوازې د viewport پر ځای بشپړه scrollable پاڼه ونیسئ. تلواله `false` |
| `delay_ms` | integer | No | د پاڼې له بارېدو وروسته تر نیولو مخکې د تم کېدو millisecondونه، د خوځنده منځپانګې لپاره ګټور. تلواله `500` |
| `label` | string | No | د انسان لپاره د لوستلو وړ نښکه چې په Media Library کې له ضمیمې سره خوندي کېږي |

**راګرځوي**

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

دوه سکرین‌شاټونه اخلي او د لیدیز توپیر نمره او همدارنګه د توپیر انځور راګرځوي چې بدلې شوې سیمې روښانوي. د دې تایید لپاره ګټور دی چې د ډیزاین بدلون تمه شوې پایله ورکړې، یا د ناڅاپي شاتګونو د موندلو لپاره.

**پارامترونه**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `before_url` | string | Yes | د هغې پاڼې URL چې د "مخکې" حالت په توګه نیول کېږي |
| `after_url` | string | Yes | د هغې پاڼې URL چې د "وروسته" حالت په توګه نیول کېږي. که د وخت په اوږدو کې پرتله کوئ، هماغه URL کېدای شي |
| `width` | integer | No | د دواړو نیونو لپاره د viewport پلنوالی. تلواله `1280` |
| `threshold` | float | No | د pixel-توپیر حد (0.0–1.0). په دې زغم کې pixels نه‌بدل شوي ګڼل کېږي. تلواله `0.1` |

**راګرځوي**

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

د `diff_score` ارزښت `0.0` مانا دا ده چې هېڅ ښکاره بدلون نشته؛ `1.0` مانا دا ده چې هر pixel بدل شوی.

---

### `review_page_design`

د یوې پاڼې سکرین‌شاټ اخلي او د لیدیزې شننې لپاره یې ژبني model ته لېږي. یوه جوړښتي ارزونه راګرځوي چې layout، typography، د رنګ کارونه، او د accessibility اندېښنې پکې شاملې وي.

**پارامترونه**

| Parameter | Type | Required | Description |
|---|---|---|---|
| `url` | string | Yes | د بیاکتنې لپاره د پاڼې بشپړ URL |
| `focus` | string | No | د بیاکتنې د هغو برخو comma-separated لېست چې ټینګار پرې کېږي: `layout`, `typography`, `colour`, `accessibility`, `mobile`. تلواله: ټولې برخې |
| `width` | integer | No | د viewport پلنوالی. تلواله `1280` |

**راګرځوي**

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

## د نصبېدو وړ وړتیاوې

د نصبېدو وړ وړتیاوو Registry تاسو ته اجازه درکوي چې agent د اضافي وړتیاوو له بستو سره وغځوئ چې د WordPress pluginونو په توګه وېشل کېږي. هره بسته د معیاري وړتیا API په کارولو سره یوه یا څو وړتیاوې ثبتوي.

### `list_available_abilities`

له registry څخه د نصب لپاره د شته وړتیاوو بستو catalogue راګرځوي.

**پارامترونه**

| پېرامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `category` | string | نه | د کټګورۍ له مخې چاڼ کړئ: `ecommerce`, `seo`, `media`, `social`, `developer` |

**راګرځوي**

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

له راجسترۍ څخه د وړتیا کڅوړه ښکته کوي او فعالوي.

**پېرامیټرونه**

| پېرامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `slug` | string | هو | د وړتیا کڅوړې plugin slug |

**راګرځوي** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin`

د وړتیا راجستري پوښتي څو د تشریح شوې کارونې قضیې لپاره تر ټولو ښه plugin ومومي او، که اختیاري وي، نصب یې کړي.

**پېرامیټرونه**

| پېرامیټر | ډول | اړین | تشریح |
|---|---|---|---|
| `description` | string | هو | د غوښتل شوې دندې د وړتیا د طبیعي ژبې تشریح |
| `install` | boolean | نه | که `true` وي، سپارښت شوی plugin سمدستي نصبوي. تلواله `false` ده |

**بېلګه**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**راګرځوي**

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
