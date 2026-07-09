---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Umožňuje vývojárom pluginov filtrovať URL používanú v previewer

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $domain | `string` | Predvolená doména, ktorá sa práve používa, užitočná na úpravy |
| $domain_options | `array` | Zoznam všetkých možností domény zadaných v Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Od verzie

- 1.7.2
### Zdroj

Definované v [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na riadku 812


## Vráti
Nová doména, ktorá sa má použiť
