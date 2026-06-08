---
title: عامل‌های داخلی
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# ایجنت‌های داخلی (Built-in Agents)

Gratis AI Agent v1.9.0 پنج ایجنت داخلی را ارائه می‌دهد که هر کدام با مجموعه‌ای از ابزارهای متمرکز، یک پرامپت سیستمی (system prompt) سفارشی و پیشنهادهای شروع کار که متناسب با وظایف رایج در آن حوزه هستند، از پیش پیکربندی شده‌اند. جابجایی بین ایجنت‌ها، کاری که دستیار می‌تواند انجام دهد و نحوه پاسخ‌دهی آن را تغییر می‌دهد — بدون اینکه شما نیاز به هیچ پیکربندی‌ای داشته باشید.

## ایجنت چیست؟ (What Is an Agent?)

هر ایجنت، یک پروفایل پیکربندی با نام مشخص است که موارد زیر را ترکیب می‌کند:

- **ابزارها (Tools)** — قابلیت‌هایی که ایجنت اجازه دارد فراخوانی کند (مثلاً یک Content Writer به قابلیت‌های ایجاد پست دسترسی دارد؛ یک Design Studio به قابلیت‌های CSS و theme.json دسترسی دارد).
- **پرامپت سیستمی (System prompt)** — دستورالعمل‌هایی که لحن، اولویت‌ها و محدودیت‌های ایجنت را تعیین می‌کنند.
- **پیشنهادها (Suggestions)** — پرامپت‌های از پیش نوشته شده که در رابط چت نمایش داده می‌شوند تا به شما کمک کنند سریع شروع کنید.

## دسترسی به انتخاب‌کننده ایجنت (Accessing the Agent Picker)

۱. پنل **Gratis AI Agent** را در نوار کناری ادمین وردپرس باز کنید.
۲. روی **آیکون ایجنت (agent icon)** در گوشه بالا سمت چپ هدر چت کلیک کنید (این آیکون تغییر می‌کند تا ایجنت فعال را نشان دهد).
۳. **Agent Picker** به صورت یک پوشش (overlay) به شکل جدول فرم باز می‌شود. هر ایجنت با آیکون، نام و یک توضیح تک‌خطی فهرست شده است.
۴. روی یک ردیف ایجنت کلیک کنید تا آن را فعال نمایید. هدر چت بلافاصله به‌روز می‌شود.

شما همچنین می‌توانید ایجنت‌ها را در میانه مکالمه تغییر دهید — پرامپت سیستمی ایجنت جدید از پیام بعدی اعمال می‌شود.

## پنج ایجنت داخلی (The Five Built-in Agents)

### Content Writer (نویسنده محتوا)

**تمرکز:** ایجاد و ویرایش پست‌ها، صفحات و فرم‌های تماس.

**ابزارهای موجود:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**در چه کارهایی خوب عمل می‌کند:**
- پیش‌نویس و انتشار پست‌های وبلاگ بر اساس یک خلاصه یا طرح کلی.
- ایجاد دسته‌ای از صفحات فرود (landing pages) برای یک سایت جدید.
- ساخت فرم‌های تماس و درخواست.
- تنظیم تصاویر شاخص (featured images) برای پست‌ها از طریق URL یا جستجو.

**پیشنهادهای شروع کار:**
- *یک پست وبلاگ ۵۰۰ کلمه‌ای درباره مزایای وردپرس Multisite بنویس.*
- *یک صفحه درباره ما، خدمات و تماس ایجاد و آن‌ها را منتشر کن.*
- *یک فرم درخواست رزرو به صفحه تماس اضافه کن.*

---

### Site Builder (سازنده سایت)

**تمرکز:** ساخت وب‌سایت کامل از یک پرامپت واحد.

**ابزارهای موجود:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**در چه کارهایی خوب عمل می‌کند:**
- تولید یک طرح ساخت سایت چند مرحله‌ای برای نوع کسب‌وکار توصیف شده.
- اجرای خودکار هر مرحله — ساختار، محتوا، ناوبری، طراحی.
- بازیابی از خطاها در میانه طرح بدون نیاز به مداخله دستی.
- نصب پلاگین‌های توصیه‌شده به عنوان بخشی از ساخت.
- ایجاد فرم‌های تماس مستقیماً از رابط چت (Superdav AI Agent v1.10.0+).

