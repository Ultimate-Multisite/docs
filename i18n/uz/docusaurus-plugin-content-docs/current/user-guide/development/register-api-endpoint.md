---
title: API Uchinchi Nuqtasini ro'yxatdan o'tkazish
sidebar_position: 6
_i18n_hash: 8d9b47668bce413a2466cf2b1c37d2cf
---
# Ultimate Multisite Register API nuqtai nazaridan

Bu tutorialda siz Ultimate Multisite /register API endpoint dan foydalanib, tarmohingizdagi yangi mijoz uchun butun onboarding (kirish) jarayonini qanday yaratishingizni va buni Zapier orqali qanday amalga oshirishni o'rganasiz.

Bu endpoint POST metodidan foydalanadi va URL `_**https://yoursite.com/wp-json/wu/v2/register**_` bilan chaqiriladi. Bu chaqiruv ichida tarmohingizda 4 ta jarayon bajariladi:

  * Yangi WordPress foydalanuvchisi yoki uning foydalanuvchi ID orqali aniqlanishi yaratiladi.

  * Ultimate Multisite'dagi yangi Mijoz yoki uning mijoz ID orqali aniqlanishi yaratiladi.

  * WordPress tarmohigida yangi sayt yaratiladi.

  * Nihoyat, Ultimate Multisite'dagi yangi A'zo (Membership) yaratiladi.

Bu jarayon uchun sizga API autentifikatsiya ma'lumotlari kerak bo'ladi. Ularni olish uchun tarmoq administrator paneliga kiring, **Ultimate Multisite > Settings** (Sozlamalar) ga o'ting va **API & Webhooks** (API va Webhooklar) qismiga boring, API Sozlamalari (API Settings) bo'limini toping.

![Ultimate Multisite'da API Sozlamalari bo'limi](/img/config/settings-api.png)

Mana API sozlamalari sahifasining to'liq ko'rinishi:

