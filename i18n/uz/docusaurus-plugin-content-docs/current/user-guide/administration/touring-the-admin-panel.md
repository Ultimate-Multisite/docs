---
title: Admin panelni ko'rib chiqish
sidebar_position: 16
_i18n_hash: d8ee34d53f01aaaa8009bec02bcd891a
---
# Admin Panelni Ko Aylanib Bo'lish {#touring-the-admin-panel}

Ultimate Multisite eng oddiy va o'zini tushuntiradigan bo'lishni maqsad qilgan, lekin bunday kuchli vosita bilan yo'l ko'rsatish (guided tour) qilish mumkin. Sizga joylashishingiz uchun admin sahifalaridan o'tamiz.

## Dashboard {#dashboard}

Ultimate Multisite **Dashboard** daromadlar, sayt faoliyati, aʼzo bo'lish o'sishi, tashrif buyruqchilari soni va geografik ma'lumotlar kabi asosiy hisobotlar va tahlillarni ko'rsatadi.

![Ultimate Multisite Dashboard](/img/admin/um-dashboard-top.png)

Dashboardning to'liq ko'rinishi:

![Ultimate Multisite Dashboard full page](/img/admin/um-dashboard-full.png)

Va dashboardning pastki qismi:

![Ultimate Multisite Dashboard bottom section](/img/admin/um-dashboard-bottom.png)

Shuningdek, tarmoq (network) dashboardning to'liq ko'rinishi:

![Network Dashboard full page](/img/admin/network-dashboard-full-page.png)

## Checkout Forms {#checkout-forms}

**Checkout Forms** sizga o'zingiz uchun maxsus ro'yxatdan o'tish sahifalari yaratishdagi moslashuvchanlikni beradi. Siz maydonlarni sozlash, maxsus klasslar va skriptlarni kiritish, shuningdek, tashrif buyruqchining mamlakati yoki joylashuvi asosida kirishga cheklov qo'yishingiz mumkin.

![Checkout Forms list](/img/admin/checkout-forms-list.png)

## Products {#products}

**Products** bo'limi tarmoqingiz uchun turli rejalarni, paketlarni va xizmatlarni yaratadigan joydir. Narxlarni, hisoboti tezligini (billing frequencies) va har bir mahsulot darajasidagi cheklovlar va quota'larni belgilashingiz mumkin.

![Products list](/img/admin/products-list.png)

## Memberships {#memberships}

**Memberships** sahifasi tarmoqingizdagi barcha obunalar (subscriptions) ro'yxatini ko'rsatadi. Rejalarni, mahsulotlarni, hisoboti miqdorini va tezligini, to'lov tarixi va vaqt belgilarini o'z ichiga olgan obuna tafsilotlarini tekshirib tahrirlashingiz mumkin.

![Memberships list](/img/admin/memberships-list.png)

## Payments {#payments}

**To'lovlar** sahifasi butun tarmog‘ingiz bo‘yicha to‘lovlar tarixining tezkor ko‘rinishini beradi va aniq mahsulotlar hamda miqdorlar kabi batafsil transaksiyya ma’lumotlarini o‘z ichiga oladi.

![Payments list](/img/admin/payments-list.png)

## Mijozlar {#customers}

**Mijozlar** sahifasi tarmog‘ingizdagi ro‘yxatdan o‘tgan barcha aʼzolarni, jumladan ism, elektron pochta manzili, oxirgi kirish va ularning subsite’iga kirish uchun "o‘tish" (switch to) linki kabi asosiy foydalanuvchi ma’lumotlari bilan ko‘rsatadi.

![Customers list](/img/admin/customers-list.png)

## Saytlar {#sites}

**Saytlar** sahifasi tarmog‘ingizdagi barcha subsite’larni, jumladan sayt shablonlarini va mijozlarga tegishli saytlarni ro‘yxatdan ko‘rsatadi. Xaritalangan domenlarni, cheklovlarni va quota (cheklanish)larni, pluginlar va temalarni hamda sayt miniatyuralarini oson boshqarishingiz mumkin.

![Sites list](/img/admin/sites-list.png)

