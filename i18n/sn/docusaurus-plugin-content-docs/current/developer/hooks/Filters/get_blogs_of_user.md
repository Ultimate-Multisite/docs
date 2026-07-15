---
id: get_blogs_of_user
title: Sefa - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Sefa: get_blogs_of_user

Inodzokorora WP Filter yepakutanga pano, kuti zvive nechokwadi.

Inosefa rondedzero yemasaiti ayo mushandisi ari nhengo yawo.

## Maparamita {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $sites | `object[]` | Array yezvinhu zvemasaiti ari emushandisi. |
| $user_id | `int` | ID yemushandisi. |
| $all | `bool` | Kana array yemasaiti inodzoserwa ichifanira kusanganisira masaiti ese, kusanganisira akamakwa se 'deleted', 'archived', kana 'spam'. Default false. |

### Kubvira {#since}

- 2.0.11
### Kunobva {#source}

Yakatsanangurwa mu [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) pamutsara 851
