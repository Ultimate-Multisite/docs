---
title: مرجع القدرات
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# مرجع القدرات {#abilities-reference}

القدرات هي الإجراءات الذرية التي يمكن لوكيل الذكاء الاصطناعي المجاني (Gratis AI Agent) تنفيذها على تثبيت ووردبريس الخاص بك. كل قدرة هي فئة PHP مسجلة تعرض مخطط JSON — يقرأ الوكيل هذا المخطط أثناء وقت التشغيل لفهم المعلمات المطلوبة وما تعيده القدرة.

تستعرض هذه الصفحة جميع القدرات التي تأتي مع Gratis AI Agent الإصدار v1.9.0.

---

## أنواع المنشورات المخصصة (Custom Post Types) {#custom-post-types}

تُدير هذه القدرات أنواع المنشورات المخصصة (CPTs) المسجلة عبر الوكيل. يتم حفظ عمليات التسجيل في جدول خيارات ووردبريس، لذا فإنها تبقى حتى عند إلغاء تنشيط الإضافة وإعادة تفعيلها.

### `register_post_type` {#registerposttype}

تسجل نوع منشور مخصص جديد.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | مفتاح نوع المنشور (بحد أقصى 20 حرفًا، بدون أحرف كبيرة أو مسافات) |
| `singular_label` | string | نعم | الاسم المفرد المقروء للبشر، مثال: `Portfolio Item` |
| `plural_label` | string | نعم | الاسم الجمع المقروء للبشر، مثال: `Portfolio Items` |
| `public` | boolean | لا | ما إذا كان نوع المنشور متاحًا للعامة. القيمة الافتراضية هي `true` |
| `supports` | array | لا | الميزات التي يدعمها: `title`, `editor`, `thumbnail`, `excerpt`, `comments`, `revisions`, `custom-fields`. القيمة الافتراضية هي `["title","editor"]` |
| `has_archive` | boolean | لا | ما إذا كانت صفحة أرشيف نوع المنشور مُفعلة. القيمة الافتراضية هي `false` |
| `menu_icon` | string | لا | فئة Dashicons أو رابط لأيقونة القائمة في لوحة التحكم. القيمة الافتراضية هي `"dashicons-admin-post"` |
| `rewrite_slug` | string | لا | الرابط (Slug) الخاص بنوع المنشور. القيمة الافتراضية هي `slug` |

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

**النتيجة (Returns)** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

يعيد جميع أنواع المنشورات المخصصة التي سجلها الوكيل.

**المعلمات (Parameters)** — لا يوجد

**النتيجة (Returns)**

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

يزيل نوع منشور مخصص تم تسجيله سابقًا بواسطة الوكيل. تظل المنشورات الموجودة من هذا النوع في قاعدة البيانات ولكنها لم تعد متاحة عبر نوع المنشور.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | مفتاح نوع المنشور المراد إزالته |

**النتيجة (Returns)** `{ "success": true, "slug": "portfolio" }`

---

## التصنيفات المخصصة (Custom Taxonomies) {#custom-taxonomies}

تُدير هذه القدرات التصنيفات المخصصة. مثل أنواع المنشورات المخصصة، يتم حفظ تسجيلات التصنيف أيضًا.

### `register_taxonomy` {#registertaxonomy}

تسجل تصنيفًا مخصصًا جديدًا.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | مفتاح التصنيف (بحد أقصى 32 حرفًا) |
| `singular_label` | string | نعم | الاسم المفرد المقروء للبشر، مثال: `Project Category` |
| `plural_label` | string | نعم | الاسم الجمع المقروء للبشر، مثال: `Project Categories` |
| `post_types` | array | نعم | أنواع المنشورات التي يجب ربط هذا التصنيف بها |
| `hierarchical` | boolean | لا | `true` لنمط الفئة (Category)، و `false` لنمط الوسم (Tag). القيمة الافتراضية هي `true` |
| `public` | boolean | لا | ما إذا كانت المصطلحات متاحة للعامة. القيمة الافتراضية هي `true` |
| `rewrite_slug` | string | لا | الرابط (Slug) الخاص بالتصنيف. القيمة الافتراضية هي `slug` |

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

