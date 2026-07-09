---
id: wu_gocardless_cleanup_pending_site
title: Filtru - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtru: wu_gocardless_cleanup_pending_site

Jitħaddem qabel ma jitħassar sit pendenti orfni għal sħubija GoCardless ikkanċellata.

Irritorna false minn dan il-filtru biex tevita t-tħassir.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $blog_id | `int` | ID tal-blog WordPress tas-sit pendenti. |
| $membership | `\WP_Ultimo\Models\Membership` | Is-sħubija kkanċellata. |
| $old_status | `string` | L-istatus qabel il-kanċellazzjoni. |

### Minn

- 2.0.0
### Sors

Iddefinit f’[`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) fil-linja 1086
