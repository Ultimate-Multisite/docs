---
id: wu_get_site_domain_and_path
title: Suodatin - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Suodatin: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Salli kehittäjien muokata verkkotunnus-/polku-pareja.

Tämä voi olla hyödyllistä moniin asioihin, kuten jonkinlaisen staging-ratkaisun, eri palvelimien jne. toteuttamiseen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $d | `object` | Nykyinen objekti, joka sisältää domain- ja path-avaimet. |
| $path_or_subdomain | `string` | Alkuperäinen path/aliverkkotunnus, joka välitettiin funktiolle. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) rivillä 235


## Palauttaa {#returns}
Objektin, joka sisältää domain- ja path-avaimet.
