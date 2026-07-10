---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

在域名註冊嘗試失敗後觸發。

## 參數 {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 觸發註冊的付款資訊。 |
| $registration_data | `array&lt;string,mixed&gt;` | 包含 status=failed 和 error_message 的註冊元數據。 |
| $error_message | `string` | 來自註冊商的可讀錯誤訊息。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) 第 1250 行
