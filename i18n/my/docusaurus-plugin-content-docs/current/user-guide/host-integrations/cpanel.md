---
title: cPanel ပေါင်းစည်းမှု
sidebar_position: 5
_i18n_hash: ba79fa3cffb0f29c4eda9bdf59244a2f
---
# cPanel ပေါင်းစည်းမှု

## အကျဉ်းချုပ်
cPanel သည် shared hosting နှင့် dedicated hosting provider များစွာက အသုံးပြုသော အရေပန်းအများဆုံး web hosting control panel တစ်ခုဖြစ်သည်။ ဤပေါင်းစည်းမှုသည် Ultimate Multisite နှင့် cPanel အကြား domain များကို အလိုအလျောက် ချိန်ကိုက်ပေးနိုင်ပြီး၊ သင့် cPanel အကောင့်တွင် domain alias များနှင့် subdomain များကို အလိုအလျောက် ထည့်သွင်းနိုင်စေပါသည်။

## လုပ်ဆောင်ချက်များ
- cPanel တွင် addon domain များကို အလိုအလျောက် ဖန်တီးခြင်း
- cPanel တွင် subdomain များကို အလိုအလျောက် ဖန်တီးခြင်း (subdomain multisite တပ်ဆင်မှုများအတွက်)
- mapping များ ဖျက်လိုက်သောအခါ domain ကို ဖယ်ရှားခြင်း

## လိုအပ်ချက်များ
အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် သတ်မှတ်ထားရပါမည်-

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

ထို့အပြင်၊ အောက်ပါတို့ကိုလည်း ရွေးချယ်သတ်မှတ်နိုင်ပါသည်-

```php
define('WU_CPANEL_PORT', 2083); // မူရင်းမှာ 2083 ဖြစ်သည်
define('WU_CPANEL_ROOT_DIR', '/public_html'); // မူရင်းမှာ /public_html ဖြစ်သည်
```

## တပ်ဆင်မှု လမ်းညွှန်

### ၁။ သင့် cPanel အထောက်အထားများ ရယူပါ

1. သင့် hosting provider ထံမှ cPanel username နှင့် password ကို ရယူပါ
2. သင့် cPanel host ကို သတ်မှတ်ပါ (များသောအားဖြင့် `cpanel.yourdomain.com` သို့မဟုတ် `yourdomain.com:2083`)

### ၂။ wp-config.php တွင် Constant များ ထည့်သွင်းပါ

အောက်ပါ constant များကို သင့် `wp-config.php` ဖိုင်တွင် ထည့်သွင်းပါ-

```php
define('WU_CPANEL_USERNAME', 'your_cpanel_username');
define('WU_CPANEL_PASSWORD', 'your_cpanel_password');
define('WU_CPANEL_HOST', 'your_cpanel_host');
```

လိုအပ်ပါက port နှင့် root directory ကို စိတ်ကြိုက်ပြောင်းလဲနိုင်ပါသည်-

```php
define('WU_CPANEL_PORT', 2083); // သင့် cPanel က မတူညီသော port သုံးပါက ပြောင်းပါ
define('WU_CPANEL_ROOT_DIR', '/public_html'); // သင့် document root မတူညီပါက ပြောင်းပါ
```

### ၃။ ပေါင်းစည်းမှုကို ဖွင့်ပါ

1. သင့် WordPress admin တွင် Ultimate Multisite > Settings သို့ သွားပါ
2. "Domain Mapping" tab သို့ သွားပါ
3. "Host Integrations" သို့ scroll ဆင်းပါ
4. cPanel ပေါင်းစည်းမှုကို ဖွင့်ပါ
5. "Save Changes" ကို နှိပ်ပါ

## အလုပ်လုပ်ပုံ

### Addon Domain များ

Ultimate Multisite တွင် domain တစ်ခုကို map လုပ်သောအခါ-

1. ပေါင်းစည်းမှုသည် cPanel ၏ API သို့ addon domain အဖြစ် ထည့်ရန် request ပို့ပါသည်
2. Domain ကို သင့် root directory သို့ ညွှန်းအောင် ပြင်ဆင်ပေးပါသည်
3. Domain mapping ကို ဖယ်ရှားသောအခါ၊ ပေါင်းစည်းမှုသည် cPanel မှ addon domain ကို ဖယ်ရှားပေးပါမည်

### Subdomain များ

Subdomain multisite တပ်ဆင်မှုများအတွက်၊ site အသစ်တစ်ခု ဖန်တီးသောအခါ-

1. ပေါင်းစည်းမှုသည် domain အပြည့်အစုံမှ subdomain အစိတ်အပိုင်းကို ထုတ်ယူပါသည်
2. cPanel ၏ API သို့ subdomain ထည့်ရန် request ပို့ပါသည်
3. Subdomain ကို သင့် root directory သို့ ညွှန်းအောင် ပြင်ဆင်ပေးပါသည်

## အရေးကြီးသော မှတ်ချက်များ

- ပေါင်းစည်းမှုသည် သင့် cPanel အကောင့်နှင့် ဆက်သွယ်ရန် cPanel ၏ API2 ကို အသုံးပြုပါသည်
- သင့် cPanel အကောင့်တွင် addon domain များနှင့် subdomain များ ထည့်ရန် ခွင့်ပြုချက်ရှိရပါမည်
- အချို့ hosting provider များသည် သင်ဖန်တီးနိုင်သော addon domain သို့မဟုတ် subdomain အရေအတွက်ကို ကန့်သတ်ထားနိုင်ပါသည်
- ပေါင်းစည်းမှုသည် DNS configuration ကို မကိုင်တွယ်ပါ၊ သင့် domain များကို သင့် server ၏ IP လိပ်စာသို့ ညွှန်းရန် သင်ကိုယ်တိုင် လုပ်ဆောင်ရပါမည်

## ပြဿနာဖြေရှင်းခြင်း

### API ချိတ်ဆက်မှု ပြဿနာများ
- သင့် cPanel username နှင့် password မှန်ကန်ကြောင်း အတည်ပြုပါ
- သင့် cPanel host မှန်ကန်ပြီး ဝင်ရောက်နိုင်ကြောင်း စစ်ဆေးပါ
- သင့် cPanel အကောင့်တွင် လိုအပ်သော ခွင့်ပြုချက်များ ရှိကြောင်း သေချာပါစေ
- host အတွက် URL အပြည့်အစုံ အသုံးပြုကြည့်ပါ (ဥပမာ `https://cpanel.yourdomain.com`)

### Domain မထည့်နိုင်ခြင်း
- အမှားအယွင်း မက်ဆေ့ချ်များအတွက် Ultimate Multisite log များကို စစ်ဆေးပါ
- Domain ကို cPanel တွင် ထည့်ပြီးသားမဟုတ်ကြောင်း အတည်ပြုပါ
- သင့် cPanel အကောင့်သည် addon domain သို့မဟုတ် subdomain အကန့်အသတ်သို့ မရောက်သေးကြောင်း သေချာပါစေ

### SSL Certificate ပြဿနာများ
- ပေါင်းစည်းမှုသည် SSL certificate ထုတ်ပေးခြင်းကို မကိုင်တွယ်ပါ
- သင့် domain များအတွက် SSL certificate ထုတ်ရန် cPanel ၏ SSL/TLS tools သို့မဟုတ် AutoSSL feature ကို အသုံးပြုရပါမည်
- တစ်နည်းအားဖြင့်၊ cPanel ၏ AutoSSL နှင့်အတူ Let's Encrypt ကဲ့သို့သော ဝန်ဆောင်မှုကို အသုံးပြုနိုင်ပါသည်
