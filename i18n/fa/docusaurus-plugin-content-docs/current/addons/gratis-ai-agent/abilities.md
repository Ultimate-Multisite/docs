---
title: مرجع قابلیت‌ها
sidebar_position: 2
_i18n_hash: 1a83460648ea789162af417c6b11eecc
---
# مرجع توانایی‌ها {#abilities-reference}

توانایی‌ها کنش‌های اتمی هستند که Gratis AI Agent می‌تواند روی نصب WordPress شما فراخوانی کند. هر توانایی یک کلاس PHP ثبت‌شده است که یک شِمای JSON را ارائه می‌دهد — عامل این شِما را در زمان اجرا می‌خواند تا بفهمد چه پارامترهایی لازم‌اند و توانایی چه چیزی را برمی‌گرداند.

این صفحه همه توانایی‌هایی را مستند می‌کند که همراه با Gratis AI Agent v1.9.0 ارائه می‌شوند.

---

## انواع نوشته سفارشی {#custom-post-types}

این توانایی‌ها انواع نوشته سفارشی (CPTها) را که از طریق عامل ثبت شده‌اند مدیریت می‌کنند. ثبت‌ها در جدول گزینه‌های WordPress پایدار می‌شوند تا پس از غیرفعال‌سازی و فعال‌سازی دوباره plugin نیز باقی بمانند.

### `register_post_type` {#registerposttype}

یک نوع نوشته سفارشی جدید ثبت می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | کلید نوع نوشته (حداکثر ۲۰ نویسه، بدون حروف بزرگ، بدون فاصله) |
| `singular_label` | string | بله | نام مفرد قابل‌خواندن برای انسان، برای مثال `Portfolio Item` |
| `plural_label` | string | بله | نام جمع قابل‌خواندن برای انسان، برای مثال `Portfolio Items` |
| `public` | boolean | خیر | اینکه آیا نوع نوشته به‌صورت عمومی قابل دسترسی است یا نه. پیش‌فرض `true` |
| `supports` | array | خیر | قابلیت‌هایی برای پشتیبانی: `title`، `editor`، `thumbnail`، `excerpt`، `comments`، `revisions`، `custom-fields`. پیش‌فرض `["title","editor"]` |
| `has_archive` | boolean | خیر | اینکه آیا صفحه بایگانی نوع نوشته فعال است یا نه. پیش‌فرض `false` |
| `menu_icon` | string | خیر | کلاس Dashicons یا URL برای آیکن منوی مدیریت. پیش‌فرض `"dashicons-admin-post"` |
| `rewrite_slug` | string | خیر | slug نشانی اینترنتی برای نوع نوشته. به‌طور پیش‌فرض برابر با `slug` است |

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

**برمی‌گرداند** `{ "success": true, "slug": "portfolio" }`

---

### `list_post_types` {#listposttypes}

همه انواع نوشته سفارشی ثبت‌شده توسط عامل را برمی‌گرداند.

**پارامترها** — هیچ‌کدام

**برمی‌گرداند**

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

یک نوع نوشته سفارشی را که قبلاً توسط عامل ثبت شده لغو ثبت می‌کند. نوشته‌های موجود از آن نوع در پایگاه داده باقی می‌مانند اما دیگر از طریق نوع نوشته قابل دسترسی نیستند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | کلید نوع نوشته برای حذف |

**برمی‌گرداند** `{ "success": true, "slug": "portfolio" }`

---

## رده‌بندی‌های سفارشی {#custom-taxonomies}

این توانایی‌ها رده‌بندی‌های سفارشی را مدیریت می‌کنند. مانند CPTها، ثبت‌های رده‌بندی پایدار می‌شوند.

### `register_taxonomy` {#registertaxonomy}

یک رده‌بندی سفارشی جدید ثبت می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | کلید رده‌بندی (حداکثر ۳۲ نویسه) |
| `singular_label` | string | بله | نام مفرد قابل‌خواندن برای انسان، برای مثال `Project Category` |
| `plural_label` | string | بله | نام جمع قابل‌خواندن برای انسان، برای مثال `Project Categories` |
| `post_types` | array | بله | slugهای نوع نوشته که این رده‌بندی باید به آن‌ها متصل شود |
| `hierarchical` | boolean | خیر | `true` برای سبک دسته‌بندی، `false` برای سبک برچسب. پیش‌فرض `true` |
| `public` | boolean | خیر | اینکه آیا اصطلاح‌ها به‌صورت عمومی قابل دسترسی هستند یا نه. پیش‌فرض `true` |
| `rewrite_slug` | string | خیر | slug نشانی اینترنتی برای رده‌بندی. به‌طور پیش‌فرض برابر با `slug` است |

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

