---
id: get_site_url_for_previewer
title: Filtar - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtar: get_site_url_for_previewer

Omogućuje programerima pluginova filtriranje URL-a koji se koristi u pregledniku

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $domain | `string` | Zadana domena koja se trenutačno koristi, korisna za manipulacije |
| $domain_options | `array` | Popis svih opcija domena unesenih u Ultimate Multisite Settings -&gt; Network Settings -&gt; Domain Options |

### Od verzije {#since}

- 1.7.2
### Izvor {#source}

Definirano u [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) u retku 812


## Povratna vrijednost {#returns}
Nova domena koja će se koristiti
