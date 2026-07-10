---
title: Sesebelisoa sa Keketso sa ho Kenya Faele ea Sunrise
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Sejarolli sa Faele sa Sunrise sa Addon {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 e eketsa sejarolli sa katoloso ya sunrise bakeng sa di-add-on le dikopanyo tsa MU-plugin tse ikgethileng tse hlokang ho sebetsa nakong ya WordPress sunrise bootstrapping ntle le ho hlophisa faele e hlahisitsweng ya `wp-content/sunrise.php`.

## Nako ya ho e sebedisa {#when-to-use-it}

Sebedisa katoloso ya sunrise ha kopanyo ya hao e tlameha ho sebetsa pele di-plugin tse tlwaelehileng di jarollwa, jwalo ka ho tsamaisa domain e ikgethileng, ho sebetsana le dikopo tse ikgethileng ho host, kapa diphetoho tsa pele tsa bootstrap ya neteweke.

Bakeng sa dikopanyo tse tlwaelehileng, kgetha ho sebedisa di-plugin tse tlwaelehileng tsa WordPress, MU-plugins, le di-hook tsa Ultimate Multisite tse ngotsweng ditokomaneng. Khoutu ya sunrise e sebetsa kapele haholo mme e lokela ho dula e le nyane, e itshireletsa, ebile e se na ditshengelo.

## Mokgwa wa ho reha faele lebitso {#file-naming-convention}

Etsa faele ya PHP e bitswang `sunrise.php` ka hara bukantswe ya addon eo lebitso la yona le qalang ka `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Sejarolli se lekola bukantswe ya di-plugin bakeng sa paterone ena:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Difaele tse tsamaellanang di jarollwa ka tatellano ya alfabete ho ya ka tsela ya addon.

## Moo o ka behang faele teng {#where-to-place-the-file}

Beha faele bukantsweng ya motso ya addon e nang le boitshwaro ba sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Tlhahlobo e rarollwa ho ya ka `WP_CONTENT_DIR`, eseng boleng ba hona jwale ba `WP_PLUGIN_DIR`. Sena se boloka ho sibolla ho tsitsitse ha multi-tenancy kapa khoutu e nngwe ya pele ya bootstrap e fetola dikonstante tsa bukantswe ya di-plugin nakong ya sunrise.

Se ke wa hlophisa faele e hlahisitsweng ya `wp-content/sunrise.php` ka kotloloho. Sejarolli se dumella khoutu e ikgethileng ho atolosa boitshwaro ba sunrise ntle le ho etsa fork ya faele ya mantlha ya sunrise eo Ultimate Multisite e e kenyang le ho e ntjhafatsa.

## Di-hook le difilthara tse fumanehang {#hooks-and-filters-available}

Difaele tsa sunrise tsa addon di sebetsa ka mora hore ho mmapa ha domain ha Ultimate Multisite ho jarollwe le pele WordPress e thunya `ms_loaded`. Mothating ona faele ya sunrise e ka:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- hlalosa dikonstante tsa nako ya sunrise tse kang `BLOG_ID_CURRENT_SITE` ha ho hlokahala;
- bala boemo ba mothusi wa sunrise wa Ultimate Multisite, ho kenyeletswa boemo ba routing bo sebediswang ke dikopanyo tsa multi-tenancy.

Ultimate Multisite e thunya `wu_sunrise_loaded` ka mora hore sejarolli sa yona sa sunrise se qete. Sebedisa ketso eo bakeng sa khoutu e lokelang ho sebetsa ka mora hore bootstrap ya sunrise e phethehe empa e ntse e le karolo ya potoloho ya bophelo ya sunrise.

Bitsa feela difunction tse seng di jarollotswe mokgahlelong wa sunrise. Qoba mosebetsi o boima wa database, ho hlahisa template, dikopo tsa HTTP, le khoutu e nahanang hore tatellano e tlwaelehileng ya ho jarolla di-plugin e se e phethetse.

## Mohlala o monyane {#minimal-example}

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

Ka mora ho kenya faele, jarolla domain e mmapilweng le URL ya main-site e sa mmapwang ho netefatsa hore ditsela ka bobedi di ntse di etsa bootstrap ka nepo.
