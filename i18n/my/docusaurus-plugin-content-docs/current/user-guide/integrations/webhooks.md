---
title: ဝဘ်ဟုခ်များ
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooks (v2) ကို ပထမဆုံး ကြည့်ရှုခြင်း

_**သတိပြုရန်- ဤလုပ်ဆောင်ချက် သို့မဟုတ် ဆောင်းပါးသည် အဆင့်မြင့် အသုံးပြုသူများအတွက် ဖြစ်သည်။**_

**webhook** သည် Ultimate Multisite ကဲ့သို့သော အက်ပ် သို့မဟုတ် ဆော့ဖ်ဝဲက အခြား အက်ပ်များသို့ အချိန်နှင့်တပြေးညီ အချက်အလက် ပေးပို့နိုင်သည့် နည်းလမ်းတစ်ခု ဖြစ်သည်။ webhook သည် ဖြစ်ပျက်သည့်အချိန်တွင်ပင် အခြား အက်ပ်များသို့ data သို့မဟုတ် payloads ကို ပို့ပေးသောကြောင့် သင်သည် **data ကို ချက်ချင်း ရရှိသည်။**

Ultimate Multisite မှ အချို့ data များကို ဖြစ်ရပ်တစ်ခု ဖြစ်ပေါ်တိုင်း အခြား CRM သို့မဟုတ် စနစ်တစ်ခုသို့ ချိတ်ဆက်ရန် သို့မဟုတ် ပေးပို့ရန် လိုအပ်ပါက ဤအရာသည် အသုံးဝင်သည်။ ဥပမာ၊ အသုံးပြုသူ account အသစ် တစ်ခု ဖန်တီးတိုင်း အသုံးပြုသူ၏ အမည်နှင့် အီးမေးလ်လိပ်စာကို mailing list တစ်ခုသို့ ပို့ရန် လိုအပ်နိုင်သည်။

## webhook ဖန်တီးနည်း

webhook ဖန်တီးရန် သင့် network admin dashboard သို့ သွားပါ။ **Ultimate Multisite > Webhooks > Add New Webhook** ကို နှိပ်ပါ။

![Add New Webhook ခလုတ်ပါသော Webhooks စာရင်းအလွတ် စာမျက်နှာ](/img/admin/webhooks-list-empty.png)

ထို့နောက် webhook configuration ကို တည်းဖြတ်နိုင်သည်-

![Name, Event, နှင့် URL fields ပါသော Add New Webhook form](/img/admin/webhook-add-modal.png)

webhook အသစ် ဖန်တီးရာတွင် **Name, URL,** နှင့် **Event** ကဲ့သို့သော အချက်အလက်များကို မေးမြန်းပါမည်။ သင့် webhook အတွက် သင်လိုချင်သည့် မည်သည့်အမည်မဆို အသုံးပြုနိုင်သည်။ အရေးအကြီးဆုံး fields များမှာ URL နှင့် Event ဖြစ်သည်။

![URL field နှင့် payload preview ကို ပြသသော webhook တည်းဖြတ်မှု interface](/img/admin/webhook-url-field.png)

URL သည် Ultimate Multisite က **payload သို့မဟုတ် data** ကို ပို့မည့် **endpoint သို့မဟုတ် destination** ဖြစ်သည်။ ၎င်းသည် data ကို လက်ခံမည့် အက်ပ်ဖြစ်သည်။

Zapier သည် 3rd party အက်ပ်နှင့် ချိတ်ဆက်မှုကို ပိုမိုလွယ်ကူစေရန် အသုံးပြုသူများ အများဆုံး အသုံးပြုသော ဖြေရှင်းနည်း ဖြစ်သည်။ Zapier ကဲ့သို့သော platform မရှိပါက data ကို ဖမ်းယူပြီး လုပ်ဆောင်ရန် custom function တစ်ခုကို ကိုယ်တိုင် ဖန်တီးရမည်။ **Ultimate Multisite webhook ကို Zapier နှင့် အသုံးပြုနည်း** ဆောင်းပါးကို ကြည့်ပါ။