**النتيجة (Returns)** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

يعيد جميع التصنيفات المخصصة التي سجلها الوكيل.

**المعلمات (Parameters)** — لا يوجد

**النتيجة (Returns)**

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

يزيل تصنيفًا مخصصًا تم تسجيله سابقًا بواسطة الوكيل.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | مفتاح التصنيف المراد إزالته |

**النتيجة (Returns)** `{ "success": true, "slug": "project-category" }`

---

## نظام التصميم (Design System) {#design-system}

تعد قدرات نظام التصميم تعد العرض البصري لموقع ووردبريس — بدءًا من CSS المخصص وصولاً إلى أنماط الكتل وشعار الموقع.

### `inject_custom_css` {#injectcustomcss}

يضيف CSS إلى `<head>` الموقع عبر الدالة `wp_add_inline_style`. يتم تخزين CSS في الخيار `gratis_ai_agent_custom_css` ويتم إزالته بشكل نظيف عند إعادة تعيين القدرة.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `css` | string | نعم | CSS صالح لإضافته |
| `label` | string | لا | تسمية مقروءة للبشر لهذا كتلة CSS، تستخدم في سجلات التصحيح (debug logs). القيمة الافتراضية هي `"agent-injected"` |
| `replace` | boolean | لا | إذا كانت `true`، فإنه يستبدل جميع CSS التي تم حقنها سابقًا. القيمة الافتراضية هي `false` (يُضاف) |

**مثال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**النتيجة (Returns)** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

يسجل نمط كتلة قابل لإعادة الاستخدام في مكتبة أنماط ووردبريس.

**المعلمات (Parameters)**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | مُعرّف النمط، مثال: `gratis/hero-dark` |
| `title` | string | نعم | اسم النمط المقروء للبشر المعروض في المحرر |
| `content` | string | نعم | ترميز الكتلة المُسلسل (HTML) للنمط |
| `categories` | array | لا | تصنيفات نمط، مثال: `["featured", "hero"]` |
| `description` | string | لا | وصف قصير يُعرض في مُحدد النمط |
| `keywords` | array | لا | كلمات بحث |

**النتيجة (Returns)** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

يسرد جميع أنماط الكتل المسجلة بواسطة الوكيل.

**المعلمات (Parameters)** — لا يوجد

### `set_site_logo` {#setsitelogo}

يقوم هذا الإجراء بتعيين شعار موقع ووردبريس إلى معرف مرفق (attachment ID) معين أو رابط صورة عن بعد. عندما يتم توفير رابط URL، يتم تنزيل الصورة واستيرادها في مكتبة الوسائط (Media Library).

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `attachment_id` | integer | لا | معرف مرفق موجود في مكتبة الوسائط |
| `url` | string | لا | رابط صورة عن بعد لاستيرادها وتعيينها كشعار |

يجب توفير أحد `attachment_id` أو `url`.

**القيم المعادة (Returns)** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

يطبق إعداد مسبق (Preset) مُسمى للألوان/الخطوط على ملف `theme.json` الخاص بالقالب النشط (أو `global-styles`). هذه الإعدادات المسبقة هي حزم منسقة يتم الحفاظ عليها بواسطة فريق وكيل الذكاء الاصطناعي Gratis AI Agent.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `preset` | string | نعم | اسم الإعداد المسبق، مثل: `minimal-dark`، `warm-editorial`، `corporate-blue` |
| `merge` | boolean | لا | إذا كانت القيمة `true`، يتم دمجها مع القيم الموجودة بدلاً من استبدالها. القيمة الافتراضية هي `false`. |

**الإعدادات المتاحة (Available presets)**

