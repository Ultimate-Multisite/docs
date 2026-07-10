---
id: wu_get_site_domain_and_path
title: Filtre - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filtre: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Permet als desenvolupadors manipular les parelles de domini/camí.

Això pot ser útil per a diverses coses, com ara implementar algun tipus de solució de staging, servidors diferents, etc.

## Paràmetres {#parameters}

| Nom | Tipus | Descripció |
|------|------|-------------|
| $d | `object` | L'objecte actual que conté claus de domini i camí. |
| $path_or_subdomain | `string` | El camí/subdomini original passat a la funció. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definit a [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) a la línia 235


## Retorna {#returns}
Un objecte que conté claus de domini i camí.
