---
title: WPMU DEV ပေါင်းစည်းမှု
sidebar_position: 4
_i18n_hash: 01cdaa5cf8aece1ca5c269d943e8a9e9
---
# WPMU DEV ပေါင်းစပ်ချိတ်ဆက်ခြင်း

## အကျဉ်းချုပ်
WPMU DEV သည် WordPress site များအတွက် hosting၊ plugin များနှင့် ဝန်ဆောင်မှုများကို ပေးဆောင်သော ပြည့်စုံသော WordPress platform တစ်ခုဖြစ်သည်။ ဤပေါင်းစပ်ချိတ်ဆက်မှုသည် Ultimate Multisite နှင့် WPMU DEV hosting အကြား domain များ အလိုအလျောက် sync လုပ်ခြင်းနှင့် SSL certificate စီမံခန့်ခွဲခြင်းတို့ကို ဆောင်ရွက်ပေးနိုင်သည်။

## အင်္ဂါရပ်များ
- Domain များ အလိုအလျောက် sync လုပ်ခြင်း
- SSL certificate စီမံခန့်ခွဲခြင်း
- SSL certificate အတည်ပြုရန် ကြိုးပမ်းမှုအကြိမ်အရေအတွက် တိုးမြှင့်ထားခြင်း

## လိုအပ်ချက်များ
သင် WPMU DEV တွင် host လုပ်ထားပါက ဤပေါင်းစပ်ချိတ်ဆက်မှုသည် အလိုအလျောက် သိရှိပြီး built-in API ကို အသုံးပြုပါသည်။ WPMU DEV တွင် host လုပ်ထားလျှင် နောက်ထပ် ပြင်ဆင်သတ်မှတ်ရန် မလိုအပ်ပါ။

ဤပေါင်းစပ်ချိတ်ဆက်မှုသည် `WPMUDEV_HOSTING_SITE_ID` constant ရှိမရှိ စစ်ဆေးပါသည်။ WPMU DEV တွင် host လုပ်ထားသောအခါ ၎င်း constant ကို အလိုအလျောက် သတ်မှတ်ပေးပါသည်။

## တပ်ဆင်ခြင်း လမ်းညွှန်

### ၁။ WPMU DEV Hosting ကို အတည်ပြုပါ

WPMU DEV တွင် host လုပ်ထားပါက လိုအပ်သော constant များကို ကြိုတင်သတ်မှတ်ပြီးသားဖြစ်သင့်သည်။ အောက်ပါတို့ကို စစ်ဆေးပါ -

1. သင့် environment တွင် `WPMUDEV_HOSTING_SITE_ID` constant သတ်မှတ်ထားကြောင်း
2. API access ပါဝင်သော WPMU DEV membership အသက်ဝင်နေကြောင်း

### ၂။ ပေါင်းစပ်ချိတ်ဆက်မှုကို ဖွင့်ပါ

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. WPMU DEV ပေါင်းစပ်ချိတ်ဆက်မှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Domain Sync လုပ်ခြင်း

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ -

1. ပေါင်းစပ်ချိတ်ဆက်မှုသည် WPMU DEV API ကို အသုံးပြု၍ domain ကို သင့် hosting account သို့ ထည့်သွင်းပါသည်
2. www version domain ကိုလည်း အလိုအလျောက် ထည့်သွင်းပေးပါသည်
3. WPMU DEV သည် domain ပြင်ဆင်သတ်မှတ်ခြင်းနှင့် SSL certificate ထုတ်ပေးခြင်းကို ကိုင်တွယ်ပါသည်

### SSL Certificate စီမံခန့်ခွဲခြင်း

SSL certificate များ ထုတ်ပေးပြီး တပ်ဆင်ရန် အချိန်အနည်းငယ် ကြာနိုင်သောကြောင့် WPMU DEV hosting အတွက် SSL certificate အတည်ပြုရန် ကြိုးပမ်းမှုအကြိမ်အရေအတွက်ကို တိုးမြှင့်ထားပါသည်။ ပုံမှန်အားဖြင့် ၅ ကြိမ် ကြိုးပမ်းသည့်နေရာတွင် SSL certificate အတည်ပြုခြင်းအတွက် ၁၀ ကြိမ်အထိ ကြိုးပမ်းပါမည်။

## အရေးကြီးသော မှတ်ချက်များ

### Domain ဖယ်ရှားခြင်း

လက်ရှိတွင် WPMU DEV API သည် domain များကို ဖယ်ရှားရန် နည်းလမ်းမပေးထားပါ။ Ultimate Multisite တွင် domain mapping ကို ဖယ်ရှားသောအခါ domain သည် သင့် WPMU DEV hosting account တွင် ကျန်ရှိနေပါမည်။ လိုအပ်ပါက WPMU DEV hosting dashboard မှ ကိုယ်တိုင် ဖယ်ရှားရပါမည်။

### API Authentication

ဤပေါင်းစပ်ချိတ်ဆက်မှုသည် သင့် WordPress database တွင် `wpmudev_apikey` option အဖြစ် သိမ်းဆည်းထားသော WPMU DEV API key ကို အသုံးပြုပါသည်။ သင့် site ကို WPMU DEV နှင့် ချိတ်ဆက်သောအခါ ၎င်းကို အလိုအလျောက် သတ်မှတ်ပေးပါသည်။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင့် site သည် WPMU DEV နှင့် မှန်ကန်စွာ ချိတ်ဆက်ထားကြောင်း စစ်ဆေးပါ
- သင့် WordPress database တွင် `wpmudev_apikey` option သတ်မှတ်ထားကြောင်း စစ်ဆေးပါ
- သင့် WPMU DEV membership အသက်ဝင်နေကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- WPMU DEV သည် SSL certificate များ ထုတ်ပေးရန် အချိန်အနည်းငယ် ကြာနိုင်သည် (ပုံမှန်အားဖြင့် ၅-၁၅ မိနစ်)
- ပေါင်းစပ်ချိတ်ဆက်မှုသည် SSL certificate များအတွက် ၁၀ ကြိမ်အထိ စစ်ဆေးရန် ပြင်ဆင်ထားသည်
- အကြိမ်များစွာ ကြိုးပမ်းပြီးနောက်တွင်လည်း SSL certificate များ ထုတ်ပေးခြင်းမရှိပါက WPMU DEV support ကို ဆက်သွယ်ပါ

### Domain မထည့်သွင်းရသေးခြင်း
- အမှားသတင်းစကား တစ်စုံတစ်ရာ ရှိမရှိ Ultimate Multisite log များကို စစ်ဆေးပါ
- Domain ကို WPMU DEV တွင် ကြိုတင်ထည့်သွင်းပြီးသားမဟုတ်ကြောင်း စစ်ဆေးပါ
- သင့် WPMU DEV hosting plan သည် သင်ထည့်သွင်းလိုသော domain အရေအတွက်ကို ပံ့ပိုးကြောင်း သေချာပါစေ
