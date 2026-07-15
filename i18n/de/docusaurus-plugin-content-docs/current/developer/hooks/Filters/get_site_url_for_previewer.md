---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Ermöglicht Plugin-Entwicklern, die URL im Vorschau-Tool zu filtern

## Parameters {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $domain | `string` | Standarddomain, die gerade verwendet wird, nützlich für Manipulationen |
| $domain_options | `array` | Liste aller Domain-Optionen, die in den Ultimate Multisite Settings -> Network Settings -> Domain Options eingegeben wurden |

### Seit {#since}

- 1.7.2
### Quelle {#source}

Definiert in [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) in Zeile 812


## Rückgabe {#returns}
Neue Domain, die verwendet werden soll
