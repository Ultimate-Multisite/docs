---
title: Webhooks
sidebar_position: 15
_i18n_hash: b4ccc66ecddbe88bc85f562e32e5dca8
---
# Webhooks (v2) ပထမဆုံးအကြိမ် ကြည့်ရှုခြင်း

_**သတိပြုရန်: ဤအင်္ဂါရပ် သို့မဟုတ် ဆောင်းပါးသည် အဆင့်မြင့်အသုံးပြုသူများအတွက် ရည်ရွယ်ပါသည်။**_

**Webhook** ဆိုသည်မှာ Ultimate Multisite ကဲ့သို့သော app သို့မဟုတ် software တစ်ခုက အခြား application များကို အချိန်နှင့်တစ်ပြေးညီ အချက်အလက်များ ပေးပို့နိုင်သည့် နည်းလမ်းတစ်ခုဖြစ်သည်။ Webhook သည် ဖြစ်ရပ်များ ဖြစ်ပေါ်သည့်အခါ data သို့မဟုတ် payload များကို အခြား application များသို့ ချက်ချင်းပေးပို့သည်၊ ဆိုလိုသည်မှာ သင်သည် **data ကို ချက်ချင်းရရှိသည်။**

Ultimate Multisite မှ event တစ်ခုဖြစ်တိုင်း အချက်အလက်များကို အခြား CRM သို့မဟုတ် system သို့ ပေါင်းစပ်ရန် သို့မဟုတ် ပို့ဆောင်ရန် လိုအပ်သည့်အခါ ၎င်းသည် အသုံးဝင်ပါသည်။ ဥပမာအားဖြင့်၊ အသုံးပြုသူအကောင့်အသစ်တစ်ခု ဖန်တီးတိုင်း အသုံးပြုသူ၏အမည်နှင့် email လိပ်စာကို mailing list သို့ ပို့ဆောင်ရန် လိုအပ်သည်။

## Webhook တစ်ခုဖန်တီးနည်း

Webhook တစ်ခုဖန်တီးရန်၊ သင်၏ network admin dashboard သို့သွားပါ။ **Ultimate Multisite > Webhooks > Add New Webhook** ကိုနှိပ်ပါ။

![Add New Webhook ခလုတ်ပါသော Webhooks စာရင်းစာမျက်နှာ](/img/admin/webhooks-list.png)

Webhook အသစ်တစ်ခုဖန်တီးသောအခါ **Name၊ URL** နှင့် **Event** ကဲ့သို့သော အချက်အလက်များ ထည့်သွင်းရန် တောင်းဆိုပါလိမ့်မည်။ သင့် webhook အတွက် မည်သည့်အမည်ကိုမဆို အသုံးပြုနိုင်ပါသည်။ အရေးအကြီးဆုံး field များမှာ URL နှင့် Event ဖြစ်သည်။

![Name၊ URL နှင့် Event field များပါသော Webhook form အသစ်](/img/admin/webhooks-list.png)

URL သည် Ultimate Multisite က **payload သို့မဟုတ် data** ကို ပို့ဆောင်မည့် **endpoint သို့မဟုတ် ဦးတည်ရာနေရာ** ဖြစ်သည်။ ၎င်းသည် data ကို လက်ခံရရှိမည့် application ဖြစ်သည်။

Zapier သည် အသုံးပြုသူများက 3rd party application များနှင့် ပေါင်းစပ်ရာတွင် ပိုမိုလွယ်ကူစေရန် အသုံးအများဆုံး solution ဖြစ်သည်။ Zapier ကဲ့သို့သော platform မရှိပါက data ကို ဖမ်းယူပြီး process လုပ်မည့် custom function တစ်ခုကို ကိုယ်တိုင်ဖန်တီးရပါမည်။ **Ultimate Multisite webhook ကို Zapier နှင့် အသုံးပြုနည်း** အကြောင်း ဤဆောင်းပါးတွင် ကြည့်ရှုပါ။

