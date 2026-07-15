---
title: သင်ခန်းစာ ၈- ဖောက်သည်အသစ် စတင်အသုံးပြုမှု
sidebar_position: 9
_i18n_hash: 5b71133bebf067164c77d33db7c81806
---
# သင်ခန်းစာ ၈- ဖောက်သည်များ စတင်အသုံးပြုမှု (Customer Onboarding)

ဖောက်သည်တစ်ဦးကို စာရင်းသွင်းခိုင်းရုံနဲ့ အလုပ်ရဲ့ တစ်ဝက်ပဲ လုပ်ပြီးပါပြီ။ သူတို့ log in လုပ်ပေမယ့် ဘာလုပ်ရမှန်းမသိဘဲ စိတ်ရှုပ်သွားပြီး နောက်ထပ်ပြန်မလာတော့ဘူးဆိုရင်၊ အဲဒီဖောက်သည်ကို ဆုံးရှုံးသွားတာပါပဲ။ ဒီသင်ခန်းစာမှာကတော့ စာရင်းသွင်းတဲ့ ဖောက်သည်အသစ်တစ်ဦးကို တက်ကြွစွာ အသုံးပြုသူအဖြစ် ပြောင်းလဲပေးနိုင်မယ့် အတွေ့အကြုံကို ဒီဇိုင်းထုတ်သွားမှာ ဖြစ်ပါတယ်။

## ဘယ်နေရာမှာ ရပ်ခဲ့လဲ {#where-we-left-off}

FitSite ကို အသုံးပြုသူအသစ်တွေအတွက် အမှတ်တံဆိပ်အပြည့်နဲ့ အလုပ်လုပ်နိုင်တဲ့ checkout flow အထိ အဆင့်မြှင့်ထားပြီးပါပြီ။ အခုကတော့ fitness studio ပိုင်ရှင်တစ်ဦးက စာရင်းသွင်းပြီးတဲ့အခါ သူတို့ရဲ့ site အသစ်မှာ ပထမဆုံးအကြိမ် ဝင်ရောက်ကြည့်ရှုတဲ့အခါ ဘာတွေဖြစ်သင့်လဲဆိုတဲ့အပေါ် အာရုံစိုက်သွားမှာ ဖြစ်ပါတယ်။

## Onboarding ဘာကြောင့် အရေးပါသလဲ {#why-onboarding-matters}

စာရင်းသွင်းပြီးနောက် ပထမဆုံး မိနစ် ၃၀ အတွင်းမှာ ဖောက်သည်က ဆက်နေမှာလား၊ ဒါမှမဟုတ် စိတ်ပျက်ပြီး ထွက်ခွာသွားမှာလားဆိုတာ ဆုံးဖြတ်ပါတယ်။ fitness studio ပိုင်ရှင်တစ်ဦးက အောက်ပါအခြေအနေတွေထဲက ဘယ်လိုဖြစ်လဲဆိုတာ ကြည့်ပါ။

- log in လုပ်ပြီး fitness website လိုမျိုး ပုံစံမျိုးကို ချက်ချင်းမြင်ရခြင်း → ဆက်လက်အသုံးပြုမည်
- ဘာဆက်လုပ်ရမလဲဆိုတာကို ရှင်းရှင်းလင်းလင်း သိရှိခြင်း → ဆက်လက်အသုံးပြုမည်
- ယေဘူယျ WordPress dashboard ထဲမှာ ပျောက်ဆုံးနေသလို ခံစားရခြင်း → ထွက်ခွာသွားမည်

သင့်ရဲ့ niche templates (သင်ခန်းစာ ၄) က ပထမအချက်ကို ကိုင်တွယ်ပေးပါတယ်။ ဒီသင်ခန်းစာက ဒုတိယအချက်ကို ကိုင်တွယ်ပေးမှာ ဖြစ်ပါတယ်။

## ပထမဆုံး log in အတွေ့အကြုံ {#the-first-login-experience}

### Welcome Dashboard Widget {#welcome-dashboard-widget}

အသုံးပြုသူအသစ်တွေကို ကြိုဆိုပြီး setup လုပ်ငန်းစဉ်တွေမှာ လမ်းညွှန်ပေးတဲ့ custom dashboard widget တစ်ခု ဖန်တီးပါ။ ဒါဟာ သူတို့ ပထမဆုံး log in လုပ်တဲ့အခါမှာ ထင်သာမြင်သာနဲ့ ပေါ်နေသင့်ပါတယ်။

