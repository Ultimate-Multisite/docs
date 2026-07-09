---
id: networks_pre_user_is_network_admin
title: Filter - networks_pre_user_is_network_admin
sidebar_label: networks_pre_user_is_network_admin
_i18n_hash: f8e04e42fb6f7c1f20a1280c46bf53b5
---
# Filter: networks_pre_user_is_network_admin {#filter-networkspreuserisnetworkadmin}

Memfilter jaringan tempat pengguna adalah administratornya, untuk melewati proses normal.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $ | `array\|bool\|null` | Daftar ID jaringan atau *false*. Apa pun selain *null* akan melewati proses. |
| $ | `int` | ID pengguna untuk jaringan yang harus dikembalikan. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L688) pada baris 688
