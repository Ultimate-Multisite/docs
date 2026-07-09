---
id: wu_domain_seller_search_delay
title: 过滤器 - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

用于过滤域名搜索的防抖延迟（单位：毫秒）。

如果您的网络连接较慢，增加此值可以减少 API 调用次数。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | 防抖延迟（单位：毫秒）。默认值为 500。 |

### Since {#since}

- 2.1.0
### Source {#source}

定义在 [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) 的第 854 行
