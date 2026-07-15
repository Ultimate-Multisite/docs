---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Nagdaragdag ang Ultimate Multisite 2.8.0 ng isang sunrise extension loader para sa mga add-on at custom MU-plugin integrations na kailangang tumakbo habang nagba-bootstrap ang WordPress sa "sunrise" phase nang hindi kailangang i-edit ang generated na `wp-content/sunrise.php` file.

## Kailan ito gagamitin {#when-to-use-it}

Gumamit ng sunrise extension kapag ang iyong integration ay kailangang tumakbo bago pa man i-load ang mga regular na plugin, tulad ng custom domain routing, host-specific request handling, o maagang pag-aayos ng network bootstrap.

Para sa normal na integrations, mas mainam na gumamit ng regular na WordPress plugins, MU-plugins, at ang mga dokumentadong Ultimate Multisite hooks. Ang code sa sunrise ay tumatakbo nang napakaaga at dapat manatiling maliit, defensive, at walang dependency.

## Pagpapangalan ng File {#file-naming-convention}

Gumawa ng PHP file na pinangalanang `sunrise.php` sa isang addon directory na ang pangalan ay nagsisimula sa `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

I-i-scan ng loader ang plugins directory para sa pattern na ito:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Ang mga tumutugma na file ay i-lo-load sa pagkakasunud-sunod ng alpabeto batay sa addon path.

## Saan ilalagay ang file {#where-to-place-the-file}

Ilagay ang file sa root directory ng addon na nagmamay-ari ng sunrise behaviour:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Ang scan ay resolve relative sa `WP_CONTENT_DIR`, hindi sa kasalukuyang value ng `WP_PLUGIN_DIR`. Pinapanatili nito ang stability ng discovery kapag ang multi-tenancy o iba pang early bootstrap code ay nagbabago ng plugin directory constants habang nagaganap ang sunrise.

Huwag direktang i-edit ang generated na `wp-content/sunrise.php` file. Pinapayagan ng loader ang custom code na palawakin ang sunrise behaviour nang hindi kinakailangang i-fork ang core sunrise file na ini-install at ina-update ng Ultimate Multisite.

## Mga Hooks at Filters na Available {#hooks-and-filters-available}

Ang mga addon sunrise files ay tumatakbo pagkatapos ma-load ng Ultimate Multisite domain mapping at bago mag-fire ang `ms_loaded` ng WordPress. Sa puntong ito, ang isang sunrise file ay maaaring:

- basahin o i-override ang `$current_site` at `$current_blog`;
- ma-access ang `$wpdb` pagkatapos ma-load ang database configuration;
- mag-define ng mga constant sa oras ng sunrise tulad ng `BLOG_ID_CURRENT_SITE` kung kinakailangan;
- basahin ang Ultimate Multisite sunrise helper state, kasama na ang routing state na ginagamit ng multi-tenancy integrations.

Nag-fi-fire ang Ultimate Multisite ng `wu_sunrise_loaded` pagkatapos matapos ang sunrise loader nito. Gamitin ang action na iyon para sa code na dapat tumakbo pagkatapos makumpleto ang sunrise bootstrap ngunit kabilang pa rin sa sunrise lifecycle.

Tanging ang mga function na naka-load na sa sunrise phase lang ang tawagin. Iwasan ang mga trabahong mabigat sa database, template rendering, HTTP requests, at code na nagpapalagay na natapos na ang normal na plugin load order.

## Minimal na Halimbawa {#minimal-example}

```php
<?php
/**
 * Sunrise extension para sa custom host integration.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Pagkatapos i-deploy ang file, i-load ang isang mapped domain at isang unmapped main-site URL para kumpirmahin na pareho pa rin silang nagba-bootstrap nang tama.
