---
title: PayPal ସେଟଅପ୍ କରିବା
sidebar_position: 10
_i18n_hash: 894ca1f2ca4ca589f3ef49c131e330d5
---
# পেপাল গেটওয়ে সেটআপ করা (v2)

_**গুরুত্বপূর্ণ নোট: এই নিবন্ধটি Ultimate Multisite ভার্সন ২.x-কে নির্দেশ করে।**_

আমাদের পেমেন্ট সেটিংস পেজে আপনি Stripe, Stripe Checkout, PayPal এবং ম্যানুয়াল—এই চারটি পেমেন্ট পদ্ধতি সক্রিয় করতে পারেন। এই নিবন্ধে, আমরা **PayPal** এর সাথে কীভাবে ইন্টিগ্রেট করতে হয় তা দেখব।

Stripe-এর মতোই, অনলাইন পেমেন্টের জন্য বিশেষ করে ওয়ার্ডপ্রেস ওয়েবসাইটে PayPal ব্যাপকভাবে ব্যবহৃত হয়। এই নিবন্ধে আমরা আপনার নেটওয়ার্কে উপলব্ধ একটি পেমেন্ট পদ্ধতি হিসাবে PayPal কীভাবে ব্যবহার করবেন তা গাইড করব।

মনে রাখবেন, এই ইন্টিগ্রেশনের জন্য প্রয়োজনীয় API ক্রেডেনশিয়াল পেতে আপনার একটি **PayPal Business অ্যাকাউন্ট** থাকতে হবে।

## আপনার নেটওয়ার্কে পেপাল সক্ষম করা {#enabling-paypal-on-your-network}

আপনার নেটওয়ার্কে উপলব্ধ পেমেন্ট পদ্ধতি হিসাবে PayPal সক্রিয় করতে, **Ultimate Multisite > Settings > Payments** ট্যাবে যান এবং PayPal-এর পাশে থাকা বাক্সটি টিক দিন।

![Enabling PayPal in active payment gateways](/img/config/settings-payment-gateways.png)

## গাইড সেটআপ উইজার্ড ব্যবহার করা {#using-the-guided-setup-wizard}

Ultimate Multisite 2.10.0 পেমেন্ট গেটওয়ে সেটিংসের জন্য একটি গাইড পেপাল সেটআপ উইজার্ড যোগ করেছে। আপনি PayPal সক্রিয় করার পরে, গেটওয়েটি কীভাবে সংযুক্ত করতে চান তা বেছে নিতে এবং সেভ করার আগে কোন ক্রেডেনশিয়ালগুলি এখনও প্রয়োজন তা নিশ্চিত করতে **Ultimate Multisite > Settings > Payments** এ উইজার্ডটি ব্যবহার করুন।

উইজার্ডটি দুটি সেটআপ পথ সমর্থন করে:

* **ম্যানুয়ালি ক্রেডেনশিয়াল প্রবেশ করানো**: আপনার কাছে ইতিমধ্যেই PayPal API ক্রেডেনশিয়াল থাকলে, যখন আপনার অ্যাকাউন্টের জন্য OAuth সেটআপ উপলব্ধ না থাকে, অথবা আপনি নিজে থেকে PayPal থেকে ক্রেডেনশিয়াল কপি করতে পছন্দ করেন, তখন এই পাথটি ব্যবহার করুন। PayPal ফিল্ডগুলিতে API Username, API Password এবং API Signature প্রবেশ করান, তারপর পেমেন্ট সেটিংস সেভ করুন।
* **OAuth সংযোগ গেট**: শুধুমাত্র তখনই এই পাথটি ব্যবহার করুন যখন আপনার ইনস্টলেশনের জন্য OAuth বিকল্পটি উপলব্ধ এবং সক্রিয় থাকে। উইজার্ডে ফিচার ফ্ল্যাগের পিছনে OAuth ফ্লো দেখানো হয়, তাই ফ্ল্যাগ ছাড়া নেটওয়ার্কগুলি ম্যানুয়াল ক্রেডেনশিয়াল এন্ট্রি ফিল্ডগুলি ব্যবহার করতে থাকবে।

