---
id: get_blogs_of_user
title: Isihluzi - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Isihluzi: get_blogs_of_user

Iphinda isihluzi sokuqala se-WP apha, ukuze kube kuhle.

Ihluza uluhlu lweesayithi umsebenzisi angowazo.

## Iiparamitha

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $sites | `object[]` | Uluhlu lwee-objects zesayithi ezizezomsebenzisi. |
| $user_id | `int` | I-ID yomsebenzisi. |
| $all | `bool` | Ukuba uluhlu lweesayithi olubuyisiweyo kufuneka luqulathe zonke iisayithi, kuquka ezo ziphawulwe njenge 'deleted', 'archived', okanye 'spam'. Okungagqibekanga ngu-false. |

### Ukususela

- 2.0.11
### Umthombo

Ichazwe kwi [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) kumgca 851
