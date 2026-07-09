---
id: move_site
title: Tindakan - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Dipanggil selepas sesebuah tapak (site) telah dipindahkan ke rangkaian (network) baharu.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $site_id | `int` | ID tapak (site) yang telah dipindahkan. |
| $old_network_id | `int` | ID rangkaian asal untuk tapak tersebut. |
| $new_network_id | `int` | ID rangkaian destinasi tempat tapak itu dipindahkan. |

### Sejak {#since}

- 1.3.0
### Sumber {#source}

Didefinisikan dalam [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) pada baris 1587
