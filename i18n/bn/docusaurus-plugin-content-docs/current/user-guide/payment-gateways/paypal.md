---
title: PayPal সেট আপ করা
sidebar_position: 10
_i18n_hash: cb5153acc4c60b39af9d73311a5b3b44
---
# PayPal গেটওয়ে সেটআপ করা (v2)

_**গুরুত্বপূর্ণ নোট: এই আর্টিকেলটি Ultimate Multisite ভার্সন 2.x এর জন্য।**_

আমাদের পেমেন্ট সেটিংস পেজে আপনি চারটি পেমেন্ট পদ্ধতি পর্যন্ত সক্রিয় করতে পারেন: Stripe, Stripe Checkout, PayPal এবং Manual। এই আর্টিকেলে আমরা দেখব কীভাবে **PayPal** এর সাথে ইন্টিগ্রেট করতে হয়।

Stripe এর মতোই, PayPal অনলাইন পেমেন্টের জন্য ব্যাপকভাবে ব্যবহৃত হয়, বিশেষ করে WordPress ওয়েবসাইটগুলোতে। এই আর্টিকেলটি আপনাকে দেখাবে কীভাবে আপনার নেটওয়ার্কে PayPal কে একটি পেমেন্ট পদ্ধতি হিসেবে ব্যবহার করতে পারেন।

মনে রাখবেন, এই ইন্টিগ্রেশনের জন্য প্রয়োজনীয় API credential পেতে আপনার একটি **PayPal Business অ্যাকাউন্ট** থাকতে হবে।

## আপনার নেটওয়ার্কে PayPal সক্রিয় করা

আপনার নেটওয়ার্কে PayPal কে একটি পেমেন্ট পদ্ধতি হিসেবে সক্রিয় করতে, **Ultimate Multisite > Settings > Payments** ট্যাবে যান এবং PayPal এর পাশের বক্সে টিক দিন।

![অ্যাক্টিভ পেমেন্ট গেটওয়েতে PayPal সক্রিয় করা](/img/config/settings-payment-gateways.png)

## PayPal API credentials সংগ্রহ করা

PayPal পেমেন্ট গেটওয়ে হিসেবে সক্রিয় হলে, আপনাকে PayPal API **Username**, PayPal API **Password** এবং PayPal API **Signature** এর ফিল্ডগুলো পূরণ করতে হবে।

আপনার PayPal [Live](https://www.paypal.com/home) অথবা [Sandbox](https://www.sandbox.paypal.com/home) অ্যাকাউন্টে লগইন করে এগুলো পেতে পারেন।

(মনে রাখবেন, পেমেন্ট টেস্ট করতে এবং গেটওয়ে সঠিকভাবে সেটআপ হয়েছে কিনা দেখতে আপনি **sandbox mode** ব্যবহার করতে পারেন। শুধু সংশ্লিষ্ট সেকশনটি টগল করে অন করুন।)

![PayPal API credentials ফিল্ড এবং sandbox mode টগল](/img/config/settings-payment-gateways.png)

আপনার PayPal অ্যাকাউন্টের জন্য API Signature বা Certificate credentials রিকোয়েস্ট করতে:

  1. আপনার [Account Settings](https://www.paypal.com/businessmanage/account/accountAccess) এ যান।

  2. **API access** সেকশনে, **Update** এ ক্লিক করুন।  
![API access সেকশনসহ PayPal Account Settings](/img/config/settings-payment-gateways.png)

  3. **NVP/SOAP API integration (Classic)** এর নিচে, **Manage API credentials** এ ক্লিক করুন।  
![PayPal NVP/SOAP API integration Manage API credentials](/img/config/settings-payment-gateways.png)

     * যদি আপনি ইতিমধ্যে একটি API Signature বা Certificate তৈরি করে থাকেন, তাহলে আপনাকে এমন একটি পেজে নিয়ে যাওয়া হবে যেখানে আপনার credentials পাবেন।

     * _**নোট:** যদি আপনাকে আপনার PayPal অ্যাকাউন্ট ভেরিফাই করতে বলা হয়, তাহলে স্ক্রিনে দেওয়া নির্দেশনাগুলো অনুসরণ করুন।_

  4. নিচের যেকোনো _একটি_ অপশন সিলেক্ট করুন, তারপর **Agree and Submit** এ ক্লিক করুন।

     * **Request API Signature** – API Signature authentication এর জন্য সিলেক্ট করুন।

     * **Request API Certificate** – API Certificate authentication এর জন্য সিলেক্ট করুন।

  5. PayPal আপনার API credentials নিম্নরূপে তৈরি করবে:  
![PayPal তৈরি করা API credentials](/img/config/settings-payment-gateways.png)

     * **API Signature credentials** এ একটি API Username, API Password, এবং Signature অন্তর্ভুক্ত থাকে, যার মেয়াদ শেষ হয় না। অতিরিক্ত নিরাপত্তার জন্য এই মানগুলো ডিফল্টভাবে লুকানো থাকে। এগুলো দেখতে বা লুকাতে **Show/Hide** এ ক্লিক করুন। শেষ হলে, **Done** এ ক্লিক করুন।

     * **API Certificate credentials** এ একটি API Username, API Password, এবং Certificate অন্তর্ভুক্ত থাকে, যার মেয়াদ তিন বছর পর স্বয়ংক্রিয়ভাবে শেষ হয়ে যায়। API Certificate আপনার ডেস্কটপে সেভ করতে **Download Certificate** এ ক্লিক করুন।

এটাই, আপনার PayPal পেমেন্ট ইন্টিগ্রেশন সম্পন্ন!

PayPal সেটিংস সম্পর্কে কোনো প্রশ্ন থাকলে, PayPal এর [Help Center](https://www.paypal.com/br/smarthelp/home) দেখতে পারেন।
