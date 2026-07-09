---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Spustí sa pred odstránením osirelého čakajúceho webu pre zrušené GoCardless členstvo.

Vráťte false z tohto filtera, aby ste zabránili odstráneniu.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID čakajúceho webu. |
| $membership | `\WP_Ultimo\Models\Membership` | Zrušené členstvo. |
| $old_status | `string` | Stav pred zrušením. |

### Od verzie

- 2.0.0
### Zdroj

Definované v [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) na riadku 1086
