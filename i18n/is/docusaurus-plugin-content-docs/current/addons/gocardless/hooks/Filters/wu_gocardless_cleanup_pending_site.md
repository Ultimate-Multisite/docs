---
id: wu_gocardless_cleanup_pending_site
title: Sía - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Sía: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Keyrist áður en munaðarlausri biðsíðu fyrir afturkallaða GoCardless-aðild er eytt.

Skilaðu false úr þessari síu til að koma í veg fyrir eyðingu.

## Breytur {#parameters}

| Heiti | Tegund | Lýsing |
|------|------|-------------|
| $blog_id | `int` | WordPress bloggauðkenni biðsíðunnar. |
| $membership | `\WP_Ultimo\Models\Membership` | Afturkallaða aðildin. |
| $old_status | `string` | Staðan fyrir afturköllun. |

### Síðan {#since}

- 2.0.0
### Uppruni {#source}

Skilgreint í [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) í línu 1086
