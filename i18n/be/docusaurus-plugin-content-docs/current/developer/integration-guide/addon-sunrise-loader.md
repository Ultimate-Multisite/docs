---
title: Аддатак Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 дадаў загружальнік (loader) пашырэнняў sunrise для аддонаў і карысных інстыляцый MU-plugin, якія павінны прайсці ў працэсе загрузкі WordPress sunrise без рэдагавання зэчнага файла `wp-content/sunrise.php`.

## Калі яго выкарыстоўваць {#when-to-use-it}

Выкарыстоўвайце пашырэння sunrise, калі ваша інстыляцыя павінна прайсці ў працэсе загрузкі раней, чым звычайныя плагіны, напрыклад, для маршрутызацыі карысных доменаў, апрацоўкі запытаў, спецыфічных для хоста, або для ранага наладжання сеткі.

Для звычайных інстыляцый лепш выкарыстоўваць звычайныя плагіны WordPress, MU-plugins і задокументаваныя хукі Ultimate Multisite. Код sunrise праходзіць вельмі рана і павінен быць маленькім, абароненым і не залежаць ад іншых кампанентаў.

## Тэматычная канвенцыя імянавання файла {#file-naming-convention}

Стварыце PHP файл з назвай `sunrise.php` у каталогу аддону, назва якіга павінна пачынацца з `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Загружальнік скануе каталог плагінаў па гэтай тэматычнай канвенцыі:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Знайдзеныя файлы загружаюцца ў алфавітным парадку па шляху аддону.

## Калі размесціць файл {#where-to-place-the-file}

Размясціце файл у галоўным каталогу аддону, які мае паведамленне sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Скануэнне вызначаецца адносна `WP_CONTENT_DIR`, а не адносна бягучага значэння `WP_PLUGIN_DIR`. Гэта забяспечвае стабільнасць выяўлення, калі ў рэжыме multi-tenancy або іншыя ранае код загрузкі змяняюць канстанты каталогу плагінаў.

Не рэдагуйце непасрэдна зэчнага файла `wp-content/sunrise.php`. Загружальнік дазваляе карысным кода пашыраць паведамленне sunrise, не робячы "форк" (forking) асноўнага файла sunrise, які ўсталёўвае і абнаўляе Ultimate Multisite.

## Даступныя хукі і фільтры {#hooks-and-filters-available}

Файлы аддонаў sunrise праходзяць пасля загрузкі мапіравання доменаў Ultimate Multisite і перад тым, як WordPress выклікае `ms_loaded`. У гэты момант файл sunrise можа:

- прачытаць або перавызначыць `$current_site` і `$current_blog`;
- атрымаць доступ да `$wpdb` пасля загрузкі канфігурацыі базы дадзеных;
- вызначыць канстанты для часу sunrise, такія як `BLOG_ID_CURRENT_SITE`, калі гэта неабходна;
- прачытаць стан дапаможнага файла Ultimate Multisite sunrise, уключаючы стан маршрутызацыі, выкарыстованы інстыляцыямі multi-tenancy.

Ultimate Multisite выклікае `wu_sunrise_loaded` пасля завершэння свайго загружальніка sunrise. Выкарыстоўвайце гэты экшн для кода, які павінен прайсці пасля завершэння загрузкі sunrise, але ўсё яшчэ належыць да жыцкавага цыкла sunrise.

Выклікайце толькі тыя функцыі, якія ўжо загружаны ў фазе sunrise. Пазбегавайце працы, якая шмат вымагае базы дадзеных, рэндерыביע адпавіданняў (template rendering), HTTP-запытаў і кода, які па落гае, што звычайны парадак загрузкі плагінаў завершаны.

## Мінімальны прыклад {#minimal-example}

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

Пасля разгортвання файла загрузіце мапіраваны домен і незмапіраваны URL галоўнага сайта, каб пацвердзіць, што абодва шляхі ўсё яшчэ правільна праходзяць загрузку.
