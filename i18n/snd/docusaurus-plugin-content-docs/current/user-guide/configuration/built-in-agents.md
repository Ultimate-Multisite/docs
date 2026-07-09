---
title: اندروني ايجنٽس
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ٺهيل-اندر Agents

Gratis AI Agent v1.9.0 پنج ٺهيل-اندر agents سان اچي ٿو، هر هڪ اڳواٽ ترتيب ڏنل آهي هڪ مرڪوز اوزارن جي سيٽ، ترتيب ڏنل system prompt، ۽ شروعاتي تجويزن سان جيڪي ان علائقي جي عام ڪمن سان ملن ٿيون. agents جي وچ ۾ مٽائڻ اهو بدلائي ٿو ته assistant ڇا ڪري سگهي ٿو ۽ ڪيئن جواب ڏئي ٿو — توهان جي طرفان ڪنهن به configuration کان سواءِ. Superdav AI Agent v1.18.0 انهن workflows ۾ schedule-aware tools، reminder records، approval gates، ۽ SMS notifications شامل ڪري سگهي ٿو جڏهن لاڳاپيل integrations ترتيب ڏنل هجن.

## Agent ڇا آهي؟

هر agent هڪ نالي وارو configuration profile آهي جيڪو گڏ ڪري ٿو:

- **اوزار** — اهي صلاحيتون جن کي agent invoke ڪرڻ جي اجازت رکي ٿو (مثال طور Content Writer وٽ post ٺاهڻ واريون صلاحيتون موجود آهن؛ Design Studio وٽ CSS ۽ theme.json صلاحيتون موجود آهن)
- **System prompt** — هدايتون جيڪي agent جو لهجو، ترجيحون، ۽ حدون مقرر ڪن ٿيون
- **تجويزون** — اڳواٽ لکيل prompts جيڪي chat interface ۾ ڏيکاريا وڃن ٿا ته جيئن توهان جلدي شروع ڪري سگهو

## Agent Picker تائين رسائي

1. WordPress admin sidebar ۾ **Gratis AI Agent** panel کوليو.
2. chat header جي مٿين-کاٻي پاسي **agent icon** تي ڪلڪ ڪريو (icon فعال agent کي ظاهر ڪرڻ لاءِ بدلجي ٿو).
3. **Agent Picker** هڪ form-table overlay طور کلي ٿو. هر agent پنهنجي icon، نالي، ۽ هڪ-سٽ description سان فهرست ٿيل آهي.
4. ان کي فعال ڪرڻ لاءِ ڪنهن agent row تي ڪلڪ ڪريو. chat header فوري طور update ٿي وڃي ٿو.

توهان گفتگو جي وچ ۾ به agents مٽائي سگهو ٿا — نئين agent جو system prompt ايندڙ message کان اثرانداز ٿيندو.

## پنج ٺهيل-اندر Agents

### Content Writer

**ڌيان:** posts، pages، ۽ contact forms ٺاهڻ ۽ edit ڪرڻ.

**موجود اوزار:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled سان، ترتيب ڏنل calendar context، approval gates، reminders، ۽ SMS notification tools پڻ منظور ٿيل workflows لاءِ موجود ٿي سگهن ٿا.

**هي ڇا سٺو ڪري ٿو:**
- مختصر brief يا outline مان blog posts draft ڪرڻ ۽ publish ڪرڻ
- نئين site لاءِ landing pages جا batches ٺاهڻ
- contact ۽ enquiry forms ٺاهڻ
- URL يا search مان posts تي featured images set ڪرڻ
- ترتيب ڏنل Google Calendar context مان event follow-up messages draft ڪرڻ، پوءِ notifications موڪلڻ کان اڳ approval لاءِ pause ڪرڻ

**شروعاتي تجويزون:**
- *WordPress multisite جي فائدن بابت 500 لفظن وارو blog post لکو.*
- *About، Services، ۽ Contact page ٺاهيو ۽ انهن کي publish ڪريو.*
- *Contact page ۾ booking enquiry form شامل ڪريو.*
- *سڀاڻي جي ترتيب ڏنل calendar event جي attendees لاءِ reminder draft ڪريو ۽ ان کي موڪلڻ کان اڳ approval جو انتظار ڪريو.*

---

### Site Builder

**ڌيان:** هڪ ئي prompt مان end-to-end website ٺاهڻ.

**موجود اوزار:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 سان، ترتيب ڏنل managed-service، approval، reminder، calendar، ۽ SMS tools انهن هنڌن تي موجود ٿي سگهن ٿا جتي administrators انهن کي enable ڪن ٿا.

**هي ڇا سٺو ڪري ٿو:**
- بيان ڪيل business type لاءِ multi-phase site build plan ٺاهڻ
- هر phase خودمختيار طور execute ڪرڻ — structure، content، navigation، design
- manual intervention جي ضرورت کان سواءِ plan جي وچ ۾ errors کان بحال ٿيڻ
- build جي حصي طور recommended plugins install ڪرڻ
- chat interface مان سڌو contact forms ٺاهڻ (Superdav AI Agent v1.10.0+)
- approval gates ۽ reminder records enable هجن ته duplicate notifications کان سواءِ launch reminders يا attendee follow-up هم آهنگ ڪرڻ

**شروعاتي تجويزون:**
- *gallery post type، booking page، ۽ contact form سان photography portfolio site ٺاهيو.*
- *online menu، opening hours، ۽ table-booking enquiry form سان restaurant website ٺاهيو.*
- *service pages، portfolio section، ۽ blog سان freelance consulting site set up ڪريو.*
- *site builder استعمال ڪندي Contact page ۾ contact form شامل ڪريو.*
- *site launch checklist approve ٿيڻ کان پوءِ، ترتيب ڏنل stakeholder contact ڏانهن SMS reminder موڪليو.*