**برمی‌گرداند** `{ "success": true, "slug": "project-category" }`

---

### `list_taxonomies` {#listtaxonomies}

همه رده‌بندی‌های سفارشی ثبت‌شده توسط عامل را برمی‌گرداند.

**پارامترها** — هیچ‌کدام

**برمی‌گرداند**

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

یک رده‌بندی سفارشی را که قبلاً توسط عامل ثبت شده لغو ثبت می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | کلید رده‌بندی برای حذف |

**برمی‌گرداند** `{ "success": true, "slug": "project-category" }`

---

## سیستم طراحی {#design-system}

توانایی‌های سیستم طراحی ارائه بصری سایت WordPress را تغییر می‌دهند — از CSS سفارشی تا الگوهای بلوکی و لوگوی سایت.

### `inject_custom_css` {#injectcustomcss}

CSS را از طریق `wp_add_inline_style` به `<head>` سایت اضافه می‌کند. CSS در گزینه `gratis_ai_agent_custom_css` ذخیره می‌شود و وقتی توانایی بازنشانی شود، به‌طور تمیز از صف خارج می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `css` | string | بله | CSS معتبر برای تزریق |
| `label` | string | خیر | برچسب قابل‌خواندن برای انسان برای این بلوک CSS، مورد استفاده در گزارش‌های اشکال‌زدایی. پیش‌فرض `"agent-injected"` |
| `replace` | boolean | خیر | اگر `true` باشد، همه CSSهای تزریق‌شده قبلی را جایگزین می‌کند. پیش‌فرض `false` (الحاق می‌کند) |

**مثال**

```json
{
  "css": ":root { --primary: #1a1a2e; --accent: #e94560; } body { font-family: 'Inter', sans-serif; }",
  "label": "brand-colours",
  "replace": false
}
```

**برمی‌گرداند** `{ "success": true, "bytes": 96 }`

---

### `add_block_pattern` {#addblockpattern}

یک الگوی بلوکی قابل استفاده مجدد را در کتابخانه الگوهای WordPress ثبت می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | شناسه الگو، برای مثال `gratis/hero-dark` |
| `title` | string | بله | نام الگوی قابل‌خواندن برای انسان که در ویرایشگر نمایش داده می‌شود |
| `content` | string | بله | نشانه‌گذاری بلوکی سریال‌شده (HTML) برای الگو |
| `categories` | array | خیر | slugهای دسته الگو، برای مثال `["featured", "hero"]` |
| `description` | string | خیر | توضیح کوتاهی که در انتخاب‌گر الگو نمایش داده می‌شود |
| `keywords` | array | خیر | کلیدواژه‌های جست‌وجو |

**برمی‌گرداند** `{ "success": true, "slug": "gratis/hero-dark" }`

---

### `list_block_patterns` {#listblockpatterns}

همه الگوهای بلوکی ثبت‌شده توسط عامل را فهرست می‌کند.

**پارامترها** — هیچ‌کدام

**بازمی‌گرداند**

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

لوگوی سایت WordPress را روی یک شناسه پیوست مشخص یا یک URL تصویر راه دور تنظیم می‌کند. وقتی یک URL ارائه شود، تصویر دانلود و به کتابخانه رسانه وارد می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `attachment_id` | integer | خیر | شناسه یک پیوست موجود در کتابخانه رسانه |
| `url` | string | خیر | URL تصویر راه دور برای وارد کردن و تنظیم به‌عنوان لوگو |

یکی از `attachment_id` یا `url` باید ارائه شود.

**بازمی‌گرداند** `{ "success": true, "attachment_id": 42 }`

---

### `apply_theme_json_preset` {#applythemejsonpreset}

