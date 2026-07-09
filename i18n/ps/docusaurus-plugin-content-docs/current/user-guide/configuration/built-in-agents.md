---
title: دننه جوړ شوي استازي
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# جوړ-دننه Agents

Gratis AI Agent v1.9.0 پنځه جوړ-دننه agents وړاندې کوي، چې هر یو د وسیلو له متمرکزې ټولګې، برابر شوي system prompt، او د پیل وړاندیزونو سره مخکې له مخکې تنظیم شوی وي، چې په هغه برخه کې له عامو دندو سره سمون لري. د agents ترمنځ بدلول دا بدلوي چې assistant څه کولی شي او څنګه ځواب ورکوي — پرته له دې چې ستاسې له خوا کومه تنظیمونه وشي. Superdav AI Agent v1.18.0 کولای شي دې کاري بهیرونو ته د مهال‌وېش-خبر وسیلې، د یادونې ریکارډونه، د تایید دروازې، او SMS خبرتیاوې ورزیاتې کړي، کله چې اړوند ادغامونه تنظیم شوي وي.

## Agent څه شی دی؟

هر agent یو نومول شوی تنظیمي پروفایل دی چې یوځای کوي:

- **وسیلې** — هغه وړتیاوې چې agent ته د رابللو اجازه ورکړل شوې وي (لکه Content Writer د لیکنې-جوړولو وړتیاوو ته لاسرسی لري؛ Design Studio د CSS او theme.json وړتیاوو ته لاسرسی لري)
- **System prompt** — لارښوونې چې د agent لحن، لومړیتوبونه، او محدودیتونه ټاکي
- **وړاندیزونه** — مخکې لیکل شوي prompts چې په chat انٹرفېس کې ښودل کېږي څو له تاسې سره ژر پیل کې مرسته وکړي

## Agent Picker ته لاسرسی

1. د WordPress اداري اړخ‌پټې کې د **Gratis AI Agent** پینل پرانیزئ.
2. د chat سرلیک په پاس-چپ کې د **agent icon** کلیک وکړئ (icon د فعال agent د ښودلو لپاره بدلېږي).
3. **Agent Picker** د form-table پوښښ په توګه پرانېستل کېږي. هر agent د خپل icon، نوم، او یوې کرښې تشریح سره لېست کېږي.
4. د agent قطار کلیک کړئ چې فعال یې کړئ. د chat سرلیک سمدستي تازه کېږي.

تاسې کولای شئ د خبرو اترو په منځ کې هم agents بدل کړئ — د نوي agent system prompt له بل پیغام څخه اغېزمنېږي.

## پنځه جوړ-دننه Agents

### Content Writer

**تمرکز:** د لیکنو، پاڼو، او د اړیکې فورمو جوړول او سمول.

**شته وسیلې:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. کله چې د Superdav AI Agent v1.18.0 ادغامونه فعال وي، تنظیم شوی calendar context، د تایید دروازې، یادونې، او د SMS خبرتیا وسیلې هم د تایید شوو کاري بهیرونو لپاره شتون لرلای شي.

**په دې کارونو کې ښه دی:**
- له لنډیز یا خاکې څخه د blog لیکنو مسوده جوړول او خپرول
- د نوي site لپاره د landing پاڼو ډلې جوړول
- د اړیکې او پوښتنې فورمې جوړول
- له URL یا لټون څخه په لیکنو کې featured images ټاکل
- له تنظیم شوي Google Calendar context څخه د event تعقیبي پیغامونو مسوده جوړول، بیا د خبرتیاوو له لېږلو مخکې د تایید لپاره تم کېدل

**د پیل وړاندیزونه:**
- *د WordPress multisite د ګټو په اړه ۵۰۰-کلمیزه blog لیکنه ولیکئ.*
- *د About، Services، او Contact پاڼه جوړه او خپره کړئ.*
- *د Contact پاڼې ته د booking پوښتنې فورمه ورزیاته کړئ.*
- *د سبا د تنظیم شوي calendar event ګډونوالو لپاره یوه یادونه مسوده کړئ او له لېږلو مخکې د تایید لپاره انتظار وکړئ.*

---

### Site Builder

**تمرکز:** له یوې واحدې prompt څخه د پای-تر-پایه وېبپاڼې جوړول.

**شته وسیلې:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. له Superdav AI Agent v1.18.0 سره، تنظیم شوې managed-service، approval، reminder، calendar، او SMS وسیلې کېدای شي هغه ځای کې شتون ولري چې administrators یې فعالوي.

**په دې کارونو کې ښه دی:**
- د بیان شوي business ډول لپاره د څو پړاوه site جوړولو plan تولیدول
- هر پړاو په خپلواکه توګه اجرا کول — جوړښت، منځپانګه، navigation، design
- د plan په منځ کې له تېروتنو رغېدل پرته له دې چې لاسي مداخلې ته اړتیا وي
- د جوړولو د برخې په توګه وړاندیز شوي plugins نصب کول
- د chat interface څخه مستقیم د اړیکې فورمې جوړول (Superdav AI Agent v1.10.0+)
- د launch یادونې یا د ګډونوالو تعقیب همغږي کول، پرته له تکراري خبرتیاوو، کله چې د تایید دروازې او د یادونې ریکارډونه فعال وي

