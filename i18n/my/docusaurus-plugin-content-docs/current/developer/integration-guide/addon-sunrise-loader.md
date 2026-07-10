---
title: အက်ဒွန် Sunrise ဖိုင်တင်သွင်းစက်
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 သည် add-ons များအတွက်နှင့် WordPress sunrise bootstrapping လုပ်နေစဉ်အတွင်း `wp-content/sunrise.php` ဖိုင်ကို တည်းဖြတ်စရာမလိုဘဲ အလုပ်လုပ်ရမည့် custom MU-plugin ပေါင်းစပ်မှုများအတွက် sunrise extension loader တစ်ခုကို ထည့်သွင်းပေးထားပါသည်။

## ဘယ်အချိန်မှာ အသုံးပြုမလဲ {#when-to-use-it}

သင့်ရဲ့ ပေါင်းစပ်မှု (integration) ဟာ custom domain routing၊ host-specific request handling၊ သို့မဟုတ် early network bootstrap ပြုပြင်မှုများလိုမျိုး ပုံမှန် plugin တွေ မမတင်ခင် အလုပ်လုပ်ရမယ်ဆိုရင် sunrise extension ကို အသုံးပြုသင့်ပါတယ်။

ပုံမှန် ပေါင်းစပ်မှုတွေအတွက်တော့ ပုံမှန် WordPress plugins တွေ၊ MU-plugins တွေနဲ့ စာရွက်စာတမ်းမှာ ဖော်ပြထားတဲ့ Ultimate Multisite hooks တွေကို အသုံးပြုတာကို ပိုနှစ်သက်ပါတယ်။ Sunrise code တွေဟာ အလွန်စောစော အလုပ်လုပ်တာဖြစ်လို့ သေးငယ်ပြီး၊ အကာအကွယ်ပေးနိုင်တဲ့ (defensive) အဆင့်ရှိရမှာဖြစ်ပြီး၊ အခြားအရာတွေနဲ့ မှီခိုမှုမရှိရပါဘူး။

## ဖိုင်အမည် သတ်မှတ်ပုံ (File naming convention) {#file-naming-convention}

`ultimate-multisite-` ဖြင့် စတင်သည့် အမည်ရှိသော addon directory တစ်ခုအတွင်း၌ `sunrise.php` ဟု အမည်ပေးထားသည့် PHP ဖိုင်တစ်ခုကို ဖန်တီးပါ။

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

ဤ loader သည် အောက်ပါ pattern ကို အသုံးပြု၍ plugins directory ကို စစ်ဆေးရှာဖွေသည်-

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

တွေ့ရှိရသည့် ဖိုင်များကို addon path အရ အက္ခရာစဉ်အတိုင်း (alphabetical order) စီစဉ်၍ load လုပ်ပေးပါမည်။

## ဖိုင်ကို ဘယ်နေရာမှာ ထားရမလဲ {#where-to-place-the-file}

sunrise လုပ်ဆောင်ချက်ပိုင်ရှင်ဖြစ်သည့် addon ၏ root directory အတွင်း၌ ဤဖိုင်ကို ထားရှိပါ-

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

ဤစစ်ဆေးမှု (scan) သည် `WP_CONTENT_DIR` နှင့် ဆက်စပ်၍ ဖြေရှင်းပေးခြင်းဖြစ်ပြီး၊ လက်ရှိ `WP_PLUGIN_DIR` တန်ဖိုးကို မဟုတ်ပါ။ multi-tenancy သို့မဟုတ် အခြား early bootstrap code များက sunrise အတွင်း plugin directory constants များကို ပြောင်းလဲသည့်အခါ ဤနည်းလမ်းက ရှာဖွေမှုကို တည်ငြိမ်စေပါသည်။

ထုတ်လုပ်ပေးထားသည့် `wp-content/sunrise.php` ဖိုင်ကို တိုက်ရိုက်တည်းဖြတ်ခြင်း မပြုရပါနှင့်။ ဤ loader သည် Ultimate Multisite မှ ထည့်သွင်းပြီး update လုပ်ပေးသည့် core sunrise ဖိုင်ကို fork လုပ်စရာမလိုဘဲ custom code များက sunrise လုပ်ဆောင်ချက်ကို ချဲ့ထွင်နိုင်စေပါသည်။

## ရရှိနိုင်သော Hooks နှင့် Filters {#hooks-and-filters-available}

Addon sunrise ဖိုင်များသည် Ultimate Multisite domain mapping များ load ပြီးနောက်၊ WordPress က `ms_loaded` ကို မထုတ်မီ အလုပ်လုပ်ပါသည်။ ဤအဆင့်တွင် sunrise ဖိုင်တစ်ခုသည် အောက်ပါတို့ကို လုပ်ဆောင်နိုင်သည်-

- `$current_site` နှင့် `$current_blog` တို့ကို ဖတ်ခြင်း သို့မဟုတ် အစားထိုးသတ်မှတ်ခြင်း။
- database configuration များ load ပြီးနောက် `$wpdb` ကို ဝင်ရောက်အသုံးပြုခြင်း။
- လိုအပ်သည့်အခါ `BLOG_ID_CURRENT_SITE` ကဲ့သို့ sunrise-time constants များကို သတ်မှတ်ပေးခြင်း။
- multi-tenancy ပေါင်းစပ်မှုများ အသုံးပြုသည့် routing state အပါအဝင် Ultimate Multisite sunrise helper state များကို ဖတ်ရှုခြင်း။

Ultimate Multisite သည် ၎င်း၏ sunrise loader အလုပ်ပြီးသွားပြီးနောက် `wu_sunrise_loaded` ကို ထုတ်ပေးပါသည်။ sunrise bootstrap ပြီးသွားပေမယ့် sunrise life cycle နဲ့ ဆက်စပ်နေသေးတဲ့ code တွေအတွက် ဤ action ကို အသုံးပြုပါ။

sunrise အဆင့်မှာ ရှိပြီးသား function တွေကိုသာ ခေါ်ဆိုပါ။ database အလုပ်များတာ၊ template render လုပ်တာ၊ HTTP request တွေနဲ့ ပုံမှန် plugin load အစီအစဉ် ပြီးဆုံးသွားပြီလို့ ယူဆတဲ့ code တွေကို ရှောင်ကြဉ်ပါ။

## အနည်းဆုံး ဥပမာ (Minimal example) {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

ဖိုင်ကို deploy လုပ်ပြီးနောက်၊ path နှစ်ခုလုံး (mapped domain နဲ့ unmapped main-site URL) က မှန်ကန်စွာ bootstrap လုပ်နေကြောင်း အတည်ပြုရန် domain တစ်ခုကို load လုပ်ပြီး unmapped main-site URL တစ်ခုကို load လုပ်ကြည့်ပါ။
