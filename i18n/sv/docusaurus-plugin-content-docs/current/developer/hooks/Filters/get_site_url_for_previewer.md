---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Låter pluginutvecklare filtrera URL:en som används i förhandsgranskaren

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $domain | `string` | Det domän som används just nu, användbart för manipulationer |
| $domain_options | `array` | Lista över alla domänalternativ som har matats in i Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Sedan

- 1.7.2
### Källa

Definieras i [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) på rad 812


## Returnerar
Det nya domän som ska användas