**FitSite Quick Start:**

1. **သင့်ရဲ့ studio နာမည်နဲ့ logo ကို ထည့်ပါ** -- Customizer ဒါမှမဟုတ် Site Identity settings ကို link ပေးပါ
2. **သင့်ရဲ့ class schedule ကို update လုပ်ပါ** -- Classes page editor ကို တိုက်ရိုက် link ပေးပါ
3. **သင့်ရဲ့ trainer တွေကို ထည့်ပါ** -- Trainers page editor ကို link ပေးပါ
4. **သင့်ရဲ့ ဆက်သွယ်ရန် အချက်အလက်တွေကို သတ်မှတ်ပါ** -- Contact page editor ကို link ပေးပါ
5. **သင့်ရဲ့ site ကို ကြိုတင်ကြည့်ရှုပါ** -- frontend ကို link ပေးပါ

အဆင့်တစ်ခုချင်းစီဟာ သက်ဆိုင်ရာ page ဒါမှမဟုတ် setting ကို တိုက်ရိုက် link ပေးထားရပါမယ်။ မီနူးတွေထဲမှာ ရှာဖွေနေစရာ မလိုပါဘူး။

### Dashboard ကို ရိုးရှင်းအောင် လုပ်ပါ {#simplify-the-dashboard}

အသုံးပြုသူအသစ်တွေဟာ WordPress မီနူးအရာအားလုံးကို မြင်နေဖို့ မလိုအပ်ပါဘူး။ အောက်ပါအချက်တွေကို စဉ်းစားပါ။

- fitness site စီမံခန့်ခွဲမှုနဲ့ မသက်ဆိုင်တဲ့ မီနူးအရာတွေကို ဖျောက်ထားခြင်း (ဥပမာ- မသုံးတဲ့ Comments စသည်)
- အသုံးအများဆုံး အရာတွေကို အရင်နေရာမှာထားပြီး မီနူးကို ပြန်လည်စီစဉ်ခြင်း
- niche အတွက် အဓိပ္ပာယ်ရှိတဲ့ custom menu labels တွေ ထည့်ပေးခြင်း ("Appearance" အစား "Your Studio" စသည်)

[Plugin & Theme Manager](/addons/plugin-and-theme-manager) addon က ဖောက်သည်တွေ ဘာတွေမြင်ရမလဲဆိုတာကို ထိန်းချုပ်ရာမှာ ကူညီပေးနိုင်ပါတယ်။

## Welcome Email Sequence {#welcome-email-sequence}

ကြိုဆိုတဲ့ email တစ်စောင်တည်းက မလုံလောက်ပါဘူး။ ဖောက်သည်တွေကို သူတို့ရဲ့ ပထမဆုံးအပတ်မှာ လမ်းညွှန်ပေးမယ့် sequence တစ်ခုကို စနစ်တကျ တည်ဆောက်ထားရပါမယ်။

### Email ၁- ကြိုဆိုခြင်း (စာရင်းသွင်းပြီးပြီးချင်း) {#email-1-welcome-immediately-after-signup}

- Subject: "FitSite ကို ကြိုဆိုပါတယ် -- သင့် studio website အသက်ဝင်ပါပြီ"
- Content: log in link၊ quick start အဆင့်များ၊ help resources link
- Tone: စိတ်လှုပ်ရှားစရာ၊ အားပေးမှု၊ fitness နဲ့ သက်ဆိုင်တဲ့ အကြောင်းအရာ

### Email ၂- အမြန်အောင်မြင်မှုများ (Day ၁) {#email-2-quick-wins-day-1}

- Subject: "သင့် FitSite မှာ ပထမဆုံးလုပ်ရမယ့် အရာ ၃ ခု"
- Content: logo ထည့်ခြင်း၊ homepage hero image update လုပ်ခြင်း၊ class schedule ထည့်ခြင်း
- ဘယ်နေရာမှာ click လုပ်ရမလဲဆိုတာကို ပြတဲ့ screenshot တွေ ထည့်ပေးပါ

### Email ၃- ကိုယ်ပိုင်ဖြစ်အောင် လုပ်ပါ (Day ၃) {#email-3-make-it-yours-day-3}

