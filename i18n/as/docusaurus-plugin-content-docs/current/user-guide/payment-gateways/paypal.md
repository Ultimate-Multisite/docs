---
title: PayPal সেট কৰা
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal গেটৱে সেট কৰা (v2)

_**গুৰুত্বপূৰ্ণ টোকা: এই article টি Ultimate Multisiteৰ version 2.x লৈ কথা পাতে।**_

আপুনি আমাৰ payment settings page ত Stripe, Stripe Checkout, PayPal আৰু Manual—এই চাৰিটা পৰিশোধৰ পদ্ধতি সক্ষম কৰিব পাৰে। এই article ত, আমি **PayPal** লগত কেনেকৈ integrate কৰিব লাগে, সেই বিষয়ে দেখুৱাব।

Stripeৰ দৰেই, PayPal অনলাইন পৰিশোধৰ বাবে বহুলভাৱে ব্যৱহৃত হয়, বিশেষকৈ WordPress ওয়েবসাইটত। এই article টোৱে আপোনাৰ network ত উপলব্ধ PayPal কেনেকৈ ব্যৱহাৰ কৰিব লাগে, সেই বিষয়ে নিৰ্দেশনা দিয়ে।

মন কৰিবলগীয়া যে এই integration-ৰ বাবে প্ৰয়োজনীয় API credential পোৱাৰ বাবে আপোনাৰ এটা **PayPal Business account** থাকিব লাগিব।

## আপোনাৰ network ত PayPal সক্ষম কৰা {#enabling-paypal-on-your-network}

আপোনাৰ network ত উপলব্ধ পৰিশোধৰ পদ্ধতি হিচাপে PayPal সক্ষম কৰিবলৈ, **Ultimate Multisite > Settings > Payments** টোৱে যাওক আৰু PayPalৰ কাষত থকা বক্সটো টিক কৰক।

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## নিৰ্দেশিত setup wizard ব্যৱহাৰ কৰা {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 ले payment gateway settings ত এটা নিৰ্দেশিত PayPal setup wizard যোগ কৰিছে। আপুনি PayPal সক্ষম কৰাৰ পিছত, **Ultimate Multisite > Settings > Payments** ত থকা wizard টো ব্যৱহাৰ কৰি gateway টি কেনেকৈ সংযোগ কৰিব লাগে আৰু save কৰাৰ আগতে কোন কোন credentials আজিও লাগিব, সেইটো নিশ্চিত কৰক।

wizard টোৱে দুটা setup পথ সমৰ্থন কৰে:

* **Manual credential entry**: এই পথটো ব্যৱহাৰ কৰক যেতিয়া আপোনাৰ ওচৰত ইতিমধ্যে PayPal API credentials আছে, যেতিয়া আপোনাৰ account-ৰ বাবে OAuth setup উপলব্ধ নহয়, বা যেতিয়া আপুনি নিজে PayPalৰ পৰা credentials কপি কৰিবলৈ পছন্দ কৰে। PayPal field-ত API Username, API Password, আৰু API Signature ভৰাই, তাৰ পিছত payment settings save কৰক।
* **OAuth connection gate**: এই পথটো কেৱল তেতিয়াহে ব্যৱহাৰ কৰক যেতিয়া OAuth বিকল্পটো উপলব্ধ আৰু আপোনাৰ install-ৰ বাবে সক্ষম কৰা হৈছে। wizard টোৱে এটা feature flagৰ আঁৰত OAuth flow দেখুৱায়, গতিকে flag নথকা network-সমূহে manual credential entry field ব্যৱহাৰ কৰি থাকে।

যদি আপুনি wizard ত OAuth বিকল্পটো নদেখি পায়, তেন্তে তলত দিয়া manual credential entry flow টি সম্পূৰ্ণ কৰক। এই gateway টো পূৰ্বৰ Ultimate Multisite 2.x release-সমূহৰ দৰেই PayPal Business API credentials লৈ কাম কৰে।

## PayPal API credentials পোৱা {#getting-the-paypal-api-credentials}

PayPal এটা payment gateway হিচাপে সক্ষম কৰাৰ পিছত, আপোনাক PayPal API **Username** , PayPal API **Password** আৰু PayPal API **Signature** field-সমূহ ভৰাবলগীয়া হ'ব।

আপুনি PayPal-ৰ [Live](https://www.paypal.com/home) বা [Sandbox](https://www.sandbox.paypal.com/home) account লগইন কৰি ইয়াক পোৱা যায়।

(মনে ৰাখিব যে পৰিশোধ পৰীক্ষা কৰিবলৈ আৰু gateway টি সঠিকভাৱে setup হৈছে নে নাই দেখাৰ বাবে আপুনি **sandbox mode** ব্যৱহাৰ কৰিব পাৰে। কেৱল সংশ্লিষ্ট section টো toggle কৰক।)

![PayPal API credentials fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

আপোনাৰ PayPal account-ৰ বাবে API Signature বা Certificate credentials অনুৰোধ কৰিবলৈ:

  1. আপোনাৰ [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) লৈ যাওক।

  2. **API access** section ত, **Update** ক্লিক কৰক।
![PayPal Account Settings with API access section](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** তলত, **Manage API credentials** ক্লিক কৰক।
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * যদি আপুনি ইতিমধ্যে এটা API Signature বা Certificate generate কৰিছে, তেন্তে আপোনাক এটা page লৈ redirect কৰা হ'ব য'ত আপোনাৰ credentials পোৱা যাব।

     * _**টোকা:** যদি আপোনাক আপোনাৰ PayPal account verify কৰিবলৈ কোৱা হয়, তেন্তে স্ক্রিনত দিয়া নিৰ্দেশনা অনুসৰণ কৰক।_

  4. তলৰ বিকল্পসমূহৰ ভিতৰৰ পৰা *এটা* বাছি লওক, তাৰ পিছত **Agree and Submit** ক্লিক কৰক।

     * **Request API Signature** – API Signature authentication-ৰ বাবে বাছি লওক।

     * **Request API Certificate** – API Certificate authentication-ৰ বাবে বাছি লওক।

  5. PayPal তলত দিয়া ধৰণে আপোনাৰ API credentials generate কৰে:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** ত এটা API Username, API Password, আৰু Signature থাকে, যিটো মলাট নহয়। এই মানবোৰ অধিক নিৰাপত্তাৰ বাবে ডিফল্টভাৱে লুকুৱাই থোৱা হয়। ইয়াক toggle কৰিবলৈ **Show/Hide** ক্লিক কৰক। শেষ কৰাৰ পিছত, **Done** ক্লিক কৰক।

     * **API Certificate credentials** ত এটা API Username, API Password, আৰু Certificate থাকে, যিটো তিনি বছৰৰ পিছত স্বয়ংক্রিয়ভাৱে মলাট হয়। API Certificate টি আপোনাৰ desktop ত সেভ কৰিবলৈ **Download Certificate** ক্লিক কৰক।

এইটোৱেই হ'ল, আপোনাৰ PayPal payment integration সম্পূৰ্ণ!

PayPal settings সম্পৰ্কে কোনো প্ৰশ্ন থাকিলে, আপুনি PayPal-ৰ [Help Center](https://www.paypal.com/br/smarthelp/home) ত ব্যৱহাৰ কৰিব পাৰে।
