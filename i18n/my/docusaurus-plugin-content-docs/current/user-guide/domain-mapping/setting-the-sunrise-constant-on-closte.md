---
title: Closte တွင် Sunrise Constant ကို သတ်မှတ်ခြင်း
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte တွင် Sunrise constant ကို true အဖြစ် သတ်မှတ်ခြင်း

Hosting provider အချို့သည် လုံခြုံရေးအကြောင်းပြချက်ဖြင့် wp-config.php ဖိုင်ကို လော့ခ်ချထားကြပါသည်။ ထိုကြောင့် Ultimate Multisite သည် domain mapping နှင့် အခြားအင်္ဂါရပ်များ အလုပ်လုပ်ရန် လိုအပ်သော constants များကို ထည့်သွင်းဖို့ ထိုဖိုင်ကို အလိုအလျောက် ပြင်ဆင်၍ မရပါ။ Closte သည် ထိုကဲ့သို့သော host တစ်ခုဖြစ်ပါသည်။

သို့သော် Closte တွင် wp-config.php သို့ constants များကို လုံခြုံစွာ ထည့်သွင်းနိုင်သည့် နည်းလမ်းတစ်ခု ရှိပါသည်။ အောက်ပါအဆင့်များကို လိုက်နာရုံသာဖြစ်ပါသည်။

## Closte dashboard တွင်

ပထမဦးစွာ [သင်၏ Closte အကောင့်သို့ ဝင်ရောက်ပါ](https://app.closte.com/)၊ Sites menu item ကို နှိပ်ပြီး သင်လုပ်ဆောင်နေသော site ရှိ Dashboard link ကို နှိပ်ပါ။

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

မျက်နှာပြင်၏ ဘယ်ဘက်ခြမ်းတွင် menu item အသစ်များ ပေါ်လာပါမည်။ ထို menu ကို အသုံးပြု၍ **Settings** စာမျက်နှာသို့ သွားပါ။

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

ထို့နောက် **Settings** တွင် WP-Config tab ကို ရှာပြီး ထို tab ရှိ "Additional wp-config.php content" field ကို ရှာပါ။

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite ကို ထည့်သွင်းရာတွင် ထို field ထဲသို့ sunrise constant ကို ထည့်ရန် လိုအပ်ပါသည်။ စာကြောင်းအသစ်တစ်ကြောင်း ထည့်ပြီး အောက်ပါစာကြောင်းကို paste လုပ်ပါ။ ပြီးလျှင် **Save All** ခလုတ်ကို နှိပ်ပါ။

define('SUNRISE', true);

ဒါပဲပါ၊ အားလုံးပြီးပါပြီ။ Ultimate Multisite install wizard သို့ ပြန်သွားပြီး လုပ်ငန်းစဉ်ကို ဆက်လက်လုပ်ဆောင်ရန် စာမျက်နှာကို refresh လုပ်ပါ။
