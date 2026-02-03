---
id: wu_membership_pre_renew
title: Acción - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Acción: wu_membership_pre_renew

Dispara antes de la renovación de la membresía.

## Parameters

| Name | Type | Descripción |
|------|------|-------------|
| $expiration | `string` | Nueva fecha de expiración que se establecerá. |
| $membership_id | `int` | El ID de la membresía. |
| $membership | `\Membership` | Objeto de membresía. |

### Since

- 2.0

### Source

Definido en [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) at line 2204
