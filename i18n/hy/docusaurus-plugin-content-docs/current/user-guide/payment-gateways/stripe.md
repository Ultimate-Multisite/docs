---
title: Stripe-ի կարգավորումներ
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway-ի Կարգավորում (v2)

_**ԿԱՐԵՎՈՐ ՆՇՈՒՄ. Այս հոդվածը վերաբերում է Ultimate Multisite-ի 2.x տարբերակին։**_

Դուք կարող եք գործարկել մինչև չորս վճարման մեթոդներ՝ մեր վճարումների կարգավորումների էջում. Stripe, Stripe Checkout, PayPal և Մանրամասն (Manual)։ Այս հոդվածում կտեսնենք, թե ինչպես ինտեգրել **Stripe**-ի հետ։

## Stripe-ի Գործարկումը {#enabling-stripe}

Որպեսզի Stripe-ը դառնա որպես հասանելի վճարման գեյթเวย์ ձեր ցանցում, մուտք գործեք **Ultimate Multisite > Settings > Payments** և նշեք przeSWITCH-ը «Active Payment Gateways» բաժնի կողքին՝ **Stripe** կամ **Stripe Checkout**-ի համար։

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Այս մեթոդը կցուցադրի դաշտ՝ քարտի համարը մուտքագրելու համար վճարումների ժամանակ։

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Այս մեթոդը հաճախորդին կկանչի Stripe Checkout էջով վճարման ընթացքում։

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

### Ձեր Stripe API բանալիները ստանալը {#setting-up-stripe-webhook}

Երբ Stripe-ը գործարկված է որպես վճարման գեյթเวย์, անհրաժեշտ կլինեք լրացնել **Stripe Publishable Key** և **Stripe Secret Key** դաշտերը։ Դուք կարող եք սա ստանալ՝ մուտք գործելով ձեր Stripe հաշվի մեջ։

_**Նշում.** Դուք կարող եք գործարկել **Sandbox mode**, որպեսզի ստուգեք, թե արդյոք վճարման մեթոդը աշխատում է։_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Ձեր Stripe dashboard-ում սեղմեք վերին աջ անկյունում **Developers**-ի վրա, ապա ձախ մենյուում՝ **API Keys**-ի։

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Դու կարող ես օգտագործել **Test Data** (որպեսզի ստուգես, թե արդյոք ինտեգրումը աշխատում է քո պրոդուկցիոն կայքում) կամ չօգտագործել։ Սա փոխելու համար անчни **Viewing test data** սвитչը։

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Պատճենիր արժեքները **Publishable key** և **Secret key**-ից, **Token** սյունակից, և տեղադրիր Ultimate Multisite Stripe Gateway-ի դաշտերում։ Այնուհետև սեղմիր՝ **Save Changes**-ի վրա։

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook-ի Կարգավորում

Stripe-ը ուղարկում է webhook իրադարձություն, որոնք Ultimate Multisite-ին տեղեկացնում են ցանկացած իրադարձության դեպքում քո **stripe հաշվի** վրա։

Սեղմիր **Developers**-ի վրա և հետո ընտրիր ձախ մենյուում գտնվող **Webhooks** տարրը։ Այնուհետև աջ կողմում սեղմիր **Add endpoint**-ի վրա *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Քեզ անհրաժեշտ է **Endpoint URL** *.* Ultimate Multisite-ը ավտոմատ կերպով ստեղծում է endpoint URL, որը կարող ես գտնել ուղիղ **Ultimate Multisite Stripe Gateway** բաժնի ներքևում՝ **Webhook Listener URL** դաշտից..._։

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Պատճենիր** endpoint URL-ը և **տեղադրիր** այն Stripe **Endpoint URL** դաշտում։

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Հաջորդը՝ ընտրել **Event** *.* Այս տարբերակի ներքո պարզապես պետք է ստուգես **Select all events** բաժնի չափի տուփը և սեղմիր **Add events**-ի վրա։ Դրանից հետո սեղմիր **Add Endpoint**, որպեսզի փոփոխությունները պահպանվեն։

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Այսքան է, ձեր Stripe գումարման ինտեգրումը պատրաստ է։
