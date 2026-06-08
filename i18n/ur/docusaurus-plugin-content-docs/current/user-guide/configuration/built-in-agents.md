---
title: بِلٹ اِن ایجنٹس
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# بلٹ ان ایجنٹس (Built-in Agents)

Gratis AI Agent v1.9.0 پانچ بلٹ ان ایجنٹس کے ساتھ آتا ہے، جن میں سے ہر ایک کو ایک مخصوص ٹولز کے سیٹ، ایک تیار کردہ سسٹم پرامپٹ، اور اس مخصوص شعبے کے عام کاموں سے ملتے جلتے سٹارٹر سوجیژنز کے ساتھ پہلے سے ہی سیٹ کیا گیا ہے۔ ایجنٹس کے درمیان سوئچ کرنے سے اس اسسٹنٹ کی صلاحیت اور اس کے جواب دینے کا انداز بدل جاتا ہے — اور یہ سب آپ کی طرف سے کسی کنفیگریشن کے بغیر ہوتا ہے۔

## ایجنٹ کیا ہے؟ (What Is an Agent?)

ہر ایجنٹ ایک نامی کنفیگریشن پروفائل ہوتا ہے جو مندرجہ ذیل چیزوں کو یکجا کرتا ہے:

- **ٹولز (Tools)** — وہ صلاحیتیں جنہیں ایجنٹ استعمال کرنے کی اجازت رکھتا ہے (مثال کے طور پر، ایک Content Writer کے پاس پوسٹ بنانے کی صلاحیتیں ہوتی ہیں؛ ایک Design Studio کے پاس CSS اور theme.json کی صلاحیتیں ہوتی ہیں)
- **سسٹم پرامپٹ (System prompt)** — ہدایات جو ایجنٹ کے لہجے، ترجیحات، اور حدود کو طے کرتی ہیں
- **سوجیژنز (Suggestions)** — چیٹ انٹرفیس میں پہلے سے لکھے ہوئے پرامپٹس جو آپ کو جلدی سے شروع کرنے میں مدد کرتے ہیں

## ایجنٹ پکر تک رسائی (Accessing the Agent Picker)

1. WordPress ایڈمن سائیڈ بار میں **Gratis AI Agent** پینل کھولیں۔
2. چیٹ ہیڈر کے اوپر بائیں کونے میں **ایجنٹ آئیکن** پر کلک کریں (یہ آئیکن فعال ایجنٹ کو ظاہر کرنے کے لیے بدل جاتا ہے)۔
3. **Agent Picker** ایک فارم-ٹیبل اوورلے کے طور پر کھلتا ہے۔ ہر ایجنٹ کو اس کے آئیکن، نام، اور ایک لائن کی تفصیل کے ساتھ درج کیا گیا ہے۔
4. اسے فعال کرنے کے لیے کسی ایجنٹ کی قطار پر کلک کریں۔ چیٹ ہیڈر فوری طور پر اپ ڈیٹ ہو جاتا ہے۔

آپ بات چیت کے دوران بھی ایجنٹس کو سوئچ کر سکتے ہیں — نیا ایجنٹ کا سسٹم پرامپٹ اگلے پیغام سے نافذ ہو جاتا ہے۔

## پانچ بلٹ ان ایجنٹس (The Five Built-in Agents)

### Content Writer

**فوکس:** پوسٹس، پیجز، اور رابطہ فارمز بنانا اور انہیں ایڈٹ کرنا۔

**دستیاب ٹولز:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**یہ کیا اچھا کرتا ہے:**
- ایک مختصر خاکہ یا آؤٹ لائن سے بلاگ پوسٹ کا مسودہ بنانا اور اسے شائع کرنا
- ایک نئی سائٹ کے لیے لینڈنگ پیجز کے بیچ بنانا
- رابطہ اور پوچھ گچھ کے فارمز بنانا
- URL یا سرچ سے پوسٹس پر فیچرڈ امیجز سیٹ کرنا

**سٹارٹر سوجیژنز:**
- *WordPress multisite کے فوائد پر 500 الفاظ کی بلاگ پوسٹ لکھیں۔*
- *ایک About، Services، اور Contact پیج بنائیں اور انہیں شائع کریں۔*
- *Contact پیج پر ایک بکنگ پوچھ گچھ کا فارم شامل کریں۔*

---

### Site Builder

**فوکس:** ایک ہی پرامپٹ سے مکمل ویب سائٹ بنانا۔

**دستیاب ٹولز:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**یہ کیا اچھا کرتا ہے:**
- بیان کردہ کاروبار کی قسم کے لیے ایک کثیر فیز سائٹ بلڈ پلان تیار کرنا
- ہر فیز کو خودکار طریقے سے چلانا — ڈھانچہ، مواد، نیویگیشن، ڈیزائن
- دستی مداخلت کی ضرورت کے بغیر پلان کے دوران غلطیوں سے سنبھلنا
- بلڈ کے حصے کے طور پر تجویز کردہ پلگ ان انسٹال کرنا
- چیٹ انٹرفیس سے براہ راست رابطہ فارمز بنانا (Superdav AI Agent v1.10.0+)