**پیشنهادهای شروع کار:**
- *یک سایت پورتفولیو عکاسی با نوع پست گالری، یک صفحه رزرو و یک فرم تماس بساز.*
- *یک وب‌سایت رستوران با منوی آنلاین، ساعات کاری و فرم درخواست رزرو میز ایجاد کن.*
- *یک سایت مشاوره فریلنسری با صفحات خدمات، بخش پورتفولیو و یک وبلاگ راه‌اندازی کن.*
- *با استفاده از سازنده سایت، یک فرم تماس به صفحه تماس اضافه کن.*

---

### Design Studio (استودیوی طراحی)

**تمرکز:** سفارشی‌سازی بصری — رنگ‌ها، تایپوگرافی، CSS و الگوهای بلوک.

**ابزارهای موجود:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**در چه کارهایی خوب عمل می‌کند:**
- اعمال پریست‌های تم نام‌گذاری شده (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog).
- تنظیم دقیق تایپوگرافی و پالت رنگ جهانی از طریق theme.json.
- تزریق CSS سفارشی برای بازنویسی‌های خاص برند.
- گرفتن اسکرین‌شات از یک صفحه و بررسی آن برای مشکلات طراحی.

**پیشنهادهای شروع کار:**
- *پریست warm-editorial را اعمال کن و سپس رنگ اصلی را روی #2d6a4f تنظیم کن.*
- *اسکرین‌شات از صفحه اصلی بگیر و بگو چه چیزی را بهبود می‌دم.*
- *یک الگوی بلوک هیرو قابل استفاده مجدد با پس‌زمینه تصویر تمام‌عرض و عنوان مرکزی ایجاد کن.*

---

### Plugin Manager (مدیر پلاگین)

**تمرکز:** کشف، نصب و مدیریت پلاگین‌های وردپرس.

**ابزارهای موجود:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**در چه کارهایی خوب عمل می‌کند:**
- توصیه‌کردن بهترین پلاگین برای یک مورد استفاده توصیف شده.
- نصب بسته‌های قابلیت (ability packs) از رجیستری.
- مرور کاتالوگ قابلیت‌های موجود بر اساس دسته‌بندی.

**پیشنهادهای شروع کار:**
- *بهترین پلاگین برای یک دایرکتوری عضویت (membership directory) چیست؟*
- *بسته قابلیت WooCommerce را نصب کن.*
- *تمام بسته‌های قابلیت تجارت الکترونیک موجود را به من نشان بده.*

---

### Support Assistant (دستیار پشتیبانی)

**تمرکز:** پاسخ به سؤالات در مورد محتوای سایت، تنظیمات و پیکربندی وردپرس.

**ابزارهای موجود:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**در چه کارهایی خوب عمل می‌کند:**
- جستجوی تنظیمات و گزینه‌های فعلی سایت.
- توضیح اینکه چه نوع پست‌ها، تاکسونومی‌ها و منوهایی در سایت پیکربندی شده‌اند.
- پاسخ به سؤالات "این تنظیمات چه کاری انجام می‌دهد؟" با خواندن مقادیر زنده.
- عمل کردن به عنوان یک لایه تشخیصی فقط خواندنی قبل از اعمال تغییرات.

**پیشنهادهای شروع کار:**
- *در حال حاضر چه پلاگین‌ها و تنظیماتی در این سایت فعال هستند؟*
- *تمام نوع پست‌های سفارشی (custom post types) ثبت شده در این سایت را لیست کن.*
- *چه منوهای ناوبری وجود دارند و کجا تخصیص داده شده‌اند؟*

---

## سفارشی‌سازی ایجنت‌ها (Customising Agents)

هر ایجنت داخلی می‌تواند از طریق فیلتر `gratis_ai_agent_agents` گسترش یا جایگزین شود.

### افزودن یک پرامپت سیستمی سفارشی به یک ایجنت موجود

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ثبت یک ایجنت جدید

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    $agents['seo-specialist'] = [
        'name'          => 'SEO Specialist',
        'description'   => 'Optimises posts and pages for search engines.',
        'icon'          => 'dashicons-search',
        'tools'         => [ 'get_option', 'set_option', 'create_post', 'update_post', 'list_post_types' ],
        'system_prompt' => 'You are an SEO specialist. Focus on keyword optimisation, meta descriptions, and structured data.',
        'suggestions'   => [
            'Review the homepage title and meta description.',
            'Suggest title tag improvements for the five most recent posts.',
        ],
    ];
    return $agents;
} );
```

ایجنت جدید بلافاصله پس از اجرای فیلتر در Agent Picker ظاهر می‌شود.

### حذف یک ایجنت داخلی

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
