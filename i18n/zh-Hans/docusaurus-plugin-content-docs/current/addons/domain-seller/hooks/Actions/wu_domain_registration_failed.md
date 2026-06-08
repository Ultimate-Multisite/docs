---
id: wu_domain_registration_failed
title: 动作 - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

在域名注册尝试失败后触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 触发注册的支付记录。 |
| $registration_data | `array<string,mixed>` | 包含 status=failed 和 error_message 的注册元数据。 |
| $error_message | `string` | 来自注册商的易于阅读的错误信息。 |

### 自

- 2.0.0
### 来源

定义在 [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) 的第 1250 行
