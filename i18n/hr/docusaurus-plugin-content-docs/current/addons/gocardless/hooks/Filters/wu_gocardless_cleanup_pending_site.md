---
id: wu_gocardless_cleanup_pending_site
title: Filtar - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Pokreće se prije brisanja napuštenog sitea na čekanju za otkazano GoCardless članstvo.

Vratite false iz ovog filtera kako biste spriječili brisanje.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID sitea na čekanju. |
| $membership | `\WP_Ultimo\Models\Membership` | Otkazano članstvo. |
| $old_status | `string` | Status prije otkazivanja. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) u retku 1086
