---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtert of Ultimate Multisite een domeinrecord moet aanmaken voor een nieuw aangemaakte site.

Gebruik dit filter om het automatisch aanmaken van domeinrecords te onderdrukken of uit te stellen voor sites die een gedeeld basisdomein voor het checkout-formulier, een interne host of een domein gebruiken dat een andere integratie afzonderlijk zal beheren.

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $create | `bool` | Of het domeinrecord moet worden aangemaakt. |
| $site | `WP_Site` | Het nieuw aangemaakte site-object. |

### Sinds

- 2.13.0

### Bron

Gedefinieerd in `inc/functions/domain.php`.


## Retourneert

Boolean die aangeeft of het domeinrecord moet worden aangemaakt.
