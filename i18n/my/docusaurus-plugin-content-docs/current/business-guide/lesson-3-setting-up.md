---
title: သင်ခန်းစာ ၃- သင့်ကွန်ရက်ကို တည်ဆောက်ခြင်း
sidebar_position: 4
_i18n_hash: 4bffe2f3ba68d1a58bfc32d6b0a3c5c7
---
# သင်ခန်းစာ ၃- သင့် Network ကို စတင်တည်ဆောက်ခြင်း

တည်ဆောက်ဖို့ အချိန်ကျပါပြီ။ ဒီသင်ခန်းစာမှာ Ultimate Multisite ကို ထည့်သွင်းပြီး FitSite network ရဲ့ အခြေခံအုတ်မြစ်ကို စနစ်တကျ စီစဉ်ဖွဲ့စည်းသွားမှာ ဖြစ်ပါတယ်။ ဒီနေရာမှာ လုပ်တဲ့ ဆုံးဖြတ်ချက်တိုင်းဟာ fitness နယ်ပယ်ကို အဓိကထား စဉ်းစားထားတာ ဖြစ်ပါတယ်။

## ဘယ်နေရာမှာ ရပ်ခဲ့လဲ {#where-we-left-off}

ကျွန်တော်တို့ဟာ fitness studio တွေကို အထူးနယ်ပယ် (niche) အဖြစ် ရွေးချယ်ပြီး အခွင့်အလမ်းကို အတည်ပြုခဲ့ပြီးပါပြီ။ အခု ဒီအိုင်ဒီယာကို အလုပ်လုပ်နိုင်တဲ့ platform တစ်ခုအဖြစ် ပြောင်းလဲသွားမှာ ဖြစ်ပါတယ်။

## Hosting ကို ရွေးချယ်ခြင်း {#choosing-your-hosting}

သင့်ရဲ့ hosting ရွေးချယ်မှုဟာ website တစ်ခုတည်းအတွက်ထက် အထူးနယ်ပယ် platform တစ်ခုအတွက် ပိုအရေးကြီးပါတယ်။ သင်ဟာ site တစ်ခုကို host လုပ်တာ မဟုတ်ပါဘူး— site အများအပြား (dozens or hundreds) အထိ ကြီးထွားလာမယ့် network တစ်ခုကို host လုပ်နေတာ ဖြစ်ပါတယ်။

### ဘာတွေ ရှာဖွေသင့်သလဲ {#what-to-look-for}

- **WordPress Multisite support**: Hosting ပေးတဲ့သူတိုင်းက multisite ကို ကောင်းကောင်း ကိုင်တွယ်နိုင်တာ မဟုတ်ပါဘူး။
- **Wildcard SSL**: Subdomain အခြေခံ network တွေအတွက် မရှိမဖြစ်လိုအပ်ပါတယ်။
- **Scalable resources**: ပြောင်းရွှေ့စရာမလိုဘဲ ကြီးထွားလာဖို့ နေရာလွတ်တွေ လိုအပ်ပါတယ်။
- **Ultimate Multisite integration**: အလိုအလျောက် domain mapping နဲ့ SSL တို့ဟာ လုပ်ငန်းလည်ပတ်မှု အားထုတ်မှုကို သိသိသာသာ သက်သာစေပါတယ်။

### အကြံပြုထားတဲ့ နည်းလမ်း {#recommended-approach}

[Compatible Providers](/user-guide/host-integrations/closte) စာရင်းကနေ hosting ပေးတဲ့သူကို ရွေးချယ်ပါ။ ဒီဝန်ဆောင်မှုတွေဟာ Ultimate Multisite နဲ့ စမ်းသပ်ပြီးသားဖြစ်ပြီး domain mapping နဲ့ SSL အလိုအလျောက် လုပ်ဆောင်မှုတွေအတွက် လိုအပ်တဲ့ integration တွေကို ပေးစွမ်းနိုင်ပါတယ်။

