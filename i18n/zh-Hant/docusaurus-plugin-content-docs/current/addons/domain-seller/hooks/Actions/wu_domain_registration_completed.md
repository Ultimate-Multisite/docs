---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

當網域成功註冊後會觸發此 Action。

## 參數

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 觸發註冊的付款資訊。 |
| $registration_data | `array<string,mixed>` | 註冊的元資料（包含 domain_name、provider_id、years、expiry_date 等）。 |
| $result | `array<string,mixed>` | 註冊商回傳的原始結果陣列。 |

### 適用版本

- 2.0.0
### 來源

定義於 [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) 第 1204 行
