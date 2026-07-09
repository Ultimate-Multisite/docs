---
id: move_site
title: Action - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Eylem: move_site {#action-movesite}

Bir site yeni bir ağa taşındıktan sonra tetiklenir.

## Parametreler {#parameters}

| Adı | Türü | Açıklama |
|------|------|-------------|
| $site_id | `int` | Taşınan sitenin kimliği (ID). |
| $old_network_id | `int` | Sitenin orijinal ağ kimliği. |
| $new_network_id | `int` | Sitenin taşındığı yeni ağ kimliği. |

### Versiyon {#since}

- 1.3.0
### Kaynak {#source}

[`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) dosyasında 1587. satırda tanımlanmıştır.
