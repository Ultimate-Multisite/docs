---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Geliştiricilerin mevcut kullanıcıyı sıfırlayan (unset) kod bloğunu atlamasına izin verir.

Null dışında herhangi bir değer döndürmek, oturum açmış mevcut kullanıcının sıfırlanmasını atlayacaktır. Bu, örneğin alt sitelerin yönetici paneli olarak kullanıldığı bazı senaryolarda faydalı olabilir.

## Parametreler

| Ad | Tip | Açıklama |
|------|------|-------------|
| $null_or_bypass | `mixed` | Devam etmek için null, atlamak için başka bir değer. |
| $current_user | `false\|\WP_User` | Mevcut kullanıcı nesnesi. |

### Versiyon

- 2.0.11
### Kaynak

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) dosyasında 221. satırda tanımlanmıştır.

## Dönüş Değeri
