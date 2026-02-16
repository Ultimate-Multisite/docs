---
title: Stripe ကို စီမံခြင်း
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway ပြင်ဆင်ခြင်း (v2)

_**အရေးကြီးသော မှတ်ချက်: ဤဆောင်းပါးသည် Ultimate Multisite version 2.x အတွက် ဖြစ်ပါသည်။**_

ကျွန်ုပ်တို့၏ ငွေပေးချေမှု ဆက်တင်စာမျက်နှာတွင် ငွေပေးချေနည်းလေးမျိုးအထိ အသက်သွင်းနိုင်ပါသည်: Stripe၊ Stripe Checkout၊ PayPal နှင့် Manual။ ဤဆောင်းပါးတွင် **Stripe** နှင့် ချိတ်ဆက်နည်းကို လေ့လာကြပါမည်။

## Stripe ကို ဖွင့်ခြင်း

သင့်ကွန်ရက်တွင် Stripe ကို ရရှိနိုင်သော ငွေပေးချေမှု gateway အဖြစ် ဖွင့်ရန်၊ **Ultimate Multisite > Settings > Payments** သို့သွားပြီး Active Payment Gateways အပိုင်းရှိ **Stripe** သို့မဟုတ် **Stripe Checkout** ဘေးက toggle ကို နှိပ်ပါ။

![Active payment gateways တွင် Stripe ကို ဖွင့်ခြင်း](/img/config/settings-payment-gateways.png)

### Stripe နှင့် Stripe Checkout ကွာခြားချက်:

**Stripe:** ဤနည်းလမ်းသည် checkout လုပ်စဉ်အတွင်း credit card နံပါတ် ထည့်သွင်းရန် နေရာတစ်ခု ပြသပေးပါမည်။

![Checkout အတွင်း Stripe inline credit card field](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** ဤနည်းလမ်းသည် checkout လုပ်စဉ်အတွင်း ဝယ်ယူသူကို Stripe Checkout စာမျက်နှာသို့ ပြန်လည်ညွှန်းပေးပါမည်။

![Checkout အတွင်း Stripe Checkout redirect စာမျက်နှာ](/img/config/settings-payment-gateways.png)

သင်၏ Stripe API keys များ ရယူခြင်း

Stripe ကို ငွေပေးချေမှု gateway အဖြစ် ဖွင့်ပြီးသည်နှင့် **Stripe Publishable Key** နှင့် **Stripe Secret Key** အကွက်များကို ဖြည့်သွင်းရန် လိုအပ်ပါမည်။ သင်၏ Stripe အကောင့်သို့ ဝင်ရောက်ခြင်းဖြင့် ၎င်းတို့ကို ရယူနိုင်ပါသည်။

_**မှတ်ချက်:** ငွေပေးချေမှုနည်းလမ်း အလုပ်လုပ်ခြင်း ရှိမရှိ စမ်းသပ်ရန် **Sandbox mode** ကို အသက်သွင်းနိုင်ပါသည်။_

![Stripe API key အကွက်များနှင့် sandbox mode toggle](/img/config/settings-payment-gateways.png)

သင်၏ Stripe dashboard တွင် ညာဘက်အပေါ်ထောင့်ရှိ **Developers** ကိုနှိပ်ပြီး ဘယ်ဘက် menu မှ **API Keys** ကို နှိပ်ပါ။

![API Keys ပါဝင်သော Stripe dashboard Developers အပိုင်း](/img/config/settings-payment-gateways.png)

**Test Data** (သင်၏ production site တွင် ချိတ်ဆက်မှု အလုပ်လုပ်ခြင်း ရှိမရှိ စမ်းသပ်ရန်) ကို အသုံးပြုနိုင်သည် သို့မဟုတ် မပြုနိုင်ပါ။ ၎င်းကို ပြောင်းလဲရန် **Viewing test data** toggle ကို နှိပ်ပါ။

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Token** column မှ **Publishable key** နှင့် **Secret key** တန်ဖိုးများကို ကူးယူပြီး Ultimate Multisite Stripe Gateway အကွက်များတွင် ကူးထည့်ပါ။ ထို့နောက် **Save Changes** ကို နှိပ်ပါ။

![Stripe publishable နှင့် secret key တန်ဖိုးများ](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings တွင် Stripe keys များ ကူးထည့်ခြင်း](/img/config/settings-payment-gateways.png)

## Stripe Webhook ပြင်ဆင်ခြင်း

Stripe သည် **သင်၏ stripe အကောင့်**တွင် ဖြစ်ရပ်တစ်ခုခု ဖြစ်ပေါ်သည့်အခါတိုင်း Ultimate Multisite ကို အကြောင်းကြားသည့် webhook events များ ပို့ပေးပါသည်။

**Developers** ကိုနှိပ်ပြီး ဘယ်ဘက် menu မှ **Webhooks** ကို ရွေးချယ်ပါ။ ထို့နောက် ညာဘက်ခြမ်းရှိ **Add endpoint** ကို နှိပ်ပါ။

![Add endpoint ခလုတ်ပါဝင်သော Stripe Webhooks စာမျက်နှာ](/img/config/settings-payment-gateways.png)

**Endpoint URL** တစ်ခု လိုအပ်ပါမည်။ Ultimate Multisite သည် endpoint URL ကို အလိုအလျောက် ထုတ်ပေးပြီး **Ultimate Multisite Stripe Gateway** အပိုင်းရှိ **Webhook Listener URL** အကွက်အောက်တွင် တွေ့နိုင်ပါသည်။

![Stripe gateway settings ရှိ Webhook Listener URL အကွက်](/img/config/settings-payment-gateways.png)

Endpoint URL ကို **ကူးယူ**ပြီး Stripe **Endpoint URL** အကွက်တွင် **ကူးထည့်**ပါ။

![Stripe webhook setup တွင် endpoint URL ကူးထည့်ခြင်း](/img/config/settings-payment-gateways.png)

နောက်တစ်ဆင့်မှာ **Event** တစ်ခု ရွေးချယ်ရန် ဖြစ်ပါသည်။ ဤရွေးချယ်မှုအောက်တွင် **Select all events** အကွက်ကို အမှန်ခြစ်ပြီး **Add events** ကို နှိပ်ရုံသာ လိုအပ်ပါသည်။ ထို့နောက် ပြောင်းလဲမှုများ သိမ်းဆည်းရန် **Add Endpoint** ကို နှိပ်ပါ။

![Events အားလုံး ရွေးချယ်ပြီး Stripe endpoint ထည့်သွင်းခြင်း](/img/config/settings-payment-gateways.png)

ဒါပဲဖြစ်ပါသည်၊ သင်၏ Stripe ငွေပေးချေမှု ချိတ်ဆက်ခြင်း ပြီးပြည့်စုံပါပြီ!
