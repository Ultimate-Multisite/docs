---
title: Ngarkuesi i skedarit Sunrise për shtesën
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Ngarkuesi i skedarit Sunrise për Addon

Ultimate Multisite 2.8.0 shton një ngarkues zgjerimi sunrise për add-on dhe integrime të personalizuara MU-plugin që duhet të ekzekutohen gjatë nisjes fillestare sunrise të WordPress pa redaktuar skedarin e gjeneruar `wp-content/sunrise.php`.

## Kur ta përdorni

Përdorni një zgjerim sunrise kur integrimi juaj duhet të ekzekutohet përpara se të ngarkohen plugin-et e zakonshme, si p.sh. rutimi i domenit të personalizuar, trajtimi i kërkesave specifike për host, ose rregullime të hershme të nisjes së rrjetit.

Për integrime normale, preferoni plugin-et e zakonshme WordPress, MU-plugins dhe hook-et e dokumentuara të Ultimate Multisite. Kodi sunrise ekzekutohet shumë herët dhe duhet të mbetet i vogël, mbrojtës dhe pa varësi.

## Konventa e emërtimit të skedarit

Krijoni një skedar PHP të quajtur `sunrise.php` në një drejtori addon emri i së cilës fillon me `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Ngarkuesi skanon drejtorinë e plugin-eve për këtë model:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Skedarët që përputhen ngarkohen sipas rendit alfabetik të shtegut të addon-it.

## Ku ta vendosni skedarin

Vendoseni skedarin në drejtorinë rrënjë të addon-it që zotëron sjelljen sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skanimi zgjidhet relativisht ndaj `WP_CONTENT_DIR`, jo ndaj vlerës aktuale të `WP_PLUGIN_DIR`. Kjo e mban zbulimin të qëndrueshëm kur multi-tenancy ose kod tjetër i hershëm i nisjes ndryshon konstantet e drejtorisë së plugin-eve gjatë sunrise.

Mos e redaktoni drejtpërdrejt skedarin e gjeneruar `wp-content/sunrise.php`. Ngarkuesi lejon që kodi i personalizuar të zgjerojë sjelljen sunrise pa krijuar fork të skedarit bazë sunrise që Ultimate Multisite instalon dhe përditëson.

## Hook-et dhe filtrat e disponueshëm

Skedarët sunrise të addon-eve ekzekutohen pasi hartëzimi i domeneve i Ultimate Multisite të jetë ngarkuar dhe përpara se WordPress të aktivizojë `ms_loaded`. Në këtë pikë një skedar sunrise mund të:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- përcaktojë konstante të kohës sunrise si `BLOG_ID_CURRENT_SITE` kur nevojitet;
- lexojë gjendjen ndihmëse sunrise të Ultimate Multisite, përfshirë gjendjen e rutimit të përdorur nga integrimet multi-tenancy.

Ultimate Multisite aktivizon `wu_sunrise_loaded` pasi ngarkuesi i tij sunrise përfundon. Përdoreni atë action për kodin që duhet të ekzekutohet pasi nisja fillestare sunrise të ketë përfunduar, por që ende i përket ciklit të jetës sunrise.

Thërrisni vetëm funksione që janë tashmë të ngarkuara në fazën sunrise. Shmangni punën e rëndë me bazën e të dhënave, renderimin e template-eve, kërkesat HTTP dhe kodin që supozon se rendi normal i ngarkimit të plugin-eve ka përfunduar.

## Shembull minimal

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

Pas vendosjes së skedarit, ngarkoni një domen të hartëzuar dhe një URL të pa-hartëzuar të faqes kryesore për të konfirmuar se të dy shtigjet ende nisen saktë.
