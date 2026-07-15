---
title: داخیلی عامل‌لر
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ایچینده قورولموش Agent-لر

Gratis AI Agent v1.9.0 بئش ایچینده قورولموش agent ایله گلیردی؛ هر بیری معین بیر آلتلر دسته‌سی، اویغونلاشدیرلمیش system prompt، و او ساحه‌ده یایغین ایشلره اویغون باشلانغیج پیشنهادلری ایله قاباقجادان تنظیم اولونوب. Agent-لر آراسیندا دَییشمک assistant-ین نه ائده بیله‌جه‌یینی و نئجه جواب وئره‌جه‌یینی دَییشیر — سیزین طرفینیزدن هیچ بیر تنظیم لازیم دئییل. Superdav AI Agent v1.18.0، باغلی integrations تنظیم اولوناندا، بو ایش آقیشلارینا زمانلامانی تانئان آلتلر، یادآوری قئیدلری، تایید قاپیلاری، و SMS بیلدیریشلری آرتیرا بیلر.

## Agent نه‌دیر؟ {#what-is-an-agent}

هر agent آدلانمیش بیر تنظیم پروفیلیدیر و بونلاری بیرلشدیرر:

- **آلتلر** — agent-ین چاغیرماغینا ایجازه وئریلَن قابلیتلر (مثلاً Content Writer یازی یاراتما قابلیتلرینه گیریش آلار؛ Design Studio ایسه CSS و theme.json قابلیتلرینه گیریش آلار)
- **System prompt** — agent-ین لحنی، اؤنجه‌لیک‌لری، و محدودیتلرینی تعیین ائدن تاپشیریقلار
- **پیشنهادلر** — تئز باشلاماغینیزا کؤمک ائتمک اوچون چت آراوزونده گؤستریلَن قاباقجادان یازیلما prompt-لار

## Agent Picker-ه گیریش {#accessing-the-agent-picker}

1. WordPress ایداره sidebar-یندا **Gratis AI Agent** پنلینی آچین.
2. چت باشلیغینین سول-یوخاریسیندا **agent icon**-ونا کلیک ائدین (آیکون فعال agent-ی گؤسترمک اوچون دَییشیر).
3. **Agent Picker** بیر form-table اؤرتویو کیمی آچیلیر. هر agent اؤز آیکونو، آدی، و بیر سطیرلیق توضیحی ایله لیست‌لنیر.
4. فعال ائتمک اوچون بیر agent سطیرینه کلیک ائدین. چت باشلیغی درحال یئنیلنیر.

سؤحبتین اورتاسیندا دا agent دَییشه بیلرسینیز — یئنی agent-ین system prompt-و نؤوبتی پیامدان اعتبارن اثره مینیر.

## بئش ایچینده قورولموش Agent {#the-five-built-in-agents}

### Content Writer {#content-writer}

**تمرکز:** یازیلار، صفحه‌لر، و علاقه فورملاری یاراتماق و دوزه‌لتمک.

**موجود آلتلر:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations فعال اولاندا، تنظیم اولونموش calendar متنی، تایید قاپیلاری، یادآوریلار، و SMS بیلدیریش آلتلری ده تاییدلنمیش ایش آقیشلاری اوچون موجود اولا بیلر.

**یاخشی گؤردویو ایشلر:**
- بیر brief یا outline اساسینجا بلاگ یازیلاری حاضیرلاماق و یایینلاماق
- یئنی بیر سایت اوچون landing page دسته‌لری یاراتماق
- علاقه و سورغو فورملاری قورماق
- یازیلارا URL یا آختاریشدان featured image تعیین ائتمک
- تنظیم اولونموش Google Calendar متنیندن ایوند follow-up پیام‌لاری حاضیرلاماق، سونرا بیلدیریشلر گؤندرمکدن قاباق تایید اوچون دایانماق

