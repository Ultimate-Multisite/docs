---
id: get_blogs_of_user
title: Lim - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Lim: get_blogs_of_user

Rov ua raws WP Filter qub ntawm no, kom txhij txhua.

Lim daim ntawv teev cov chaw uas tus neeg siv yog tswv cuab.

## Cov tsis

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $sites | `object[]` | Ib array ntawm cov yam khoom chaw uas yog tus neeg siv li. |
| $user_id | `int` | Tus neeg siv ID. |
| $all | `bool` | Seb array cov chaw uas xa rov qab puas yuav tsum muaj txhua qhov chaw, suav nrog cov uas cim tias 'deleted', 'archived', lossis 'spam'. Lub neej ntawd yog false. |

### Txij li

- 2.0.11
### Qhov chaw los

Txhais nyob hauv [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) ntawm kab 851