FitSite အတွက်၊ ကျွန်တော်တို့ဟာ subdomain configuration ကို အသုံးပြုမှာ ဖြစ်ပါတယ်။ ဒါဆိုရင် customer site တွေဟာ သူတို့ကိုယ်ပိုင် domain ကို ရွေးချယ်မထားခင်မှာ အစပိုင်းမှာ `studioname.fitsite.com` လို့ ပေါ်လာမှာ ဖြစ်ပါတယ်။

## WordPress Multisite ကို ထည့်သွင်းခြင်း {#installing-wordpress-multisite}

သင့်မှာ WordPress Multisite ထည့်သွင်းမှု မရှိသေးဘူးဆိုရင်-

၁။ သင့် hosting provider ပေါ်မှာ WordPress ကို ထည့်သွင်းပါ။
၂။ [How to Install WordPress Multisite](/user-guide/getting-started/how-to-install-wordpress-multisite) လမ်းညွှန်ကို လိုက်နာပါ။
၃။ အသုံးပြုခိုင်းတဲ့အခါ **subdomain** configuration ကို ရွေးချယ်ပါ။

:::tip Subdomains ဘာကြောင့်လဲ။
Subdomains တွေက customer site တစ်ခုချင်းစီကို path (`fitsite.com/studio`) ပုံစံထက် ကိုယ်ပိုင်လိပ်စာ (distinct address) (`studio.fitsite.com`) ပေးပါတယ်။ ဒါဟာ သင့်ရဲ့ customer တွေအတွက် ပိုပြီး ပရော်ဖက်ရှင်နယ်ကျပြီး permalink conflict တွေကိုလည်း ရှောင်ရှားပေးနိုင်ပါတယ်။ အသေးစိတ် နှိုင်းယှဉ်ချက်ကို [Ultimate Multisite 101](/user-guide/getting-started/ultimate-multisite-101) မှာ ကြည့်နိုင်ပါတယ်။
:::

## Ultimate Multisite ကို ထည့်သွင်းခြင်း {#installing-ultimate-multisite}

အောက်ပါ [Installing Ultimate Multisite](/user-guide/getting-started/installing-ultimate-multisite) လမ်းညွှန်ကို လိုက်နာပြီး-

၁။ plugin ကို network တစ်ခုလုံးမှာ upload လုပ်ပြီး activate လုပ်ပါ။
၂။ [Setup Wizard](/user-guide/getting-started/multisite-setup-wizard) ကို run ပါ။

Setup wizard လုပ်နေစဉ်မှာ FitSite နယ်ပယ်ကို အမြဲသတိရနေပါ-

- **Currency**: သင့် fitness studio customer တွေ အသုံးပြုတဲ့ ငွေကြေးကို သတ်မှတ်ပါ။
- **Company name**: "FitSite" (သို့မဟုတ် သင်ရွေးချယ်ထားတဲ့ brand name)။
- **Company logo**: သင့် brand logo ကို upload လုပ်ပါ— ဒါဟာ invoice တွေနဲ့ email တွေမှာ ပေါ်လာမှာ ဖြစ်ပါတယ်။

## Fitness Niche အတွက် စီစဉ်ဖွဲ့စည်းခြင်း {#configuring-for-the-fitness-niche}

Ultimate Multisite ကို ထည့်သွင်းပြီးပြီဆိုရင် ဒီ niche နဲ့ သက်ဆိုင်တဲ့ configuration ရွေးချယ်မှုတွေကို လုပ်ဆောင်ပေးရပါမယ်။

### General Settings {#general-settings}

**Ultimate Multisite > Settings** ကို သွားပြီး အောက်ပါအတိုင်း စီစဉ်ဖွဲ့စည်းပါ-

- **Site name**: FitSite
- **Default role**: Administrator -- fitness studio ပိုင်ရှင်တွေဟာ သူတို့ရဲ့ site content တွေကို အပြည့်အဝ ထိန်းချုပ်နိုင်ဖို့ လိုအပ်ပါတယ်။
- **Registration**: studio ပိုင်ရှင်တွေ ကိုယ်တိုင် စာရင်းသွင်းနိုင်ဖို့ user registration ကို ဖွင့်ထားပါ။

