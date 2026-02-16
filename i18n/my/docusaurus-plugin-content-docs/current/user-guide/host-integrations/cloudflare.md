---
title: Cloudflare ပေါင်းစည်းမှု
sidebar_position: 16
_i18n_hash: 41bd975db7c89a129f5f880b439a8f2f
---
# Cloudflare ပေါင်းစပ်အသုံးပြုခြင်း

## အကျဉ်းချုပ်
Cloudflare သည် ဝက်ဘ်ဆိုက်များကို ကာကွယ်ပေးပြီး အမြန်နှုန်းမြှင့်တင်ပေးသော ထိပ်တန်း content delivery network (CDN) နှင့် လုံခြုံရေးဝန်ဆောင်မှုပေးသူ ဖြစ်သည်။ ဤပေါင်းစပ်အသုံးပြုခြင်းသည် Ultimate Multisite နှင့် Cloudflare အကြား domain စီမံခန့်ခွဲမှုကို အလိုအလျောက် ဆောင်ရွက်နိုင်စေပြီး၊ အထူးသဖြင့် subdomain multisite တပ်ဆင်မှုများအတွက် အသုံးဝင်ပါသည်။

## အင်္ဂါရပ်များ
- Cloudflare တွင် subdomain များကို အလိုအလျောက် ဖန်တီးခြင်း
- Proxied subdomain ပံ့ပိုးမှု
- DNS record စီမံခန့်ခွဲခြင်း
- Ultimate Multisite admin တွင် DNS record ပြသမှုကို ပိုမိုကောင်းမွန်အောင် မြှင့်တင်ခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် သတ်မှတ်ပေးရပါမည်:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## စနစ်ထည့်သွင်းခြင်း လမ်းညွှန်

### ၁။ သင့် Cloudflare API Key ရယူခြင်း

1. သင့် Cloudflare dashboard သို့ ဝင်ရောက်ပါ
2. "My Profile" သို့ သွားပါ (ညာဘက်အပေါ်ထောင့်ရှိ သင့် email ကို နှိပ်ပါ)
3. မီနူးမှ "API Tokens" ကို ရွေးပါ
4. အောက်ပါ ခွင့်ပြုချက်များဖြင့် API token အသစ် ဖန်တီးပါ:
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. သင့် API token ကို ကူးယူပါ

### ၂။ သင့် Zone ID ရယူခြင်း

1. သင့် Cloudflare dashboard တွင် အသုံးပြုလိုသော domain ကို ရွေးပါ
2. Zone ID သည် "Overview" tab တွင်၊ ညာဘက် sidebar ရှိ "API" အောက်တွင် မြင်ရပါမည်
3. Zone ID ကို ကူးယူပါ

### ၃။ wp-config.php တွင် Constant များ ထည့်သွင်းခြင်း

အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ:

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### ၄။ ပေါင်းစပ်အသုံးပြုခြင်းကို ဖွင့်ခြင်း

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. Cloudflare ပေါင်းစပ်အသုံးပြုခြင်းကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Subdomain စီမံခန့်ခွဲခြင်း

Subdomain multisite တပ်ဆင်မှုတွင် ဆိုက်အသစ် ဖန်တီးသောအခါ:

1. ပေါင်းစပ်အသုံးပြုခြင်းသည် subdomain အတွက် CNAME record ထည့်ရန် Cloudflare ၏ API သို့ request ပို့ပါသည်
2. Subdomain သည် မူရင်းအတိုင်း Cloudflare မှတဆင့် proxy ပြုလုပ်ရန် သတ်မှတ်ထားပါသည် (ဤအချက်ကို filter များဖြင့် ပြောင်းလဲနိုင်ပါသည်)
3. ဆိုက်တစ်ခုကို ဖျက်သောအခါ၊ ပေါင်းစပ်အသုံးပြုခြင်းသည် Cloudflare မှ subdomain ကို ဖယ်ရှားပါမည်

### DNS Record ပြသခြင်း

ပေါင်းစပ်အသုံးပြုခြင်းသည် Ultimate Multisite admin တွင် DNS record ပြသမှုကို အောက်ပါနည်းလမ်းများဖြင့် ပိုမိုကောင်းမွန်အောင် ပြုလုပ်ပေးပါသည်:

1. Cloudflare မှ DNS record များကို တိုက်ရိုက် ဆွဲယူခြင်း
2. Record များကို proxy ပြုလုပ်ထားခြင်း ရှိ/မရှိ ပြသခြင်း
3. DNS record များအကြောင်း နောက်ထပ်အချက်အလက်များ ပြသခြင်း

## အရေးကြီးသော မှတ်ချက်များ

Cloudflare ၏ မကြာသေးမီက အပ်ဒိတ်များအရ၊ wildcard proxying သည် ယခု သုံးစွဲသူအားလုံးအတွက် ရရှိနိုင်ပါပြီ။ ဆိုလိုသည်မှာ Cloudflare တွင် wildcard DNS record တစ်ခု ရိုးရှင်းစွာ သတ်မှတ်နိုင်သောကြောင့်၊ subdomain multisite တပ်ဆင်မှုများအတွက် Cloudflare ပေါင်းစပ်အသုံးပြုခြင်းသည် အရင်ကလောက် မရှိမဖြစ်မဟုတ်တော့ပါ။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင့် API token မှန်ကန်ပြီး လိုအပ်သော ခွင့်ပြုချက်များ ရှိမရှိ စစ်ဆေးပါ
- သင့် Zone ID မှန်ကန်မှု ရှိမရှိ စစ်ဆေးပါ
- သင့် Cloudflare အကောင့်တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိမရှိ သေချာပါစေ

### Subdomain ထည့်သွင်းမရခြင်း
- အမှားမက်ဆေ့ချ်များ ရှိမရှိ Ultimate Multisite log များကို စစ်ဆေးပါ
- Subdomain ကို Cloudflare တွင် ထည့်သွင်းပြီးသား ဟုတ်မဟုတ် စစ်ဆေးပါ
- သင့် Cloudflare plan သည် သင်ဖန်တီးနေသော DNS record အရေအတွက်ကို ပံ့ပိုးမှု ရှိမရှိ သေချာပါစေ

### Proxy ပြုလုပ်ခြင်း ပြဿနာများ
- Subdomain များကို proxy ပြုလုပ်မလိုပါက `wu_cloudflare_should_proxy` filter ကို အသုံးပြုနိုင်ပါသည်
- Proxy ပြုလုပ်ထားသောအခါ အချို့အင်္ဂါရပ်များ မှန်ကန်စွာ အလုပ်မလုပ်နိုင်ပါ (ဥပမာ - အချို့ WordPress admin လုပ်ဆောင်ချက်များ)
- Admin စာမျက်နှာများအတွက် cache ကို ကျော်ဖြတ်ရန် Cloudflare ၏ Page Rules အသုံးပြုခြင်းကို စဉ်းစားပါ
