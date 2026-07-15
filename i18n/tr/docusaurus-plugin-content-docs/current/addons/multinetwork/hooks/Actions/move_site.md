---
id: move_site
title: Eylem - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site

Bir site yeni bir ağa taşındıktan sonra tetiklenir.

## Parametreler {#parameters}

| Ad | Tür | Açıklama |
|------|------|-------------|
| $site_id | `int` | Taşınan sitenin kimliği. |
| $old_network_id | `int` | Sitenin orijinal ağ kimliği. |
| $new_network_id | `int` | Sitenin taşındığı ağın kimliği. |

### Versiyon {#since}

- 1.3.0
### Kaynak {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) dosyasının 1587. satırında tanımlanmıştır.
