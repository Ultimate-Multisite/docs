---
title: ပါရှိပြီးသား အေးဂျင့်များ
sidebar_position: 12
_i18n_hash: a89717a9bbb03aa1da4d264e01acf11a
---
# ပါဝင်ပြီးသား Agents {#built-in-agents}

Gratis AI Agent v1.9.0 တွင် ပါဝင်ပြီးသား agents ငါးခု ပါဝင်ပြီး၊ တစ်ခုချင်းစီကို သတ်မှတ်ထားသော tools အစု၊ အထူးပြင်ဆင်ထားသော system prompt နှင့် ထိုနယ်ပယ်ရှိ အများသုံးလုပ်ငန်းများနှင့် ကိုက်ညီသော စတင်အသုံးပြုရန် suggestions များဖြင့် ကြိုတင်ပြင်ဆင်ထားသည်။ agents များအကြား ပြောင်းလဲခြင်းသည် assistant က ဘာလုပ်နိုင်သည်နှင့် မည်သို့တုံ့ပြန်သည်ကို ပြောင်းလဲစေသည် — သင့်ဘက်မှ configuration မလိုအပ်ပါ။ သက်ဆိုင်ရာ integrations များကို ပြင်ဆင်ထားပါက Superdav AI Agent v1.18.0 သည် ဤ workflows များသို့ schedule-aware tools၊ reminder records၊ approval gates နှင့် SMS notifications များကို ထည့်နိုင်သည်။

## Agent ဆိုတာဘာလဲ? {#what-is-an-agent}

agent တစ်ခုချင်းစီသည် အမည်ပေးထားသော configuration profile တစ်ခုဖြစ်ပြီး အောက်ပါတို့ကို ပေါင်းစပ်ထားသည်—

- **Tools** — agent က ခေါ်ယူအသုံးပြုခွင့်ရှိသော စွမ်းရည်များ (ဥပမာ Content Writer တွင် post ဖန်တီးခြင်းဆိုင်ရာ စွမ်းရည်များကို ဝင်ရောက်အသုံးပြုနိုင်သည်။ Design Studio တွင် CSS နှင့် theme.json စွမ်းရည်များကို ဝင်ရောက်အသုံးပြုနိုင်သည်)
- **System prompt** — agent ၏ အသံနေအသံထား၊ ဦးစားပေးချက်များနှင့် ကန့်သတ်ချက်များကို သတ်မှတ်ပေးသော ညွှန်ကြားချက်များ
- **Suggestions** — သင် လျင်မြန်စွာ စတင်နိုင်ရန် chat interface တွင် ပြသထားသော ကြိုတင်ရေးထားသည့် prompts များ

## Agent Picker ကို ဝင်ရောက်အသုံးပြုခြင်း {#accessing-the-agent-picker}

1. WordPress admin sidebar ထဲရှိ **Gratis AI Agent** panel ကို ဖွင့်ပါ။
2. chat header ၏ ဘယ်ဘက်အပေါ်ထောင့်ရှိ **agent icon** ကို နှိပ်ပါ (လက်ရှိအသုံးပြုနေသော agent ကို ထင်ဟပ်ရန် icon ပြောင်းလဲသည်)။
3. **Agent Picker** သည် form-table overlay အဖြစ် ဖွင့်လာမည်။ agent တစ်ခုချင်းစီကို ၎င်း၏ icon၊ အမည်နှင့် တစ်ကြောင်းစာ ဖော်ပြချက်ဖြင့် စာရင်းပြထားသည်။
4. agent row တစ်ခုကို နှိပ်၍ activate လုပ်ပါ။ chat header သည် ချက်ချင်း update ဖြစ်သည်။

စကားပြောနေစဉ်အတွင်းလည်း agents များကို ပြောင်းနိုင်သည် — agent အသစ်၏ system prompt သည် နောက်စာတိုမှစ၍ သက်ရောက်သည်။

## ပါဝင်ပြီးသား Agents ငါးခု {#the-five-built-in-agents}

### Content Writer {#content-writer}

**အာရုံစိုက်ရာ:** posts၊ pages နှင့် contact forms များ ဖန်တီးခြင်းနှင့် တည်းဖြတ်ခြင်း။

