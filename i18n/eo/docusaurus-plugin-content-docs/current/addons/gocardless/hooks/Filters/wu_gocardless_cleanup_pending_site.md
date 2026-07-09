---
id: wu_gocardless_cleanup_pending_site
title: Filtrilo - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtrilo: wu_gocardless_cleanup_pending_site

Ekfunkcias antaŭ ol forigi orfan pritraktatan retejon por nuligita GoCardless membreco.

Redonu false el ĉi tiu filtrilo por malhelpi forigon.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $blog_id | `int` | WordPress blog-ID de la pritraktata retejo. |
| $membership | `\WP_Ultimo\Models\Membership` | La nuligita membreco. |
| $old_status | `string` | La stato antaŭ nuligo. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) ĉe linio 1086