## Domenlar {#domains}

**Domenlar** sahifasi subsite’larga bog‘langan maxsus domen nomlari uchun mo‘ljallangan. Super admin sifatida siz maxsus domen nomlarini qo‘lda qo‘shishingiz yoki ularni xarita qilishingiz mumkin, shuningdek DNS yozuvlarini va loglarni ko‘rishingiz mumkin.

![Domains list](/img/admin/domains-list.png)

## Chegirma kodlari (Discount Codes) {#discount-codes}

**Chegirma kodlari** siz end-userlarga chegirmalar taklif qilish uchun kupon kodlari yaratishingizga imkon beradi. Chegirma qiymatini belgilashingiz va ma’lum foydalanuvchilarni yoki guruhlarni maqsad qilishingiz mumkin.

![Discount Codes list](/img/admin/discount-codes-list.png)

## Tarqatishlar (Broadcasts) {#broadcasts}

**Tarqatishlar** — subsite foydalanuvchilari uchun e'lonlar yuborish yoki maxfiy xabarlar yuborish uchun vositadir. Ular obuna bo‘lgan reja yoki mahsulot asosida aniq foydalanuvchi guruhlarini maqsad qilib belgilash imkonini beradi.

![Broadcasts list](/img/admin/broadcasts-list.png)

## Sozlamalar (Settings) {#settings}

**Sozlamalar** sahifasi Ultimate Multisite — ro‘yxatdan o‘tish sozlamalari, to‘lovlar, API va webhooks, domen xaritasi va boshqa integratsiyalar kabi narsalarni konfiguratsiya qilish uchun joy.

AI connector sozlamalari hozirda qo'llab-quvvatlanayotgan OAuth provayder havzolarini ro'yxatdan o'tadi: Anthropic Max, OpenAI ChatGPT/Codex va Google AI Pro. Har bir provayder kartasi super administratorlarning hisoblarini ulashishga, saqlangan hisoblarni yangilashga, elektron pochta orqali hisoblarni olib tashlashga va sandboxed muhit brauzer yo'naltirishini bloklaganda qo'lda OAuth o'tkazma (fallback) funksiyasidan foydalanishga imkon beradi. Cursor Pro sozlamalari admin paneli orqali olib tashlandi.

ChatGPT/Codex hisoblari connector-yordamida vositalardan foydalanishni qo'llab-quvvatlaydi, bu esa operatsiyaning vositalarni ruxsat etishi mumkinligini anglatadi, shuning uchun OpenAI hisobiga ulanishdan so'ng connector-yordamli operatsiyalarga bog'liq bo'lgan admin ish oqimlaridan Codex vosita xususiyatidan foydalanish mumkin.

![Settings page](/img/admin/settings-general.png)

Mana umumiy sozlamalar sahifasining to'liq ko'rinishi:

![Settings general full page](/img/admin/settings-general-full.png)

Va elektron pochta sozlamalari sahifasi:

![Settings emails full page](/img/admin/settings-emails-full.png)

Va to'lovlar sozlamalari sahifasi:

![Settings payments full page](/img/admin/settings-payments-full.png)

Va to'lovlar sozlamalarining pastki qismi:

![Settings payments bottom section](/img/admin/settings-payments-bottom.png)

Va saytlar sozlamalari sahifasi:

![Settings sites full page](/img/admin/settings-sites-full.png)

## Hodisalari (Events) {#events}

**Hodisalari (Events)** sahifasi tarmog'ingizdagi barcha hodisalar va yozuvlarni qayd etadi. U reja o'zgarishlari, ro'yxatdan olinishlar va boshqa harakatlar kabi faoliyatni kuzatib boradi — bu sizning multisite'ingizni nazorat qilish uchun foydalidir.

![Events list](/img/admin/events-list.png)

## Webhooklar {#webhooks}

**Webhooklar (Webhooks)** ma'lumotlarni boshqa ilovaga yuborishga imkon beradi. Ultimate Multisite dan Zapier kabi platformalarga ma'lumotlarni yuborish uchun foydalidir.

![Webhooks list](/img/admin/webhooks-list.png)
