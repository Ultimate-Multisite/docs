---
title: Учитавач датотеке Sunrise додатка
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Учитавач Sunrise датотека за додатке

Ultimate Multisite 2.8.0 додаје учитавач sunrise проширења за додатке и прилагођене MU-plugin интеграције које морају да се извршавају током WordPress sunrise иницијализације без уређивања генерисане датотеке `wp-content/sunrise.php`.

## Када га користити {#when-to-use-it}

Користите sunrise проширење када ваша интеграција мора да се изврши пре него што се учитају редовни додаци, као што су прилагођено усмеравање домена, обрада захтева специфична за хост или рана подешавања мрежне иницијализације.

За уобичајене интеграције, предност дајте редовним WordPress додацима, MU-plugin додацима и документованим Ultimate Multisite кукама. Sunrise код се извршава веома рано и треба да остане мали, дефанзиван и без зависности.

## Конвенција именовања датотека {#file-naming-convention}

Направите PHP датотеку под називом `sunrise.php` у директоријуму додатка чији назив почиње са `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Учитавач скенира директоријум додатака за овај образац:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Одговарајуће датотеке се учитавају абецедним редом према путањи додатка.

## Где поставити датотеку {#where-to-place-the-file}

Поставите датотеку у коренски директоријум додатка који поседује sunrise понашање:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Скенирање се разрешава релативно у односу на `WP_CONTENT_DIR`, а не на тренутну вредност `WP_PLUGIN_DIR`. Ово одржава откривање стабилним када вишезакупништво или други рани код иницијализације мења константе директоријума додатака током sunrise фазе.

Не уређујте директно генерисану датотеку `wp-content/sunrise.php`. Учитавач омогућава прилагођеном коду да прошири sunrise понашање без форковања основне sunrise датотеке коју Ultimate Multisite инсталира и ажурира.

## Доступне куке и филтери {#hooks-and-filters-available}

Sunrise датотеке додатака се извршавају након што се учита мапирање домена у Ultimate Multisite и пре него што WordPress покрене `ms_loaded`. У овом тренутку sunrise датотека може да:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- дефинише константе за sunrise фазу, као што је `BLOG_ID_CURRENT_SITE`, када је потребно;
- чита стање sunrise помоћника у Ultimate Multisite, укључујући стање усмеравања које користе интеграције за вишезакупништво.

Ultimate Multisite покреће `wu_sunrise_loaded` након што његов sunrise учитавач заврши. Користите ту акцију за код који треба да се изврши након што је sunrise иницијализација завршена, али и даље припада sunrise животном циклусу.

Позивајте само функције које су већ учитане у sunrise фази. Избегавајте рад који интензивно користи базу података, рендеровање шаблона, HTTP захтеве и код који претпоставља да је уобичајени редослед учитавања додатака завршен.

## Минимални пример {#minimal-example}

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

Након постављања датотеке, учитајте мапирани домен и URL немапираног главног сајта да бисте потврдили да се обе путање и даље правилно иницијализују.