ဤဆောင်းပါးတွင်၊ webhook အလုပ်လုပ်ပုံ အခြေခံသဘောတရားနှင့် Ultimate Multisite တွင် ရရှိနိုင်သော event များကို လေ့လာပါမည်။ [requestbin.com](https://requestbin.com/) ဟုခေါ်သော 3rd party site တစ်ခုကို အသုံးပြုပါမည်။ ဤ site သည် coding မလုပ်ဘဲ endpoint တစ်ခုဖန်တီးပြီး payload ကို ဖမ်းယူနိုင်စေပါသည်။ _**သတိပြုရန်: ၎င်းသည် data ရရှိကြောင်း ပြသပေးရုံသာဖြစ်သည်။**_ Payload ကို process လုပ်ခြင်း သို့မဟုတ် မည်သည့် action မျှ လုပ်ဆောင်မည်မဟုတ်ပါ။

[requestbin.com](https://requestbin.com/) သို့သွားပြီး Create Request Bin ကိုနှိပ်ပါ။

![RequestBin website Create Request Bin ခလုတ်](/img/admin/webhooks-list.png)

ထိုခလုတ်ကိုနှိပ်ပြီးနောက်၊ အကောင့်ရှိပြီးသားဖြစ်လျှင် login ဝင်ရန် သို့မဟုတ် sign up လုပ်ရန် တောင်းဆိုပါလိမ့်မည်။ အကောင့်ရှိပြီးသားဖြစ်လျှင် ၎င်းတို့၏ dashboard သို့ တိုက်ရိုက်ရောက်သွားပါမည်။ ၎င်းတို့၏ dashboard တွင်၊ သင်၏ Ultimate Multisite webhook ဖန်တီးရာတွင် အသုံးပြုနိုင်သော endpoint သို့မဟုတ် URL ကို ချက်ချင်းမြင်ရပါမည်။

![Endpoint URL ပြသနေသော RequestBin dashboard](/img/admin/webhooks-list.png)

URL ကို copy ကူးပြီး Ultimate Multisite သို့ ပြန်သွားပါ။ Endpoint ကို URL field တွင် ထည့်သွင်းပြီး dropdown မှ event တစ်ခုကို ရွေးချယ်ပါ။ ဤဥပမာတွင်၊ **Payment Received** ကို ရွေးချယ်ပါမည်။

ဤ event သည် အသုံးပြုသူတစ်ဦး ငွေပေးချေတိုင်း အလုပ်လုပ်ပါသည်။ ရရှိနိုင်သော event များအားလုံး၊ ၎င်းတို့၏ ဖော်ပြချက်များနှင့် payload များကို စာမျက်နှာအောက်ခြေတွင် စာရင်းပြုစုထားပါသည်။ Webhook ကို သိမ်းဆည်းရန် **Add New Webhook** ခလုတ်ကို နှိပ်ပါ။

![Payment Received event ဖြင့် configure လုပ်ထားသော Webhook](/img/admin/webhooks-list.png)

ယခု ကျွန်ုပ်တို့ ဖန်တီးထားသော webhook အလုပ်လုပ်ခြင်း ရှိမရှိ ကြည့်ရှုရန် endpoint သို့ test event တစ်ခု ပို့နိုင်ပါပြီ။ ကျွန်ုပ်တို့ ဖန်တီးထားသော webhook အောက်ရှိ **Send Test Event** ကို နှိပ်ခြင်းဖြင့် လုပ်ဆောင်နိုင်ပါသည်။

![Webhook အောက်ရှိ Send Test Event option](/img/admin/webhooks-list.png)

၎င်းသည် test အောင်မြင်ကြောင်း အတည်ပြု window ကို ပြသပါသည်။

![Webhook test event အောင်မြင်ကြောင်း အတည်ပြုချက်](/img/admin/webhooks-list.png)

ယခု _Requestbin_ site သို့ ပြန်သွားလျှင် test data အချို့ပါဝင်သော payload ကို လက်ခံရရှိကြောင်း မြင်ရပါမည်။

![လက်ခံရရှိသော webhook payload data ပြသနေသော RequestBin](/img/admin/webhooks-list.png)

ဤသည်မှာ webhook နှင့် endpoint များ အလုပ်လုပ်ပုံ အခြေခံမူဖြစ်သည်။ Custom endpoint တစ်ခု ဖန်တီးမည်ဆိုပါက Ultimate Multisite မှ လက်ခံရရှိသော data ကို process လုပ်ရန် custom function တစ်ခု ဖန်တီးရပါမည်။
