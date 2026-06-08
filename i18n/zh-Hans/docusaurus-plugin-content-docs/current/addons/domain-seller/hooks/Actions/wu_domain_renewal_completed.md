---
id: wu_domain_renewal_completed
title: 动作 - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

在域名成功续费后触发。

## 参数

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 触发续费的支付记录。 |
| $renewal_data | `array&lt;string,mixed&gt;` | 续费元数据（domain_name, years, customer_id 等）。 |
| $result | `array&lt;string,mixed&gt;` | 注册商返回的原始结果数组，包含新的到期日期（expiry_date）。 |

### 自

- 2.0.0
### 来源

定义于 [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) 第 594 行
