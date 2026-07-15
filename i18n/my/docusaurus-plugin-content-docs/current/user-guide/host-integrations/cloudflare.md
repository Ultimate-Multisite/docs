---
title: Cloudflare ပေါင်းစည်းမှု
sidebar_position: 16
_i18n_hash: 36ac9de19b1dc53fefd407fb8d21b563
---
# Cloudflare ပေါင်းစည်းမှု

## ခြုံငုံသုံးသပ်ချက် {#overview}
Cloudflare သည် ဝဘ်ဆိုက်များကို ကာကွယ်ပြီး ပိုမိုမြန်ဆန်စေရန် ကူညီပေးသော ထိပ်တန်း အကြောင်းအရာ ပေးပို့ကွန်ရက် (CDN) နှင့် လုံခြုံရေးပံ့ပိုးသူဖြစ်သည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် Cloudflare ကြားတွင် အထူးသဖြင့် subdomain multisite ထည့်သွင်းမှုများအတွက် domain စီမံခန့်ခွဲမှုကို အလိုအလျောက်လုပ်ဆောင်နိုင်စေသည်။

## လုပ်ဆောင်ချက်များ {#features}
- Cloudflare တွင် subdomain အလိုအလျောက် ဖန်တီးခြင်း
- Proxied subdomain ပံ့ပိုးမှု
- DNS record စီမံခန့်ခွဲမှု
- Ultimate Multisite admin တွင် DNS record ပြသမှုကို ပိုမိုကောင်းမွန်စေခြင်း

## လိုအပ်ချက်များ {#requirements}
အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် သတ်မှတ်ထားရမည်-

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_key');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

## တပ်ဆင်မှု ညွှန်ကြားချက်များ {#setup-instructions}

### 1. သင်၏ Cloudflare API Key ကို ရယူပါ {#1-get-your-cloudflare-api-key}

1. သင်၏ Cloudflare dashboard သို့ ဝင်ရောက်ပါ
2. "My Profile" သို့ သွားပါ (ညာဘက်အပေါ်ထောင့်ရှိ သင်၏အီးမေးလ်ကို နှိပ်ပါ)
3. မီနူးမှ "API Tokens" ကို ရွေးပါ
4. အောက်ပါခွင့်ပြုချက်များပါဝင်သော API token အသစ်တစ်ခု ဖန်တီးပါ-
   - Zone.Zone: Read
   - Zone.DNS: Edit
5. သင်၏ API token ကို ကူးယူပါ

### 2. သင်၏ Zone ID ကို ရယူပါ {#2-get-your-zone-id}

1. သင်၏ Cloudflare dashboard တွင် သင်အသုံးပြုလိုသော domain ကို ရွေးပါ
2. Zone ID ကို "Overview" တက်ဘ်ရှိ ညာဘက် sidebar တွင် "API" အောက်၌ တွေ့နိုင်သည်
3. Zone ID ကို ကူးယူပါ

### 3. wp-config.php တွင် Constant များ ထည့်ပါ {#3-add-constants-to-wp-configphp}

အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် ထည့်ပါ-

```php
define('WU_CLOUDFLARE_API_KEY', 'your_api_token');
define('WU_CLOUDFLARE_ZONE_ID', 'your_zone_id');
```

### 4. ပေါင်းစည်းမှုကို ဖွင့်ပါ {#4-enable-the-integration}

1. သင်၏ WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" တက်ဘ်သို့ သွားပါ
3. "Host Integrations" သို့ အောက်ဆင်းပါ
4. Cloudflare ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## ၎င်း၏ လုပ်ဆောင်ပုံ {#how-it-works}

### Subdomain စီမံခန့်ခွဲမှု {#subdomain-management}

subdomain multisite ထည့်သွင်းမှုတစ်ခုတွင် site အသစ်တစ်ခု ဖန်တီးသောအခါ-

1. ပေါင်းစည်းမှုသည် subdomain အတွက် CNAME record တစ်ခု ထည့်ရန် Cloudflare ၏ API သို့ request တစ်ခု ပို့သည်
2. subdomain ကို မူလအားဖြင့် Cloudflare မှတစ်ဆင့် proxied ဖြစ်အောင် သတ်မှတ်ထားသည် (ဤအရာကို filter များဖြင့် ပြောင်းနိုင်သည်)
3. site တစ်ခုကို ဖျက်သောအခါ ပေါင်းစည်းမှုသည် Cloudflare မှ subdomain ကို ဖယ်ရှားမည်

### DNS Record ပြသမှု {#dns-record-display}

ပေါင်းစည်းမှုသည် Ultimate Multisite admin တွင် DNS record ပြသမှုကို အောက်ပါနည်းများဖြင့် ပိုမိုကောင်းမွန်စေသည်-

1. Cloudflare မှ DNS record များကို တိုက်ရိုက် ရယူခြင်း
2. record များသည် proxied ဖြစ်မဖြစ် ပြသခြင်း
3. DNS record များအကြောင်း ထပ်ဆောင်းအချက်အလက် ပြသခြင်း

## Cloudflare Custom Hostnames {#cloudflare-custom-hostnames}

