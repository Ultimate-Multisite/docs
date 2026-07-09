---
title: Addon Sunrise File Loader
sidebar_position: 5
_i18n_hash: 2b24e0c6cf53f4dab0334db99a3b267b
---
# Addon Sunrise File Loader {#addon-sunrise-file-loader}

Ultimate Multisite 2.8.0 voegt een sunrise extension loader toe voor add-ons en aangepaste MU-plugin integraties die moeten draaien tijdens het WordPress sunrise bootstrapping, zonder dat u het gegenereerde `wp-content/sunrise.php` bestand hoeft te bewerken.

## Wanneer te gebruiken {#when-to-use-it}

Gebruik een sunrise extension wanneer uw integratie moet draaien voordat reguliere plugins worden geladen, zoals voor aangepaste domeinroutering, host-specifieke verwerking van verzoeken, of vroege aanpassingen aan de netwerk-bootstrap.

Voor normale integraties geven wij de voorkeur aan reguliere WordPress plugins, MU-plugins en de gedocumenteerde Ultimate Multisite hooks. Sunrise code draait erg vroeg en moet klein, defensief en onafhankelijk van externe afhankelijkheden blijven.

## Bestandsnaamconventie {#file-naming-convention}

Maak een PHP-bestand met de naam `sunrise.php` in een addon-map waarvan de naam begint met `ultimate-multisite-`:

```text
wp-content/plugins/ultimate-multisite-example-addon/sunrise.php
```

De loader scant de plugins-map op dit patroon:

```text
wp-content/plugins/ultimate-multisite-*/sunrise.php
```

De overeenkomende bestanden worden in alfabetische volgorde geladen op basis van het addon-pad.

## Waar het bestand te plaatsen {#where-to-place-the-file}

Plaats het bestand in de root-map van de addon die verantwoordelijk is voor het sunrise-gedrag:

```text
wp-content/
└── plugins/
    └── ultimate-multisite-example-addon/
        ├── ultimate-multisite-example-addon.php
        └── sunrise.php
```

De scan wordt afgehandeld ten opzichte van `WP_CONTENT_DIR`, en niet ten opzichte van de huidige waarde van `WP_PLUGIN_DIR`. Dit zorgt ervoor dat de ontdekking stabiel blijft wanneer multi-tenancy of andere vroege bootstrap-code de plugin-directory constanten wijzigt tijdens sunrise.

Bewerk het gegenereerde `wp-content/sunrise.php` bestand niet direct. De loader stelt u in staat om aangepaste code te laten uitbreiden op het sunrise-gedrag zonder de kern-sunrise-file te forken die Ultimate Multisite installeert en bijwerkt.

## Beschikbare hooks en filters {#hooks-and-filters-available}

Addon sunrise bestanden draaien nadat de domeinmapping van Ultimate Multisite is geladen en vóórdat WordPress `ms_loaded` activeert. Op dit punt kan een sunrise-bestand:

- `$current_site` en `$current_blog` lezen of overschrijven;
- toegang krijgen tot `$wpdb` nadat de databaseconfiguratie is geladen;
- sunrise-tijdconstanten definiëren, zoals `BLOG_ID_CURRENT_SITE`, indien nodig;
- de sunrise helper state van Ultimate Multisite lezen, inclusief de routeringsstatus die wordt gebruikt door multi-tenancy integraties.

Ultimate Multisite activeert `wu_sunrise_loaded` nadat zijn sunrise loader is voltooid. Gebruik deze action voor code die moet draaien nadat het sunrise bootstrap-proces is voltooid, maar die nog steeds tot de sunrise levenscyclus behoort.

Roep alleen functies aan die al geladen zijn in de sunrise-fase. Vermijd database-intensief werk, template rendering, HTTP-verzoeken en code die ervan uitgaat dat de normale plugin-laadvolgorde is voltooid.

## Minimale voorbeeld {#minimal-example}

```php
<?php
/**
 * Sunrise extension voor een aangepaste host-integratie.
 */

if (! defined('ABSPATH')) {
    exit;
}

if (isset($current_blog) && $current_blog instanceof stdClass) {
    // Pas vroege routing of constanten aan vóór ms_loaded.
}
```

Nadat u het bestand heeft gedeployed, laad dan een gemapt domein en een ongemapt main-site URL om te bevestigen dat beide paden nog steeds correct bootstrappen.
