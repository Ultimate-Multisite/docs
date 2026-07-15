---
id: get_site_url_for_previewer
title: Filter - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filter: get_site_url_for_previewer

Omogućava programerima pluginova da filtriraju URL koji se koristi u pregledniku (previewer-u).

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $domain | `string` | Trenutno korišten domen, koristan za manipulacije |
| $domain_options | `array` | Lista svih opcija domena unesenih u Ultimate Multisite Settings -> Network Settings -> Domain Options |

### Od {#since}

- 1.7.2
### Izvor {#source}

Definisano u [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) na liniji 812


## Vraća {#returns}
Novi domen koji treba koristiti
