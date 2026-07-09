---
title: Кошумча модулдун Sunrise файл жүктөгүчү
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise файл жүктөгүчү

Ultimate Multisite 2.8.0 кошумчалар жана жекече MU-plugin интеграциялары үчүн, түзүлгөн `wp-content/sunrise.php` файлын түзөтпөстөн WordPress sunrise жүктөлүшү учурунда иштеши керек болгон sunrise кеңейтме жүктөгүчүн кошот.

## Качан колдонуу керек

Интеграцияңыз кадимки плагиндер жүктөлгөнгө чейин иштеши керек болгондо, мисалы жекече домен багыттоо, хостко өзгөчө суроо-талаптарды иштетүү же алгачкы тармак жүктөлүшүн тууралоо сыяктуу учурларда sunrise кеңейтмесин колдонуңуз.

Кадимки интеграциялар үчүн кадимки WordPress плагиндерин, MU-плагиндерди жана документтелген Ultimate Multisite hook’торун артык көрүңүз. Sunrise коду өтө эрте иштейт жана чакан, коргоочу жана көзкарандылыксыз болушу керек.

## Файл аталышынын эрежеси

Аталышы `ultimate-multisite-` менен башталган addon директориясында `sunrise.php` деп аталган PHP файл түзүңүз:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Жүктөгүч плагиндер директориясын ушул үлгү боюнча скандайт:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Дал келген файлдар addon жолу боюнча алфавиттик тартипте жүктөлөт.

## Файлды кайда жайгаштыруу керек

Файлды sunrise жүрүм-турумуна ээ болгон addon’дун түпкү директориясына жайгаштырыңыз:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Скандоо учурдагы `WP_PLUGIN_DIR` маанисине эмес, `WP_CONTENT_DIR`’ге салыштырмалуу чечилет. Бул multi-tenancy же башка алгачкы жүктөө коду sunrise учурунда плагин директориясынын константаларын өзгөрткөндө табууну туруктуу сактайт.

Түзүлгөн `wp-content/sunrise.php` файлын түздөн-түз түзөтпөңүз. Жүктөгүч жекече кодго Ultimate Multisite орнотуп жана жаңыртып турган негизги sunrise файлын бөлүп чыкпай эле sunrise жүрүм-турумун кеңейтүүгө мүмкүндүк берет.

## Жеткиликтүү hook’тор жана filter’лер

Addon sunrise файлдары Ultimate Multisite домен карталоосу жүктөлгөндөн кийин жана WordPress `ms_loaded` иштеткенге чейин иштейт. Бул учурда sunrise файлы төмөнкүлөрдү кыла алат:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- керек болгондо `BLOG_ID_CURRENT_SITE` сыяктуу sunrise-убакыт константаларын аныктоо;
- Ultimate Multisite sunrise жардамчы абалын, анын ичинде multi-tenancy интеграциялары колдонгон багыттоо абалын окуу.

Ultimate Multisite sunrise жүктөгүчү аяктагандан кийин `wu_sunrise_loaded` иштетет. Sunrise жүктөлүшү толук аяктагандан кийин иштеши керек, бирок дагы эле sunrise жашоо циклине таандык болгон код үчүн ошол action’ду колдонуңуз.

Sunrise фазасында буга чейин жүктөлгөн функцияларды гана чакырыңыз. Маалымат базасына оор жумуштардан, template көрсөтүүдөн, HTTP суроо-талаптарынан жана кадимки плагин жүктөө тартиби аяктады деп божомолдогон коддон качыңыз.

## Минималдуу мисал

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

Файлды жайгаштыргандан кийин, эки жол тең туура жүктөлөрүн ырастоо үчүн карталанган доменди жана карталанбаган негизги сайт URL’ин жүктөңүз.
