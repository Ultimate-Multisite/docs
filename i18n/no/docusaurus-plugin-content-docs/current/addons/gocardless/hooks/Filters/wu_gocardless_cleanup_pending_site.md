---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Utløses før et foreldreløst ventende nettsted for et kansellert GoCardless-medlemskap slettes.

Returner `false` fra dette filteret for å forhindre sletting.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $blog_id | `int` | WordPress blog-ID for det ventende nettstedet. |
| $membership | `\WP_Ultimo\Models\Membership` | Det kansellerte medlemskapet. |
| $old_status | `string` | Statusen før kanselleringen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) på linje 1086
