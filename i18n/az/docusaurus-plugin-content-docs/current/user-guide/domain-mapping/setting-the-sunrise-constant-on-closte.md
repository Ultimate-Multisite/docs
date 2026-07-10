---
title: Closte-da Gün Doğumu Sabitini Qurmaq
sidebar_position: 16
_i18n_hash: ce55527b126282d167eec4e3a8f824ea
---
# Closte-da Sunrise sabitini true olaraq təyin etmək {#setting-the-sunrise-constant-to-true-on-closte}

Bəzi host provayderləri təhlükəsizlik səbəbləri ilə `wp-config.php` faylını kilidləyir. Bu o deməkdir ki, Ultimate Multisite, domen xəritələnməsi və digər xüsusiyyətlərin işləməsi üçün lazım olan sabitləri avtomatik olaraq redaktə edə bilmir. Closte belə hostlardan biridir.

Lakin Closte, sabitləri `wp-config.php` faylına təhlükəsiz şəkildə əlavə etmək üçün bir yol təklif edir. Sadəcə aşağıdakı addımları izləməlisiniz:

## Closte dashboard-da {#on-the-closte-dashboard}

Əvvəlcə, [Closte hesabınıza daxil olun](https://app.closte.com/), Sites menyu elementinə klikləyin, sonra isə hazırda işlədiyiniz sayt üzərindəki Dashboard linkinə klikləyin:

<!-- Screenshot unavailable: Closte dashboard showing Sites menu and Dashboard link -->

Ekranın sol tərəfində bir neçə yeni menyu elementi görünəcək. Bu menyudan **Settings** səhifəsinə keçin:

<!-- Screenshot unavailable: Closte left sidebar menu showing Settings option -->

Sonra, **Settings**-də WP-Config tabını tapın və sonra bu tabda yerləşən "Additional wp-config.php content" sahəsini tapın:

<!-- Screenshot unavailable: Closte Settings page with WP-Config tab showing Additional wp-config.php content field -->

Ultimate Multisite-ı quraşdırmaq kontekstində, bu sabitini o sahəyə əlavə etməlisiniz. Sadəcə yeni bir sətir əlavə edin və aşağıdakı sətri yapışdırın. Bundan sonra **Save All** düyməsinə klikləyin.

define('SUNRISE', true);

Bu qədər, hazırsınız. Ultimate Multisite quraşdırma alətçasına qayıdın və prosesi davam etdirmək üçün səhifəni yeniləyin.
