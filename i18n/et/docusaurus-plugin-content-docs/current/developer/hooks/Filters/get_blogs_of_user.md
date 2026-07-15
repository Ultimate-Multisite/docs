---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Kordab siin igaks juhuks algset WP Filterit.

Filtreerib saitide loendit, kuhu kasutaja kuulub.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $sites | `object[]` | Kasutajale kuuluvate saidiobjektide massiiv. |
| $user_id | `int` | Kasutaja ID. |
| $all | `bool` | Kas tagastatud saitide massiiv peaks sisaldama kõiki saite, sealhulgas neid, mis on märgitud kui „kustutatud“, „arhiveeritud“ või „spam“. Vaikimisi false. |

### Alates {#since}

- 2.0.11
### Allikas {#source}

Määratletud failis [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) real 851