- Subject: "သင့် fitness site ကို ထူးခြားအောင် ဖန်တီးပါ"
- Content: အရောင်တွေ စိတ်ကြိုက်ပြင်ခြင်း၊ trainer ဓာတ်ပုံတွေ ထည့်ခြင်း၊ studio ရဲ့ ဇာတ်လမ်းကို ရေးသားခြင်း
- platform ပေါ်က အကောင်းဆုံး fitness site ဥပမာတွေကို link ပေးပါ

### Email ၄- အသက်ဝင်စေခြင်း (Day ၇) {#email-4-go-live-day-7}

- Subject: "သင့် FitSite ကို ကမ္ဘာကြီးနဲ့ မျှဝေဖို့ အသင့်ဖြစ်ပြီလား။"
- Content: မျှဝေခါနီးမှာ စစ်ဆေးရမယ့် အချက်များ၊ custom domain ဘယ်လိုချိတ်ဆက်ရမလဲ (Growth/Pro မှာဆိုရင်)၊ social sharing အကြံပြုချက်များ

:::tip Email Automation
ဒီ email တွေကို သင့်ရဲ့ email marketing platform ကနေ trigger လုပ်ဖို့ [Webhooks](/user-guide/integrations/webhooks) ဒါမှမဟုတ် [Zapier](/user-guide/integrations/zapier) ကို အသုံးပြုပါ။ ဒါက timing ပေါ်မှာ ပိုပြီး ထိန်းချုပ်နိုင်စေပြီး engagement ကိုလည်း စောင့်ကြည့်နိုင်စေပါတယ်။
:::

## အကူအညီ အရင်းအမြစ်များ (Help Resources) {#help-resources}

fitness studio ပိုင်ရှင်တွေ တကယ်မေးလေ့ရှိတဲ့ မေးခွန်းတွေကို ဖြေပေးတဲ့ niche-specific help content တွေ ဖန်တီးပါ။

### Knowledge Base Articles {#knowledge-base-articles}

- "သင့်ရဲ့ class schedule ကို ဘယ်လို update လုပ်မလဲ"
- "trainer profile တွေ ဘယ်လိုထည့်ပြီး ဘယ်လိုပြင်ဆင်မလဲ"
- "သင့်ရဲ့ studio ရဲ့ logo နဲ့ အရောင်တွေကို ဘယ်လိုပြောင်းမလဲ"
- "သင့်ရဲ့ ကိုယ်ပိုင် domain name ကို ဘယ်လိုချိတ်ဆက်မလဲ" (Growth/Pro ဖောက်သည်များအတွက်)
- "သင့် site မှာ booking widget ဘယ်လိုထည့်မလဲ"

ဒီအရာတွေကို နည်းပညာပိုင်း မကျွမ်းကျင်တဲ့ အသုံးပြုသူတွေအတွက် ရေးပေးပါ။ screenshot တွေ အသုံးပြုပါ။ WordPress jargon တွေကို ရှောင်ပါ။

### Video Walkthroughs {#video-walkthroughs}

အောက်ပါအရာတွေကို ပြသတဲ့ အချိန်တို (၂-၃ မိနစ်) screen recording များ:

- ပထမဆုံး log in လုပ်ခြင်းနဲ့ လမ်းညွှန်မှု
- homepage ကို ပြင်ဆင်ခြင်း
- class schedule ကို update လုပ်ခြင်း
- trainer အသစ်တစ်ဦး ထည့်ခြင်း

ဒါတွေက စနစ်တကျ အဆင့်မြှင့်ထားတဲ့ ထုတ်လုပ်မှုတွေ ဖြစ်ဖို့ မလိုပါဘူး။ ရှင်းလင်းပြတ်သားပြီး အထောက်အကူဖြစ်စေကာ niche နဲ့ သက်ဆိုင်မှုရှိတာက အရေးကြီးဆုံးပါပဲ။

## Account Page {#the-account-page}

Ultimate Multisite မှာ ဖောက်သည်တွေက သူတို့ရဲ့ subscription ကို စီမံခန့်ခွဲနိုင်တဲ့ customer-facing [Account Page](/user-guide/client-management/account-page) ပါဝင်ပါတယ်။ ဒါကို အောက်ပါအတိုင်း စိတ်ကြိုက်ပြင်ဆင်ပါ။

