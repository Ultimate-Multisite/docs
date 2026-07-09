---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

મેમ્બરશિપના નવીકરણ પહેલાં ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | જે નવી સમાપ્તિ તારીખ (expiration date) સેટ કરવાની છે. |
| $membership_id | `int` | મેમ્બરશિપની ID. |
| $membership | `\Membership` | મેમ્બરશિપ ઓબ્જેક્ટ. |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) માં લાઇન 2204 પર વ્યાખ્યાયિત છે.