| الإعداد المسبق | الوصف |
|---|---|
| `minimal-dark` | خلفية شبه سوداء، نص أبيض، لون تمييز واحد |
| `warm-editorial` | خلفية بيضاء مائلة للدفء، عناوين من نوع Serif (ذات ذيل)، ألوان تمييز ترابية |
| `corporate-blue` | لوحة ألوان كحلي وأبيض مع طباعة احترافية |
| `vibrant-startup` | تدرجات لونية ساطعة، زوايا مستديرة، نوع خط حديث بدون ذيل (sans-serif) |
| `classic-blog` | درجات رمادية محايدة، ارتفاع سطر مريح، مسافات تخطيط تقليدية |

**القيم المعادة (Returns)** `{ "success": true, "preset": "minimal-dark" }`

---

## الأنماط العامة (Global Styles) {#global-styles}

تسمح قدرات الأنماط العامة بقراءة وكتابة قيم `theme.json` عبر واجهة برمجة تطبيقات أنماط ووردبريس العالمية (WordPress Global Styles API)، مما يؤثر على جميع الكتل والقوالب في الموقع بأكمله.

### `get_global_styles` {#getglobalstyles}

يعيد تكوين الأنماط العامة الحالي.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `path` | string | لا | مؤشر JSON لقيمة محددة، مثل `/color/palette` أو `/typography/fontSizes`. يعيد الكائن بالكامل إذا تم حذفه. |

**القيم المعادة (Returns)** كائن الأنماط العامة الكامل أو القيمة الموجودة في `path`.

---

### `set_global_styles` {#setglobalstyles}

يقوم بتحديث قيمة واحدة أو أكثر في تكوين الأنماط العامة.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `path` | string | نعم | مؤشر JSON للقيمة المراد تعيينها، مثل `/color/palette` |
| `value` | any | نعم | القيمة الجديدة |

**مثال** — إضافة لون إلى لوحة الألوان (palette)

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**القيم المعادة (Returns)** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

يعيد جميع تغييرات الأنماط العامة التي طبقها الوكيل، مع استعادة إعدادات القالب الافتراضية.

**المعاملات (Parameters)** — لا يوجد

**القيم المعادة (Returns)** `{ "success": true }`

---

## قوائم التنقل (Navigation Menus) {#navigation-menus}

تسمح قدرات قائمة التنقل بإنشاء وإدارة قوائم التنقل الخاصة بووردبريس وعناصرها.

### `create_menu` {#createmenu}

ينشئ قائمة تنقل جديدة في ووردبريس.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `name` | string | نعم | اسم القائمة، مثل: `Primary Navigation` |
| `location` | string | لا | موقع القالب الذي يتم تعيين هذه القائمة إليه، مثل: `primary` |

**القيم المعادة (Returns)** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

يُعيد تسمية قائمة أو يعيد تعيينها إلى موقع قالب آخر.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `menu_id` | integer | نعم | معرف القائمة المراد تحديثها |
| `name` | string | لا | اسم القائمة الجديد |
| `location` | string | لا | موقع القالب الذي سيتم تعيينه أو إعادة تعيينه |

**القيم المعادة (Returns)** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

يضيف عنصراً إلى قائمة تنقل موجودة.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `menu_id` | integer | نعم | معرف القائمة المستهدفة |
| `type` | string | نعم | نوع العنصر: `custom`، أو `post_type`، أو `taxonomy` |
| `title` | string | لا | التسمية لعنصر القائمة (مطلوب لنوع `custom`) |
| `url` | string | لا | رابط للعناصر من نوع `custom` |
| `object_id` | integer | لا | معرف المنشور أو المعرّف للمصطلح (term ID) لعناصر `post_type`/`taxonomy` |
| `parent_id` | integer | لا | معرف عنصر القائمة الذي سيتم تضمين هذا العنصر تحته |
| `position` | integer | لا | الموضع في القائمة (يبدأ من صفر) |

