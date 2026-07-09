---
id: move_site
title: Hành động - move_site
sidebar_label: move_site
_i18n_hash: 253e7e4db7ca08022f52fb12a14907b6
---
# Action: move_site {#action-movesite}

Được kích hoạt sau khi một trang web được chuyển sang một mạng lưới (network) mới.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $site_id | `int` | ID của trang web đã được chuyển. |
| $old_network_id | `int` | ID của mạng lưới ban đầu của trang web. |
| $new_network_id | `int` | ID của mạng lưới mà trang web đã được chuyển đến. |

### Since {#since}

- 1.3.0
### Source {#source}

Được định nghĩa trong [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1587) tại dòng 1587
