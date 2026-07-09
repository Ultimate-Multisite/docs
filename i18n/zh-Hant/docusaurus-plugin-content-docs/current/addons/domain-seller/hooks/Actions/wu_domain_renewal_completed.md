---
id: wu_domain_renewal_completed
title: 動作 - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

當網域成功續訂後會觸發此動作。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 觸發續訂的付款資訊。 |
| $renewal_data | `array<string,mixed>` | 續訂的元數據（包含網域名稱、年數、客戶 ID 等）。 |
| $result | `array<string,mixed>` | 註冊商回傳的原始結果陣列，包含新的 `expiry_date`。 |

### 從版本 {#since}

- 2.0.0
### 來源 {#source}

定義於 [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) 的第 594 行