یک پیش‌تنظیم نام‌گذاری‌شده رنگ/تایپوگرافی را روی `theme.json` (یا `global-styles`) پوسته فعال اعمال می‌کند. پیش‌تنظیم‌ها بسته‌های گزینش‌شده‌ای هستند که توسط تیم Gratis AI Agent نگهداری می‌شوند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `preset` | string | بله | نام پیش‌تنظیم، مثلاً `minimal-dark`، `warm-editorial`، `corporate-blue` |
| `merge` | boolean | خیر | اگر `true` باشد، به‌جای جایگزینی، با مقادیر موجود ادغام می‌کند. پیش‌فرض `false` |

**پیش‌تنظیم‌های موجود**

| پیش‌تنظیم | توضیحات |
|---|---|
| `minimal-dark` | پس‌زمینه نزدیک به مشکی، متن سفید، یک رنگ تأکیدی |
| `warm-editorial` | پس‌زمینه گرم مایل به سفید، تیترهای سریف، رنگ‌های تأکیدی خاکی |
| `corporate-blue` | پالت سرمه‌ای و سفید با تایپوگرافی حرفه‌ای |
| `vibrant-startup` | گرادیان‌های روشن، گوشه‌های گرد، نوع sans-serif مدرن |
| `classic-blog` | خاکستری‌های خنثی، ارتفاع خط راحت، فاصله‌گذاری چیدمان سنتی |

**بازمی‌گرداند** `{ "success": true, "preset": "minimal-dark" }`

---

## استایل‌های سراسری {#global-styles}

توانایی‌های استایل‌های سراسری، مقادیر theme.json را از طریق API استایل‌های سراسری WordPress می‌خوانند و می‌نویسند و بر همه بلوک‌ها و قالب‌ها در سراسر سایت اثر می‌گذارند.

### `get_global_styles` {#getglobalstyles}

پیکربندی فعلی استایل‌های سراسری را بازمی‌گرداند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `path` | string | خیر | اشاره‌گر JSON به یک مقدار مشخص، مثلاً `/color/palette` یا `/typography/fontSizes`. اگر حذف شود، کل شیء را بازمی‌گرداند. |

**بازمی‌گرداند** شیء کامل استایل‌های سراسری یا مقدار موجود در `path`.

---

### `set_global_styles` {#setglobalstyles}

یک یا چند مقدار را در پیکربندی استایل‌های سراسری به‌روزرسانی می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `path` | string | بله | اشاره‌گر JSON به مقداری که باید تنظیم شود، مثلاً `/color/palette` |
| `value` | any | بله | مقدار جدید |

**مثال** — افزودن یک رنگ به پالت

```json
{
  "path": "/color/palette",
  "value": [
    { "slug": "primary", "color": "#1a1a2e", "name": "Primary" },
    { "slug": "accent",  "color": "#e94560", "name": "Accent" }
  ]
}
```

**بازمی‌گرداند** `{ "success": true, "path": "/color/palette" }`

---

### `reset_global_styles` {#resetglobalstyles}

همه تغییرات استایل‌های سراسری اعمال‌شده توسط agent را بازنشانی می‌کند و پیش‌فرض‌های پوسته را بازیابی می‌کند.

**پارامترها** — هیچ‌کدام

**بازمی‌گرداند** `{ "success": true }`

---

## فهرست‌های ناوبری {#navigation-menus}

توانایی‌های فهرست ناوبری، فهرست‌های ناوبری WordPress و آیتم‌های آن‌ها را ایجاد و مدیریت می‌کنند.

### `create_menu` {#createmenu}

یک فهرست ناوبری جدید WordPress ایجاد می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `name` | string | بله | نام فهرست، مثلاً `Primary Navigation` |
| `location` | string | خیر | مکان پوسته برای اختصاص این فهرست به آن، مثلاً `primary` |

**بازمی‌گرداند** `{ "success": true, "menu_id": 7 }`

---

### `update_menu` {#updatemenu}

نام یک فهرست را تغییر می‌دهد یا آن را دوباره به یک مکان پوسته اختصاص می‌دهد.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `menu_id` | integer | بله | شناسه فهرستی که باید به‌روزرسانی شود |
| `name` | string | خیر | نام جدید فهرست |
| `location` | string | خیر | مکان پوسته برای اختصاص یا اختصاص دوباره |

**بازمی‌گرداند** `{ "success": true, "menu_id": 7 }`

---

### `add_menu_item` {#addmenuitem}

