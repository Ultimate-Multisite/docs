---
id: wu_gocardless_cleanup_pending_site
title: Hidlydd - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Hidlydd: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Yn tanio cyn dileu safle arfaethedig amddifad ar gyfer membership GoCardless a ganslwyd.

Dychwelwch false o'r hidlydd hwn i atal dileu.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress y safle arfaethedig. |
| $membership | `\WP_Ultimo\Models\Membership` | Y membership a ganslwyd. |
| $old_status | `string` | Y statws cyn canslo. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Diffinnir yn [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ar linell 1086
