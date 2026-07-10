---
title: اندروني طور شامل ايجنٽس
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# بلٽ-اِن Agents {#built-in-agents}

Gratis AI Agent v1.9.0 پنج بلٽ-اِن agents سان اچي ٿو، هر هڪ کي اوزارن جي مرڪوز سيٽ، ترتيب ڏنل system prompt، ۽ انهي علائقي جي عام ڪمن سان ملندڙ شروعاتي تجويزن سان اڳواٽ ترتيب ڏنو ويو آهي. agents جي وچ ۾ مٽاسٽا ڪرڻ سان assistant ڇا ڪري سگهي ٿو ۽ ڪيئن جواب ڏئي ٿو، اهو بدلجي ٿو — توهان جي طرفان ڪنهن به configuration کان سواءِ. Superdav AI Agent v1.18.0 انهن workflows ۾ schedule-aware اوزار، reminder records، approval gates، ۽ SMS notifications شامل ڪري سگهي ٿو جڏهن لاڳاپيل integrations ترتيب ڏنل هجن.

## Agent ڇا آهي؟ {#what-is-an-agent}

هر agent هڪ نالي وارو configuration profile آهي جيڪو گڏ ڪري ٿو:

- **اوزار** — اهي صلاحيتون جن کي agent سڏڻ جي اجازت رکي ٿو (مثال طور Content Writer کي post ٺاهڻ وارين صلاحيتن تائين رسائي آهي؛ Design Studio کي CSS ۽ theme.json صلاحيتن تائين رسائي آهي)
- **System prompt** — هدايتون جيڪي agent جو لهجو، ترجيحون، ۽ حدون مقرر ڪن ٿيون
- **تجويزون** — اڳواٽ لکيل prompts جيڪي chat interface ۾ ڏيکاريا وڃن ٿا ته جيئن توهان جلدي شروع ڪري سگهو

## Agent Picker تائين رسائي {#accessing-the-agent-picker}

1. WordPress admin sidebar ۾ **Gratis AI Agent** panel کوليو.
2. chat header جي مٿي-کاٻي ۾ **agent icon** تي ڪلڪ ڪريو (icon active agent کي ظاهر ڪرڻ لاءِ تبديل ٿئي ٿو).
3. **Agent Picker** هڪ form-table overlay طور کلي ٿو. هر agent پنهنجي icon، نالي، ۽ هڪ-لائين وضاحت سان فهرست ٿيل آهي.
4. agent row تي ڪلڪ ڪري ان کي active ڪريو. chat header فوراً update ٿي وڃي ٿو.

توهان گفتگو جي وچ ۾ به agents مٽائي سگهو ٿا — نئين agent جو system prompt ايندڙ message کان اثر وٺي ٿو.

## پنج بلٽ-اِن Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**مرڪز:** posts، pages، ۽ contact forms ٺاهڻ ۽ edit ڪرڻ.

**دستياب اوزار:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled هجڻ سان، configured calendar context، approval gates، reminders، ۽ SMS notification tools به approved workflows لاءِ دستياب ٿي سگهن ٿا.

**اهو ڪهڙو ڪم سٺو ڪري ٿو:**
- brief يا outline مان blog posts جو draft ۽ publish ڪرڻ
- نئين site لاءِ landing pages جا batches ٺاهڻ
- contact ۽ enquiry forms ٺاهڻ
- URL يا search مان posts تي featured images لڳائڻ
- configured Google Calendar context مان event follow-up messages جو draft ڪرڻ، پوءِ notifications موڪلڻ کان اڳ approval لاءِ روڪڻ

**شروعاتي تجويزون:**
- *WordPress multisite جي فائدن بابت 500 لفظن جو blog post لکو.*
- *About، Services، ۽ Contact page ٺاهيو ۽ انهن کي publish ڪريو.*
- *Contact page ۾ booking enquiry form شامل ڪريو.*
- *سڀاڻي جي configured calendar event جي attendees لاءِ reminder جو draft ٺاهيو ۽ ان کي موڪلڻ کان اڳ approval جو انتظار ڪريو.*

---

### Site Builder {#site-builder}

**مرڪز:** هڪ واحد prompt مان آخر-کان-آخر website creation.

**دستياب اوزار:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 سان، configured managed-service، approval، reminder، calendar، ۽ SMS tools اتي دستياب ٿي سگهن ٿا جتي administrators انهن کي enable ڪن ٿا.

**اهو ڪهڙو ڪم سٺو ڪري ٿو:**
- بيان ڪيل business type لاءِ multi-phase site build plan ٺاهڻ
- هر phase کي خودمختيار طور execute ڪرڻ — structure، content، navigation، design
- manual intervention جي ضرورت کان سواءِ mid-plan errors مان recover ڪرڻ
- build جي حصي طور recommended plugins install ڪرڻ
- chat interface مان سڌو contact forms ٺاهڻ (Superdav AI Agent v1.10.0+)
- جڏهن approval gates ۽ reminder records enabled هجن ته duplicate notifications کان سواءِ launch reminders يا attendee follow-up coordinate ڪرڻ

**شروعاتي تجويزون:**
- *gallery post type، booking page، ۽ contact form سان photography portfolio site ٺاهيو.*
- *online menu، opening hours، ۽ table-booking enquiry form سان restaurant website ٺاهيو.*
- *service pages، portfolio section، ۽ blog سان freelance consulting site set up ڪريو.*
- *site builder استعمال ڪندي Contact page ۾ contact form شامل ڪريو.*
- *site launch checklist approve ٿيڻ کان پوءِ، configured stakeholder contact ڏانهن SMS reminder موڪليو.*

---

### Design Studio {#design-studio}

**مرڪز:** بصري customisation — colours، typography، CSS، ۽ block patterns.

