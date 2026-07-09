---
id: wu_membership_post_renew
title: Acción - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Acción: wu_membership_post_renew {#action-wumembershippostrenew}

Desencadéase despois da renovación da membresía.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $expiration | `string` | Nova data de caducidade que se vai establecer. |
| $membership_id | `int` | O ID da membresía. |
| $membership | `\Membership` | Obxecto de membresía. |

### Desde {#since}

- 2.0
### Fonte {#source}

Definido en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) na liña 2235
