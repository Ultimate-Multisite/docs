---
id: wu_membership_post_cancel
title: Acción - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Acción: wu_membership_post_cancel

Se dispara después de que la membresía sea cancelada.

Esto dispara el correo electrónico de cancelación.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $membership_id | `int` | El ID de la membresía. |
| $membership | `\WP_Ultimo\Models\Membership` | Objeto de membresía. |

### Desde

- 2.0

### Fuente

Definido en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) en la línea 2290
