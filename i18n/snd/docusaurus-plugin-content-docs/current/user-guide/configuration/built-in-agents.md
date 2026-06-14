---
title: بنيو آليه
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Gratis AI Agent v1.9.0 ۾ پنج built-in agents شامل آهن، جن ۾ هر هڪ کي مخصوص ٽولز، هڪ tailored system prompt، ۽ عام ڪم جون شروعاتي تجويرا ڏنل هوندا آهن جيڪي ان شعبن ۾ گهرجي ڪمن سان مطابقت رکندا آهن. ايجنٽس جو بدلائڻ توهان جي طرف کان ڪنهي configuration کان سواءِ اسان کي نه ٿو بدلون ڏئي، پر اهو اسان کي ٻڌائي ٿو ته assistant ڇا ڪري سگهي ٿو ۽ ڪيئن جواب ڏيندو آهي.

## Agent هوندو ڇا؟

هر ايجنٽ هڪ نالو وارو configuration profile آهي جيڪو هيٺيون ڳالهيون جو مجموعو آهي:

- **Tools** — اهڙا صلاحيتون جن کي ايجنٽ استعمال ڪرڻ جي اجازت آهي (مثال طور، Content Writer کي post banaڻ جي صلاحيت حاصل هجي؛ Design Studio کي CSS ۽ theme.json جي صلاحيت حاصل هجي).
- **System prompt** — اهڙا حڪمنو جيڪي ايجنٽ جو انداز، ترجيحون، ۽ حدود مقرر ڪن ٿا.
- **Suggestions** — چات انٽر فيس ۾ پيش ڪيل pre-written prompts جن کي توهان کي جلدي شروعات ڪرڻ لاءِ ڏيڻ جي مدد آهي.

## Agent Picker کي استعمال ڪرڻ

1. WordPress admin sidebar ۾ **Gratis AI Agent** panel کي کليل ڪريو.
2. چات هڊر جي اوپري سيده طرف **agent icon** تي ڪلڪ ڪريو (اها icon ان active agent جو reflect ڪرڻ لاءِ بدلجي ويندي آهي).
3. **Agent Picker** هڪ form-table overlay طور کليل ٿيندو آهي. هر ايجنٽ کي ان جي icon، نالو، ۽ هڪ لائن جو description سان لکيل آهي.
4. ڪنهن ايجنٽ رڙ (row) تي ڪلڪ ڪريو هو ان کي فعال ڪرڻ لاءِ. چات هڊر فوري طور تي اپڊيٽ ٿيندو آهي.

توهان گفتگو دوران به ايجنٽس بدل سگهو ٿا — نئين ايجنٽ جو system prompt هيٺ ڏنل message کان شروع ٿيندي.

## پنج Built-in Agents

### Content Writer

**Focus:** Posts، pages، ۽ contact forms کي banauna ۽ edit ڪرڻ.

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ڪه ڪجهه سٺي ڪري ٿو:**
- مختصر معلومات يا خاکہ (outline) کان بلاگ پوسٽس جو رقت ۽ پبلش ڪرڻ
- نئين سائٽ لاءِ لينڊنگ ايجز (landing pages) جو گروپ بنائڻ
- رابطي ۽ سوال وٺڻ وارن فارمز (forms) جو بنانا
- ڪنه URL يا سرچ تي پوسٽس تي فيچرڈ ايميجز (featured images) مقرر ڪرڻ

**شروعاتي تجويزون:**
- *WordPress multisite جا فائدن بابت 500 لفظن جو بلاگ پوسٽ لکو.*
- *هڪ About، Services، ۽ Contact پيچ کي banao ۽ ان کي پبلش ڪريو.*
- *Contact پيچ تي ڪنه بوڪنگ سوال وٺڻ وارو فارم شامل ڪريو.*

---

### Site Builder (سائٽ بلڊر)

**مرڪز:** هڪ ئي prompt (حواله) کان پوري وقت جي ويب سائٽ جو بنانا.

**موجوده ذريعن (Available tools):** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ڪه ڪجهه سٺي ڪري ٿو:**
- ڪنه ڪاروبار جي قسم لاءِ هڪ متعدد مراحل وارو سائٽ بلڊ پلان (site build plan) جو جنريٽ ڪرڻ.
- هر مرحلي کي خود مختار طور تي عمل ۾ آڻڻ — هيكل، مواد، نيويجري (navigation)، ۽ تصميم (design).
- پلان دوران غلطين کان بچڻ ۽ بدون ڪنه مانييل مداخلت (manual intervention) جي ضرورت وٺن.
- بلڊ جو حصي طور تي سفارش ڪيل plugins کي انٽال ڪرڻ.
- چٽ ايفيس (chat interface) کان ئي رابطي فارمز direkt طور تي banauna (Superdav AI Agent v1.10.0+).

