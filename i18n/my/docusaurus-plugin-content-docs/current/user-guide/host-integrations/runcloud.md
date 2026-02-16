---
title: RunCloud ပေါင်းစပ်ခြင်း
sidebar_position: 13
_i18n_hash: 05a61d871e286ae6c87bc7653377dee4
---
# RunCloud ပေါင်းစည်းမှု

## အကျဉ်းချုပ်
RunCloud သည် cloud-based server စီမံခန့်ခွဲရေး platform တစ်ခုဖြစ်ပြီး သင့်ကိုယ်ပိုင် cloud server များပေါ်တွင် web application များကို လွယ်ကူစွာ deploy လုပ်ပြီး စီမံခန့်ခွဲနိုင်စေပါသည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် RunCloud အကြား domain အလိုအလျောက် sync လုပ်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲမှုကို ဖြစ်နိုင်စေပါသည်။

## အင်္ဂါရပ်များ
- Domain အလိုအလျောက် sync လုပ်ခြင်း
- SSL certificate စီမံခန့်ခွဲမှု
- Mapping များ ဖျက်လိုက်သောအခါ domain ဖယ်ရှားခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် သတ်မှတ်ပေးရပါမည်။

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

## စနစ်ထည့်သွင်းခြင်း လမ်းညွှန်

### ၁။ သင့် RunCloud API အထောက်အထားများ ရယူခြင်း

1. သင့် RunCloud dashboard သို့ ဝင်ရောက်ပါ
2. "User Profile" သို့ သွားပါ (ညာဘက်အပေါ်ထောင့်ရှိ သင့် profile ပုံကို နှိပ်ပါ)
3. Menu မှ "API" ကို ရွေးပါ
4. API Key မရှိသေးပါက "Generate API Key" ကို နှိပ်ပါ
5. သင့် API Key နှင့် API Secret ကို ကူးယူပါ

### ၂။ သင့် Server နှင့် App ID များ ရယူခြင်း

1. သင့် RunCloud dashboard တွင် "Servers" သို့ သွားပါ
2. သင့် WordPress multisite host လုပ်ထားသော server ကို ရွေးပါ
3. Server ID သည် URL တွင် မြင်နိုင်ပါသည်။ `https://manage.runcloud.io/servers/{SERVER_ID}`
4. "Web Applications" သို့ သွားပြီး သင့် WordPress application ကို ရွေးပါ
5. App ID သည် URL တွင် မြင်နိုင်ပါသည်။ `https://manage.runcloud.io/servers/{SERVER_ID}/apps/{APP_ID}`

### ၃။ wp-config.php တွင် Constant များ ထည့်သွင်းခြင်း

အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ။

```php
define('WU_RUNCLOUD_API_KEY', 'your_api_key');
define('WU_RUNCLOUD_API_SECRET', 'your_api_secret');
define('WU_RUNCLOUD_SERVER_ID', 'your_server_id');
define('WU_RUNCLOUD_APP_ID', 'your_app_id');
```

### ၄။ ပေါင်းစည်းမှုကို ဖွင့်ခြင်း

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆွဲချပါ
4. RunCloud ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ။

1. ပေါင်းစည်းမှုသည် RunCloud ၏ API သို့ request တစ်ခု ပေးပို့ပြီး သင့် application တွင် domain ကို ထည့်သွင်းပါသည်
2. Domain အောင်မြင်စွာ ထည့်သွင်းပြီးပါက ပေါင်းစည်းမှုသည် SSL certificate များကိုလည်း redeploy လုပ်ပါမည်
3. Domain mapping ကို ဖယ်ရှားသောအခါ ပေါင်းစည်းမှုသည် RunCloud မှ domain ကို ဖယ်ရှားပါမည်

Subdomain installation များအတွက်၊ သင့် network တွင် site အသစ်များ ထည့်သွင်းသောအခါ ပေါင်းစည်းမှုသည် RunCloud တွင် subdomain များ ဖန်တီးခြင်းကို အလိုအလျောက် ကိုင်တွယ်ပေးပါမည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင့် API အထောက်အထားများ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် server နှင့် app ID များ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင့် RunCloud အကောင့်တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- RunCloud သည် SSL certificate များ ထုတ်ပေးရန် အချိန်အနည်းငယ် ကြာနိုင်ပါသည်
- သင့် domain များသည် သင့် server ၏ IP လိပ်စာသို့ မှန်ကန်စွာ ညွှန်ပြထားကြောင်း စစ်ဆေးပါ
- သင့် application အတွက် RunCloud SSL setting များကို စစ်ဆေးပါ

### Domain ထည့်သွင်း၍ မရခြင်း
- Ultimate Multisite log များတွင် error message များ ရှိမရှိ စစ်ဆေးပါ
- Domain သည် RunCloud တွင် ထည့်သွင်းပြီးသား မဟုတ်ကြောင်း စစ်ဆေးပါ
- သင့် RunCloud plan သည် domain အများအပြား ထောက်ပံ့ကြောင်း သေချာပါစေ
