---
id: wu_gocardless_cleanup_pending_site
title: Piltro - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Moandar sa wala pa tangtanga ang usa ka nahimulag nga naghulat nga site alang sa gikanselar nga GoCardless membership.

Ibalik ang false gikan niini nga filter aron mapugngan ang pagtangtang.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID sa naghulat nga site. |
| $membership | `\WP_Ultimo\Models\Membership` | Ang gikanselar nga membership. |
| $old_status | `string` | Ang status sa wala pa ang pagkanselar. |

### Sukad {#since}

- 2.0.0
### Gigikanan {#source}

Gihubit sa [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) sa linya 1086
