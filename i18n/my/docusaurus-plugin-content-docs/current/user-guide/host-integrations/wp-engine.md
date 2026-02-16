---
title: WP Engine ပေါင်းစပ်ခြင်း
sidebar_position: 2
_i18n_hash: ceeee20432439d8afb3002dd0dd1ff12
---
# WP Engine ပေါင်းစည်းမှု

## အကျဉ်းချုပ်
WP Engine သည် WordPress ဆိုက်များအတွက် ပိုမိုကောင်းမွန်သော စွမ်းဆောင်ရည်၊ လုံခြုံရေးနှင့် တိုးချဲ့နိုင်မှုတို့ကို ပေးစွမ်းသော premium managed WordPress hosting platform တစ်ခုဖြစ်သည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် WP Engine အကြား domain များကို အလိုအလျောက် sync လုပ်နိုင်စေပါသည်။

## အင်္ဂါရပ်များ
- Domain များ အလိုအလျောက် sync လုပ်ခြင်း
- Multisite installation များအတွက် subdomain ပံ့ပိုးမှု
- WP Engine ၏ လက်ရှိစနစ်များနှင့် ချောမွေ့စွာ ပေါင်းစည်းနိုင်ခြင်း

## လိုအပ်ချက်များ
သင် WP Engine တွင် host လုပ်နေပါက ပေါင်းစည်းမှုသည် အလိုအလျောက် သိရှိပြီး built-in WP Engine API ကို အသုံးပြုပါသည်။ WP Engine plugin active ဖြစ်ပြီး မှန်ကန်စွာ configure လုပ်ထားပါက နောက်ထပ် configuration လိုအပ်ခြင်း မရှိပါ။

သို့သော် ပေါင်းစည်းမှုကို ကိုယ်တိုင် configure လုပ်လိုပါက သင်၏ `wp-config.php` ဖိုင်တွင် အောက်ပါ constant များထဲမှ တစ်ခုကို သတ်မှတ်နိုင်ပါသည်:

```php
define('WPE_APIKEY', 'your_api_key'); // အကြံပြုထားသော နည်းလမ်း
// သို့မဟုတ်
define('WPE_API', 'your_api_key'); // အခြားနည်းလမ်း
```

## စတင်အသုံးပြုနည်း လမ်းညွှန်

### ၁။ WP Engine Plugin ကို စစ်ဆေးခြင်း

သင် WP Engine တွင် host လုပ်နေပါက WP Engine plugin သည် install လုပ်ပြီး activate လုပ်ထားပြီးဖြစ်သင့်သည်။ အောက်ပါတို့ကို စစ်ဆေးပါ:

1. WP Engine plugin သည် active ဖြစ်နေခြင်း
2. `wp-content/mu-plugins/wpengine-common/class-wpeapi.php` ဖိုင် ရှိနေခြင်း

### ၂။ ပေါင်းစည်းမှုကို ဖွင့်ခြင်း

1. သင်၏ WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. WP Engine ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Domain Sync လုပ်ခြင်း

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ:

1. ပေါင်းစည်းမှုသည် WP Engine API ကို အသုံးပြုပြီး domain ကို သင်၏ WP Engine installation သို့ ထည့်သွင်းပါသည်
2. WP Engine သည် domain configuration နှင့် SSL certificate ထုတ်ပေးခြင်းကို ဆောင်ရွက်ပေးပါသည်
3. Domain mapping ကို ဖယ်ရှားသောအခါ ပေါင်းစည်းမှုသည် WP Engine မှ domain ကို ဖယ်ရှားပေးပါမည်

### Subdomain ပံ့ပိုးမှု

Subdomain multisite installation များအတွက်:

1. ဆိုက်အသစ်တစ်ခု ဖန်တီးသောအခါ ပေါင်းစည်းမှုသည် subdomain တစ်ခုစီကို WP Engine သို့ ထည့်သွင်းပါသည်
2. WP Engine သည် subdomain configuration ကို ဆောင်ရွက်ပေးပါသည်
3. ဆိုက်တစ်ခုကို ဖျက်သောအခါ ပေါင်းစည်းမှုသည် WP Engine မှ subdomain ကို ဖယ်ရှားပေးပါမည်

## အရေးကြီးသော မှတ်ချက်များ

### Wildcard Domain များ

Subdomain multisite installation များအတွက် WP Engine support ကို ဆက်သွယ်ပြီး wildcard domain configuration တောင်းဆိုရန် အကြံပြုပါသည်။ ၎င်းသည် subdomain တစ်ခုစီကို တစ်ခုချင်း ထည့်သွင်းစရာမလိုဘဲ subdomain အားလုံး အလိုအလျောက် အလုပ်လုပ်နိုင်စေပါသည်။

### SSL Certificate များ

WP Engine သည် ဤပေါင်းစည်းမှုမှတစ်ဆင့် ထည့်သွင်းသော domain အားလုံးအတွက် SSL certificate ထုတ်ပေးခြင်းနှင့် သက်တမ်းတိုးခြင်းကို အလိုအလျောက် ဆောင်ရွက်ပေးပါသည်။ နောက်ထပ် configuration လိုအပ်ခြင်း မရှိပါ။

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- WP Engine plugin သည် active ဖြစ်ပြီး မှန်ကန်စွာ configure လုပ်ထားကြောင်း စစ်ဆေးပါ
- API key ကို ကိုယ်တိုင် သတ်မှတ်ထားပါက မှန်ကန်ကြောင်း စစ်ဆေးပါ
- API နှင့် ပြဿနာရှိပါက WP Engine support ကို ဆက်သွယ်ပါ

### Domain မထည့်သွင်းရသေးခြင်း
- အမှားသတင်းစကား ရှိမရှိ Ultimate Multisite logs ကို စစ်ဆေးပါ
- Domain ကို WP Engine တွင် ထည့်သွင်းပြီးသား မဟုတ်ကြောင်း စစ်ဆေးပါ
- သင်၏ WP Engine plan သည် သင်ထည့်သွင်းနေသော domain အရေအတွက်ကို ပံ့ပိုးကြောင်း သေချာပါစေ

### Subdomain ပြဿနာများ
- Subdomain များ အလုပ်မလုပ်ပါက wildcard domain configuration တောင်းဆိုရန် WP Engine support ကို ဆက်သွယ်ပါ
- သင်၏ DNS setting များသည် main domain နှင့် subdomain များအတွက် မှန်ကန်စွာ configure လုပ်ထားကြောင်း စစ်ဆေးပါ