یک آیتم به یک فهرست ناوبری موجود اضافه می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `menu_id` | integer | بله | شناسه فهرست هدف |
| `type` | string | بله | نوع آیتم: `custom`، `post_type`، یا `taxonomy` |
| `title` | string | خیر | برچسب برای آیتم فهرست (برای نوع `custom` الزامی است) |
| `url` | string | خیر | URL برای آیتم‌های `custom` |
| `object_id` | integer | خیر | شناسه نوشته یا شناسه اصطلاح برای آیتم‌های `post_type`/`taxonomy` |
| `parent_id` | integer | خیر | شناسه آیتم فهرست برای قرار دادن این آیتم زیر آن |
| `position` | integer | خیر | جایگاه مبتنی بر صفر در فهرست |

**بازمی‌گرداند** `{ "success": true, "item_id": 12 }`

---

### `remove_menu_item` {#removemenuitem}

یک آیتم را از یک فهرست ناوبری حذف می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `item_id` | integer | بله | شناسه آیتم فهرست برای حذف |

**بازمی‌گرداند** `{ "success": true, "item_id": 12 }`

---

### `list_menus` {#listmenus}

همه فهرست‌های ناوبری WordPress را همراه با مکان‌های پوسته اختصاص‌یافته آن‌ها فهرست می‌کند.

**پارامترها** — هیچ‌کدام

**بازمی‌گرداند**

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

## مدیریت گزینه‌ها {#options-management}

توانایی‌های گزینه‌ها، گزینه‌های WordPress را از طریق `get_option` / `update_option` می‌خوانند و می‌نویسند. یک فهرست مسدودی ایمنی داخلی از تغییر تصادفی تنظیمات حیاتی جلوگیری می‌کند.

### `get_option` {#getoption}

یک گزینه WordPress را می‌خواند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `option_name` | string | بله | کلید گزینه، مثلاً `blogname` |

**بازمی‌گرداند** `{ "option_name": "blogname", "value": "My Site" }`

اگر `option_name` در فهرست مسدودی ایمنی باشد، خطا بازمی‌گرداند.

---

### `set_option` {#setoption}

یک گزینه WordPress را می‌نویسد.

**پارامترها**

| پارامتر | نوع | الزامی | توضیحات |
|---|---|---|---|
| `option_name` | string | بله | کلید گزینه |
| `value` | any | بله | مقدار جدید (برای آرایه‌ها/اشیا به‌صورت خودکار سریال‌سازی می‌شود) |
| `autoload` | string | خیر | `"yes"` یا `"no"`. پیش‌فرض، تنظیم موجود autoload را حفظ می‌کند |

اگر `option_name` در فهرست مسدودی ایمنی باشد، خطا برمی‌گرداند.

**برمی‌گرداند** `{ "success": true, "option_name": "blogname" }`

---

### `delete_option` {#deleteoption}

یک گزینه WordPress را حذف می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `option_name` | string | بله | کلید گزینه برای حذف |

اگر `option_name` در فهرست مسدودی ایمنی باشد، خطا برمی‌گرداند.

**برمی‌گرداند** `{ "success": true, "option_name": "my_custom_option" }`

---

### `list_options` {#listoptions}

گزینه‌های WordPress مطابق با یک الگو را فهرست می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `pattern` | string | خیر | الگوی SQL LIKE برای فیلتر کردن نام‌های گزینه، مانند `gratis_%`. اگر حذف شود همه گزینه‌ها را برمی‌گرداند (در پایگاه‌های داده بزرگ با احتیاط استفاده کنید). |
| `limit` | integer | خیر | حداکثر تعداد نتایج. پیش‌فرض `50`، حداکثر `500` |

**برمی‌گرداند**

```json
{
  "options": [
    { "option_name": "gratis_ai_agent_version", "autoload": "yes" }
  ],
  "total": 1
}
```

---

## مدیریت محتوا {#content-management}

قابلیت‌های مدیریت محتوا نوشته‌ها و برگه‌های WordPress را ایجاد و ویرایش می‌کنند. شناسه‌های نوشته برگردانده می‌شوند تا مراحل بعدی در planهای چندقابلیتی بتوانند به محتوای ایجادشده ارجاع دهند.

### `create_post` {#createpost}

