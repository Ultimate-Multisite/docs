---
title: PayPal ကို စတင်ပြင်ဆင်ခြင်း
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway (v2) ကို စနစ်တကျ သတ်မှတ်ခြင်း

_**အရေးကြီးသော မှတ်ချက် - ဤဆောင်းပါးသည် Ultimate Multisite ဗားရှင်း 2.x အတွက် ဖြစ်ပါသည်။**_

ကျွန်ုပ်တို့၏ ငွေပေးချေမှု ဆက်တင်များ စာမျက်နှာတွင် ငွေပေးချေမှုနည်းလမ်း လေးမျိုးအထိ ဖွင့်နိုင်သည် - Stripe, Stripe Checkout, PayPal နှင့် Manual။ ဤဆောင်းပါးတွင် **PayPal** နှင့် မည်သို့ချိတ်ဆက်ရမည်ကို ကြည့်ပါမည်။

Stripe ကဲ့သို့ပင် PayPal ကို အွန်လိုင်း ငွေပေးချေမှုများအတွက် ကျယ်ကျယ်ပြန့်ပြန့် အသုံးပြုကြပြီး WordPress ဝဘ်ဆိုက်များတွင် အထူးအသုံးများသည်။ ဤဆောင်းပါးသည် သင့် network တွင် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းတစ်ခုအဖြစ် PayPal ကို မည်သို့အသုံးပြုရမည်ကို လမ်းညွှန်ပေးပါမည်။

ဤချိတ်ဆက်မှုအတွက် လိုအပ်သော API credential ကိုရရှိရန် **PayPal Business account** တစ်ခုရှိရန် လိုအပ်ကြောင်း သတိပြုပါ။

## သင့် network တွင် PayPal ကို ဖွင့်ခြင်း {#enabling-paypal-on-your-network}

သင့် network တွင် ရရှိနိုင်သော ငွေပေးချေမှုနည်းလမ်းတစ်ခုအဖြစ် PayPal ကို ဖွင့်ရန် **Ultimate Multisite > Settings > Payments** tab သို့သွားပြီး PayPal ဘေးရှိ အကွက်ကို အမှန်ခြစ်ပါ။

![လုပ်ဆောင်နေသော ငွေပေးချေမှု gateway များတွင် PayPal ကို ဖွင့်ခြင်း](/img/config/settings-payment-gateways.png)

## လမ်းညွှန်ပါ setup wizard ကို အသုံးပြုခြင်း {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 သည် ငွေပေးချေမှု gateway ဆက်တင်များတွင် လမ်းညွှန်ပါ PayPal setup wizard ကို ထည့်သွင်းထားသည်။ PayPal ကို ဖွင့်ပြီးနောက် gateway ကို မည်သို့ချိတ်ဆက်လိုသည်ကို ရွေးချယ်ရန်နှင့် သိမ်းဆည်းမီ မည်သည့် credentials များ လိုအပ်နေသေးသည်ကို အတည်ပြုရန် **Ultimate Multisite > Settings > Payments** ပေါ်ရှိ wizard ကို အသုံးပြုပါ။

wizard သည် setup လမ်းကြောင်းနှစ်ခုကို ပံ့ပိုးသည် -

* **Manual credential entry** - သင့်တွင် PayPal API credentials ရှိပြီးသားဖြစ်သောအခါ၊ OAuth setup သည် သင့် Account အတွက် မရရှိနိုင်သောအခါ၊ သို့မဟုတ် PayPal မှ credentials ကို သင်ကိုယ်တိုင် ကူးယူလိုသောအခါ ဤလမ်းကြောင်းကို အသုံးပြုပါ။ API Username, API Password နှင့် API Signature ကို PayPal fields များတွင် ထည့်သွင်းပြီး ငွေပေးချေမှု ဆက်တင်များကို သိမ်းဆည်းပါ။
* **OAuth connection gate** - OAuth ရွေးချယ်မှုကို သင့် install အတွက် ရရှိနိုင်ပြီး ဖွင့်ထားသည့်အခါသာ ဤလမ်းကြောင်းကို အသုံးပြုပါ။ wizard သည် OAuth flow ကို feature flag နောက်ကွယ်တွင် ပြသသောကြောင့် flag မရှိသော networks များသည် manual credential entry fields များကို ဆက်လက်အသုံးပြုသည်။

