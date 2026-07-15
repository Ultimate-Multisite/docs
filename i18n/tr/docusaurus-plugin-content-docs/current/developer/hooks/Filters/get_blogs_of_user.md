---
id: get_blogs_of_user
title: Filtre - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filtre: get_blogs_of_user

Orijinal WP Filtresini sağlam olması için burada yeniden oluşturur.

Bir kullanıcının ait olduğu site listesini filtreler.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $sites | `object[]` | Kullanıcıya ait site nesnelerinden oluşan bir dizi. |
| $user_id | `int` | Kullanıcı Kimliği. |
| $all | `bool` | Döndürülen siteler dizisinin, 'silinmiş', 'arşivlenmiş' veya 'spam' olarak işaretlenmiş siteler dahil tüm siteleri içerip içermeyeceği. Varsayılan değeri false'tur. |

### Versiyon {#since}

- 2.0.11
### Kaynak {#source}

[`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) dosyasının 851. satırında tanımlanmıştır.
