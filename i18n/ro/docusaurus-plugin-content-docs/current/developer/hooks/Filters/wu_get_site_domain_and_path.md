---
id: wu_get_site_domain_and_path
title: Filtru - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtru: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Permite dezvoltatorilor să modifice perechile de domeniu/cale.

Acest lucru poate fi util pentru o serie de lucruri, cum ar fi implementarea unei soluții de staging, servere diferite etc.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $d | `object` | Obiectul curent care conține cheile de domeniu și cale. |
| $path_or_subdomain | `string` | Calea/subdomeniul original transmis funcției. |

### De la {#since}

- 2.0.0
### Sursă {#source}

Definit în [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) la linia 235


## Returnează {#returns}
Un obiect care conține cheile de domeniu și cale.
