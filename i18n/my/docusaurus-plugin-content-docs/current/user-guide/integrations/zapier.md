---
title: Zapier ပေါင်းစပ်မှု
sidebar_position: 12
_i18n_hash: 4e43dfd722f07de3048b552c8f7b962f
---
# Ultimate Multisite ကို Zapier နဲ့ ချိတ်ဆက်ခြင်း

ဆောင်းပါးတစ်ခုမှာ [Webhooks](webhooks.md) အကြောင်းနဲ့ third-party application တွေနဲ့ ချိတ်ဆက်ဖို့ ဘယ်လိုအသုံးပြုနိုင်တယ်ဆိုတာ ဆွေးနွေးခဲ့ပါတယ်။

Webhooks အသုံးပြုရတာ နည်းနည်း ရှုပ်ထွေးပါတယ်။ coding နဲ့ payload တွေကို ဖမ်းယူတဲ့အပိုင်းမှာ အဆင့်မြင့်ပညာရပ် လိုအပ်ပါတယ်။ **Zapier** ကိုအသုံးပြုခြင်းက ဒီအခက်အခဲကို ကျော်လွှားနိုင်တဲ့ နည်းလမ်းတစ်ခုပါ။

Zapier မှာ app ပေါင်း ၅၀၀၀ ကျော်နဲ့ ချိတ်ဆက်နိုင်တဲ့အတွက် application အမျိုးမျိုးကြား ဆက်သွယ်ရတာ ပိုမိုလွယ်ကူစေပါတယ်။

သင့် network မှာ event တွေ ဖြစ်ပေါ်တဲ့အခါ အလုပ်လုပ်မယ့် **Triggers** တွေ ဖန်တီးနိုင်ပါတယ် (ဥပမာ - account တစ်ခု ဖန်တီးပြီး account_create event ကို trigger လုပ်တာ)။ ဒါမှမဟုတ် ပြင်ပ event တွေကို တုံ့ပြန်ပြီး သင့် network မှာ **Actions** တွေ ဖန်တီးနိုင်ပါတယ် (ဥပမာ - သင့် Ultimate Multisite network မှာ account membership အသစ်တစ်ခု ဖန်တီးတာ)။

