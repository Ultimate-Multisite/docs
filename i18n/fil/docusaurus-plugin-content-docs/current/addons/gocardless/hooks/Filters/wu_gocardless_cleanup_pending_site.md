---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Gumagana bago burahin ang isang *orphaned pending site* para sa isang na-cancel na GoCardless membership.

Ibalik ang `false` mula sa filter na ito para mapigilan ang pagbura.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID ng *pending site*. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang na-cancel na membership. |
| $old_status | `string` | Ang status bago ang pagka-cancel. |

### Simula

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) sa linya 1086
