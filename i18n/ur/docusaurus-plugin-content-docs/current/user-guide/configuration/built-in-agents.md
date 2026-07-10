---
title: بلٹ اِن ایجنٹس
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# بلٹ اِن Agents {#built-in-agents}

Gratis AI Agent v1.9.0 پانچ بلٹ اِن agents کے ساتھ آتا ہے، ہر ایک کو ایک مرکوز tools کے مجموعے، ایک مخصوص system prompt، اور اس شعبے کے عام کاموں سے مطابقت رکھنے والی ابتدائی تجاویز کے ساتھ پہلے سے configure کیا گیا ہے۔ agents کے درمیان تبدیل کرنے سے یہ بدل جاتا ہے کہ assistant کیا کر سکتا ہے اور کیسے جواب دیتا ہے — آپ کی طرف سے کسی configuration کے بغیر۔ Superdav AI Agent v1.18.0 ان workflows میں schedule-aware tools، reminder records، approval gates، اور SMS notifications شامل کر سکتا ہے جب متعلقہ integrations configure ہوں۔

## Agent کیا ہے؟ {#what-is-an-agent}

ہر agent ایک نامزد configuration profile ہے جو یہ چیزیں یکجا کرتا ہے:

- **Tools** — وہ صلاحیتیں جنہیں agent استعمال کرنے کی اجازت رکھتا ہے (مثلاً Content Writer کو post بنانے کی صلاحیتوں تک رسائی ہوتی ہے؛ Design Studio کو CSS اور theme.json کی صلاحیتوں تک رسائی ہوتی ہے)
- **System prompt** — ہدایات جو agent کا لہجہ، ترجیحات، اور پابندیاں متعین کرتی ہیں
- **Suggestions** — chat interface میں دکھائے جانے والے پہلے سے لکھے prompts تاکہ آپ جلدی شروع کر سکیں

## Agent Picker تک رسائی {#accessing-the-agent-picker}

1. WordPress admin sidebar میں **Gratis AI Agent** panel کھولیں۔
2. chat header کے اوپر بائیں طرف **agent icon** پر کلک کریں (icon active agent کی عکاسی کے لیے بدلتا ہے)۔
3. **Agent Picker** ایک form-table overlay کے طور پر کھلتا ہے۔ ہر agent اپنے icon، نام، اور ایک سطری وضاحت کے ساتھ درج ہوتا ہے۔
4. اسے active کرنے کے لیے agent row پر کلک کریں۔ chat header فوراً update ہو جاتا ہے۔

آپ گفتگو کے دوران بھی agents بدل سکتے ہیں — نئے agent کا system prompt اگلے message سے مؤثر ہو جاتا ہے۔

## پانچ بلٹ اِن Agents {#the-five-built-in-agents}

### Content Writer {#content-writer}

**توجہ:** posts، pages، اور contact forms بنانا اور edit کرنا۔

**دستیاب tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`. Superdav AI Agent v1.18.0 integrations enabled ہونے پر، configured calendar context، approval gates، reminders، اور SMS notification tools بھی approved workflows کے لیے دستیاب ہو سکتے ہیں۔

**یہ کیا اچھا کرتا ہے:**
- brief یا outline سے blog posts draft اور publish کرنا
- نئے site کے لیے landing pages کے batches بنانا
- contact اور enquiry forms بنانا
- posts پر URL یا search سے featured images set کرنا
- configured Google Calendar context سے event follow-up messages draft کرنا، پھر notifications بھیجنے سے پہلے approval کے لیے pause کرنا

**ابتدائی تجاویز:**
- *WordPress multisite کے فوائد کے بارے میں 500 الفاظ کا blog post لکھیں۔*
- *About، Services، اور Contact page بنائیں اور انہیں publish کریں۔*
- *Contact page میں booking enquiry form شامل کریں۔*
- *کل کے configured calendar event کے attendees کے لیے reminder draft کریں اور اسے بھیجنے سے پہلے approval کا انتظار کریں۔*

---

### Site Builder {#site-builder}

**توجہ:** ایک ہی prompt سے end-to-end website بنانا۔

**دستیاب tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`. Superdav AI Agent v1.18.0 کے ساتھ، configured managed-service، approval، reminder، calendar، اور SMS tools وہاں دستیاب ہو سکتے ہیں جہاں administrators انہیں enable کریں۔

**یہ کیا اچھا کرتا ہے:**
- بیان کردہ business type کے لیے multi-phase site build plan بنانا
- ہر phase کو خودکار طور پر execute کرنا — structure، content، navigation، design
- plan کے درمیان errors سے manual intervention کے بغیر recover کرنا
- build کے حصے کے طور پر recommended plugins install کرنا
- chat interface سے براہ راست contact forms بنانا (Superdav AI Agent v1.10.0+)
- جب approval gates اور reminder records enabled ہوں تو duplicate notifications کے بغیر launch reminders یا attendee follow-up coordinate کرنا