**Ultimate Multisite Zapier ရဲ့ triggers** နဲ့ actions တွေဟာ [REST API](https://developer.ultimatemultisite.com/api/docs/) ကို အသုံးပြုထားတဲ့အတွက် ဒီလိုလုပ်ဆောင်နိုင်တာပါ။

## စတင်နည်း

ပထမဆုံး Zapier app စာရင်းမှာ Ultimate Multisite ကို ရှာပါ။ [ဒီလင့်ခ်](https://zapier.com/apps/wp-ultimo/integrations) ကို နှိပ်လည်း ရပါတယ်။

သင့် dashboard သို့သွားပြီး ဘယ်ဘက် sidebar မှာရှိတဲ့ **+** **Create Zap** ခလုတ်ကို နှိပ်ပြီး Zap အသစ်တစ်ခု စတင်သတ်မှတ်ပါ။

![Create Zap ခလုတ်ပါဝင်တဲ့ Zapier dashboard](/img/admin/webhooks-list.png)

Zap ဖန်တီးတဲ့စာမျက်နှာကို ရောက်သွားပါလိမ့်မယ်။

ရှာဖွေမှုအကွက်မှာ "wp ultimo" လို့ ရိုက်ထည့်ပါ။ **Beta** version option ကို ရွေးချယ်ပါ။

![Zapier app စာရင်းမှာ WP Ultimo ကို ရှာဖွေခြင်း](/img/admin/webhooks-list.png)

ကျွန်ုပ်တို့ app ကို ရွေးချယ်ပြီးရင် ရရှိနိုင်တဲ့ event ကို ရွေးပါ - **New Ultimate Multisite Event**။

![New Ultimate Multisite Event trigger ကို ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

အခု Zapier ကို **သင့် network** ဝင်ရောက်ခွင့်ပေးရပါမယ်။ **Sign in** ကို နှိပ်ရင် **API credentials** လိုအပ်တဲ့ window အသစ်တစ်ခု ပေါ်လာပါလိမ့်မယ်။

![API credentials အတွက် Zapier Sign in အချက်ပြမှု](/img/admin/webhooks-list.png)

သင့် network admin panel သို့သွားပြီး **Ultimate Multisite > Settings** > **API & Webhooks** ကို သွားကာ API Settings အပိုင်းကို ရှာပါ။

ဒီချိတ်ဆက်မှု အလုပ်လုပ်ဖို့ **Enable API** option ကို ရွေးချယ်ပါ။

![Ultimate Multisite မှာ Enable API option ပါဝင်တဲ့ API Settings](/img/admin/webhooks-list.png)

API Key နဲ့ API Secret field တွေမှာရှိတဲ့ **Copy to Clipboard** icon ကို အသုံးပြုပြီး ထို value တွေကို integration screen မှာ paste လုပ်ပါ။

URL field မှာ protocol (HTTP သို့မဟုတ် HTTPS) အပါအဝင် သင့် network URL အပြည့်အစုံကို ထည့်သွင်းပါ။

![API Key၊ Secret နဲ့ URL field တွေပါဝင်တဲ့ Zapier integration screen](/img/admin/webhooks-list.png)

နောက်တစ်ဆင့်သို့ သွားဖို့ **Yes, Continue** ခလုတ်ကို နှိပ်ပါ။ အားလုံး အဆင်ပြေရင် သင့် ချိတ်ဆက်ထားတဲ့ account အသစ်ကို တွေ့ရပါလိမ့်မယ်။ trigger အသစ်တစ်ခု ဖန်တီးဖို့ **Continue** ကို နှိပ်ပါ။

## Trigger အသစ်ဖန်တီးနည်း

သင့် account ချိတ်ဆက်ပြီးသွားပြီဆိုရင် ရရှိနိုင်တဲ့ event တွေကို မြင်ရပါလိမ့်မယ်။ ဒီ tutorial အတွက် **payment_received** event ကို ရွေးကြည့်ရအောင်။

![Zapier trigger မှာ payment_received event ကို ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

event ကို ရွေးချယ်ပြီး **continue** ကို နှိပ်ရင် **test step** တစ်ခု ပေါ်လာပါလိမ့်မယ်။

![trigger အတွက် Zapier test step](/img/admin/webhooks-list.png)

ဒီအဆင့်မှာ Zapier က သင့် Zap ဟာ **ထို event အတွက် သီးခြား payload ကို ဆွဲယူနိုင်မလား** စမ်းသပ်ပါလိမ့်မယ်။ အမျိုးအစားတူတဲ့ နောက် event တွေမှာ ဒီ structure အတိုင်း အချက်အလက်တွေ ပို့ပေးပါလိမ့်မယ်။

![payload နဲ့အတူ အောင်မြင်စွာ ပြီးမြောက်သွားတဲ့ Zapier trigger test](/img/admin/webhooks-list.png)

ကျွန်ုပ်တို့ tutorial မှာ test က **အောင်မြင်စွာ ပြီးမြောက်ခဲ့ပြီး** payload ဥပမာအချက်အလက်ကို ပြန်ပေးခဲ့ပါတယ်။ ဒီဥပမာအချက်အလက်က action တွေ ဖန်တီးတဲ့အခါ လမ်းညွှန်ပေးဖို့ အသုံးဝင်ပါလိမ့်မယ်။ သင့် trigger ဖန်တီးပြီးသွားပြီဖြစ်ပြီး အခြား application တွေနဲ့ ချိတ်ဆက်ဖို့ အသင့်ဖြစ်နေပါပြီ။

## Actions ဖန်တီးနည်း

Actions တွေက အခြား trigger တွေက အချက်အလက်တွေကို အသုံးပြုပြီး သင့် network မှာ entry အသစ်တွေ ဖန်တီးပါတယ်။

**action ဖန်တီးတဲ့ အဆင့်** မှာ Ultimate Multisite **Beta** နဲ့ **Create Items on Ultimate Multisite** option ကို ရွေးချယ်ပါ။

![Create Items on Ultimate Multisite နဲ့ action တစ်ခု ဖန်တီးခြင်း](/img/admin/webhooks-list.png)

နောက်တစ်ဆင့်မှာ **စတင်နည်း** မှာ လုပ်ခဲ့သလိုပဲ authentication အသစ် ဖန်တီးမယ်၊ ဒါမှမဟုတ် ဖန်တီးထားပြီးသား authentication ကို ရွေးချယ်ပါ။ ဒီ tutorial မှာ အရင်က ဖန်တီးထားခဲ့တဲ့ authentication ကိုပဲ ရွေးချယ်ပါမယ်။

![Zapier action အတွက် authentication ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

### Action ကို သတ်မှတ်ခြင်း

ဒါက **action ရဲ့ အဓိကအဆင့်** ဖြစ်ပြီး ဒီမှာ အနည်းငယ် ကွဲပြားပါတယ်။ ပထမဆုံး ရွေးချယ်ရမယ့် အချက်အလက်က **Item** ပါ။ Item ဆိုတာ **Customers, Payments, Sites, Emails** စတဲ့ သင့် network ရဲ့ **information model** ဖြစ်ပါတယ်။

![Zapier action အတွက် Item အမျိုးအစား ရွေးချယ်ခြင်း](/img/admin/webhooks-list.png)

item တစ်ခုကို ရွေးချယ်တဲ့အခါ form က **ရွေးချယ်ထားတဲ့ item အတွက် လိုအပ်တဲ့ field တွေနဲ့ optional field တွေကို ပြသဖို့ ပြန်လည်စီစဉ်ပေးပါလိမ့်မယ်**။

ဥပမာ **Customer** item ကို ရွေးချယ်တဲ့အခါ network မှာ Customer အသစ်တစ်ဦး ဖန်တီးဖို့ လိုအပ်တဲ့ အရာအားလုံးကို form field တွေမှာ ပြသပေးပါလိမ့်မယ်။

![Zapier action setup မှာ Customer item field တွေ](/img/admin/webhooks-list.png)

**required** အဖြစ် မှတ်သားထားတဲ့ field အားလုံးကို ဖြည့်ပြီး continue ကို နှိပ်ရင် ဖြည့်ထားတဲ့ field တွေနဲ့ မဖြည့်ရသေးတဲ့ field တွေကို နောက်ဆုံး screen တစ်ခုမှာ ပြသပေးပါလိမ့်မယ်။

![ဖြည့်ထားတဲ့ field တွေနဲ့ မဖြည့်ရသေးတဲ့ field တွေကို ပြသနေတဲ့ Zapier action test](/img/admin/webhooks-list.png)

သင့် test ပြီးမြောက်ပြီး အောင်မြင်သွားတာနဲ့ သင့် action configure လုပ်ပြီးသွားပါပြီ။ သင့် action ရဲ့ test နဲ့ item ဖန်တီးခြင်း ဖြစ်ခဲ့မခဲ့ သင့် network မှာ စစ်ဆေးဖို့လည်း အရေးကြီးပါတယ်။