**سٹارٹر سوجیژنز:**
- *ایک گیلری پوسٹ ٹائپ، ایک بکنگ پیج، اور ایک رابطہ فارم کے ساتھ فوٹوگرافی پورٹفولیو سائٹ بنائیں۔*
- *آن لائن مینو، کھلنے کے اوقات، اور ٹیبل بکنگ پوچھ گچھ کے فارم کے ساتھ ایک ریسٹورنٹ ویب سائٹ بنائیں۔*
- *سروس پیجز، ایک پورٹفولیو سیکشن، اور ایک بلاگ کے ساتھ ایک فری لانس کنسلٹنگ سائٹ سیٹ کریں۔*
- *سائٹ بلڈر کا استعمال کرتے ہوئے Contact پیج پر ایک رابطہ فارم شامل کریں۔*

---

### Design Studio

**فوکس:** بصری کسٹمائزیشن — رنگ، ٹائپوگرافی، CSS، اور بلاک پیٹرن۔

**دستیاب ٹولز:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**یہ کیا اچھا کرتا ہے:**
- نامی تھیم پری سیٹس (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) کو لاگو کرنا
- theme.json کے ذریعے گلوبل ٹائپوگرافی اور رنگوں کے پیلیٹ کو بہتر بنانا
- برانڈ کے مخصوص اووررائڈ کے لیے کسٹم CSS شامل کرنا
- ایک پیج کا اسکرین شاٹ لینا اور ڈیزائن کے مسائل کے لیے اس کا جائزہ لینا

**سٹارٹر سوجیژنز:**
- *warm-editorial پری سیٹ لاگو کریں اور پھر پرائمری رنگ کو #2d6a4f پر سیٹ کریں۔*
- *ہوم پیج کا اسکرین شاٹ لیں اور مجھے بتائیں کہ آپ کیا بہتر کریں گے۔*
- *ایک فل-ویڈتھ بیک گراؤنڈ امیج اور سینٹرڈ ہیڈنگ کے ساتھ ایک قابلِ استعمال ہیرو بلاک پیٹرن بنائیں۔*

---

### Plugin Manager

**فوکس:** WordPress پلگ ان کو دریافت کرنا، انسٹال کرنا، اور ان کا انتظام کرنا۔

**دستیاب ٹولز:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**یہ کیا اچھا کرتا ہے:**
- بیان کردہ استعمال کے کیس کے لیے بہترین پلگ ان تجویز کرنا
- رجسٹری سے ایبلٹی پیک انسٹال کرنا
- کیٹیگری کے لحاظ سے دستیاب ایبلٹی کیٹلاگ کو براؤز کرنا

**سٹارٹر سوجیژنز:**
- *ممبرشپ ڈائریکٹری کے لیے بہترین پلگ ان کون سا ہے؟*
- *WooCommerce ایبلٹی پیک انسٹال کریں۔*
- *تمام دستیاب ای کامرس ایبلٹی پیک دکھائیں۔*

---

### Support Assistant

**فوکس:** سائٹ کے مواد، سیٹنگز، اور WordPress کنفیگریشن کے بارے میں سوالات کے جواب دینا۔

**دستیاب ٹولز:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**یہ کیا اچھا کرتا ہے:**
- موجودہ سائٹ کی سیٹنگز اور آپشنز کو دیکھنا
- یہ وضاحت کرنا کہ سائٹ پر کون سے پوسٹ ٹائپس، ٹیکسونومیز، اور مینیوز کنفیگر کیے گئے ہیں
- براہ راست ویلیوز پڑھ کر "یہ سیٹنگ کیا کرتی ہے؟" جیسے سوالات کے جواب دینا
- تبدیلیاں کرنے سے پہلے ایک صرف پڑھنے والا (read-only) ڈائیگناسٹک لیئر کے طور پر کام کرنا

**سٹارٹر سوجیژنز:**
- *اس سائٹ پر فی الحال کون سے پلگ ان اور سیٹنگز فعال ہیں؟*
- *اس سائٹ پر رجسٹرڈ تمام کسٹم پوسٹ ٹائپس کی فہرست بنائیں۔*
- *کون سے نیویگیشن مینیوز موجود ہیں اور وہ کہاں تفویض کیے گئے ہیں؟*

---

## ایجنٹس کو کسٹمائز کرنا (Customising Agents)

ہر بلٹ ان ایجنٹ کو `gratis_ai_agent_agents` فلٹر کے ذریعے بڑھایا یا تبدیل کیا جا سکتا ہے۔

### ایک موجودہ ایجنٹ میں کسٹم سسٹم پرامپٹ شامل کرنا

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### ایک نیا ایجنٹ رجسٹر کرنا

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

نیا ایجنٹ فلٹر چلنے کے فوراً بعد ایجنٹ پکر میں ظاہر ہو جاتا ہے۔

### ایک بلٹ ان ایجنٹ کو ہٹانا

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
