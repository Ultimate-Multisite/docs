---
title: Cloudways ပေါင်းစည်းမှု
sidebar_position: 3
_i18n_hash: 931ac98efe704dc50c74537ea2676529
---
# Cloudways ပေါင်းစည်းမှု

## အကျဉ်းချုပ်
Cloudways သည် DigitalOcean၊ AWS၊ Google Cloud နှင့် အခြားသော cloud provider များတွင် WordPress site များကို deploy လုပ်နိုင်စေသည့် managed cloud hosting platform တစ်ခုဖြစ်သည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် Cloudways အကြား domain အလိုအလျောက်ချိန်ကိုက်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲမှုကို ဖွင့်ပေးပါသည်။

## လုပ်ဆောင်ချက်များ
- Domain အလိုအလျောက်ချိန်ကိုက်ခြင်း
- SSL certificate စီမံခန့်ခွဲမှု
- နောက်ထပ် domain များအတွက် ပံ့ပိုးမှု
- SSL certificate များအတွက် DNS အတည်ပြုခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် သတ်မှတ်ရပါမည်:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

ရွေးချယ်နိုင်သည့်အနေဖြင့်၊ အောက်ပါကိုလည်း သတ်မှတ်နိုင်သည်:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'comma,separated,list,of,domains');
```

## တပ်ဆင်ခြင်း လမ်းညွှန်

### ၁။ သင်၏ Cloudways API အထောက်အထားများ ရယူခြင်း

1. သင်၏ Cloudways dashboard သို့ ဝင်ရောက်ပါ
2. "Account" > "API Keys" သို့ သွားပါ
3. API key မရှိသေးပါက တစ်ခု ထုတ်လုပ်ပါ
4. သင်၏ email နှင့် API key ကို ကူးယူပါ

### ၂။ သင်၏ Server နှင့် Application ID များ ရယူခြင်း

1. သင်၏ Cloudways dashboard တွင် "Servers" သို့ သွားပါ
2. သင်၏ WordPress multisite ကို host လုပ်ထားသည့် server ကို ရွေးချယ်ပါ
3. Server ID သည် URL တွင် မြင်နိုင်သည်: `https://platform.cloudways.com/server/{SERVER_ID}`
4. "Applications" သို့ သွား၍ သင်၏ WordPress application ကို ရွေးချယ်ပါ
5. App ID သည် URL တွင် မြင်နိုင်သည်: `https://platform.cloudways.com/server/{SERVER_ID}/application/{APP_ID}`

### ၃။ wp-config.php တွင် Constant များ ထည့်သွင်းခြင်း

အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ:

```php
define('WU_CLOUDWAYS_EMAIL', 'your_cloudways_email');
define('WU_CLOUDWAYS_API_KEY', 'your_api_key');
define('WU_CLOUDWAYS_SERVER_ID', 'your_server_id');
define('WU_CLOUDWAYS_APP_ID', 'your_app_id');
```

အမြဲပါဝင်သင့်သော နောက်ထပ် domain များ ရှိပါက:

```php
define('WU_CLOUDWAYS_EXTRA_DOMAINS', 'domain1.com,domain2.com,*.wildcard.com');
```

### ၄။ ပေါင်းစည်းမှုကို ဖွင့်ခြင်း

1. သင်၏ WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. Cloudways ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Domain ချိန်ကိုက်ခြင်း

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ:

1. ပေါင်းစည်းမှုသည် လက်ရှိ map လုပ်ထားသော domain များအားလုံးကို ရယူသည်
2. domain အသစ်ကို စာရင်းထဲသို့ ထည့်သွင်းသည် (သင့်လျော်ပါက www version နှင့်အတူ)
3. စာရင်းအပြည့်အစုံကို API မှတစ်ဆင့် Cloudways သို့ ပို့သည်
4. Cloudways သည် သင်၏ application အတွက် domain alias များကို update လုပ်သည်

မှတ်ချက်: Cloudways API သည် domain တစ်ခုချင်းစီ ထည့်ခြင်း သို့မဟုတ် ဖယ်ရှားခြင်းမဟုတ်ဘဲ domain စာရင်းအပြည့်အစုံကို တစ်ကြိမ်လုပ်တိုင်း ပို့ရန် လိုအပ်သည်။

### SSL Certificate စီမံခန့်ခွဲမှု

Domain များ ချိန်ကိုက်ပြီးနောက်:

1. ပေါင်းစည်းမှုသည် သင်၏ server သို့ ညွှန်ပြနေသော မှန်ကန်သော DNS record များရှိသည့် domain များကို စစ်ဆေးသည်
2. ထို domain များအတွက် Let's Encrypt SSL certificate များ install လုပ်ရန် Cloudways သို့ တောင်းဆိုချက် ပို့သည်
3. Cloudways သည် SSL certificate ထုတ်ပေးခြင်းနှင့် install လုပ်ခြင်းကို ဆောင်ရွက်သည်

## နောက်ထပ် Domain များ

`WU_CLOUDWAYS_EXTRA_DOMAINS` constant သည် Cloudways နှင့် ချိန်ကိုက်သောအခါ အမြဲပါဝင်သင့်သော နောက်ထပ် domain များကို သတ်မှတ်နိုင်စေသည်။ ဤအရာသည် အောက်ပါအတွက် အသုံးဝင်သည်:

- Ultimate Multisite က မစီမံခန့်ခွဲသော domain များ
- Wildcard domain များ (ဥပမာ `*.example.com`)
- Development သို့မဟုတ် staging domain များ

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင်၏ email နှင့် API key မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင်၏ server နှင့် application ID များ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင်၏ Cloudways account တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- Cloudways သည် SSL certificate များ ထုတ်ပေးမီ domain များတွင် သင်၏ server သို့ ညွှန်ပြနေသော မှန်ကန်သော DNS record များ ရှိရန် လိုအပ်သည်
- ပေါင်းစည်းမှုသည် SSL certificate များ တောင်းဆိုမီ DNS record များကို အတည်ပြုသည်
- SSL certificate များ မထုတ်ပေးပါက၊ သင်၏ domain များသည် သင်၏ server ၏ IP address သို့ မှန်ကန်စွာ ညွှန်ပြနေကြောင်း စစ်ဆေးပါ

### Domain မထည့်သွင်းနိုင်ခြင်း
- အမှားသတင်းများ ရှိမရှိ Ultimate Multisite log များကို စစ်ဆေးပါ
- domain သည် Cloudways တွင် ထည့်သွင်းပြီးသား မဟုတ်ကြောင်း စစ်ဆေးပါ
- သင်၏ Cloudways plan သည် သင်ထည့်သွင်းနေသော domain အရေအတွက်ကို ပံ့ပိုးကြောင်း သေချာပါစေ
