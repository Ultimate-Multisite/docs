---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Ons het die oorspronklike WP Filter hier nageboots, net vir sekerheid.

Filter die lys van werkskakels (sites) waartoe 'n gebruiker behoort.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | 'n Array van site-objekte wat aan die gebruiker behoort. |
| $user_id | `int` | Gebruiker-ID. |
| $all | `bool` | Of die teruggegee sites-array alle sites moet bevat, insluitend dié gemerk as 'deleted', 'archived', of 'spam'. Standaard is vals. |

### Since {#since}

- 2.0.11
### Source {#source}

Bepaald in [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) by lyn 851
