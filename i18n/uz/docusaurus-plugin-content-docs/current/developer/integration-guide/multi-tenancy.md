---
title: Ko‘p ijarachilik integratsiyasi
sidebar_position: 6
_i18n_hash: 3cf63ea3f0dba9dcf2a8fc74478aedbb
---
# Multi-Tenancy integratsiyasi

Ultimate Multisite: Multi-Tenancy 1.2.0 suveren ijarachilar, migratsiyani tekshirish va ijarachi hayotiy siklini avtomatlashtirish uchun bir nechta integratsiya nuqtalarini o‘zgartiradi.

## Ijarachini boshlang‘ich sozlash oqimi

Ijarachilarni yaratadigan yoki o‘zgartiradigan integratsiyalar quyidagi tartibga amal qilishi kerak:

1. Ijarachi reyestri yozuvi va izolyatsiya modelini aniqlang.
2. Ijarachi ma’lumotlar bazasi yozuvchisini yarating yoki tekshiring.
3. Ijarachi sxemasini boshlang‘ich sozlang.
4. Ijarachi foydalanuvchilarini ta’minlang.
5. Ijarachi marshrutlashini va fayl tizimi yo‘llarini ro‘yxatdan o‘tkazing.
6. Ijarachini ochishdan oldin migratsiya tekshiruvini ishga tushiring.

Suveren ijarachi tarmoq ma’lumotlar bazasi ulanishidan qayta foydalanishi mumkin deb taxmin qilmang. Qo‘shimcha tomonidan taqdim etilgan ijarachi reyestri va yozuvchi abstraksiyalaridan foydalaning.

## SSO va REST hooks

Holatsiz ijarachi autologini maqsad claim’i, JTI qayta ijrodan himoyasi, amal qilish muddati cheklovi va kelib chiqishni mahkamlashga ega qisqa muddatli tokenlardan foydalanadi. Kirish tugmalari yoki masofaviy boshqaruv havolalarini qo‘shadigan integratsiyalar ijarachi kirish URL’larini bevosita tuzish o‘rniga qo‘llab-quvvatlanadigan SSO oqimi orqali ijarachi tashriflarini yaratishi kerak.

Tarmoq tomonidagi API audit hodisalari va kunlik xulosalar suveren ijarachi shlyuzlari uchun mavjud. Ijarachi hayotiy sikli endpointlariga murojaat qiladigan tashqi tizimlarni nosozliklardan tozalashda ushbu jurnallardan foydalaning.

## Suveren mijoz harakati URL’lari

Ultimate Multisite v2.13.0 suveren ijarachi mijoz harakatlarini Account, checkout, hisob-kitob, invoys, sayt, shablonni almashtirish va domen xaritalash oqimlari uchun asosiy saytga qayta yo‘naltiradi. Ijarachi tomonidagi boshqaruv havolalarini ko‘rsatadigan integratsiyalar bu harakatlarni asosiy sayt mijoz paneliga yo‘naltirishi va foydalanuvchi harakatni yakunlagandan so‘ng ijarachiga qayta o‘ta olishi kerak bo‘lsa, tasdiqlangan qaytish manzilini kiritishi kerak.

Domenlararo boshqaruv havolalari uchun asosiy SSO wrapper’dan foydalaning:

```php
$url = wu_with_sso($main_site_customer_url);
```

Yaratilgan URL `wu_sso_url` orqali filterlanadigan bo‘lib qoladi; u SSO URL’ini, joriy foydalanuvchini, maqsadli sayt ID’sini va redirect kontekstini qabul qiladi. Qo‘shimchalar Ultimate Multisite’ning token tekshiruvini saqlagan holda provayderga xos kontekst qo‘shish yoki broker URL’ini almashtirish uchun shu filterdan foydalanishi mumkin.

A’zolik, invoys, hisob-kitob manzili, shablon yoki domen boshqaruvi holatini suveren ijarachi ichida takrorlamang. Ijarachi dashboardini ishga tushirgich, asosiy sayt mijoz panelini esa boshqariladigan harakatlar uchun asosiy yozuv tizimi sifatida ko‘ring.

## Migratsiyani tekshirish

Migratsiya yoki hayotiy sikl integratsiyasi ijarachi ma’lumotlarini o‘zgartirgandan so‘ng, tekshiruv darvozalarini ishga tushiring:

- `wp tenant verify-no-legacy --site=<site-id>` ijarachi endi eski tarmoq tomonidagi yo‘llarga bog‘liq emasligini tasdiqlaydi.
- `wp tenant verify-sovereign-push --site=<site-id>` suveren push vazifalari qayta ishlashi va bo‘shashi mumkinligini tasdiqlaydi.

Integratsiyalar muvaffaqiyatsiz tekshiruvni joylashtirish bloklovchisi sifatida qabul qilishi va nosozlik bartaraf etilmaguncha ijarachini jonli deb belgilashdan qochishi kerak.

## Ijarachini o‘chirish

O‘chirish oqimlari ijarachi ma’lumotlar bazasi hisob ma’lumotlari tozalanishi uchun qo‘shimchaning teardown yo‘lini chaqirishi kerak. Tashqi integratsiyalar teardown muvaffaqiyatli yakunlangandan so‘ng provayder resurslarini olib tashlashi mumkin, ammo tekshiruv yoki async push vazifalari hali ishlayotgan paytda host ma’lumotlar bazalari yoki papkalarni o‘chirmasligi kerak.

## Eskirgan ma’lumotlar bazasi routeri

Eski `Database_Router` deprecation stub bilan almashtirildi. Yangi integratsiyalar eski router class’iga tayanish o‘rniga ijarachilarni joriy sayt routeri va ijarachi reyestri API’lari orqali aniqlashi kerak.
