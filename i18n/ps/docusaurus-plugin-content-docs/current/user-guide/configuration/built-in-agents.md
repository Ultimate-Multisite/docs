---
title: داخلې ایجنټونه
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# ایجنټونه چې هم راغلی دي (Built-in Agents)

Gratis AI Agent v1.9.0 ته پښیمه پنځه هم راغلاستې ایجنټونه (built-in agents) راغلي دي، چې هر یو یې له ځان سره متخصص инструменти، یو جوړ شوی سیستم پرامپټ (system prompt)، او د هغه برخې لپاره عام کارونو سره سماتلونکي پیل کولو وړاندیزونه لري. د ایجنټونو ترمنځ بدلول دا بدلوي چې助手 څه کولی شي او څنګه ځواب ورکوي – بدون هیڅ ډول تنظیم کولو اړتیا له تاسو څخه نه ده.

## ایجنټ څه دی؟ (What Is an Agent?)

هر ایجنټ یو نوم لري، هغه تنظیمي پروفایل دی چې د درجاله موارد ترکیب کوي:

- **Tools** — هغه وړتیاوې چې ایجنټ اجازه لري کار کړي (مثالونه: یوه محتوا لیکونکی کولی شي پوسټونه جوړ کړي؛ یو ډیزاین اسټیډیو CSS او theme.json وړتیاوې ترلاسه کوي).
- **System prompt** — هغه لارښوونې چې د ایجنټ له لحن، ترجیحونو او محدودیتونو تعیین کوي.
- **Suggestions** — هغه پیشینې پرامپټونه چې په چټ چیټ رابطې کې ښودل کیږي ترڅو تاسو په چټه توګه کار پیل کړئ.

## د ایجنټ انتخاب (Accessing the Agent Picker)

۱. په WordPress admin sidebar کې **Gratis AI Agent** پینل ته ورشي.
۲. په چټ هېدر څخه بالاچیدونکي **agent icon** باندې کلیک وکړئ (د ایجنټ فعال کیدو سره دا آیکون بدلون کوي).
۳. **Agent Picker** د یو ډول form-table همښو کې ښکاري. هر ایجنټ خپل آیکون، نوم او یوه سطرونه توضیحات لري.
۴. په یو ایجنټ رنګ باندې کلیک وکړئ ترڅو هغه فعال کړئ. چټ هېدر فوراً بدل کیږي.

ستاسو کولی شئ په دوام کې له چټ څخه هم ایجنټونو بدل کړئ – د نوي ایجنټ سیستم پرامپټ له ورته پیغام څخه کار کوي.

## پنځه راغلاستې ایجنټونه (The Five Built-in Agents)

### محتوا لیکونکی (Content Writer)

**تخصص:** پوسټونه، صفحات او اړیکو فارمونه جوړول او ترمیمول.

**لکه инструمنټونه (Available tools):** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**څه ښه کاروي:**
- د یوې خپلو طرحې یا بنسټ څخه بلاګ پوسټونه لیکل او veröffentولیت搞م
- د یوې نوي سایت لپاره ډله یې له لاندې صفحات جوړول
- اړیکو او پوښتنو لپاره فارمز (forms) جوړول
- د یو URL یا سرچ کیهانه څخه په پوسټونو کې ځانګړې عکسونه تنظیمول

**پختیکي وړاندیزونه:**
- *د وورډپرس مัลټیسایت ګټاتو بشپړ ۵۰۰ کلمو بلاګ پوسټ لیکئ.*
- *یو "د کار" (About)، "خدمات" (Services) او "تماس" (Contact) صفحه جوړه کړئ او یې veröffentولیت搞ئ.*
- *د تماس صفحې ته یو بوکینګ پوښتنه فارم اضافه کړئ.*

---

### سایت جوړونکی (Site Builder)

**تمرکز:** له یوه پیغام څخه پورته ټول ویب سايت جوړول.