**ရရှိနိုင်သော tools:** `create_post`, `update_post`, `batch_create_posts`, `set_featured_image`, `create_contact_form`, `get_option`, `list_post_types`။ Superdav AI Agent v1.18.0 integrations ကို ဖွင့်ထားပါက configured calendar context၊ approval gates၊ reminders နှင့် SMS notification tools များလည်း အတည်ပြုထားသော workflows များအတွက် ရရှိနိုင်သည်။

**ကောင်းစွာ လုပ်ဆောင်နိုင်သောအရာများ:**
- brief သို့မဟုတ် outline မှ blog posts များ ရေးကြမ်းတင်ခြင်းနှင့် ထုတ်ဝေခြင်း
- site အသစ်တစ်ခုအတွက် landing pages များကို အစုလိုက်ဖန်တီးခြင်း
- contact နှင့် enquiry forms များ တည်ဆောက်ခြင်း
- URL သို့မဟုတ် ရှာဖွေမှုမှ posts များပေါ်တွင် featured images သတ်မှတ်ခြင်း
- ပြင်ဆင်ထားသော Google Calendar context မှ event follow-up messages များ ရေးကြမ်းရေးပြီး notifications များ မပို့မီ approval အတွက် ရပ်ထားခြင်း

**စတင်အသုံးပြုရန် suggestions:**
- *WordPress multisite ၏ အကျိုးကျေးဇူးများအကြောင်း စကားလုံး ၅၀၀ ပါသော blog post တစ်ပုဒ်ရေးပါ။*
- *About, Services နှင့် Contact page များ ဖန်တီးပြီး ထုတ်ဝေပါ။*
- *Contact page တွင် booking enquiry form တစ်ခု ထည့်ပါ။*
- *မနက်ဖြန်၏ configured calendar event တွင် ပါဝင်သူများအတွက် reminder တစ်ခု ရေးကြမ်းရေးပြီး မပို့မီ approval ကို စောင့်ပါ။*

---

### Site Builder {#site-builder}

**အာရုံစိုက်ရာ:** prompt တစ်ခုတည်းမှ website တစ်ခုကို အစမှအဆုံး ဖန်တီးခြင်း။

**ရရှိနိုင်သော tools:** `create_site_plan`, `execute_site_plan`, `get_plan_progress`, `handle_plan_error`, `create_post`, `batch_create_posts`, `register_post_type`, `create_menu`, `add_menu_item`, `inject_custom_css`, `apply_theme_json_preset`, `install_ability`, `recommend_plugin`, `create_contact_form`။ Superdav AI Agent v1.18.0 ဖြင့် administrators များ ဖွင့်ထားသောနေရာများတွင် configured managed-service၊ approval၊ reminder၊ calendar နှင့် SMS tools များ ရရှိနိုင်သည်။

**ကောင်းစွာ လုပ်ဆောင်နိုင်သောအရာများ:**
- ဖော်ပြထားသော business type တစ်ခုအတွက် အဆင့်များစွာပါသော site တည်ဆောက်မှု plan တစ်ခု ဖန်တီးခြင်း
- အဆင့်တစ်ခုချင်းစီကို ကိုယ်တိုင်လုပ်ဆောင်ခြင်း — structure၊ content၊ navigation၊ design
- manual intervention မလိုဘဲ plan အလယ်တွင် error များမှ ပြန်လည်ဖြေရှင်းခြင်း
- တည်ဆောက်မှု၏ တစ်စိတ်တစ်ပိုင်းအဖြစ် အကြံပြုထားသော plugins များ ထည့်သွင်းခြင်း
- chat interface မှ တိုက်ရိုက် contact forms များ ဖန်တီးခြင်း (Superdav AI Agent v1.10.0+)
- approval gates နှင့် reminder records များ ဖွင့်ထားသည့်အခါ duplicate notifications မဖြစ်စေဘဲ launch reminders သို့မဟုတ် attendee follow-up ကို ညှိနှိုင်းခြင်း

**စတင်အသုံးပြုရန် suggestions:**
- *gallery post type၊ booking page နှင့် contact form ပါသော photography portfolio site တစ်ခု တည်ဆောက်ပါ။*
- *online menu၊ opening hours နှင့် table-booking enquiry form ပါသော restaurant website တစ်ခု ဖန်တီးပါ။*
- *service pages၊ portfolio section နှင့် blog ပါသော freelance consulting site တစ်ခု setup လုပ်ပါ။*
- *site builder ကို အသုံးပြု၍ Contact page တွင် contact form တစ်ခု ထည့်ပါ။*
- *site launch checklist ကို approve လုပ်ပြီးနောက် configured stakeholder contact ထံ SMS reminder တစ်ခု ပို့ပါ။*

