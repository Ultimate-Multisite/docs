---
id: wu_get_site_domain_and_path
title: Filtr - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Umożliwia deweloperom modyfikowanie par domen/ścieżka.

Może być przydatne do wielu rzeczy, takich jak wdrożenie jakiegoś rozwiązania typu staging, różnych serwerów itp.

## Parametry {#parameters}

| Nazwa | Typ | Opis |
|------|------|-------------|
| $d | `object` | Bieżący obiekt zawierający klucze domeny i ścieżki. |
| $path_or_subdomain | `string` | Oryginalna ścieżka/poddomena przekazana do funkcji. |

### Od {#since}

- 2.0.0
### Źródło {#source}

Zdefiniowane w [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) w linii 235

## Zwraca {#returns}
Obiekt zawierający klucze domeny i ścieżki.
