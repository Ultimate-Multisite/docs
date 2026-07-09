---
title: Tagapag-load ng Sunrise File na Addon
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Nagdadagdag ang Ultimate Multisite 2.8.0 ng sunrise extension loader para sa mga add-on at custom na integrasyon ng MU-plugin na kailangang tumakbo habang ginagawa ang WordPress sunrise bootstrapping nang hindi ini-edit ang nabuong file na `wp-content/sunrise.php`.

## Kailan ito gamitin

Gumamit ng sunrise extension kapag ang iyong integrasyon ay dapat tumakbo bago ma-load ang mga karaniwang plugin, tulad ng custom na domain routing, paghawak ng request na partikular sa host, o maagang mga pagsasaayos sa network bootstrap.

Para sa mga normal na integrasyon, mas mainam ang mga karaniwang WordPress plugin, MU-plugin, at dokumentadong Ultimate Multisite hooks. Tumatakbo ang sunrise code nang napakaaga at dapat manatiling maliit, maingat, at walang dependency.

## Kombensiyon sa pagpapangalan ng file

Gumawa ng PHP file na pinangalanang `sunrise.php` sa isang direktoryo ng addon na ang pangalan ay nagsisimula sa `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Sini-scan ng loader ang direktoryo ng mga plugin para sa pattern na ito:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ilo-load ang mga tumutugmang file sa alpabetikong pagkakasunod-sunod ayon sa path ng addon.

## Saan ilalagay ang file

Ilagay ang file sa root directory ng addon na nagmamay-ari ng sunrise behaviour:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Nire-resolve ang scan na kaugnay ng `WP_CONTENT_DIR`, hindi ang kasalukuyang value ng `WP_PLUGIN_DIR`. Pinapanatili nitong stable ang discovery kapag binabago ng multi-tenancy o iba pang maagang bootstrap code ang mga constant ng direktoryo ng plugin habang sunrise.

Huwag direktang i-edit ang nabuong file na `wp-content/sunrise.php`. Hinahayaan ng loader ang custom code na palawigin ang sunrise behaviour nang hindi gumagawa ng fork ng core sunrise file na ini-install at ina-update ng Ultimate Multisite.

## Mga available na hook at filter

Tumatakbo ang mga addon sunrise file pagkatapos ma-load ang Ultimate Multisite domain mapping at bago patakbuhin ng WordPress ang `ms_loaded`. Sa puntong ito, maaaring gawin ng sunrise file ang mga sumusunod:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- mag-define ng mga constant sa sunrise-time tulad ng `BLOG_ID_CURRENT_SITE` kapag kailangan;
- basahin ang Ultimate Multisite sunrise helper state, kabilang ang routing state na ginagamit ng mga integrasyon ng multi-tenancy.

Pina-fire ng Ultimate Multisite ang `wu_sunrise_loaded` pagkatapos matapos ang sunrise loader nito. Gamitin ang action na iyon para sa code na dapat tumakbo pagkatapos makumpleto ang sunrise bootstrap ngunit kabilang pa rin sa lifecycle ng sunrise.

Tumawag lamang ng mga function na na-load na sa sunrise phase. Iwasan ang trabahong mabigat sa database, template rendering, HTTP requests, at code na ipinapalagay na nakumpleto na ang normal na pagkakasunod-sunod ng pag-load ng plugin.

## Minimal na halimbawa

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

Pagkatapos i-deploy ang file, mag-load ng mapped domain at unmapped na main-site URL upang kumpirmahing parehong nagbu-bootstrap pa rin nang tama ang dalawang path.
