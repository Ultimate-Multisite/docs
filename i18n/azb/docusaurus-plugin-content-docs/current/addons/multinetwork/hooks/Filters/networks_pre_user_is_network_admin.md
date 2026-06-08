---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin

Bir kullanıcının yönetici olduğu ağları filtreleyerek, bu işlemi doğrudan atlamamızı sağlar.

## Parametreler

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Ağ ID'si listesi veya false. Null olmayan herhangi bir değer işlemi kısaltacaktır. |
| $ | `int` | Ağların döndürülmesi gereken Kullanıcı ID'si. |

### Since

- 2.0.0
### Source

Defined in [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) at line 688
