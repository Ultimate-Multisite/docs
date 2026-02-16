---
title: Zapier မှတစ်ဆင့် အကောင့်တစ်ခု မှတ်ပုံတင်ပါ
sidebar_position: 1
_i18n_hash: e769e5eddf428f2eac478f5b8cd4592d
---
# Event: Zapier ကနေ အကောင့်တစ်ခု မှတ်ပုံတင်ခြင်း

[Ultimate Multisite ကို Zapier နဲ့ ချိတ်ဆက်ခြင်း](zapier.md) ဆောင်းပါးမှာ triggers နဲ့ events တွေအပေါ် အခြေခံပြီး Ultimate Multisite ထဲမှာ လုပ်ဆောင်ချက်အမျိုးမျိုးကို Zapier သုံးပြီး ဘယ်လိုလုပ်ဆောင်ရမလဲဆိုတာ ဆွေးနွေးခဲ့ပါတယ်။ ဒီဆောင်းပါးမှာတော့ 3rd party application တွေကို ဘယ်လိုချိတ်ဆက်နိုင်မလဲဆိုတာ ပြသပေးပါမယ်။ Google Sheets ကို data အရင်းအမြစ်အဖြစ် သုံးပြီး အချက်အလက်တွေကို Ultimate Multisite ဆီ ပို့ပြီး အကောင့်မှတ်ပုံတင်ပါမယ်။

ပထမဆုံး သင့် Google Drive အောက်မှာ **Google Sheet** တစ်ခု ဖန်တီးဖို့လိုပါတယ်။ နောက်ပိုင်းမှာ data တွေကို အလွယ်တကူ mapping လုပ်နိုင်အောင် column တစ်ခုချင်းစီကို သေချာသတ်မှတ်ထားပါ။

![ဖောက်သည် data အတွက် column တွေပါဝင်တဲ့ Google Sheet](/img/admin/webhooks-list.png)Google Sheet ဖန်တီးပြီးရင် သင့် Zapier အကောင့်ထဲ login ဝင်ပြီး zap တစ်ခု စဖန်တီးနိုင်ပါပြီ။

![zap စဖန်တီးဖို့ Zapier dashboard](/img/admin/webhooks-list.png)**"App event"** ရှာဖွေမှု field အောက်မှာ **"Google Sheets"** ကို ရွေးပါ

![app event အဖြစ် Google Sheets ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

ပြီးရင် "**Event**" field အတွက် "**New spreadsheet row**" ကို ရွေးပြီး "**Continue**" ကို နှိပ်ပါ

![Zapier မှာ New spreadsheet row event ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)နောက်အဆင့်မှာ **Google Sheet** သိမ်းထားတဲ့ **Google Account** ကို ရွေးခိုင်းပါလိမ့်မယ်။ ဒါကြောင့် မှန်ကန်တဲ့ google account ကို သေချာရွေးထားပါ။

![Google Sheet အတွက် Google Account ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

**"Set up trigger"** အောက်မှာ data လာမယ့် google spreadsheet နဲ့ worksheet ကို ရွေးချယ်သတ်မှတ်ပေးရပါမယ်။ အဲဒါတွေ ဖြည့်ပြီးရင် "**Continue**" ကို နှိပ်ပါ

![spreadsheet နဲ့ worksheet ရွေးချယ်မှုပါတဲ့ trigger setup](/img/admin/webhooks-list.png)နောက်တစ်ဆင့်က သင့် google sheet မှန်ကန်စွာ ချိတ်ဆက်ထားကြောင်း သေချာစေဖို့ "**test your trigger**" ဖြစ်ပါတယ်။

![Zapier မှာ trigger စမ်းသပ်ခြင်း အဆင့်](/img/admin/webhooks-list.png)စမ်းသပ်မှု အောင်မြင်ရင် သင့် spreadsheet ထဲက တန်ဖိုးအချို့ကို ပြသတဲ့ ရလဒ်ကို မြင်ရပါလိမ့်မယ်။ ဆက်လက်ဆောင်ရွက်ဖို့ "**Continue**" ကို နှိပ်ပါ။

![spreadsheet တန်ဖိုးတွေ ပြသနေတဲ့ trigger စမ်းသပ်မှု အောင်မြင်ခြင်း](/img/admin/webhooks-list.png)နောက်အဆင့်က Ultimate Multisite မှာ အကောင့်တစ်ခု ဖန်တီးခြင်း သို့မဟုတ် မှတ်ပုံတင်ခြင်း action ဒုတိယတစ်ခုကို setup လုပ်ရပါမယ်။ ရှာဖွေမှု field မှာ "**Ultimate Multisite(2.0.2)**" ကို ရွေးပါ

![action app အဖြစ် Ultimate Multisite ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

"**Event**" field အောက်မှာ "**Register an Account in Ultimate Multisite**" ကို ရွေးပြီး "**Continue**" ခလုတ်ကို နှိပ်ပါ။

![Ultimate Multisite မှာ အကောင့်မှတ်ပုံတင်ခြင်း action event](/img/admin/webhooks-list.png)"**Set up an action**" အောက်မှာ ဖောက်သည် data၊ memberships၊ products စတာတွေအတွက် field အမျိုးမျိုးကို မြင်ရပါလိမ့်မယ်။ အောက်ပါ screenshot မှာ ပြထားသလို သင့် google sheet အောက်က တန်ဖိုးတွေကို သက်ဆိုင်ရာ field တွေမှာ ထည့်သွင်းဖို့ mapping လုပ်နိုင်ပါတယ်။

![Google Sheet တန်ဖိုးတွေကို Ultimate Multisite field တွေနဲ့ mapping လုပ်ခြင်း](/img/admin/webhooks-list.png)

တန်ဖိုးတွေ mapping လုပ်ပြီးရင် action ကို စမ်းသပ်နိုင်ပါပြီ။

![အကောင့်မှတ်ပုံတင်ခြင်း Zapier action ကို စမ်းသပ်ခြင်း](/img/admin/webhooks-list.png)
