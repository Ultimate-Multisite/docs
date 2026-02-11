---
id: wu_membership_pre_renew
title: Ação - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Dispara antes da renovação da membership.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Nova data de expiração a ser definida. |
| $membership_id | `int` | O ID da membership. |
| $membership | `\Membership` | Objeto de membership. |

### Since

- 2.0
### Source

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) at line 2204
