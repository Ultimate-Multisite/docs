---
id: wu_domain_has_correct_dns
title: "Filter - wu_domain_has_correct_dns"
sidebar_label: "wu_domain_has_correct_dns"
---

# Filter: wu_domain_has_correct_dns

Allow plugin developers to add new checks in order to define the results.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | the current result. |
| $domain | `self` | The current domain instance. |
| $domains_and_ips | `array` | The list of domains and IPs found on the DNS lookup. |

### Since

- 2.0.4
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) at line 455


## Returns
If the DNS is correctly setup or not.
