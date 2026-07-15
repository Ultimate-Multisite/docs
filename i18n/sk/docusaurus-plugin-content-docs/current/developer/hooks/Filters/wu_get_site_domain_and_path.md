---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Umožňuje vývojárom upravovať dvojice doména/cesta.

Môže to byť užitočné na viacero vecí, napríklad na implementáciu nejakého staging riešenia, rôznych serverov atď.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $d | `object` | Aktuálny objekt obsahujúci kľúče domény a cesty. |
| $path_or_subdomain | `string` | Pôvodná cesta/subdoména odovzdaná funkcii. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) na riadku 235


## Návratová hodnota {#returns}
Objekt obsahujúci kľúče domény a cesty.
