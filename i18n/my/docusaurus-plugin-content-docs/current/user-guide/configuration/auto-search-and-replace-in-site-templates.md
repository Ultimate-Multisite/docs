---
title: ဝဘ်ဆိုက် နမူနာပုံစံများတွင် အလိုအလျောက် ရှာဖွေပြီး အစားထိုးခြင်း
sidebar_position: 8
_i18n_hash: 0842f53505d24579010d91568e06ef68
---
# Site Templates တွင် အလိုအလျောက် ရှာဖွေပြီး အစားထိုးခြင်း (v2) {#auto-search-and-replace-in-site-templates-v2}

_**ဤသင်ခန်းစာသည် WP UItimo version 2.x လိုအပ်သည်။**_

Ultimate Multisite ၏ အင်အားအကောင်းဆုံး လုပ်ဆောင်ချက်များထဲမှ တစ်ခုမှာ registration form တွင် စာသား၊ အရောင်နှင့် ရွေးချယ်မှု field များကို စိတ်ကြိုက် ထည့်နိုင်ခြင်းဖြစ်သည်။ ထိုအချက်အလက်များကို သိမ်းယူပြီးသည်နှင့် ရွေးထားသော site template ၏ အချို့နေရာများတွင် content ကို ကြိုတင်ဖြည့်သွင်းရန် အသုံးပြုနိုင်သည်။ ထို့နောက် site အသစ်ကို ထုတ်ဝေသောအခါ Ultimate Multisite သည် placeholders များကို registration အတွင်း ထည့်သွင်းခဲ့သော တကယ့်အချက်အလက်များဖြင့် အစားထိုးပေးမည်။

ဥပမာအနေဖြင့် သင့် template sites များကို placeholders များဖြင့် ပြုလုပ်နိုင်သည်။ Placeholders များကို double curly braces ဖြင့် ဝန်းရံထည့်သွင်းသင့်သည် - {{placeholder_name}}။

ထို့နောက် ထိုအချက်အလက်ကို သိမ်းယူရန် ကိုက်ညီသော registration field တစ်ခုကို ရိုးရိုးသာ ထည့်နိုင်သည်။

ထို့နောက် သင့် customer သည် registration အတွင်း ထို field ကို ဖြည့်နိုင်မည်။

Ultimate Multisite သည် customer ပေးထားသော အချက်အလက်များဖြင့် placeholders များကို အလိုအလျောက် အစားထိုးပေးမည်။

## **"placeholder များ ပြည့်နေသော template" ပြဿနာကို ဖြေရှင်းခြင်း** {#solving-the-template-full-of-placeholders-problem}

အရာအားလုံး ကောင်းမွန်သော်လည်း ကျွန်ုပ်တို့သည် မကောင်းသည့် ပြဿနာတစ်ခုနှင့် ကြုံရသည်။ ယခု ကျွန်ုပ်တို့၏ site templates များသည် customer များ ဝင်ရောက်ကြည့်ရှုနိုင်ပြီး အဓိပ္ပာယ်များများ မပြောနိုင်သော placeholder များဖြင့် ပြည့်နေသည်။

ထိုပြဿနာကို ဖြေရှင်းရန် placeholder များအတွက် အတုတန်ဖိုးများ သတ်မှတ်နိုင်သော option ကို ပေးထားပြီး သင့် customer များ ဝင်ရောက်ကြည့်ရှုနေစဉ် template sites များပေါ်တွင် ထိုတန်ဖိုးများကို အသုံးပြုကာ ၎င်းတို့၏ content များကို ရှာဖွေပြီး အစားထိုးပေးသည်။

**Ultimate Multisite > Settings > Sites** သို့ သွားပြီး Site Template Options ဧရိယာအထိ ဆင်းကာ **Edit Placeholders** link ကို နှိပ်ခြင်းဖြင့် template placeholders editor ကို ဝင်ရောက်အသုံးပြုနိုင်သည်။

![Sites settings စာမျက်နှာရှိ Site Template Options ဧရိယာ](/img/config/settings-sites-templates-section.png)

၎င်းက သင့်ကို placeholders ၏ content editor သို့ ခေါ်ဆောင်သွားမည်ဖြစ်ပြီး ထိုနေရာတွင် placeholders နှင့် ၎င်းတို့နှင့် သက်ဆိုင်သော content များကို ထည့်နိုင်သည်။

![Template placeholders editor ဝင်ရောက်ရာနေရာ](/img/config/settings-sites-templates-section.png)
