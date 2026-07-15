---
id: wu_gocardless_cleanup_pending_site
title: Filtër - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Aktivizohet para fshirjes së një siti në pritje jetim për një anëtarësim GoCardless të anuluar.

Ktheni false nga ky filter për të parandaluar fshirjen.

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID-ja e blogut WordPress e sitit në pritje. |
| $membership | `\WP_Ultimo\Models\Membership` | Anëtarësimi i anuluar. |
| $old_status | `string` | Statusi para anulimit. |

### Që prej {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) në rreshtin 1086
