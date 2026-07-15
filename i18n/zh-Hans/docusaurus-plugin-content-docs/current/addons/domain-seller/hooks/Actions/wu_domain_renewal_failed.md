---
id: wu_domain_renewal_failed
title: 操作 - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# 动作: wu_domain_renewal_failed

在域名续费尝试失败后触发。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 触发续费的支付记录。 |
| $renewal_data | `array<string,mixed>` | 续费元数据（包含域名名称、年限等）。 |
| $error_message | `string` | 注册商返回的、人类可读的错误信息。 |

### 自 {#since}

- 2.0.0
### 来源 {#source}

在 [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) 的第 630 行定义。