**القيم المعادة (Returns)** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

يزيل عنصراً من قائمة التنقل.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `item_id` | integer | نعم | معرف عنصر القائمة المراد إزالته |

**القيم المعادة (Returns)** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

يعرض جميع قوائم التنقل في ووردبريس، بما في ذلك مواقع القالب المخصصة لها.

**المعاملات (Parameters)** — لا يوجد

**القيم المعادة (Returns)**

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

## إدارة الخيارات (Options Management) {#options-management}

تسمح قدرات الخيارات بقراءة وكتابة خيارات ووردبريس عبر `get_option` / `update_option`. يوجد كتلة أمان مدمجة تمنع التعديل العرضي للإعدادات الهامة.

### `get_option` {#getoption}

تقرأ خياراً من خيارات ووردبريس.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `option_name` | string | نعم | مفتاح الخيار، مثل: `blogname` |

**القيم المعادة (Returns)** `{ "option_name": "blogname", "value": "My Site" }`

يعيد خطأ إذا كان `option_name` مدرجاً في قائمة الحظر الأمني.

---

### `set_option` {#setoption}

تكتب خياراً في ووردبريس.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `option_name` | string | نعم | مفتاح الخيار |
| `value` | any | نعم | القيمة الجديدة (يتم تسلسلها تلقائياً للمصفوفات/الكائنات) |
| `autoload` | string | لا | `"yes"` أو `"no"`. الافتراضي يحافظ على إعداد التحميل التلقائي الحالي. |

يعيد خطأ إذا كان `option_name` مدرجًا في قائمة الحظر الأمنية (safety blocklist).

**القيم المعادة** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

يقوم بحذف خيار (option) من ووردبريس.

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `option_name` | string | نعم | مفتاح الخيار المراد حذفه |

يعيد خطأ إذا كان `option_name` مدرجًا في قائمة الحظر الأمنية.

**القيم المعادة** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

يسرد خيارات ووردبريس التي تطابق نمطًا معينًا (pattern).

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `pattern` | string | لا | نمط SQL LIKE لتصفية أسماء الخيارات، مثال: `gratis_%`. يعيد جميع الخيارات إذا تم حذفه (استخدمه بحذر في قواعد البيانات الكبيرة). |
| `limit` | integer | لا | الحد الأقصى لعدد النتائج. القيمة الافتراضية هي `50`، والحد الأقصى هو `500`. |

**القيم المعادة**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## إدارة المحتوى (Content Management) {#content-management}

تتيح قدرات إدارة المحتوى إنشاء وتحرير منشورات وصفحات و أنواع المنشور المخصصة في ووردبريس. يتم إرجاع معرفات المنشورات (Post IDs) حتى يمكن للمراحل اللاحقة في خطط القدرات المتعددة الإشارة إلى المحتوى الذي تم إنشاؤه.

### `create_post` {#createpost}

ينشئ منشورًا جديدًا أو صفحة أو مدخل نوع منشور مخصص في ووردبريس.

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `title` | string | نعم | عنوان المنشور |
| `content` | string | لا | محتوى المنشور — يقبل النص العادي، أو HTML، أو ترميز الكتل (block markup) المُسلسل. |
| `status` | string | لا | الحالة: `draft` (مسودة)، `publish` (منشور)، `pending` (قيد الانتظار)، `private` (خاص). القيمة الافتراضية هي `draft`. |
| `post_type` | string | لا | اسم نوع المنشور (slug)، مثل `post`، أو `page`، أو أي CPT مسجل. القيمة الافتراضية هي `post`. |
| `excerpt` | string | لا | ملخص قصير يظهر في الأرشيفات ونتائج البحث. |
| `categories` | array | لا | مصفوفة بأسماء أو معرفات الفئات المراد تعيينها. |
| `tags` | array | لا | مصفوفة بأسماء أو معرفات الوسوم (tags) المراد تعيينها. |
| `author` | integer | لا | معرف مستخدم ووردبريس الذي سيتم تعيينه كمؤلف للمنشور. القيمة الافتراضية هي المستخدم الحالي. |
| `date` | string | لا | تاريخ النشر بتنسيق ISO 8601، مثال: `2026-05-01T09:00:00`. |
| `page_template` | string | لا | ملف القالب الذي سيتم تعيينه لهذا المنشور أو الصفحة، مثال: `page-full-width.php`. يكون ذا معنى فقط عندما يكون `post_type` هو `page` أو CPT يدعم قوالب الصفحات. |

