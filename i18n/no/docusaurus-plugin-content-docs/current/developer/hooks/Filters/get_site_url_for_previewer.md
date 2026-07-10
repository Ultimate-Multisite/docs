---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Lar plugin-utviklere filtrere URL-en som brukes i forhåndsvisningsverktøyet

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $domain | `string` | Det domenet som brukes akkurat nå, nyttig for manipuleringer |
| $domain_options | `array` | Liste over alle domenealternativene som er angitt i Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Siden {#since}

- 1.7.2
### Kilde {#source}

Definert i [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) på linje 812


## Returnerer {#returns}
Det nye domenet som skal brukes
