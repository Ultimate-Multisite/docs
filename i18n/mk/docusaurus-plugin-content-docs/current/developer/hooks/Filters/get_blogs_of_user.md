---
id: get_blogs_of_user
title: Филтер - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Филтер: get_blogs_of_user {#filter-getblogsofuser}

Го реплицира оригиналниот WP филтер тука, за секој случај.

Ја филтрира листата на сајтови на кои корисникот припаѓа.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Низа од објекти на сајтови што му припаѓаат на корисникот. |
| $user_id | `int` | ID на корисник. |
| $all | `bool` | Дали вратената низа од сајтови треба да ги содржи сите сајтови, вклучувајќи ги и оние означени како 'избришани', 'архивирани' или 'спам'. Стандардно false. |

### Од {#since}

- 2.0.11
### Извор {#source}

Дефинирано во [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) на линија 851