wizard တွင် OAuth ရွေးချယ်မှုကို မတွေ့ပါက အောက်ပါ manual credential entry flow ကို ပြီးမြောက်အောင် လုပ်ပါ။ gateway သည် ယခင် Ultimate Multisite 2.x ထုတ်ဝေမှုများကဲ့သို့ တူညီသော PayPal Business API credentials ဖြင့် အလုပ်လုပ်သည်။

## PayPal API credentials ရယူခြင်း {#getting-the-paypal-api-credentials}

PayPal ကို ငွေပေးချေမှု gateway အဖြစ် ဖွင့်ပြီးသည်နှင့် PayPal API **Username**၊ PayPal API **Password** နှင့် PayPal API **Signature** အတွက် fields များကို ဖြည့်သွင်းရန် လိုအပ်ပါမည်။

သင့် PayPal [Live](https://www.paypal.com/home) သို့မဟုတ် [Sandbox](https://www.sandbox.paypal.com/home) account သို့ ဝင်ရောက်၍ ၎င်းကို ရယူနိုင်ပါသည်။

(ငွေပေးချေမှုများကို စမ်းသပ်ရန်နှင့် gateway ကို မှန်ကန်စွာ setup လုပ်ထားမထား ကြည့်ရန် **sandbox mode** ကို အသုံးပြုနိုင်ကြောင်း သတိရပါ။ သက်ဆိုင်ရာ အပိုင်းကို ဖွင့်လိုက်ရုံပါပဲ။)

![PayPal API credentials fields နှင့် sandbox mode toggle](/img/config/settings-payment-gateways.png)

သင့် PayPal account အတွက် API Signature သို့မဟုတ် Certificate credentials တောင်းဆိုရန် -

  1. သင့် [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) သို့ သွားပါ။

  2. **API access** အပိုင်းတွင် **Update** ကို နှိပ်ပါ။
![API access အပိုင်းပါသော PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** အောက်တွင် **Manage API credentials** ကို နှိပ်ပါ။
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * API Signature သို့မဟုတ် Certificate ကို ထုတ်ပေးထားပြီးသားဖြစ်ပါက သင့် credentials ကို ရှာတွေ့နိုင်သော စာမျက်နှာသို့ ပြန်ညွှန်းခံရပါမည်။

     * _**မှတ်ချက် -** သင့် PayPal account ကို အတည်ပြုရန် တောင်းဆိုခံရပါက မျက်နှာပြင်ပေါ်ရှိ ညွှန်ကြားချက်များကို လိုက်နာပါ။_

  4. အောက်ပါ ရွေးချယ်မှုများထဲမှ _တစ်ခု_ ကို ရွေးချယ်ပြီး **Agree and Submit** ကို နှိပ်ပါ။

     * **Request API Signature** – API Signature အတည်ပြုခြင်းအတွက် ရွေးချယ်ပါ။

     * **Request API Certificate** – API Certificate အတည်ပြုခြင်းအတွက် ရွေးချယ်ပါ။

  5. PayPal သည် သင့် API credentials ကို အောက်ပါအတိုင်း ထုတ်ပေးပါသည် -
![PayPal မှ ထုတ်ပေးသော API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** တွင် API Username, API Password နှင့် Signature ပါဝင်ပြီး သက်တမ်းမကုန်ပါ။ လုံခြုံရေး ပိုမိုကောင်းမွန်စေရန် ဤတန်ဖိုးများကို ပုံမှန်အားဖြင့် ဖျောက်ထားသည်။ ၎င်းတို့ကို ဖွင့်/ပိတ် ပြောင်းရန် **Show/Hide** ကို နှိပ်ပါ။ ပြီးဆုံးပါက **Done** ကို နှိပ်ပါ။

     * **API Certificate credentials** တွင် API Username, API Password နှင့် Certificate ပါဝင်ပြီး သုံးနှစ်အကြာတွင် အလိုအလျောက် သက်တမ်းကုန်ပါသည်။ API Certificate ကို သင့် desktop တွင် သိမ်းဆည်းရန် **Download Certificate** ကို နှိပ်ပါ။

ဒါပါပဲ၊ သင့် PayPal ငွေပေးချေမှု ချိတ်ဆက်မှု ပြီးမြောက်ပါပြီ။

PayPal ဆက်တင်များနှင့်ပတ်သက်၍ မေးခွန်းများရှိပါက PayPal ၏ [အကူအညီစင်တာ](https://www.paypal.com/br/smarthelp/home) ကို ကိုးကားနိုင်ပါသည်။
