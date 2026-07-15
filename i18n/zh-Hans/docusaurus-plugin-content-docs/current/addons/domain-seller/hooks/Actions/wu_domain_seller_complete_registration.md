---
id: wu_domain_seller_complete_registration
title: 动作 - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# 动作: wu_domain_seller_complete_registration

当付款状态转换到需要触发域名注册的状态时触发。

## 参数 {#parameters}

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | 付款对象。 |
| $old_status | `string` | 转换前的原始付款状态。 |

### 自 {#since}

- 2.0.0
### 来源 {#source}

定义在 [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) 的第 266 行
