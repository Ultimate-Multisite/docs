---
title: ئاسایی ئەژمنەکان
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Agents Built-in

Gratis AI Agent v1.9.0 پچ پنج ئاژێری پێشوەخت (built-in agents) دەهێنێت، هەر یەک لەوانە بە ئامراز و ئامرازە دیاریکراوێک، سیستەم پرۆمبتێکی تایبەت، و پێشنیاری سەرەتایی کە لەگەڵ ئاسانکارییە باوەکان لەو ناوچەیەدا دەگونجێن. گۆڕینی نێوان ئاژێرەکان کاریگەریی ئەوەیە کە ئەسستنت چۆن کار دەکات و چۆن وەڵام دەدات، بەبێ پێویستی هەر جۆرە ڕێکخستنی لەلایەن تۆشەوە.

## ئاژێر چییە؟

هەر یەک لەو ئاژێرە پڕۆفایلێکی دیاریکراو (named configuration profile)ە کە کۆیچوونەیەک لەم شتە دەگرێتەوە:

- **Tools** — تواناکان کە ڕێگە دەدرێت ئاژێرەکە بەکاربهێنێت (بۆ نموونە، نووسەرێکی ناوەڕۆک دەتوانێت کارەکانی دروستکردنی پۆست و صفحات ئەنجام بدات؛ استودیۆی دیزاین دەتوانێت کارەکانی CSS و theme.json بەکاربهێنێت).
- **System prompt** — ڕێنماییەکان کە توندیی، پێشنیارەکان، و سنوورەکانی ئاژێرەکە دیاری دەکەن.
- **Suggestions** — پرۆمبتە نووسراوەکانی پێشوەخت کە لە جێی چاتدا دەردەکەون بۆ ئەوەی بە خێرایی دەستپێبکەیت.

## دەستگەیشتن بۆ هەڵبژاردنی ئاژێر (Agent Picker)

1. **Gratis AI Agent** پۆلەی لە لایەنی بەڕێوەبردنی WordPress بکەرەوە.
2. **agent icon**-ی لە سەرەوەی سەری چاتەکە clique بکە (ئای کونەکە دەگۆڕێت بۆ ئەوەی نیشان بدات ئاژێرەکەی چالاکە).
3. **Agent Picker** وەک پڕۆفایلێکی ناوەڕۆک لەسەر ڕێکخستنی فۆرم دەکرێتەوە. هەر ئاژێرێک بە ئای کونەکە، ناونیشانی، و وەسفی یەک-ڕێوە دیارراو نیشان دەدرێت.
4. سەر ئەو ڕێفەی (row)ە clique بکە بۆ چالاککردن. سەری چاتەکە بە خێرایی نوێ دەبێتەوە.

دەتوانیت لە نێوان قسەکردن بگۆڕیت ئاژێر؛ سیستەم پرۆمبتی ئاژێرە نوێی لەو پەیامە دواییندا دەست پێدەکات کارکردن.

## پەنج ئاژێرە پێشوەخت (The Five Built-in Agents)

### نووسەر ناوەڕۆک (Content Writer)

**تایبەتمەندی سەرەکی:** دروستکردنی و چاککردنەوەی پۆستەکان، صفحاتەکان، و فۆرمەکانی پەیوەندی.

**ئامرازە بەکارخوازراوەکان:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**چی چیه کار دۆخۆشه‌كه‌ت؟**
- نووسینی و بڵاوکردنەوەی پۆستەکانی بلاگ لەسەر بنووتنی کورت یان پێکهاتەی وردی (outline)
- دروستکردنی کۆمەڵێک لاندینگ پیج بۆ شوێنێکی نوێ
- دروستکردنی فۆرمەکانی پەیوەندی و پرسیارکان
- دانانی وێنەی سەرنجڕاکێش لەسەر پۆستەکان بە شێوەی لینک یان گەڕان

**پیشنهادەکانی دەستپێک:**
- *نووسینی پۆستی بلاگێکی ٥٠٠ وشەیی لەسەر سوودەکانی WordPress multisite.*
- *دروستکردنی پەڕەیەکی باسی، خدمات و پەیوەندی دروست بکە و بڵاو بکەرەوە.*
- *فۆرمێکی rezervه‌کردن بۆ پرسیارکان لەسەر پەڕەی پەیوەندی زیاد بکە.*

---

### Site Builder (درستوکار شوێنساز)

**تایبەتمەندی سەرەکی:** دروستکردنی وێبسایتی تەواوی لە یەک پڕۆمێپت (prompt)دا.

**ئامرازەکانی بەکارهێنان:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**چی چیه کار دۆخۆشه‌كه‌ت؟**
- پلانی دروستکردنی وێبسایتێکی چەند قۆناغی بۆ جۆری بازرگانیی دیاریکراو دەنووسێتەوە.
- هەر قۆناغێک بە شێوەیەکی خۆبەڕێوەدەبێت — پێکهاتە، ناوەڕۆک، ڕێنمایی (navigation)، و دیزاین.
- لە ماوەی پلانداناندا لە هەڵەکاندا دەگەڕێتەوە بەبێ ئەوەی کارلێکێکی دەستکرد پێویست بێت.
- پلاتینی گواستراو پێشنیارکراون وەک بەشێک لە دروستکردنەکە دابنێت.
- فۆرمەکانی پەیوەندی ڕاستەوخۆ لەسەر جێی چات (Chat interface) دەستپێدەکەیت (Superdav AI Agent v1.10.0+).