**باشلانغیج پیشنهادلری:**
- *WordPress multisite-ین فایدالاری حاققیندا ۵۰۰ سؤزلوق بیر بلاگ یازیسی یاز.*
- *About، Services، و Contact صفحه‌سی یارات و اونلاری یایینلا.*
- *Contact صفحه‌سینه بیر booking enquiry form آرتیر.*
- *صباحین تنظیم اولونموش calendar event-یندن قاتیلانلار اوچون بیر یادآوری حاضیرلا و گؤندرمکدن قاباق تایید گؤزله.*

---

### Site Builder {#site-builder}

**تمرکز:** تک بیر prompt-دان باشدان-سونا وب‌سایت یاراتماق.

**موجود آلتلر:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 ایله، تنظیم اولونموش managed-service، تایید، یادآوری، calendar، و SMS آلتلری مدیرلر اونلاری فعال ائدن یئرلرده موجود اولا بیلر.

**یاخشی گؤردویو ایشلر:**
- توضیح وئریلَن بیر ایش نوعی اوچون چوخ-مرحله‌لی سایت قورولوش پلانی یاراتماق
- هر مرحله‌نی خودمختار یئرینه یئتیرمک — قورولوش، محتوا، یؤنلندیرمه، دیزاین
- پلان اورتاسیندا خطالاردان ال ایله دخالت لازیم اولمادان دوزلمک
- قورولوشون بیر حصه‌سی کیمی پیشنهاد اولونان plugin-لری قوراشدیرماق
- علاقه فورملارینی بیر باشا چت آراوزوندن یاراتماق (Superdav AI Agent v1.10.0+)
- تایید قاپیلاری و یادآوری قئیدلری فعال اولاندا، تکرار بیلدیریشلر اولمادان launch یادآوریلارینی یا قاتیلانلارا follow-up هماهنگ ائتمک

**باشلانغیج پیشنهادلری:**
- *گالری post type، booking صفحه‌سی، و علاقه فورمی اولان بیر عکاسی پورتفولیو سایتی قور.*
- *آنلاین منو، آچیلش ساعتلاری، و میز booking سورغو فورمی اولان بیر رستوران وب‌سایتی یارات.*
- *خیدمت صفحه‌لری، پورتفولیو بؤلمه‌سی، و بلاگ ایله بیر آزاد مشاوره سایتی قور.*
- *site builder ایله Contact صفحه‌سینه علاقه فورمی آرتیر.*
- *سایت launch checklist تایید اولاندان سونرا، تنظیم اولونموش stakeholder علاقه‌سینه SMS یادآوری گؤندر.*

---

### Design Studio {#design-studio}

**تمرکز:** گؤرونوش اؤزللشدیرمه‌سی — رنگلر، تایپوگرافی، CSS، و block pattern-لر.

