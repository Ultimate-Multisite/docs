---
id: wu_membership_post_renew
title: Действие - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

Triggers after the membership renewal.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Новая дата истечения срока, которую нужно установить. |
| $membership_id | `int` | ID членства. |
| $membership | `\Membership` | Объект членства. |

### Since

- 2.0
### Source

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) at line 2235
