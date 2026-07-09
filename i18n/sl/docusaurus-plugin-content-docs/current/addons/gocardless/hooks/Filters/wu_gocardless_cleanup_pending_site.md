---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Sproži se pred brisanjem osirotelega čakajočega spletnega mesta za preklicano GoCardless članstvo.

Vrnite false iz tega filterja, da preprečite brisanje.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID čakajočega spletnega mesta. |
| $membership | `\WP_Ultimo\Models\Membership` | Preklicano članstvo. |
| $old_status | `string` | Stanje pred preklicem. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) v vrstici 1086
