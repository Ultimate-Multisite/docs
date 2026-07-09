---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains {#filter-wucheckoutformbasedomains}

Filtert gemeinsame Basis-Domains von Checkout-Formularen, die nicht zu Datensätzen für zugeordnete Domains werden sollen.

Verwende diesen Filter, wenn eine Integration zusätzliche Basis-Domains für **Website-URL**-Felder im Checkout-Formular bereitstellt. Domains, die von diesem Filter zurückgegeben werden, werden als gemeinsame Registrierungshosts statt als benutzerdefinierte Domains pro Website behandelt.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Gemeinsame Basis-Domains, die aus der Checkout-Formular-Konfiguration gesammelt wurden. |

### Seit {#since}

- 2.13.0

### Quelle {#source}

Definiert in `inc/functions/domain.php`.


## Rückgabewert {#returns}

Array normalisierter Basis-Domains des Checkout-Formulars.
