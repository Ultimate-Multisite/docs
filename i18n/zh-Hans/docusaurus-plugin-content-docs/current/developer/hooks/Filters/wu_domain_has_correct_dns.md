---
id: wu_domain_has_correct_dns
title: 过滤 - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

允许插件开发者添加新的检查，以定义结果。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | 当前结果。 |
| $domain | `self` | 当前域实例。 |
| $domains_and_ips | `array` | 在 DNS 查询中发现的域和 IP 列表。 |

### Since

- 2.0.4
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455

## Returns
DNS 是否已正确设置。