**مثال**

```json
{
  "title": "مرحباً بكم في موقعنا الجديد",
  "content": "<!-- wp:paragraph --><p>مرحباً بالعالم!</p><!-- /wp:paragraph -->",
  "status": "publish",
  "post_type": "page",
  "page_template": "page-full-width.php"
}
```

**القيم المعادة** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

يقوم بتحديث منشور أو صفحة موجودة في ووردبريس.

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `post_id` | integer | نعم | معرف المنشور المراد تحديثه |
| `title` | string | لا | عنوان المنشور الجديد |
| `content` | string | لا | محتوى المنشور الجديد |
| `status` | string | لا | الحالة الجديدة: `draft`، `publish`، `pending`، `private`. |
| `excerpt` | string | لا | الملخص الجديد. |
| `categories` | array | لا | استبدال قائمة الفئات الكاملة بهذه المصفوفة من الأسماء أو المعرفات. |
| `tags` | array | لا | استبدال قائمة الوسوم الكاملة بهذه المصفوفة من الأسماء أو المعرفات. |
| `page_template` | string | لا | ملف القالب الجديد الذي سيتم تعيينه لهذا المنشور أو الصفحة، مثال: `page-full-width.php`. مرر سلسلة نصية فارغة لإزالة تعيين القالب والعودة إلى قالب الثيم الافتراضي. |

**مثال** — تغيير القالب بعد الإنشاء

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**القيم المعادة** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

ينشئ عدة منشورات في استدعاء قدرة واحد، مما يقلل من عدد الطلبات (round-trips) أثناء بناء الموقع أو استيراد المحتوى بكميات كبيرة. يتم إنشاء المنشورات بالتسلسل؛ إذا فشل أحدها، يستمر الآخرون ويتم الإبلاغ عن الفشل في مصفوفة النتائج.

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `posts` | array | نعم | مصفوفة من كائنات المنشورات، حيث يقبل كل منها نفس معاملات `create_post`. |
| `stop_on_error` | boolean | لا | إذا كانت القيمة `true`، يتوقف المعالجة بعد الفشل الأول. القيمة الافتراضية هي `false`. |

**مثال**

```json
{
  "posts": [
    {
      "title": "من نحن",
      "post_type": "page",
      "status": "publish",
      "page_template": "page-full-width.php"
    },
    {
      "title": "الخدمات",
      "post_type": "page",
      "status": "publish"
    },
    {
      "title": "اتصل بنا",
      "post_type": "page",
      "status": "publish"
    }
  ]
}
```

**القيم المعادة**

```json
{
  "created": 3,
  "failed": 0,
  "results": [
    { "success": true, "post_id": 42, "title": "من نحن" },
    { "success": true, "post_id": 43, "title": "الخدمات" },
    { "success": true, "post_id": 44, "title": "اتصل بنا" }
  ]
}
```

---

### `set_featured_image` {#setfeaturedimage}

يعين صورة مميزة (صورة مصغرة للمنشور) لمنشور أو صفحة موجودة. يقبل معرف مرفق من مكتبة الوسائط (Media Library attachment ID) موجود، أو رابط صورة عن بعد؛ وعند توفير الرابط، يتم تنزيل الصورة واستيرادها تلقائيًا.

