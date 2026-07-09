---
title: Mutakuri weFaira reSunrise Yekuwedzera
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 inowedzera sunrise extension loader yeadd-ons uye custom MU-plugin integrations dzinoda kumhanya panguva yeWordPress sunrise bootstrapping pasina kugadzirisa faira rakagadzirwa re`wp-content/sunrise.php`.

## Rinofanira kushandiswa riini

Shandisa sunrise extension kana integration yako ichifanira kumhanya ma plugins enguva dzose asati atakurwa, sekuronga custom domain, kubata zvikumbiro zvinoenderana nehost, kana kugadzirisa kwekutanga kwe network bootstrap.

Kune integrations dzenguva dzose, sarudza kushandisa WordPress plugins enguva dzose, MU-plugins, uye Ultimate Multisite hooks dzakanyorwa. Sunrise code inomhanya pakutanga zvikuru uye inofanira kuramba iri diki, yakangwarira, uye isina dependencies.

## Maitiro ekutumidza faira

Gadzira PHP faira rinonzi `sunrise.php` mudhairekitori readdon rine zita rinotanga ne`ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader inoongorora dhairekitori re plugins ichitsvaga pattern iyi:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Mafaira anoenderana anotakurwa muhurongwa hwearufabheti maererano neaddon path.

## Pekuisa faira

Isa faira mudhairekitori remudzi weaddon ine sunrise behaviour yacho:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Kuongorora kunogadziriswa zvichienderana ne`WP_CONTENT_DIR`, kwete kukosha kwazvino kwe`WP_PLUGIN_DIR`. Izvi zvinochengeta kuwanikwa kwakagadzikana kana multi-tenancy kana imwe code yekutanga ye bootstrap ikachinja plugin directory constants panguva ye sunrise.

Usagadzirisa faira rakagadzirwa re`wp-content/sunrise.php` zvakananga. Loader inoita kuti custom code iwedzere sunrise behaviour pasina kufork core sunrise file inoiswa nekuvandudzwa neUltimate Multisite.

## Hooks nema filters aripo

Addon sunrise files dzinomhanya mushure mekunge Ultimate Multisite domain mapping yatakurwa uye WordPress isati yabatidza `ms_loaded`. Panguva iyi sunrise file inogona:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- kutsanangura sunrise-time constants dzakadai se`BLOG_ID_CURRENT_SITE` pazvinenge zvichidiwa;
- kuverenga Ultimate Multisite sunrise helper state, kusanganisira routing state inoshandiswa ne multi-tenancy integrations.

Ultimate Multisite inobatidza `wu_sunrise_loaded` mushure mekunge sunrise loader yayo yapedza. Shandisa action iyoyo kune code inofanira kumhanya mushure mekunge sunrise bootstrap yapera asi ichiri chikamu che sunrise lifecycle.

Dana chete functions dzakatotakurwa mu sunrise phase. Dzivisa basa rinorema re database, template rendering, HTTP requests, uye code inofungidzira kuti normal plugin load order yapera.

## Muenzaniso mudiki

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

Mushure mekuisa faira, takura mapped domain uye unmapped main-site URL kuti usimbise kuti nzira dzose dzichiri kuita bootstrap nemazvo.
