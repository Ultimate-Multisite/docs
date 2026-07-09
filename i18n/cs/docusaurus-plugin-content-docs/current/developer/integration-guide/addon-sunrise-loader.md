---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 přidává sunrise extension loader pro add-ony a vlastní integrace MU-plugin, které potřebují běžet během bootstrapování WordPressu v režimu sunrise, aniž by bylo nutné editovat vygenerovaný soubor `wp-content/sunrise.php`.

## Kdy to použít {#when-to-use-it}

Použijte sunrise extension, když musí vaše integrace běžet před načtením běžných pluginů, například pro vlastní směrování domény, zpracování požadavků specifických pro hostitele nebo pro rané úpravy bootstrapu sítě.

Pro normální integrace ale preferujte standardní WordPress pluginy, MU-pluginy a dokumentované hooky Ultimate Multisite. Sunrise kód běží velmi brzy a měl by zůstat malý, defenzivní a nezávislý na externích závislostech.

## Konvence jmenování souborů {#file-naming-convention}

Vytvořte PHP soubor s názvem `sunrise.php` ve složce add-onu, jehož název začíná na `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

Loader skenuje složku pluginů podle tohoto vzoru:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

Shody jsou načítány v abecedním pořadí podle cesty add-onu.

## Kam soubor umístit {#where-to-place-the-file}

Soubor umístěte do kořenové složky add-onu, který vlastní chování sunrise:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

Skenování je vyřešeno relativně k `WP_CONTENT_DIR`, nikoli k aktuální hodnotě `WP_PLUGIN_DIR`. To udržuje odhalování stabilní, když multi-tenancy nebo jiný raný bootstrapový kód během sunrise mění konstanty složky pluginů.

Nepřekládejte přímo vygenerovaný soubor `wp-content/sunrise.php`. Loader umožňuje vlastnímu kódu rozšířit chování sunrise bez nutnosti vytvářet vlastní kopii (fork) jádrového souboru sunrise, který Ultimate Multisite instaluje a aktualizuje.

## Dostupné hooky a filtry {#hooks-and-filters-available}

Addon sunrise soubory běží po tom, co Ultimate Multisite dokončí mapování domény, a před tím, než WordPress spustí `ms_loaded`. V tomto okamžiku může soubor sunrise:

- číst nebo přepsat `$current_site` a `$current_blog`;
- přistupovat k `$wpdb` po načtení konfigurace databáze;
- definovat konstanty pro čas sunrise, jako je `BLOG_ID_CURRENT_SITE`, pokud je to potřeba;
- číst stav pomocníka sunrise Ultimate Multisite, včetně stavu směrování používaného integracemi multi-tenancy.

Ultimate Multisite spustí `wu_sunrise_loaded` po dokončení svého sunrise loaderu. Použijte tuto akci pro kód, který by měl běžet po dokončení bootstrapu sunrise, ale stále patří do životního cyklu sunrise.

Volte pouze funkce, které jsou již v fázi sunrise načteny. Vyvarujte se práce s databází, vykreslování šablon, HTTP požadavků a kódu, který předpokládá, že dokončilo se normální pořadí načítání pluginů.

## Minimální příklad {#minimal-example}

```php
<?php
/**
 * Sunrise extension pro vlastní integraci hostitele.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Adjust early routing or constants before ms_loaded.
}
```

Po nasazení souboru načtěte mapovanou doménu a ne-mapovanou URL hlavní stránky, abyste potvrdili, že obě cesty stále bootstrapují správně.
