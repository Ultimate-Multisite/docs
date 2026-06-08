---
id: wu_domain_seller_process_purchase
title: 操作 - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

在结账完成后，处理域名购买时触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 付款对象。 |
| $checkout_data | `array<string,mixed>` | 来自注册表单的完整结账数据。 |

### 自

- 2.0.0
### 来源

在 [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) 的第 246 行定义
