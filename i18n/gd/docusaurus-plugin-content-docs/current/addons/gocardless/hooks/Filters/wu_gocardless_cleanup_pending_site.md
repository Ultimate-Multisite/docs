---
id: wu_gocardless_cleanup_pending_site
title: Criathrag - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Thèid a chur an gnìomh mus tèid site ri feitheamh dìlleachdach airson membership GoCardless a chaidh a chur dheth a sguabadh às.

Till false bhon filter seo gus casg a chur air sguabadh às.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $blog_id | `int` | ID blog WordPress den site ri feitheamh. |
| $membership | `\WP_Ultimo\Models\Membership` | Am membership a chaidh a chur dheth. |
| $old_status | `string` | An status mus deach a chur dheth. |

### Bho {#since}

- 2.0.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) aig loidhne 1086
