---
title: Hostinger (hPanel) ချိတ်ဆက်မှု
sidebar_position: 7
_i18n_hash: ce631be523b8bbe2bf3156a106abfa3d
---
# Hostinger (hPanel) ပေါင်းစပ်မှု {#hostinger-hpanel-integration}

## အကျဉ်းချုပ် {#overview}

Hostinger သည် ခေတ်မီသော control panel တစ်ခုဖြစ်သည့် hPanel ဖြင့် လူကြိုက်များသော web hosting ပံ့ပိုးပေးသူတစ်ခု ဖြစ်ပါသည်။ Ultimate Multisite Hostinger integration သည် Ultimate Multisite နှင့် Hostinger ၏ hPanel တို့အကြား domain များကို အလိုအလျောက် ပေါင်းစပ်ပေးနိုင်ခြင်းကြောင့်၊ သင်သည် domain mapping များနှင့် subdomain များကို သင့် WordPress admin မှတဆင့် တိုက်ရိုက် စီမံခန့်ခွဲနိုင်ပါသည်။

## အင်္ဂါရပ်များ {#features}

- hPanel တွင် addon domain များကို အလိုအလျောက် ဖန်တီးပေးခြင်း
- hPanel တွင် subdomain များကို အလိုအလျောက် ဖန်တီးပေးခြင်း (subdomain multisite တပ်ဆင်မှုများအတွက်)
- mapping များကို ဖျက်လိုက်သည့်အခါ domain ကိုပါ အလိုအလျောက် ဖယ်ရှားပေးခြင်း
- hPanel ၏ domain management API နှင့် အပြစ်အအနာမရှိ ပေါင်းစပ်မှု

## လိုအပ်ချက်များ {#requirements}

Hostinger integration ကို အသုံးပြုရန်အတွက် အောက်ပါအရာများ လိုအပ်သည်-

1. hPanel အသုံးပြုခွင့်ရှိသော Hostinger အကောင့်တစ်ခု
2. Hostinger မှ API token တစ်ခု
3. သင့် `wp-config.php` ဖိုင်တွင် အောက်ပါ constants များကို သတ်မှတ်ထားရမည်-

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

