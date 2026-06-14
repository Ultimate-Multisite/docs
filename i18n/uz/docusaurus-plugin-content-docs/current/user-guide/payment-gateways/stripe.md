---
title: Stripe'ni sozlash
sidebar_position: 6
_i18n_hash: a73a808f5976fbabb54e2c9889334d00
---
# Stripe Gateway'ni Sozlash (v2)

_**MUHIM ESLATMA: Bu maqola Ultimate Multisite 2.x versiyasiga oid.**_

To'lov sozlamalari sahifasida bizning to'lov usullardan birini — Stripe, Stripe Checkout, PayPal va Manualni — faollashtirishingiz mumkin. Ushbu maqolada **Stripe** bilan qanday integratsiya qilishni ko'rib chiqamiz.

## Stripe-ni Faollashtirish

Stripe-ni sizning tarmoqning mavjud to'lov eshollari sifatida faollashtirish uchun **Ultimate Multisite > Settings > Payments** sahifasiga o'ting va "Active Payment Gateways" (Faol To'lov Eshollari) bo'limidagi **Stripe** yoki **Stripe Checkout** yonidagi tugmani belgilang.

![Enabling Stripe in active payment gateways](/img/config/settings-payment-gateways.png)

### Stripe vs Stripe Checkout:

**Stripe:** Bu usul to'lov jarayoni davomida kredit karta raqamini kiritish uchun joyni ko'rsatadi.

![Stripe inline credit card field during checkout](/img/config/settings-payment-gateways.png)

**Stripe Checkout:** Bu usul mijozni to'lov jarayoni davomida Stripe Checkout sahifasiga yo'naltiradi.

![Stripe Checkout redirect page during checkout](/img/config/settings-payment-gateways.png)

### Stripe API kalitlarini olish

Stripe to'lov eshollari sifatida faollashtirilganidan so'ng, siz **Stripe Publishable Key** va **Stripe Secret Key** maydonlarini to'ldirishingiz kerak bo'ladi. Buni Stripe hisobingizga kirib kiritishingiz mumkin.

_**Eslatma:** To'lov usuli ishlayotganini tekshirish uchun siz **Sandbox mode**ni faollashtirishingiz mumkin._

![Stripe API key fields and sandbox mode toggle](/img/config/settings-payment-gateways.png)

Stripe dashboardingizda o'ng yuqori burchakdagi **Developers** (Ishchi) tugmasiga, so'ngra chap menyudagi **API Keys** (API Kalitlari) ga bosing.

![Stripe dashboard Developers section with API Keys](/img/config/settings-payment-gateways.png)

Siz yoki **Test ma'lumotlarini** (integratsiyaning ishlab chiqarish saytingizda ishlayotganini tekshirish uchun) ishlatishingiz mumkin, yoki ishlatmaslik mumkin. Buni o'zgartirish uchun **Viewing test data** tugmasini o'chirib qo'ying.

![Stripe Viewing test data toggle](/img/config/settings-payment-gateways.png)

**Publishable key** va **Secret key**dan qiymatlarni olib, **Token** ustunidan nusxalab Ultimate Multisite Stripe Gateway maydonlariga joylashtiring. Keyin o'zgartirishlarni saqlash uchun bosing.

![Stripe publishable and secret key values](/img/config/settings-payment-gateways.png)

![Pasting Stripe keys in Ultimate Multisite settings](/img/config/settings-payment-gateways.png)

## Stripe Webhookni sozlash

Stripe sizning **stripe hisobingizda** har qanday voqea sodir bo'lganda Ultimate Multisitega xabar beradigan webhook hodisalari yuboradi.

**Developers** ga bosing va chap menyudan **Webhooks** elementini tanlang. Keyin o'ng tomondan **Add endpoint** tugmasini bosing *.*

![Stripe Webhooks page with Add endpoint button](/img/config/settings-payment-gateways.png)

Sizga biror **Endpoint URL** kerak bo'ladi *.* Ultimate Multisite avtomatik ravishda endpoint URL'ni yaratadi, uni **Ultimate Multisite Stripe Gateway** bo'limidagi **Webhook Listener URL** maydonining pastida topishingiz mumkin._._

![Webhook Listener URL field in Stripe gateway settings](/img/config/settings-payment-gateways.png)

Endpoint URL'ni **nusxalab**, Stripening **Endpoint URL** maydoniga **joylashtiring**.

![Pasting endpoint URL in Stripe webhook setup](/img/config/settings-payment-gateways.png)

Keyingi qadamda biror **Event** ni tanlash kerak *.* Bu variant ostida siz shunchaki **Select all events** qutisini belgilab, **Add events** tugmasini bosishingiz kifoya._._ Shundan so'ng o'zgarishlarni saqlash uchun **Add Endpoint** tugmasini bosing.

![Selecting all events and adding the Stripe endpoint](/img/config/settings-payment-gateways.png)

Endi sizning Stripe to'lov integratsiyangiz tayyor!
