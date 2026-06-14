---
title: Stripe'ı Kurmak
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway'i Kurma (v2)

_**ÖNEMLİ QAYDALI: Bu maqale Ultimate Multisite versiyası 2.x haqida məlumat berir.**_

Ödəniş ayarlar səhifədə ödəniş üsullarının dört növünü aktiv etdirə bilərsiniz: Stripe, Stripe Checkout, PayPal və Manual (qo'lda). Bu maqolada biz **Stripe** bilan qanday integratsiya qilishni ko'rib chiqamiz.

## Stripe-ni Faollashtirish

Stripe-ni tarmog'ingizdagi mavjud to'lov eshollari sifatida faollashtirish uchun **Ultimate Multisite > Settings > Payments** ga kiring va "Active Payment Gateways" (Faol To'lov Eshollari) bo'limidagi **Stripe** yoki **Stripe Checkout** yonidagi tugmani belgilang.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Bu usul to'lov jarayoni davomida kredit karta raqamini kiritish uchun joy ko'rsatadi.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu usul mijozni to'lov jarayoni davomida Stripe Checkout sahifasiga yo'naltiradi.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

### Stripe API kalitlarini olish

Stripe to'lov eshollari sifatida faollashtirilgandan so'ng, siz **Stripe Publishable Key** va **Stripe Secret Key** maydonlarini to'ldirishingiz kerak bo'ladi. Buni Stripe hisobingizga kirib kiritishingiz mumkin.

_**Eslatma:** To'lov usulining ishlayotganligini tekshirish uchun siz **Sandbox mode**ni faollashtira bilasiz._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripe dashboardingizda, o'ng burchakdagi "Developers" (Ishchi) tugmasiga va keyingi menyuda "API Keys" (API Kalitlari) ga bosing.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

আপনি হয় **Test Data** ব্যবহার করতে পারেন (আপনার প্রোডাকশন সাইটে ইন্টিগ্রেশন ঠিকমতো কাজ করছে কিনা তা পরীক্ষা করার জন্য) অথবা ব্যবহার না করতে পারেন। এটি পরিবর্তন করতে, **Viewing test data** টগলটি চালু বা বন্ধ করুন।

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** এবং **Secret key** থেকে মান কপি করুন, **Token** কলাম থেকে এবং তারপর সেগুলোকে Ultimate Multisite Stripe Gateway ফিল্ডগুলিতে পেস্ট করুন। এরপর **Save Changes**-এ ক্লিক করুন।

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhook সেটআপ করা

Stripe এমন সব webhook ইভেন্ট পাঠায় যা আপনার **stripe account**-এ কোনো ঘটনা ঘটলে Ultimate Multisite-কে তা জানিয়ে দেয়।

**Developers**-এ ক্লিক করুন এবং তারপর বাম দিকের মেনু থেকে **Webhooks** আইটেমটি বেছে নিন। এরপর ডানদিকে **Add endpoint**-এ ক্লিক করুন *।*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

আপনাকে একটি **Endpoint URL** লাগবে *।* Ultimate Multisite স্বয়ংক্রিয়ভাবে Endpoint URL তৈরি করে দেবে, যা আপনি **Ultimate Multisite Stripe Gateway** সেকশনের নিচের **Webhook Listener URL** ফিল্ডে খুঁজে পাবেন।_।

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL কপি করুন এবং Stripe-এর **Endpoint URL** ফিল্ডে পেস্ট করুন।

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

এরপর একটি **Event** নির্বাচন করতে হবে *।* এই অপশনের অধীনে, আপনাকে শুধু **Select all events** বক্সটি চেক করে **Add events**-এ ক্লিক করতে হবে। এরপর পরিবর্তনগুলো সেভ করার জন্য **Add Endpoint**-এ ক্লিক করুন।

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Энди сизнинг Stripe төлем интеграцияңыз تەوازی (complete) бўлди!