یک نوشته، برگه، یا ورودی نوع نوشته سفارشی جدید در WordPress ایجاد می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `title` | string | بله | عنوان نوشته |
| `content` | string | خیر | بدنه نوشته — متن ساده، HTML، یا نشانه‌گذاری بلوک سریال‌شده را می‌پذیرد |
| `status` | string | خیر | `draft`، `publish`، `pending`، `private`. پیش‌فرض `draft` |
| `post_type` | string | خیر | slug نوع نوشته، مانند `post`، `page`، یا هر CPT ثبت‌شده. پیش‌فرض `post` |
| `excerpt` | string | خیر | خلاصه کوتاه که در بایگانی‌ها و نتایج جست‌وجو نمایش داده می‌شود |
| `categories` | array | خیر | آرایه‌ای از نام‌ها یا شناسه‌های دسته برای اختصاص دادن |
| `tags` | array | خیر | آرایه‌ای از نام‌ها یا شناسه‌های برچسب برای اختصاص دادن |
| `author` | integer | خیر | شناسه کاربر WordPress برای تنظیم به‌عنوان نویسنده نوشته. به‌طور پیش‌فرض کاربر فعلی است |
| `date` | string | خیر | تاریخ انتشار در قالب ISO 8601، مانند `2026-05-01T09:00:00` |
| `page_template` | string | خیر | فایل قالب برای اختصاص دادن به این نوشته یا برگه، مانند `page-full-width.php`. فقط زمانی معنادار است که `post_type` برابر `page` باشد یا یک CPT که از قالب‌های برگه پشتیبانی می‌کند. |

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

**برمی‌گرداند** `{ "success": true, "post_id": 42, "permalink": "https://example.com/welcome/" }`

---

### `update_post` {#updatepost}

یک نوشته یا برگه موجود WordPress را به‌روزرسانی می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `post_id` | integer | بله | شناسه نوشته‌ای که باید به‌روزرسانی شود |
| `title` | string | خیر | عنوان جدید نوشته |
| `content` | string | خیر | بدنه جدید نوشته |
| `status` | string | خیر | وضعیت جدید: `draft`، `publish`، `pending`، `private` |
| `excerpt` | string | خیر | چکیده جدید |
| `categories` | array | خیر | فهرست کامل دسته‌ها را با این آرایه از نام‌ها یا شناسه‌ها جایگزین کنید |
| `tags` | array | خیر | فهرست کامل برچسب‌ها را با این آرایه از نام‌ها یا شناسه‌ها جایگزین کنید |
| `page_template` | string | خیر | فایل قالب جدید برای اختصاص دادن به این نوشته یا برگه، مانند `page-full-width.php`. برای حذف انتساب قالب و بازگشت به پیش‌فرض theme، یک رشته خالی ارسال کنید. |

**مثال** — تغییر قالب پس از ایجاد

```json
{
  "post_id": 42,
  "page_template": "page-full-width.php"
}
```

**برمی‌گرداند** `{ "success": true, "post_id": 42 }`

---

### `batch_create_posts` {#batchcreateposts}

چندین نوشته را در یک فراخوانی قابلیت ایجاد می‌کند و رفت‌وبرگشت‌ها را هنگام ساخت سایت یا واردسازی انبوه محتوا کاهش می‌دهد. نوشته‌ها به‌ترتیب ایجاد می‌شوند؛ اگر یکی ناموفق شود، بقیه ادامه می‌یابند و شکست در آرایه نتایج گزارش می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `posts` | array | بله | آرایه‌ای از اشیای نوشته، که هرکدام همان پارامترهای `create_post` را می‌پذیرند |
| `stop_on_error` | boolean | خیر | اگر `true` باشد، پردازش پس از نخستین شکست متوقف می‌شود. پیش‌فرض `false` |

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

**برمی‌گرداند**

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

یک تصویر شاخص (تصویر بندانگشتی نوشته) را به یک نوشته یا برگه موجود اختصاص می‌دهد. شناسه پیوست موجود در Media Library یا URL تصویر راه‌دور را می‌پذیرد؛ وقتی URL ارائه شود، تصویر به‌طور خودکار دانلود و وارد می‌شود.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `post_id` | integer | بله | شناسه نوشته یا برگه‌ای که باید به‌روزرسانی شود |
| `attachment_id` | integer | خیر | شناسه یک پیوست موجود در Media Library |
| `url` | string | خیر | URL تصویر راه‌دور برای وارد کردن و تنظیم به‌عنوان تصویر شاخص |
| `alt_text` | string | خیر | متن جایگزین برای اعمال به پیوست اگر از یک URL وارد شده باشد |

