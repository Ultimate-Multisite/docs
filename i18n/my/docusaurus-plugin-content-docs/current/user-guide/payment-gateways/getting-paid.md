---
title: ငွေရရှိခြင်း
sidebar_position: 15
_i18n_hash: 8d591eda27cdf7dcd856d9b3c806db00
---
# ငွေရယူခြင်း (v2)

_**မှတ်ချက်အရေးကြီးပါသည်: ဤဆောင်းပါးသည် Ultimate Multisite ဗားရှင်း 2.x ကို ရည်ညွှန်းပါသည်။**_

Ultimate Multisite တွင် အဖွဲ့ဝင်စနစ်နှင့် ငွေတောင်းခံစနစ် ပါဝင်ပါသည်။ ကျွန်ုပ်တို့၏ ငွေတောင်းခံစနစ် အလုပ်လုပ်နိုင်ရန် e-commerce တွင် အသုံးအများဆုံး payment gateway များကို ပေါင်းစပ်ထားပါသည်။ Ultimate Multisite ၏ မူလ payment gateway များမှာ _Stripe_၊ _PayPal_ နှင့် Manual Payment တို့ဖြစ်ပါသည်။ သက်ဆိုင်ရာ add-on များကို ထည့်သွင်းခြင်းဖြင့် _WooCommerce_၊ _GoCardless_ နှင့် _Payfast_ တို့ကိုလည်း ငွေရယူရန် အသုံးပြုနိုင်ပါသည်။

## အခြေခံ ဆက်တင်များ

ဤ payment gateway များထဲမှ မည်သည့်အရာကိုမဆို Ultimate Multisite payment ဆက်တင်များတွင် ပြင်ဆင်သတ်မှတ်နိုင်ပါသည်။ **Ultimate Multisite menu > Settings > Payments** သို့သွားခြင်းဖြင့် ရှာတွေ့နိုင်ပါသည်။

![Ultimate Multisite ရှိ Payment ဆက်တင်စာမျက်နှာ](/img/config/settings-payment-gateways.png)

သင်၏ payment gateway ကို စတင်သတ်မှတ်မီ၊ ပြင်ဆင်သတ်မှတ်နိုင်သော အခြေခံ payment ဆက်တင်များကို ကြည့်ပါ:

**Force auto-renew:** ဤအရာသည် အသုံးပြုသူ ရွေးချယ်ထားသော ငွေတောင်းခံအကြိမ်ရေအပေါ် မူတည်၍ ငွေတောင်းခံသက်တမ်း ကုန်ဆုံးသည့်အခါတိုင်း ငွေပေးချေမှု အလိုအလျောက် ပြန်လည်သက်တမ်းတိုးကြောင်း သေချာစေပါသည်။

![Force auto-renew toggle ဆက်တင်](/img/config/settings-payment-gateways.png)

**Allow trials without payment method:** ဤရွေးချယ်မှုကို ဖွင့်ထားပါက သင်၏ client သည် မှတ်ပုံတင်ခြင်းလုပ်ငန်းစဉ်တွင် ငွေကြေးဆိုင်ရာ အချက်အလက်များ ထည့်သွင်းရန် မလိုပါ။ အစမ်းသုံးကာလ ကုန်ဆုံးမှသာ လိုအပ်ပါမည်။

![Allow trials without payment method toggle](/img/config/settings-payment-gateways.png)

**Send invoice on payment confirmation:** ငွေပေးချေပြီးနောက် ပြေစာပို့မပို့ ရွေးချယ်နိုင်ပါသည်။ အသုံးပြုသူများသည် ၎င်းတို့၏ subsite dashboard အောက်တွင် ငွေပေးချေမှုမှတ်တမ်းကို ကြည့်ရှုနိုင်ကြောင်း သတိပြုပါ။ ဤရွေးချယ်မှုသည် Manual Gateway အတွက် သက်ဆိုင်ခြင်းမရှိပါ။

![Send invoice on payment confirmation toggle](/img/config/settings-payment-gateways.png)

