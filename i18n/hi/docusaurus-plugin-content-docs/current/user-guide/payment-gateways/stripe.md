---
title: Stripe सेट अप करना
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway सेटअप करना (v2)

_**महत्वपूर्ण नोट: यह लेख Ultimate Multisite version 2.x के लिए है।**_

आप हमारे payment settings पेज पर चार payment methods तक activate कर सकते हैं: Stripe, Stripe Checkout, PayPal और Manual। इस लेख में, हम देखेंगे कि **Stripe** को कैसे integrate करें।

## Stripe Enable करना

अपने network पर Stripe को available payment gateway के रूप में enable करने के लिए, **Ultimate Multisite > Settings > Payments** पर जाएं और Active Payment Gateways section में **Stripe** या **Stripe Checkout** के बगल वाले toggle को tick करें।

![Active payment gateways में Stripe enable करना](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** यह method checkout के दौरान credit card number डालने के लिए एक जगह दिखाएगा।

![Checkout के दौरान Stripe inline credit card field](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** यह method checkout के दौरान customer को Stripe Checkout पेज पर redirect करेगा।

![Checkout के दौरान Stripe Checkout redirect पेज](/img/config/settings-payment-gateways.png)

अपनी Stripe API keys प्राप्त करना

जब Stripe को payment gateway के रूप में enable कर दिया जाता है, तो आपको **Stripe Publishable Key** और **Stripe Secret Key** के fields भरने होंगे। आप इन्हें अपने Stripe account में login करके प्राप्त कर सकते हैं।

_**नोट:** आप **Sandbox mode** activate करके test कर सकते हैं कि payment method सही से काम कर रहा है या नहीं।_

![Stripe API key fields और sandbox mode toggle](/img/config/settings-payment-gateways.png)

अपने Stripe dashboard पर, ऊपर-दाएं कोने में **Developers** पर click करें, और फिर बाएं menu में **API Keys** पर click करें।

![Stripe dashboard Developers section जिसमें API Keys है](/img/config/settings-payment-gateways.png)

आप **Test Data** use कर सकते हैं (यह test करने के लिए कि integration आपकी production site पर काम कर रहा है) या नहीं। इसे बदलने के लिए, **Viewing test data** toggle को switch करें।

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Token** column से **Publishable key** और **Secret key** की value copy करें और Ultimate Multisite Stripe Gateway fields में paste करें। फिर **Save Changes** पर click करें।

![Stripe publishable और secret key values](/img/config/settings-payment-gateways.png)

![Ultimate Multisite settings में Stripe keys paste करना](/img/config/settings-payment-gateways.png)

## Stripe Webhook सेटअप करना

Stripe webhook events भेजता है जो Ultimate Multisite को notify करते हैं जब भी **आपके stripe account** पर कोई event होता है।

**Developers** पर click करें और फिर बाएं menu में **Webhooks** item चुनें। फिर दाईं ओर **Add endpoint** पर click करें।

![Stripe Webhooks पेज जिसमें Add endpoint button है](/img/config/settings-payment-gateways.png)

आपको एक **Endpoint URL** की जरूरत होगी। Ultimate Multisite automatically endpoint URL generate करता है जो आप **Ultimate Multisite Stripe Gateway** section में **Webhook Listener URL** field के ठीक नीचे पा सकते हैं।

![Stripe gateway settings में Webhook Listener URL field](/img/config/settings-payment-gateways.png)

Endpoint URL को **Copy** करें और Stripe के **Endpoint URL** field में **paste** करें।

![Stripe webhook setup में endpoint URL paste करना](/img/config/settings-payment-gateways.png)

अगला step एक **Event** select करना है। इस option के अंतर्गत, आपको बस **Select all events** box check करना है और **Add events** पर click करना है। उसके बाद changes save करने के लिए **Add Endpoint** पर click करें।

![सभी events select करना और Stripe endpoint add करना](/img/config/settings-payment-gateways.png)

बस इतना ही, आपका Stripe payment integration पूरा हो गया!
