---
title: ဆိုက်ပုံစံများတွင် အလိုအလျောက်ရှာဖွေပြီး အစားထိုးခြင်း
sidebar_position: 8
_i18n_hash: ae72baba9155f43f2ca762880ece1e5c
---
# ဆိုက် Template များတွင် အလိုအလျောက် ရှာဖွေ အစားထိုးခြင်း (v2)

_**ဤ tutorial သည် WP UItimo version 2.x လိုအပ်ပါသည်။**_

Ultimate Multisite ၏ အစွမ်းထက်ဆုံး feature များထဲမှ တစ်ခုမှာ မှတ်ပုံတင်ခြင်း form တွင် စိတ်ကြိုက် text၊ color နှင့် select field များ ထည့်သွင်းနိုင်ခြင်း ဖြစ်ပါသည်။ ထို data များကို ရရှိပြီးသည်နှင့် ရွေးချယ်ထားသော site template ၏ အချို့နေရာများတွင် content များကို ကြိုတင်ဖြည့်သွင်းရန် အသုံးပြုနိုင်ပါသည်။ ထို့နောက် site အသစ်ကို publish လုပ်သောအခါ Ultimate Multisite သည် placeholder များကို မှတ်ပုံတင်စဉ် ထည့်သွင်းခဲ့သော အချက်အလက်အမှန်များဖြင့် အလိုအလျောက် အစားထိုးပေးမည် ဖြစ်ပါသည်။

ဥပမာအားဖြင့် သင့် template site များကို placeholder များဖြင့် ပြုလုပ်ထားနိုင်ပါသည်။ Placeholder များကို double curly braces - {{placeholder_name}} ဖြင့် ဝန်းရံ၍ ထည့်သွင်းသင့်ပါသည်။

ထို့နောက် ထို data ကို ဖမ်းယူရန် ကိုက်ညီသော registration field တစ်ခုကို ရိုးရိုးရှင်းရှင်း ထည့်သွင်းနိုင်ပါသည်။

သင့် customer သည် မှတ်ပုံတင်စဉ် ထို field ကို ဖြည့်သွင်းနိုင်မည် ဖြစ်ပါသည်။

Ultimate Multisite သည် placeholder များကို customer ပေးထားသော data ဖြင့် အလိုအလျောက် အစားထိုးပေးမည် ဖြစ်ပါသည်။

## **"placeholder များပြည့်နေသော template" ပြဿနာကို ဖြေရှင်းခြင်း**

အထက်ပါအရာအားလုံးသည် ကောင်းမွန်သော်လည်း အဆင်မပြေသော ပြဿနာတစ်ခုနှင့် ကြုံတွေ့ရပါသည်: ယခုအခါ သင့် site template များ - customer များ ဝင်ကြည့်နိုင်သော - တွင် အဓိပ္ပာယ်များများ မပေါ်သော placeholder များ ပြည့်နေပါသည်။

ဤပြဿနာကို ဖြေရှင်းရန် placeholder များအတွက် ယာယီတန်ဖိုးများ သတ်မှတ်နိုင်သော option ကို ကျွန်ုပ်တို့ ပေးထားပါသည်။ သင့် customer များ template site များကို ကြည့်ရှုနေစဉ် ထိုတန်ဖိုးများကို အသုံးပြု၍ ရှာဖွေ အစားထိုးပေးပါသည်။

**Ultimate Multisite > Settings > Sites** သို့ သွား၍ sidebar ရှိ Edit Placeholders link ကို နှိပ်ခြင်းဖြင့် template placeholder editor ကို အသုံးပြုနိုင်ပါသည်။

![Sites settings sidebar ရှိ Edit Placeholders link](/img/config/settings-sites.png)

၎င်းသည် placeholder များနှင့် သက်ဆိုင်ရာ content များကို ထည့်သွင်းနိုင်သော placeholder content editor သို့ ခေါ်ဆောင်သွားမည် ဖြစ်ပါသည်။

![Placeholder အမည်များနှင့် တန်ဖိုးများပါသော Placeholders content editor](/img/config/settings-sites.png)
