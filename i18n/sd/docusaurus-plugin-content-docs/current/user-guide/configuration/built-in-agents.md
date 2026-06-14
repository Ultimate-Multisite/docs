---
title: بنيو آليه
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# Built-in Agents

Gratis AI Agent v1.9.0 ۾ پنج built-in agents شامل آهن، جن ۾ هر هڪ کي مخصوص ڪيل ٽولز، هڪ مخصوص system prompt، ۽ ان شعبن جي عام ڪم جون شروعاتي تجويرا موجود آهن. ايجنٽس جو بدلائڻ توهان جي طرف کان ڪنهن به configuration کان سواءِ assistant جي صلاحيتون ۽ هو ڪيئن جواب ڏئي ٿو ان کي بدلائي ٿو.

## Agent ڇا آهي؟

هر agent هڪ نامدار configuration profile آهي جيڪا هيٺيون شيون جو مجموعو ڪري ٿي:

- **Tools** — اهڙا صلاحيتون جن کي agent استعمال ڪرڻ جي اجازت آهي (مثال طور، Content Writer کي post banaڻ جي صلاحيت حاصل آهي; Design Studio کي CSS ۽ theme.json جي صلاحيت حاصل آهي).
- **System prompt** — اهڙا حڪمناتي جيڪي agent جو انداز، ترجيحون، ۽ حدود مقرر ڪن ٿيون.
- **Suggestions** — چٽ (chat) انٽرفيس ۾ ڏيکيل پري-رائٽ پ롬پٽس جن سان توهان جلدي شروعات ڪري سگهو ٿا.

## Agent Picker کي استعمال ڪرڻ

1. WordPress admin sidebar ۾ **Gratis AI Agent** panel کي کليل ڪريو.
2. چٽ هڊر جي اوپري باري طرف **agent icon** تي ڪلڪ ڪريو (icon فعال agent جو reflect ڪرڻ لاءِ بدلجي ويندو آهي).
3. **Agent Picker** هڪ form-table overlay طور کليل ٿئي ٿو. هر agent ان جي icon، نالو ۽ هڪ لائن جو description سان لسٹ ڪيل آهي.
4. هيٺ ڏنل row تي ڪلڪ ڪريو ان کي فعال ڪرڻ لاءِ. چٽ هڊر فوري طور تي اپڊيٽ ٿيندو آهي.

توهان گفتگو دوران به agents بدل سگهو ٿا — نئين agent جو system prompt هيٺ ڏنل message کان شروع ٿي اثر انداز ٿيندو آهي.

## پنج Built-in Agents

### Content Writer

**Focus:** posts، pages، ۽ contact forms کي banaana ۽ edit ڪرڻ.

**Available tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ڪه اڪثر ڪري ڪامياب ٿيندي آهي:**
- مختصر معلومات يا خاکہ (outline) کان بلاگ پوسٽس جو رقت ۽ پبلش ڪرڻ
- نئين سائيٽ لاءِ لينڊنگ ايجز (landing pages) جو هڪ گروپ بنائڻ
- رابطي ۽ سوال وٺڻ وارن فارمز (forms) جو ٺهڻ
- URL يا سرچ کان پوسٽ تي فيچورڊ ايميجز (featured images) جو ترتيبي

**شروعاتي تجويزون:**
- *WordPress multisite جا فائدن بابت هڪ 500 لفظن جو بلاگ پوسٽ لکو.*
- *هڪ About، Services، ۽ Contact پيچ کي بنائ ۽ ان کي پبلش ڪريو.*
- *Contact پيچ تي ڪا بوڪنگ سوال وٺڻ وارو فارم شامل ڪريو.*

---

### سائيٽ بلڊر (Site Builder)

**مرڪز:** هڪ ئي prompt کان پوري وقت سائيٽ بنائڻ.

**موجوده آيل اوزار:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ڪه اڪثر ڪري ڪامياب ٿيندي آهي:**
- ڪنه ڪاروبار جي قسم لاءِ هڪ متعدد مرحليان وارو سائيٽ بلڊ پئن (site build plan) ٺاهڻ.
- هر مرحلو کي خود بخود چلائڻ — هيكل، مواد، نيويجيشن، ۽ дизаين.
- پلان دوران غلطين کان بچي پاتارڻ جنهن لاءِ ڪنه به عمل جي ضرورت نه هجي.
- بلڊ جو حصو هجڻ سان سفارش ڪيل plugins جو انحصاني (install) ڪرڻ.
- چٽ ايفيس (chat interface) کان ئي رابطي فارمز جو سڌو ٺهڻ (Superdav AI Agent v1.10.0+).

