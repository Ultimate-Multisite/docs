---
id: wu_domain_seller_search_delay
title: 過濾器 - wu_domain_seller_search_delay
sidebar_label: wu_domain_seller_search_delay
_i18n_hash: b0871b15059808a847875636d151245f
---
# Filter: wu_domain_seller_search_delay {#filter-wudomainsellersearchdelay}

用來過濾網域搜尋的防抖延遲時間（單位為毫秒）。

如果您的連線速度較慢，增加此數值可以減少 API 呼叫次數。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $delay | `int` | 防抖延遲時間，單位為毫秒。預設值為 500。 |

### Since {#since}

- 2.1.0
### Source {#source}

定義於 [`inc/checkout/signup-fields/class-signup-field-domain-selection.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/checkout/signup-fields/class-signup-field-domain-selection.php#L854) 的第 854 行
