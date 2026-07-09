---
title: Нэмэлт Sunrise файлын ачаалагч
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise файл ачаалагч

Ultimate Multisite 2.8.0 нь нэмэлтүүд болон үүсгэгдсэн `wp-content/sunrise.php` файлыг засварлахгүйгээр WordPress sunrise ачааллын эхлүүлэх үед ажиллах шаардлагатай custom MU-plugin интеграцуудад зориулсан sunrise өргөтгөл ачаалагчийг нэмдэг.

## Хэзээ ашиглах вэ

Таны интеграц ердийн plugin-ууд ачаалагдахаас өмнө ажиллах ёстой үед, жишээлбэл custom домэйн чиглүүлэлт, хостод тусгайлсан хүсэлтийн боловсруулалт, эсвэл сүлжээний эрт үеийн bootstrap тохируулгад sunrise өргөтгөлийг ашиглана уу.

Ердийн интеграцуудад ердийн WordPress plugin-ууд, MU-plugin-ууд болон баримтжуулсан Ultimate Multisite hook-уудыг илүүд үзээрэй. Sunrise код маш эрт ажилладаг тул жижиг, хамгаалалттай, хамааралгүй байх ёстой.

## Файл нэрлэх дүрэм

`ultimate-multisite-` гэж эхэлсэн нэртэй addon лавлах дотор `sunrise.php` нэртэй PHP файл үүсгэнэ үү:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ачаалагч нь plugins лавлахыг энэ загвараар шалгана:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Тохирох файлуудыг addon замаар цагаан толгойн дарааллаар ачаална.

## Файлыг хаана байрлуулах вэ

Файлыг sunrise зан төлөвийг эзэмшдэг addon-ы үндсэн лавлахад байрлуулна уу:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Хайлт нь `WP_PLUGIN_DIR`-ийн одоогийн утгаас бус, `WP_CONTENT_DIR`-тэй харьцуулан шийдэгдэнэ. Энэ нь олон түрээслэгчийн горим эсвэл бусад эрт үеийн bootstrap код sunrise үед plugin лавлахын тогтмолуудыг өөрчлөхөд илрүүлэлтийг тогтвортой байлгадаг.

Үүсгэгдсэн `wp-content/sunrise.php` файлыг шууд бүү засварлаарай. Ачаалагч нь custom кодод Ultimate Multisite-ийн суулгаж, шинэчилдэг үндсэн sunrise файлыг fork хийхгүйгээр sunrise зан төлөвийг өргөтгөх боломж олгодог.

## Боломжтой hook болон filter-үүд

Addon sunrise файлууд Ultimate Multisite домэйн зураглал ачаалагдсаны дараа, WordPress `ms_loaded`-ийг ажиллуулахаас өмнө ажиллана. Энэ үед sunrise файл дараахыг хийх боломжтой:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- шаардлагатай үед `BLOG_ID_CURRENT_SITE` зэрэг sunrise үеийн тогтмолуудыг тодорхойлох;
- multi-tenancy интеграцуудад ашиглагддаг чиглүүлэлтийн төлөв зэрэг Ultimate Multisite sunrise туслахын төлөвийг унших.

Ultimate Multisite нь өөрийн sunrise ачаалагч дууссаны дараа `wu_sunrise_loaded`-ийг ажиллуулдаг. Sunrise bootstrap бүрэн дууссаны дараа ажиллах ёстой боловч sunrise амьдралын мөчлөгт хамаарах кодод энэ action-ыг ашиглана уу.

Зөвхөн sunrise үе шатанд аль хэдийн ачаалагдсан функцүүдийг дуудна уу. Өгөгдлийн санд их ачаалал өгөх ажил, template дүрслэлт, HTTP хүсэлтүүд болон ердийн plugin ачааллын дараалал дууссан гэж үздэг кодуудаас зайлсхий.

## Хамгийн бага жишээ

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

Файлыг байршуулсны дараа зураглагдсан домэйн болон зураглагдаагүй үндсэн сайтын URL-ийг ачаалж, хоёр зам хоёулаа зөв bootstrap хийгдэж байгааг баталгаажуулна уу.
