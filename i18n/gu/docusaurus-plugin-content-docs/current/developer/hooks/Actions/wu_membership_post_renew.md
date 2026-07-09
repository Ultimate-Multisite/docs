---
id: wu_membership_post_renew
title: ક્રિયા - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

મેમ્બરશિપ રિન્યુઅલ થયા પછી આ એક્શન ટ્રિગર થાય છે.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | જે નવી એક્સપાયરેશન તારીખ સેટ કરવાની છે. |
| $membership_id | `int` | મેમ્બરશિપની ID. |
| $membership | `\Membership` | મેમ્બરશિપ ઓબ્જેક્ટ. |

### Since {#since}

- 2.0
### Source {#source}

Defined in [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) at line 2235