**موجود آلتلر:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**یاخشی گؤردویو ایشلر:**
- آدلانمیش theme preset-لری اویغولاماق (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json واسطه‌سیله عمومی تایپوگرافی و رنگ پالت‌لارینی دئییق ائتمک
- برند-اوزل override-لار اوچون custom CSS دَخیل ائتمک
- بیر صفحه‌دن screenshot آلماق و دیزاین مسئله‌لری اوچون اونونو گؤزدن کئچیرمک

**باشلانغیج پیشنهادلری:**
- *warm-editorial preset-ینی اویغولا و سونرا اصلی رنگی #2d6a4f ائله.*
- *homepage-ین screenshot-ونو آل و منه نه‌یی یاخشیلشدیره‌جه‌یینی دئ.*
- *تام-ائنلی آرخا پلان تصویری و مرکزده باشلیغی اولان تکرار ایستیفاده ائدیله بیلن hero block pattern یارات.*

### Plugin Manager {#plugin-manager}

**تمرکز:** WordPress plugin-لرینی کشف ائتمک، قوراشدیرماق، و ایداره ائتمک.

**موجود آلتلر:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**یاخشی گؤردویو ایشلر:**
- توضیح وئریلَن ایستیفاده حالتی اوچون ان یاخشی plugin-ی پیشنهاد ائتمک
- registry-دن ability pack-لری قوراشدیرماق
- موجود ability catalog-ونو کاتگوریایه گؤره گزمک

**باشلانغیج پیشنهادلری:**
- *membership directory اوچون ان یاخشی plugin نه‌دیر؟*
- *WooCommerce abilities pack-ینی قوراشدیر.*
- *بوتون موجود ecommerce ability pack-لری منه گؤستر.*

---

### Support Assistant {#support-assistant}

**تمرکز:** سایت محتواسی، تنظیمات، و WordPress تنظیمی حاققیندا سواللارا جواب وئرمک.

**موجود آلتلر:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**نه‌لری یاخشی گؤرور:**
- ایندیکی سایت تنظیم‌لرینی و سئچیم‌لرینی تاپماق
- سایتدا هانسی یازی نوعلاری، سینیف‌بندی‌لر و منولار قورولوب، آچیقلاماق
- جانلی دَیَرلری اوخویا‌راق "بو تنظیم نه ایش گؤرور؟" سوآل‌لارینا جواب وئرمک
- دَییشیکلیک ائتمزدن قاباق، فقط-اوخوما عیب‌یابی قاتی کیمی ایشلَمک

**باشلاماق اوچون تکلیف‌لر:**
- *بو سایتدا هانسی پلاگین‌لر و تنظیم‌لر ایندی فعالدیر؟*
- *بو سایتدا قئید ائدیلمیش بوتون اؤزل یازی نوعلارینی لیستله.*
- *هانسی یؤنلندیرمه منولاری وار و هارایا آیریلیبلار؟*

---

## Superdav اوتوماتلاشدیرما باغلانتی‌لاری {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 باغلانتی‌لاری قورولاندا، ایچری‌ده گلمه ایجنت‌لر داها گؤوه‌نلی و زمان‌جدولیندن آگاه اوتوماتلاشدیرما ایش آخیملاریندا ایشتیراک ائده بیلر:

- **Google Calendar اوخوما آلَتلری** ایجنت‌لره ایمکان وئرر کی، آردیجیل ایشی حاضیرلامازد‌ان قاباق قورولموش تقویم‌لری و حادثه‌لری یوخلاسینلار.
- **تماس و قاتیلان اویغونلاشدیرماسی** حادثه قاتیلانلارینی WordPress ایشلدن‌لرینه یا تانینان تماس‌لارا اویغونلاشدیرماغا کؤمک ائدیر.
- **اینساضان تصدیق قاپیلاری** حساس عملیاتی ایجازه‌لی بیر ایشلدن باخیب تأیید ائدنکیمی ساخلیار.
- **خاطیرلاتما قئیدلری** زمانلانمیش ایش‌لر یئنیدَن یوخلاناندا یا تکرار اولاندا، تکراری بیلدیریشلرین قارشی‌سینی آلیر.
- **TextBee SMS بیلدیریشلری** SMS کیملیک بیلگی‌لری و ایش آخی‌می ایجازه‌لری فعال اولاندا، یالنیز قورولموش متن پیام‌لارینی گؤندرر.

تؤوصیه اولونان ایش آخی‌می: ایجنت‌دن پیام یا عملی حاضیرلاماغی ایسته‌یین، تصدیق ایستگینی گؤزدن کئچیرین، سونرا تصدیق اولونموش عملین داوام ائتمسینه ایجازه وئرین. تکرارلانان خاطیرلاتمالار اوچون خاطیرلاتما تکرارینی آزالتما سئچیمینی فعال ساخلا‌یین کی، عینی حادثه یا تماس تکرا-تکرا بیلدیریش آلمسین.

---

## ایجنت‌لری اؤزللشدیرمک {#customising-agents}

هر ایچری‌ده گلمه ایجنت `gratis_ai_agent_agents` فیلترینی ایشلده‌رک گئنیشله‌نیب یا دَییشدیریله بیلر.

### وار اولان ایجنت‌ه اؤزل سیستم پرامپت آرتیرماق {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### یئنی ایجنت قئید ائتمک {#registering-a-new-agent}

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

یئنی ایجنت فیلتر ایشلَیَندن درحال سونرا ایجنت سئچن‌ده گؤرونور.

### ایچری‌ده گلمه ایجنتی سیلمک {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
