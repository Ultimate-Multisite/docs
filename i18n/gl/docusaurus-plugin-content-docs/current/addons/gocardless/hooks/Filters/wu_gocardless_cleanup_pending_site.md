---
id: wu_gocardless_cleanup_pending_site
title: Filtro - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filtro: wu_gocardless_cleanup_pending_site

Dispárase antes de eliminar un sitio pendente orfo dunha subscrición de GoCardless cancelada.

Devolve false desde este filtro para evitar a eliminación.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $blog_id | `int` | ID do blog de WordPress do sitio pendente. |
| $membership | `\WP_Ultimo\Models\Membership` | A subscrición cancelada. |
| $old_status | `string` | O estado antes da cancelación. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) na liña 1086
