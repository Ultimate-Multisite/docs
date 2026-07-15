---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filtre: networks_pre_user_is_network_admin

Bir kullanıcının yönetici olduğu ağları filtreleyerek süreci doğrudan sonlandırır.

## Parametreler {#parameters}

| Ad | Tip | Açıklama |
|------|------|-------------|
| $ | `array\|bool\|null` | Ağ kimlikleri listesi veya yanlış (false). Null olmayan herhangi bir değer süreci doğrudan sonlandırır. |
| $ | `int` | Ağların döndürülmesi gereken kullanıcı kimliği. |

### Versiyon {#since}

- 2.0.0
### Kaynak {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) dosyasında 688. satırda tanımlanmıştır.
