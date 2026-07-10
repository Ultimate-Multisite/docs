---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtert gedeelde basisdomeinen van checkout-formulier die geen mapped-domain-records moeten worden.

Gebruik dit filter wanneer een integratie extra basisdomeinen levert voor checkout-formulier-velden voor **Site URL**. Domeinen die door dit filter worden geretourneerd, worden behandeld als gedeelde registratiehosts in plaats van aangepaste domeinen per site.

## Parameters {#parameters}

| Naam | Type | Beschrijving |
|------|------|-------------|
| $domains | `array` | Gedeelde basisdomeinen verzameld uit checkout-formulier-configuratie. |

### Sinds {#since}

- 2.13.0

### Bron {#source}

Gedefinieerd in `inc/functions/domain.php`.


## Retourneert {#returns}

Array van genormaliseerde basisdomeinen van checkout-formulier.