**شروعاتي تجويزون:**
- *گلييري پوسٽ طرز، بوڪنگ پيچ ۽ رابطي فارم سان هڪ فوٽوغرافي پورٽفوليو سائيٽ بنائ.*
- *هڪ ресторан جي سائيٽ banaو جنهن ۾ آن لائن مينيو، ڪاروبار جو وقت، ۽ تيبل بڪنگ جو سوال وٺڻ وارو فارم هجي.*
- *Freelance ڪن سلتي سائيٽ قائم ڪريو جنهن ۾ سروس پيچ، پورٽفوليو حصو، ۽ بلاگ هجي.*
- *سائٽ بلڊر جو استعمال ڪندي Contact پيچ تي هڪ رابطي فارم شامل ڪريو.*

---

### дизаين اسٽوڊيو (Design Studio)

**مرڪز:** بصري تخصيص — رنگ، فوٽوٽائپي، CSS، ۽ بلاڪ پٽرن.

**उपलब्ध ٹولز:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ڪجهه ڪجهه ڪجهه:**
- نيمدي ٿيل تھیم پريسٽس (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) کي لاڳو ڪرڻ.
- theme.json جي مدد سان گлоба تيپوغرافي ۽ رنگن جي پالتو کي بهتر بڻائڻ.
- برانڊ مخصوص اووررائڊ لاءِ ڪسسٹم CSS شامل ڪرڻ.
- هڪ صفحي جو screenshot لکو ۽ تصميمي مسئلن لاءِ ان جو جائزو وٺو.

**شروعاتي تجويزون:**
- *warm-editorial پريسٽ لاڳو ڪريو ۽ پوءِ پرائمري رنگ کي #2d6a4f تي set ڪريو.*
- *هوميج صفحي جو screenshot لکو ۽ مون کان ڪهڙا بهتر بڻائڻ گهرجي ان بابت ٻڌايو.*
- *پوري وڏي (full-width) background image ۽ سنترتي هيڊنگ سان هڪ قابل استعمال هيرو block pattern banao.*

---

### Plugin Manager

**مرڪز:** WordPress plugins کي ڳولڻ، نصب ڪرڻ ۽ منظم ڪرڻ.

**उपलब्ध ٹولز:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ڪجهه ڪجهه ڪجهه:**
- وضاحت ڪيل استعمال جي صورتحال لاءِ بهترين plugin جو سفارش ڪرڻ.
- registry کان ability packs نصب ڪرڻ.
- category واري available ability catalogue کي ڏسڻ.

**شروعاتي تجويزون:**
- *Membership directory لاءِ بهترين plugin کون آهي؟*
- *WooCommerce abilities pack نصب ڪريو.*
- *مونکي سڀئي available ecommerce ability packs ڏيو.*

---

### Support Assistant

**مرڪز:** سائيٽ جي مواد، setings ۽ WordPress configuration بابت سوالن جو جواب ڏيڻ.

**उपलब्ध ٹولز:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ڪه ان ڇا ڪري سگهي ٿو:**
- موجوده سائٽ جي ترتيبي ۽ خيار (settings and options) کي ڏسڻ.
- هيٺ ڏنل معلومات آهي ته سائٽ تي ڪهڙيون post types، taxonomies، ۽ menus ڪيئن set ڪيا ويا آهن.
- لائیو قيمت (live values) کي پڙهي وٺي "هي هي setting ڇا ڪري ٿي؟" جو جواب ڏيڻ.
- تبديل ڪرڻ کان اڳ هڪ read-only diagnostic layer جي طور تي ڪم ڪرڻ.

**شروعاتي تجويزون:**
- *هي سائٽ تي موجوده plugins ۽ settings ڪهڙيون آهن؟*
- *هي سائٽ تي register ڪيل سڀني custom post types جو list ڏيو.*
- *ڪهڙا navigation menus موجود آهن ۽ انهن کي ڪٿي assign ڪيو آهي؟*

---

## Customising Agents (এجنتس کي ترقي ڏيڻ)

هر built-in agent کي `gratis_ai_agent_agents` filter جي ذريعي extend يا replace ڪري سگهجي ٿو.

### موجوده agent ۾ custom system prompt جو اضافو ڪرڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نئين agent جو register ڪرڻ

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

نئون Agent Picker ۾ فلٽر چلڻ کان وٺي هي نئين agent جو ڏسيل ٿو.

### Built-in agent کي ختم ڪرڻ

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