ဤဆောင်းပါးတွင် webhook အလုပ်လုပ်ပုံ၏ အခြေခံ သဘောတရားနှင့် Ultimate Multisite တွင် ရရှိနိုင်သော ဖြစ်ရပ်များကို ကြည့်ရှုပါမည်။ [requestbin.com](https://requestbin.com/) ဟုခေါ်သည့် 3rd party site တစ်ခုကို အသုံးပြုပါမည်။ ဤ site သည် code မရေးဘဲ endpoint တစ်ခု ဖန်တီးပြီး payload ကို ဖမ်းယူနိုင်စေမည်။ _**Disclaimer- ၎င်းလုပ်မည့်အရာအားလုံးမှာ data လက်ခံရရှိထားကြောင်း ကျွန်ုပ်တို့အား ပြသခြင်းသာ ဖြစ်သည်။**_ payload အပေါ် လုပ်ဆောင်ခြင်း သို့မဟုတ် မည်သည့် အရေးယူဆောင်ရွက်မှုမျိုးမျှ မပြုလုပ်ပါ။

[requestbin.com](https://requestbin.com/) သို့ သွားပြီး Create Request Bin ကို နှိပ်ပါ။

ထိုခလုတ်ကို နှိပ်ပြီးနောက် account ရှိပြီးသားဖြစ်ပါက login ဝင်ရန် သို့မဟုတ် sign up လုပ်ရန် မေးပါမည်။ account ရှိပြီးသားဖြစ်ပါက ၎င်းတို့၏ Dashboard သို့ တိုက်ရိုက် ပို့ဆောင်ပေးမည်။ ၎င်းတို့၏ Dashboard တွင် သင့် Ultimate Multisite webhook ဖန်တီးရာတွင် အသုံးပြုနိုင်သော endpoint သို့မဟုတ် URL ကို ချက်ချင်း မြင်ရမည်။

URL ကို copy လုပ်ပြီး Ultimate Multisite သို့ ပြန်သွားပါ။ endpoint ကို URL field တွင် ထည့်ပြီး dropdown မှ ဖြစ်ရပ်တစ်ခုကို ရွေးပါ။ ဤဥပမာတွင် **Payment Received** ကို ရွေးပါမည်။

အသုံးပြုသူတစ်ဦး ငွေပေးချေသည့်အခါတိုင်း ဤဖြစ်ရပ်ကို trigger လုပ်သည်။ ရရှိနိုင်သော ဖြစ်ရပ်အားလုံး၊ ၎င်းတို့၏ ဖော်ပြချက်နှင့် payloads များကို စာမျက်နှာအောက်ခြေတွင် စာရင်းပြုထားသည်။ webhook ကို သိမ်းဆည်းရန် **Add New Webhook** ခလုတ်ကို နှိပ်ပါ။

![Payment Received ရွေးထားသော webhook event dropdown](/img/admin/webhook-event-picker.png)

ကျွန်ုပ်တို့ ဖန်တီးထားသော webhook အလုပ်လုပ်နေခြင်း ရှိမရှိ ကြည့်ရန် endpoint သို့ test event တစ်ခုကို ယခုပို့နိုင်သည်။ ဖန်တီးထားသော webhook အောက်ရှိ **Send Test Event** ကို နှိပ်ခြင်းဖြင့် ဤအရာကို ပြုလုပ်နိုင်သည်။

![Configured webhook တစ်ခုနှင့် Send Test action ကို ပြသော Webhooks စာရင်း](/img/admin/webhooks-list-populated.png)

test အောင်မြင်ကြောင်း ပြောသော confirmation window ကို ဤနေရာတွင် ပြသည်။

![test payload ပို့ပြီးနောက် webhook test event ရလဒ်](/img/admin/webhook-test-result.png)

ယခု _Requestbin_ site သို့ ပြန်သွားပါက test data အချို့ပါဝင်သော payload လက်ခံရရှိထားကြောင်း မြင်ရမည်။

ဤသည်မှာ webhook နှင့် endpoints အလုပ်လုပ်ပုံ၏ အခြေခံမူ ဖြစ်သည်။ custom endpoint တစ်ခု ဖန်တီးမည်ဆိုပါက Ultimate Multisite မှ သင်လက်ခံရရှိသော data ကို လုပ်ဆောင်ရန် custom function တစ်ခု ဖန်တီးရမည်။