**Invoice numbering scheme:** ဤနေရာတွင် payment reference code သို့မဟုတ် sequential number scheme တစ်ခုခုကို ရွေးချယ်နိုင်ပါသည်။ သင်၏ ပြေစာများအတွက် payment reference code ကို အသုံးပြုရန် ရွေးချယ်ပါက ဘာမှ ပြင်ဆင်သတ်မှတ်ရန် မလိုပါ။ Sequential number scheme ကို အသုံးပြုရန် ရွေးချယ်ပါက **next invoice number** (ဤနံပါတ်သည် စနစ်တွင် ထုတ်ပေးမည့် နောက်ပြေစာအတွက် ပြေစာနံပါတ်အဖြစ် အသုံးပြုပါမည်။ ပြေစာအသစ် ဖန်တီးတိုင်း တစ်ခုတိုးပါသည်။ ၎င်းကို ပြောင်းလဲပြီး သိမ်းဆည်းကာ ပြေစာ sequential number ကို သတ်မှတ်တန်ဖိုးတစ်ခုသို့ ပြန်လည်သတ်မှတ်နိုင်ပါသည်) နှင့် **invoice number prefix** ကို ပြင်ဆင်သတ်မှတ်ရန် လိုအပ်ပါမည်။

![Invoice numbering scheme ရွေးချယ်မှု](/img/config/settings-payment-gateways.png)

![Sequential invoice number နှင့် prefix ဆက်တင်များ](/img/config/settings-payment-gateways.png)

## Gateway များကို ရှာရမည့်နေရာ:

တူညီသော စာမျက်နှာ (**Ultimate Multisite > Settings > Payments**) တွင် payment gateway များကို သတ်မှတ်နိုင်ပါသည်။ **active payment gateways** အောက်တွင် _Stripe_၊ _Stripe Checkout_၊ _PayPal_ နှင့် _Manual_ တို့ကို မြင်ရပါမည်။

![Active payment gateway စာရင်း](/img/config/settings-payment-gateways.png)

Payment gateway တစ်ခုချင်းစီအတွက် သတ်မှတ်ပုံ အဆင့်ဆင့် လမ်းညွှန်ထားသော သီးခြားဆောင်းပါးများ ရှိပါသည်။ အောက်ပါလင့်ခ်များတွင် ရှာတွေ့နိုင်ပါသည်။

**Stripe gateway သတ်မှတ်ခြင်း**

**PayPal gateway သတ်မှတ်ခြင်း**

**Manual payments သတ်မှတ်ခြင်း**

ယခု _WooCommerce_၊ _GoCardless_ သို့မဟုတ် _Payfast_ ကို သင်၏ payment gateway အဖြစ် အသုံးပြုလိုပါက **၎င်းတို့၏ add-on များကို ထည့်သွင်းပြီး ပြင်ဆင်သတ်မှတ်ရန်** လိုအပ်ပါသည်။

### WooCommerce add-on ထည့်သွင်းနည်း:

_Stripe_ နှင့် _PayPal_ သည် နိုင်ငံအချို့တွင် မရရှိနိုင်သဖြင့် Ultimate Multisite အသုံးပြုသူများ ကျွန်ုပ်တို့၏ plugin ကို ထိရောက်စွာ အသုံးပြုရန် အကန့်အသတ်ဖြစ်စေကြောင်း နားလည်ပါသည်။ ထို့ကြောင့် အလွန်ရေပန်းစားသော e-commerce plugin ဖြစ်သည့် _WooCommerce_ နှင့် ပေါင်းစပ်ရန် add-on တစ်ခု ဖန်တီးခဲ့ပါသည်။ ကမ္ဘာတစ်ဝှမ်းမှ developer များသည် မတူညီသော payment gateway များကို ၎င်းနှင့် ပေါင်းစပ်ရန် add-on များ ဖန်တီးထားပါသည်။ Ultimate Multisite ငွေတောင်းခံစနစ်နှင့် အသုံးပြုနိုင်သော payment gateway များ တိုးချဲ့ရန် ဤအခွင့်အရေးကို အသုံးချခဲ့ပါသည်။

_**အရေးကြီး:** Ultimate Multisite: WooCommerce Integration အတွက် WooCommerce ကို အနည်းဆုံး သင်၏ main site တွင် activate လုပ်ထားရန် လိုအပ်ပါသည်။_

ပထမဦးစွာ add-on စာမျက်နှာသို့ သွားပါ။ **Ultimate Multisite > Settings** သို့သွားခြင်းဖြင့် ရှာတွေ့နိုင်ပါသည်။ **Add-ons** ဇယားကို မြင်ရပါမည်။ **Check our Add-ons** ကို နှိပ်ပါ။

