---
title: Zapier Integratsiyasi
sidebar_position: 12
_i18n_hash: 7f23136e0e69417e244a9930f9620e95
---
# Ultimate Multisite'i Zapier bilan birlashtirish {#integrating-ultimate-multisite-with-zapier}

Bir maqolada biz [Webhooks](webhooks.md) haqida gaplashgan edik va ulardan uchinchi tomon ilovalari bilan qanday integratsiya qilish mumkinligidan so'ragan edik.

Webhooklardan foydalanish biroz murakkab, chunki bu kodlash bo‘yicha ilg‘or bilim talab qiladi va yuklamalarni (payloads) aniqlashni o‘z ichiga oladi. Buni atash uchun **Zapier** usuli mavjud.

Zapier 5000 dan ortiq ilovalar bilan integratsiyaga ega bo‘lib, bu turli ilovalar o‘rtasidagi muloqotni osonlashtiradi.

Siz tarmoq (network)da voqealar sodir bo'lganda ishga tushadigan **Triggers** yaratishingiz mumkin (masalan, akkaunt yaratilganda `account_create` hodisasini ishga tushirish). Shuningdek, tashqi voqealarga javoban tarmoqning o‘zida **Actions** yaratishingiz mumkin (masalan, Ultimate Multisite tarmog‘ingizda yangi akkaunt a’zoligini yaratish).

Bu mumkin, chunki **Ultimate Multisite Zapier's triggers** va actions [REST API](https://developer.ultimatemultisite.com/api/docs/) orqali ishlaydi.

## Qanday boshlash kerak {#how-to-start}

Avvalo, Zapier ilovasi ro'yxatidan Ultimate Multisite ni qidiring. Boshqa yo'l bilan, [bu linkga](https://zapier.com/apps/wp-ultimo/integrations) bosishingiz mumkin.

Dashboardingizga o'ting va chap menyuda joylashgan **+** **Create Zap** tugmasini bosib yangi Zap sozlang.

![Zapier dashboard with Create Zap button](/img/admin/webhooks-list.png)

Siz Zap yaratish sahifasiga yo'naltirilishingiz mumkin.

Qidiruv qutusiga "wp ultimo" deb yozing. **Beta** versiyasi opsiyasini tanlash uchun bosing.

![Searching for WP Ultimo in Zapier app list](/img/admin/webhooks-list.png)

Bizning ilovamizni tanlaganingizdan so'ng, mavjud hodisani tanlang: **New Ultimate Multisite Event** (Yangi Ultimate Multisite Hodisasi).

![Selecting New Ultimate Multisite Event trigger](/img/admin/webhooks-list.png)

Endi biz Zapierga **sizning tarmog'ingizga** kirish imkonini berishimiz kerak. **Sign in** (Kirish) tugmasiga bosganingizda, **API credentials** (API ma'lumotlari) talab qiladigan yangi oynaga ochiq bo'ladi.

![Zapier Sign in prompt for API credentials](/img/admin/webhooks-list.png)

Tarmog'ingizning admin paneliga kiring va **Ultimate Multisite > Settings** (Sozlamalar) > **API & Webhooks** (API va Webhooklar) bo'limiga o'ting va API Sozlamalari (API Settings) qismini qidiring.

Bu bog'lanish ishlashi uchun kerakli bo'lgani sababli, **Enable API** (API ni faollashtirish) opsiyasini tanlang.

![API and Webhooks settings with API Settings and Enable API options](/img/admin/settings-api-webhooks.png)

API Key va API Secret maydonlaridagi **Copy to Clipboard** (Shablonga nusxalash) ikonchasidan foydalaning va bu qiymatlarni integratsiya ekraniga joylang.

URL maydoniga tarmoqning to'liq URL-ini, protokollni (HTTP yoki HTTPS) o'z ichiga olgan holda kiriting.

![API Key, Secret va URL maydonlariga ega Zapier integratsiya ekrani](/img/admin/webhooks-list.png)

Keyingi bosqichga o'tish uchun **Yes, Continue** (Ha, davom etish) tugmasini bosing. Hamma narsa to'g'ri bo'lsa, siz yangi bog'langan akkauntingiz bilan kutib turasiz! Yangi trigger yaratish uchun **Continue** (Davomiylik) tugmasini bosing.

