---
title: Վճարումներ ստանալ
sidebar_position: 15
_i18n_hash: 0f45bd2eb659d27199ac9f9752e1a8ae
---
# ငွေပေးချေမှုများ (v2)

_**အရေးကြီးမှတ်ချက်- ဤဆောင်းပါးသည် Ultimate Multisite ဗားရှင်း ၂.x ကို ရည်ညွှန်းပါသည်။**_

Ultimate Multisite မှာ ပါဝင်တဲ့ အဖွဲ့ဝင်စနစ်နဲ့ ငွေတောင်းခံတဲ့ စနစ်တစ်ခု ရှိပါတယ်။ ကျွန်တော်တို့ရဲ့ ငွေပေးချေမှုစနစ် အလုပ်လုပ်နိုင်ဖို့အတွက် e-commerce မှာ အသုံးအများဆုံး ငွေပေးချေမှု ဂိတ်ဝေးတွေကို ပေါင်းထည့်ထားပါတယ်။ Ultimate Multisite ရဲ့ ပုံသေ (default) ငွေပေးချေမှုဂိတ်ဝေးတွေက _Stripe_၊ _PayPal_ နဲ့ လက်ဖြင့်ပေးချေခြင်း (Manual Payment) တို့ ဖြစ်ပါတယ်။ သင်ဟာ သူတို့ရဲ့ add-ons တွေကို တင်ပြီး _WooCommerce_၊ _GoCardless_ နဲ့ _Payfast_ ကိုလည်း အသုံးပြုနိုင်ပါတယ်။

## အခြေခံဆက်တင်များ

ဒီငွေပေးချေမှုဂိတ်ဝေးတွေထဲက ဘယ်တစ်ခုကိုမဆို Ultimate Multisite ငွေပေးချေမှု ဆက်တင်တွေအောက်မှာ စီစဉ်ထားနိုင်ပါတယ်။ **Ultimate Multisite menu > Settings > Payments** ကိုသွားပြီး ရှာတွေ့နိုင်ပါတယ်။

![Payments settings page in Ultimate Multisite showing the Payments panel](/img/config/payments-settings-page.png)

သင့်ရဲ့ ငွေပေးချေမှုဂိတ်ဝေးကို စတင်ပြင်ဆင်တဲ့အခါမှာ သင်ချိန်ညှိနိုင်တဲ့ အခြေခံငွေပေးချေမှု ဆက်တင်တွေကို ကြည့်ရှုဖို့ အကြံပြုလိုပါတယ်။

**Force auto-rene (အလိုအလျောက် ပြန်လည်သက်တမ်းတိုးရန်အတင်းအကျပ်လုပ်ခြင်း)** **w:** ဒါက သုံးစွဲသူ ရွေးချယ်ထားတဲ့ ငွေတောင်းခံမှု အကြိမ်ရေပေါ် မူတည်ပြီး ဘေလ်တိုင်းရဲ့ အဆုံးမှာ ငွေပေးချေမှုဟာ အလိုအလျောက် ပြန်လည်ဖြစ်လာစေဖို့ သေချာစေပါတယ်။

<!-- Screenshot unavailable: Force Auto-Renew toggle setting on the Payments settings page -->

Ultimate Multisite v2.13.0 က အလိုအလျောက် ပြန်လည်သက်တမ်းတိုးမှု (auto-renewal) ကို ဖွင့်ထားတဲ့ စာရင်းတစ်ခုကို သိမ်းဆည်းဖို့ မစခင်မှာ အသုံးပြုနေတဲ့ ဂိတ်ဝေးက ပြန်သုံးလို့ရတဲ့ သက်တမ်းတိုးခွင့် အထောက်အထား (reusable renewal credential) ရှိ/မရှိ စစ်ဆေးပါတယ်။ ဒီပြန်လည်သက်တမ်းတိုးခွင့် အထောက်အထားဆိုတာ ဂိတ်ဝေး စာရင်းပေးသွင်းမှု၊ ဘေလ်သဘောတူညီချက်၊ သိမ်းဆည်းထားတဲ့ vault token ဒါမှမဟုတ် အလားတူ ပြန်သုံးလို့ရတဲ့ ငွေပေးချေမှု နည်းလမ်းတစ်ခု ဖြစ်နိုင်ပါတယ်။ ဂိတ်ဝေးက သုံးစွဲလို့မရတဲ့ အထောက်အထား မရှိဘူးလို့ အစီရင်ခံလာရင် Ultimate Multisite က အဖွဲ့ဝင်ကို သိမ်းဆည်းပေမယ့် auto-renewal ကို ပိတ်ပြီး လိုအပ်တဲ့ အထောက်အထား မရှိတဲ့ အခြေအနေကို မှတ်တမ်းတင်ပေးပါလိမ့်မယ်။ ဒါမှ စီမံခန့်ခွဲသူ (administrator) သို့မဟုတ် support ဝန်ဆောင်မှုက ပြန်လည်သက်တမ်းတိုးရမယ့် ရက်မတိုင်ခင်မှာ ဖောက်သည်ကို ငွေပေးချေမှုကို ပြန်အတည်ပြုဖို့ မေးမြန်းနိုင်ပါလိမ့်မယ်။

