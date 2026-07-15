---
id: wu_domain_transfer_completed
title: 動作 - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Action: wu_domain_transfer_completed

在網域轉移完成後觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | 網域物件。 |
| $transfer_data | `array` | 轉移完成資料。 |

### 自 {#since}

- 2.1.0
### 來源 {#source}

定義於 [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) 的第 690 行
