---
id: wu_gocardless_cleanup_pending_site
title: Saringan - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Mlaku sadurunge mbusak site pending yatim kanggo membership GoCardless sing dibatalake.

Balekna false saka filter iki kanggo nyegah pambusakan.

## Parameter {#parameters}

| Name | Type | Katrangan |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress saka site pending. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership sing dibatalake. |
| $old_status | `string` | Status sadurunge pembatalan. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditetepake ing [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ing baris 1086
