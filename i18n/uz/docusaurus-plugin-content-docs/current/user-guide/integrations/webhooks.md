---
title: Webhooklar
sidebar_position: 15
_i18n_hash: f8456622538d07af8f5aa36c1ec19249
---
# Webhooklar Haqida Birinchi Bakror Ko'rish (v2) {#a-first-look-on-webhooks-v2}

_**E'TIBOR: Bu funksiya yoki maqola faqat ilg'or foydalanuvchilar uchun mo'ljallangan.**_

**Webhook** — bu Ultimate Multisite kabi ilovalar yoki dasturlar orqali boshqa ilovalarga real vaqtda ma'lumot berish usulidir. Webhooklar ma'lumotlarni yoki yuklamalarni voqealar yuzaga kelganda darhol boshqa ilovalarga yetkazib beradi, ya'ni siz **ma'lumotlarga darhol ega bo'lasiz.**

Bu quyidagi holatlarda foydali bo'ladi: har bir voqea yuzaga kelganda Ultimate Multisite dan ma'lumotlarni boshqa CRM yoki tizimga integratsiya qilish yoki o'tkazish kerak bo'lganda. Masalan, yangi akkaunt yaratilganda har safar foydalanuvchining ism va elektron pochta manzilini xabar ro'yxatiga yuborishingiz kerak bo'lishi mumkin.

## Webhook qanday yaratiladi {#how-to-create-a-webhook}

Webhook yaratish uchun tarmoq administrator paneli (network admin dashboard)ga kiring. **Ultimate Multisite > Webhooks > Yangi Webhook qo'shing** tugmasiga bosing.

![Bo'sh Webhooks ro'yxati sahifasi va Yangi Webhook qo'shish tugmasi](/img/admin/webhooks-list-empty.png)

Keyin siz webhook konfiguratsiyasini tahrirlashingiz mumkin:

![Nomi, Hodisa (Event) va URL maydonlari bilan yangi Webhook shakli](/img/admin/webhook-add-modal.png)

Yangi webhook yaratishda sizdan **Nom, URL** va **Hodisa (Event)** kabi ma'lumotlar so'raladi. Siz o'zingiz xohlagan nomni ishlatishingiz mumkin. Eng muhim maydonlar esa URL va Hodisadir (Event).

![URL maydoni va yuklanish (payload) ko'rinishi ko'rsatilgan Webhook tahrirlash interfeysi](/img/admin/webhook-url-field.png)

URL bu Ultimate Multisite tomonidan **yuklanish ma'lumotlarini yoki ma'lumotlarni** yuboradigan **endpoint yoki manzil**dir. Bu ma'lumotlarni qabul qiladigan ilova hisoblanadi.

Zapier, bu uchinchi tomon ilovalari bilan integratsiyani osonlashtirish uchun foydalanuvchilar eng ko'p ishlatadigan yechimdir. Zapier kabi platforma bo'lmasa, siz ma'lumotlarni qabul qilib qayta ishlash uchun qo'lda maxsus funksiya yaratishingiz kerak bo'ladi. **Ultimate Multisite webhookni Zapier bilan qanday ishlatish haqidagi bu maqolaga qarang.**

Bu maqolada biz webhookning asosiy tushunchasi va Ultimate Multisite'dagi mavjud hodisalarni ko'rib chiqamiz. Biz [requestbin.com](https://requestbin.com) kabi uchinchi tomon saytidan foydalanamiz. Bu sayt bizga kod yozmasdan endpoint yaratish va yuklanib kelayotgan ma'lumotni (payload) qabul qilish imkonini beradi. _**Eslatma: bu faqatgina ma'lumotlar yetib kelganligini ko'rsatadi.**_ Payload qayta ishlash yoki boshqa harakatlar amalga oshirilmaydi.

[requestbin.com](https://requestbin.com/) saytiga o'ting va "Create Request Bin" tugmasini bosing.

Bu tugmani bosgandan so'ng, agar sizda akkaunt bo'lsa tizimga kirishingizni yoki ro'yxatdan o'tishingizni so'raydi. Agar sizda allaqachon akkaunt bo'lsa, sizni darhol ularning dashboardiga olib boradi. Ularning dashboardida siz Ultimate Multisite uchun webhook yaratishda ishlatishingiz mumkin bo'lgan endpoint yoki URL ni darhol ko'rasiz.

URL ni nusxalang va Ultimate Multisite ga qayting. Endpointni URL maydoniga joylashtiring va menyudan voqea (event) tanlang. Bu misolda biz **Payment Received** (To'lov Olingan) voqeani tanlaymiz.

Bu voqea foydalanuvchi to'lov qildirganda ishga tushadi. Mavjud barcha voqealar, ularning tavsifi va yuklamalari sahifaning pastki qismida ro'yxatdan olingan holda ko'rsatilgan. Webhookni saqlash uchun **Add New Webhook** (Yangi Webhook qo'shish) tugmasini bosing.

![Payment Received seçimi olan Webhook olaylar açılır menüsü](/img/admin/webhook-event-picker.png)

Endiy biz yaratgan webhook'ning ishlashini tekshirish uchun endpointga sinovli voqea yuborishimiz mumkin. Buni yaratgan webhook'ning ostidagi **Send Test Event** (Sinovli Voqea Yuborish) tugmasini bosib qilish orqali amalga oshirishingiz mumkin.

![Bir ta konfiguratsiyalangan webhook va Sinovli harakat ko'rsatuvchi Webhooks ro'yxati](/img/admin/webhooks-list-populated.png)

Bu sinov muvaffaqiyatli yakunlanganini ko'rsatadigan tasdiq oynasini ko'rsatadi.

![Sinovli yuk (payload) yuborilgandan keyingi Webhook sinov natijasi](/img/admin/webhook-test-result.png)

Endi agar biz _Requestbin_ saytiga qaytsak, payloadda sinov ma'lumotlari borligini ko'ramiz.

Вебхуки (webhook) ва эндпоинтлар қандай ишлайди ҳақида бу асосий принципдир. Агар сиз ўзингизга хос эндпоинт яратишчи бўлсангиз, Ultimate Multisiteдан олаётган маълумотларни қайта ишлатиш учун маълумотларни қайта ишлатиш учун ўзингизга хос функция яратишингиз керак бўлади.
