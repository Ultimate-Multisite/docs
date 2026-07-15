---
title: 'သင်ခန်းစာ ၇: ကိုယ်ပိုင်ဖြစ်အောင် ပြုလုပ်ခြင်း'
sidebar_position: 8
_i18n_hash: 90013fc79a9cbb15283ce89b688002b1
---
# သင်ခန်းစာ ၇- ကိုယ်ပိုင်အမှတ်တံဆိပ်ဖြစ်အောင် ဖန်တီးခြင်း

ဖောက်သည်တွေက သူတို့ဟာ "ဘယ် WordPress plugin တစ်ခုခု" ကို သုံးနေတယ်လို့ ခံစားရမှာ မဟုတ်ပါဘူး။ သူတို့ဟာ FitSite ကို သုံးနေတယ်၊ သူတို့ရဲ့ လုပ်ငန်းအမျိုးအစားအတွက် အထူးတည်ဆောက်ထားတဲ့ platform တစ်ခုလို့ ခံစားရသင့်ပါတယ်။ ဒီသင်ခန်းစာမှာ branding လုပ်ခြင်း၊ white-labeling လုပ်ခြင်းနဲ့ platform ကို ထုတ်ကုန်တစ်ခုလို ခံစားရစေအောင် ဘယ်လိုလုပ်ရမလဲဆိုတာကို ဖော်ပြထားပါတယ်။

## ဘယ်နေရာမှာ ရပ်ခဲ့လဲ {#where-we-left-off}

FitSite မှာ fitness studio ပိုင်ရှင်တွေဟာ အစီအစဉ်ရွေးချယ်မှုကနေ အသက်ဝင်တဲ့ website တစ်ခုအထိ ရောက်ရှိနိုင်တဲ့ အလုပ်လုပ်နေတဲ့ checkout flow တစ်ခု ရှိပြီးသားပါ။ အခုတော့ ဒီအတွေ့အကြုံတစ်ခုလုံးကို စည်းလုံးညီညွတ်ပြီး အမှတ်တံဆိပ်ပါတဲ့ ထုတ်ကုန်တစ်ခုလို ခံစားရအောင် လုပ်ရမှာပါ။

## သင့်ရဲ့ Platform Domain {#your-platform-domain}

သင့် brand ရဲ့ အခြေခံအုတ်မြစ်ကတော့ သင့်ရဲ့ domain ပါပဲ။ FitSite အတွက်ဆိုရင်-

- **Main domain**: `fitsite.com` (သင့်ရဲ့ marketing site နဲ့ network ရဲ့ အဓိက အရင်းအမြစ်)
- **Customer sites**: `studioname.fitsite.com` (subdomains များ)
- **Custom domains**: Growth နဲ့ Pro အစီအစဉ်တွေမှာရှိတဲ့ ဖောက်သည်တွေက သူတို့ရဲ့ ကိုယ်ပိုင် domain ကို ချိတ်ဆက်နိုင်ပါတယ်။

### သင့် Domain ကို စနစ်ထည့်ခြင်း {#setting-up-your-domain}

၁။ သင့်ရဲ့ platform domain ကို မှတ်ပုံတင်ပါ။
၂။ ဒါကို သင့်ရဲ့ hosting provider ဆီကို ညွှန်ပြပါ။
၃။ ဖောက်သည် subdomains တွေအတွက် wildcard DNS (`*.fitsite.com`) ကို စနစ်ထည့်ပါ။
၄။ wildcard SSL ကို အသက်ဝင်အောင် လုပ်ထားကြောင်း သေချာပါစေ။

အသေးစိတ် ညွှန်ကြားချက်များအတွက် [How to Configure Domain Mapping](/user-guide/domain-mapping/how-to-configure-domain-mapping) ကို ကြည့်ပါ။

## Admin အတွေ့အကြုံကို White-Labeling လုပ်ခြင်း {#white-labeling-the-admin-experience}

fitness studio ပိုင်ရှင်တစ်ဦးက သူတို့ရဲ့ site dashboard ကို ဝင်ကြည့်တဲ့အခါမှာ WordPress ဒါမှမဟုတ် Ultimate Multisite ရဲ့ branding တွေကို မမြင်ရဘဲ သင့် brand ကိုသာ မြင်ရသင့်ပါတယ်။

### Custom Login Page {#custom-login-page}

WordPress login page ကို အောက်ပါအရာတွေ ပြသနိုင်အောင် စိတ်ကြိုက်ပြင်ဆင်ပါ။

- သင့်ရဲ့ FitSite logo
- fitness နဲ့ သင့်တော်တဲ့ background ပုံရိပ်များ
- သင့် brand ရဲ့ အရောင်များ

