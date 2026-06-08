---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Pokreće se prije brisanja nevezanog privremenog sajta za otkazano GoCardless članstvo.

Vratite `false` iz ovog filtra kako biste spriječili brisanje.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID WordPress bloga nevezanog/privremenog sajta. |
| $membership | `\WP_Ultimo\Models\Membership` | Otkazano članstvo. |
| $old_status | `string` | Status prije otkazivanja. |

### Since

- 2.0.0
### Source

Defined in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) at line 1086
