---
title: Sunrise Fayl Yükləyici Eklentisi
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise Fayl Yükləyicisi

Ultimate Multisite 2.8.0, add-onlar və custom MU-plugin inteqrasiyaları üçün bir sunrise extension loader əlavə edir. Bu, `wp-content/sunrise.php` faylını redaktə etmədən, WordPress sunrise bootstrapping zamanı işləməsi lazım olan hallarda istifadə olunur.

## Nə vaxt istifadə etməli {#when-to-use-it}

Sunrise extension-dan istifadə etməlisiniz, inteqrasiyanızın adi pluginlər yüklənməzdən əvvəl işləməsi vacibdirsə. Məsələn: custom domain yönləndirməsi, host-a xas sorğu emalı və ya erkən network bootstrap tənzimləmələri.

Normal inteqrasiyalar üçün isə adi WordPress pluginlərini, MU-pluginləri və sənədləşdirilmiş Ultimate Multisite hook-larını üstün tutun. Sunrise kodu çox erkən işləyir və kiçik, müdafiəli və asılılıqdan azad olmalıdır.

## Fayl adlandırma konvensiyası {#file-naming-convention}

`ultimate-multisite-` ilə başlayan adlı bir add-on kataloqunda `sunrise.php` adlı bir PHP faylı yaradın:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Yükləyici (loader) bu nümunəyə görə pluginlər kataloqunu skan edir:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Uyğun gələn fayllar, add-on yoluna görə alfabetik sırayla yüklənir.

## Faylı harada yerləşdirməli {#where-to-place-the-file}

Faylı, sunrise davranışına sahib olan add-onun kök kataloqunda yerləşdirin:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skan, cari `WP_PLUGIN_DIR` dəyərinə deyil, `WP_CONTENT_DIR` nisbətində həll olunur. Bu, multi-tenancy və ya digər erkən bootstrap kodu sunrise zamanı plugin kataloqu sabitlərini dəyişdikdə aşkar etmənin sabit qalmasını təmin edir.

Birbaşa olaraq yaradılmış `wp-content/sunrise.php` faylını redaktə etməyin. Yükləyici, Ultimate Multisite tərəfindən quraşdırılan və yenilənən əsas sunrise faylını "fork" etmədən, custom kodun sunrise davranışını genişləndirməsinə imkan verir.

## Mövcud hook və filter-lər {#hooks-and-filters-available}

Addon sunrise faylları, Ultimate Multisite domain mapping yükləndikdən sonra və WordPress `ms_loaded` funksiyasını çağırmadan əvvəl işləyir. Bu mərhələdə bir sunrise faylı aşağıdakıları edə bilər:

- `$current_site` və `$current_blog` dəyişənlərini oxuya və ya üstələyə bilər;
- verilənlər bazası konfiqurasiyası yükləndikdən sonra `$wpdb`-yə daxil ola bilər;
- lazım olduqda `BLOG_ID_CURRENT_SITE` kimi sunrise-zamanı sabitləri təyin edə bilər;
- multi-tenancy inteqrasiyaları tərəfindən istifadə edilən yönləndirmə vəziyyəti daxil olmaqla, Ultimate Multisite sunrise helper vəziyyətini oxuya bilər.

Ultimate Multisite, sunrise yükləyicisi başa çatdıqdan sonra `wu_sunrise_loaded` funksiyasını çağırır. Bu action-u, sunrise bootstrap-ı tamamlandıqdan sonra işləməli olan, lakin hələ də sunrise yaşam dövrünə aid olan kod üçün istifadə edin.

Yalnız sunrise mərhələsində artıq yüklənmiş funksiyalara çağırın. Verilənlər bazası ilə bağlı ağır işlər, template render etmək, HTTP sorğuları və normal plugin yüklənmə sırasının tamamlandığını fərz edən koddan çəkinin.

## Minimal nümunə {#minimal-example}

```php
<?php
/**
 * Custom host inteqrasiyası üçün Sunrise extension.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Erkən yönləndirməni və ya sabitləri ms_loaded-dan əvvəl tənzimləyin.
}
```

Faylı yerləşdirdikdən sonra, hər iki yolun (xəritələnmiş domain və xəritələnmemiş əsas sayt URL-i) düzgün bootstrap etdiyini təsdiqləmək üçün bir domain və xəritələnmemiş əsas sayt URL-i yükləyin.
