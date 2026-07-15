---
id: networks_user_is_network_admin
title: Filter - networks_user_is_network_admin
sidebar_label: networks_user_is_network_admin
_i18n_hash: f8e40a1c47591c0cab73d671cf681281
---
# Filter: networks_user_is_network_admin

Berfungsi untuk menyaring daftar jaringan di mana seorang pengguna bertindak sebagai administrator.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool` | Daftar ID jaringan, atau `false` jika pengguna tidak memiliki jaringan. |
| $ | `int` | ID pengguna yang jaringan-jaringannya ingin dikembalikan. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L703) pada baris 703
