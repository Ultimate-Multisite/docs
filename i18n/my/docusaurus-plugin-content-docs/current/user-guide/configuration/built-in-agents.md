---
title: ပါဝင်သော အေးဂျင့်များ
sidebar_position: 12
_i18n_hash: 4852fdc3ddd1a44a574c100846e84dc5
---
# မူလပါဝင်သော Agents များ

Gratis AI Agent v1.9.0 မှာ မူလပါဝင်တဲ့ Agents ငါးခု ပါဝင်ပါတယ်။ ဒီ Agents တစ်ခုချင်းစီဟာ အသုံးပြုရလွယ်ကူစေဖို့အတွက် သီးသန့် Tools တွေ၊ သီးသန့် System prompt တွေနဲ့ အဲဒီနယ်ပယ်မှာ အသုံးများတဲ့ လုပ်ငန်းတွေနဲ့ ကိုက်ညီတဲ့ အစပြု အကြံပြုချက်တွေနဲ့ ကြိုတင် ဖွဲ့စည်းပေးထားပါတယ်။ Agents တစ်ခုကနေ နောက်တစ်ခုကို ပြောင်းလိုက်တာနဲ့ Assistant ရဲ့ လုပ်ဆောင်နိုင်စွမ်းနဲ့ အကြောင်းပြန်ပုံတွေဟာ သင့်ဘက်က ဘာမှ ချိန်ညှိစရာမလိုဘဲ အလိုအလျောက် ပြောင်းလဲသွားမှာ ဖြစ်ပါတယ်။

## Agent ဆိုတာ ဘာလဲ။

Agent တစ်ခုစီဟာ အောက်ပါအရာတွေကို ပေါင်းစပ်ထားတဲ့ နာမည်ပေးထားတဲ့ စနစ်ဖွဲ့စည်းမှု ပရိုဖိုင် (configuration profile) တစ်ခု ဖြစ်ပါတယ်။

- **Tools** — Agent က အသုံးပြုခွင့်ရတဲ့ စွမ်းရည်တွေ (ဥပမာ- Content Writer တစ်ယောက်မှာ post ဖန်တီးခွင့်တွေ ရပါတယ်။ Design Studio မှာ CSS နဲ့ theme.json စွမ်းရည်တွေ ရပါတယ်။)
- **System prompt** — Agent ရဲ့ အသံ၊ ဦးစားပေးအချက်တွေနဲ့ ကန့်သတ်ချက်တွေကို သတ်မှတ်ပေးတဲ့ ညွှန်ကြားချက်များ
- **Suggestions** — စကားပြောတဲ့ interface မှာ မြင်ရတဲ့၊ အမြန်စတင်နိုင်ဖို့ ကူညီပေးတဲ့ ကြိုတင်ရေးထားတဲ့ prompt များ

## Agent Picker ကို အသုံးပြုခြင်း

၁။ WordPress admin sidebar မှာ **Gratis AI Agent** panel ကို ဖွင့်ပါ။
၂။ စကားပြောခေါင်းစီးရဲ့ ဘယ်ဘက်အပေါ်ထောင့်က **agent icon** ကို နှိပ်ပါ။ (Active agent ကို ပြသဖို့ icon ဟာ ပြောင်းလဲသွားပါလိမ့်မယ်။)
၃။ **Agent Picker** ဟာ ဖောင်ပုံစံ-ဇယား အပေါ်ယံလွှာ (form-table overlay) အနေနဲ့ ပွင့်လာပါလိမ့်မယ်။ Agent တစ်ခုချင်းစီကို icon၊ နာမည်နဲ့ တစ်ကြောင်းတည်း ဖော်ပြချက်တွေနဲ့ စာရင်းပြုစုထားပါတယ်။
၄။ Agent တစ်ခုရဲ့ အကွက်ကို နှိပ်ပြီး အသက်သွင်းပါ။ စကားပြောခေါင်းစီးဟာ ချက်ချင်း အပ်ဒိတ်လုပ်သွားပါလိမ့်မယ်။

စကားပြောနေစဉ်အတွင်းမှာလည်း Agents တွေကို ပြောင်းလဲနိုင်ပါတယ်။ အဲဒီအခါမှာတော့ Agent အသစ်ရဲ့ system prompt က နောက် message ကနေ စတင် အကျိုးသက်ရောက်မှာ ဖြစ်ပါတယ်။

## မူလပါဝင်သော Agents ငါးခု

### Content Writer

