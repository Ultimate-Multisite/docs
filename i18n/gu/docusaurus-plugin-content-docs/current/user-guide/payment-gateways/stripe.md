---
title: Stripe સેટ કરવું
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe ગેટવે સેટઅપ કરવું (v2)

_**મહત્વની નોંધ: આ લેખ Ultimate Multisite version 2.x માટે છે.**_

તમે અમારા payment settings પેજ પર ચાર payment methods સુધી activate કરી શકો છો: Stripe, Stripe Checkout, PayPal અને Manual. આ લેખમાં, આપણે **Stripe** સાથે કેવી રીતે integrate કરવું તે જોઈશું.

## Stripe Enable કરવું

તમારા network પર Stripe ને available payment gateway તરીકે enable કરવા માટે, **Ultimate Multisite > Settings > Payments** પર જાઓ અને Active Payment Gateways section માં **Stripe** અથવા **Stripe Checkout** ની બાજુના toggle પર ટિક કરો.

![Active payment gateways માં Stripe enable કરવું](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** આ method checkout દરમિયાન credit card number દાખલ કરવા માટે જગ્યા બતાવશે.

![Checkout દરમિયાન Stripe inline credit card field](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** આ method checkout દરમિયાન customer ને Stripe Checkout પેજ પર redirect કરશે.

![Checkout દરમિયાન Stripe Checkout redirect પેજ](/img/config/settings-payment-gateways.png)

તમારી Stripe API keys મેળવવી

એકવાર Stripe payment gateway તરીકે enable થઈ જાય, પછી તમારે **Stripe Publishable Key** અને **Stripe Secret Key** માટેના fields ભરવા પડશે. તમે તમારા Stripe account માં login કરીને આ મેળવી શકો છો.

_**નોંધ:** payment method કામ કરે છે કે નહીં તે test કરવા માટે તમે **Sandbox mode** activate કરી શકો છો._

![Stripe API key fields અને sandbox mode toggle](/img/config/settings-payment-gateways.png)

તમારા Stripe dashboard પર, ઉપર-જમણા ખૂણામાં **Developers** પર click કરો, અને પછી ડાબી menu માં **API Keys** પર click કરો.

![API Keys સાથે Stripe dashboard Developers section](/img/config/settings-payment-gateways.png)

તમે **Test Data** વાપરી શકો છો (તમારી production site પર integration કામ કરે છે કે નહીં તે test કરવા માટે) અથવા નહીં. આ બદલવા માટે, **Viewing test data** toggle ને switch કરો.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Token** column માંથી **Publishable key** અને **Secret key** ની value copy કરો અને Ultimate Multisite Stripe Gateway fields માં paste કરો. પછી **Save Changes** પર click કરો.

![Stripe publishable અને secret key values](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings માં Stripe keys paste કરવી](/img/config/settings-payment-gateways.png)

## Stripe Webhook સેટઅપ કરવું

Stripe webhook events મોકલે છે જે **તમારા stripe account** પર કોઈ પણ event થાય ત્યારે Ultimate Multisite ને notify કરે છે.

**Developers** પર click કરો અને પછી ડાબી menu માં **Webhooks** item પસંદ કરો. પછી જમણી બાજુએ **Add endpoint** પર click કરો.

![Add endpoint button સાથે Stripe Webhooks પેજ](/img/config/settings-payment-gateways.png)

તમને **Endpoint URL** ની જરૂર પડશે. Ultimate Multisite automatically endpoint URL generate કરે છે જે તમે **Ultimate Multisite Stripe Gateway** section માં **Webhook Listener URL** field ની નીચે શોધી શકો છો.

![Stripe gateway settings માં Webhook Listener URL field](/img/config/settings-payment-gateways.png)

Endpoint URL **copy** કરો અને Stripe **Endpoint URL** field માં **paste** કરો.

![Stripe webhook setup માં endpoint URL paste કરવું](/img/config/settings-payment-gateways.png)

આગળનું પગલું **Event** select કરવાનું છે. આ option હેઠળ, તમારે ફક્ત **Select all events** box check કરવું પડશે અને **Add events** પર click કરવું પડશે. તે પછી changes save કરવા માટે **Add Endpoint** પર click કરો.

![બધા events select કરવા અને Stripe endpoint add કરવું](/img/config/settings-payment-gateways.png)

બસ, તમારું Stripe payment integration પૂર્ણ થયું!
