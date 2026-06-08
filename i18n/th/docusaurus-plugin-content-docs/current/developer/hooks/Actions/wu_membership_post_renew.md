---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

จะทำงานหลังจากที่มีการต่ออายุสมาชิก

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | วันที่หมดอายุใหม่ที่จะถูกกำหนด |
| $membership_id | `int` | ID ของสมาชิก |
| $membership | `\Membership` | อ็อบเจกต์ของสมาชิก |

### Since

- 2.0
### Source

กำหนดไว้ใน [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) บรรทัดที่ 2235