**အဓိက အာရုံစိုက်မှု:** Post များ၊ Page များနဲ့ Contact Form များကို ဖန်တီးခြင်းနှင့် တည်းဖြတ်ခြင်း။

**ရရှိနိုင်သော tools များ:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`

**ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်သည့်အရာများ:**
- အကျဉ်းချုပ် (brief) သို့မဟုတ် outline တစ်ခုကနေ blog post များ ရေးသားပြီး ထုတ်ဝေခြင်း
- ဝက်ဘ်ဆိုဒ်အသစ်အတွက် landing page အစုအဝေးများ ဖန်တီးခြင်း
- Contact form နဲ့ မေးမြန်းမှု form များကို တည်ဆောက်ခြင်း
- URL ဒါမှမဟုတ် ရှာဖွေမှုကနေ Post တွေအတွက် featured image များ သတ်မှတ်ပေးခြင်း

**အစပြု အကြံပြုချက်များ:**
- *WordPress multisite ရဲ့ အကျိုးကျေးဇူးတွေအကြောင်း စကားလုံး ၅၀၀ ပါတဲ့ blog post တစ်ခု ရေးပေးပါ။*
- *About၊ Services နဲ့ Contact page တွေကို ဖန်တီးပြီး ထုတ်ဝေပေးပါ။*
- *Contact page မှာ booking မေးမြန်းမှု form တစ်ခု ထည့်ပေးပါ။*

---

### Site Builder

**အဓိက အာရုံစိုက်မှု:** Prompt တစ်ခုတည်းကနေ ဝက်ဘ်ဆိုဒ်တစ်ခုလုံးကို အစအဆုံး ဖန်တီးခြင်း။

**ရရှိနိုင်သော tools များ:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`

**ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်သည့်အရာများ:**
- ဖော်ပြထားတဲ့ လုပ်ငန်းအမျိုးအစားအတွက် multi-phase site build plan တစ်ခုကို ထုတ်ပေးခြင်း
- အဆင့်တိုင်းကို ကိုယ်ပိုင်အုပ်ချုပ်မှုနဲ့ အကောင်အထည်ဖော်ခြင်း — ဖွဲ့စည်းပုံ၊ အကြောင်းအရာ၊ လမ်းကြောင်း၊ ဒီဇိုင်း
- လုပ်ငန်းစဉ်အလယ်မှာ အမှားတွေဖြစ်ရင်လည်း ကိုယ်တိုင်ဝင်ရောက်ပြင်ဆင်စရာမလိုဘဲ ပြန်လည်ရရှိနိုင်ခြင်း
- Build ရဲ့ အစိတ်အပိုင်းအဖြစ် အကြံပြုထားတဲ့ plugins တွေကို ထည့်သွင်းပေးခြင်း
- Chat interface ကနေ တိုက်ရိုက် Contact form တွေ ဖန်တီးပေးခြင်း (Superdav AI Agent v1.10.0+)

**အစပြု အကြံပြုချက်များ:**
- *Gallery post type၊ booking page နဲ့ contact form ပါတဲ့ ဓာတ်ပုံရိုက်တဲ့ portfolio site တစ်ခု တည်ဆောက်ပေးပါ။*
- *online menu၊ ဖွင့်ချိန်နဲ့ table-booking မေးမြန်းမှု form ပါတဲ့ စားသောင်ယ် ဝက်ဘ်ဆိုဒ်တစ်ခု ဖန်တီးပေးပါ။*
- *service page များ၊ portfolio section နဲ့ blog ပါတဲ့ freelance consulting site တစ်ခု စနစ်တကျ တည်ဆောက်ပေးပါ။*
- *site builder ကို အသုံးပြုပြီး Contact page မှာ contact form တစ်ခု ထည့်ပေးပါ။*

---

### Design Studio

**အဓိက အာရုံစိုက်မှု:** အရောင်များ၊ စာလုံးပုံစံ (typography)၊ CSS နဲ့ block patterns တွေနဲ့ ပုံရိပ်ပိုင်းဆိုင်ရာ စိတ်ကြိုက်ပြင်ဆင်မှုများ။

**ရရှိနိုင်သော tools များ:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်သည့်အရာများ:**
- နာမည်ပေးထားတဲ့ theme presets တွေကို အသုံးပြုပေးခြင်း (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog)
- theme.json ကနေ global typography နဲ့ အရောင်အသွေးတွေကို အသေးစိတ် ချိန်ညှိပေးခြင်း
- brand-specific အစားထိုးမှုတွေအတွက် custom CSS တွေ ထည့်ပေးခြင်း
- page တစ်ခုရဲ့ screenshot ရိုက်ပြီး ဒီဇိုင်းပြဿနာတွေ ရှိမရှိ ပြန်လည်သုံးသပ်ပေးခြင်း

