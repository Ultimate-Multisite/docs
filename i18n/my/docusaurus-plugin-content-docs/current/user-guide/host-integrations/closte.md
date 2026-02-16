---
title: Closte ပေါင်းစပ်မှု
sidebar_position: 7
_i18n_hash: 8f07c74ab2f7df614f502e0cc089c3e0
---
# Closte ပေါင်းစပ်အသုံးပြုခြင်း

## အကျဉ်းချုပ်
Closte သည် Google Cloud အခြေခံအဆောက်အအုံပေါ်တွင် တည်ဆောက်ထားသော managed WordPress hosting platform တစ်ခုဖြစ်သည်။ ဤပေါင်းစပ်မှုသည် Ultimate Multisite နှင့် Closte အကြား domain အလိုအလျောက် sync လုပ်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲခြင်းတို့ကို လုပ်ဆောင်နိုင်စေပါသည်။

## အင်္ဂါရပ်များ
- Domain အလိုအလျောက် sync လုပ်ခြင်း
- SSL certificate စီမံခန့်ခွဲခြင်း
- Wildcard domain ပံ့ပိုးမှု
- Closte တွင် အသုံးပြုနေပါက ပြင်ဆင်သတ်မှတ်ရန် မလိုအပ်ပါ

## လိုအပ်ချက်များ
Closte ကို အသုံးပြုနေပါက အောက်ပါ constant ကို သင်၏ `wp-config.php` ဖိုင်တွင် သတ်မှတ်ထားရန် လိုအပ်ပါသည်:

```php
define('CLOSTE_CLIENT_API_KEY', 'your_api_key');
```

Closte တွင် hosting လုပ်ထားပါက ဤ constant သည် ပုံမှန်အားဖြင့် သတ်မှတ်ပြီးသားဖြစ်ပါသည်။

## တပ်ဆင်ခြင်း လမ်းညွှန်

### ၁။ သင်၏ Closte API Key ကို အတည်ပြုခြင်း

Closte တွင် hosting လုပ်ထားပါက `CLOSTE_CLIENT_API_KEY` constant သည် သင်၏ `wp-config.php` ဖိုင်တွင် သတ်မှတ်ပြီးသားဖြစ်သင့်ပါသည်။ သင်၏ `wp-config.php` ဖိုင်ကို စစ်ဆေးခြင်းဖြင့် အတည်ပြုနိုင်ပါသည်။

### ၂။ ပေါင်းစပ်မှုကို ဖွင့်ခြင်း

1. သင်၏ WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. Closte ပေါင်းစပ်မှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ:

1. ပေါင်းစပ်မှုသည် သင်၏ application သို့ domain ထည့်ရန် Closte ၏ API သို့ request ပို့ပါသည်
2. Closte သည် SSL certificate ထုတ်ပေးခြင်းကို အလိုအလျောက် လုပ်ဆောင်ပါသည်
3. Domain mapping ကို ဖယ်ရှားသောအခါ ပေါင်းစပ်မှုသည် Closte မှ domain ကို ဖယ်ရှားပေးပါသည်

ဤပေါင်းစပ်မှုသည် Ultimate Multisite ရှိ DNS check interval setting နှင့်လည်း အလုပ်လုပ်ပြီး၊ DNS propagation နှင့် SSL certificate ထုတ်ပေးခြင်းကို မည်မျှကြာကြာ စစ်ဆေးမည်ကို ပြင်ဆင်သတ်မှတ်နိုင်စေပါသည်။

## Domain Record ဖန်တီးခြင်း

ဤပေါင်းစပ်မှုသည် site တစ်ခု ဖန်တီးသောအခါ သို့မဟုတ် ပုံတူကူးသောအခါ domain record ကို အလိုအလျောက် ဖန်တီးကြောင်း သေချာစေပါသည်။ ၎င်းသည် Closte ပေါင်းစပ်မှုအတွက် အထူးအရေးကြီးပါသည်၊ အဘယ်ကြောင့်ဆိုသော် domain record ဖန်တီးခြင်းသည် Closte API ကို domain နှင့် SSL certificate ဖန်တီးရန် အစပြုစေသောကြောင့်ဖြစ်သည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင်၏ Closte API key မှန်ကန်ကြောင်း အတည်ပြုပါ
- သင်၏ Closte account တွင် လိုအပ်သော permissions ရှိကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- Closte သည် SSL certificates ထုတ်ပေးရန် အချိန်အနည်းငယ် ယူနိုင်ပါသည် (ပုံမှန်အားဖြင့် ၅-၁၀ မိနစ်)
- သင်၏ domains များသည် သင်၏ Closte server ၏ IP address သို့ မှန်ကန်စွာ ညွှန်ပြထားကြောင်း အတည်ပြုပါ
- မှန်ကန်စွာ ပြင်ဆင်သတ်မှတ်ထားကြောင်း သေချာစေရန် သင်၏ domain အတွက် DNS records များကို စစ်ဆေးပါ

### Domain မထည့်နိုင်ခြင်း
- error message များရှိမရှိ Ultimate Multisite logs ကို စစ်ဆေးပါ
- Domain သည် Closte တွင် ထည့်သွင်းပြီးသားမဟုတ်ကြောင်း အတည်ပြုပါ
- သင်၏ domain ၏ DNS records များကို မှန်ကန်စွာ ပြင်ဆင်သတ်မှတ်ထားကြောင်း သေချာပါစေ

### DNS Check Interval
- SSL certificates ထုတ်ပေးရန် အချိန်ကြာလွန်းနေပါက Domain Mapping settings တွင် DNS check interval ကို ချိန်ညှိနိုင်ပါသည်
- မူလ interval သည် ၃၀၀ စက္ကန့် (၅ မိနစ်) ဖြစ်သော်လည်း၊ testing အတွင်း ပိုမြန်စွာ စစ်ဆေးရန် ၁၀ စက္ကန့်အထိ နိမ့်နိမ့် သတ်မှတ်နိုင်ပါသည်