### Dashboard Branding {#dashboard-branding}

[Admin Page Creator](/addons/admin-page-creator) addon ကို သို့မဟုတ် custom CSS ကို အသုံးပြုပြီး-

- WordPress logo ကို သင့်ရဲ့ FitSite logo နဲ့ အစားထိုးပါ။
- သင့် brand နဲ့ ကိုက်ညီအောင် admin ရဲ့ အရောင်အသွေးကို စိတ်ကြိုက်ပြင်ဆင်ပါ။
- fitness နဲ့ သက်ဆိုင်တဲ့ quick links တွေနဲ့ အကူအညီရယူနိုင်တဲ့ အရင်းအမြစ်တွေ ပါတဲ့ custom dashboard widget တစ်ခု ထည့်ပါ။

### Custom Admin Pages များ {#custom-admin-pages}

fitness studio ပိုင်ရှင်တွေအတွက် အရေးအကြီးဆုံး လုပ်ဆောင်ချက်တွေကို ပေါ်လွင်စေမယ့် custom admin pages တွေ ဖန်တီးဖို့ စဉ်းစားပါ။

- "Edit Your Class Schedule" (သင်တန်းအချိန်ဇယားကို ပြင်ဆင်ခြင်း)
- "Update Trainer Profiles" (လေ့ကျင့်ရေးဆရာ ပရိုဖိုင်များကို အပ်ဒိတ်လုပ်ခြင်း)
- "View Your Site" (သင့်ရဲ့ site ကို ကြည့်ရှုခြင်း)

ဒီလိုလုပ်ခြင်းက စံနှုန်းသတ်မှတ်ထားတဲ့ WordPress menu ထဲမှာ မြှုပ်ထားတာမျိုး မဟုတ်ဘဲ၊ လုပ်ငန်းနဲ့ သက်ဆိုင်တဲ့ အရေးအကြီးဆုံး လုပ်ဆောင်ချက်တွေကို အလယ်ဗဟိုမှာ ထားပေးခြင်းအားဖြင့် သင်ယူရလွယ်ကူစေပါတယ်။

## သင့်ရဲ့ ဆက်သွယ်မှုများမှာ Branding လုပ်ခြင်း {#branding-your-communications}

အီးမေးလ်တိုင်း၊ ငွေတောင်းခံလွှာတိုင်းနဲ့ အကြောင်းကြားချက်တိုင်းဟာ သင့် brand ကို အားကောင်းစေရပါမယ်။

### System Emails များ {#system-emails}

**Ultimate Multisite > Settings > Emails** ကို သွားပြီး system အီးမေးလ်အားလုံးကို စိတ်ကြိုက်ပြင်ဆင်ပါ။

- **From name**: FitSite
- **From email**: hello@fitsite.com
- **Email templates**: သင့် brand ရဲ့ အရောင်တွေနဲ့ logo ကို အသုံးပြုပါ။
- **Language**: fitness နဲ့ သက်ဆိုင်တဲ့ ဘာသာစကားကို အသုံးပြုပါ။

စိတ်ကြိုက်ပြင်ဆင်ရမယ့် အဓိက အီးမေးလ်များ-

| Email | Generic Version (ယေဘူယျပုံစံ) | FitSite Version (FitSite ပုံစံ) |
|-------|----------------|-----------------|
| Welcome | "Your new site is ready" | "Your fitness studio website is live" |
| Payment receipt | "Payment received" | "FitSite subscription payment confirmed" |
| Trial ending | "Your trial is ending soon" | "Your FitSite trial ends in 3 days -- keep your studio website live" |

### Invoices (ငွေတောင်းခံလွှာများ) {#invoices}

အောက်ပါအရာများဖြင့် invoice template များကို စိတ်ကြိုက်ပြင်ဆင်ပါ။

- သင့်ရဲ့ FitSite logo နဲ့ brand အရောင်များ
- သင့်ရဲ့ လုပ်ငန်းအသေးစိတ်အချက်အလက်များ
- fitness နဲ့ သက်ဆိုင်တဲ့ ထုတ်ကုန်အမည်များ (ယေဘူယျ plan ID များ မဟုတ်ပါ)

## ဖောက်သည်ဘက်က Site (The Customer-Facing Site) {#the-customer-facing-site}

သင့်ရဲ့ main domain (`fitsite.com`) မှာ platform ကို ရောင်းချတဲ့ marketing site တစ်ခု လိုအပ်ပါတယ်။ ဒါက Ultimate Multisite network admin နဲ့ သီးခြားပါပဲ။ ဒါဟာ သင့်လုပ်ငန်းရဲ့ အများပြည်သူမြင်ရတဲ့ မျက်နှာစာပါ။

