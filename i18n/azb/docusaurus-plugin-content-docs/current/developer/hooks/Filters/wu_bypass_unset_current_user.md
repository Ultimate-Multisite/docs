---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

Developerlere, mevcut kullanıcıyı sıfırlayan (unset) kodu atlamalarına olanak tanır.

Dönüş değeri `null` dışında herhangi bir şey olması, oturum açmış mevcut kullanıcının sıfırlanmasını atlar. Bu, örneğin, admin paneli olarak kullanılan alt sitelerle uğraşırken faydalı olabilecek bazı senaryolarda kullanışlı olabilir.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $null_or_bypass | `mixed` | Devam etmek için `null`, atlamak için başka bir değer. |
| $current_user | `false\|\WP_User` | Mevcut kullanıcı nesnesi. |

### Since

- 2.0.11
### Source

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) dosyasında 221. satırda tanımlanmıştır.


## Returns