![API sozlamalari to'liq sahifasi](/img/config/settings-api-full.png)

**Enable API** (API ni faollashtirish) tugmasini tanlang va olingan API ma'lumotlaringizni qo'llang.

Endi, biz endpoint haqida ko'rib chiqamiz va Zapierda ro'yxatdan olinish harakatini yaratamiz.

## Endpoint body parametrlari

Endpointga yuborishimiz kerak bo'lgan minimal ma'lumotlar haqida umumiy ko'rinishni ko'ramiz. Ushbu maqolaning oxirida to'liq chaqiruv (call) mavjud bo'ladi.

### Customer (Mijoz)

Buni foydalanuvchi va Ultimate Multisite Mijosi yaratish jarayoni uchun zarur bo'lgan ma'lumotlar quyidagilardir:

"customer_id" : integer

Sizning tarmoq (network)da yaratilgan mijoz ID'sini yuborish mumkin. Agar u yuborilmasa, quyidagi ma'lumotlardan foydalanib yangi mijoz va yangi WordPress foydalanuvchisi yaratiladi. Foydalanuvchi ID ham mijoz ID kabi yuborilishi mumkin.

"customer" : { "user_id" : integer, "username" : "string", "password" : "string", "email" : "string" },

### **A'zo bo'lish (Membership)**

Bizning bu ob'ekt ichida kerak bo'ladigan yagona ma'lumot — A'zo bo'lish holati (Membership Status).

"membership" { "status" : "string", // "pending", "active", "trialing", "expired", "on-hold", "canceled" dan biri }

### **Mahsulotlar**

Mahsulotlarga tarmog'ingizdagi bitta yoki undan ko'proq mahsulot ID-lari massivi beriladi. Ehtiyot bo'ling, bu endpoint mahsulotlarni yaratmaydi. Mahsulot yaratish endpointi haqida Ultimate Multisite hujjatlarini tekshirib ko'ring.

**"products" : [1,2],**

### To'lov (Payment)

Membership bilan bir xil, bizga faqat holati kerak bo'ladi.

**"payment" { "status" : "string", // "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "canceled" ichidan biri },**

### Sayt (Site)

Va tanani yopish uchun saytning URL'si va Unvoni kerak, ikkalasi ham Site obyekti ichida bo'lishi kerak.

**"site" : { "site_url" : "string", "site_title" : "string" }**

Register endpointi natijasi yangi yaratilgan membership ma'lumotlari bilan massiv sifatida qaytariladi.

## Zapierda harakat (action) yaratish

Bu yangi va yanada mustahkam hisob yaratish nuqtasi bilan Zapier'da ham yangi harakatni ishlatishingiz mumkin bo'ladi. Yangi Zapier versiyasining barcha imkoniyatlaridan qanday foydalanish va zavqlanishni bilasizmi? Qayta o'rganing. (link?)

### Harakat yaratish

Zapier bilan ro'yxatdan o'tish nuqtasidan qanday foydalanishni yaxshiroq ko'rsatish uchun Google Forms bilan integratsiya yaratib ko'raylik. Bu forma har bir to'ldirilganda va ma'lumotlar formning javoblar yozuviga saqlanganda, Ultimate Multisite tarmog'ida yangi a'zo (membership) yaratiladi.

Google Forms'da tarmoqda yangi a'zoni yaratish uchun zarur bo'lgan minimal maydonlar bilan forma tuzing.

<!-- Ekran tasviri mavjud emas: yangi a'zo yaratish maydonlari bilan Google Forms formasi -->

End! Google Forms formu Zapier bilan bog'landi va tarmoq bilan integratsiya qilishga tayyor. Endi biz Trigger (Google Forms har bir to'ldirilganda ishlaydi) natijasida yuzaga keladigan Action (harakat) qismiga o'tamiz.

Yangi Ultimate Multisite ilovasini toping va uni tanlang. Bu turdagi Zap uchun "Register" (Ro'yxatdan o'tish) opsiyasini tanlang.

Bu birinchi qadamdan keyin, bu Zap bilan bog'lanadigan hisobni tanlang.<!-- Screenshot mavjud emas: Ultimate Multisite uchun Zapier hisobi ulash bosqichi -->

Bu jarayonning eng sezgir qismidir. Biz Google Forms dan kelgan maydonlarni ushbu maqolaning oldingi bo'limida ko'rsatilgan ro'yxat (register) endpointi uchun zarur minimal maydon bilan moslashtirishimiz kerak.

Bu misolda biz faqat foydalanuvchi nomi (username), elektron pochta (email), parol, ism va veb-sayt URL'sini sozlashimiz kerak. Qolgan qismlar oldindan belgilangan bo'ladi, shunda bu Google Forms orqali yaratilgan barcha a'zoliklar bir xil mahsulot va holat namunalarini quyib boradi.

<!-- Screenshot mavjud emas: Google Forms va Ultimate Multisite ro'yxat endpointi o'rtasidagi Zapier maydon moslashuvi -->

Ma'lumotlarni sozlaganingizdan so'ng, yakuniy testga o'ting. Oxirgi ekranda siz endpointga yuboriladigan barcha maydonlar, ularning tegishli ma'lumotlari va bo'sh qilib yuborilishi mumkin bo'lgan maydonlarni ko'rishingiz mumkin.<!-- Screenshot unavailable: Zapier test screen showing all fields to be sent to the register endpoint -->

Yangi Zapingizni sinab ko'ring, u muvaffaqiyatli yakunlanishi kerak. Agar qandaydir xato yuz bersa, barcha maydonlarni tekshiring va ular to'g'ri yuborilayotganligini ta'minlang. Ma'lumotlar juda ko'p bo'lgani uchun ba'zi narsalar sezilmasligi mumkin.

### To'liq endpoint parametrlari

Mana to'liq chaqiruv va yuborilishi mumkin bo'lgan maydonlarning barcha imkoniyatlari.

"customer_id": integer, "customer": { "user_id": integer, "username": "string", "password": "string", "email": "string" }, "membership": { "status": "string", // biror "pending", "active", "trialing", "expired", "on-hold", "cancelled" (biror), "date_expiration": "string", "date_trial_end": "string", "date_activated": "string", "date_renewed": "string", "date_cancellation": "string", "date_payment_plan_completed": "string" }, "products": [1,2], "duration": "string", "duration_unit": "string", "discount_code": "string", "auto_renew": boolean, "country": "string", "currency": "string", "payment": { "status": "string", // biror "pending", "completed", "refunded", "partially-refunded", "partially-paid", "failed", "cancelled" }, "payment_method": { "gateway": "string", "gateway_customer_id": "string", "gateway_subscription_id": "string", "gateway_payment_id": "string" }, "site": { "site_url": "string", "site_title": "string", "publish": boolean, "template_id": "string" }
