---
title: Stripe স্থাপন কৰা
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway সেটআপ কৰা (v2) {#setting-up-the-stripe-gateway-v2}

_**গুৰুত্বপূৰ্ণ টোকা: এই article টো Ultimate Multisiteৰ version 2.x লৈ বৰ্ণনা কৰে।**_

আপুনি আমাৰ payment settings page-ত চাৰিটা পৰিমাণৰ পেমেন্ট পদ্ধতি (payment methods) সক্ষম কৰিব পাৰে: Stripe, Stripe Checkout, PayPal আৰু Manual। এই article-ত, আমি **Stripe** লগত কেনেকৈ integrate কৰিব লাগে, সেই বিষয়ে জানিম।

## Stripe সক্ষম কৰা {#enabling-stripe}

আপোনাৰ network-ত উপলব্ধ পেমেন্ট গেটৱে হিচাপে Stripe সক্ষম কৰিবলৈ, **Ultimate Multisite > Settings > Payments** मा যাওক আৰু Active Payment Gateways অংশত থকা **Stripe** বা **Stripe Checkout**ৰ কাষত থকা টগলটো (toggle) অন কৰক।

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe বনাম Stripe Checkout: {#stripe-vs-stripe-checkout}

**Stripe:** এই পদ্ধতিটো checkout কৰাৰ সময়ত credit card number প্ৰৱেশ কৰিবলৈ এটা স্থান দেখুৱাব।

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** এই পদ্ধতিটো checkout কৰাৰ সময়ত ग्राहकক Stripe Checkout page লৈ redirect কৰিব।

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

আপোনাৰ Stripe API keys পাবলৈ

Stripe গেটৱে হিচাপে সক্ষম হোৱাৰ পিছত, আপুনি **Stripe Publishable Key** আৰু **Stripe Secret Key**ৰ বাবে ফিল্ডবোৰ পূৰণ কৰিব লাগিব। আপুনি এইবোৰ আপোনাৰ Stripe account লগইন কৰি পাব পাৰে।

_**টোকা:** পেমেন্ট পদ্ধতিটো কাম কৰি আছে নে নাই পৰীক্ষা কৰিবলৈ আপুনি **Sandbox mode** সক্ষম কৰিব পাৰে।_

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

আপোনাৰ Stripe dashboard-ত, ওপৰ-ডান কোণত **Developers** ক্লিক কৰক, আৰু তাৰ পিছত বাম মেনুৰ পৰা **API Keys** ক্লিক কৰক।

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

আপুনি **Test Data** ব্যৱহাৰ কৰিব পাৰে (আপোনাৰ production site-ত integration কাম কৰি আছে নে নাই পৰীক্ষা কৰিবলৈ) বা ব্যৱহাৰ নকৰিব পাৰে। ইয়াৰ বাবে সলনি কৰিবলৈ **Viewing test data** টগলটো টোকা কৰক।

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** আৰু **Secret key**ৰ মানটো **Token** কলামৰ পৰা কপি কৰি Ultimate Multisite Stripe Gateway ফিল্ডত পেষ্ট কৰক। তাৰ পিছত **Save Changes** ক্লিক কৰক।

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook সেটআপ কৰা {#setting-up-stripe-webhook}

Stripe-এ webhook events পঠিয়ায়, যিয়ে Ultimate Multisite-ক কোনো সময়ত **আপোনাৰ stripe account** ত কোনো ঘটনা (event) ঘটিলে জানাই দিয়ে।

**Developers** ক্লিক কৰক আৰু তাৰ পিছত বাম মেনুৰ পৰা **Webhooks** আইটেমটো বাছি লওক। তাৰ পিছত সোঁফাণৰ পিনে **Add endpoint** ক্লিক কৰক *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

আপোনাৰ এটা **Endpoint URL** লাগিব *.* Ultimate Multisite স্বয়ংক্রিয়ভাৱে endpoint URL এটা সৃষ্টি কৰে, যি আপুনি **Ultimate Multisite Stripe Gateway** অংশত **Webhook Listener URL** ফিল্ডৰ ঠিক তলত বিচাৰি পাব।

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

endpoint URL টো **Copy** কৰি Stripe **Endpoint URL** ফিল্ডত **paste** কৰক।

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

পৰৱৰ্তীটো হ'ল এটা **Event** বাছি ল'ব *.* এই বিকল্পৰ তলত, আপুনি কেৱল **Select all events** বক্সটো টোকা কৰিব লাগিব আৰু **Add events** ক্লিক কৰিব লাগিব। তাৰ পিছত সলনি কৰিবলৈ **Add Endpoint** ক্লিক কৰক।

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

এইটোৱেই হ'ল, আপোনাৰ Stripe পেমেন্ট integration সম্পূৰ্ণ!
