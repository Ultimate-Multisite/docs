---
id: get_blogs_of_user
title: Filtras - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtras: get_blogs_of_user

Čia dėl visa ko atkartoja originalų WP Filter.

Filtruoja svetainių, kurioms priklauso naudotojas, sąrašą.

## Parametrai {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Svetainių objektų, priklausančių naudotojui, masyvas. |
| $user_id | `int` | Naudotojo ID. |
| $all | `bool` | Ar grąžinamas svetainių masyvas turėtų apimti visas svetaines, įskaitant tas, kurios pažymėtos kaip „deleted“, „archived“ arba „spam“. Numatytoji reikšmė – false. |

### Nuo {#since}

- 2.0.11
### Šaltinis {#source}

Apibrėžta [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) 851 eilutėje
