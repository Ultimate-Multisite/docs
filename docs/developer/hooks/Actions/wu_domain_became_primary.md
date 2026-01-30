---
id: wu_domain_became_primary
title: "Action - wu_domain_became_primary"
sidebar_label: "wu_domain_became_primary"
---

# Action: wu_domain_became_primary

Fires when a domain becomes the primary domain for a site.

This action is triggered when a domain's primary_domain flag is set to true, either when creating a new primary domain or when updating an existing domain to become primary.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | The domain that became primary. |
| $blog_id | `int` | The blog ID of the affected site. |
| $was_new | `bool` | Whether this is a newly created domain. |

### Since

- 2.0.0
### Source

Defined in [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560) at line 560

