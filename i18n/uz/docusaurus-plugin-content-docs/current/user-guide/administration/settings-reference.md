---
title: Sozlamalar Haqida Manbalar
sidebar_position: 11
_i18n_hash: 0259b88b319090b358483322ad97fc2d
---
# Sozlamalar Haqida Ma'lumotlar

Bu sahifa Ultimate Multisite dagi kundalik idaro va yaqinda sodir bo'lgan o'zgarishlarni ta'sir qiluvchi sozlamalarni kuzatib boradi.

## Boshqa Variantlar

**Boshqa Variantlar** qismi **Ultimate Multisite > Settings > Login & Registration** ostida ko'rinadi.

| Sozlama | Tavsifi |
|---|---|
| **Jumperni Faollashtirish** | Admin hududida Jumper tezkor navigatsiya vositasini ko'rsatadi. Ultimate Multisite ekranlariga, tarmoq obyektlari va qo'llab-quvvatlanadigan admin manzillariga to'g'ridan-to'g'ri o'tish uchun uni ishlating. Agar bu qisqa yo'l ko'rinmasini istamasangiz, uni o'chiring. |

## Xatolik hiskari va telemetriya

Oldingi xatolik hiskari qo'shilish sozlamasi sozlamalar sahifasidan olib tashlandi. Anonim telemetriya o'chirilgan va uni faollashtirish uchun UI tugmasi mavjud emas.

Agar siz sozlamalar sahifasi uchun ichki ish rejalarini (runbooks) yoki skrinshotlarni saqlab qilsangiz, administratorlar endi mavjud bo'lmagan sozlamani qidirishmasligi uchun eski xatolik hiskari qo'shilish maydoniga murojaatlarni olib tashlang.

## Import/Export sozlamalari

**Import/Export** sozlamalari ular qaysi sozlamalarni boshqarishini va sayt hamda tarmoq arxivlari uchun **Ultimate Multisite > Site Export** ga bevosita bog'langanligini tasvirlaydi. Import/eksport konfiguratsiyasi uchun sozlamalar yorlig'idan foydalaning, yagona sayt eksport/import jarayoni uchun esa **Tools > Export & Import** dan foydalaning va to'liq Tarmoq Eksport arxiviga ehtiyoj sezganingizda Site Export vositasidan foydalaning.

## AI provayder ulanish sozlamalari

AI provayder ulanish sozlamalari endi faqat qo'llab-quvvatlanadigan OAuth hisoblar havzalarini ko'rsatadi:

| Provayder | Sozlash jarayoni |
|---|---|
| **Anthropic Max** | OAuth tugmasi yordamida bitta yoki bir nechta Anthropic Max hisoblarini ulash. Agar sandboxed brauzer avtomatik yo'naltirishni to'liq qila olmasa, qo'lda OAuth o'chmasini (fallback) ishlating. |
| **OpenAI ChatGPT/Codex** | Xuddi shu OAuth pool jarayoni orqali ChatGPT hisoblarini ulashing. Hisob ulanganidan so'ng, connector tomonidan qo'llab-quvvatlanadigan operatsiyalar uchun ChatGPT Codex vosita chaqiruvlaridan foydalanish mumkin. |
| **Google AI Pro** | OAuth orqali Google AI Pro hisoblarini ulash va agar hisob ro'yxati darhol yangilanmasa, connectorni qayta yangilang (refresh) deb belgilang. |

Cursor Pro endi qo'llab-quvvatlanmaydigan provayder emas. Cursor Pro sozlash maydonlari yoki connector yo'llarini ko'rsatadigan eski ichki skrinshotlar, ish rejalarini (runbooks) yoki kirish bosqichlarini olib tashlang.

Provayder hisoblarini qo'shish yoki olib tashlashda, yangilalanishi yoki o'chirilishi kerak bo'lgan hisob uchun haqiqiy elektron pochta manzilni kiritish va connector-ga asoslangan operatsiyalarni sinovdan o'tkazishdan oldin provayder sozlamalarini saqlashni unutmang.