### Email Configuration {#email-configuration}

သင့်ရဲ့ system email တွေဟာ သင့် niche ရဲ့ ဘာသာစကားကို ပြောဆိုနေရပါမယ်။ **Ultimate Multisite > Settings > Emails** ကို သွားပြီး အောက်ပါအတိုင်း စိတ်ကြိုက်ပြင်ဆင်ပါ-

- ယေဘူယျ "your new site" ဘာသာစကားကို fitness နဲ့ သက်ဆိုင်တဲ့ မက်ဆေ့ချ်တွေနဲ့ အစားထိုးပါ။
- ဥပမာ ကြိုဆိုတဲ့ subject: "သင့် fitness studio website အဆင်သင့်ဖြစ်ပါပြီ"
- ဥပမာ ကြိုဆိုတဲ့ body: သူတို့ရဲ့ studio၊ class တွေနဲ့ သူတို့ရဲ့ fitness site ကို ဘယ်လိုစတင်ရမလဲဆိုတာကို ရည်ညွှန်းပါ။

ဒီအရာတွေကို Lesson 8 (Customer Onboarding) မှာ ပိုပြီး ပြင်ဆင်သွားမှာ ဖြစ်ပေမယ့်၊ အခုချိန်မှာ tone ကို သတ်မှတ်ထားခြင်းက စမ်းသပ်စာရင်းသွင်းသူတွေတောင် niche နဲ့ သက်ဆိုင်တယ်လို့ ခံစားရစေမှာ ဖြစ်ပါတယ်။

### Domain Configuration {#domain-configuration}

compatible hosting provider ကို အသုံးပြုနေတယ်ဆိုရင် domain mapping ကို အခုပဲ စီစဉ်ဖွဲ့စည်းလိုက်ပါ-

၁။ **Ultimate Multisite > Settings > Domain Mapping** ကို သွားပါ။
၂။ သင့်ရဲ့ host အတွက် integration guide ကို လိုက်နာပါ။
၃။ subsite အသစ်တွေဟာ SSL ကို အလိုအလျောက် ရရှိမှုရှိမရှိ စမ်းသပ်ပါ။

ဒါဟာ နောက်သင်ခန်းစာမှာ template တွေနဲ့ စမ်းသပ် site တွေ ဖန်တီးတဲ့အခါ အရာအားလုံးဟာ အစအဆုံး အလုပ်လုပ်နေစေဖို့ အာမခံပေးပါတယ်။

## FitSite Network အခုချိန်အထိ {#the-fitsite-network-so-far}

ဒီသင်ခန်းစာအဆုံးမှာ သင့်မှာရှိတာက ဒါတွေပါ-

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (installed and configured)
├── Hosting with wildcard SSL
├── Domain mapping configured
├── Niche-specific email templates (initial)
└── Ready for site templates (next lesson)
```

## ဒီသင်ခန်းစာမှာ ဘာတွေ တည်ဆောက်ခဲ့လဲ {#what-we-built-this-lesson}

- subdomain mode မှာ အလုပ်လုပ်နိုင်တဲ့ WordPress Multisite ထည့်သွင်းမှု
- FitSite branding နဲ့ စီစဉ်ဖွဲ့စည်းထားတဲ့ Ultimate Multisite
- ကြီးထွားလာမယ့် network အတွက် set up လုပ်ထားတဲ့ Hosting နဲ့ SSL
- သင့်ရဲ့ hosting provider အတွက် စီစဉ်ဖွဲ့စည်းထားတဲ့ Domain mapping
- ပထမနေ့ကတည်းက စတင်တည်ဆောက်ထားတဲ့ Niche-specific email tone

---

**နောက်တစ်ခု:** [Lesson 4: Building Niche Templates](lesson-4-templates) -- fitness studio ပိုင်ရှင်တွေ တကယ်အသုံးပြုချင်တဲ့ site template တွေကို ကျွန်တော်တို့ ဖန်တီးသွားမှာ ဖြစ်ပါတယ်။
