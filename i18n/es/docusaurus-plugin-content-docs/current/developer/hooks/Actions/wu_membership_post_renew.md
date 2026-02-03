---
id: wu_membership_post_renew
title: Acción - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Acción: wu_membership_post_renew

Se activa después de la renovación de la membresía.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $expiration | `string` | Nueva fecha de expiración a establecer. |
| $membership_id | `int` | El ID de la membresía. |
| $membership | `\Membership` | Objeto de membresía. |

### Desde

- 2.0

### Fuente

Definido en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) en la línea 2235
