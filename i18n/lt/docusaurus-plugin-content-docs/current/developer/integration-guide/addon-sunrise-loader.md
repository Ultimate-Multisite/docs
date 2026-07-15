---
title: Priedo Sunrise failo įkėliklis
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise failų įkėliklis

Ultimate Multisite 2.8.0 prideda sunrise plėtinio įkėliklį priedams ir pasirinktoms MU plugin integracijoms, kurioms reikia veikti WordPress sunrise paleidimo metu neredaguojant sugeneruoto `wp-content/sunrise.php` failo.

## Kada jį naudoti {#when-to-use-it}

Naudokite sunrise plėtinį, kai jūsų integracija turi veikti prieš įkeliant įprastus pluginus, pavyzdžiui, pasirinktiniam domenų maršrutizavimui, konkrečiam pagrindiniam kompiuteriui skirtam užklausų apdorojimui arba ankstyviems tinklo paleidimo koregavimams.

Įprastoms integracijoms verčiau naudokite įprastus WordPress pluginus, MU-pluginus ir dokumentuotus Ultimate Multisite hooks. Sunrise kodas veikia labai anksti, todėl turėtų likti mažas, atsparus klaidoms ir be priklausomybių.

## Failų pavadinimų taisyklė {#file-naming-convention}

Sukurkite PHP failą pavadinimu `sunrise.php` priedo kataloge, kurio pavadinimas prasideda `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Įkėliklis nuskaito plugins katalogą pagal šį šabloną:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Atitinkantys failai įkeliami abėcėlės tvarka pagal priedo kelią.

## Kur įdėti failą {#where-to-place-the-file}

Įdėkite failą į priedo, kuriam priklauso sunrise elgsena, šakninį katalogą:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Nuskaitymas išsprendžiamas `WP_CONTENT_DIR` atžvilgiu, o ne pagal dabartinę `WP_PLUGIN_DIR` reikšmę. Tai išlaiko aptikimą stabilų, kai multi-tenancy ar kitas ankstyvas paleidimo kodas sunrise metu keičia plugin katalogų konstantas.

Neredaguokite sugeneruoto `wp-content/sunrise.php` failo tiesiogiai. Įkėliklis leidžia pasirinktiniam kodui išplėsti sunrise elgseną neatšakojant pagrindinio sunrise failo, kurį Ultimate Multisite įdiegia ir atnaujina.

## Prieinami hooks ir filtrai {#hooks-and-filters-available}

Addon sunrise failai veikia po to, kai Ultimate Multisite domenų susiejimas įkeliamas, ir prieš WordPress paleidžiant `ms_loaded`. Šiuo momentu sunrise failas gali:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- apibrėžti sunrise meto konstantas, tokias kaip `BLOG_ID_CURRENT_SITE`, kai reikia;
- skaityti Ultimate Multisite sunrise pagalbinę būseną, įskaitant maršrutizavimo būseną, naudojamą multi-tenancy integracijų.

Ultimate Multisite paleidžia `wu_sunrise_loaded`, kai jo sunrise įkėliklis baigia darbą. Naudokite šį veiksmą kodui, kuris turėtų veikti po to, kai sunrise paleidimas baigtas, bet vis dar priklauso sunrise gyvavimo ciklui.

Kvieskite tik tas funkcijas, kurios sunrise fazėje jau yra įkeltos. Venkite daug duomenų bazės resursų reikalaujančio darbo, šablonų atvaizdavimo, HTTP užklausų ir kodo, kuris daro prielaidą, kad įprasta pluginų įkėlimo tvarka jau baigta.

## Minimalus pavyzdys {#minimal-example}

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

Įdiegę failą, įkelkite susietą domeną ir nesusietą pagrindinės svetainės URL, kad patvirtintumėte, jog abu keliai vis dar paleidžiami teisingai.
