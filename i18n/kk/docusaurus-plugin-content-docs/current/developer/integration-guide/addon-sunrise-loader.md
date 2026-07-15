---
title: Қосымша Sunrise файл жүктеушісі
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise файл жүктегіші

Ultimate Multisite 2.8.0 қосымшаларға және жасалған `wp-content/sunrise.php` файлын өңдемей-ақ WordPress sunrise бастапқы жүктелуі кезінде орындалуы қажет реттелетін MU-plugin интеграцияларына арналған sunrise кеңейтім жүктегішін қосады.

## Оны қашан пайдалану керек {#when-to-use-it}

Интеграцияңыз әдеттегі плагиндер жүктелмей тұрып орындалуы қажет болса, мысалы, реттелетін домен бағыттауы, хостқа тән сұрауды өңдеу немесе ерте желілік бастапқы жүктеу түзетулері үшін sunrise кеңейтімін пайдаланыңыз.

Қалыпты интеграциялар үшін әдеттегі WordPress плагиндерін, MU-плагиндерін және құжатталған Ultimate Multisite hooks пайдаланыңыз. Sunrise коды өте ерте орындалады және шағын, сақтықпен жазылған әрі тәуелділіксіз болуы керек.

## Файл атауының келісімі {#file-naming-convention}

Атауы `ultimate-multisite-` деп басталатын addon каталогында `sunrise.php` атты PHP файлын жасаңыз:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Жүктегіш plugins каталогын мына үлгі бойынша сканерлейді:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Сәйкес файлдар addon жолы бойынша әліпбилік ретпен жүктеледі.

## Файлды қайда орналастыру керек {#where-to-place-the-file}

Файлды sunrise мінез-құлқына иелік ететін addon түбірлік каталогына орналастырыңыз:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Сканерлеу `WP_PLUGIN_DIR` ағымдағы мәніне емес, `WP_CONTENT_DIR` қатысты анықталады. Бұл көп жалға алушылық немесе басқа ерте бастапқы жүктеу коды sunrise кезінде plugin каталогының тұрақтыларын өзгерткенде табуды тұрақты сақтайды.

Жасалған `wp-content/sunrise.php` файлын тікелей өңдемеңіз. Жүктегіш реттелетін кодқа Ultimate Multisite орнататын және жаңартатын негізгі sunrise файлын тармақтамай-ақ sunrise мінез-құлқын кеңейтуге мүмкіндік береді.

## Қолжетімді hooks және сүзгілер {#hooks-and-filters-available}

Addon sunrise файлдары Ultimate Multisite домен сәйкестендіруі жүктелгеннен кейін және WordPress `ms_loaded` іске қоспай тұрып орындалады. Осы сәтте sunrise файлы мыналарды істей алады:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- қажет болғанда `BLOG_ID_CURRENT_SITE` сияқты sunrise уақытының тұрақтыларын анықтау;
- Ultimate Multisite sunrise көмекші күйін, соның ішінде көп жалға алушылық интеграциялары пайдаланатын бағыттау күйін оқу.

Ultimate Multisite өзінің sunrise жүктегіші аяқталғаннан кейін `wu_sunrise_loaded` іске қосады. Бұл әрекетті sunrise бастапқы жүктеуі аяқталғаннан кейін орындалуы керек, бірақ әлі де sunrise өмірлік цикліне жататын код үшін пайдаланыңыз.

Тек sunrise кезеңінде әлдеқашан жүктелген функцияларды шақырыңыз. Дерекқорды көп пайдаланатын жұмыстан, үлгі көрсетуінен, HTTP сұрауларынан және қалыпты plugin жүктелу реті аяқталды деп болжайтын кодтан аулақ болыңыз.

## Минималды мысал {#minimal-example}

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

Файлды орналастырғаннан кейін, екі жол да әлі дұрыс бастапқы жүктелетінін растау үшін сәйкестендірілген доменді және сәйкестендірілмеген негізгі сайт URL мекенжайын жүктеңіз.
