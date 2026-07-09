---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Gëtt ausgeléist, ier eng verwaist ausstoend Site fir eng annuléiert GoCardless Memberschaft geläscht gëtt.

Gëff false vun dësem Filter zréck, fir d'Läsche ze verhënneren.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $blog_id | `int` | WordPress Blog-ID vun der ausstoender Site. |
| $membership | `\WP_Ultimo\Models\Membership` | Déi annuléiert Memberschaft. |
| $old_status | `string` | De Status virun der Annulatioun. |

### Zënter

- 2.0.0
### Quell

Definéiert an [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) bei Zeil 1086
