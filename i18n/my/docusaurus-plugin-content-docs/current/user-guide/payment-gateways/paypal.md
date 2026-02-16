---
title: PayPal စနစ်ထည့်သွင်းခြင်း
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal Gateway (v2) ကို စနစ်ထည့်သွင်းခြင်း

_**အရေးကြီးသော မှတ်ချက်: ဤဆောင်းပါးသည် Ultimate Multisite version 2.x အတွက် ဖြစ်ပါသည်။**_

ကျွန်ုပ်တို့၏ ငွေပေးချေမှု ဆက်တင်စာမျက်နှာတွင် ငွေပေးချေမှုနည်းလမ်း လေးခုအထိ ဖွင့်နိုင်ပါသည်: Stripe၊ Stripe Checkout၊ PayPal နှင့် Manual။ ဤဆောင်းပါးတွင် **PayPal** နှင့် မည်သို့ ချိတ်ဆက်ရမည်ကို လေ့လာပါမည်။

Stripe ကဲ့သို့ပင် PayPal သည် အွန်လိုင်းငွေပေးချေမှုများအတွက် အသုံးများပြီး အထူးသဖြင့် WordPress ဝဘ်ဆိုက်များတွင် ပိုမိုအသုံးများပါသည်။ ဤဆောင်းပါးသည် သင့် network တွင် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းတစ်ခုအဖြစ် PayPal ကို မည်သို့အသုံးပြုရမည်ကို လမ်းညွှန်ပေးပါမည်။

ဤ ချိတ်ဆက်မှုအတွက် လိုအပ်သော API credential ကို ရယူရန် **PayPal Business account** ရှိရန် လိုအပ်ကြောင်း သတိပြုပါ။

## သင့် network တွင် PayPal ကို ဖွင့်ခြင်း

သင့် network တွင် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းအဖြစ် PayPal ကို ဖွင့်ရန် **Ultimate Multisite > Settings > Payments** tab သို့သွားပြီး PayPal ဘေးရှိ အကွက်ကို အမှန်ခြစ်ပါ။

![PayPal ကို active payment gateways တွင် ဖွင့်ခြင်း](/img/config/settings-payment-gateways.png)

## PayPal API credentials ကို ရယူခြင်း

PayPal ကို payment gateway အဖြစ် ဖွင့်ပြီးသည်နှင့် PayPal API **Username**၊ PayPal API **Password** နှင့် PayPal API **Signature** အကွက်များကို ဖြည့်ရန် လိုအပ်ပါမည်။

သင့် PayPal [Live](https://www.paypal.com/home) သို့မဟုတ် [Sandbox](https://www.sandbox.paypal.com/home) အကောင့်သို့ ဝင်ရောက်ခြင်းဖြင့် ၎င်းကို ရယူနိုင်ပါသည်။

(ငွေပေးချေမှုများကို စမ်းသပ်ရန်နှင့် gateway ကို မှန်ကန်စွာ စနစ်ထည့်သွင်းထားခြင်း ရှိမရှိ ကြည့်ရှုရန် **sandbox mode** ကို အသုံးပြုနိုင်ကြောင်း သတိရပါ။ သက်ဆိုင်ရာ အပိုင်းကို toggle ဖွင့်လိုက်ရုံပါပဲ။)

![PayPal API credentials အကွက်များနှင့် sandbox mode toggle](/img/config/settings-payment-gateways.png)

သင့် PayPal အကောင့်အတွက် API Signature သို့မဟုတ် Certificate credentials တောင်းဆိုရန်:

  1. သင့် [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) သို့ သွားပါ။

  2. **API access** အပိုင်းတွင် **Update** ကို နှိပ်ပါ။  
![PayPal Account Settings နှင့် API access အပိုင်း](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** အောက်တွင် **Manage API credentials** ကို နှိပ်ပါ။  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * API Signature သို့မဟုတ် Certificate ကို အရင်က ဖန်တီးထားပြီးဖြစ်လျှင် သင့် credentials ကို တွေ့နိုင်သော စာမျက်နှာသို့ ပြန်လည်ညွှန်းပေးပါမည်။

     * _**မှတ်ချက်:** သင့် PayPal အကောင့်ကို အတည်ပြုရန် တောင်းဆိုပါက မျက်နှာပြင်ပေါ်ရှိ ညွှန်ကြားချက်များကို လိုက်နာပါ။_

  4. အောက်ပါ ရွေးချယ်စရာများထဲမှ _တစ်ခု_ ကို ရွေးချယ်ပြီး **Agree and Submit** ကို နှိပ်ပါ။

     * **Request API Signature** – API Signature အတည်ပြုခြင်းအတွက် ရွေးချယ်ပါ။

     * **Request API Certificate** – API Certificate အတည်ပြုခြင်းအတွက် ရွေးချယ်ပါ။

  5. PayPal သည် သင့် API credentials ကို အောက်ပါအတိုင်း ဖန်တီးပေးပါမည်:  
![PayPal မှ ဖန်တီးပေးသော API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** တွင် API Username၊ API Password နှင့် သက်တမ်းကုန်ဆုံးခြင်း မရှိသော Signature တို့ ပါဝင်ပါသည်။ လုံခြုံရေးအတွက် ဤတန်ဖိုးများကို ပုံမှန်အားဖြင့် ဖျောက်ထားပါသည်။ ၎င်းတို့ကို ပြ/ဖျောက် ရန် **Show/Hide** ကို နှိပ်ပါ။ ပြီးဆုံးသောအခါ **Done** ကို နှိပ်ပါ။

     * **API Certificate credentials** တွင် API Username၊ API Password နှင့် သုံးနှစ်အကြာ အလိုအလျောက် သက်တမ်းကုန်ဆုံးသော Certificate တို့ ပါဝင်ပါသည်။ API Certificate ကို သင့် desktop တွင် သိမ်းဆည်းရန် **Download Certificate** ကို နှိပ်ပါ။

ဒါပဲ ဖြစ်ပါတယ်၊ သင့် PayPal ငွေပေးချေမှု ချိတ်ဆက်မှု ပြီးပြည့်စုံပါပြီ!

PayPal ဆက်တင်များနှင့် ပတ်သက်၍ မေးခွန်းများ ရှိပါက PayPal ၏ [Help Center](https://www.paypal.com/br/smarthelp/home) ကို ကိုးကားနိုင်ပါသည်။
