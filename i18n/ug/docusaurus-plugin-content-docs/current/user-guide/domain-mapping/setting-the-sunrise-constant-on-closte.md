---
title: Closte-da Gün Doğuş Sabitini Belirleme
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-da Sunrise constantini true qoyish {#setting-the-sunrise-constant-to-true-on-closte}

Bazı hosting provayderleri xavfsizlik sebep bilen wp-config.php faylını bloklaydılar. Bu demakdan Ultimate Multisite, domen eşleşmesi va boshqa funksiyalar işləsin dii zarur bolgan konstantalarni qo'shish uchun faylni avtomatik tahrirlay olmaydi. Closte shunday hostlardan biridir.

Biroq, Closte wp-config.php ga constantlarni xavfsiz tarzda qo'shish yo'lini taklif qiladi. Siz faqat quyidagi qadamlarni bajarishingiz kerak:

## Closte dashboardida {#on-the-closte-dashboard}

Avvalo, [Closte hisobingizga kiring](https://app.closte.com/), so'ngra Sites menyusiga bosing va hozir ishlayotgan saytingiz Dashboard linkiga bosing:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranın sol tarafında sizə bir neçə yeni menü maddəsi görünecek. Bu menü vasitəsilə **Settings** (Ayarlar) səhifəsinə keçin:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Sonra, **Settings** içində WP-Config tabını tapın və həmin tabda olan "Additional wp-config.php content" (Əlavə wp-config.php məzmunu) sahəsini axtarın:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite quraşdırma kontekstində, siz bu sahəyə `SUNRISE` sabitini əlavə etməlisiniz. Sadəcə yeni bir sətir əlavə edin və aşağıdakı sətri yapıştırın. Bundan sonra **Save All** (Hər şeyi Yadda Saxla) düyməsini basın.

define('SUNRISE', true);

Ҳа, шундай бўлди. Истиқболда Ultimate Multisite ўрнатиш дастурига қайтинг ва жараённи давом эттириш учун саҳифани янгиланг.