Սա կանխում է, որ անդամակցությունը չհայտնվի ինքնաբերաբար վերականգնվող (auto-renew)՝ եթե գේట్‌වේը կարող է ընդունել միայն մեկ անգամ վճարում։ Գේట్‌վեի ավելացումները պետք է հաստատեն, որ կրկնվող վճարումները պահում են վերականգտվող (reusable) գանձարանային տվյալներ (credential), հատկապես այն դեպքում, երբ գේట్‌վեը աջակցում է ինչպես մեկ անգամ ընդունման (one-time capture) և վերահանված/անցագրելի (vaulted/subscription) վճարման ռեժիմներին։

**Թույլ տալ փորձարկում առանց վճարման մեթոդի:** Այս տարբերակը 켜նելով, ձեր հաճախորդը չի պետք լինի գրանցման ընթացքում ավելացնի որևէ ֆինանսական տեղեկություն։ Սա կպահանջվի միայն փորձարկման ժամկետը վերջացած հետո։

<!-- Screenshot unavailable: Allow Trials Without Payment Method toggle on the Payments settings page -->

**Ինչպես ուղարկել հաշիվ վճարումից հետո:** Սա ձեզ տալիս է տարբերակ՝ որ վճարումից հետո ուղարկել հաշիվ ինֆոյս (invoice) թե ոչ։ Նկատի ունեցեք, որ օգտվողները կունենան իրենց վճարման պատմության մուտքը իրենց ենթա-сайթի դաշտից (subsite dashboard)։ Այս տարբերակը չի կիրառվում Ձեռքով գේట్‌վեի (Manual Gateway) համար։

<!-- Screenshot unavailable: Send Invoice on Payment Confirmation toggle on the Payments settings page -->

**Հաշվի համարի սխեմա:** Այստեղ կարող եք ընտրել կամ վճարման հղման կոդ (payment reference code), կամ հաջորդական թվերի սխեմա։ Եթե որոշեք օգտագործել վճարման հղման կոդ Ձեր հաշիվների համար, ձեզ պետք չէ ոչ մի բան կարգավորել։ Եթե ընտրում եք հաջորդական թվերի սխեմա, ապա պետք է կարգավորեք **հաջորդ հաշվի համարը** (Այս թիվը կօգտագործվի որպես հաջորդ գեներացված հաշվի համար։ Այն մեկ անգամ մեծանում է յուրաքանչյուր նոր հաշիվ ստեղծելիս։ Դուք կարող եք այն փոխել և պահել՝ հաշվի հաջորդական թիվը վերադարձնելով կոնկրետ արժեքին) և **հաշվի համարի նախածանցը (prefix)**։

<!-- Screenshot unavailable: Invoice numbering scheme dropdown with Payment Reference Code and Sequential Number options -->

<!-- Screenshot unavailable: Next invoice number and invoice number prefix fields shown when Sequential Number is selected -->

## Գտնել գේట్‌վեյերը:

Դուք կարող եք վճարումների գේట్‌վեյերը սահմանել նույն էջում (**Ultimate Multisite > Settings > Payments**): **Active payment gateways** (ակտիվ վճարումների գේట్‌վեյեր) տեղի անմիջապես ներքևում կարող եք տեսնել՝ _Stripe_ , _Stripe_ Checkout, _PayPal_ և _Manual_։

![Active Payment Gateways section listing Stripe, Stripe Checkout, PayPal and Manual](/img/config/payments-active-gateways.png)

Յուրաքանչյուր վճարումների գේట్‌վեյի համար մենք հատուկ հոդված ենք պատրաստել, որը կուղղակի ձեզ կցուցի դրա սահմանման քայլերը։ Այն կարող եք գտնել ներքևում տրված հղումներով:

Դուք կարող եք տեսնել և խմբագրել վճարումների մանրամասները.

![Payment edit interface](/img/admin/payment-edit.png)

Ահա վճարումների խմբագրման էջի ամբողջական տեսքը:

![Payment edit full interface](/img/admin/payment-edit-full.png)

Ահա նույնը՝ վճարումների գේట్‌վեյերի կարգավորումների ամբողջական տեսքը.

![Payment gateways settings full page](/img/config/settings-payments-gateways-full.png)

**Stripe գේట్‌վեյի սահմանումը**

**PayPal գේట్‌վեյի սահմանումը**** **

**Մանրամասն վճարումների սահմանումը**

Այժմ, եթե ցանկանում եք օգտագործել _WooCommerce_ , _GoCardless_ կամ _Payfast_ որպես ձեր վճարումների գේట్‌վեյ, ապա անհրաժեշտ կլինի դրանց **add-ons** (ավելացուցիչ) տեղադրել և կոնֆիգուրացնել:

### Ինչպես տեղադրել WooCommerce add-on-ը.

