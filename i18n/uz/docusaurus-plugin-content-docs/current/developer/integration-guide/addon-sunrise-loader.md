---
title: Qo‘shimcha Sunrise fayli yuklagichi
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise fayl yuklagichi {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 add-onlar va yaratilgan `wp-content/sunrise.php` faylini tahrirlamasdan WordPress sunrise ishga tushirish jarayonida ishlashi kerak bo‘lgan maxsus MU-plugin integratsiyalari uchun sunrise kengaytma yuklagichini qo‘shadi.

## Qachon undan foydalanish kerak {#when-to-use-it}

Integratsiyangiz odatiy pluginlar yuklanishidan oldin ishlashi kerak bo‘lsa, masalan, maxsus domen yo‘naltirish, hostga xos so‘rovlarni qayta ishlash yoki erta tarmoq ishga tushirish sozlamalari kabi holatlarda sunrise kengaytmasidan foydalaning.

Oddiy integratsiyalar uchun odatiy WordPress pluginlari, MU-pluginlar va hujjatlashtirilgan Ultimate Multisite hooklaridan foydalanish afzal. Sunrise kodi juda erta ishlaydi va kichik, himoyaviy hamda bog‘liqliksiz bo‘lib qolishi kerak.

## Fayl nomlash qoidasi {#file-naming-convention}

Nomi `ultimate-multisite-` bilan boshlanadigan addon katalogida `sunrise.php` nomli PHP fayl yarating:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Yuklagich pluginlar katalogini ushbu namuna bo‘yicha skanerlaydi:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Mos keladigan fayllar addon yo‘li bo‘yicha alifbo tartibida yuklanadi.

## Faylni qayerga joylashtirish kerak {#where-to-place-the-file}

Faylni sunrise xatti-harakatiga egalik qiladigan addonning ildiz katalogiga joylashtiring:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skanerlash joriy `WP_PLUGIN_DIR` qiymatiga emas, `WP_CONTENT_DIR`ga nisbatan aniqlanadi. Bu multi-tenancy yoki boshqa erta ishga tushirish kodi sunrise vaqtida plugin katalogi konstantalarini o‘zgartirganda aniqlashni barqaror saqlaydi.

Yaratilgan `wp-content/sunrise.php` faylini bevosita tahrirlamang. Yuklagich maxsus kodga Ultimate Multisite o‘rnatadigan va yangilaydigan asosiy sunrise faylini fork qilmasdan sunrise xatti-harakatini kengaytirish imkonini beradi.

## Mavjud hooklar va filterlar {#hooks-and-filters-available}

Addon sunrise fayllari Ultimate Multisite domen xaritalash yuklangandan keyin va WordPress `ms_loaded`ni ishga tushirishidan oldin ishlaydi. Bu paytda sunrise fayli quyidagilarni qila oladi:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- kerak bo‘lganda `BLOG_ID_CURRENT_SITE` kabi sunrise-vaqti konstantalarini aniqlash;
- Ultimate Multisite sunrise yordamchi holatini, jumladan multi-tenancy integratsiyalari ishlatadigan yo‘naltirish holatini o‘qish.

Ultimate Multisite o‘zining sunrise yuklagichi tugagandan so‘ng `wu_sunrise_loaded`ni ishga tushiradi. Bu amaldan sunrise ishga tushirish yakunlangandan keyin ishlashi kerak bo‘lgan, lekin baribir sunrise hayot sikliga tegishli kod uchun foydalaning.

Faqat sunrise bosqichida allaqachon yuklangan funksiyalarni chaqiring. Ma’lumotlar bazasiga og‘ir ishlar, shablon renderlash, HTTP so‘rovlari va odatiy plugin yuklanish tartibi yakunlangan deb taxmin qiladigan koddan saqlaning.

## Minimal misol {#minimal-example}

```php
<?php
/**
 * Sunrise extension for a custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Faylni joylashtirgandan so‘ng, ikkala yo‘l ham to‘g‘ri ishga tushayotganini tasdiqlash uchun xaritalangan domen va xaritalanmagan asosiy-sayt URLini yuklang.
