---
id: wu_membership_post_renew
title: Acción - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Se activa después de la renovación de la membership.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $expiration | `string` | New expiration date to be set. |
| $membership_id | `int` | The ID of the membership. |
| $membership | `\Membership` | Membership object. |

### Desde {#since}

- 2.0
### Fuente {#source}

Definido en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) en la línea 2235
