---
title: Zapier မှတစ်ဆင့် Account တစ်ခု မှတ်ပုံတင်ပါ
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# ဖြစ်ရပ်: Zapier မှတစ်ဆင့် Account မှတ်ပုံတင်ခြင်း {#event-register-an-account-via-zapier}

[Ultimate Multisite ကို Zapier နှင့် ပေါင်းစည်းခြင်း](zapier.md) ဆောင်းပါးတွင် trigger များနှင့် ဖြစ်ရပ်များအပေါ် မူတည်၍ Ultimate Multisite အတွင်း အမျိုးမျိုးသော လုပ်ဆောင်ချက်များ ပြုလုပ်ရန် Zapier ကို မည်သို့အသုံးပြုရမည်ကို ဆွေးနွေးခဲ့သည်။ ဤဆောင်းပါးတွင် 3rd party application များကို မည်သို့ပေါင်းစည်းနိုင်သည်ကို ပြပါမည်။ Google Sheets ကို ဒေတာရင်းမြစ်အဖြစ် အသုံးပြုပြီး Account မှတ်ပုံတင်ရန် အချက်အလက်ကို Ultimate Multisite သို့ ပို့ပါမည်။

Zapier ကို မချိတ်ဆက်မီ **Ultimate Multisite > Settings > API & Webhooks** သို့ သွားပြီး API ဖွင့်ထားကြောင်း အတည်ပြုပါ။ Zapier က Ultimate Multisite Account အထောက်အထားများကို တောင်းသည့်အခါ ဤမျက်နှာပြင်မှ API Key နှင့် API Secret ကို ကူးယူပါ။

![API Key၊ API Secret နှင့် API ဖွင့်ခြင်း ရွေးချယ်စရာများပါသော API နှင့် Webhooks settings](/img/admin/settings-api-webhooks.png)

ပထမဦးစွာ သင့် Google Drive အောက်တွင် **Google Sheet** တစ်ခု ဖန်တီးရန် လိုအပ်သည်။ နောက်ပိုင်းတွင် ဒေတာကို လွယ်ကူစွာ map လုပ်နိုင်ရန် column တစ်ခုချင်းစီကို မှန်ကန်စွာ သတ်မှတ်ထားကြောင်း သေချာပါစေ။

Google sheet ဖန်တီးပြီးနောက် သင့် Zapier Account သို့ ဝင်ရောက်ပြီး zap တစ်ခု စတင်ဖန်တီးနိုင်သည်။

**"App event"** ရှာဖွေရေး field အောက်တွင် **"Google Sheets"** ကို ရွေးပါ


ထို့နောက် "**Event** " field အတွက် "**New spreadsheet row** " ကို ရွေးပြီး "**Continue** " ကို နှိပ်ပါ

နောက်တစ်ဆင့်တွင် **Google Sheet** သိမ်းထားသည့် **Google Account** ကို ရွေးခိုင်းပါမည်။ ထို့ကြောင့် မှန်ကန်သော google Account ကို သတ်မှတ်ထားကြောင်း သေချာပါစေ။


**"Set up trigger** " အောက်တွင် ဒေတာလာမည့် google spreadsheet နှင့် worksheet ကို ရွေးချယ်သတ်မှတ်ရန် လိုအပ်ပါမည်။ ၎င်းတို့ကို ဖြည့်ပြီး "**Continue** " ကို နှိပ်ပါ

နောက်တစ်ခုမှာ သင့် google sheet ကောင်းမွန်စွာ ချိတ်ဆက်ထားကြောင်း သေချာစေရန် "**test your trigger** " ဖြစ်သည်။

စမ်းသပ်မှု အောင်မြင်ပါက သင့် spreadsheet များမှ တန်ဖိုးအချို့ကို ပြသသည့် ရလဒ်ကို မြင်ရပါမည်။ ဆက်လက်လုပ်ဆောင်ရန် "**Continue** " ကို နှိပ်ပါ။

နောက်တစ်ဆင့်မှာ Ultimate Multisite တွင် Account ဖန်တီးရန် သို့မဟုတ် မှတ်ပုံတင်ရန် ဒုတိယလုပ်ဆောင်ချက်ကို စီစဉ်ခြင်းဖြစ်သည်။ ရှာဖွေရေး field တွင် "**Ultimate Multisite(2.0.2)** " ကို ရွေးပါ


"**Event** " field အောက်တွင် "**Register an Account in Ultimate Multisite** " ကို ရွေးပြီးနောက် "**Continue** " ခလုတ်ကို နှိပ်ပါ။

"**Set up an action** " အောက်တွင် customer ဒေတာ၊ membership များ၊ product များ စသည်တို့အတွက် ရရှိနိုင်သော field အမျိုးမျိုးကို မြင်ရပါမည်။ အောက်ပါ screenshot တွင် ပြထားသကဲ့သို့ သင့် google sheet အောက်ရှိ တန်ဖိုးများကို map လုပ်ပြီး ၎င်းတို့ ဖြည့်သွင်းသင့်သည့် သင့်လျော်သော field သို့ သတ်မှတ်နိုင်သည်။


တန်ဖိုးများကို map လုပ်ပြီးနောက် လုပ်ဆောင်ချက်ကို စမ်းသပ်နိုင်သည်။
