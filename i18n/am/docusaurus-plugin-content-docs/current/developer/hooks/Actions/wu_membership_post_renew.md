---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

የየ सदस्यता እድሳት ከተጠናቀቀ በኋላ የሚሰራ።

## ፓራሜትሮች

| ስም | አይነት | መግለጫ |
|------|------|-------------|
| $expiration | `string` | የሚቀመጥ አዲስ የየ सदस्यता የመልቀቅ ቀን። |
| $membership_id | `int` | የየ सदस्यताው መለያ ቁጥር (ID)። |
| $membership | `\Membership` | የየ सदस्यताው ነገር (object)። |

### ከምን ጊዜ ጀምሮ

- 2.0
### ምንጭ

በ[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) ፋይል ውስጥ በ2235ኛው መስመር ተገልጿል
