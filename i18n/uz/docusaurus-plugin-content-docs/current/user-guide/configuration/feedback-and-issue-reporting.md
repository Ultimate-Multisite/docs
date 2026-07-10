---
title: Mijoz fikri va muammo hisobotlash
sidebar_position: 25
_i18n_hash: b8cc1801782ca29dbdcddcf9db34fb48
---
# Mijozlarning fikri va muammolarni hisobot berishi {#customer-feedback--issue-reporting}

Gratis AI Agent v1.5.0 end-user'lar uchun foydalanuvchilarning yordamsiz javoblarni belgilash va muammolarni chat interfeysidan bevosita hisobot berish imkonini beradigan ichki fikr va muammo hisobot tizimini joriy etadi. Bu tizimda rozilikni boshqarish, avtomatlashtirilgan hisobot buyrug'i va backendda AI yordamida tasniflash (triage) funksiyalari mavjud.

## Palovchi Tugma (Thumbs-Down Button) {#thumbs-down-button}

AI yordamchisi tomonidan yuborilgan har bir xabarda **palovchi** (👎) tugmasi ko'rsatiladi. Foydalanuvchi uni bosganida, javobni foydasiz yoki noto'g'ri deb belgilashi mumkin.

- Tugma har bir yordamchining xabari yonida kursorni olib kechirganda paydo bo'ladi.
- Uni bosish **Fikr berish Roziligi Modalini** ochadi.
- Fikrlar suhbat yo'li va aniq xabarga bog'lanadi.

## Fikr Berish Roziligi Modali (Feedback Consent Modal) {#feedback-consent-modal}

Foydalanuvchi palovchi tugmasini bosganda, hech qanday ma'lumot yuborilishidan oldin rozilik modali paydo bo'ladi. Bu modal:

- Qaysi ma'lumotlar yig'ilishi tushuntiriladi (suhbat parchasi, brauzer konteksti).
- Foydalanuvchidan bu ma'lumotlarni baham ko'rishga rozilik berishini tasdiqlashni so'raydi.
- Foydalanuvchiga nima noto'g'ri bo'lganini tavsiflash uchun ochiq matn maydoni taqdim etadi.
- Yuborilmasdan rad etish uchun **Bekor qilish** (Cancel) opsiyasi taklif etiladi.

Foydalanuvchi aniq tasdiqlaguncha hech qanday fikr qayd etilmaydi.

## Avtomatik Prompt Fikr Berish Bannersi (Auto-Prompt Feedback Banner) {#auto-prompt-feedback-banner}

Suhbat oxirida yordamchi **avtomatik prompt fikr berish bannersini** ko'rsatishi mumkin — bu sessiya foydali bo'lganmi degan savol beradigan shoshilinch emas xabar.

Bu banner suhbatning uzunligiga va natijasiga asoslanib avtomatik paydo bo'ladi. U palovchi tugma bilan bir xil fikr berish jarayoniga bog'langan. Foydalanuvchilar fikr bildirmasdan ham bannerni yopib tashlashlari mumkin.

## /report-issue Slash Buyruq (Slash Command) {#report-issue-slash-command}

Foydalanuvchilar chat kiritish maydonida `/report-issue` deb yozish orqali bevosita fikr berish jarayonini boshlashlari mumkin. Bu buyruq:

Mijozlik Modalini darhol ochadi.
Tavsif maydonini hozirgi suhbat haqidagi kontekst bilan avtomatik to'ldiradi.
Foydalanuvchilarga yuborishdan oldin qo'shimcha tafsilotlar qo'shish imkonini beradi.

`/report-issue` buyrug'i barcha chat modellarida (inline, floating widget, full-screen) mavjud.

## AI-Assisted Triage (AI bilan yordamli saralash) {#ai-assisted-triage}

Yuborilgan fikrlar AI saralash qatlami orqali yo'naltiriladi, bu quyidagilarni amalga oshiradi:

- Xabarnomani tasniflaydi (faqat fakt xatosi, yordam bermaydigan javob, nojo'ri ma'lumotlar va h.k.).
- Tegishli suhbat metadata ma'lumotlarini ilova qiladi.
- Saralash xulosasini sozlangandek **Feedback Endpoint**ga (Settings > Advanced ni ko'ring) yuboradi.

Bu qo'lda tekshirish vaqtini kamaytiradi, chunki eng muhim muammolarni birinchi o'ringa chiqarib beradi.

## Settings > Advanced {#settings-advanced} (Sozlamalar > Kengaytirilgan) {#settings--advanced}

Feedback backendni faollashtirish uchun **Gratis AI Agent → Settings → Advanced** bo'yicha quyidagi maydonlarni sozlang:

| Maydon | Tavsif |
|---|---|
| **Feedback Endpoint URL** | Feedback yuklamalari (JSON) bilan POST so'rovlarini qabul qiladigan URL. |
| **Feedback API Key** | Feedback yuborishini tasdiqlash uchun `Authorization` sarlavchasida yuboriladigan Bearer token. |

Ikkala maydonni bo'sh qoldirgan holda feedback yig'ishni o'chirish mumkin. Har bir feedback tugmalari foydalanuvchilar ko'rishi davom etadi, ammo yuklamalar yo'naltirilmaydi.

:::tip
Feedback endpointi kamida `message_id`, `conversation_id`, `feedback_text` va `triage_category` maydonlariga ega JSON tanasini qabul qilishi kerak. Kutali sxema uchun endpoint provayderining hujjatlarini ko'ring.
:::
