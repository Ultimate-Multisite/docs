---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew {#action-wumembershipprerenew}

የየብሳር ጊዜው ከመታደስ በፊት የሚፈጸም ተግባር።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | ሊቀመጥ የሚገባው አዲስ የየብሳር ቀን። |
| $membership_id | `int` | የየብሳሩ መለያ ቁጥር (ID)። |
| $membership | `\Membership` | የየብሳር ዕቃ (object)። |

### ከ {#since}

- 2.0
### ምንጭ {#source}

በ[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) በ2204ኛው መስመር ተገልጿል