یکی از `attachment_id` یا `url` باید ارائه شود.

**برمی‌گرداند** `{ "success": true, "post_id": 42, "attachment_id": 17 }`

---

### `create_contact_form` {#createcontactform}

یک فرم تماس با استفاده از plugin فرم فعال ایجاد می‌کند (Contact Form 7، WPForms، Fluent Forms، یا Gravity Forms، بسته به این‌که کدام نصب شده باشد). یک shortcode برمی‌گرداند که می‌تواند در هر نوشته یا برگه‌ای جاسازی شود.

**پارامترها**

| پارامتر | نوع | ضروری | توضیحات |
|---|---|---|---|
| `title` | string | بله | نام فرم که در مدیریت plugin فرم نمایش داده می‌شود |
| `fields` | array | بله | فهرست مرتب فیلدهای فرم (شیء فیلد را در پایین ببینید) |
| `recipient` | string | خیر | نشانی ایمیل برای دریافت ارسال‌ها. به‌طور پیش‌فرض ایمیل مدیر WordPress است |
| `subject` | string | خیر | خط موضوع ایمیل. هنگام استفاده از Contact Form 7 از جای‌نگهدارهای `[your-name]` و `[your-subject]` پشتیبانی می‌کند |
| `confirmation_message` | string | خیر | پیامی که پس از ارسال موفق نمایش داده می‌شود. پیش‌فرض: `"Thank you for your message. We'll be in touch soon."` |

**شیء فیلد**

| کلید | نوع | ضروری | توضیحات |
|---|---|---|---|
| `name` | string | بله | نام داخلی فیلد / کلید ماشینی |
| `label` | string | بله | برچسب قابل‌فهم برای انسان که روی فرم نمایش داده می‌شود |
| `type` | string | بله | `text`, `email`, `tel`, `textarea`, `select`, `checkbox`, `radio`, `file`, `date` |
| `required` | boolean | خیر | آیا فیلد باید پیش از ارسال پر شود یا نه. پیش‌فرض `false` |
| `options` | array | خیر | گزینه‌ها برای فیلدهای `select`، `checkbox` و `radio` |
| `placeholder` | string | خیر | متن جای‌نگهدار برای ورودی‌های نوع متن |

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

**بازمی‌گرداند**

```json
{
  "success": true,
  "form_id": 3,
  "shortcode": "[contact-form-7 id=\"3\" title=\"Restaurant Booking Enquiry\"]"
}
```

---

## بازبینی بصری {#visual-review}

قابلیت‌های بازبینی بصری به agent اجازه می‌دهد از برگه‌های زنده اسکرین‌شات بگیرد و آن‌ها را تحلیل کند؛ در نتیجه بازبینی طراحی خودکار، مقایسه‌های قبل/بعد، و بررسی‌های رگرسیون بصری بدون نیاز به هیچ افزونه مرورگری امکان‌پذیر می‌شود.

### `capture_screenshot` {#capturescreenshot}

از یک برگه WordPress در URL مشخص، با استفاده از مرورگر headless سمت سرور، اسکرین‌شات می‌گیرد. تصویر در Media Library ذخیره می‌شود و یک URL مربوط به CDN بازگردانده می‌شود.

**پارامترها**

| پارامتر | نوع | ضروری | توضیحات |
|---|---|---|---|
| `url` | string | بله | URL کامل برگه‌ای که باید از آن اسکرین‌شات گرفته شود، مانند `https://example.com/about/` |
| `width` | integer | خیر | عرض viewport بر حسب پیکسل. پیش‌فرض `1280` |
| `height` | integer | خیر | ارتفاع viewport بر حسب پیکسل. پیش‌فرض `800` |
| `full_page` | boolean | خیر | به‌جای فقط viewport، کل برگه قابل پیمایش را ثبت می‌کند. پیش‌فرض `false` |
| `delay_ms` | integer | خیر | مدت انتظار بر حسب میلی‌ثانیه پس از بارگذاری برگه پیش از ثبت، که برای محتوای متحرک مفید است. پیش‌فرض `500` |
| `label` | string | خیر | برچسب قابل‌فهم برای انسان که همراه با پیوست در Media Library ذخیره می‌شود |

