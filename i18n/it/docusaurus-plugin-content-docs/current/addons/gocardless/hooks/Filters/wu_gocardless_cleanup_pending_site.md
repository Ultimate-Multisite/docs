---
id: wu_gocardless_cleanup_pending_site
title: Filtro - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtro: wu_gocardless_cleanup_pending_site

Si attiva prima di eliminare un sito in sospeso orfano a seguito dell'annullamento di un abbonamento GoCardless.

Restituire `false` da questo filtro impedirà l'eliminazione.

## Parametri {#parameters}

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $blog_id | `int` | L'ID del blog WordPress del sito in sospeso. |
| $membership | `\WP_Ultimo\Models\Membership` | L'abbonamento annullato. |
| $old_status | `string` | Lo stato prima dell'annullamento. |

### Da {#since}

- 2.0.0
### Fonte {#source}

Definito in [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) alla riga 1086