**ابتدائی تجاویز:**
- *gallery post type، booking page، اور contact form کے ساتھ photography portfolio site بنائیں۔*
- *online menu، opening hours، اور table-booking enquiry form کے ساتھ restaurant website بنائیں۔*
- *service pages، portfolio section، اور blog کے ساتھ freelance consulting site set up کریں۔*
- *site builder استعمال کرتے ہوئے Contact page میں contact form شامل کریں۔*
- *site launch checklist approved ہونے کے بعد، configured stakeholder contact کو SMS reminder بھیجیں۔*

---

### Design Studio {#design-studio}

**توجہ:** بصری customisation — colours، typography، CSS، اور block patterns۔

**دستیاب tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**یہ کیا اچھا کرتا ہے:**
- نامزد theme presets apply کرنا (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json کے ذریعے global typography اور colour palettes کو fine-tune کرنا
- brand-specific overrides کے لیے custom CSS inject کرنا
- page کا screenshot لینا اور design issues کے لیے اس کا review کرنا

**ابتدائی تجاویز:**
- *warm-editorial preset apply کریں اور پھر primary colour کو #2d6a4f پر set کریں۔*
- *homepage کا screenshot لیں اور مجھے بتائیں کہ آپ کیا بہتر کریں گے۔*
- *full-width background image اور centred heading کے ساتھ reusable hero block pattern بنائیں۔*

### Plugin Manager {#plugin-manager}

**توجہ:** WordPress plugins دریافت کرنا، install کرنا، اور manage کرنا۔

**دستیاب tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**یہ کیا اچھا کرتا ہے:**
- بیان کردہ use case کے لیے بہترین plugin recommend کرنا
- registry سے ability packs install کرنا
- category کے لحاظ سے دستیاب ability catalogue browse کرنا

**ابتدائی تجاویز:**
- *membership directory کے لیے بہترین plugin کیا ہے؟*
- *WooCommerce abilities pack install کریں۔*
- *مجھے تمام دستیاب ecommerce ability packs دکھائیں۔*

---

### Support Assistant {#support-assistant}

**توجہ:** site content، settings، اور WordPress configuration کے بارے میں سوالات کے جواب دینا۔

**دستیاب tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**یہ کیا اچھی طرح کرتا ہے:**
- موجودہ site کی ترتیبات اور options دیکھنا
- یہ وضاحت کرنا کہ site پر کون سی post types، taxonomies، اور menus ترتیب دیے گئے ہیں
- live values پڑھ کر "یہ ترتیب کیا کرتی ہے؟" جیسے سوالات کا جواب دینا
- تبدیلیاں کرنے سے پہلے read-only تشخیصی پرت کے طور پر کام کرنا

**ابتدائی تجاویز:**
- *اس site پر فی الحال کون سے plugins اور settings active ہیں؟*
- *اس site پر registered تمام custom post types کی فہرست بنائیں۔*
- *کون سے navigation menus موجود ہیں اور انہیں کہاں assigned کیا گیا ہے؟*

---

## Superdav Automation Integrations {#superdav-automation-integrations}

جب Superdav AI Agent v1.18.0 integrations configured ہوں، built-in agents زیادہ محفوظ schedule-aware automation workflows میں حصہ لے سکتے ہیں:

- **Google Calendar read tools** agents کو configured calendars اور events کا معائنہ کرنے دیتے ہیں، اس سے پہلے کہ وہ follow-up کام draft کریں۔
- **Contact and attendee mapping** event participants کو WordPress users یا معلوم contacts سے match کرنے میں مدد کرتی ہے۔
- **Human approval gates** حساس actions کو اس وقت تک pause کرتے ہیں جب تک کوئی authorised user انہیں review اور confirm نہ کر دے۔
- **Reminder records** اس وقت duplicate notifications کو روکتے ہیں جب scheduled jobs retry یا repeat ہوں۔
- **TextBee SMS notifications** configured text messages صرف تب بھیجتے ہیں جب SMS credentials اور workflow permissions enabled ہوں۔

تجویز کردہ workflow: agent سے کہیں کہ message یا action تیار کرے، approval prompt کا review کریں، پھر approved action کو resume ہونے دیں۔ recurring reminders کے لیے، reminder deduplication enabled رکھیں تاکہ اسی event یا contact کو بار بار notified نہ کیا جائے۔

---

## Agents کو حسبِ ضرورت بنانا {#customising-agents}

ہر built-in agent کو `gratis_ai_agent_agents` filter کے ذریعے extend یا replace کیا جا سکتا ہے۔

### موجودہ agent میں custom system prompt شامل کرنا {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### نیا agent register کرنا {#registering-a-new-agent}

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

نیا agent filter چلنے کے فوراً بعد Agent Picker میں ظاہر ہوتا ہے۔

### built-in agent کو remove کرنا {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