ရွေးချယ်နိုင်သည်မှာ အောက်ပါတို့ကိုလည်း သတ်မှတ်နိုင်သည်-

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1'); // Default API endpoint
```

## တပ်ဆင်မှု ညွှန်ကြားချက်များ {#setup-instructions}

### ၁။ Hostinger API Token ကို ထုတ်ပေးခြင်း {#1-generate-your-hostinger-api-token}

၁။ သင့် Hostinger အကောင့်သို့ ဝင်ရောက်ပြီး hPanel ကို ဖွင့်ပါ။
၂။ **Account Settings** → **API Tokens** သို့ သွားပါ။
၃။ **Create New Token** ကို နှိပ်ပါ။
၄။ သင့် token ကို ဖော်ပြနိုင်သော အမည်တစ်ခု ပေးပါ (ဥပမာ- "Ultimate Multisite")။
၅။ လိုအပ်သော ခွင့်ပြုချက်များကို ရွေးချယ်ပါ-
   - Domain management
   - Subdomain management
၆။ ထုတ်ပေးလိုက်သော token ကို ကူးယူပြီး လုံခြုံစွာ သိမ်းဆည်းထားပါ။

### ၂။ Account ID ကို ရှာဖွေခြင်း {#2-find-your-account-id}

၁။ hPanel တွင် **Account Settings** → **Account Information** သို့ သွားပါ။
၂။ သင့် Account ID ကို ဤစာမျက်နှာတွင် ပြသထားပါသည်။
၃။ ဤ ID ကို ကူးယူပြီး နောက်အဆင့်အတွက် သိမ်းထားပါ။

### ၃။ wp-config.php တွင် Constants များ ထည့်ခြင်း {#3-add-constants-to-wp-configphp}

အောက်ပါ constants များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်ပါ။

```php
define('WU_HOSTINGER_API_TOKEN', 'your_hostinger_api_token');
define('WU_HOSTINGER_ACCOUNT_ID', 'your_hostinger_account_id');
```

သင့် Hostinger အကောင့်သည် မတူညီသော API endpoint ကို အသုံးပြုပါက၊ သင်ကိုယ်တိုင် ပြုပြင်နိုင်သည်-

```php
define('WU_HOSTINGER_API_URL', 'https://api.hostinger.com/v1');
```

### ၄။ Integration ကို ဖွင့်ပေးခြင်း {#4-enable-the-integration}

၁။ သင့် WordPress admin တွင် **Ultimate Multisite > Settings** သို့ သွားပါ။
၂။ **Domain Mapping** tab သို့ သွားပါ။
၃။ **Host Integrations** အထိ အောက်သို့ ဆင်းပါ။
၄။ **Hostinger (hPanel)** integration ကို ဖွင့်ပေးပါ။
၅။ **Save Changes** ကို နှိပ်ပါ။

## အလုပ်လုပ်ပုံ {#how-it-works}

### Addon Domains များ {#addon-domains}

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သည့်အခါ-

၁။ integration သည် domain ကို addon domain အဖြစ် ထည့်ရန် Hostinger ၏ API သို့ request တစ်ခု ပေးပို့သည်။
၂။ domain ကို သင့် root directory သို့ ညွှန်ပြရန် စီစဉ်ပေးသည်။
၃။ domain mapping ကို ဖယ်ရှားလိုက်သည့်အခါ၊ integration သည် addon domain ကို hPanel မှ အလိုအလျောက် ဖယ်ရှားပေးသည်။

### Subdomains များ {#subdomains}

subdomain multisite တပ်ဆင်မှုများအတွက်၊ site အသစ်တစ်ခုကို ဖန်တီးသည့်အခါ-

၁။ integration သည် အပြည့်အဝ domain မှ subdomain အပိုင်းကို ထုတ်ယူသည်။
၂။ subdomain ကို ထည့်ရန် Hostinger ၏ API သို့ request တစ်ခု ပေးပို့သည်။
၃။ subdomain ကို သင့် root directory သို့ ညွှန်ပြရန် စီစဉ်ပေးသည်။

## အရေးကြီးသော မှတ်ချက်များ {#important-notes}

- ဤ integration သည် သင့်အကောင့်နှင့် ဆက်သွယ်ရန် Hostinger ၏ REST API ကို အသုံးပြုသည်။
- သင့် API token တွင် domain နှင့် subdomain စီမံခန့်ခွဲမှုအတွက် လိုအပ်သော ခွင့်ပြုချက်များ ရှိရမည်။
- ဤ integration သည် DNS configuration ကို ကိုင်တွယ်ခြင်းမရှိပါ။ domain များသည် Hostinger အကောင့်သို့ ကြိုတင် ညွှန်ပြထားရမည်။
- API request များကို HTTPS မှတစ်ဆင့် လုံခြုံစွာ ပြုလုပ်သည်။
- သင့် API token ကို လုံခြုံစွာ သိမ်းဆည်းထားပြီး အများသိအောင် ဘယ်တော့မှ မမျှဝေပါနှင့်။

## ပြဿနာဖြေရှင်းခြင်း {#troubleshooting}

### API ချိတ်ဆက်မှု ပြဿနာများ {#api-connection-issues}

- သင့် API token သည် မှန်ကန်ပြီး သက်တမ်းမကုန်သေးကြောင်း စစ်ဆေးပါ။
- သင့် Account ID သည် မှန်ကန်ကြောင်း စစ်ဆေးပါ။
- သင့် API token တွင် domain စီမံခန့်ခွဲမှုအတွက် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာပါစေ။
- သင့် Hostinger အကောင့်သည် အသက်ဝင်ပြီး အခြေအနေကောင်းမွန်ကြောင်း စစ်ဆေးပါ။

### Domain မထည့်နိုင်ခြင်း {#domain-not-added}

- Ultimate Multisite logs တွင် အမှားသတင်းများ ရှိမရှိ စစ်ဆေးပါ။
- domain သည် သင့် Hostinger အကောင့်တွင် မရှိသေးကြောင်း စစ်ဆေးပါ။
- သင့် Hostinger အကောင့်သည် addon domain အတွက် ကန့်သတ်ချက်ကို မရောက်သေးကြောင်း သေချာပါစေ။
- domain သည် သင့် Hostinger nameservers သို့ မှန်ကန်စွာ ညွှန်ပြထားကြောင်း အတည်ပြုပါ။

### SSL Certificate ပြဿနာများ {#ssl-certificate-issues}

- ဤ integration သည် SSL certificate ထုတ်ပေးခြင်းကို ကိုင်တွယ်ခြင်းမရှိပါ။
- Hostinger သည် များသောအားဖြင့် AutoSSL မှတစ်ဆင့် အခမဲ့ SSL certificate များကို ပံ့ပိုးပေးပါသည်။
- သင်သည် hPanel ၏ **SSL/TLS** အောက်တွင် SSL certificate များကို တိုက်ရိုက် စီမံခန့်ခွဲနိုင်ပါသည်။
- အခြားနည်းလမ်းအနေဖြင့် Hostinger ၏ AutoSSL feature ဖြင့် Let's Encrypt ကို အသုံးပြုပါ။

## အကူအညီရယူခြင်း {#support}

Hostinger integration နှင့် ပတ်သက်၍ အကူအညီများ ပိုမိုလိုပါက အောက်ပါတို့ကို ကြည့်ရှုနိုင်ပါသည်-

- [Hostinger API Documentation](https://support.hostinger.com/en/articles/4286-api-documentation)
- [Ultimate Multisite Documentation](/)
- [Ultimate Multisite Support](https://ultimatemultisite.com/support)
