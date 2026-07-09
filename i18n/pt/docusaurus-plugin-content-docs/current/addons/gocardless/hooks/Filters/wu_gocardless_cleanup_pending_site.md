---
id: wu_gocardless_cleanup_pending_site
title: Filtro - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtro: wu_gocardless_cleanup_pending_site {#filter-wugocardlesscleanuppendingsite}

Disparado antes de eliminar um site pendente órfão para uma membership GoCardless cancelada.

Retorne false a partir deste filtro para impedir a eliminação.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $blog_id | `int` | ID do blog WordPress do site pendente. |
| $membership | `\WP_Ultimo\Models\Membership` | A membership cancelada. |
| $old_status | `string` | O estado antes do cancelamento. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) na linha 1086