যদি আপনি উইজার্ডে OAuth বিকল্পটি না দেখেন, তবে নিচের ম্যানুয়াল ক্রেডেনশিয়াল এন্ট্রি প্রক্রিয়াটি সম্পন্ন করুন। গেটওয়ে আগের Ultimate Multisite 2.x সংস্করণের মতোই PayPal Business API ক্রেডেনশিয়াল দিয়ে কাজ করে।

## PayPal API ক্রেডেনশিয়াল সংগ্রহ করা {#getting-the-paypal-api-credentials}

একবার PayPal পেমেন্ট গেটওয়ে হিসাবে সক্ষম করা হলে, আপনাকে PayPal API **Username**, PayPal API **Password** এবং PayPal API **Signature** ফিল্ডগুলি পূরণ করতে হবে।

আপনি আপনার PayPal [Live](https://www.paypal.com/home) বা [Sandbox](https://www.sandbox.paypal.com/home) অ্যাকাউন্টে লগইন করে এটি পেতে পারেন।

(মনে রাখবেন যে পেমেন্ট পরীক্ষা করার এবং গেটওয়ে সঠিকভাবে সেটআপ হয়েছে কিনা তা দেখার জন্য আপনি **স্যান্ডবক্স মোড** ব্যবহার করতে পারেন। শুধু সংশ্লিষ্ট বিভাগটি চালু করুন।)

![PayPal API ক্রেডেনশিয়াল ফিল্ড এবং স্যান্ডবক্স মোড টগল](/img/config/settings-payment-gateways.png)

আপনার PayPal অ্যাকাউন্টের জন্য API Signature বা সার্টিফিকেট ক্রেডেনশিয়াল অনুরোধ করার জন্য:

  ১. আপনার [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess)-এ যান।

  ২. **API access** বিভাগে, **Update**-এ ক্লিক করুন।
![API অ্যাক্সেস বিভাগ সহ PayPal অ্যাকাউন্ট সেটিংস](/img/config/settings-payment-gateways.png)

୩. **NVP/SOAP API integration (Classic)**-এর অধীনে, **Manage API credentials**-এ ক্লিক করুন।
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

* আপনার যদি ইতিমধ্যেই কোনো API Signature বা Certificate তৈরি করা থাকে, তাহলে আপনি একটি পেজে রিডাইরেক্ট হবেন যেখানে আপনি আপনার ক্রেডেনশিয়ালগুলো খুঁজে পাবেন।

* _**দ্রষ্টব্য:** যদি আপনাকে আপনার PayPal অ্যাকাউন্ট যাচাই করতে বলা হয়, তবে স্ক্রিনে দেখানো নির্দেশাবলী অনুসরণ করুন._

৪. নিচের বিকল্পগুলোর মধ্যে _একটি_ নির্বাচন করুন, তারপর **Agree and Submit**-এ ক্লিক করুন।

* **Request API Signature** – API Signature অথেন্টিকেশনের জন্য এটি নির্বাচন করুন।

* **Request API Certificate** – API Certificate অথেন্টিকেশনের জন্য এটি নির্বাচন করুন।

৫. PayPal আপনার API ক্রেডেনশিয়ালগুলো এইভাবে তৈরি করে:
![PayPal generated API credentials](/img/config/settings-payment-gateways.png)

* **API Signature credentials**-এ একটি API ইউজারনেম, API পাসওয়ার্ড এবং সিগনেচার থাকে, যা মেয়াদ শেষ হয় না। অতিরিক্ত নিরাপত্তার জন্য এই মানগুলি ডিফল্টভাবে লুকানো থাকে। চালু বা বন্ধ করার জন্য **Show/Hide**-এ ক্লিক করুন। কাজ শেষ হলে, **Done**-এ ক্লিক করুন।

* **API Certificate credentials**-এ একটি API ইউজারনেম, API পাসওয়ার্ড এবং সার্টিফিকেট থাকে, যা তিন বছর পর স্বয়ংক্রিয়ভাবে মেয়াদ শেষ হয়ে যায়। আপনার ডেস্কটপে API সার্টিফিকেট সেভ করার জন্য **Download Certificate**-এ ক্লিক করুন।

बस, আপনার PayPal পেমেন্ট ইন্টিগ্রেশন সম্পন্ন হয়েছে!

PayPal সেটিংস সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, আপনি PayPal-এর [Help Center](https://www.paypal.com/br/smarthelp/home)-এ দেখতে পারেন।