**المعاملات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `post_id` | integer | نعم | معرف المنشور أو الصفحة المراد تحديثها |
| `attachment_id` | integer | لا | معرف مرفق موجود في مكتبة الوسائط. |
| `url` | string | لا | رابط الصورة عن بعد التي سيتم استيرادها وتعيينها كصورة مميزة. |
| `alt_text` | string | لا | النص البديل (Alt text) الذي سيتم تطبيقه على المرفق إذا تم استيراده من رابط URL. |

يجب توفير أحد `attachment_id` أو `url`.

**القيم المعادة** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

ينشئ نموذج اتصال باستخدام إضافة النموذج النشطة (مثل Contact Form 7، WPForms، Fluent Forms، أو Gravity Forms، حسب الإضافة المثبتة). يعيد كود شورت آي (shortcode) يمكن تضمينه في أي منشور أو صفحة.

**المعاملات**

مراجعة مرئية

تسمح قدرات المراجعة المرئية للوكيل بالتقاط لقطات شاشة للصفحات الحية وتحليلها، مما يتيح مراجعة التصميم المستقلة، ومقارنات قبل وبعد، واختبارات الانحدار البصري دون الحاجة إلى إضافة متصفح.

### `capture_screenshot` {#visual-review}

يلتقط هذه الدالة لقطة شاشة لصفحة WordPress في عنوان URL معين باستخدام متصفح بدون رأس (headless browser) يعمل من جانب الخادم. يتم حفظ الصورة في مكتبة الوسائط ويتم إرجاع رابط CDN لها.

**المعلمات**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `url` | string | نعم | عنوان URL الكامل للصف المراد التقاط لقطة شاشة له، مثال: `https://example.com/about/` |
| `width` | integer | لا | عرض النافذة بالبكسل. القيمة الافتراضية هي `1280` |
| `height` | integer | لا | ارتفاع النافذة بالبكسل. القيمة الافتراضية هي `800` |
| `full_page` | boolean | لا | التقاط الصفحة الكاملة القابلة للتمرير بدلاً من مجرد منطقة العرض (viewport). القيمة الافتراضية هي `false` |
| `delay_ms` | integer | لا | المللي ثواني للانتظار بعد تحميل الصفحة قبل الالتقاط، مفيد للمحتوى المتحرك. القيمة الافتراضية هي `500` |
| `label` | string | لا | تسمية قابلة للقراءة البشرية يتم تخزينها مع المرفق في مكتبة الوسائط. |

**القيم المعادة**

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

تأخذ هذه الدالة صورتين شاشة وتعيد درجة فرق مرئي بالإضافة إلى صورة فرق تبرز المناطق المتغيرة. مفيدة لتأكيد أن تغيير التصميم قد أنتج النتيجة المتوقعة أو للكشف عن أي تراجعات غير مقصودة.

**المعلمات**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `before_url` | string | نعم | عنوان URL للصف الذي سيتم التقاطه كحالة "قبل". |
| `after_url` | string | نعم | عنوان URL للصف الذي سيتم التقاطه كحالة "بعد". قد يكون نفس عنوان URL إذا كنت تقارن عبر الزمن. |
| `width` | integer | لا | عرض النافذة لكلا الالتقاطين. القيمة الافتراضية هي `1280`. |
| `threshold` | float | لا | عتبة الفرق بالبكسل (من 0.0 إلى 1.0). تعتبر البكسلات ضمن هذا التسامح غير متغيرة. القيمة الافتراضية هي `0.1`. |

**القيم المعادة**

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

تعني درجة `diff_score` بقيمة `0.0` عدم وجود تغيير مرئي؛ وتعني القيمة `1.0` أن كل بكسل قد تغير.

---

### `review_page_design` {#comparescreenshots}

يلتقط هذه الدالة لقطة شاشة للصفحة ويرسلها إلى نموذج اللغة لتحليلها بصريًا. تعيد تقييمًا منظمًا يغطي التخطيط، والطباعة (Typography)، واستخدام الألوان، ومخاوف إمكانية الوصول.