**بازمی‌گرداند**

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

دو اسکرین‌شات را می‌گیرد و یک امتیاز تفاوت بصری به‌همراه تصویری از تفاوت‌ها که نواحی تغییرکرده را برجسته می‌کند بازمی‌گرداند. برای تأیید اینکه یک تغییر طراحی نتیجه مورد انتظار را ایجاد کرده یا برای شناسایی رگرسیون‌های ناخواسته مفید است.

**پارامترها**

| پارامتر | نوع | ضروری | توضیحات |
|---|---|---|---|
| `before_url` | string | بله | URL برگه‌ای که باید به‌عنوان وضعیت «قبل» ثبت شود |
| `after_url` | string | بله | URL برگه‌ای که باید به‌عنوان وضعیت «بعد» ثبت شود. اگر مقایسه در طول زمان انجام می‌شود، می‌تواند همان URL باشد |
| `width` | integer | خیر | عرض viewport برای هر دو ثبت. پیش‌فرض `1280` |
| `threshold` | float | خیر | آستانه تفاوت پیکسلی (0.0–1.0). پیکسل‌های درون این میزان تحمل، بدون تغییر در نظر گرفته می‌شوند. پیش‌فرض `0.1` |

**بازمی‌گرداند**

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

`diff_score` برابر با `0.0` یعنی هیچ تغییر قابل‌مشاهده‌ای وجود ندارد؛ `1.0` یعنی هر پیکسل تغییر کرده است.

---

### `review_page_design` {#reviewpagedesign}

از یک برگه اسکرین‌شات می‌گیرد و آن را برای تحلیل بصری به مدل زبانی ارسال می‌کند. یک ارزیابی ساختاریافته را بازمی‌گرداند که چیدمان، تایپوگرافی، استفاده از رنگ، و نگرانی‌های دسترس‌پذیری را پوشش می‌دهد.

**پارامترها**

| پارامتر | نوع | ضروری | توضیحات |
|---|---|---|---|
| `url` | string | بله | URL کامل برگه‌ای که باید بازبینی شود |
| `focus` | string | خیر | فهرست جداشده با ویرگول از حوزه‌های بازبینی برای تأکید: `layout`، `typography`، `colour`، `accessibility`، `mobile`. پیش‌فرض: همه حوزه‌ها |
| `width` | integer | خیر | عرض viewport. پیش‌فرض `1280` |

**بازمی‌گرداند**

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

## قابلیت‌های قابل نصب {#installable-abilities}

Installable Abilities Registry به شما اجازه می‌دهد agent را با بسته‌های قابلیت اضافی که به‌صورت pluginهای WordPress توزیع می‌شوند گسترش دهید. هر بسته با استفاده از API استاندارد قابلیت، یک یا چند قابلیت را ثبت می‌کند.

### `list_available_abilities` {#listavailableabilities}

کاتالوگ بسته‌های قابلیت موجود برای نصب از رجیستری را بازمی‌گرداند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `category` | string | خیر | فیلتر بر اساس دسته‌بندی: `ecommerce`, `seo`, `media`, `social`, `developer` |

**برمی‌گرداند**

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

یک بسته توانایی را از رجیستری دانلود و فعال می‌کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `slug` | string | بله | slug پلاگین بسته توانایی |

**برمی‌گرداند** `{ "success": true, "slug": "gratis-ai-agent-woocommerce", "abilities_added": 3 }`

---

### `recommend_plugin` {#recommendplugin}

از رجیستری توانایی پرس‌وجو می‌کند تا بهترین پلاگین را برای یک مورد استفاده توصیف‌شده پیدا کند و، در صورت تمایل، آن را نصب کند.

**پارامترها**

| پارامتر | نوع | الزامی | توضیح |
|---|---|---|---|
| `description` | string | بله | توضیح به زبان طبیعی درباره قابلیت موردنظر |
| `install` | boolean | خیر | اگر `true` باشد، پلاگین پیشنهادی را فوراً نصب می‌کند. پیش‌فرض `false` است |

**مثال**

```json
{
  "description": "I need a contact form with file upload support and spam protection",
  "install": false
}
```

**برمی‌گرداند**

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
