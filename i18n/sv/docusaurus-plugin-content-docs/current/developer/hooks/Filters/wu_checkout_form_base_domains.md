---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtrerar delade basdomäner för checkout-formulär som inte ska bli mappade domänposter.

Använd detta filter när en integration tillhandahåller ytterligare basdomäner för checkout-formulärets **Site URL**-fält. Domäner som returneras av detta filter behandlas som delade registreringsvärdar i stället för anpassade domäner per site.

## Parametrar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Delade basdomäner insamlade från checkout-formulärets konfiguration. |

### Sedan {#since}

- 2.13.0

### Källa {#source}

Definierad i `inc/functions/domain.php`.


## Returnerar {#returns}

Array med normaliserade basdomäner för checkout-formulär.
