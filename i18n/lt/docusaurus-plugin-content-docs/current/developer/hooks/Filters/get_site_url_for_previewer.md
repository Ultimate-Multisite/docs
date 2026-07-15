---
id: get_site_url_for_previewer
title: Filtras - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtras: get_site_url_for_previewer

Leidžia plugin kūrėjams filtruoti URL, naudojamą previewer

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $domain | `string` | Numatytasis domain, naudojamas šiuo metu, naudingas koregavimams |
| $domain_options | `array` | Visų domain parinkčių, įvestų Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options, sąrašas |

### Nuo {#since}

- 1.7.2
### Šaltinis {#source}

Apibrėžta [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) 812 eilutėje


## Grąžina {#returns}
Naują naudotiną domain
