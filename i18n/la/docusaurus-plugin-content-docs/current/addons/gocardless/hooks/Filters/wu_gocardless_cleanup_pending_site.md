---
id: wu_gocardless_cleanup_pending_site
title: Filtrum - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtrum: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Excitatur ante deletionem situs pendentis orbi pro societate GoCardless cancellata.

Redde false ex hoc filtro ut deletionem impediat.

## Parametri {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $blog_id | `int` | WordPress blog ID situs pendentis. |
| $membership | `\WP_Ultimo\Models\Membership` | Societas cancellata. |
| $old_status | `string` | Status ante cancellationem. |

### Ex quo {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) linea 1086