- သူတို့ရဲ့ လက်ရှိ FitSite plan ကို ပြသခြင်း
- fitness နဲ့ သက်ဆိုင်တဲ့ အကျိုးကျေးဇူးတွေနဲ့ upgrade ရွေးချယ်စရာတွေကို ပြသခြင်း
- ငွေတောင်းခံလွှာမှတ်တမ်းနဲ့ invoice download တွေကို ပေးခြင်း
- help resources ကို link ပေးခြင်း

## Onboarding အောင်မြင်မှုကို တိုင်းတာခြင်း {#measuring-onboarding-success}

သင့်ရဲ့ onboarding က အလုပ်လုပ်နေလားဆိုတာ သိဖို့ ဒီအညွှန်းကိန်းတွေကို စောင့်ကြည့်ပါ။

- **Activation rate**: စာရင်းသွင်းသူတွေထဲက ဘယ်ရာခိုင်နှုန်းက ပထမအပတ်အတွင်း သူတို့ရဲ့ site ကို တကယ် customize လုပ်ခဲ့လဲ။
- **First-week logins**: ဖောက်သည်အသစ်တစ်ဦးဟာ သူတို့ရဲ့ ပထမအပတ်အတွင်း ဘယ်နှစ်ခါ log in လုပ်ခဲ့လဲ။
- **Support tickets from new customers**: ပမာဏများခြင်းက သင့်ရဲ့ onboarding မှာ အားနည်းချက်တွေ ရှိနေတယ်လို့ ဆိုလိုပါတယ်။
- **Trial-to-paid conversion**: သင် trial တွေ ပေးတယ်ဆိုရင် ဘယ်ရာခိုင်နှုန်းက ငွေပေးချေသူအဖြစ် ပြောင်းလဲသွားလဲ။

## FitSite Network အခုအချိန်အထိ တည်ဆောက်ထားတာများ {#the-fitsite-network-so-far}

```
FitSite Network
├── WordPress Multisite (subdomain mode)
├── Ultimate Multisite (configured + branded)
├── Platform Domain (fitsite.com + wildcard SSL)
├── Site Templates (Studio Essential, Gym Pro, Fitness Chain)
├── Products (Starter, Growth, Pro + Order Bumps)
├── Checkout Flow (niche-specific, tested)
├── Branding (login, dashboard, emails, invoices, marketing site)
├── Customer Onboarding
│   ├── Quick Start dashboard widget
│   ├── Simplified dashboard for fitness site management
│   ├── 4-email welcome sequence
│   ├── Niche-specific knowledge base
│   ├── Video walkthroughs
│   └── Customized account page
└── Ready for pricing strategy (next lesson)
```

## ဒီသင်ခန်းစာမှာ ဘာတွေ တည်ဆောက်ခဲ့လဲ {#what-we-built-this-lesson}

- Quick Start widget ပါဝင်တဲ့ **လမ်းညွှန်မှုအပြည့်နဲ့ ပထမဆုံး log in အတွေ့အကြုံ**
- fitness site စီမံခန့်ခွဲမှု လုပ်ငန်းတွေအပေါ် အာရုံစိုက်ထားတဲ့ **ရိုးရှင်းတဲ့ dashboard**
- ဖောက်သည်တွေကို သူတို့ရဲ့ ပထမဆုံးအပတ်မှာ လမ်းညွှန်ပေးတဲ့ **welcome email sequence**
- နည်းပညာပိုင်း မကျွမ်းကျင်တဲ့ fitness studio ပိုင်ရှင်တွေအတွက် ရေးထားတဲ့ **niche-specific help resources**
- အတွေ့အကြုံကို စောင့်ကြည့်ပြီး ပိုမိုကောင်းမွန်စေဖို့ **Onboarding metrics**

---

**နောက်တစ်ခု:** [သင်ခန်းစာ ၉- အမြတ်ရရှိဖို့ ဈေးနှုန်းသတ်မှတ်ခြင်း](lesson-9-pricing) -- ဝင်ငွေအများဆုံးရရှိဖို့နဲ့ ဖောက်သည်တွေ ထွက်ခွာမှု အနည်းဆုံးဖြစ်စေဖို့ ဈေးနှုန်းသတ်မှတ်မှု မဟာဗျူဟာကို ပိုမိုကောင်းမွန်အောင် ပြင်ဆင်သွားမှာ ဖြစ်ပါတယ်။
