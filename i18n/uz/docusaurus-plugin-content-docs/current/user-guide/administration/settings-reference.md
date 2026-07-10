---
title: Sozlamalar ma’lumotnomasi
sidebar_position: 11
_i18n_hash: d9ab375be74a5dff1aaf4f4eaf80c3be
---
# Sozlamalar ma’lumotnomasi {#settings-reference}

Ushbu sahifa Ultimate Multisite’da kundalik boshqaruvga ta’sir qiladigan sozlamalar va yaqindagi xatti-harakat o‘zgarishlarini kuzatadi.

## Boshqa variantlar {#other-options}

**Boshqa variantlar** hududi **Ultimate Multisite > Settings > Login & Registration** ostida ko‘rinadi.

| Sozlama | Tavsif |
|---|---|
| **Jumper’ni yoqish** | Admin hududida Jumper tezkor navigatsiya vositasini ko‘rsatadi. Undan bevosita Ultimate Multisite ekranlariga, tarmoq obyektlariga va qo‘llab-quvvatlanadigan admin manzillariga o‘tish uchun foydalaning. Bu yorliq ko‘rinishini xohlamasangiz, uni o‘chirib qo‘ying. |

## Xato hisobotlari va telemetry {#error-reporting-and-telemetry}

Avvalgi xato hisobotlariga rozilik sozlamasi sozlamalar sahifasidan olib tashlandi. Anonim telemetry o‘chirilgan va uni yoqish uchun UI almashtirgichi yo‘q.

Agar sozlamalar sahifasi uchun ichki runbook’lar yoki skrinshotlarni yuritsangiz, administratorlar endi mavjud bo‘lmagan sozlamani qidirmasligi uchun eski xato hisobotlariga rozilik maydoniga havolalarni olib tashlang.

## Import/Export sozlamalari {#importexport-settings}

**Import/Export** sozlamalari varag‘i qaysi sozlamalarni boshqarishini tavsiflaydi va site hamda tarmoq arxivlari uchun bevosita **Ultimate Multisite > Site Export** ga havola qiladi. Import/export konfiguratsiyasi uchun sozlamalar varag‘idan foydalaning, bitta site export/import ish jarayoni uchun **Tools > Export & Import** dan foydalaning va to‘liq Network Export arxivi kerak bo‘lganda Site Export vositasidan foydalaning.

## Domain Seller HostAfrica balansi haqida ogohlantirish {#domain-seller-hostafrica-balance-warning}

Domain Seller addon HostAfrica’ga ulanganida, tarmoq administratorlari reseller account balansi ishonchli domen ro‘yxatdan o‘tkazish yoki yangilash jarayoni uchun juda past bo‘lsa, yopib qo‘yiladigan balans pastligi ogohlantirishini ko‘radi.

Bu bildirishnomani operatsion ogohlantirish sifatida qabul qiling: ko‘proq pulli domen ro‘yxatdan o‘tkazishlarni qabul qilishdan oldin HostAfrica reseller balansini to‘ldiring, so‘ng ro‘yxatdan o‘tkazishlar va yangilashlar odatdagidek davom eta olishini tasdiqlash uchun Domain Seller sozlamalariga yoki domen monitoringi ekraniga qayting.

## AI provider connector sozlamalari {#ai-provider-connector-settings}

AI provider connector sozlamalari endi faqat qo‘llab-quvvatlanadigan OAuth account pool’larini ko‘rsatadi:

| Provider | Sozlash jarayoni |
|---|---|
| **Anthropic Max** | OAuth tugmasi bilan bir yoki bir nechta Anthropic Max account’larini ulang. Sandboxed brauzer redirect’ni avtomatik yakunlay olmaganda qo‘lda OAuth fallback’dan foydalaning. |
| **OpenAI ChatGPT/Codex** | ChatGPT account’larini xuddi shu OAuth pool ish jarayoni orqali ulang. Connector tomonidan qo‘llab-quvvatlanadigan operatsiyalar account ulangandan keyin ChatGPT Codex tool call’laridan foydalanishi mumkin. |
| **Google AI Pro** | Google AI Pro account’larini OAuth orqali ulang, so‘ng account ro‘yxati darhol yangilanmasa connector’ni yangilang. |

Cursor Pro endi qo‘llab-quvvatlanadigan provider emas. Cursor Pro sozlash maydonlari yoki connector yo‘llari tilga olingan eski ichki skrinshotlar, runbook’lar yoki onboarding bosqichlarini olib tashlang.

Provider account’larini qo‘shish yoki olib tashlashda, yangilanayotgan yoki o‘chirilayotgan account uchun yaroqli email manzilini kiriting va connector bilan qo‘llab-quvvatlanadigan operatsiyalarni sinashdan oldin provider sozlamalarini saqlang.