Մենք հասկանում ենք, որ _Stripe_ և _PayPal_ գործում չեն որոշ երկրներում, ինչը սահմանափակում է Ultimate Multisite օգտվողներին մեր պլագինի արդյունավետ կիրառման համար: Հետևաբար, մենք ստեղծել ենք add-on՝ WooCommerce-ը ինտեգրելու համար, որը շատ հայտնի էլեկտրոնային առևտրի պլագին է։ Աշխարհի բազմաթիվ մշակողներ ստեղծել են add-ons այնպես, որ ինտեգրեն տարբեր վճարումների գේట్‌վեյերը դրա հետ: Մենք օգտվել ենք դրանից՝ ընդլայնելու այն վճարումների գේట్‌վեյերը, որոնք կարող եք օգտագործել Ultimate Multisite հաշվարկային համակարգի հետ։

**ԿԱՐԵՎՈՐ.** Ultimate Multisite-ի՝ WooCommerce-ի հետ ինտեգրումը պահանջում է, որ WooCommerce-ը լինի գոնե ձեր հիմնական կայքում ակտիվացված։

Նախ, խնդրում ենք գնալ add-ons (ավելացումներ) էջ։ Դուք կարող եք այն գտնել՝ գնալով **Ultimate Multisite > Settings**-ը։ Դուք կտեսնեք **Add-ons** աղյուսակը։ Կտեղի ունենա **Check our Add-ons** (Ստուգել մեր ավելացումները) վրա։

<!-- Screenshot unavailable: Ultimate Multisite Settings sidebar-ի add-ons աղյուսակը՝ Check our Add-ons հղումով -->

**Check our Add-ons**-ը սեղմելուց հետո դուք կկանչվեք add-ons էջ։ Այստեղ կարող եք գտնել բոլոր Ultimate Multisite ավելացումները։ Կտեղի ունենա **Ultimate Multisite: WooCommerce Integration** (Ultimate Multisite: WooCommerce-ի ինտեգրում) ավելացման վրա։

![Add-ons էջը, որը ներկայացնում է Ultimate Multisite add-ons՝ WooCommerce Integration-ով](/img/addons/addons-page.png)

Մուտքագրվի պատուհան մոդուլի մանրամասները։ Պարզապես սեղմեք **Install Now** (Տեղադրել հիմա) վրա։

<!-- Screenshot unavailable: Ultimate Multisite WooCommerce Integration add-on-ի մանրամասների դիալոգը՝ Install Now կոճակով -->

Տեղադրումը ավարտվելուց հետո դուք կկանչվեք plugins (պլագիններ) էջ։ Այստեղ պարզապես սեղմեք **Network Activate** (Ցանցով ակտիվացնել), և WooCommerce add-on-ը ակտիվացվելու է ձեր ցանցում։

<!-- Screenshot unavailable: Plugins էջը՝ WooCommerce Integration add-on-ի Network Activate հղումով -->

Ակտիվացնելուց հետո, եթե դեռ չունեք WooCommerce պլագինը տեղադրված և ակտիվացված ձեր կայքում, դուք ստանաք հիշեցում։

<!-- Screenshot unavailable: Admin-ի հաղորդագրությունը՝ վարչականին հիշեցնելով WooCommerce պլագինը տեղադրելու և ակտիվացնելու մասին -->

Ավելի շատ տեղեկություն ստանալու համար **սեղմեք այստեղ**։

### Ինչպես տեղադրել GoCardless add-on-ը:

_GoCardless_ add-on-ը տեղադրելու քայլերը գրեթե նույնն են, ինչ _WooCommerce_ add-on-ի համար։ Գնացեք add-ons էջը և ընտրեք **Ultimate Multisite: GoCardless Gateway** add-on-ը։

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite GoCardless Gateway add-on highlighted -->

Բաց կ될 է add-on պատուհանը։ Կտեղադրեք **Install Now** (Տեղադրել հիմա)։

<!-- Screenshot unavailable: Ultimate Multisite GoCardless Gateway add-on details dialog with Install Now button -->

Տեղադրումը ավարտվելուց հետո կկանչվեք plugins էջին։ Այստեղ պարզապես սեղմեք **Network Activate** (Ցանցի ակտիվացնել), և _GoCardless_ add-on-ը ակտիվացվելու է ձեր ցանցում։

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the GoCardless Gateway add-on -->

Ինչպես սկսել օգտագործել _GoCardless_ gateway-ը, **կարդացեք այս հոդվածը**։

### Ինչպե՞ս տեղադրել Payfast add-on-ը:

Գնացեք add-ons էջը և ընտրեք **Ultimate Multisite: Payfast Gateway** add-on-ը։

<!-- Screenshot unavailable: Add-ons page with the Ultimate Multisite Payfast Gateway add-on highlighted -->

Բաց կ될 է add-on պատուհանը։ Կտեղադրեք **Install Now** (Տեղադրել հիմա)։

<!-- Screenshot unavailable: Ultimate Multisite Payfast Gateway add-on details dialog with Install Now button -->

Տեղադրումը ավարտվելուց հետո կկանչվեք plugins էջին։ Այստեղ պարզապես սեղմեք **Network Activate** (Ցանցի ակտիվացնել), և _Payfast_ add-on-ը ակտիվացվելու է ձեր ցանցում։

<!-- Screenshot unavailable: Plugins page with the Network Activate link for the Payfast Gateway add-on -->