**دستياب اوزار:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**اهو ڪهڙو ڪم سٺو ڪري ٿو:**
- نالي وارا theme presets لاڳو ڪرڻ (minimal-dark، warm-editorial، corporate-blue، vibrant-startup، classic-blog)
- theme.json ذريعي global typography ۽ colour palettes کي fine-tune ڪرڻ
- brand-specific overrides لاءِ custom CSS inject ڪرڻ
- page جو screenshot وٺڻ ۽ design issues لاءِ ان جو جائزو وٺڻ

**شروعاتي تجويزون:**
- *warm-editorial preset لاڳو ڪريو ۽ پوءِ primary colour کي #2d6a4f تي set ڪريو.*
- *homepage جو screenshot وٺو ۽ مون کي ٻڌايو ته توهان ڇا بهتر ڪندا.*
- *full-width background image ۽ centred heading سان reusable hero block pattern ٺاهيو.*

### Plugin Manager {#plugin-manager}

**مرڪز:** WordPress plugins ڳولڻ، install ڪرڻ، ۽ manage ڪرڻ.

**دستياب اوزار:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**اهو ڪهڙو ڪم سٺو ڪري ٿو:**
- بيان ڪيل use case لاءِ بهترين plugin recommend ڪرڻ
- registry مان ability packs install ڪرڻ
- category موجب دستياب ability catalogue browse ڪرڻ

**شروعاتي تجويزون:**
- *membership directory لاءِ بهترين plugin ڪهڙو آهي؟*
- *WooCommerce abilities pack install ڪريو.*
- *مون کي سڀ دستياب ecommerce ability packs ڏيکاريو.*

---

### Support Assistant {#support-assistant}

**مرڪز:** site content، settings، ۽ WordPress configuration بابت سوالن جا جواب ڏيڻ.

**دستياب اوزار:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**اهو ڇا چڱيءَ طرح ڪري ٿو:**
- موجوده سائيٽ جون سيٽنگون ۽ آپشن ڳولڻ
- وضاحت ڪرڻ ته سائيٽ تي ڪهڙا پوسٽ قسم، ٽيڪسونوميون، ۽ مينيو ترتيب ڏنل آهن
- لائيو قدر پڙهي "هي سيٽنگ ڇا ڪري ٿي؟" سوالن جا جواب ڏيڻ
- تبديليون ڪرڻ کان اڳ رڳو پڙهڻ واري تشخيصي پرت طور ڪم ڪرڻ

**شروعاتي تجويزون:**
- *هن سائيٽ تي هن وقت ڪهڙا پلگ ان ۽ سيٽنگون فعال آهن؟*
- *هن سائيٽ تي رجسٽر ٿيل سڀ ڪسٽم پوسٽ قسم لسٽ ڪريو.*
- *ڪهڙا نيويگيشن مينيو موجود آهن ۽ اهي ڪٿي مقرر ٿيل آهن؟*

---

## Superdav Automation Integrations {#superdav-automation-integrations}

جڏهن Superdav AI Agent v1.18.0 انٽيگريشنز ترتيب ڏنل هجن، ته ٺهيل-ان ايجنٽ وڌيڪ محفوظ شيڊول-آگاهه آٽوميشن ورڪ فلو ۾ حصو وٺي سگهن ٿا:

- **Google Calendar پڙهڻ جا اوزار** ايجنٽن کي فالو-اپ ڪم جو مسودو ٺاهڻ کان اڳ ترتيب ڏنل ڪئلينڊر ۽ واقعن جو جائزو وٺڻ ڏين ٿا.
- **رابطي ۽ شرڪت ڪندڙن جي ميپنگ** واقعي جي شرڪت ڪندڙن کي WordPress استعمال ڪندڙن يا ڄاتل رابطن سان ملائڻ ۾ مدد ڪري ٿي.
- **انساني منظوري جا دروازا** حساس عملن کي روڪين ٿا جيستائين ڪو بااختيار استعمال ڪندڙ انهن جو جائزو وٺي ۽ تصديق ڪري.
- **ياد ڏياريندڙ رڪارڊ** شيڊول ٿيل نوڪرين جي ٻيهر ڪوشش يا ورجاءُ وقت نقل نوٽيفڪيشنن کان بچائين ٿا.
- **TextBee SMS نوٽيفڪيشنز** ترتيب ڏنل ٽيڪسٽ پيغام فقط تڏهن موڪلين ٿا جڏهن SMS سندون ۽ ورڪ فلو اجازتون فعال هجن.

سفارش ڪيل ورڪ فلو: ايجنٽ کان پيغام يا عمل تيار ڪرائڻ لاءِ پڇو، منظوري پرامپٽ جو جائزو وٺو، پوءِ منظور ٿيل عمل کي ٻيهر شروع ٿيڻ جي اجازت ڏيو. ورجائيندڙ ياد ڏيارڻن لاءِ، ياد ڏياريندڙ deduplication فعال رکو ته جيئن ساڳئي واقعي يا رابطي کي بار بار اطلاع نه ملي.

---

## ايجنٽن کي ڪسٽمائيز ڪرڻ {#customising-agents}

هر ٺهيل-ان ايجنٽ کي `gratis_ai_agent_agents` فلٽر ذريعي وڌائي يا مٽائي سگهجي ٿو.

### موجوده ايجنٽ ۾ ڪسٽم سسٽم پرامپٽ شامل ڪرڻ {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نئون ايجنٽ رجسٽر ڪرڻ {#registering-a-new-agent}

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

نئون ايجنٽ فلٽر هلڻ کان فوراً پوءِ Agent Picker ۾ ظاهر ٿئي ٿو.

### ٺهيل-ان ايجنٽ هٽائڻ {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
