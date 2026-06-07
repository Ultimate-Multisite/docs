---
id: wu_should_create_domain_record_for_site
title: "Filter - wu_should_create_domain_record_for_site"
sidebar_label: "wu_should_create_domain_record_for_site"
---

# Filter: wu_should_create_domain_record_for_site

Filters whether Ultimate Multisite should create a domain record for a newly created site.

Use this filter to suppress or defer automatic domain-record creation for sites that use a shared checkout-form base domain, an internal host, or a domain that another integration will manage separately.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $create | `bool` | Whether the domain record should be created. |
| $site | `WP_Site` | The newly created site object. |

### Since

- 2.13.0

### Source

Defined in `inc/functions/domain.php`.


## Returns

Boolean indicating whether to create the domain record.