## Yangi Triggerni qanday yaratish kerak {#how-to-create-a-new-trigger}

Hisobingiz ulanmaganidan so'ng mavjud voqealarni ko'rishingiz mumkin. Bu tutorial uchun biz **payment_received** (to'lov olindi) voqealaridan foydalanamiz.

![Zapier triggerida payment_received voqeasi tanlanmoqda](/img/admin/webhooks-list.png)

Tadbir tanlangan va **davom etish** tugmasini bosganingizdan so'ng, **sinov bosqichi** paydo bo'ladi.

![Zapier test step for the trigger](/img/admin/webhooks-list.png)

Bu bosqichda Zapier sizning Zapingiz ushbu hodisaga tegishli ma'lumotni **o'zlashtira olib etishini** tekshiradi. Kelajakdagi shu turdagi hodisalarda ham xuddi shu tuzilishdagi ma'lumot yuboriladi.

![Zapier trigger test completed successfully with payload](/img/admin/webhooks-list.png)

Bizning tutorialimizda sinov **muvaffaqiyatli yakunlandi** va payload misol ma'lumotlarini qaytarib berdi. Bu misol ma'lumotlar bizga harakatlarni yaratish jarayonida yo'l ko'rsatish uchun foydali bo'ladi. Sizning trigger hozir yaratilgan va boshqa ilovalar bilan bog'lanishga tayyor.

## Harakatlarni (Actions) qanday yaratish {#how-to-create-actions}

Harakatlar boshqa triggerlardan ma'lumot olib, sizning tarmohingizda yangi kirishlar yaratish uchun ishlatiladi.

**Harakat qadamini yaratishda** siz Ultimate Multisite **Beta** ni tanlaysiz va **Ultimate Multisite'da elementlar yaratish** opsiyasini tanlaysiz.

![Create Items on Ultimate Multisite bilan harakat yaratish](/img/admin/webhooks-list.png)

Keyingi bosqichda siz autentifikatsiyangizni, **Qanday boshlash** da qilganimizdek, yaratishingiz mumkin yoki mavjud bo'lgan autentifikatsiyani tanlashingiz mumkin. Bu tutorialda biz avval yaratilgan xuddi shu autentifikatsiyani tanlaymiz.

![Zapier harakati uchun autentifikatsiyani tanlash](/img/admin/webhooks-list.png)

### Harakatni sozlash {#setting-up-the-action}

Bu **harakatning asosiy qadam** bo'lib, bu yerda narsalar biroz boshqacha. Birinchi ma'lumot sifatida siz **Element (Item)** ni tanlaysiz. Element — sizning tarmoqning **ma'lumot modelidir**, masalan **Mijozlar (Customers), To'lovlar (Payments), Saytlar (Sites), Elektron xatlar (Emails)** va boshqalar.

![Zapierda item turini tanlash](/img/admin/webhooks-list.png)

Bir elementni tanlaganingizda, forma siz tanlagan element uchun kerakli va ixtiyoriy maydonlarni **qayta tartibga soladi**.

Masalan, agar siz **Customer** (Mijoz) elementini tanlasangiz, forma yangi Mijozni tarmoqda yaratish uchun zarur bo'lgan barcha narsalarni keltirib chiqaradi.

![Zapierda Customer elementi maydonlari sozlash](/img/admin/webhooks-list.png)

Barcha **talab qilinadigan** (required) belgilangan maydonlarni to'ldirgandan va "continue" (davom etish) tugmasini bosgandan so'ng, oxirgi ekranda sizga to'ldirilgan maydonlar va bo'sh qolgan maydonlar ko'rsatiladi.

![Zapierda test qilish natijasi: to'ldirilgan va bo'sh maydonlar](/img/admin/webhooks-list.png)

Testing tugadi va muvaffaqiyatli yakunlanganda, sizning harakat (action) sozlanadi. Shuningdek, narsa yaratilganini o'zingizning harakatingiz testi bilan tarmoqdan tekshirib ko'rishingiz ham muhimdir.
