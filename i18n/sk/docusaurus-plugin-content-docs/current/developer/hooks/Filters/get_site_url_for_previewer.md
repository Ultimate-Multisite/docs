---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Umožňuje vývojárom pluginov filtrovať URL používanú v previewer

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $domain | `string` | Predvolená doména, ktorá sa práve používa, užitočná na úpravy |
| $domain_options | `array` | Zoznam všetkých možností domény zadaných v Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Od verzie {#since}

- 1.7.2
### Zdroj {#source}

Definované v [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na riadku 812


## Vráti {#returns}
Nová doména, ktorá sa má použiť
