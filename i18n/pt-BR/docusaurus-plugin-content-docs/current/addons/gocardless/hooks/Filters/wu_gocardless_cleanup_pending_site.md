---
id: wu_gocardless_cleanup_pending_site
title: Filtro - wu_gococardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

É acionado antes de excluir um site pendente órfão de uma assinatura GoCardless cancelada.

Retorne `false` deste filtro para impedir a exclusão.

## Parâmetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID do blog WordPress do site pendente. |
| $membership | `\WP_Ultimo\Models\Membership` | A assinatura cancelada. |
| $old_status | `string` | O status antes do cancelamento. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) na linha 1086
