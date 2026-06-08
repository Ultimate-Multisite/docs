---
id: get_site_url_for_previewer
title: Filtrační metoda - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Umožňuje vývojářům pluginů filtrovat URL, která je použita v předhledávači (previewer).

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $domain | `string` | Výchozí doména, která je aktuálně použita. Je užitečná pro manipulace s daty. |
| $domain_options | `array` | Seznam všech domén, které byly zadány v Ultimate Multisite Settings -> Network Settings -> Domain Options. |

### Od

- 1.7.2
### Zdroj

Definováno v [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na řádku 812


## Vrací
Novou doménu, která má být použita.
