---
id: wu_domain_seller_complete_registration
title: 動作 - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

當支付狀態轉換到應觸發網域註冊的狀態時觸發。

## 參數 {#parameters}

| 名稱 | 類型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 支付物件。 |
| $old_status | `string` | 轉換前的先前支付狀態。 |

### 從版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) 第 266 行
