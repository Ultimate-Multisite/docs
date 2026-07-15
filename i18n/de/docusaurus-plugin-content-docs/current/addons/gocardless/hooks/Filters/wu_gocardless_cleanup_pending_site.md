---
id: wu_gocardless_cleanup_pending_site
title: Filter - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gocardless_cleanup_pending_site

Wird ausgeführt, bevor eine verwaiste, ausstehende Seite gelöscht wird, die zu einer stornierten GoCardless-Mitgliedschaft gehört.

Geben Sie aus diesem Filter `false` zurück, um die Löschung zu verhindern.

## Parameter {#parameters}

| Name | Typ | Beschreibung |
|------|------|-------------|
| $blog_id | `int` | Die WordPress-Blog-ID der ausstehenden Seite. |
| $membership | `\WP_Ultimo\Models\Membership` | Die stornierte Mitgliedschaft. |
| $old_status | `string` | Der Status vor der Stornierung. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) in Zeile 1086
