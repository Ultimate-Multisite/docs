---
title: Papildinājuma Sunrise faila ielādētājs
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise failu ielādētājs

Ultimate Multisite 2.8.0 pievieno sunrise paplašinājumu ielādētāju add-on un pielāgotām MU-plugin integrācijām, kurām jādarbojas WordPress sunrise sāknēšanas laikā, nerediģējot ģenerēto `wp-content/sunrise.php` failu.

## Kad to izmantot

Izmantojiet sunrise paplašinājumu, kad jūsu integrācijai jādarbojas pirms parasto plugin ielādes, piemēram, pielāgotai domēnu maršrutēšanai, hostam specifiskai pieprasījumu apstrādei vai agrīniem tīkla sāknēšanas pielāgojumiem.

Parastām integrācijām dodiet priekšroku parastiem WordPress plugin, MU-plugin un dokumentētajiem Ultimate Multisite āķiem. Sunrise kods darbojas ļoti agri, un tam jāpaliek mazam, aizsargātam un bez atkarībām.

## Failu nosaukumu konvencija

Izveidojiet PHP failu ar nosaukumu `sunrise.php` add-on direktorijā, kura nosaukums sākas ar `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ielādētājs skenē plugins direktoriju, meklējot šo paraugu:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Atbilstošie faili tiek ielādēti alfabētiskā secībā pēc add-on ceļa.

## Kur novietot failu

Novietojiet failu tā add-on saknes direktorijā, kuram pieder sunrise darbība:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skenēšana tiek atrisināta relatīvi pret `WP_CONTENT_DIR`, nevis pašreizējo `WP_PLUGIN_DIR` vērtību. Tas nodrošina atklāšanas stabilitāti, kad vairāku nomnieku arhitektūra vai cits agrīns sāknēšanas kods sunrise laikā maina plugin direktoriju konstantes.

Nerediģējiet ģenerēto `wp-content/sunrise.php` failu tieši. Ielādētājs ļauj pielāgotam kodam paplašināt sunrise darbību, neveidojot atzaru no pamata sunrise faila, ko Ultimate Multisite instalē un atjaunina.

## Pieejamie āķi un filtri

Addon sunrise faili darbojas pēc tam, kad Ultimate Multisite domēnu kartēšana ir ielādēta, un pirms WordPress palaiž `ms_loaded`. Šajā brīdī sunrise fails var:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definēt sunrise laika konstantes, piemēram, `BLOG_ID_CURRENT_SITE`, kad nepieciešams;
- nolasīt Ultimate Multisite sunrise palīga stāvokli, tostarp maršrutēšanas stāvokli, ko izmanto vairāku nomnieku integrācijas.

Ultimate Multisite palaiž `wu_sunrise_loaded` pēc tam, kad tā sunrise ielādētājs ir pabeidzis darbu. Izmantojiet šo darbību kodam, kam jādarbojas pēc sunrise sāknēšanas pabeigšanas, bet kas joprojām pieder sunrise dzīves ciklam.

Izsauciet tikai tās funkcijas, kas sunrise fāzē jau ir ielādētas. Izvairieties no datubāzi intensīvi izmantojoša darba, veidņu renderēšanas, HTTP pieprasījumiem un koda, kas pieņem, ka parastā plugin ielādes secība ir pabeigta.

## Minimāls piemērs

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

Pēc faila izvietošanas ielādējiet kartētu domēnu un nekartētu galvenās vietnes URL, lai apstiprinātu, ka abi ceļi joprojām pareizi sāknējas.
