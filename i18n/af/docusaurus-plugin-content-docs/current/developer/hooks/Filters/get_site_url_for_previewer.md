---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Laat plugin-ontwikkelaars die URL wat in die voorvertoner gebruik word, filter.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `string` | Die standaarddomein wat tans gebruik word, nuttig vir manipulasies |
| $domain_options | `array` | 'n Lys van al die domeinopsies wat in die Ultimate Multisite Settings -> Network Settings -> Domain Options ingevoer is |

### Sinds {#since}

- 1.7.2
### Bron {#source}

Gedefinieer in [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) by lyn 812


## Gee terug {#returns}
Die nuwe domein wat gebruik moet word
