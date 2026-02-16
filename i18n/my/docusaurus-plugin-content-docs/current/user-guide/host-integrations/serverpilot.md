---
title: ServerPilot ပေါင်းစည်းမှု
sidebar_position: 16
_i18n_hash: fdbdebe91bc1687b519dc0986de244d3
---
# ServerPilot ပေါင်းစပ်အသုံးပြုခြင်း

## ခြုံငုံသုံးသပ်ချက်
ServerPilot သည် DigitalOcean၊ Amazon၊ Google သို့မဟုတ် အခြား server provider များရှိ server များတွင် WordPress နှင့် အခြား PHP website များကို host လုပ်ရန်အတွက် cloud service တစ်ခုဖြစ်သည်။ ဤပေါင်းစပ်မှုသည် Ultimate Multisite နှင့် ServerPilot အကြား domain အလိုအလျောက် sync လုပ်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲမှုကို ဖွင့်ပေးပါသည်။

## အင်္ဂါရပ်များ
- Domain အလိုအလျောက် sync လုပ်ခြင်း
- Let's Encrypt ဖြင့် SSL certificate စီမံခန့်ခွဲခြင်း
- SSL အလိုအလျောက် သက်တမ်းတိုးခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် သတ်မှတ်ထားရန် လိုအပ်ပါသည်:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

## တပ်ဆင်ခြင်း လမ်းညွှန်ချက်များ

### ၁။ သင့် ServerPilot API Credentials များ ရယူခြင်း

1. သင့် ServerPilot dashboard သို့ login ဝင်ပါ
2. "Account" > "API" သို့ သွားပါ
3. API key မရှိသေးပါက အသစ်တစ်ခု ဖန်တီးပါ
4. သင့် Client ID နှင့် API Key ကို ကူးယူပါ

### ၂။ သင့် App ID ရယူခြင်း

1. သင့် ServerPilot dashboard တွင် "Apps" သို့ သွားပါ
2. သင့် WordPress multisite ကို host လုပ်ထားသည့် app ကို ရွေးချယ်ပါ
3. App ID သည် URL တွင် မြင်နိုင်ပါသည်: `https://manage.serverpilot.io/apps/{APP_ID}`

### ၃။ wp-config.php တွင် Constant များ ထည့်သွင်းခြင်း

အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ:

```php
define('WU_SERVER_PILOT_CLIENT_ID', 'your_client_id');
define('WU_SERVER_PILOT_API_KEY', 'your_api_key');
define('WU_SERVER_PILOT_APP_ID', 'your_app_id');
```

### ၄။ ပေါင်းစပ်မှုကို ဖွင့်ခြင်း

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. ServerPilot ပေါင်းစပ်မှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Domain Sync လုပ်ခြင်း

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ:

1. ပေါင်းစပ်မှုသည် ServerPilot မှ လက်ရှိ domain စာရင်းကို ရယူပါသည်
2. domain အသစ်ကို စာရင်းထဲသို့ ထည့်သွင်းပါသည် (သက်ဆိုင်ပါက www version နှင့်အတူ)
3. API မှတစ်ဆင့် ServerPilot သို့ update လုပ်ထားသော စာရင်းကို ပို့ပါသည်
4. ServerPilot သည် သင့် application အတွက် domain စာရင်းကို update လုပ်ပါသည်

### SSL Certificate စီမံခန့်ခွဲခြင်း

Domain များ sync လုပ်ပြီးနောက်:

1. ပေါင်းစပ်မှုသည် သင့် application အတွက် AutoSSL ကို အလိုအလျောက် ဖွင့်ပေးပါသည်
2. ServerPilot သည် Let's Encrypt အသုံးပြုပြီး SSL certificate ထုတ်ပေးခြင်းနှင့် တပ်ဆင်ခြင်းကို ကိုင်တွယ်ပါသည်
3. ServerPilot သည် SSL certificate များ အလိုအလျောက် သက်တမ်းတိုးခြင်းကိုလည်း ကိုင်တွယ်ပါသည်

## SSL Certificate အတည်ပြုခြင်း

ServerPilot သည် SSL certificate များ ထုတ်ပေးပြီး တပ်ဆင်ရန် အချိန်အနည်းငယ် ကြာနိုင်သောကြောင့်၊ ပေါင်းစပ်မှုသည် ServerPilot အတွက် SSL certificate အတည်ပြုခြင်း ကြိုးစားမှုအရေအတွက်ကို တိုးမြှင့်ထားပါသည်။ ပုံမှန်အားဖြင့် ၅ ကြိမ်အထိ ကြိုးစားမည်ဖြစ်သော်လည်း filter များအသုံးပြုပြီး ချိန်ညှိနိုင်ပါသည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင့် Client ID နှင့် API Key မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် App ID မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် ServerPilot account တွင် လိုအပ်သော permission များ ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- ServerPilot သည် SSL certificate များ ထုတ်ပေးမီ domain များတွင် သင့် server သို့ ညွှန်းသော မှန်ကန်သည့် DNS record များ ရှိရန် လိုအပ်ပါသည်
- SSL certificate များ မထုတ်ပေးပါက၊ သင့် domain များသည် သင့် server ၏ IP address သို့ မှန်ကန်စွာ ညွှန်းထားကြောင်း စစ်ဆေးပါ
- ServerPilot သည် SSL certificate များ ထုတ်ပေးပြီး တပ်ဆင်ရန် အချိန်အနည်းငယ် ကြာနိုင်ပါသည် (ပုံမှန်အားဖြင့် ၅-၁၅ မိနစ်)

### Domain မထည့်သွင်းရသေးခြင်း
- error message များအတွက် Ultimate Multisite log များကို စစ်ဆေးပါ
- domain သည် ServerPilot တွင် မထည့်သွင်းရသေးကြောင်း စစ်ဆေးပါ
- သင့် ServerPilot plan သည် သင်ထည့်သွင်းနေသော domain အရေအတွက်ကို ပံ့ပိုးကြောင်း သေချာပါစေ

### Domain ဖယ်ရှားခြင်း
- လက်ရှိတွင် ServerPilot API သည် domain တစ်ခုချင်းစီ ဖယ်ရှားရန် နည်းလမ်း မပေးပါ
- Ultimate Multisite တွင် domain mapping တစ်ခုကို ဖယ်ရှားသောအခါ၊ ပေါင်းစပ်မှုသည် ဖယ်ရှားလိုက်သော domain ကို ချန်လှပ်ပြီး ServerPilot ရှိ domain စာရင်းကို update လုပ်မည်ဖြစ်သည်