![Add-on အပိုင်းပါသော Settings စာမျက်နှာ](/img/config/settings-general.png)

**Check our Add-ons** ကို နှိပ်ပြီးနောက် add-on စာမျက်နှာသို့ ပြန်ညွှန်းပေးပါမည်။ ဤနေရာတွင် Ultimate Multisite add-on အားလုံးကို ရှာတွေ့နိုင်ပါသည်။ **Ultimate Multisite: WooCommerce Integration** add-on ကို နှိပ်ပါ။

![ရနိုင်သော add-on များ ဖော်ပြထားသည့် Add-on စာမျက်နှာ](/img/config/settings-general.png)

Add-on အသေးစိတ်အချက်အလက်များပါသော ဝင်းဒိုး ပေါ်လာပါမည်။ **Install Now** ကို နှိပ်ပါ။

![WooCommerce add-on ထည့်သွင်းခြင်း dialog](/img/config/settings-general.png)

ထည့်သွင်းခြင်း ပြီးဆုံးပြီးနောက် plugin စာမျက်နှာသို့ ပြန်ညွှန်းပေးပါမည်။ ဤနေရာတွင် **Network Activate** ကို နှိပ်ပါက WooCommerce add-on သည် သင်၏ network တွင် activate ဖြစ်သွားပါမည်။

![WooCommerce add-on ကို Network Activate လုပ်ခြင်း](/img/config/settings-general.png)

Activate လုပ်ပြီးနောက် သင်၏ website တွင် WooCommerce plugin ကို ထည့်သွင်းပြီး activate မလုပ်ရသေးပါက သတိပေးချက် လက်ခံရရှိပါမည်။

![WooCommerce activation သတိပေးအသိပေးချက်](/img/config/settings-general.png)

WooCommerce Integration add-on အကြောင်း ပိုမိုဖတ်ရှုရန် **ဤနေရာကို နှိပ်ပါ**။

### GoCardless add-on ထည့်သွင်းနည်း:

_GoCardless_ add-on ထည့်သွင်းရန် အဆင့်များသည် _WooCommerce_ add-on နှင့် အတော်လေး တူညီပါသည်။ Add-on စာမျက်နှာသို့ သွားပြီး **Ultimate Multisite: GoCardless Gateway** add-on ကို ရွေးချယ်ပါ။

![ရနိုင်သော add-on များ ဖော်ပြထားသည့် Add-on စာမျက်နှာ](/img/config/settings-general.png)

Add-on ဝင်းဒိုး ပေါ်လာပါမည်။ **Install Now** ကို နှိပ်ပါ။

![GoCardless add-on ထည့်သွင်းခြင်း dialog](/img/config/settings-general.png)

ထည့်သွင်းခြင်း ပြီးဆုံးပြီးနောက် plugin စာမျက်နှာသို့ ပြန်ညွှန်းပေးပါမည်။ ဤနေရာတွင် **Network Activate** ကို နှိပ်ပါက _GoCardless_ add-on သည် သင်၏ network တွင် activate ဖြစ်သွားပါမည်။

![GoCardless add-on ကို Network Activate လုပ်ခြင်း](/img/config/settings-general.png)

_GoCardless_ gateway စတင်အသုံးပြုနည်း လေ့လာရန် **ဤဆောင်းပါးကို ဖတ်ပါ**။

### Payfast add-on ထည့်သွင်းနည်း:

Add-on စာမျက်နှာသို့ သွားပြီး **Ultimate Multisite: Payfast Gateway** add-on ကို ရွေးချယ်ပါ။

![ရနိုင်သော add-on များ ဖော်ပြထားသည့် Add-on စာမျက်နှာ](/img/config/settings-general.png)

Add-on ဝင်းဒိုး ပေါ်လာပါမည်။ **Install Now** ကို နှိပ်ပါ။

![Payfast add-on ထည့်သွင်းခြင်း dialog](/img/config/settings-general.png)

ထည့်သွင်းခြင်း ပြီးဆုံးပြီးနောက် plugin စာမျက်နှာသို့ ပြန်ညွှန်းပေးပါမည်။ ဤနေရာတွင် **Network Activate** ကို နှိပ်ပါက _Payfast_ add-on သည် သင်၏ network တွင် activate ဖြစ်သွားပါမည်။

![Payfast add-on ကို Network Activate လုပ်ခြင်း](/img/config/settings-general.png)