---

### Design Studio

**ڌيان:** Visual customisation — colours، typography، CSS، ۽ block patterns.

**موجود اوزار:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**هي ڇا سٺو ڪري ٿو:**
- نالي وارا theme presets apply ڪرڻ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json ذريعي global typography ۽ colour palettes کي fine-tune ڪرڻ
- brand-specific overrides لاءِ custom CSS inject ڪرڻ
- page جو screenshot وٺڻ ۽ design issues لاءِ ان جو review ڪرڻ

**شروعاتي تجويزون:**
- *warm-editorial preset apply ڪريو ۽ پوءِ primary colour کي #2d6a4f تي set ڪريو.*
- *homepage جو screenshot وٺو ۽ مون کي ٻڌايو ته توهان ڇا improve ڪندا.*
- *full-width background image ۽ centred heading سان reusable hero block pattern ٺاهيو.*

### Plugin Manager

**ڌيان:** WordPress plugins ڳولڻ، install ڪرڻ، ۽ manage ڪرڻ.

**موجود اوزار:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**هي ڇا سٺو ڪري ٿو:**
- بيان ڪيل use case لاءِ بهترين plugin recommend ڪرڻ
- registry مان ability packs install ڪرڻ
- category موجب موجود ability catalogue browse ڪرڻ

**شروعاتي تجويزون:**
- *membership directory لاءِ بهترين plugin ڪهڙو آهي؟*
- *WooCommerce abilities pack install ڪريو.*
- *مون کي سڀ موجود ecommerce ability packs ڏيکاريو.*

---

### Support Assistant

**ڌيان:** site content، settings، ۽ WordPress configuration بابت سوالن جا جواب ڏيڻ.

**موجود اوزار:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**اهو ڇا سٺو ڪري ٿو:**
- موجوده سائيٽ جون سيٽنگون ۽ اختيار ڳولڻ
- وضاحت ڪرڻ ته سائيٽ تي ڪهڙا پوسٽ قسم، ٽيڪسونوميون، ۽ مينيوز ترتيب ڏنل آهن
- لائيو قيمتون پڙهي "هي سيٽنگ ڇا ڪري ٿي؟" سوالن جا جواب ڏيڻ
- تبديليون ڪرڻ کان اڳ صرف پڙهڻ واري تشخيصي پرت طور ڪم ڪرڻ

**شروعاتي صلاحون:**
- *هن سائيٽ تي هن وقت ڪهڙا plugins ۽ سيٽنگون فعال آهن؟*
- *هن سائيٽ تي رجسٽر ٿيل سڀ ڪسٽم پوسٽ قسم لسٽ ڪريو.*
- *ڪهڙا نيويگيشن مينيوز موجود آهن ۽ اهي ڪٿي مقرر ٿيل آهن؟*

---

## Superdav آٽوميشن انٽيگريشنز

جڏهن Superdav AI Agent v1.18.0 انٽيگريشنز ترتيب ڏنل هونديون آهن، built-in ايجنٽ وڌيڪ محفوظ شيڊول-آگاهه آٽوميشن ورڪ فلوز ۾ حصو وٺي سگهن ٿا:

- **Google Calendar پڙهڻ جا اوزار** ايجنٽن کي فالو-اپ ڪم جو مسودو ٺاهڻ کان اڳ ترتيب ڏنل ڪئلينڊر ۽ ايونٽس جانچڻ جي اجازت ڏين ٿا.
- **رابطي ۽ شرڪت ڪندڙن جي ميپنگ** ايونٽ جي شرڪت ڪندڙن کي WordPress صارفين يا ڄاتل رابطن سان ملائڻ ۾ مدد ڪري ٿي.
- **انساني منظوري جا دروازا** حساس عملن کي روڪين ٿا جيستائين ڪو بااختيار صارف انهن جو جائزو وٺي ۽ تصديق ڪري.
- **ياد ڏياريندڙ رڪارڊ** شيڊول ٿيل جابز ٻيهر ڪوشش يا ورجاءُ ڪرڻ وقت نقل نوٽيفڪيشنز کي روڪين ٿا.
- **TextBee SMS نوٽيفڪيشنز** ترتيب ڏنل ٽيڪسٽ پيغام صرف تڏهن موڪلين ٿا جڏهن SMS سندون ۽ ورڪ فلو اجازتون فعال هجن.

سفارش ڪيل ورڪ فلو: ايجنٽ کان پيغام يا عمل تيار ڪرائڻ لاءِ پڇو، منظوري وارو پرامپٽ جائزو وٺو، پوءِ منظور ٿيل عمل کي ٻيهر شروع ٿيڻ جي اجازت ڏيو. ورجائتي ياد ڏياريندڙن لاءِ، ياد ڏياريندڙ deduplication فعال رکو ته جيئن ساڳئي ايونٽ يا رابطي کي بار بار اطلاع نه ملي.

---

## ايجنٽن کي ڪسٽمائيز ڪرڻ

هر built-in ايجنٽ کي `gratis_ai_agent_agents` filter ذريعي وڌائي يا تبديل ڪري سگهجي ٿو.

### موجود ايجنٽ ۾ ڪسٽم سسٽم پرامپٽ شامل ڪرڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نئون ايجنٽ رجسٽر ڪرڻ

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

نئون ايجنٽ filter هلڻ کان فوراً پوءِ Agent Picker ۾ ظاهر ٿئي ٿو.

### built-in ايجنٽ هٽائڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
