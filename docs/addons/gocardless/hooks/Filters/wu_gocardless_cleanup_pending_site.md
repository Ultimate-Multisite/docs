---
id: wu_gocardless_cleanup_pending_site
title: "Filter - wu_gocardless_cleanup_pending_site"
sidebar_label: "wu_gocardless_cleanup_pending_site"
---

# Filter: wu_gocardless_cleanup_pending_site

Fires before deleting an orphaned pending site for a cancelled GoCardless membership.

Return false from this filter to prevent deletion.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID of the pending site. |
| $membership | `\WP_Ultimo\Models\Membership` | The cancelled membership. |
| $old_status | `string` | The status before cancellation. |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086

