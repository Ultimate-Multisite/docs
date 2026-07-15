---
title: Zapier orqali hisob ochish
sidebar_position: 1
_i18n_hash: f452b2407a1eee1d88505abe1cff8f9e
---
# Tadbir: Zapier orqali akkaunt ochish

[Ultimate Multisite bilan Zapierni integratsiya qilish] maqolasida biz Ultimate Multisite ichidagi turli harakatlarni triggerlar va voqealar asosida amalga oshirish uchun Zapierdan qanday foydalanishimiz haqida gaplashgan edik. Bu maqolada esa siz 3-party ilovalarni qanday integratsiya qilish mumkinligini ko'rsatamiz. Biz ma'lumot manbai sifatida Google Sheets dan foydalanamiz va bu ma'lumotlarni Ultimate Multisitega akkaunt ochish uchun yuboramiz.

Zapier bilan bog'lanishdan oldin, **Ultimate Multisite > Settings > API & Webhooks** sahifasiga o'ting va API faolligini tasdiqlang. Zapier sizdan Ultimate Multisite hisob ma'lumotlarini so'raganda bu ekranidan API Key va API Secretni nusxalang.

![API va Webhook sozlamalari, unda API kaliti, API siri va API ni faollashtirish opsiyalari](/img/admin/settings-api-webhooks.png)

Avvalo, Google Drive'ingizda bir **Google Sheet** yaratishingiz kerak. Keyinchalik ma'lumotlarni oson bog'lash uchun har bir ustunni (column) to'g'ri belgilashingizga ishonch hosil qiling.

Google sheet'ni yaratganingizdan so'ng, Zapier hisobingizga kirib zap yaratishni boshlashingiz mumkin.

**"App event"** uchun qidiruv maydonida **"Google Sheets"** ni tanlang.

Keyin, "**Event**" (Hodisha) maydoni uchun "**New spreadsheet row**" (Yangi sheet satri) ni tanlang va "**Continue**" (Davomi) tugmasini bosing.

Keyingi qadamda siz ma'lumotlar keladigan **Google Sheet** saqlangan Google hisobini tanlashni so'raydi. Shuning uchun to'g'ri Google hisobi belgilanganligiga ishonch hosil qiling.

**"Set up trigger"** (Triggeri sozlash) ostida, ma'lumotlar keladigan Google spreadsheet va ishlatmoqchi bo'lgan ishchi jadvalni tanlab belgilashingiz kerak. Shunchaki ularni to'ldirib, "**Continue**" tugmasini bosing.

"Trigger'ingizni tekshiring" bu Google Sheet-ingiz to'g'ri ulanganligini ta'minlash uchun kerak.

Agar test muvaffaqiyatli bo'lsa, siz veb-sahifangizda Google Sheet-dan ma'lumotlarni ko'rsatadigan natijani ko'rishingiz kerak. Davom etish uchun "**Continue**" (Davomiylik) tugmasini bosing.

Keyingi qadam — Ultimate Multisite'da hisob yaratadigan yoki ro'yxatdan o'tadigan ikkinchi harakatni sozlashdir. Qidiruv maydonidan "**Ultimate Multisite(2.0.2)**" ni tanlang.

"Event" (Hodisa) maydonida "**Register an Account in Ultimate Multisite**" (Ultimate Multisite'da hisob ro'yxatdan o'tish) ni tanlang, so'ngra "**Continue**" tugmasini bosing.

"Set up an action" (Harakatni sozlash) ostida siz mijoz ma'lumotlari, a'zoliklar, mahsulotlar va boshqalar uchun turli maydonlarni ko'rasiz. Google Sheet-ingizdagi qiymatlarni o'zingiz tanlaganmaydi va ularni yuqoridagi skrinshotda ko'rsatilganidek to'ldirilishi kerak bo'lgan tegishli maydonga yuklang.

Qiymatlarni xarita qilingdan so'ng, harakatni sinab ko'rishingiz mumkin.
