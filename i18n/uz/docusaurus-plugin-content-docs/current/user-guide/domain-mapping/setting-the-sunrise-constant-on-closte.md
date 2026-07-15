---
title: Closte-da Quyosh ko'rsatkichini sozlash
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-da Sunrise constantni true qilish

Ba'zi hosting provayderlari xavfsizlik sabablari bilan wp-config.php faylini bloklaydi. Bu esa Ultimate Multisite ning domen xaritasi va boshqa funksiyalar ishlamasligi uchun kerakli konstantalarni qo'shish uchun faylni avtomatik tahrirlashini cheklaydi. Closte shunday provayderlardan biridir.

Biroq, Closte wp-config.php ga konstantalar qo'shishning xavfsiz usulini taklif qiladi. Siz faqat quyidagi qadamlarni bajarishingiz kerak:

## Closte dashboardida {#on-the-closte-dashboard}

Avvalo, [Closte hisobingizga kiring](https://app.closte.com/), so‘ngra Sites menyusiga bosing va hozir ishlayotgan saytingiz Dashboard linkiga bosing:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranning chap tomonida sizga bir nechta yangi menyu elementlari ko'rsatiladi. Ushbu menyuni ishlating orqali **Settings** sahifasiga o'ting:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Keyin, **Settings** ichida WP-Config yorlig'ini toping va undagi "Additional wp-config.php content" maydonini qidiring:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite o'rnatish kontekstida, siz bu maydonga sunrise konstantasini qo'shishingiz kerak bo'ladi. Oddiygina yangi qator qo'shing va quyidagi qatorni joylashtiring. Keyin **Save All** tugmasiga bosing.

define('SUNRISE', true);

Bu qadar, siz tayyormisiz. Ultimate Multisite o'rnatish wizardiga qayting va jarayonni davom ettirish uchun sahifani yangilang.
