---
title: GridPane ပေါင်းစည်းမှု
sidebar_position: 13
_i18n_hash: b0a6427285411feb767e828911cdd794
---
# GridPane ပေါင်းစည်းခြင်း

## ခြုံငုံသုံးသပ်ချက်
GridPane သည် ကျွမ်းကျင်သော WordPress ပရော်ဖက်ရှင်နယ်များအတွက် အထူးတည်ဆောက်ထားသော WordPress hosting control panel တစ်ခုဖြစ်သည်။ ဤပေါင်းစည်းခြင်းသည် Ultimate Multisite နှင့် GridPane အကြား domain များကို အလိုအလျောက် sync လုပ်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲခြင်းတို့ကို လုပ်ဆောင်နိုင်စေပါသည်။

## အင်္ဂါရပ်များ
- Domain များကို အလိုအလျောက် sync လုပ်ခြင်း
- SSL certificate စီမံခန့်ခွဲခြင်း
- SUNRISE constant ကို အလိုအလျောက် ပြင်ဆင်သတ်မှတ်ခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် သတ်မှတ်ရန် လိုအပ်ပါသည်:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_app_id');
```

## တပ်ဆင်ခြင်း လမ်းညွှန်

### ၁။ သင်၏ GridPane API အထောက်အထားများ ရယူခြင်း

1. သင်၏ GridPane dashboard သို့ ဝင်ရောက်ပါ
2. "Settings" > "API" သို့ သွားပါ
3. API key မရှိသေးပါက အသစ်တစ်ခု ဖန်တီးပါ
4. သင်၏ API key ကို ကူးယူပါ

### ၂။ သင်၏ Server နှင့် Site ID များ ရယူခြင်း

1. သင်၏ GridPane dashboard တွင် "Servers" သို့ သွားပါ
2. သင်၏ WordPress multisite ကို host လုပ်ထားသော server ကို ရွေးချယ်ပါ
3. Server ID ကို မှတ်သားထားပါ (URL တွင် သို့မဟုတ် server အသေးစိတ်စာမျက်နှာတွင် မြင်နိုင်ပါသည်)
4. "Sites" သို့ သွားပြီး သင်၏ WordPress site ကို ရွေးချယ်ပါ
5. Site ID ကို မှတ်သားထားပါ (URL တွင် သို့မဟုတ် site အသေးစိတ်စာမျက်နှာတွင် မြင်နိုင်ပါသည်)

### ၃။ wp-config.php တွင် Constant များ ထည့်သွင်းခြင်း

အောက်ပါ constant များကို သင်၏ `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ:

```php
define('WU_GRIDPANE', true);
define('WU_GRIDPANE_API_KEY', 'your_api_key');
define('WU_GRIDPANE_SERVER_ID', 'your_server_id');
define('WU_GRIDPANE_APP_ID', 'your_site_id');
```

### ၄။ ပေါင်းစည်းခြင်းကို ဖွင့်ခြင်း

1. သင်၏ WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. GridPane ပေါင်းစည်းခြင်းကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ:

1. ပေါင်းစည်းခြင်းသည် GridPane ၏ API သို့ request ပို့ပြီး သင်၏ site တွင် domain ထည့်သွင်းပါသည်
2. GridPane က SSL certificate ထုတ်ပေးခြင်းကို အလိုအလျောက် ဆောင်ရွက်ပေးပါသည်
3. Domain mapping ကို ဖယ်ရှားသောအခါ ပေါင်းစည်းခြင်းသည် GridPane မှ domain ကို ဖယ်ရှားပေးပါမည်

ထို့အပြင် ပေါင်းစည်းခြင်းသည် domain mapping မှန်ကန်စွာ အလုပ်လုပ်ရန် လိုအပ်သော wp-config.php ဖိုင်ရှိ SUNRISE constant ကိုလည်း အလိုအလျောက် ကိုင်တွယ်ပေးပါသည်။

## SUNRISE Constant စီမံခန့်ခွဲခြင်း

GridPane ပေါင်းစည်းခြင်း၏ ထူးခြားသော အင်္ဂါရပ်တစ်ခုမှာ GridPane ၏ ကိုယ်ပိုင် domain mapping စနစ်နှင့် ပဋိပက္ခမဖြစ်စေရန် wp-config.php ရှိ SUNRISE constant ကို အလိုအလျောက် ပြန်လည်ပြင်ဆင်ပေးခြင်းဖြစ်သည်။ ၎င်းသည် စနစ်နှစ်ခုစလုံး ပြဿနာမရှိဘဲ အတူတကွ အလုပ်လုပ်နိုင်စေရန် သေချာစေပါသည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင်၏ API key မှန်ကန်ကြောင်း အတည်ပြုပါ
- သင်၏ server နှင့် site ID များ မှန်ကန်ကြောင်း စစ်ဆေးပါ
- သင်၏ GridPane အကောင့်တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- GridPane သည် SSL certificate များ ထုတ်ပေးရန် အချိန်အနည်းငယ် ကြာနိုင်ပါသည်
- သင်၏ domain များသည် server ၏ IP လိပ်စာသို့ မှန်ကန်စွာ ညွှန်းထားကြောင်း အတည်ပြုပါ
- သင်၏ site အတွက် GridPane SSL ဆက်တင်များကို စစ်ဆေးပါ

### Domain မထည့်သွင်းနိုင်ခြင်း
- အမှားမက်ဆေ့ခ်ျများရှိမရှိ Ultimate Multisite log များကို စစ်ဆေးပါ
- Domain ကို GridPane တွင် ထည့်သွင်းပြီးသားမဟုတ်ကြောင်း အတည်ပြုပါ
- သင်၏ domain ၏ DNS record များ မှန်ကန်စွာ ပြင်ဆင်သတ်မှတ်ထားကြောင်း သေချာပါစေ
