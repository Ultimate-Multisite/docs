---
id: move_site
title: Акција - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Се активира откако локација е преместена во нова мрежа.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID на локацијата што е преместена. |
| $old_network_id | `int` | ID на оригиналната мрежа за локацијата. |
| $new_network_id | `int` | ID на мрежата во која локацијата е преместена. |

### Од {#since}

- 1.3.0
### Извор {#source}

Дефинирано во [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) на линија 1587
