---
id: wu_pending_network_published
title: Hành động - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# Action: wu_pending_network_published

Nó được kích hoạt sau khi một mạng lưới đang chờ (pending network) được xuất bản.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | Mạng lưới đã được tạo. |
| $membership | `\WP_Ultimo\Models\Membership` | Thông tin thành viên. |
| $pending_network | `array` | Dữ liệu mạng lưới đang chờ ban đầu. |

### Source {#source}

Được định nghĩa tại [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) ở dòng 1815
