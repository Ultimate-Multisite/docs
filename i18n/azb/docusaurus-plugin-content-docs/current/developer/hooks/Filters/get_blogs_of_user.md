---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Bu, orijinal WP Filter'ı aynen kopyalıyor, garanti olsun diye.

Bir kullanıcının ait olduğu site listesini filtreler.

## Parametreler {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sites | `object[]` | Kullanıcıya ait site objeleri dizisi. |
| $user_id | `int` | Kullanıcı ID'si. |
| $all | `bool` | Döndürülen site dizisinin, 'silinmiş', 'arşivlenmiş' veya 'spam' olarak işaretlenmiş siteleri de içerip içermeyeceği. Varsayılan değeri false'dur. |

### Since {#since}

- 2.0.11
### Source {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) dosyasının 851. satırında tanımlanmıştır.
