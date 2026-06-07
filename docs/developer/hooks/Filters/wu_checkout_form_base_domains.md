---
id: wu_checkout_form_base_domains
title: "Filter - wu_checkout_form_base_domains"
sidebar_label: "wu_checkout_form_base_domains"
---

# Filter: wu_checkout_form_base_domains

Filters shared checkout-form base domains that should not become mapped-domain records.

Use this filter when an integration provides additional base domains for checkout form **Site URL** fields. Domains returned by this filter are treated as shared registration hosts instead of per-site custom domains.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Shared base domains collected from checkout form configuration. |

### Since

- 2.13.0

### Source

Defined in `inc/functions/domain.php`.


## Returns

Array of normalized checkout-form base domains.