---

### Design Studio {#design-studio}

**အာရုံစိုက်ရာ:** ရုပ်သွင်ပြင် ပြင်ဆင်မှု — colours၊ typography၊ CSS နှင့် block patterns။

**ရရှိနိုင်သော tools:** `inject_custom_css`, `apply_theme_json_preset`, `get_global_styles`, `set_global_styles`, `reset_global_styles`, `add_block_pattern`, `list_block_patterns`, `set_site_logo`, `capture_screenshot`, `review_page_design`

**ကောင်းစွာ လုပ်ဆောင်နိုင်သောအရာများ:**
- အမည်ပေးထားသော theme presets များ (minimal-dark, warm-editorial, corporate-blue, vibrant-startup, classic-blog) အသုံးပြုခြင်း
- theme.json မှတစ်ဆင့် global typography နှင့် colour palettes များကို အသေးစိတ်ညှိခြင်း
- brand-specific overrides အတွက် custom CSS ထည့်သွင်းခြင်း
- page တစ်ခု၏ screenshot ရိုက်ယူပြီး design issues များအတွက် သုံးသပ်ခြင်း

**စတင်အသုံးပြုရန် suggestions:**
- *warm-editorial preset ကို အသုံးပြုပြီး primary colour ကို #2d6a4f သို့ သတ်မှတ်ပါ။*
- *homepage ၏ screenshot တစ်ခု ရိုက်ယူပြီး ဘာတွေ တိုးတက်စေမလဲ ပြောပြပါ။*
- *full-width background image နှင့် centred heading ပါသော ပြန်သုံးနိုင်သည့် hero block pattern တစ်ခု ဖန်တီးပါ။*

### Plugin Manager {#plugin-manager}

**အာရုံစိုက်ရာ:** WordPress plugins များ ရှာဖွေခြင်း၊ ထည့်သွင်းခြင်းနှင့် စီမံခြင်း။

**ရရှိနိုင်သော tools:** `list_available_abilities`, `install_ability`, `recommend_plugin`, `get_option`, `set_option`

**ကောင်းစွာ လုပ်ဆောင်နိုင်သောအရာများ:**
- ဖော်ပြထားသော အသုံးပြုမှုကိစ္စတစ်ခုအတွက် အကောင်းဆုံး plugin ကို အကြံပြုခြင်း
- registry မှ ability packs များ ထည့်သွင်းခြင်း
- ရရှိနိုင်သော ability catalogue ကို category အလိုက် ရှာဖွေကြည့်ရှုခြင်း

**စတင်အသုံးပြုရန် suggestions:**
- *membership directory အတွက် အကောင်းဆုံး plugin က ဘာလဲ?*
- *WooCommerce abilities pack ကို ထည့်သွင်းပါ။*
- *ရရှိနိုင်သော ecommerce ability packs အားလုံးကို ပြပါ။*

---

### Support Assistant {#support-assistant}

**အာရုံစိုက်ရာ:** site content၊ settings နှင့် WordPress configuration အကြောင်း မေးခွန်းများကို ဖြေကြားခြင်း။

**ရရှိနိုင်သော tools:** `get_option`, `list_options`, `list_post_types`, `list_taxonomies`, `list_menus`, `list_available_abilities`

**ကောင်းစွာ လုပ်ဆောင်နိုင်သောအရာများ:**
- လက်ရှိ site ဆက်တင်များနှင့် ရွေးချယ်စရာများကို ရှာဖွေစစ်ဆေးခြင်း
- site ပေါ်တွင် ပြင်ဆင်ထားသော post type များ၊ taxonomies များနှင့် menu များကို ရှင်းပြခြင်း
- live value များကို ဖတ်၍ "ဒီဆက်တင်က ဘာလုပ်တာလဲ?" မေးခွန်းများကို ဖြေဆိုခြင်း
- ပြောင်းလဲမှုများ မလုပ်မီ read-only စစ်ဆေးရေးအလွှာအဖြစ် အသုံးပြုခြင်း

