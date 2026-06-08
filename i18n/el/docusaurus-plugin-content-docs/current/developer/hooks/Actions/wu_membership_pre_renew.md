---
id: wu_membership_pre_renew
title: Δράση - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Εκτελείται πριν την ανανέωση της सदस्यता.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | Η νέα ημερομηνία λήξης που πρέπει να οριστεί. |
| $membership_id | `int` | Ο αναγνωριστικός αριθμός (ID) της συνδρομής. |
| $membership | `\Membership` | Το αντικείμενο (object) της συνδρομής. |

### Since

- 2.0
### Source

Ορίζεται στο [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) στην γραμμή 2204
