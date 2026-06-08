---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Dipicu sebelum proses pembaharuan keahlian berlaku.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Tarikh luput baharu yang akan ditetapkan. |
| $membership_id | `int` | ID keahlian yang terlibat. |
| $membership | `\Membership` | Objek keahlian. |

### Since

- 2.0
### Source

Didefinisikan dalam [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) pada baris 2204