**المعلمات**

| المعلمة | النوع | مطلوب | الوصف |
|---|---|---|---|
| `url` | string | نعم | عنوان URL الكامل للصف المراد مراجعته. |
| `focus` | string | لا | قائمة مفصولة بفواصل بمناطق المراجعة التي يجب التركيز عليها: `layout` (التخطيط)، `typography` (الطباعة)، `colour` (الألوان)، `accessibility` (إمكانية الوصول)، `mobile` (الجوال). القيمة الافتراضية: جميع المناطق. |
| `width` | integer | لا | عرض النافذة. القيمة الافتراضية هي `1280`. |

**القيم المعادة**

```json
{
  "success": true,
  "screenshot_url": "https://example.com/wp-content/uploads/2026/04/review-about.png",
  "assessment": {
    "overall": "هيكل الصفحة نظيف وسهل القراءة. تم اكتشاف مشكلتي إمكانية وصول.",
    "layout": "تسلسل بصري جيد. قسم البطل بارز.",
    "typography": "نص الجسم بحجم 15 بكسل — يرجى التفكير في زيادته إلى 16 بكسل لتحسين القراءة.",
    "colour": "نسبة التباين على زر الدعوة لاتخاذ إجراء (CTA) (#fff على #4a90e2) هي 3.1:1 — أقل من عتبة WCAG AA وهي 4.5:1.",
    "accessibility": ["تباين منخفض على زر CTA", "نقص نص بديل لصورة البطل"],
    "suggestions": ["اجعل لون زر CTA أغمق إلى #1a5cb0 لتجاوز معايير WCAG AA"، "أضف نصًا بديلاً وصفيًا لصورة البطل"]
  }
}
```

---

## القدرات القابلة للتثبيت {#reviewpagedesign}

تسمح سجل القدرات القابلة للتثبيت بتوسيع الوكيل الخاص بك بإضافة حزم قدرات يتم توزيعها كإضافات WordPress. تسجل كل حزمة واحدة أو أكثر من القدرات باستخدام واجهة برمجة تطبيقات القدرات القياسية (ability API).

### `list_available_abilities` {#installable-abilities}

تعيد كتالوج حزم القدرات المتاحة للتثبيت من السجل.

**المعلمات**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `category` | string | لا | تصفية حسب الفئة: `ecommerce`، `seo`، `media`، `social`، `developer` |

**القيم المُرجعة (Returns)**

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

يقوم بتنزيل وتفعيل حزمة قدرات (ability pack) من السجل.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `slug` | string | نعم | اسم الحزمة (slug) الخاصة بإضافة القدرات |

**القيم المُرجعة (Returns)** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#installability}

يستعلم من سجل القدرات للعثور على أفضل إضافة (plugin) لاستخدام محدد، ويقوم بتثبيتها اختياريًا.

**المعاملات (Parameters)**

| المعامل | النوع | مطلوب | الوصف |
|---|---|---|---|
| `description` | string | نعم | وصف باللغة الطبيعية للوظيفة المطلوبة |
| `install` | boolean | لا | إذا كانت القيمة `true`، يتم تثبيت الإضافة الموصى بها فورًا. القيمة الافتراضية هي `false` |

**مثال (Example)**

```json
{
  "description": "أحتاج إلى نموذج اتصال يدعم رفع الملفات وحماية من الرسائل المزعجة (spam protection)",
  "install": false
}
```

**القيم المُرجعة (Returns)**

```json
{
  "recommendation": {
    "slug": "contact-form-7",
    "name": "Contact Form 7",
    "reason": "مستخدم على نطاق واسع، يدعم رفع الملفات، ويتكامل مع Akismet لتصفية الرسائل المزعجة.",
    "alternatives": ["wpforms-lite", "fluent-forms"]
  }
}
```
