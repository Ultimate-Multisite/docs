---
title: Addon Sunrise вчитувач на датотеки
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 додава вчитувач на sunrise екстензии за додатоци и прилагодени MU-plugin интеграции што треба да се извршуваат за време на WordPress sunrise подигнувањето без уредување на генерираната датотека `wp-content/sunrise.php`.

## Кога да го користите

Користете sunrise екстензија кога вашата интеграција мора да се изврши пред да се вчитаат редовните приклучоци, како прилагодено рутирање на домени, обработка на барања специфична за хост или рани приспособувања на мрежното подигнување.

За нормални интеграции, претпочитајте редовни WordPress приклучоци, MU-plugins и документираните Ultimate Multisite hooks. Sunrise кодот се извршува многу рано и треба да остане мал, дефанзивен и без зависности.

## Конвенција за именување датотеки

Создајте PHP датотека именувана `sunrise.php` во директориум на додаток чие име започнува со `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Вчитувачот го скенира директориумот со приклучоци за овој образец:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Соодветните датотеки се вчитуваат по азбучен редослед според патеката на додатокот.

## Каде да ја поставите датотеката

Поставете ја датотеката во коренскиот директориум на додатокот што го поседува sunrise однесувањето:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Скенирањето се разрешува релативно на `WP_CONTENT_DIR`, а не на тековната вредност на `WP_PLUGIN_DIR`. Ова го одржува откривањето стабилно кога multi-tenancy или друг ран код за подигнување ги менува константите на директориумот со приклучоци за време на sunrise.

Не ја уредувајте генерираната датотека `wp-content/sunrise.php` директно. Вчитувачот му овозможува на прилагодениот код да го прошири sunrise однесувањето без fork на основната sunrise датотека што Ultimate Multisite ја инсталира и ажурира.

## Достапни hooks и филтри

Addon sunrise датотеките се извршуваат откако мапирањето домени на Ultimate Multisite ќе се вчита и пред WordPress да го активира `ms_loaded`. Во овој момент, sunrise датотека може да:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- дефинира константи за време на sunrise, како `BLOG_ID_CURRENT_SITE`, кога е потребно;
- ја чита состојбата на sunrise помошниците на Ultimate Multisite, вклучувајќи ја состојбата на рутирање што ја користат multi-tenancy интеграциите.

Ultimate Multisite го активира `wu_sunrise_loaded` откако неговиот sunrise вчитувач ќе заврши. Користете ја таа акција за код што треба да се изврши по завршувањето на sunrise подигнувањето, но сè уште припаѓа на sunrise животниот циклус.

Повикајте само функции што веќе се вчитани во sunrise фазата. Избегнувајте работа што многу ја оптоварува базата на податоци, рендерирање шаблони, HTTP барања и код што претпоставува дека нормалниот редослед на вчитување приклучоци е завршен.

## Минимален пример

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

По распоредувањето на датотеката, вчитајте мапиран домен и URL на немапирана главна локација за да потврдите дека двете патеки сè уште се подигнуваат правилно.
