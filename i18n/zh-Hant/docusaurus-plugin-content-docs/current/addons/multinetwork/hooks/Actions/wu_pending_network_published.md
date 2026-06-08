---
id: wu_pending_network_published
title: Action - wu_pending_network_published
sidebar_label: wu_pending_network_published
_i18n_hash: 2cd5b02aa4fa11d92610bf2952f4b1f6
---
# 動作：wu_pending_network_published

當一個待處理的網路（pending network）被發佈後會觸發此動作。

## 參數

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $network | `\WP_Ultimo\Models\Network` | 已建立的網路物件。 |
| $membership | `\WP_Ultimo\Models\Membership` | 會員資料物件。 |
| $pending_network | `array` | 原始的待處理網路資料陣列。 |

### 來源

定義於 [`inc/functions/network.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multinetwork/blob/main/inc/functions/network.php#L1815) 的第 1815 行。
