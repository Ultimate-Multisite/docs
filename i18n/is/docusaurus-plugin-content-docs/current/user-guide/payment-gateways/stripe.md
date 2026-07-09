---
title: Innstillingar fyrir Stripe
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Innstilling av Stripe Gateway (v2) {#setting-up-the-stripe-gateway-v2}

_**VIKTIG MERKNAD: Þessi grein er tengd Ultimate Multisite útgáfu 2.x.**_

Þú getur aktívað upp til fjórar betalingsformhæðir á síðunni fyrir betalingsinnstillingar okkur: Stripe, Stripe Checkout, PayPal og Manuell. Í þessri greinin sjáum hvernig við tengjum okkur **Stripe**.

## Aktíva Stripe {#enabling-stripe}

Til að aktíva Stripe sem tilfóstur betalingshæðir á netinu þitt, ferðu yfir í **Ultimate Multisite > Settings > Payments** og vickingja (tick) htaggann við **Stripe** eða **Stripe Checkout** í hluta Active Payment Gateways.

![Aktíva Stripe í aktíva betalingshæðir](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** Þessi formhæð er til að sýna stað til að setja niður kortnúmer við launið.

![Stripe innri kortfeldi á launiði](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Þessi formhæð er til að leysa viðskiptavininn yfir í Stripe Checkout síðu á launiði.

![Stripe Checkout leiðarútsýn á launiði](/img/config/settings-payment-gateways.png)

**Aflist þínum Stripe API key-jum**

Eftir að Stripe sé aktívað sem betalingshæðir, þurfa þú að fylla út feldi fyrir **Stripe Publishable Key** og **Stripe Secret Key**. Þú getur fátt þetta með því að logga inn í Stripe reikninginn þinn.

_**Athugi:** Þú getur aktívað **Sandbox mode** til að prófa hvort betalingsformhæðin virkar._

![Feldi fyrir Stripe API key og Sandbox mode vickingja](/img/config/settings-payment-gateways.png)

Á Stripe dashboard þínu, klikka á **Developers** í hvíldu upp á hvíta hjörnu, og svo á **API Keys** í vinstri menubúnaði.

![Stripe dashboard Developers hluti með API keys](/img/config/settings-payment-gateways.png)

Þú getur nota **Test Data** (til að prófa hvort tengingin virkar á produkteinsitið þitt) eða ekki. Til að breyta þessum er þú getur skipt tilbúinnar **Viewing test data** togglinni.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

Kopla gildi úr **Publishable key** og **Secret key**, frá stöðu **Token**, og set það í felgja fyrir Stripe Gateway á Ultimate Multisite. Þar eftir klikkaðu á **Save Changes**.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Uppsetning Webhook fyrir Stripe {#setting-up-stripe-webhook}

Stripe sendir webhook hændlestar sem tilkynna Ultimate Multisite hvorkerið eitthvað skipti í **stripe reikninginn þinn**.

Klikkaðu á **Developers** og veldu síðan **Webhooks** í menulinum yraum. Þar eftir klikkaðu á **Add endpoint** á hönnunni til vinstri hálfu. *

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Þú þarft einn **Endpoint URL**. Ultimate Multisite skapar sjálf án Endpoint URL sem þú getur finna strax undir stöðu **Webhook Listener URL** í hluta **Ultimate Multisite Stripe Gateway**._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

**Kopla** endpoint URL og **set** þann í felgja fyrir Stripe **Endpoint URL**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Næst er að velja **Event**. Undir þessum vali þarftu bara að vera með ákvörðinni **Select all events** og klikka á **Add events**. Í eftir þess klikkaðu á **Add Endpoint** til að fari í lagabréf.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Það er svo, þín Stripe betalingssamþætting er fullborgð!
