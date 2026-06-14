---
title: Closte-da Şüryəni Düzəltmək
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Sunrise константы Closte-де включение

Некоторые хостинг провайдеры файл wp-config.php-и хакерlik (безопасность) sebäbi bloklayt. Это значит, что Ultimate Multisite avtomatiki fayly tahrir qila bilmasin, shunda domen xaritasi va boshqa funksiyalar ishlashi uchun zarur bo'lgan konstantalarni qo'shib bera olmaydi. Closte shunday hostlardan biridir.

Biroq, Closte wp-config.php ga konstantalar qo'shishning xavfsiz yo'lini taklif qiladi. Siz faqat quyidagi qadamlarni bajarishingiz kerak:

## Closte paneli orqali

Avvalo, [Closte hisobingizga kiring](https://app.closte.com/), sozlanganlar (Sites) menyusiga bosing, keyin hozir ishlayotgan saytning Dashboard linkiga bosing:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranning chap tomonida sizga bir nechta yangi menyu elementlari ko'rsatiladi. Ushbu menyudan **Settings** (Sozlamalar) sahifasiga o'ting:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Keyin, **Settings** ichida WP-Config yorlig'ini toping va undagi "Additional wp-config.php content" maydonini qidiring:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite o'rnatish kontekstida, siz bu maydonga sunrise konstantasini qo'shishingiz kerak. Oddiygina yangi qator qo'shing va quyidagi qatorni joylang:

define('SUNRISE', true);

Bu baribir barcha ishlar tayyor. Ultimate Multisite o'rnatish wizardiga qayting va jarayonni davom ettirish uchun sahifani yangilang.