**پیشنهادەکانی دەستپێک:**
- *دروستکردنی وێبسایتی پۆرتۆفۆڵ بۆ فۆتۆگرافی لەگەڵ جۆرێکی پۆستی گالەری، پەڕەیەکی rezervه‌کردن، و فۆرم پەیوەندی.*
- *دروستکردنی وێبسایتی restorant (خاوەنی خواردنەوە) لەگەڵ مینیووی ئۆنلاین، کاتی کارکردن، و فۆرمی پرسیار بۆ rezervacijaی خاڵ.*
- *دروستکردنی وێبسایتی ڕاوێژکاری فری لانسینگ لەگەڵ پەڕەکانی خدمات، بەشی پۆرتۆفۆڵ، و بلاگ.*
- *بەکارھێنانی Site Builder بۆ زیادکردنی فۆرم پەیوەندییەک لەسەر پەڕەی پەیوەندی.*

---

### Design Studio (استۆدی دیزاین)

**تایبەتمەندی سەرەکی:** گۆڕینی ڕەنگ، تایپوگرافی (فۆنت)، CSS، و پترۆنەکانی بلوک.

**أدوات موجودەکان:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**چی باش دەکات:**
- پێشستە تێیدا (وەک minimal-dark، warm-editorial، corporate-blue، vibrant-startup، classic-blog) جێبەجێکردن.
- ڕێکخستنی تایبەتمەندیی گشتی و پالتۆپەکانی ڕەنگ لە ڕێگەی theme.jsonەوە.
- CSS تایبەت بۆ گۆڕانکارییەکان بە تایبەتمەندی براندەکە دەربڵاودان (overrides) دەهێنێتە ناو سایتێک.
- وەرگرتنی سکرین شاتی یەک صفحات و داواکردنی پێداچوونەوەی دیزاین بۆ کێشەکانی دیزاین.

**پیشنهادەکانی سەرەتایی:**
- *پێشستە warm-editorialەکە جێبەجێ بکە و پاشان ڕەنگی سەرەکی (primary colour) بە #2d6a4f دیاری بکە.*
- *سکرین شاتی سەرۆکە (homepage) وەربگرە و بڵێ چیت دەتوانی بدەیت باشتر بکەیت.*
- *پۆلێکی بلاک پۆل (hero block pattern) بەکاربهێنە کە وێنەیەکی پسراوەی بە تەواوی ڕووبارێژکراو و سێسڵی سەرنجڕاکێش هەبێت.*

---

### Plugin Manager (بەڕێوەبردنی پلگین)

**تایبەتمەندی سەرەکی:** دۆزینەوە، دامەزراندن و بەڕێوەبردنی WordPress plugins.

**أدوات موجودەکان:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**چی باش دەکات:**
- بۆ ئەو شێوازە دیاریکراو، باشترین پلگینەکە پێشنیار دەکات.
- پۆڵەکانی تایبەتمەندی (ability packs) لە registries و دامەزراندن دەکاتەوە.
- کاتالوگێکی تایبەتمەندیی موجود بە بەشی جیاواز دەگەڕێتەوە.

**پیشنهادەکانی سەرەتایی:**
- *باشترین پلگین بۆ دۆلێری ئەندازیاری (membership directory) چییە؟*
- *ability pack ی WooCommerce دامەزران بکە.*
- *بۆ من هەموو پۆڵەکانی تایبەتمەندیی بازاڕکردن (ecommerce ability packs) نیشان بدە.*

---

### Support Assistant (یاریری پشتگیریکردن)

**تایبەتمەندی سەرەکی:** وەڵامدانەوەی پرسیارەکان دەربارەی ناوەڕۆکی سایت، ڕێکخستنەکان و پێکهاتەی WordPress.

**أدوات موجودەکان:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**چی چیه؟ (What it does well):**
- تنظیمات و گزینه‌های فعلی سایت رو پیدا می‌کنه.
- توضیح می‌ده که چه نوع پست‌ها (post types)، تاکسونومی‌ها (taxonomies) و منوها روی سایت تنظیم شدن.
- با خواندن مقادیر زنده، به سوالاتی مثل "این تنظیم این کار رو می‌کنه؟" پاسخ میده.
- قبل از اینکه تغییر ایجاد کنید، یک لایه تشخیص فقط (read-only diagnostic layer) عمل می‌کنه.

**پیشنهادات اولیه:**
- *در حال حاضر چه پلاگین‌ها و تنظیماتی روی این سایت فعال هستن؟*
- *تمام انواع پست سفارشی ثبت شده روی این سایت رو لیست کن.*
- *چه منوی ناوبری‌هایی وجود دارن و کجا اختصاص داده شدن؟*

---

## شخصی‌سازی ایجنت‌ها (Customising Agents)

هر ایجنت داخلی می‌تونه از طریق فیلتر `gratis_ai_agent_agents` گسترش پیدا کنه یا جایگزین بشه.

### اضافه کردن یک پرامپت سیستمی سفارشی به یک ایجنت موجود

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

ئەژمارەکەی نوێ بەposa filterەکە دەردەکەوێت لەسەر ئەوەی فیلترەکە کار بکات.

### هەڵگرتنی ئەژمارێکی پێشوەخت (built-in agent)

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
