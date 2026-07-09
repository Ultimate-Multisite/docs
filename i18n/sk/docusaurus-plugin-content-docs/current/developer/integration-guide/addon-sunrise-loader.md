---
title: Načítavač súboru Sunrise pre doplnok
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader

Ultimate Multisite 2.8.0 pridáva načítavač sunrise rozšírení pre add-ony a vlastné integrácie MU pluginov, ktoré sa musia spustiť počas WordPress sunrise bootstrappingu bez úpravy vygenerovaného súboru `wp-content/sunrise.php`.

## Kedy ho použiť

Použite sunrise rozšírenie, keď sa vaša integrácia musí spustiť pred načítaním bežných pluginov, napríklad pri vlastnom smerovaní domén, spracovaní požiadaviek špecifických pre hostiteľa alebo skorých úpravách bootstrapu siete.

Pri bežných integráciách uprednostnite štandardné WordPress pluginy, MU pluginy a zdokumentované hooky Ultimate Multisite. Sunrise kód sa spúšťa veľmi skoro a mal by zostať malý, defenzívny a bez závislostí.

## Konvencia pomenovania súborov

Vytvorte PHP súbor s názvom `sunrise.php` v adresári addonu, ktorého názov sa začína na `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Načítavač prehľadáva adresár pluginov podľa tohto vzoru:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Zodpovedajúce súbory sa načítajú v abecednom poradí podľa cesty addonu.

## Kam umiestniť súbor

Umiestnite súbor do koreňového adresára addonu, ktorý vlastní sunrise správanie:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Vyhľadávanie sa vyhodnocuje relatívne k `WP_CONTENT_DIR`, nie k aktuálnej hodnote `WP_PLUGIN_DIR`. Tým sa objavovanie udržiava stabilné, keď multi-tenancy alebo iný skorý bootstrap kód počas sunrise mení konštanty adresára pluginov.

Neupravujte priamo vygenerovaný súbor `wp-content/sunrise.php`. Načítavač umožňuje vlastnému kódu rozšíriť sunrise správanie bez forkovania jadrového sunrise súboru, ktorý Ultimate Multisite inštaluje a aktualizuje.

## Dostupné hooky a filtre

Sunrise súbory addonov sa spúšťajú po načítaní mapovania domén Ultimate Multisite a predtým, než WordPress spustí `ms_loaded`. V tomto bode môže sunrise súbor:

- read or override `$current_site` and `$current_blog`;
- access `$wpdb` after database configuration has loaded;
- definovať konštanty času sunrise, ako napríklad `BLOG_ID_CURRENT_SITE`, keď je to potrebné;
- čítať stav sunrise pomocníka Ultimate Multisite vrátane stavu smerovania používaného integráciami multi-tenancy.

Ultimate Multisite spustí `wu_sunrise_loaded` po dokončení svojho sunrise načítavača. Použite túto akciu pre kód, ktorý sa má spustiť po dokončení sunrise bootstrapu, ale stále patrí do životného cyklu sunrise.

Volajte iba funkcie, ktoré sú už načítané vo fáze sunrise. Vyhnite sa práci náročnej na databázu, vykresľovaniu šablón, HTTP požiadavkám a kódu, ktorý predpokladá, že bolo dokončené bežné poradie načítania pluginov.

## Minimálny príklad

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

Po nasadení súboru načítajte namapovanú doménu a nenamapovanú URL hlavnej lokality, aby ste potvrdili, že obe cesty sa stále správne bootstrapujú.