**Cloudflare Custom Hostnames** (ယခင်က "Cloudflare for SaaS" ဟု ခေါ်ခဲ့သည်) သည် သင့်ဖောက်သည်များအား သင့် multisite ကွန်ရက်တွင် ၎င်းတို့၏ကိုယ်ပိုင် domain များကို SSL ဖြင့် အသုံးပြုခွင့်ပေးသော Cloudflare လုပ်ဆောင်ချက်တစ်ခုဖြစ်သည်။ Cloudflare ကို အသုံးပြုသော domain-mapped multisite ထည့်သွင်းမှုများအတွက် အကြံပြုထားသော နည်းလမ်းဖြစ်ပြီး Cloudflare သည် custom domain တစ်ခုစီအတွက် SSL လက်မှတ် ထုတ်ပေးခြင်းနှင့် သက်တမ်းတိုးခြင်းကို အလိုအလျောက် စီမံပေးသောကြောင့်ဖြစ်သည်။

### စံ Cloudflare ပေါင်းစည်းမှုနှင့် မည်သို့ကွာခြားသနည်း {#how-it-differs-from-the-standard-cloudflare-integration}

| | စံ ပေါင်းစည်းမှု | Cloudflare Custom Hostnames |
|---|---|---|
| **ရည်ရွယ်ချက်** | subdomain များအတွက် DNS record များကို အလိုအလျောက် ဖန်တီးသည် | Cloudflare မှ စီမံသော SSL ဖြင့် custom (mapped) domain များကို အသုံးပြုနိုင်စေသည် |
| **အကောင်းဆုံးသင့်တော်သည့်အရာ** | Subdomain multisite | Domain-mapped multisite |
| **SSL** | သီးခြား ကိုင်တွယ်သည် | Cloudflare က အလိုအလျောက် စီမံသည် |

### Cloudflare Custom Hostnames ကို တပ်ဆင်ခြင်း {#setting-up-cloudflare-custom-hostnames}

1. သင်၏ Cloudflare dashboard တွင် သင်၏ main domain အတွက် zone ကို ဖွင့်ပါ။
2. **SSL/TLS > Custom Hostnames** သို့ သွားပါ။
3. သင့် server ၏ IP သို့မဟုတ် hostname ကို ဦးတည်သော fallback origin တစ်ခု ထည့်ပါ။
4. Ultimate Multisite တွင် mapped လုပ်ထားသော customer domain တစ်ခုစီအတွက် Cloudflare တွင် Custom Hostname entry တစ်ခု ထည့်ပါ။ ဤအဆင့်ကို Cloudflare API ဖြင့် အလိုအလျောက်လုပ်နိုင်သည်။
5. ဖောက်သည်၏ DNS ကို သင့်ကွန်ရက်သို့ ညွှန်ပြီးသည်နှင့် Cloudflare သည် custom hostname တစ်ခုစီအတွက် TLS လက်မှတ်များကို အလိုအလျောက် ထုတ်ပေးပြီး သက်တမ်းတိုးပေးသည်။

API ကိုးကားချက် အပြည့်အစုံအတွက် [Cloudflare Custom Hostnames စာရွက်စာတမ်း](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/domain-support/) ကို ကြည့်ပါ။

:::note အသုံးအနှုန်း အပ်ဒိတ်
Ultimate Multisite v2.6.1 မှစ၍ ဤလုပ်ဆောင်ချက်ကို plugin setting များနှင့် label များအားလုံးတွင် **Cloudflare Custom Hostnames** ဟု ခေါ်ဆိုထားသည်။ ယခင်ဗားရှင်းများတွင် အရင်းခံ Cloudflare product အမည်ဖြစ်သော "Cloudflare for SaaS" ကို အသုံးပြုခဲ့သည်။
:::

## အရေးကြီး မှတ်ချက်များ {#important-notes}

Cloudflare ၏ မကြာသေးမီ အပ်ဒိတ်များအရ ယခုအခါ သုံးစွဲသူအားလုံးအတွက် wildcard proxying ကို အသုံးပြုနိုင်ပြီဖြစ်သည်။ ဆိုလိုသည်မှာ သင်သည် Cloudflare တွင် wildcard DNS record တစ်ခုကို ရိုးရှင်းစွာ သတ်မှတ်နိုင်သောကြောင့် စံ Cloudflare DNS ပေါင်းစည်းမှုသည် ယခင်ကထက် subdomain multisite ထည့်သွင်းမှုများအတွက် အရေးပါမှု နည်းသွားသည်။

## ပြဿနာဖြေရှင်းခြင်း {#troubleshooting}

### API ချိတ်ဆက်မှု ပြဿနာများ {#api-connection-issues}
- သင်၏ API token မှန်ကန်ပြီး လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း စစ်ဆေးပါ
- သင်၏ Zone ID မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင်၏ Cloudflare account တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာစေပါ

### Subdomain မထည့်သွင်းနိုင်ခြင်း {#subdomain-not-added}
- error message များရှိမရှိ Ultimate Multisite log များကို စစ်ဆေးပါ
- subdomain ကို Cloudflare တွင် မထည့်သွင်းထားပြီးသား ဖြစ်မဖြစ် စစ်ဆေးပါ
- သင်ဖန်တီးနေသော DNS record အရေအတွက်ကို သင်၏ Cloudflare plan က ပံ့ပိုးကြောင်း သေချာစေပါ

### Proxying ပြဿနာများ {#proxying-issues}
- subdomain များကို proxied မဖြစ်စေလိုပါက `wu_cloudflare_should_proxy` filter ကို အသုံးပြုနိုင်သည်
- proxied ဖြစ်နေချိန်တွင် အချို့လုပ်ဆောင်ချက်များ မှန်ကန်စွာ အလုပ်မလုပ်နိုင်ပါ (ဥပမာ၊ WordPress admin function အချို့)
- admin စာမျက်နှာများအတွက် cache ကို ကျော်ရန် Cloudflare ၏ Page Rules ကို အသုံးပြုရန် စဉ်းစားပါ