**لکه کارمنجې (Tools):** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**څه ښه کاروي:**
- د یوې کاروبار ډول لپاره ډله یې په څو مراحل کې جوړول (د ساختار، محتوا، نیوونه، ډیزاین).
- هر مرحله به خود بخښنه سره اجرا شي — یعنی بدون دا چې تاسو manuāli دخیل درولو ته اړتیا ولرو.
- د پلان په منځکې غلطۍ څخه هم بیرته راغلی (Recover) کېږي او باید ورسره کار وکړئ.
- د جوړونالي پروسې په توګه توصیه شوي pluginونه هم نصب کیږي.
- له چټ چیټ رابطو (chat interface) څخه مستقیم تماس فارمز جوړول (Superdav AI Agent v1.10.0+).

**پختیکي وړاندیزونه:**
- *یو عکسहरूको پورټفولیۆ سایت جوړ کړئ چې دギャلری پوسټ ډول، یو بوکینګ صفحه او یو تماس فارم لري.*
- *د رستورانت ویب سايت جوړ کړئ چې آنلاین منو، د کاره کولو ساعتونه (opening hours) او د میزको رزرو پوښتنه فارم لري.*
- *یو فری لانس کنسلټینګ سایت جوړ کړئ چې د خدمتونو صفحات، یو پورټفولیۆ بخشې او یو بلاګ هم وي.*
- *د سایت جوړونکي (site builder) کارولو سره تماس صفحې ته یو تماس فارم اضافه کړئ.*

---

### ډیزاین استډیو (Design Studio)

**تمرکز:** بصري تنظیمول — رنګونه، فونټونه (typography)، CSS او بلاک نمونې.

**ابزارهایی چې موجود دي:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**د ښه کار کولو معیار:**
- د نومونه لري Theme presets (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) تطبيقول.
- له theme.json له لارې د کلونو او رنګونو تنظیمول.
- د برانډ لپاره ځانګړي CSS ورته اضافه کول.
- د یوه صفحې Screenshot و اخیستل او د ډیزایني مساواتونه وګورو.

**پختیک وړاندیزونه:**
- *warm-editorial preset تطبيق کړئ او بیا primary colour #2d6a4f تنظیم کړئ.*
- *د homepage screenshot و اخیستل وکړئ او ورته ووایاست چې څه ښه کولای شئ.*
- *یو قابل مخول hero block pattern جوړ کړئ چې د پوره په سرتاسې background image او مرکز شوي heading لري.*

---

### Plugin Manager (د پلاګین مدیر)

**تمرکز:** WordPress پلاګینونه وموندل، نصب کول او اداره کول.

**موجوده ابزارې:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**د ښه کار کولو معیار:**
- د یو مشخص کار لپاره غوره پلاګین وړاندیزول.
- له registry څخه ability packs نصب کول.
- د مختلف categories په اساس موجود ability catalogue ګورنه.

**پختیک وړاندیزونه:**
- *د membership directory لپاره غوره پلاګین څه دی؟*
- *WooCommerce abilities pack نصب کړئ.*
- *مې ټول موجود ecommerce ability packs ښیئ.*

---

### Support Assistant (د مرسته معاون)

**تمرکز:** د سایت محتوا، تنظیمات او WordPress konfiguration په اړه پوښتنې ورکول.

**موجوده ابزارې:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**په ښه کارولو کېدونکی خواوو:**
- د اوسني سایت تنظیمات او خ onto (options) کی تلاشي کول.
- دا په سایت کې کوم post types، taxonomies، او menus څنګه تنظیم شوي دي، وضاحت ورکول.
- له ژوندۍ मानونو (live values) لوستنې له لارې "دا تنظیم څه کار کوي؟" د پوښتنو ځواب ورکول.
- پر بدلولو پخوانیو لایي (read-only) تشخیصی لایه هم کار کول.

**پختګونې وړاندیزونه:**
- *د دې سایتमा اوسني کوم pluginان او تنظیمات څه دي؟*
- *د دې سایت کې ټول custom post types لیست کړئ.*
- *کوم navigation menus شتون لري او دوی چیرته تړلي دي؟*

---

## Customising Agents (Agentانو ته تغییر ورکول)

مخلوټل (built-in) هر agent (کارکن) د `gratis_ai_agent_agents` filter له لارې اضافه یا بدلول کیدای شي.

### د اوسني agent ته custom system prompt اضافه کول

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### یو نوی agent register کول

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

شغل جديد Agent Picker (انتخاب عامل) بلا به، فوراً بعد اینکه فیلتر اجرا میشه.

### حذف یک عامل داخلی

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
