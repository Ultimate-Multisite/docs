---
title: PayPal সেট আপ করা
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# PayPal Gateway (v2) সেট আপ করা

_**গুরুত্বপূর্ণ নোট: এই প্রবন্ধটি Ultimate Multisite সংস্করণ 2.x সম্পর্কে।**_

আমাদের পেমেন্ট সেটিংস পৃষ্ঠায় আপনি পেমেন্টের সর্বোচ্চ চারটি পদ্ধতি সক্রিয় করতে পারেন: Stripe, Stripe Checkout, PayPal এবং ম্যানুয়াল। এই প্রবন্ধে আমরা দেখব কীভাবে **PayPal**-এর সঙ্গে ইন্টিগ্রেট করতে হয়।

Stripe-এর মতোই, PayPal অনলাইন পেমেন্টের জন্য ব্যাপকভাবে ব্যবহৃত হয়, বিশেষ করে WordPress ওয়েবসাইটে। আপনার নেটওয়ার্কে উপলভ্য পেমেন্ট পদ্ধতি হিসেবে PayPal কীভাবে ব্যবহার করবেন, এই প্রবন্ধটি আপনাকে তা দেখাবে।

মনে রাখবেন, এই ইন্টিগ্রেশনের জন্য প্রয়োজনীয় API credential পেতে আপনার একটি **PayPal Business account** থাকতে হবে।

## আপনার নেটওয়ার্কে PayPal সক্রিয় করা {#enabling-paypal-on-your-network}

আপনার নেটওয়ার্কে PayPal-কে উপলভ্য পেমেন্ট পদ্ধতি হিসেবে সক্রিয় করতে, **Ultimate Multisite > Settings > Payments** ট্যাবে যান এবং PayPal-এর পাশের বাক্সে টিক দিন।

![সক্রিয় পেমেন্ট gateway-এ PayPal সক্রিয় করা](/img/config/settings-payment-gateways.png)

## নির্দেশিত সেটআপ wizard ব্যবহার করা {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 পেমেন্ট gateway সেটিংসে একটি নির্দেশিত PayPal সেটআপ wizard যোগ করে। PayPal সক্রিয় করার পরে, **Ultimate Multisite > Settings > Payments**-এ wizard ব্যবহার করে gateway কীভাবে সংযোগ করতে চান তা বেছে নিন এবং সংরক্ষণের আগে কোন credential এখনও প্রয়োজন তা নিশ্চিত করুন।

wizard দুটি সেটআপ পথ সমর্থন করে:

* **ম্যানুয়াল credential entry**: যখন আপনার কাছে ইতিমধ্যেই PayPal API credential আছে, যখন আপনার account-এর জন্য OAuth সেটআপ উপলভ্য নয়, অথবা যখন আপনি নিজেই PayPal থেকে credential কপি করতে চান, তখন এই পথ ব্যবহার করুন। PayPal ফিল্ডগুলোতে API Username, API Password এবং API Signature লিখুন, তারপর পেমেন্ট সেটিংস সংরক্ষণ করুন।
* **OAuth connection gate**: এই পথ কেবল তখনই ব্যবহার করুন, যখন আপনার install-এর জন্য OAuth option উপলভ্য এবং সক্রিয় থাকে। wizard একটি feature flag-এর আড়ালে OAuth flow দেখায়, তাই flag ছাড়া নেটওয়ার্কগুলো ম্যানুয়াল credential entry ফিল্ড ব্যবহার চালিয়ে যায়।

যদি wizard-এ OAuth option না দেখেন, তাহলে নিচের ম্যানুয়াল credential entry flow সম্পন্ন করুন। gateway আগের Ultimate Multisite 2.x release-এর মতো একই PayPal Business API credential দিয়ে কাজ করে।

## PayPal API credential পাওয়া {#getting-the-paypal-api-credentials}

PayPal পেমেন্ট gateway হিসেবে সক্রিয় হলে, আপনাকে PayPal API **Username**, PayPal API **Password** এবং PayPal API **Signature**-এর ফিল্ড পূরণ করতে হবে।

আপনি আপনার PayPal [Live](https://www.paypal.com/home) বা [Sandbox](https://www.sandbox.paypal.com/home) account-এ লগ ইন করে এগুলো পেতে পারেন।

(মনে রাখবেন, পেমেন্ট পরীক্ষা করতে এবং gateway সঠিকভাবে সেট আপ হয়েছে কি না দেখতে আপনি **sandbox mode** ব্যবহার করতে পারেন। শুধু সংশ্লিষ্ট সেকশনটি চালু করুন।)

![PayPal API credential ফিল্ড এবং sandbox mode toggle](/img/config/settings-payment-gateways.png)

আপনার PayPal account-এর জন্য API Signature বা Certificate credential অনুরোধ করতে:

  1. আপনার [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)-এ যান।

  2. **API access** সেকশনে, **Update** ক্লিক করুন।
![API access সেকশনসহ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)**-এর অধীনে, **Manage API credentials** ক্লিক করুন।
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * আপনি যদি ইতিমধ্যেই API Signature বা Certificate তৈরি করে থাকেন, তাহলে আপনাকে এমন একটি পৃষ্ঠায় পাঠানো হবে যেখানে আপনি আপনার credential খুঁজে পাবেন।

     * _**নোট:** যদি আপনাকে আপনার PayPal account যাচাই করতে বলা হয়, তাহলে পর্দায় দেখানো নির্দেশনা অনুসরণ করুন।_

  4. নিচের বিকল্পগুলোর মধ্যে _একটি_ নির্বাচন করুন, তারপর **Agree and Submit** ক্লিক করুন।

     * **Request API Signature** – API Signature authentication-এর জন্য নির্বাচন করুন।

     * **Request API Certificate** – API Certificate authentication-এর জন্য নির্বাচন করুন।

  5. PayPal আপনার API credential নিচের মতো তৈরি করে:
![PayPal তৈরি করা API credential](/img/config/settings-payment-gateways.png)

     * **API Signature credentials**-এ থাকে একটি API Username, API Password এবং Signature, যার মেয়াদ শেষ হয় না। বাড়তি নিরাপত্তার জন্য এই মানগুলো ডিফল্টভাবে লুকানো থাকে। এগুলো চালু ও বন্ধ করতে **Show/Hide** ক্লিক করুন। শেষ হলে, **Done** ক্লিক করুন।

     * **API Certificate credentials**-এ থাকে একটি API Username, API Password এবং Certificate, যা তিন বছর পরে স্বয়ংক্রিয়ভাবে মেয়াদোত্তীর্ণ হয়। API Certificate আপনার desktop-এ সংরক্ষণ করতে **Download Certificate** ক্লিক করুন।

এটাই, আপনার PayPal পেমেন্ট ইন্টিগ্রেশন সম্পন্ন!

PayPal সেটিংস সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আপনি PayPal-এর [Help Center](https://www.paypal.com/br/smarthelp/home) দেখতে পারেন।