**شروعاتي تجويزون:**
- *هڪ فوٽوغرافي پورتفوليو سائٽ بنايو جنه هڪ gallery post type، بوڪنگ پيچ، ۽ رابطي فارم رکي.*
- *هڪ ресторан جي ويب سائٽ banao جنه ان لائن مينيو، ڪاروبار جو وقت (opening hours)، ۽ تيبل بڪنگ جو سوال وٺڻ وارو فارم رکي.*
- *Freelance ڪن سلتي سائٽ set up ڪريو جنه service pages، پورتفوليو حصو، ۽ هڪ بلاگ رکي.*
- *سائٽ بلڊر استعمال ڪري Contact پيچ تي رابطي فارم شامل ڪريو.*

---

### Design Studio (ڊيزائن اسٽوڊيو)

**مرڪز:** بصري تخصيص — رنگ، ڪارڊنگ (typography)، CSS، ۽ بلاڪن جا ماڊل (block patterns).

**उपलब्ध ٹولز:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ڪجهه ڪجهه ڪجهه:**
- نيمدي ٿيل تھیم پريسٽس (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) کي لاڳو ڪرڻ.
- theme.json جي مدد سان گلايو ۽ رنگن جي پالتو (colour palettes) کي بهتر بڻائڻ.
- برانڊ مخصوص اووررائڊز لاءِ ڪسسٹم CSS شامل ڪرڻ.
- هڪ صفحي جو screenshot لکو ۽ تصميمي مسئلن لاءِ ان جو جائزو وٺو.

**شروعاتي تجويزون:**
- *warm-editorial پريسٽ لاڳو ڪريو ۽ پوءِ پرائمري رنگ کي #2d6a4f تي set ڪريو.*
- *homepage جو screenshot لکو ۽ مون کي ٻڌايو ته توهان ان کي ڪهڙي طرح بهتر بڻائين ٿا.*
- *پوري وڏي (full-width) background image ۽ سنترتي هيڊنگ سان هڪ قابل استعمال هيرو block pattern banao.*

---

### Plugin Manager

**مرڪز:** WordPress plugins کي ڳولڻ، ان کي انسٹال ڪرڻ ۽ منظم ڪرڻ.

**उपलब्ध ٹولز:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ڪجهه ڪجهه ڪجهه:**
- وضاحت ڪيل ڪنهن استعمال لاءِ بهترين plugin جو سفارش ڪرڻ.
- registry کان ability packs کي انسٹال ڪرڻ.
- مختلف categories ۾ موجود available ability catalogue کي ڏسڻ.

**شروعاتي تجويزون:**
- *Membership directory لاءِ بهترين plugin کون آهي؟*
- *WooCommerce abilities pack انسٹال ڪريو.*
- *موجوده سڀ ecommerce ability packs ڏيکاريو.*

---

### Support Assistant

**مرڪز:** سائيٽ جي مواد، setings ۽ WordPress configuration بابت سوالن جو جواب ڏيڻ.

**उपलब्ध ٹولز:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ڪه اها سٺي ڪم ڪري ٿو:**
- موجوده سائٽ جي ترتي ۽ خيار (settings and options) ڏسڻ.
- هيٺ ڏنل معلومات آهي ته سائٽ تي ڪهڙا post types، taxonomies، ۽ menus ڪيئن set ڪيا ويا آهن.
- لائیو values کي پڙهي سان "هي setting ڇا ڪري ٿي؟" جو جواب ڏيڻ.
- تبديل ڪرڻ کان اڳ هڪ read-only diagnostic layer جي طور تي ڪم ڪرڻ.

**شروعاتي تجويزون:**
- *هي سائٽ تي موجوده ڪهڙا plugins ۽ settings فعال آهن؟*
- *هيٺ ڏنل تمام custom post types کي list ڪريو جيڪي هيٺ ڏنل site تي register ڪيا ويا آهن.*
- *ڪهڙا navigation menus موجود آهن ۽ انهن کي ڪٿي assign ڪيو آهي؟*

---

## Customising Agents (এجنتس کي ترتي ڪرڻ)

هر built-in agent کي `gratis_ai_agent_agents` filter جي ذريعي extend يا replace ڪري سگهجي ٿو.

### موجوده agent ۾ custom system prompt شامل ڪرڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نئين agent کي register ڪرڻ

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

نئون Agent Picker ۾ فلٽر چلڻ کان اڳ ئي نئين agent ظاهر ٿيندو آهي.

### Built-in agent کي ختم ڪرڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
