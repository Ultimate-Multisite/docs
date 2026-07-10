---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Käivitub enne tühistatud GoCardlessi liikmesuse orvuks jäänud ootel saidi kustutamist.

Tagasta sellest filtrist false, et kustutamist takistada.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $blog_id | `int` | Ootel saidi WordPress blogi ID. |
| $membership | `\WP_Ultimo\Models\Membership` | Tühistatud liikmesus. |
| $old_status | `string` | Staatus enne tühistamist. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) real 1086
