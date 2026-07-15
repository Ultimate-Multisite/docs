---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site

Filtert, ob Ultimate Multisite einen Domain-Datensatz für eine neu erstellte Website erstellen soll.

Verwende diesen Filter, um die automatische Erstellung von Domain-Datensätzen für Websites zu unterdrücken oder aufzuschieben, die eine gemeinsame Checkout-Formular-Basisdomain, einen internen Host oder eine Domain verwenden, die eine andere Integration separat verwalten wird.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Ob der Domain-Datensatz erstellt werden soll. |
| $site | `WP_Site` | Das neu erstellte Website-Objekt. |

### Seit {#since}

- 2.13.0

### Quelle {#source}

Definiert in `inc/functions/domain.php`.


## Rückgaben {#returns}

Boolescher Wert, der angibt, ob der Domain-Datensatz erstellt werden soll.