အဓိက စာမျက်နှာများ-

- **Homepage**: fitness လုပ်ငန်းများအတွက် ရှင်းလင်းတဲ့ တန်ဖိုးအဆိုပြုချက်
- **Features**: FitSite က ဘာတွေလုပ်ပေးလဲ၊ fitness ဝေါဟာရတွေနဲ့
- **Pricing**: niche နဲ့ သက်ဆိုင်တဲ့ feature နှိုင်းယှဉ်ချက်တွေနဲ့ သင့်ရဲ့ အစီအစဉ် ၃ ခု
- **Examples**: platform ပေါ်မှာ တည်ဆောက်ထားတဲ့ site တွေကို ပြသခြင်း
- **Sign Up**: သင့်ရဲ့ checkout form ကို ချိတ်ဆက်ထားတဲ့ link

:::tip Your Marketing Site Can Be a Network Site
သင့်ရဲ့ marketing site ကို သင့်ကိုယ်ပိုင် network ထဲက site အနေနဲ့ ဖန်တီးပါ။ ဒါဆိုရင် dashboard တစ်ခုတည်းကနေ စီမံခန့်ခွဲနိုင်ပြီး သင့်ကိုယ်ပိုင် platform ရဲ့ စွမ်းဆောင်ရည်ကိုလည်း ပြသနိုင်ပါတယ်။
:::

## ဖောက်သည်များအတွက် Custom Domain {#custom-domain-for-customers}

Custom domain တွေ ပါဝင်တဲ့ အစီအစဉ်တွေမှာရှိတဲ့ ဖောက်သည်တွေအတွက် လုပ်ငန်းစဉ်ကို ရှင်းရှင်းလင်းလင်း စာရွက်စာတမ်းတင်ပြပါ။

၁။ ဖောက်သည်က သူတို့ရဲ့ domain ကို registrar ဆီမှာ မှတ်ပုံတင် ဒါမှမဟုတ် လွှဲပြောင်းရယူပါတယ်။
၂။ ဖောက်သည်က DNS ကို သင့် platform ကို ညွှန်ပြဖို့ အပ်ဒိတ်လုပ်ပါတယ်။ (တိကျတဲ့ records တွေကို ပေးရပါမယ်)
၃။ Ultimate Multisite က domain mapping နဲ့ SSL ကို ကိုင်တွယ်ပေးပါတယ်။

ဒီလုပ်ငန်းစဉ်အတွက်၊ နည်းပညာပိုင်းဆိုင်ရာ အသိပညာမရှိတဲ့ fitness studio ပိုင်ရှင်တွေအတွက် ရေးသားထားတဲ့ help article ဒါမှမဟုတ် knowledge base entry တစ်ခု ဖန်တီးပါ။

## FitSite Network အခုအချိန်အထိ {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding
│   ├── Custom login page
│   ├── Branded admin dashboard
│   ├── Niche-specific system emails
│   ├── Branded invoices
│   └── Marketing site on fitsite.com
└── Ready for onboarding flow (next lesson)
```

## ဒီသင်ခန်းစာမှာ ဘာတွေတည်ဆောက်ခဲ့လဲ {#what-we-built-this-lesson}

- branded အတွေ့အကြုံအတွက် **Platform domain နဲ့ DNS** ကို စနစ်ထည့်ခဲ့ခြင်း
- FitSite branding ပါတဲ့ **White-labeled admin**
- **စိတ်ကြိုက်ပြင်ဆင်ထားတဲ့ ဆက်သွယ်မှုများ** -- အီးမေးလ်များ၊ invoice များ၊ အကြောင်းကြားချက်များအားလုံး brand နဲ့ ကိုက်ညီခြင်း
- fitness studio ပိုင်ရှင်တွေကို FitSite ကို ရောင်းချတဲ့ **marketing site** တစ်ခု
- ကိုယ်ပိုင် domain လိုချင်တဲ့ ဖောက်သည်တွေအတွက် **Custom domain စာရွက်စာတမ်းများ**

---

**နောက်တစ်ခု:** [Lesson 8: Customer Onboarding](lesson-8-onboarding) -- စာရင်းသွင်းသူအသစ်တစ်ဦးကို တက်ကြွပြီး ပျော်ရွှင်တဲ့ ဖောက်သည်တစ်ဦးအဖြစ် ပြောင်းလဲပေးမယ့် အတွေ့အကြုံကို ဒီမှာ ဒီဇိုင်းထုတ်ပါမယ်။
