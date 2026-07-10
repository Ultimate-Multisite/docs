---
id: get_site_url_for_previewer
title: Filtru - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# Filtru: get_site_url_for_previewer {#filter-getsiteurlforpreviewer}

Permite dezvoltatorilor de plugin să filtreze URL-ul utilizat în vizualizator.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $domain | `string` | Domeniul implicit utilizat în acest moment, util pentru manipulări. |
| $domain_options | `array` | Lista tuturor opțiunilor de domenii introduse în Ultimate Multisite Settings -> Network Settings -> Domain Options |

### De la {#since}

- 1.7.2
### Sursă {#source}

Definit în [`inc/checkout/class-legacy-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-legacy-checkout.php#L812) la linia 812


## Returnează {#returns}
Noul domeniu care trebuie utilizat.
