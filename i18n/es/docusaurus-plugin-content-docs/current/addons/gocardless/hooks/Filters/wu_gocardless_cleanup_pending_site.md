---
id: wu_gocardless_cleanup_pending_site
title: Filtro - wu_gocardless_cleanup_pending_site
sidebar_label: wu_gocardless_cleanup_pending_site
_i18n_hash: 12dc7cf40d5e91b9d4da3ea887286608
---
# Filter: wu_gococardless_cleanup_pending_site

Se ejecuta antes de eliminar un sitio pendiente huérfano debido a una membresía GoCardless cancelada.

Devuelve `false` desde este filtro para evitar la eliminación.

## Parámetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $blog_id | `int` | ID de blog de WordPress del sitio pendiente. |
| $membership | `\WP_Ultimo\Models\Membership` | La membresía cancelada. |
| $old_status | `string` | El estado antes de la cancelación. |

### Since {#since}

- 2.0.0
### Source {#source}

Definido en [`inc/gateways/class-gocardless-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-gocardless/blob/main/inc/gateways/class-gocardless-gateway.php#L1086) en la línea 1086
