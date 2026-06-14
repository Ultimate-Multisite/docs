---
title: Saytlarni boshqarish
sidebar_position: 14
_i18n_hash: 520a6eed862c756f0475de6f264632c6
---
# Saytlarni Boshqarish

Saytlar (yoki subsaytlari) sizning WaaS biznesingizning asosidir. Ultimate Multisite da 3 turdagi sayt mavjud:

- **Mijozga tegishli** — Muayyan mijozlarga xos bo'lgan saytlar
- **Sayt shablonlari (Site Templates)** — Mijozlar boshlash nuqtasi sifatida tanlaydigan oldindan belgilangan saytlar
- **Asosiy Sayt (Main Site)** — Sizning asosiy tarmoq saytingiz

## Saytlarni Ko'rish

Tarmoqingizdagi barcha subsaytlarni ko'rish uchun **Ultimate Multisite → Sites** ga o'ting. Har bir sayt turiga ko'ra belgilangan bo'ladi va siz uni Barcha Saytlar, Mijozga tegishli, Shablonlar yoki Kutishda (Pending) deb filtrlab ko'rishingiz mumkin.

![Sites list page](/img/admin/sites-list.png)

## Yangi Sayt Qo'shish

Yangi sayt yaratish uchun **Add Site** tugmasini bosing. Siz quyidagilarni taqdim etishingiz kerak bo'ladi:

- **Sayt Unvom** — Yangi sayt nomi
- **Sayt URL** — Sayt uchun domen/yo'l
- **Sayt Turi** — Bu mijoz sayti, shablon yoki oddiy sayt ekanligini belgilaydi

**Copy Site** (Saytni nusxalash) opsiyasi mavjud bo'lgan mavjud sayt shabloniga asoslanib yangi sayt yaratish imkonini beradi. Bu funksiyani yoqganingizda, qaysi shablonni boshlang'ich nuqtasi sifatida ishlatish kerakligini tanlashingiz mumkin. Media fayllarni ham kiritish uchun **Copy Media on Duplication** (Duplikat qilishda media nusxasini nusxalash) yoqilganligiga ishonch hosil qiling.

## Mavjud Saytni Boshqarish

Har qanday saytdagi **Manage** (Boshqarish) tugmasiga bosib, **Edit Site** (Saytni tahrirlash) sahifasini oching. Bu yerda quyidagilarni topishingiz mumkin:

### Asosiy Ma'lumotlar

Sayt nomi, turi, sayt IDsi va tavsifi. Shuningdek, xaritalangan domen, bog'langan a'zolik va saytni egalik qiluvchi mijoz hisobini ham ko'rasiz.

### Sayt Parametrlari (Site Options)

Saytning imkoniyatlarini va cheklovlarini sozlang:

* **Ziyarat cheklovlari (Visit limits)** — Saytga kirish mumkin bo'lgan maksimal saytlar soni.
* **Foydalanuvchi hisob limiti (User account limits)** — Har bir foydalanuvchi roli uchun chegaralar.
* **Disk o'rni (Disk space)** — Sayt uchun saqlash miqdori cheklovi.
* **Maxsus domen (Custom domain)** — Bu sayt uchun domen xaritasi (mapping) funksiyasini faollashtirish.
* **Plugin va tema ko'rinishi (Plugin and theme visibility)** — Qaysi pluginlar va temalar ko'rinishida bo'lishini, yashirilganligini yoki avtomatik faollashtirilganligini boshqarish.

Dastlabki holatda saytlar a'zo statusidagi cheklovlar bilan belgilanadi. Sayt darajasida chegaralarni belgilash bu a'zo sozlamalaridan yuqori (override) bo'ladi.

### Bog'liqliklar (Associations)

Sayt opsiyalari ostida quyidagilarga oid ma'lumotlarni topasiz:

* Sayt bilan bog'langan **xaritilgan domenlar (Mapped domains)**
* Saytning qaysi **A'zo statusiga (Membership)** kirganligi
* Saytga bog'langan **Mijoz hisobi (Customer account)**

### O'ng menyu (Right Sidebar)

O'ng tomonda siz quyidagilarni qilishingiz mumkin:

- Saytni o'chirish/yo'q qilish tugmasi orqali faollashtirish/o'chirish
- Sayt turini o'zgartirish yoki egalik huquqini qayta taqsimlash
- Sayt rasmini/thumbnailini belgilash (sayt shablonlari uchun frontendda ko'rsatiladi)
- Saytni doimiy ravishda o'chirish

:::warning
Saytni o'chirish orqali amalga oshirilgan harakat qaytarilmaydi. Sayt va uning barcha kontenti doimiy ravishda olib tashlanadi.
:::
