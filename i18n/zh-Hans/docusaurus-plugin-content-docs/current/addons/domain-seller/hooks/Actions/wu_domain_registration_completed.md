---
id: wu_domain_registration_completed
title: 动作 - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

在域名成功注册后触发。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 触发注册的支付记录。 |
| $registration_data | `array<string,mixed>` | 注册元数据（包含 domain_name、provider_id、years、expiry_date 等）。 |
| $result | `array<string,mixed>` | 注册商返回的原始结果数组。 |

### 自 {#since}

- 2.0.0
### 来源 {#source}

定义于 [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) 的第 1204 行