**د پیل وړاندیزونه:**
- *د photography portfolio site جوړ کړئ چې د gallery post type، booking page، او contact form ولري.*
- *د restaurant website جوړ کړئ چې online menu، opening hours، او table-booking enquiry form ولري.*
- *د freelance consulting site تنظیم کړئ چې service pages، portfolio section، او blog ولري.*
- *د site builder په کارولو سره Contact page ته contact form ورزیاته کړئ.*
- *وروسته له دې چې د site launch checklist تایید شي، تنظیم شوي stakeholder contact ته SMS reminder ولېږئ.*

---

### Design Studio

**تمرکز:** لیدیز دودیزول — رنګونه، typography، CSS، او block patterns.

**شته وسیلې:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**په دې کارونو کې ښه دی:**
- نومول شوي theme presets پلي کول (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- د theme.json له لارې د نړیوالې typography او رنګ palettes نازک تنظیم
- د brand-ځانګړو overrides لپاره custom CSS ورننباسل
- د یوې پاڼې screenshot اخیستل او د design ستونزو لپاره یې بیاکتل

**د پیل وړاندیزونه:**
- *warm-editorial preset پلي کړئ او بیا primary colour #2d6a4f ته وټاکئ.*
- *د homepage screenshot واخلئ او راته ووایئ څه به ښه کړئ.*
- *د بشپړ-پلن background image او centered heading سره د بیا کارېدونکي hero block pattern جوړ کړئ.*

### Plugin Manager

**تمرکز:** د WordPress plugins موندل، نصب، او مدیریت.

**شته وسیلې:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**په دې کارونو کې ښه دی:**
- د بیان شوي use case لپاره تر ټولو غوره plugin وړاندیزول
- له registry څخه ability packs نصب کول
- د category له مخې شته ability catalogue کتل

**د پیل وړاندیزونه:**
- *د membership directory لپاره تر ټولو ښه plugin څه دی؟*
- *د WooCommerce abilities pack نصب کړئ.*
- *ټول شته ecommerce ability packs را وښایاست.*

---

### Support Assistant

**تمرکز:** د site منځپانګې، settings، او WordPress configuration په اړه پوښتنو ته ځواب ورکول.

**شته وسیلې:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**دا څه ښه ترسره کوي:**
- د اوسني سایټ ترتیبات او اختیارونه لټول
- تشریح کول چې په سایټ کې کوم د پوسټ ډولونه، طبقه‌بندۍ، او مېنوګانې تنظیم شوې دي
- د ژوندیو ارزښتونو په لوستلو سره د "دا ترتیب څه کوي؟" پوښتنو ته ځواب ورکول
- د بدلونونو تر کولو مخکې د یوازې-لوستلو تشخیصي طبقې په توګه خدمت کول

**د پیل وړاندیزونه:**
- *اوس په دې سایټ کې کوم plugin او ترتیبات فعال دي؟*
- *په دې سایټ کې ثبت شوي ټول دودیز د پوسټ ډولونه لیست کړه.*
- *کومې د تګ‌راتګ مېنوګانې شته او چېرته ټاکل شوې دي؟*

---

## د Superdav اتومات یوځای‌کونې

کله چې د Superdav AI Agent v1.18.0 یوځای‌کونې تنظیم شي، جوړ-دننه اجنټان کولی شي په خوندي‌تر مهال‌ویش-خبر اتومات کاري بهیرونو کې برخه واخلي:

- **د Google Calendar لوستلو وسیلې** اجنټانو ته اجازه ورکوي چې د تعقیبي کار تر مسوده کولو مخکې تنظیم شوي کلیزې او پېښې وڅېړي.
- **د اړیکو او ګډونوالو نښلول** مرسته کوي چې د پېښې ګډونوال د WordPress کاروونکو یا پېژندل شوو اړیکو سره برابر کړي.
- **د انساني تایید دروازې** حساس کړنې تر هغه ځنډوي څو یو مجاز کاروونکی یې وڅېړي او تایید یې کړي.
- **د یادونې ریکارډونه** د تکراري خبرتیاوو مخه نیسي کله چې مهال‌وېشل شوې دندې بیا هڅه کوي یا تکرارېږي.
- **د TextBee SMS خبرتیاوې** یوازې هغه وخت تنظیم شوي متني پیغامونه لېږي کله چې د SMS اسناد او د کاري بهیر اجازې فعالې وي.

سپارښتل شوی کاري بهیر: له اجنټ څخه وغواړئ چې پیغام یا کړنه چمتو کړي، د تایید غوښتنه وڅېړئ، بیا تایید شوې کړنې ته د بیا پیل اجازه ورکړئ. د تکراري یادونو لپاره، د یادونې د تکرار-مخنیوی فعال وساتئ څو هماغه پېښه یا اړیکه بیا بیا خبر نه شي.

---

## د اجنټانو دودیز کول

هر جوړ-دننه اجنټ د `gratis_ai_agent_agents` فلټر له لارې غځېدلی یا بدلېدلی شي.

### موجود اجنټ ته د دودیز سیستم prompt زیاتول

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نوی اجنټ ثبتول

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

نوی اجنټ د فلټر له چلېدو سمدستي وروسته په Agent Picker کې ښکاري.

### جوړ-دننه اجنټ لرې کول

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