**အစပြု အကြံပြုချက်များ:**
- *warm-editorial preset ကို အသုံးပြုပြီး အဓိကအရောင်ကို #2d6a4f လို့ သတ်မှတ်ပေးပါ။*
- *homepage ရဲ့ screenshot ရိုက်ပြီး ဘယ်နေရာတွေ ပိုကောင်းအောင် လုပ်လို့ရမလဲ ပြောပြပေးပါ။*
- *full-width background image နဲ့ centred heading ပါတဲ့ ပြန်လည်အသုံးပြုနိုင်တဲ့ hero block pattern တစ်ခု ဖန်တီးပေးပါ။*

---

### Plugin Manager

**အဓိက အာရုံစိုက်မှု:** WordPress plugins များကို ရှာဖွေခြင်း၊ ထည့်သွင်းခြင်းနှင့် စီမံခန့်ခွဲခြင်း။

**ရရှိနိုင်သော tools များ:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်သည့်အရာများ:**
- အသုံးပြုမယ့် အခြေအနေကို ဖော်ပြပြီး အသင့်တော်ဆုံး plugin ကို အကြံပြုပေးခြင်း
- registry ကနေ ability pack တွေကို ထည့်သွင်းပေးခြင်း
- အမျိုးအစားအလိုက် ရရှိနိုင်တဲ့ ability catalogue ကို ကြည့်ရှုခြင်း

**အစပြု အကြံပြုချက်များ:**
- *အဖွဲ့ဝင်စာရင်း (membership directory) အတွက် အကောင်းဆုံး plugin ဘာလဲ။*
- *WooCommerce ability pack ကို ထည့်သွင်းပေးပါ။*
- *ရရှိနိုင်တဲ့ e-commerce ability pack အားလုံးကို ပြပေးပါ။*

---

### Support Assistant

**အဓိက အာရုံစိုက်မှု:** site content၊ settings နဲ့ WordPress configuration နဲ့ ပတ်သက်တဲ့ မေးခွန်းတွေကို အဖြေပေးခြင်း။

**ရရှိနိုင်သော tools များ:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ကောင်းမွန်စွာ လုပ်ဆောင်နိုင်သည့်အရာများ:**
- လက်ရှိ site settings နဲ့ options တွေကို စစ်ဆေးကြည့်ရှုပေးခြင်း
- site မှာ ဘယ်လို post types, taxonomies နဲ့ menus တွေ ဖွဲ့စည်းထားလဲဆိုတာ ရှင်းပြပေးခြင်း
- live values တွေကို ဖတ်ရှုခြင်းအားဖြင့် "ဒီ setting က ဘာလုပ်တာလဲ?" ဆိုတဲ့ မေးခွန်းတွေကို အဖြေပေးခြင်း
- ပြောင်းလဲမှုတွေ မလုပ်ခင် စစ်ဆေးတဲ့ read-only diagnostic layer အဖြစ် လုပ်ဆောင်ပေးခြင်း

**အစပြု အကြံပြုချက်များ:**
- *ဒီ site မှာ ဘယ် plugins တွေနဲ့ settings တွေ အခု အသက်ဝင်နေလဲ။*
- *ဒီ site မှာ မှတ်ပုံတင်ထားတဲ့ custom post types အားလုံးကို စာရင်းလုပ်ပေးပါ။*
- *ဘယ် navigation menus တွေ ရှိပြီး ဘယ်နေရာတွေမှာ သတ်မှတ်ထားလဲ။*

---

## Agents များကို စိတ်ကြိုက်ပြင်ဆင်ခြင်း

Built-in Agent တစ်ခုချင်းစီကို `gratis_ai_agent_agents` filter ကို အသုံးပြုပြီး တိုးချဲ့နိုင်거나 အစားထိုးနိုင်ပါတယ်။

### ရှိပြီးသား Agent တစ်ခုကို custom system prompt ထည့်ခြင်း

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### Agent အသစ်တစ်ခုကို မှတ်ပုံတင်ခြင်း

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

Agent အသစ်ဟာ filter အလုပ်လုပ်ပြီးတာနဲ့ Agent Picker မှာ ချက်ချင်း ပေါ်လာပါလိမ့်မယ်။

### Built-in Agent တစ်ခုကို ဖယ်ရှားခြင်း

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