**စတင်ရန် အကြံပြုချက်များ:**
- *ဒီ site ပေါ်တွင် လက်ရှိ active ဖြစ်နေသော plugin များနှင့် ဆက်တင်များက ဘာတွေလဲ?*
- *ဒီ site ပေါ်တွင် မှတ်ပုံတင်ထားသော custom post type အားလုံးကို စာရင်းပြပါ။*
- *navigation menu များ ဘာတွေရှိပြီး ဘယ်နေရာတွေမှာ သတ်မှတ်ထားသလဲ?*

---

## Superdav အလိုအလျောက်လုပ်ဆောင်မှု ချိတ်ဆက်မှုများ {#superdav-automation-integrations}

Superdav AI Agent v1.18.0 ချိတ်ဆက်မှုများကို ပြင်ဆင်ထားသောအခါ၊ built-in agent များသည် အချိန်ဇယားကို သိရှိသည့် ပိုမိုလုံခြုံသော အလိုအလျောက်လုပ်ဆောင်မှု workflow များတွင် ပါဝင်နိုင်သည်-

- **Google Calendar ဖတ်ရှုရေး tool များ** သည် နောက်ဆက်တွဲအလုပ်များ မရေးဆွဲမီ ပြင်ဆင်ထားသော calendar များနှင့် event များကို agent များ စစ်ဆေးနိုင်စေသည်။
- **ဆက်သွယ်ရန်နှင့် attendee ချိတ်ဆက်ဖော်ထုတ်မှု** သည် event ပါဝင်သူများကို WordPress user များ သို့မဟုတ် သိပြီးသား contact များနှင့် ကိုက်ညီအောင် ကူညီသည်။
- **လူမှ အတည်ပြုရေး gate များ** သည် authorised user က ပြန်လည်စစ်ဆေး၍ အတည်ပြုသည်အထိ အရေးကြီးသော လုပ်ဆောင်ချက်များကို ခေတ္တရပ်ထားသည်။
- **Reminder record များ** သည် scheduled job များ ပြန်ကြိုးစားခြင်း သို့မဟုတ် ထပ်ခါတလဲလဲ လုပ်ဆောင်ခြင်းအခါ ထပ်နေသော အသိပေးချက်များကို ကာကွယ်သည်။
- **TextBee SMS အသိပေးချက်များ** သည် SMS အထောက်အထားများနှင့် workflow ခွင့်ပြုချက်များ ဖွင့်ထားမှသာ ပြင်ဆင်ထားသော စာသားမက်ဆေ့ချ်များကို ပို့သည်။

အကြံပြု workflow- agent ကို မက်ဆေ့ချ် သို့မဟုတ် လုပ်ဆောင်ချက်ကို ပြင်ဆင်ခိုင်းပါ၊ အတည်ပြုရေး prompt ကို ပြန်စစ်ပါ၊ ထို့နောက် အတည်ပြုထားသော လုပ်ဆောင်ချက်ကို ဆက်လက်လုပ်ဆောင်ခွင့်ပြုပါ။ ထပ်ခါတလဲလဲ reminder များအတွက်၊ တူညီသော event သို့မဟုတ် contact ကို ထပ်ခါထပ်ခါ အသိမပေးမိစေရန် reminder deduplication ကို ဖွင့်ထားပါ။

---

## Agent များကို စိတ်ကြိုက်ပြင်ဆင်ခြင်း {#customising-agents}

built-in agent တစ်ခုချင်းစီကို `gratis_ai_agent_agents` filter မှတစ်ဆင့် တိုးချဲ့နိုင်သလို အစားထိုးနိုင်သည်။

### ရှိပြီးသား agent တစ်ခုသို့ custom system prompt ထည့်ခြင်း {#adding-a-custom-system-prompt-to-an-existing-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    if ( isset( $agents['content-writer'] ) ) {
        $agents['content-writer']['system_prompt'] .= "\n\nAlways write in British English and use the Oxford comma.";
    }
    return $agents;
} );
```

### agent အသစ် မှတ်ပုံတင်ခြင်း {#registering-a-new-agent}

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

filter လည်ပတ်ပြီးချက်ချင်း agent အသစ်သည် Agent Picker တွင် ပေါ်လာသည်။

### built-in agent တစ်ခု ဖယ်ရှားခြင်း {#removing-a-built-in-agent}

```php
add_filter( 'gratis_ai_agent_agents', function ( array $agents ): array {
    unset( $agents['plugin-manager'] );
    return $agents;
} );
```
