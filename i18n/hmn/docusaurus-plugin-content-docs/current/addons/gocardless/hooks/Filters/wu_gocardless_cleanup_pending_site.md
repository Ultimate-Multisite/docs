---
id: wu_gocardless_cleanup_pending_site
title: Lim - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Khiav ua ntej yuav rho tawm ib lub vev xaib tos uas tsis muaj tswv lawm rau kev ua tswv cuab GoCardless uas raug tso tseg.

Xa false rov qab ntawm filter no kom tiv thaiv kev rho tawm.

## Cov parameter {#parameters}

| Lub npe | Hom | Kev piav qhia |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID ntawm lub vev xaib tos. |
| $membership | `\WP_Ultimo\Models\Membership` | Kev ua tswv cuab uas raug tso tseg. |
| $old_status | `string` | Qhov xwm txheej ua ntej kev tso tseg. |

### Txij li {#since}

- 2.0.0
### Qhov chaw {#source}

Txhais nyob rau hauv [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ntawm kab 1086
